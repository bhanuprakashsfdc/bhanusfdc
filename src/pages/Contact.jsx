import { useContactForm, useToast } from '../hooks/useLocalStorage';
import AdSlot from '../components/AdSlot';

const subjects = [
  'Consulting Inquiry',
  'Collaboration',
  'Speaking',
  'Training',
  'Other'
];

export default function Contact() {
  const { formData, updateField, status, message, submit } = useContactForm();
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await submit();
    if (success) {
      showToast(message, 'success');
    } else {
      showToast(message, 'error');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="mesh-gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-headline)]">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)]">
            Have a question or want to work together?
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-on-surface)] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-lg text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-on-surface)] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-lg text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-on-surface)] mb-2">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => updateField('subject', e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-lg text-[var(--color-on-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-on-surface)] mb-2">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-lg text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] resize-none"
                  placeholder="Tell me about your project or question..."
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-[var(--color-secondary-container)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary)] transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Note */}
              <p className="text-xs text-[var(--color-on-surface-variant)] text-center">
                No backend — messages stored locally. Please also connect on LinkedIn for faster response.
              </p>
            </form>

            {/* AdSense Slot 11 - Contact Page */}
            <div className="mt-8">
              <AdSlot slot="contact" size="banner" />
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-6">
              <h3 className="font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)] mb-4">
                Let's Connect
              </h3>
              
              {/* LinkedIn Button */}
              <a
                href="https://linkedin.com/in/bhanuprakashsfdc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#0077b5] text-white font-semibold rounded-lg hover:bg-[#005885] transition-colors"
              >
                <span className="material-symbols-outlined">linkedin</span>
                Connect on LinkedIn
              </a>

              {/* Location */}
              <div className="mt-6 pt-6 border-t border-[var(--color-outline-variant)]">
                <div className="flex items-center gap-3 text-[var(--color-on-surface-variant)]">
                  <span className="material-symbols-outlined">location_on</span>
                  <span>Bengaluru / Hyderabad, India</span>
                </div>
              </div>

              {/* Available For */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[var(--color-on-surface)] mb-2">
                  Available for:
                </h4>
                <ul className="space-y-2 text-sm text-[var(--color-on-surface-variant)]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm">check</span>
                    Remote Salesforce Consulting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm">check</span>
                    Architecture Reviews
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm">check</span>
                    Corporate Training
                  </li>
                </ul>
              </div>

              {/* Response Time */}
              <div className="mt-4 pt-4 border-t border-[var(--color-outline-variant)]">
                <div className="flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)]">
                  <span className="material-symbols-outlined text-[var(--color-tertiary)]">schedule</span>
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
