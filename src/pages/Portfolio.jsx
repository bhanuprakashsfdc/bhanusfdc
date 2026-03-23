import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, projectFilters } from '../data/projects';
import AdSlot from '../components/AdSlot';

// Project card
function ProjectCard({ project }) {
  const statusColors = {
    'Delivered': 'bg-emerald-500/20 text-emerald-400',
    'Open Source': 'bg-purple-500/20 text-purple-400',
    'Personal': 'bg-blue-500/20 text-blue-400'
  };

  return (
    <Link 
      to={`/portfolio/${project.slug}.html`}
      className="block bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl overflow-hidden hover:border-[var(--color-secondary)]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-900/10 transition-all"
    >
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-tertiary)]/20 relative">
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)]">
          {project.name}
        </h3>
        
        <p className="mt-2 text-sm text-[var(--color-on-surface-variant)] line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-3 flex flex-wrap gap-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-0.5 text-xs bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded text-[var(--color-on-surface-variant)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details */}
        <span className="mt-4 text-sm text-[var(--color-secondary)] font-medium flex items-center gap-1 hover:gap-2 transition-all">
          View Details
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </span>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="mesh-gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-headline)]">
            Projects & Portfolio
          </h1>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)]">
            Real-world Salesforce implementations and solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-4 py-2 text-sm font-medium rounded-lg transition-colors
                ${activeFilter === filter
                  ? 'bg-[var(--color-secondary-container)] text-white'
                  : 'bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)]'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* AdSense Slot 10 - Portfolio */}
        <div className="mb-8">
          <AdSlot slot="portfolio" size="banner" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--color-on-surface-variant)]">
              No projects found for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
