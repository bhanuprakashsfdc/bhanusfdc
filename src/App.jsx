import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Portfolio from './pages/Portfolio';
import PortfolioProject from './pages/PortfolioProject';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/index.html" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog.html" element={<Blog />} />
          <Route path="/blog/:slug.html" element={<BlogPost />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/certifications.html" element={<Certifications />} />
          <Route path="/portfolio.html" element={<Portfolio />} />
          <Route path="/portfolio/:slug.html" element={<PortfolioProject />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
