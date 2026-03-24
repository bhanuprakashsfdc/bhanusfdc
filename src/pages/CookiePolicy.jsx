import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CookieConsent from '../components/CookieConsent';

export default function CookiePolicy() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowConsent(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="mesh-gradient-bg py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-headline)]">
            Cookie Policy
          </h1>
          <p className="mt-3 text-[var(--color-on-surface-variant)]">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              What Are Cookies
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              How We Use Cookies
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              We use cookies for the following purposes:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-[var(--color-on-surface-variant)]">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Marketing cookies:</strong> Used to track visitors across websites for advertising purposes</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              Types of Cookies We Use
            </h2>
            
            <div className="space-y-6 mt-6">
              <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6">
                <h3 className="font-semibold text-[var(--color-on-surface)] mb-2">Essential Cookies</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)]">
                  These cookies are necessary for the website to function. They are usually only set in response to actions 
                  made by you, such as setting your privacy preferences, logging in, or filling in forms.
                </p>
                <p className="text-sm text-[var(--color-on-surface-variant)] mt-2">
                  <strong>Duration:</strong> Session / Persistent
                </p>
              </div>

              <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6">
                <h3 className="font-semibold text-[var(--color-on-surface)] mb-2">Analytics Cookies</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)]">
                  We use Google Analytics to analyze the use of our website. Google Analytics gathers information about 
                  website use by means of cookies. The information gathered is used to create reports about website use.
                </p>
                <p className="text-sm text-[var(--color-on-surface-variant)] mt-2">
                  <strong>Duration:</strong> Up to 2 years
                </p>
              </div>

              <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6">
                <h3 className="font-semibold text-[var(--color-on-surface)] mb-2">Advertising Cookies</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)]">
                  These cookies may be set through our site by our advertising partners. They may be used to build a 
                  profile of your interests and show you relevant advertisements on other sites.
                </p>
                <p className="text-sm text-[var(--color-on-surface-variant)] mt-2">
                  <strong>Duration:</strong> Up to 1 year
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              Managing Cookies
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your 
              computer and you can set most browsers to prevent them from being placed. However, if you do this, you 
              may have to manually adjust some preferences every time you visit a site.
            </p>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed mt-4">
              To manage cookie settings in your browser:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-[var(--color-on-surface-variant)]">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Enhanced Tracking Protection</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              Some third-party cookies are set by services that appear on our pages. We have no control over these cookies. 
              The third parties include:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-[var(--color-on-surface-variant)]">
              <li>Google Analytics (analytics)</li>
              <li>Google AdSense (advertising)</li>
              <li>Salesforce (embedded chat)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              GDPR Compliance
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              Under the GDPR, you have the right to:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-[var(--color-on-surface-variant)]">
              <li>Be informed about how we use cookies</li>
              <li>Access your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              Updates to This Policy
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting 
              the new Cookie Policy on this page and updating the "last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              Contact Us
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              If you have any questions about our Cookie Policy, please <Link to="/contact.html" className="text-[var(--color-secondary)] hover:underline">contact us</Link>.
            </p>
          </section>
        </div>

        {/* Manage Cookie Consent Button */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => {
              localStorage.removeItem('cookie_consent');
              setShowConsent(true);
            }}
            className="px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-xl hover:bg-[var(--color-secondary)]/90 transition-colors"
          >
            Manage Cookie Preferences
          </button>
        </div>

        {/* AdSense Slot */}
        <div className="mt-12">
          <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-8 text-center">
            <p className="text-[var(--color-on-surface-variant)]">
              Advertisements
            </p>
          </div>
        </div>
      </div>

      {/* Cookie Consent Banner */}
      {showConsent && (
        <CookieConsent 
          onAccept={handleAccept} 
          onDecline={handleDecline} 
        />
      )}
    </div>
  );
}
