import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import AdSlot from '../components/AdSlot';

export default function PortfolioProject() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--color-on-surface)] mb-4">Project Not Found</h1>
          <Link to="/portfolio.html" className="text-[var(--color-secondary)] hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const statusColors = {
    'Delivered': 'bg-emerald-500/20 text-emerald-400',
    'Open Source': 'bg-purple-500/20 text-purple-400',
    'Personal': 'bg-blue-500/20 text-blue-400'
  };

  // Find related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="mesh-gradient-bg py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/portfolio.html" 
            className="inline-flex items-center gap-1 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] mb-6"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Portfolio
          </Link>
          
          {/* Header Image */}
          <div className="aspect-video bg-gradient-to-br from-[var(--color-secondary)]/30 to-[var(--color-tertiary)]/30 rounded-xl mb-6" />
          
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${statusColors[project.status]}`}>
                {project.status}
              </span>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white font-[var(--font-headline)]">
                {project.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Description */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
            Overview
          </h2>
          <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* AdSense Slot */}
        <div className="mb-12">
          <AdSlot slot="portfolio-project" size="banner" />
        </div>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-lg text-[var(--color-on-surface-variant)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Key Highlights */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
            Key Highlights
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--color-on-surface-variant)]">
                <span className="material-symbols-outlined text-[var(--color-secondary)] mt-0.5">check_circle</span>
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        {/* Year */}
        <section className="pt-8 border-t border-[var(--color-outline-variant)]">
          <p className="text-[var(--color-on-surface-variant)]">
            <span className="font-medium">Project Year:</span> {project.year}
          </p>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-6">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link 
                  key={related.id}
                  to={`/portfolio/${related.slug}.html`}
                  className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl overflow-hidden hover:border-[var(--color-secondary)]/50 transition-colors"
                >
                  <div className="aspect-video bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-tertiary)]/20" />
                  <div className="p-4">
                    <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)]">
                      {related.name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-on-surface-variant)] line-clamp-2">
                      {related.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}