import { Link } from 'react-router-dom';
import { trainingCourses } from '../data/training';
import { social } from '../data/social';
import AdSlot from '../components/AdSlot';

const levelColors = {
  'Beginner': 'bg-green-500/20 text-green-400',
  'Intermediate': 'bg-yellow-500/20 text-yellow-400',
  'Advanced': 'bg-red-500/20 text-red-400'
};

const levelBadgeColors = {
  'Beginner': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Intermediate': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Advanced': 'bg-red-500/20 text-red-400 border-red-500/30'
};

export default function Training() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="mesh-gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-headline)]">
            Salesforce Training
          </h1>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)]">
            Expert-led training programs for Salesforce Industry Clouds
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* AdSense Slot */}
        <div className="mb-8">
          <AdSlot slot="training" size="banner" />
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingCourses.map((course) => (
            <Link 
              key={course.id}
              to={`/training/${course.slug}.html`}
              className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl overflow-hidden hover:border-[var(--color-secondary)]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-900/10 transition-all"
            >
              {/* Image */}
              <div className="aspect-video bg-[var(--color-surface)] relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${levelBadgeColors[course.level]}`}>
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)] text-lg">
                  {course.name}
                </h3>
                
                <p className="mt-2 text-sm text-[var(--color-on-surface-variant)] line-clamp-2">
                  {course.description}
                </p>

                {/* Duration & Level */}
                <div className="mt-4 flex items-center gap-4 text-sm text-[var(--color-on-surface-variant)]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">school</span>
                    {course.modules.length} Modules
                  </span>
                </div>

                {/* Learn More */}
                <div className="mt-4 pt-4 border-t border-[var(--color-outline-variant)]">
                  <span className="text-sm text-[var(--color-secondary)] font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    View Course Details
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {trainingCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--color-on-surface-variant)]">
              No training courses available at the moment.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)]">
            Need Custom Training?
          </h2>
          <p className="mt-2 text-[var(--color-on-surface-variant)]">
            Looking for personalized training or corporate workshops? Let's connect to discuss your needs.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact.html"
              className="px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-xl hover:bg-[var(--color-secondary)]/90 transition-all"
            >
              Contact Me
            </Link>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold rounded-xl hover:bg-[var(--color-secondary)] hover:text-white transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}