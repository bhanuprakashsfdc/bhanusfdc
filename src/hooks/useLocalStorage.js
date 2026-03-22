import { useState, useEffect, useCallback } from 'react';

// Theme hook with dark mode support
export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  return { isDark, toggleTheme };
}

// Reading progress hook
export function useReadingProgress(slug) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / documentHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercentage)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  return progress;
}

// Newsletter subscription hook
export function useNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const subscribe = useCallback(async (email) => {
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store in localStorage
    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    
    if (subscribers.includes(email)) {
      setStatus('error');
      setMessage('This email is already subscribed!');
      return false;
    }
    
    subscribers.push(email);
    localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
    
    setStatus('success');
    setMessage('Thanks for subscribing!');
    setEmail('');
    return true;
  }, []);

  return { email, setEmail, status, message, subscribe };
}

// Contact form hook
export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const updateField = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const submit = useCallback(async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setMessage('Please fill in all required fields.');
      return false;
    }

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store in localStorage
    const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
    messages.push({
      ...formData,
      id: Date.now(),
      date: new Date().toISOString()
    });
    localStorage.setItem('contact_messages', JSON.stringify(messages));
    
    setStatus('success');
    setMessage('Message sent successfully! I\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    return true;
  }, [formData]);

  return { formData, updateField, status, message, submit };
}

// Cookie consent hook
export function useCookieConsent() {
  const [consent, setConsent] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cookie_consent');
    }
    return null;
  });

  const accept = useCallback(() => {
    localStorage.setItem('cookie_consent', 'accepted');
    setConsent('accepted');
  }, []);

  const decline = useCallback(() => {
    localStorage.setItem('cookie_consent', 'declined');
    setConsent('declined');
  }, []);

  return { consent, accept, decline };
}

// Toast notification hook
export function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  return { toast, showToast };
}

// Counter animation hook
export function useCounter(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}
