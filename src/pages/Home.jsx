import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCounter, useNewsletter, useToast } from '../hooks/useLocalStorage';
import { posts } from '../data/posts';
import BlogCard from '../components/BlogCard';
import AdSlot from '../components/AdSlot';

// Typing effect component
function TypingEffect({ words, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pauseTime]);

  return (
    <span className="text-[var(--color-tertiary)]">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Stats counter component
function StatCard({ icon, number, label, suffix = '' }) {
  const count = useCounter(number, 2000);
  
  return (
    <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-4 md:p-6 text-center hover:border-[var(--color-secondary)]/50 transition-colors">
      <span className="material-symbols-outlined text-3xl text-[var(--color-secondary)] mb-2">
        {icon}
      </span>
      <div className="text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)]">
        {count}{suffix}
      </div>
      <div className="text-sm text-[var(--color-on-surface-variant)] mt-1">
        {label}
      </div>
    </div>
  );
}

// Expertise card
const expertiseCards = [
  { icon: 'architecture', title: 'Salesforce Architecture', desc: 'Enterprise-scale platform design' },
  { icon: 'web', title: 'LWC & Aura', desc: 'Modern component development' },
  { icon: 'smart_toy', title: 'Agentforce & AI', desc: 'AI-powered automation' },
  { icon: 'account_tree', title: 'Flow Builder', desc: 'Declarative automation' },
  { icon: 'code', title: 'Apex & SOQL', desc: 'Custom business logic' },
  { icon: 'sync', title: 'Integration', desc: 'MuleSoft & REST APIs' }
];

// Newsletter section
function NewsletterSection() {
  const { email, setEmail, status, message, subscribe } = useNewsletter();
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await subscribe(email);
    if (success) {
      showToast(message, 'success');
    } else {
      showToast(message, 'error');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[var(--color-primary-container)] via-[var(--color-secondary-container)] to-[var(--color-tertiary-container)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-headline)]">
          Get Salesforce insights in your inbox
        </h2>
        <p className="mt-3 text-white/80">
          Weekly tips on Agentforce, LWC, and enterprise architecture.
        </p>
        
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-[var(--color-on-background)] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-[var(--color-primary-container)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-container)] transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        
        {message && status === 'success' && (
          <p className="mt-3 text-white/90 text-sm">{message}</p>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="mesh-gradient-bg min-h-[90vh] flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-tertiary)] flex items-center justify-center text-4xl font-bold text-white font-[var(--font-headline)] shadow-2xl shadow-[var(--color-secondary)]/30">
              BP
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white font-[var(--font-headline)] tracking-tight">
            Senior Salesforce Architect
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg md:text-xl text-[var(--color-on-surface-variant)]">
            10+ Years · 16 Salesforce Certifications · Agentforce & AI Specialist
          </p>

          {/* Typing Effect */}
          <p className="mt-6 text-xl md:text-2xl font-[var(--font-headline)] font-semibold">
            <TypingEffect 
              words={['Salesforce Architect', 'Agentforce Expert', 'LWC Developer', 'Platform Designer']} 
            />
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog.html"
              className="px-8 py-3 bg-[var(--color-secondary-container)] text-white font-semibold rounded-xl hover:bg-[var(--color-secondary)] transition-all hover:scale-105"
            >
              Read My Blog
            </Link>
            <Link
              to="/portfolio.html"
              className="px-8 py-3 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold rounded-xl hover:bg-[var(--color-secondary)] hover:text-white transition-all hover:scale-105"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-[var(--color-surface-container)] -mt-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon="work_history" number={10} label="Years Experience" suffix="+" />
            <StatCard icon="verified" number={16} label="Certifications" />
            <StatCard icon="folder_copy" number={50} label="Projects Delivered" suffix="+" />
            <StatCard icon="smart_toy" number={1} label="Agentforce Ready" />
          </div>
        </div>
      </section>

      {/* AdSense Slot 1 - Home Banner */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <AdSlot slot="home-banner" size="banner" />
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)]">
            Latest from the Blog
          </h2>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
              <BlogCard key={post.id} post={post} featured />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/blog.html"
              className="inline-flex items-center gap-2 text-[var(--color-secondary)] font-medium hover:gap-3 transition-all"
            >
              View All Posts
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="py-16 bg-[var(--color-surface-container)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] text-center">
            Expertise
          </h2>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseCards.map((card, index) => (
              <div
                key={index}
                className="bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl p-6 hover:border-[var(--color-secondary)]/50 hover:shadow-lg hover:shadow-sky-900/10 transition-all group"
              >
                <span className="material-symbols-outlined text-3xl text-[var(--color-secondary)] group-hover:scale-110 transition-transform">
                  {card.icon}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)]">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-on-surface-variant)]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Slot 2 - Home Mid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <AdSlot slot="home-mid" size="banner" />
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterSection />
    </div>
  );
}
