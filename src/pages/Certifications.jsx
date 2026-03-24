import { useState } from 'react';
import { useCounter } from '../hooks/useLocalStorage';
import { certifications, certificationStats } from '../data/certifications';
import AdSlot from '../components/AdSlot';

// Certification card with flip effect
function CertCard({ cert, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="cert-card perspective-1000 h-80 cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`cert-card-inner preserve-3d relative w-full h-full ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute backface-hidden inset-0 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-4 flex flex-col items-center justify-center backface-hidden">
          {/* Cert Icon - Larger and full image */}
          <div className="w-full h-48 rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
            <img src={`/src/assets/Certifications/${cert.image}`} alt={cert.shortName} className="w-full h-full object-contain" />
          </div>
          
          {/* Click hint */}
          <p className="mt-2 text-xs text-[var(--color-on-surface-variant)]">
            Click to see details →
          </p>
        </div>
        
        {/* Back */}
        <div className="absolute backface-hidden inset-0 bg-[var(--color-surface-container-high)] border border-[var(--color-secondary)]/50 rounded-xl p-6 flex flex-col items-center justify-center rotate-y-180">
          <h3 className="text-lg font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)] text-center mb-4">
            {cert.name}
          </h3>
          <p className="text-sm text-[var(--color-on-surface-variant)] text-center">
            {cert.description}
          </p>
          <a 
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 text-sm bg-[var(--color-secondary-container)] text-white rounded-lg hover:bg-[var(--color-secondary)] transition-colors inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined">verified</span>
            Verify on Trailhead
          </a>
          <button 
            className="mt-2 px-4 py-2 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            Flip Back
          </button>
        </div>
      </div>
    </div>
  );
}

// Stats component
function CertStats() {
  const totalCerts = useCounter(16, 2000);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-4 text-center">
        <div className="text-3xl font-bold text-[var(--color-secondary)] font-[var(--font-headline)]">
          {totalCerts}
        </div>
        <div className="text-sm text-[var(--color-on-surface-variant)]">
          Total Certifications
        </div>
      </div>
      <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-4 text-center">
        <div className="text-3xl font-bold text-[var(--color-tertiary)] font-[var(--font-headline)]">
          {certificationStats.developers}
        </div>
        <div className="text-sm text-[var(--color-on-surface-variant)]">
          Developers
        </div>
      </div>
      <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-4 text-center">
        <div className="text-3xl font-bold text-purple-400 font-[var(--font-headline)]">
          {certificationStats.consultants}
        </div>
        <div className="text-sm text-[var(--color-on-surface-variant)]">
          Consultants
        </div>
      </div>
      <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-4 text-center">
        <div className="text-3xl font-bold text-orange-400 font-[var(--font-headline)]">
          {certificationStats.architects}
        </div>
        <div className="text-sm text-[var(--color-on-surface-variant)]">
          Architects
        </div>
      </div>
      <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-4 text-center col-span-2 md:col-span-1">
        <div className="text-3xl font-bold text-emerald-400 font-[var(--font-headline)]">
          {certificationStats.specialists}
        </div>
        <div className="text-sm text-[var(--color-on-surface-variant)]">
          Specialists
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="mesh-gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 text-sm font-medium bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] rounded-full mb-4">
            Credentials
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-headline)]">
            16 Salesforce Certifications
          </h1>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)]">
            Validated expertise across administration, development, architecture, and consulting
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <CertStats />

        {/* Certification Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* AdSense Slot 9 - Certifications Mid */}
        <div className="mt-12">
          <AdSlot slot="certifications-mid" size="banner" />
        </div>

        {/* Verify CTA */}
        <div className="mt-12 text-center">
          <p className="text-[var(--color-on-surface-variant)] mb-4">
            Want to verify my certifications?
          </p>
          <a
            href="https://www.salesforce.com/trailblazer/bhanuprakashsfdc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary-container)] text-white font-semibold rounded-xl hover:bg-[var(--color-secondary)] transition-colors"
          >
            <span className="material-symbols-outlined">verified</span>
            Verify on Trailhead
          </a>
        </div>
      </div>
    </div>
  );
}
