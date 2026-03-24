import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { interviewTopics } from '../data/interview';
import { social } from '../data/social';

export default function Interview() {
  // SEO Meta tags
  useEffect(() => {
    document.title = 'Salesforce Interview Prep | Expert Interview Questions & Answers';
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Prepare for your Salesforce interview with expert-level questions and answers. Master Apex, LWC, Flow, Admin, and more with AI-powered interview preparation.';

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'salesforce interview questions, salesforce interview prep, apex interview questions, lwc interview questions, salesforce admin interview, flow builder interview, salesforce certification questions';

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://bhanuprakashsfdc.com/interview.html';

    // Cleanup on unmount
    return () => {
      document.title = 'Bhanu Prakash ⚡ — Salesforce Architect & Technical Lead';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="mesh-gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-headline)]">
            Salesforce Interview Prep
          </h1>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)]">
            Master Salesforce concepts with expert-level interview questions and AI-powered answers
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviewTopics.map((topic) => (
            <Link
              key={topic.id}
              to={`/interview/${topic.slug}.html`}
              className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl overflow-hidden hover:border-[var(--color-secondary)]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-900/10 transition-all group"
            >
              {/* Icon & Color */}
              <div className={`p-6 bg-gradient-to-br ${topic.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                <span className="material-symbols-outlined text-4xl text-white relative z-10">
                  {topic.icon}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)] text-lg">
                  {topic.title}
                </h3>
                
                <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
                  {topic.description}
                </p>

                {/* Questions Count */}
                <div className="mt-4 pt-4 border-t border-[var(--color-outline-variant)] flex items-center justify-between">
                  <span className="text-sm text-[var(--color-secondary)] font-medium flex items-center gap-1">
                    View Questions
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                  <span className="text-xs text-[var(--color-on-surface-variant)] bg-[var(--color-surface)] px-2 py-1 rounded-full">
                    {topic.questions.length} questions
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)]">
            Need More Help?
          </h2>
          <p className="mt-2 text-[var(--color-on-surface-variant)]">
            Connect with me for personalized interview preparation or mentorship
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-xl hover:bg-[var(--color-secondary)]/90 transition-all"
            >
              Connect on LinkedIn
            </a>
            <Link
              to="/contact.html"
              className="px-6 py-3 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold rounded-xl hover:bg-[var(--color-secondary)] hover:text-white transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
