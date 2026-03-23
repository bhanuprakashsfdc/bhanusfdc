import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { posts } from '../data/posts';
import { social, site } from '../data/social';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import BlogCard from '../components/BlogCard';
import AdSlot from '../components/AdSlot';
import ReadingProgress from '../components/ReadingProgress';

// Content renderer
function ContentRenderer({ content }) {
  return (
    <div className="prose prose-invert max-w-none">
      {content.map((item, index) => {
        switch (item.type) {
          case 'paragraph':
            return (
              <p key={index} className="text-[var(--color-on-surface-variant)] leading-relaxed mb-4">
                {item.text}
              </p>
            );
          
          case 'heading': {
            const HeadingTag = `h${item.level}`;
            const headingClasses = {
              2: 'text-2xl font-bold text-[var(--color-on-surface)] mt-8 mb-4 font-[var(--font-headline)]',
              3: 'text-xl font-semibold text-[var(--color-on-surface)] mt-6 mb-3 font-[var(--font-headline)]'
            };
            return (
              <HeadingTag key={index} className={headingClasses[item.level]}>
                {item.text}
              </HeadingTag>
            );
          }
          
          case 'bullet':
            return (
              <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-[var(--color-on-surface-variant)]">
                {item.items.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            );
          
          case 'numbered':
            return (
              <ol key={index} className="list-decimal list-inside space-y-2 mb-4 text-[var(--color-on-surface-variant)]">
                {item.items.map((num, i) => (
                  <li key={i}>{num}</li>
                ))}
              </ol>
            );
          
          case 'code':
            return (
              <div key={index} className="my-4">
                <pre className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-lg p-4 overflow-x-auto">
                  <code className={`language-${item.lang} font-[var(--font-code)] text-sm`}>
                    {item.code}
                  </code>
                </pre>
              </div>
            );
          
          case 'blockquote':
            return (
              <blockquote key={index} className="border-l-4 border-[var(--color-secondary)] pl-4 my-4 italic text-[var(--color-on-surface-variant)]">
                {item.text}
              </blockquote>
            );
          
          default:
            return null;
        }
      })}
    </div>
  );
}

// Share buttons
function ShareButtons({ title, slug }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = `${site.url}/blog/${slug}`;
  
  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={copyLink}
        className="flex items-center gap-1 px-3 py-1.5 text-sm bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] rounded-lg hover:bg-[var(--color-surface-container-high)] transition-colors"
      >
        <span className="material-symbols-outlined text-sm">{copied ? 'check' : 'link'}</span>
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <a
        href={linkedInShare}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-3 py-1.5 text-sm bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] rounded-lg hover:bg-[var(--color-surface-container-high)] transition-colors"
      >
        <FaLinkedin className="text-sm" />
        LinkedIn
      </a>
      <a
        href={twitterShare}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-3 py-1.5 text-sm bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] rounded-lg hover:bg-[var(--color-surface-container-high)] transition-colors"
      >
        <span className="material-symbols-outlined text-sm">tag</span>
        Twitter
      </a>
    </div>
  );
}

// Sidebar components (reused from Blog)
function SidebarAuthor({ author }) {
  return (
    <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6">
      <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
        About the Author
      </h3>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-tertiary)] flex items-center justify-center text-sm font-bold text-white">
          {author.avatar}
        </div>
        <div>
          <h4 className="font-medium text-[var(--color-on-surface)]">
            {author.name}
          </h4>
          <p className="text-sm text-[var(--color-on-surface-variant)]">
            {author.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  const [isAdInserted, setIsAdInserted] = useState(false);

  useEffect(() => {
    // Reset ad insertion state when slug changes
    setIsAdInserted(false);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--color-on-surface)]">Post not found</h1>
          <Link to="/blog.html" className="mt-4 text-[var(--color-secondary)] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Insert ad after 3rd paragraph
  const renderContentWithAd = () => {
    const contentElements = [];
    let paragraphCount = 0;

    post.content.forEach((item, index) => {
      contentElements.push(
        <ContentRenderer key={index} content={[item]} />
      );
      
      // Count paragraphs and insert ad after 3rd paragraph
      if (item.type === 'paragraph' && !isAdInserted) {
        paragraphCount++;
        if (paragraphCount === 3) {
          contentElements.push(
            <div key={`ad-${index}`} className="my-8">
              <AdSlot slot="in-article" size="in-article" />
            </div>
          );
          setIsAdInserted(true);
        }
      }
    });

    return contentElements;
  };

  return (
    <>
      <ReadingProgress slug={slug} />
      
      <div className="min-h-screen bg-[var(--color-background)]">
        {/* Article Header */}
        <header className="mesh-gradient-bg py-12">
          <div className="max-w-4xl mx-auto px-4">
            {/* Breadcrumb */}
            <Link 
              to="/blog.html" 
              className="inline-flex items-center gap-1 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] mb-4"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Blog
            </Link>

            {/* Category Badge */}
            <span className="inline-block px-3 py-1 text-sm font-medium bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] rounded-lg mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold text-white font-[var(--font-headline)]">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--color-on-surface-variant)]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-tertiary)] flex items-center justify-center text-sm font-bold text-white">
                  {post.author.avatar}
                </div>
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {post.readTime} min read
              </span>
            </div>

            {/* Share Buttons */}
            <div className="mt-6">
              <ShareButtons title={post.title} slug={slug} />
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Article */}
            <article className="flex-1">
              {/* Featured Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-tertiary)]/20 rounded-xl mb-8" />

              {/* Content */}
              <div className="prose-invert max-w-none">
                {renderContentWithAd()}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-[var(--color-outline-variant)]">
                <h3 className="text-sm font-semibold text-[var(--color-on-surface)] mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 text-sm bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-full text-[var(--color-on-surface-variant)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author Card */}
              <div className="mt-8 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-tertiary)] flex items-center justify-center text-2xl font-bold text-white">
                    {post.author.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)]">
                      {post.author.name}
                    </h4>
                    <p className="text-sm text-[var(--color-on-surface-variant)]">
                      {post.author.role}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
                      Salesforce Architect with 10+ years experience and 16 certifications. 
                      Expert in Agentforce, LWC, Apex, and enterprise architecture.
                    </p>
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--color-secondary)] hover:underline"
                    >
                      View all posts →
                    </a>
                  </div>
                </div>
              </div>

              {/* AdSense Slot 7 - Post Bottom */}
              <div className="mt-8">
                <AdSlot slot="post-bottom" size="banner" />
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-6">
                    Related Posts
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <BlogCard key={relatedPost.id} post={relatedPost} />
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0 space-y-6">
              <SidebarAuthor author={post.author} />
              <AdSlot slot="sidebar-rectangle-3" size="rectangle" />
              
              {/* Popular Posts */}
              <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6">
                <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                  Popular Posts
                </h3>
                <ul className="space-y-3">
                  {posts.slice(0, 5).map((p) => (
                    <li key={p.id}>
                      <Link 
                        to={`/blog/${p.slug}.html`}
                        className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors line-clamp-2"
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <AdSlot slot="sidebar-rectangle-4" size="rectangle" />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
