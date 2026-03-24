import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { interviewTopics } from '../data/interview';
import { social } from '../data/social';
import AIChatModal from '../components/AIChatModal';

export default function InterviewTopic() {
  const { slug } = useParams();
  const topic = interviewTopics.find(t => t.slug === slug);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatContext, setChatContext] = useState('');

  // SEO Meta tags
  useEffect(() => {
    if (topic) {
      document.title = `${topic.title} Interview Questions | Salesforce Interview Prep`;
      
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = `Prepare for your ${topic.title} interview with these expert-level questions and answers. Master ${topic.title.toLowerCase()} concepts for Salesforce certification and job interviews.`;

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = topic.keywords;

      // Update canonical link
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://bhanuprakashsfdc.com/interview/${topic.slug}.html`;

      // Add structured data for SEO
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'QAPage',
        mainEntity: {
          '@type': 'FAQPage',
          name: `${topic.title} Interview Questions`,
          description: topic.description,
          about: topic.questions.map(q => ({
            '@type': 'Question',
            name: q.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.a
            }
          }))
        }
      });
      document.head.appendChild(script);

      return () => {
        // Cleanup
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }

    // Cleanup on unmount
    return () => {
      document.title = 'Bhanu Prakash ⚡ — Salesforce Architect & Technical Lead';
    };
  }, [topic]);

  if (!topic) {
    return (
      <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--color-on-surface)] mb-4">Topic Not Found</h1>
          <Link to="/interview.html" className="text-[var(--color-secondary)] hover:underline">
            ← Back to Interview Prep
          </Link>
        </div>
      </div>
    );
  }

  const handleGenerateQuestions = () => {
    const questionsList = topic.questions.map((q, i) => `${i + 1}. ${q.q}`).join('\n');
    setChatContext(`Generate detailed interview questions and answers for ${topic.title}. Here are the key topics to cover:\n\n${questionsList}\n\nPlease provide comprehensive answers with real-world examples, code snippets where applicable, and best practices.`);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className={`py-20 bg-gradient-to-r ${topic.color}`}>
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/interview.html" 
            className="inline-flex items-center gap-1 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            All Interview Topics
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-headline)]">
            {topic.title} Interview Questions
          </h1>
          <p className="mt-4 text-lg text-white/80">
            {topic.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
              {topic.questions.length} Questions
            </span>
            <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
              Expert Level
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Generate Questions Button */}
        <div className="mb-8">
          <button
            onClick={handleGenerateQuestions}
            className="w-full md:w-auto px-8 py-4 bg-[var(--color-secondary)] text-white font-semibold rounded-xl hover:bg-[var(--color-secondary)]/90 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">auto_awesome</span>
            Generate AI-Powered Answers
          </button>
          <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
            Get detailed answers with examples and best practices
          </p>
        </div>

        {/* Questions List with Hover Answers */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-6">
            Top {topic.questions.length} Interview Questions
            <span className="text-sm font-normal text-[var(--color-on-surface-variant)] ml-2">(Hover to reveal answers)</span>
          </h2>
          {topic.questions.map((question, index) => (
            <div 
              key={index}
              className="group relative bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6 hover:border-[var(--color-secondary)]/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </span>
                <h3 className="text-lg font-medium text-[var(--color-on-surface)]">
                  {question.q}
                </h3>
              </div>
              
              {/* Answer - Hidden by default, shown on hover */}
              <div className="mt-4 pt-4 border-t border-[var(--color-outline-variant)] opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-none transition-all duration-300">
                <div className="text-[var(--color-on-surface-variant)] leading-relaxed">
                  {question.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Topics */}
        <div className="mt-12 pt-8 border-t border-[var(--color-outline-variant)]">
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-6">
            Other Interview Topics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {interviewTopics
              .filter(t => t.id !== topic.id)
              .map(t => (
                <Link
                  key={t.id}
                  to={`/interview/${t.slug}.html`}
                  className="px-4 py-2 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-lg text-sm text-[var(--color-on-surface)] hover:border-[var(--color-secondary)]/50 hover:bg-[var(--color-surface)] transition-all text-center"
                >
                  {t.title}
                </Link>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-8 text-center">
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

      {/* AI Chat Modal */}
      <AIChatModal
        isOpen={isChatOpen}
        onClose={() => {
          setIsChatOpen(false);
        }}
        initialContext={chatContext}
        title={`${topic.title} Interview Questions`}
      />
    </div>
  );
}
