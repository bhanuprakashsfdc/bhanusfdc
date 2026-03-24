import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import Toast from './Toast';
import AIChatModal from './AIChatModal';
import ChatBot from './ChatBot';
export default function Layout({ toast, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-on-background)]">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-secondary)] focus:text-[var(--color-on-secondary)] rounded-lg"
      >
        Skip to main content
      </a>

      <Navbar />
      
      <main id="main-content" className="flex-1">
        {children || <Outlet />}
      </main>
      <ChatBot />
      <Footer />
      <CookieConsent />
      <AIChatModal />
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}
