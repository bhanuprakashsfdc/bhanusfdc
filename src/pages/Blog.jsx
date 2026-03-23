import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { posts, categories, tags } from '../data/posts';
import AdSlot from '../components/AdSlot';

// Sidebar components
function SidebarAuthor() {
  return (
    <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-tertiary)] flex items-center justify-center text-2xl font-bold text-white">
          BP
        </div>
        <div>
          <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)]">
            Bhanu Prakash Reddy
          </h3>
          <p className="text-sm text-[var(--color-on-surface-variant)]">
            Senior Salesforce Architect
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-[var(--color-on-surface-variant)]">
        10+ years building enterprise Salesforce solutions. 16x certified. Agentforce specialist.
      </p>
      <a
        href="https://linkedin.com/in/bhanuprakashsfdc"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-secondary-container)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-secondary)] transition-colors"
      >
        <span className="material-symbols-outlined text-sm">linkedin</span>
        Connect on LinkedIn
      </a>
    </div>
  );
}

function SidebarPopularPosts() {
  const popularPosts = posts.slice(0, 5);
  
  return (
    <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6">
      <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
        Popular Posts
      </h3>
      <ul className="space-y-3">
        {popularPosts.map((post) => (
          <li key={post.id}>
            <Link 
              to={`/blog/${post.slug}.html`}
              className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors line-clamp-2"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleCategoryChange = (category) => {
    setCurrentPage(1);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Header */}
      <section className="mesh-gradient-bg py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-headline)]">
            Salesforce Blog
          </h1>
          <p className="mt-3 text-[var(--color-on-surface-variant)]">
            Deep dives on Apex, LWC, Agentforce, Flows & Architecture
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Category Filters */}
            <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4">
              <div className="flex gap-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`
                      px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap
                      ${selectedCategory === category
                        ? 'bg-[var(--color-secondary-container)] text-white'
                        : 'bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)]'
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* AdSense Slot 3 - Blog List Top */}
            <div className="mb-8">
              <AdSlot slot="blog-list-top" size="leaderboard" />
            </div>

            {/* Posts List */}
            <div className="space-y-6">
              {paginatedPosts.map((post) => (
                <article 
                  key={post.id}
                  className="flex flex-col md:flex-row gap-4 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl overflow-hidden hover:border-[var(--color-secondary)]/50 transition-colors"
                >
                  {/* Thumbnail */}
                  <Link to={`/blog/${post.slug}.html`} className="md:w-48 shrink-0">
                    <div className="aspect-video md:aspect-auto h-full bg-gradient-to-br from-[var(--color-secondary)]/30 to-[var(--color-tertiary)]/30" />
                  </Link>
                  
                  {/* Content */}
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 text-xs font-medium bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] rounded">
                          {post.category}
                        </span>
                      </div>
                      <Link to={`/blog/${post.slug}.html`}>
                        <h2 className="text-lg font-semibold text-[var(--color-on-surface)] hover:text-[var(--color-secondary)] transition-colors font-[var(--font-headline)]">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="mt-1 text-sm text-[var(--color-on-surface-variant)] line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 text-xs text-[var(--color-on-surface-variant)]">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {post.readTime} min
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.slug}.html`}
                        className="text-[var(--color-secondary)] hover:underline"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] rounded-lg hover:bg-[var(--color-surface-container-high)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`
                        w-10 h-10 rounded-lg font-medium transition-colors
                        ${currentPage === page
                          ? 'bg-[var(--color-secondary-container)] text-white'
                          : 'bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-high)]'
                        }
                      `}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] rounded-lg hover:bg-[var(--color-surface-container-high)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0 space-y-6">
            <SidebarAuthor />
            
            {/* AdSense Slot 4 - Sidebar Rectangle */}
            <AdSlot slot="sidebar-rectangle-1" size="rectangle" />
            
            <SidebarPopularPosts />
            
            {/* Tags */}
            <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6">
              <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag.name}
                    to={`/blog?tag=${encodeURIComponent(tag.name)}`}
                    className="px-3 py-1 text-xs bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-full text-[var(--color-on-surface-variant)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {tag.name} ({tag.count})
                  </Link>
                ))}
              </div>
            </div>
            
            {/* AdSense Slot 5 - Sidebar Below Tags */}
            <AdSlot slot="sidebar-rectangle-2" size="rectangle" />
          </aside>
        </div>
      </div>
    </div>
  );
}
