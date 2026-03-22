import { useState, useEffect } from 'react';
import { useCounter } from '../hooks/useLocalStorage';
import { skills, skillCategories, timeline, values } from '../data/skills';
import AdSlot from '../components/AdSlot';

// Animated skill bar
function SkillBar({ skill }) {
  const [isVisible, setIsVisible] = useState(false);
  const count = useCounter(isVisible ? skill.proficiency : 0, 1500);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById(`skill-${skill.name.replace(/\s/g, '-')}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id={`skill-${skill.name.replace(/\s/g, '-')}`} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-[var(--color-on-surface)]">
          {skill.name}
        </span>
        <span className="text-sm text-[var(--color-on-surface-variant)]">
          {count}%
        </span>
      </div>
      <div className="h-2 bg-[var(--color-surface-container-high)] rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-tertiary)] rounded-full transition-all duration-1000"
          style={{ width: `${isVisible ? skill.proficiency : 0}%` }}
        />
      </div>
    </div>
  );
}

// Timeline item
function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6 hover:border-[var(--color-secondary)]/50 transition-colors">
          <h3 className="text-lg font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)]">
            {item.role}
          </h3>
          <p className="text-[var(--color-secondary)] font-medium mt-1">
            {item.company}
          </p>
          <p className="text-sm text-[var(--color-on-surface-variant)] mt-1">
            {item.period}
          </p>
          <ul className="mt-3 space-y-1">
            {item.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-[var(--color-on-surface-variant)]">
                • {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Dot */}
      <div className="hidden md:flex w-4 h-4 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--color-background)] shrink-0 z-10" />
      
      {/* Empty space */}
      <div className="hidden md:block w-1/2" />
    </div>
  );
}

// Value card
function ValueCard({ value }) {
  return (
    <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6 text-center hover:border-[var(--color-secondary)]/50 transition-colors">
      <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]">
        {value.icon}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)]">
        {value.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
        {value.description}
      </p>
    </div>
  );
}

// Skills section grouped by category
function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category) => (
        <div 
          key={category.name}
          className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-xl text-[var(--color-secondary)]">
              {category.icon}
            </span>
            <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)]">
              {category.name}
            </h3>
          </div>
          {skills
            .filter((skill) => skill.category === category.name)
            .map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const certCount = useCounter(16, 2000);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="mesh-gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-tertiary)] flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-[var(--color-secondary)]/30">
            BP
          </div>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-white font-[var(--font-headline)]">
            About Me
          </h1>
          <p className="mt-3 text-lg text-[var(--color-on-surface-variant)]">
            Senior Salesforce Architect & Technical Lead
          </p>
          <p className="mt-2 text-[var(--color-secondary)]">
            {certCount}+ Certifications · 10+ Years Experience
          </p>
        </div>
      </section>

      {/* Professional Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-6">
            My Journey
          </h2>
          <div className="space-y-4 text-[var(--color-on-surface-variant)] leading-relaxed">
            <p>
              My journey with Salesforce began in 2014 when I first discovered the platform while working as a software developer. 
              I was immediately fascinated by the power of declarative development and how quickly one could build enterprise-grade 
              applications without writing code. That fascination grew into a passion, and I have been specializing in Salesforce ever since.
            </p>
            <p>
              Over the past decade, I've had the privilege of working with Fortune 500 companies across healthcare, financial services, 
              and manufacturing industries. As a Senior Salesforce Architect, I focus on designing scalable solutions that not only 
              meet immediate business needs but also lay the foundation for future growth. My expertise spans the entire Salesforce 
              ecosystem, from Sales Cloud and Service Cloud to the latest Agentforce and Data Cloud technologies.
            </p>
            <p>
              I believe in continuous learning and knowledge sharing. With 16 Salesforce certifications and counting, I am committed 
              to staying at the forefront of Salesforce innovation. Through this blog, I aim to share practical insights, 
              best practices, and real-world solutions that help other Salesforce professionals elevate their work.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-[var(--color-surface-container)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] text-center mb-4">
            Skills & Expertise
          </h2>
          <p className="text-center text-[var(--color-on-surface-variant)] mb-8">
            Technical skills refined through years of enterprise implementation
          </p>
          <SkillsGrid />
        </div>
      </section>

      {/* AdSense Slot 8 - About Page Mid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <AdSlot slot="about-mid" size="banner" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] text-center mb-12">
            Career Timeline
          </h2>
          
          <div className="relative">
            {/* Timeline line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-outline-variant)] -translate-x-1/2" />
            
            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[var(--color-surface-container)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] text-center mb-12">
            My Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
