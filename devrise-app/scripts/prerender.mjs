// Runs after `vite build`. Writes a static HTML file for every route so search
// engines and AI crawlers that don't run JavaScript still get each page's real
// title, description and content. React replaces the static markup on load.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const SITE = 'https://360devrise.vercel.app';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const vite = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { services } = await vite.ssrLoadModule('/src/data/services.jsx');
const { projects } = await vite.ssrLoadModule('/src/data/projects.js');
await vite.close();

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const homeFaqs = JSON.parse(template.match(/<script type="application\/ld\+json">\s*(\{[^<]*"FAQPage"[^<]*\})\s*<\/script>/)[1])
  .mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }));

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const list = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const link = (href, text) => `<a href="${href}" style="color:#a5b4fc">${esc(text)}</a>`;
const faqHtml = (faqs) => faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('');
const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
const contact = `<p>Call or WhatsApp ${link('https://wa.me/917411091256', '+91 74110 91256')} for a free quote.</p>`;
const intro = '360 DevRise is a software development and digital marketing agency in Bangalore, India. We build websites, web applications, mobile apps, AI chatbots and business platforms, and run SEO and paid advertising.';

const categories = [...new Set(services.map((s) => s.category))];
const servicesByCategory = categories
  .map((c) => `<h2>${esc(c)}</h2>${list(services.filter((s) => s.category === c).map((s) => `${link(`/services/${s.id}`, s.title)} — ${esc(s.desc)}`))}`)
  .join('');
const projectList = list(projects.map((p) => `${link(`/projects/${p.id}`, p.title)} (${esc(p.category)}) — ${esc(p.short)}`));

const pages = [
  {
    route: '/',
    priority: '1.0',
    body: `<h1>360 DevRise — Software Company in Bangalore</h1><p>${intro}</p>${contact}<h2>Our services</h2>${servicesByCategory}<h2>Featured work</h2>${projectList}<h2>Frequently asked questions</h2>${faqHtml(homeFaqs)}`,
  },
  {
    route: '/services',
    priority: '0.9',
    title: 'Our Services | Software Development Agency Bangalore | 360 DevRise',
    description: '360 DevRise offers web development, mobile app development, SEO, paid ads, AI chatbots and custom business platforms in Bangalore.',
    body: `<h1>Services</h1><p>${intro}</p>${servicesByCategory}${contact}`,
  },
  {
    route: '/work',
    priority: '0.8',
    title: 'Our Work | Portfolio | 360 DevRise Bangalore',
    description: 'Websites, web apps and mobile apps built by 360 DevRise, including booking systems, AI platforms, logistics software and healthcare apps.',
    body: `<h1>Our Work</h1><p>Projects designed and built by 360 DevRise.</p>${projectList}${contact}`,
  },
  {
    route: '/about',
    priority: '0.7',
    title: 'About 360 DevRise | Software Company Bangalore',
    description: '360 DevRise is a Bangalore software and digital marketing agency founded by Saud and Saqeeb, building websites, apps and automation for businesses.',
    body: `<h1>About 360 DevRise</h1><p>${intro}</p><p>Founded by Saud and Saqeeb. Design, engineering, marketing and automation in one team.</p>${contact}`,
  },
  {
    route: '/contact',
    priority: '0.8',
    title: 'Contact 360 DevRise | Get a Free Quote | Bangalore',
    description: 'Contact 360 DevRise in Bangalore for a free quote on websites, apps, SEO and automation. Call or WhatsApp +91 74110 91256.',
    body: `<h1>Contact 360 DevRise</h1>${contact}<p>Location: Bangalore, India.</p>`,
  },
  ...services.map((s) => ({
    route: `/services/${s.id}`,
    priority: '0.8',
    title: `${s.title} | 360 DevRise Bangalore`,
    description: s.longDesc.slice(0, 157).trim() + '...',
    head: jsonLd({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.title,
      serviceType: s.category,
      description: s.longDesc,
      url: `${SITE}/services/${s.id}`,
      areaServed: 'IN',
      provider: { '@type': 'ProfessionalService', name: '360 DevRise', url: `${SITE}/`, telephone: '+917411091256' },
    }) + (s.faqs?.length
      ? jsonLd({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: s.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        })
      : ''),
    body: `<p>${link('/services', 'Services')} / ${esc(s.category)}</p><h1>${esc(s.title)}</h1><p>${esc(s.desc)}</p><p>${esc(s.longDesc)}</p><h2>What is included</h2>${list(s.features.map(esc))}${s.faqs?.length ? `<h2>Questions about ${esc(s.title)}</h2>${faqHtml(s.faqs)}` : ''}${contact}`,
  })),
  ...projects.map((p) => ({
    route: `/projects/${p.id}`,
    priority: '0.6',
    title: `${p.title} | Case Study | 360 DevRise`,
    description: p.short.slice(0, 160),
    image: p.image,
    body: `<p>${link('/work', 'Work')} / ${esc(p.category)}</p><h1>${esc(p.title)}</h1><p>${esc(p.short)}</p>${esc(p.description).split(/\n\s*\n/).map((x) => `<p>${x}</p>`).join('')}${p.features?.length ? `<h2>Key features</h2>${list(p.features.map(esc))}` : ''}${p.tags?.length ? `<p>Technology: ${p.tags.map(esc).join(', ')}</p>` : ''}${contact}`,
  })),
];

const nav = `<p>${[['/', 'Home'], ['/services', 'Services'], ['/work', 'Work'], ['/about', 'About'], ['/contact', 'Contact']].map(([h, t]) => link(h, t)).join(' · ')}</p>`;
const setAttr = (html, selector, value) => html.replace(new RegExp(`(<(?:meta|link)[^>]*${selector}[^>]*(?:content|href)=")[^"]*(")`), `$1${value}$2`);

for (const page of pages) {
  const url = SITE + (page.route === '/' ? '/' : page.route);
  let html = template.replace(/<noscript>[\s\S]*?<\/noscript>\s*/, '');
  if (page.title) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`);
    for (const sel of ['name="title"', 'property="og:title"', 'property="twitter:title"']) html = setAttr(html, sel, esc(page.title));
  }
  if (page.description) {
    for (const sel of ['name="description"', 'property="og:description"', 'property="twitter:description"']) html = setAttr(html, sel, esc(page.description));
  }
  for (const sel of ['rel="canonical"', 'property="og:url"', 'property="twitter:url"']) html = setAttr(html, sel, url);
  if (page.image) {
    for (const sel of ['property="og:image"', 'property="twitter:image"']) html = setAttr(html, sel, SITE + encodeURI(page.image));
  }
  if (page.head) html = html.replace('</head>', `${page.head}\n  </head>`);
  // Only the home page keeps the home FAQ schema.
  if (page.route !== '/') html = html.replace(/<script type="application\/ld\+json">\s*\{[^<]*"FAQPage"[^<]*\}\s*<\/script>\s*/, '');
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><main style="max-width:820px;margin:0 auto;padding:110px 24px 60px;color:#d1d5db;line-height:1.7">${nav}${page.body}</main></div>`,
  );

  const file = page.route === '/' ? path.join(dist, 'index.html') : path.join(dist, page.route, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((p) => `  <url><loc>${SITE}${p.route === '/' ? '/' : p.route}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`)
    .join('\n')}\n</urlset>\n`,
);

console.log(`Prerendered ${pages.length} pages and wrote sitemap.xml`);
