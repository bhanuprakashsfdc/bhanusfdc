import { Link } from 'react-router-dom';

// Category colors
const categoryColors = {
  'Agentforce': 'from-blue-500 to-cyan-500',
  'LWC': 'from-purple-500 to-pink-500',
  'Apex': 'from-orange-500 to-red-500',
  'Flow Builder': 'from-green-500 to-emerald-500',
  'Architecture': 'from-indigo-500 to-purple-500',
  'Certifications': 'from-yellow-500 to-orange-500',
  'Integration': 'from-cyan-500 to-blue-500'
};

export default function BlogCard({ post, featured = false }) {
  const gradientClass = categoryColors[post.category] || 'from-slate-500 to-slate-600';

  return (
    <article className={`
      group bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] 
      rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-900/10 
      transition-all duration-300
      ${featured ? 'col-span-1' : ''}
    `}>
      {/* Thumbnail */}
      <Link to={`/blog/${post.slug}.html`} className="block relative">
        <div className={`
          aspect-video bg-gradient-to-br ${gradientClass} relative overflow-hidden
        `}>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute bottom-3 left-3">
            <span className="px-2 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm text-white rounded-md">
              {post.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <Link to={`/blog/${post.slug}.html`}>
          <h3 className="font-[var(--font-headline)] font-bold text-lg text-[var(--color-on-surface)] group-hover:text-[var(--color-secondary)] transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="mt-2 text-sm text-[var(--color-on-surface-variant)] line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-on-surface-variant)]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span>{post.readTime} min read</span>
          </div>
          <span>{post.date}</span>
        </div>

        {/* Read More Link */}
        <Link 
          to={`/blog/${post.slug}.html`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-secondary)] group-hover:gap-2 transition-all"
        >
          Read More
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </article>
  );
}

// Skeleton loading component
export function BlogCardSkeleton() {
  return (
    <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl overflow-hidden">
      <div className="aspect-video skeleton" />
      <div className="p-5">
        <div className="h-6 skeleton rounded w-3/4 mb-2" />
        <div className="h-4 skeleton rounded w-full mb-1" />
        <div className="h-4 skeleton rounded w-2/3 mb-4" />
        <div className="flex justify-between">
          <div className="h-3 skeleton rounded w-16" />
          <div className="h-3 skeleton rounded w-20" />
        </div>
      </div>
    </div>
  );
}
