import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="mesh-gradient-bg py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-headline)]">
            Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              Additionally, when using this website's services, you shall be subject to any posted guidelines or rules applicable 
              to such services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              2. Intellectual Property Rights
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              This website and its original content, features, and functionality are owned by Bhanu Prakash Reddy and are 
              protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-[var(--color-on-surface-variant)]">
              <li>All content on this website is proprietary to the owner</li>
              <li>You may not reproduce, distribute, or modify any content without written permission</li>
              <li>Trademarks, logos, and service marks displayed on this site are protected</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              3. User Content
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              Our website allows you to post, link, store, share and otherwise make available certain information, text, 
              graphics, videos, or other material. You are responsible for the content you post to this website, 
              including its legality, reliability, and appropriateness.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              4. Links to Other Websites
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              Our website may contain links to third-party websites or services that are not owned or controlled by us. 
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices 
              of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              In no event shall Bhanu Prakash Reddy, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              6. Disclaimer
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              Your use of this website is at your sole risk. The website is provided on an "as is" and "as available" basis. 
              The website is provided without warranties of any kind, whether express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              7. Governing Law
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its 
              conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              8. Changes to Terms
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will 
              provide notice of any significant changes to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
              9. Contact Us
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              If you have any questions about these Terms, please <Link to="/contact.html" className="text-[var(--color-secondary)] hover:underline">contact us</Link>.
            </p>
          </section>
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
    </div>
  );
}
