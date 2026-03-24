import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { posts } from '../src/data/posts.js';
import { trainingCourses } from '../src/data/training.js';
import { projects } from '../src/data/projects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://bhanuprakashsfdc.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'sitemap.xml');

// Static pages
const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/about.html', priority: '0.8', changefreq: 'monthly' },
  { loc: '/blog.html', priority: '0.9', changefreq: 'daily' },
  { loc: '/portfolio.html', priority: '0.8', changefreq: 'monthly' },
  { loc: '/training.html', priority: '0.8', changefreq: 'monthly' },
  { loc: '/certifications.html', priority: '0.7', changefreq: 'monthly' },
  { loc: '/contact.html', priority: '0.6', changefreq: 'yearly' },
  { loc: '/privacy-policy.html', priority: '0.3', changefreq: 'yearly' },
  { loc: '/terms-of-service.html', priority: '0.3', changefreq: 'yearly' },
  { loc: '/cookie-policy.html', priority: '0.3', changefreq: 'yearly' },
];

function generateXML() {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  staticPages.forEach(page => {
    xml += `  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add all blog posts
  posts.forEach(post => {
    xml += `  <url>
    <loc>${SITE_URL}/blog/${post.slug}.html</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  // Add all training courses
  trainingCourses.forEach(course => {
    xml += `  <url>
    <loc>${SITE_URL}/training/${course.slug}.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  // Add all portfolio projects
  projects.forEach(project => {
    xml += `  <url>
    <loc>${SITE_URL}/portfolio/${project.slug}.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  xml += `</urlset>`;

  return xml;
}

// Generate and write sitemap
const sitemapXML = generateXML();
fs.writeFileSync(OUTPUT_FILE, sitemapXML);

console.log(`✓ Sitemap generated: ${OUTPUT_FILE}`);
console.log(`  - ${staticPages.length} static pages`);
console.log(`  - ${posts.length} blog posts`);
console.log(`  - ${trainingCourses.length} training courses`);
console.log(`  - ${projects.length} portfolio projects`);
console.log(`  - Total: ${staticPages.length + posts.length + trainingCourses.length + projects.length} URLs`);
