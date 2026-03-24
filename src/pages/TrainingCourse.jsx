import { useParams, Link } from 'react-router-dom';
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

export default function TrainingCourse() {
  const { slug } = useParams();
  const course = trainingCourses.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--color-on-surface)] mb-4">Course Not Found</h1>
          <Link to="/training.html" className="text-[var(--color-secondary)] hover:underline">
            ← Back to Training
          </Link>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    // Create a simple text content with course details
    const content = `
${course.name} - Course Curriculum

Duration: ${course.duration}
Level: ${course.level}

DESCRIPTION:
${course.fullDescription}

MODULES:
${course.modules.map((module, idx) => `
${idx + 1}. ${module.title}
   - ${module.topics.join('\n   - ')}
`).join('')}

CAPSTONE PROJECT:
${course.capstone}

---
Downloaded from: https://bhanuprakashsfdc.com
    `.trim();

    // Create blob and download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${course.slug}-course-outline.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="mesh-gradient-bg py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/training.html" 
            className="inline-flex items-center gap-1 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] mb-6"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Training
          </Link>
          
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-20 h-20 rounded-xl bg-[var(--color-surface)]/80 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]">
                {course.icon}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className={`px-3 py-1 text-sm font-medium rounded-full border ${levelBadgeColors[course.level]}`}>
                  {course.level}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-headline)]">
                {course.name}
              </h1>
              <div className="mt-4 flex flex-wrap gap-6 text-[var(--color-on-surface-variant)]">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">school</span>
                  {course.modules.length} Modules
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Description */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
            About This Course
          </h2>
          <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
            {course.fullDescription}
          </p>
        </section>

        {/* AdSense */}
        <div className="mb-12">
          <AdSlot slot="training-course" size="banner" />
        </div>

        {/* Course Modules */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-6">
            Course Curriculum
          </h2>
          <div className="space-y-4">
            {course.modules.map((module, idx) => (
              <div 
                key={idx}
                className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] flex items-center justify-center font-semibold shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)]">
                      {module.title}
                    </h3>
                    <ul className="mt-2 space-y-1">
                      {module.topics.map((topic, topicIdx) => (
                        <li key={topicIdx} className="flex items-start gap-2 text-sm text-[var(--color-on-surface-variant)]">
                          <span className="material-symbols-outlined text-sm text-[var(--color-secondary)] mt-0.5">check_circle</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capstone Project */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-tertiary)]/10 border border-[var(--color-secondary)]/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">workspace_premium</span>
              Capstone Project
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              {course.capstone}
            </p>
          </div>
        </section>

        {/* Download Button */}
        <section className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-secondary)] text-white font-semibold rounded-xl hover:bg-[var(--color-secondary)]/90 transition-all"
            >
              <span className="material-symbols-outlined">download</span>
              Download Course Outline (PDF)
            </button>
            <Link
              to="/contact.html"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold rounded-xl hover:bg-[var(--color-secondary)] hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">mail</span>
              Enroll Now
            </Link>
          </div>
        </section>

        {/* Related Courses */}
        <section>
          <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-6">
            Other Training Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trainingCourses
              .filter(c => c.id !== course.id)
              .slice(0, 4)
              .map((related) => (
                <Link 
                  key={related.id}
                  to={`/training/${related.slug}.html`}
                  className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-4 hover:border-[var(--color-secondary)]/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">
                      {related.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[var(--color-on-surface)]">
                        {related.name}
                      </h3>
                      <p className="text-sm text-[var(--color-on-surface-variant)]">
                        {related.duration} · {related.level}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}