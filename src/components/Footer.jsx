import { Link } from 'react-router-dom';
import { social, socialIcons } from '../data/social';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

// Icon mapping
const IconComponent = ({ name, className }) => {
  const icons = {
    FaLinkedin: FaLinkedin,
    SiUpwork: SiUpwork,
    FaGithub: FaGithub,
    FaTwitter: FaTwitter,
    FaYoutube: FaYoutube
  };
  const Icon = icons[name];
  return Icon ? <Icon className={className} /> : null;
};

const footerLinks = {
  pages: [
    { path: '/index.html', label: 'Home' },
    { path: '/blog.html', label: 'Blog' },
    { path: '/about.html', label: 'About Me' },
    { path: '/certifications.html', label: 'Certifications' }
  ],
  topics: [
    { path: '/blog.html?category=Agentforce', label: 'Agentforce' },
    { path: '/blog.html?category=LWC', label: 'Lightning Web Components' },
    { path: '/blog.html?category=Apex', label: 'Apex Development' },
    { path: '/blog.html?category=Flow', label: 'Flow Builder' }
  ],
  connect: [
    { path: '/contact.html', label: 'Contact' },
    { path: social.linkedin, label: 'LinkedIn', external: true },
     { path: social.upwork, label: 'Upwork', external: true },
    { path: social.github, label: 'GitHub', external: true },
    { path: social.twitter, label: 'Twitter/X', external: true }   
  ],
  legal: [
    { path: '/privacy-policy.html', label: 'Privacy Policy' }
  ]
};

const socialLinks = [
  { 
    name: 'LinkedIn', 
    path: social.linkedin, 
    icon: socialIcons.linkedin 
  },
  { 
    name: 'Upwork', 
    path: social.upwork, 
    icon: socialIcons.upwork 
  },
  { 
    name: 'GitHub', 
    path: social.github, 
    icon: socialIcons.github 
  },
  { 
    name: 'Twitter', 
    path: social.twitter, 
    icon: socialIcons.twitter 
  },
  { 
    name: 'YouTube', 
    path: social.youtube, 
    icon: socialIcons.youtube 
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface-container)] border-t border-[var(--color-outline-variant)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/index.html" className="text-xl font-extrabold text-[var(--color-on-surface)] tracking-tighter font-[var(--font-headline)]">
              Bhanu Prakash <span className="text-[var(--color-tertiary)]">⚡</span>
            </Link>
            <p className="mt-3 text-sm text-[var(--color-on-surface-variant)]">
              Salesforce Architect helping enterprises build scalable, AI-powered solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors text-xl"
                  aria-label={social.name}
                >
                  <IconComponent name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-[var(--font-headline)] font-semibold text-[var(--color-on-surface)] mb-4">
              Pages
            </h4>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="font-[var(--font-headline)] font-semibold text-[var(--color-on-surface)] mb-4">
              Topics
            </h4>
            <ul className="space-y-2">
              {footerLinks.topics.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-[var(--font-headline)] font-semibold text-[var(--color-on-surface)] mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a 
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-outline-variant)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--color-on-surface-variant)]">
              © {currentYear} Bhanu Prakash Reddy. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-[var(--color-on-surface-variant)]">
              <span>Built with React</span>
              <span>•</span>
              <span>No cookies except AdSense</span>
            </div>
            
            <Link 
              to="/privacy-policy.html" 
              className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
