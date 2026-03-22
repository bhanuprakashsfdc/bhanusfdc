import { useState } from 'react';

const sections = [
  { id: 'intro', label: 'Introduction' },
  { id: 'data-collection', label: 'Data Collection' },
  { id: 'adsense', label: 'Google AdSense' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'third-party', label: 'Third-Party Advertisers' },
  { id: 'security', label: 'Data Security' },
  { id: 'rights', label: 'Your Rights' },
  { id: 'contact', label: 'Contact Us' }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="mesh-gradient-bg py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-headline)]">
            Privacy Policy
          </h1>
          <p className="mt-2 text-[var(--color-on-surface-variant)]">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Sticky */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24">
              <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors
                      ${activeSection === section.id
                        ? 'bg-[var(--color-secondary-container)] text-white'
                        : 'text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container)]'
                      }
                    `}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-8">
            {/* Introduction */}
            <section id="intro">
              <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                Introduction
              </h2>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
                This Privacy Policy explains how Bhanu Prakash Reddy ("we," "us," or "our") collects, uses, 
                and protects your information when you visit our website bhanuprakashsfdc.com. We are committed 
                to ensuring your privacy is protected.
              </p>
            </section>

            {/* Data Collection */}
            <section id="data-collection">
              <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                Information We Collect
              </h2>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed mb-4">
                We may collect the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[var(--color-on-surface-variant)]">
                <li>Name and email address when you subscribe to our newsletter</li>
                <li>Contact information when you use our contact form</li>
                <li>Usage data and cookies to analyze website traffic</li>
                <li>Information you provide voluntarily through comments or inquiries</li>
              </ul>
            </section>

            {/* Google AdSense */}
            <section id="adsense">
              <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                Google AdSense
              </h2>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
                This website uses Google AdSense to serve advertisements. Google uses cookies to serve ads 
                based on your prior visits to this or other websites. You may opt out of personalized 
                advertising by visiting{" "}
                <a 
                  href="https://adssettings.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--color-secondary)] hover:underline"
                >
                  Google Ads Settings
                </a>.
              </p>
            </section>

            {/* Cookies */}
            <section id="cookies">
              <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                Cookies
              </h2>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
                Cookies are small files placed on your computer's hard drive. We use cookies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[var(--color-on-surface-variant)] mt-4">
                <li>Analyze website traffic and improve our site</li>
                <li>Remember your preferences for future visits</li>
                <li>Enable personalized advertisements</li>
              </ul>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed mt-4">
                You can choose to accept or decline cookies. Most web browsers automatically accept cookies, 
                but you can usually modify your browser settings to decline cookies if you prefer.
              </p>
            </section>

            {/* Third-Party Advertisers */}
            <section id="third-party">
              <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                Third-Party Advertisers
              </h2>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
                Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons 
                that are sent directly to users' browser. They automatically receive your IP address when this 
                occurs. These technologies are used to measure the effectiveness of their advertising campaigns 
                and/or to personalize the advertising content that you see on websites you visit.
              </p>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed mt-4">
                Note that bhanuprakashsfdc.com has no access to or control over these cookies that are used 
                by third-party advertisers.
              </p>
            </section>

            {/* Data Security */}
            <section id="security">
              <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                Data Security
              </h2>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
                We are committed to ensuring that your information is secure. We have implemented suitable 
                physical, electronic, and managerial procedures to safeguard and secure the information 
                we collect online. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            {/* Your Rights */}
            <section id="rights">
              <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                Your Rights
              </h2>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[var(--color-on-surface-variant)]">
                <li>Request access to your personal information</li>
                <li>Request correction of your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of personalized advertisements</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            {/* Contact Us */}
            <section id="contact">
              <h2 className="text-2xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                Contact Us
              </h2>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="mt-4 space-y-2 text-[var(--color-on-surface-variant)]">
                <li>Email: contact@bhanuprakashsfdc.com</li>
                <li>Through the contact form on our website</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
