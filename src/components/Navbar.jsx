import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useLocalStorage';

const navLinks = [
  { path: '/index.html', label: 'Home' },
  { path: '/blog.html', label: 'Blog' },
  { path: '/about.html', label: 'About' },
  { path: '/certifications.html', label: 'Certs' },
  { path: '/portfolio.html', label: 'Portfolio' },
  { path: '/contact.html', label: 'Contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/index.html') return location.pathname === '/index.html' || location.pathname === '/';
    return location.pathname.startsWith(path.replace('.html', ''));
  };

  return (
    <nav
      className={`
        sticky top-0 w-full z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md shadow-2xl shadow-sky-900/10'
          : 'bg-transparent'
        }
      `}
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/index.html" className="text-xl font-extrabold text-slate-100 dark:text-white tracking-tighter font-[var(--font-headline)]">
          BhanuPrakash <span className="text-[var(--color-tertiary)]">⚡</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center font-[var(--font-headline)] text-sm font-semibold tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                transition-colors duration-200 pb-1
                ${isActive(link.path)
                  ? 'text-[var(--color-secondary)] border-b-2 border-[var(--color-secondary)]'
                  : 'text-slate-400 hover:text-sky-200'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Hire Me Button */}
          <Link
            to="/contact.html"
            className="hidden md:flex bg-[var(--color-secondary-container)] text-[var(--color-on-secondary)] px-6 py-2 rounded-xl font-[var(--font-headline)] font-semibold scale-95 hover:scale-100 transition-all duration-200"
          >
            Hire Me
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="material-symbols-outlined text-[var(--color-on-surface-variant)] hover:bg-[var(--color-secondary)]/10 p-2 rounded-lg transition-all"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? 'light_mode' : 'dark_mode'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden material-symbols-outlined text-[var(--color-on-surface)] p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 py-4 bg-[var(--color-surface-container)] border-t border-[var(--color-outline-variant)]">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-4 py-3 rounded-lg transition-colors font-[var(--font-headline)] font-semibold
                  ${isActive(link.path)
                    ? 'text-[var(--color-secondary)] bg-[var(--color-secondary)]/10'
                    : 'text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-high)]'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
