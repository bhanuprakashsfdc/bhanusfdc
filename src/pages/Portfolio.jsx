import { useState } from 'react';
import { projects, projectFilters } from '../data/projects';
import AdSlot from '../components/AdSlot';

// Project card
function ProjectCard({ project, onSelect }) {
  const statusColors = {
    'Delivered': 'bg-emerald-500/20 text-emerald-400',
    'Open Source': 'bg-purple-500/20 text-purple-400',
    'Personal': 'bg-blue-500/20 text-blue-400'
  };

  return (
    <div 
      className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl overflow-hidden hover:border-[var(--color-secondary)]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-900/10 transition-all cursor-pointer"
      onClick={() => onSelect(project)}
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
        <button className="mt-4 text-sm text-[var(--color-secondary)] font-medium flex items-center gap-1 hover:gap-2 transition-all">
          View Details
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

// Project Modal
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const statusColors = {
    'Delivered': 'bg-emerald-500/20 text-emerald-400',
    'Open Source': 'bg-purple-500/20 text-purple-400',
    'Personal': 'bg-blue-500/20 text-blue-400'
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="aspect-video bg-gradient-to-br from-[var(--color-secondary)]/30 to-[var(--color-tertiary)]/30 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[var(--color-surface)]/80 rounded-full hover:bg-[var(--color-surface-container-high)] transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)]">
              {project.name}
            </h2>
            <span className={`px-3 py-1 text-sm font-medium rounded-full shrink-0 ${statusColors[project.status]}`}>
              {project.status}
            </span>
          </div>

          <p className="mt-4 text-[var(--color-on-surface-variant)]">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-6">
            <h3 className="font-semibold text-[var(--color-on-surface)] mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-lg text-[var(--color-on-surface-variant)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-6">
            <h3 className="font-semibold text-[var(--color-on-surface)] mb-3">Key Highlights</h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-[var(--color-on-surface-variant)]">
                  <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm mt-0.5">check_circle</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Year */}
          <div className="mt-6 pt-6 border-t border-[var(--color-outline-variant)]">
            <p className="text-sm text-[var(--color-on-surface-variant)]">
              Completed in {project.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

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
              onSelect={setSelectedProject} 
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

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
