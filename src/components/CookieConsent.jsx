import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../hooks/useLocalStorage';

export default function CookieConsent() {
  const { consent, accept, decline } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!consent) {
      // Small delay to show after page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [consent]);

  if (!isVisible || consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] rounded-xl p-4 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-on-surface)] flex-1">
            We use cookies including Google AdSense cookies to personalize ads. 
            By continuing, you accept our{' '}
            <Link to="/privacy-policy" className="text-[var(--color-secondary)] hover:underline">
              Privacy Policy
            </Link>.
          </p>
          
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-sm font-medium text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-high)] rounded-lg transition-colors"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-sm font-medium bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] hover:bg-[var(--color-secondary)] hover:text-white rounded-lg transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
