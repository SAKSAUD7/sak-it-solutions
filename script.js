// ==========================================
// SAKtechsolutions – script.js
// ==========================================

// ---- DATA ----

const services = [
  { icon: "🌐", title: "Web Design & Development", desc: "Pixel-perfect, responsive websites that convert visitors into customers. From landing pages to complex web apps.", tags: ["React", "Next.js", "HTML/CSS", "WordPress"] },
  { icon: "📱", title: "Mobile App Development", desc: "Cross-platform and native mobile apps for iOS & Android with smooth UX and robust backends.", tags: ["Flutter", "React Native", "Expo", "iOS/Android"] },
  { icon: "⚙️", title: "Backend & API Development", desc: "Scalable server architectures, RESTful APIs, authentication systems, and database design.", tags: ["Django", "Node.js", "PostgreSQL", "MySQL"] },
  { icon: "🛒", title: "E-Commerce Solutions", desc: "Full-featured online stores with payment gateways, inventory management, and analytics dashboards.", tags: ["WooCommerce", "Razorpay", "Stripe", "Custom"] },
  { icon: "🎨", title: "UI/UX Design", desc: "Beautiful, intuitive interfaces designed to delight users and drive business results. Figma to code.", tags: ["Figma", "Prototyping", "Design Systems", "Branding"] },
  { icon: "📊", title: "Digital Marketing & SEO", desc: "Data-driven digital marketing strategies that grow your online presence and bring quality leads.", tags: ["SEO", "Social Media", "Google Ads", "Content"] },
  { icon: "☁️", title: "Cloud & Deployment", desc: "Hosting, CI/CD pipelines, cloud infrastructure setup, and ongoing server management.", tags: ["AWS", "Azure", "Vercel", "Docker"] },
  { icon: "🔐", title: "CMS & Admin Portals", desc: "Custom content management systems and admin dashboards tailored to your team's workflow.", tags: ["Custom CMS", "Admin Panels", "Role-Based Access"] },
  { icon: "🤖", title: "AI & Automation", desc: "Intelligent automation tools, chatbots, data pipelines and AI integrations for modern businesses.", tags: ["Python", "ML", "Chatbots", "Automation"] },
];

const projects = [
  {
    id: 1, category: "Full Stack",
    title: "Booking & Management System",
    short: "Full-stack booking platform for a large indoor amusement park with digital waivers, admin dashboards, and payment integration.",
    desc: `Ninja Inflatable Park is a comprehensive, production-grade booking and management platform for a large indoor amusement center. The platform digitizes the entire customer journey — from session booking and waiver signing to check-in and payments.\n\nKey features include an intelligent session booking engine with capacity management, a legally compliant digital waiver system with kiosk mode, a real-time admin operations portal, and a custom CMS for non-technical managers.`,
    tags: ["React", "Django", "PostgreSQL", "Azure", "Razorpay"],
    features: ["Advanced Session & Party Booking Engine", "Digital Waiver System with Kiosk Mode", "Real-time Admin Dashboard", "Custom CMS for Content & Pricing", "Role-Based Access Control", "Secure Payment via Razorpay"],
    tech: ["React.js", "Django", "PostgreSQL", "Azure", "JWT Auth", "Razorpay"],
    live: "https://ninjapark-frontend.azurewebsites.net/",
    emoji: "🎪"
  },
  {
    id: 2, category: "Backend",
    title: "The Metakey Platform",
    short: "Backend systems for NFT marketplace integrations, blockchain data pipelines, and game-related API services.",
    desc: `The Metakey is a pioneering platform at the intersection of NFTs, blockchain gaming, and the metadata ecosystem. Engineered high-performance backend infrastructure supporting live platforms with real-time NFT data and game integrations.\n\nCore work included blockchain data pipelines from OpenSea, marketplace integrations with floor price syncing, and low-latency game APIs consumed by Roblox and Unity environments.`,
    tags: ["Node.js", "Python", "Blockchain", "SQL", "NFT"],
    features: ["Real-time NFT Marketplace Integrations", "Blockchain Data Ingestion & Normalization", "Low-Latency Game APIs (Roblox & Unity)", "Complex SQL Data Modeling", "Automated Web Scraping Pipelines"],
    tech: ["Node.js", "Python", "PostgreSQL", "Docker", "AWS", "OpenSea API"],
    live: "https://www.themetakey.com/",
    emoji: "🔗"
  },
  {
    id: 3, category: "Full Stack",
    title: "Business Management System",
    short: "Enterprise-grade customer experience platform with SLA tracking, ticket lifecycle management, and real-time service monitoring.",
    desc: `The BSM Platform is an enterprise customer experience system unifying support operations, service monitoring, and performance tracking. It replaces disjointed tools with a cohesive, API-driven workflow.\n\nFeatures a customer portal for ticket submission, an admin command center for incident management, an SLA engine for compliance tracking, and real-time system health monitoring dashboards.`,
    tags: ["Next.js", "Django", "Enterprise", "SLA", "Support"],
    features: ["Unified Customer Support Portal", "Automated SLA Performance Tracking", "Full Ticket Lifecycle Management", "Real-time Service Health Monitoring", "CSAT Rating Module", "Role-Based Access Control"],
    tech: ["React", "Next.js", "Django", "PostgreSQL", "AWS", "Vercel"],
    live: "https://deployed-project-e7a7.vercel.app/",
    emoji: "📋"
  },
  {
    id: 4, category: "Full Stack",
    title: "SpinPin — Bowling & Activity Center",
    short: "Full-featured booking and management platform for a UK-based entertainment venue with lane booking, party packages, and real-time availability.",
    desc: `SpinPin is a production-grade platform for a UK bowling and activity center. Built a complete booking system handling 90-minute lane bookings, party packages, customer authentication, and admin management.\n\nFeatures real-time lane availability, booking wizard with flexible duration logic, customer portal for managing bookings, and a comprehensive admin portal for operations.`,
    tags: ["Next.js", "Django", "PostgreSQL", "UK", "Booking"],
    features: ["Lane Booking with Real-Time Availability", "Party Package Management", "Customer Authentication & My Bookings", "Admin Operations Dashboard", "Flexible 90-min Turnover Model", "Payment Integration"],
    tech: ["Next.js", "Django", "PostgreSQL", "TypeScript", "Zod"],
    live: "https://www.spinpin.uk/",
    emoji: "🎳"
  },
  {
    id: 5, category: "Full Stack",
    title: "Stravion Construction Group",
    short: "Premium luxury website for a UK-based construction company with cinematic animations, GSAP effects, and project portfolio showcase.",
    desc: `Stravion Construction Group required a world-class digital presence matching their premium brand. Built a high-end, cinematic single-page application with matte black and rich gold design system.\n\nFeatures include a GSAP-powered preloader, smooth Lenis scrolling, parallax effects, animated project galleries with video backgrounds, and a comprehensive project portfolio across residential and commercial categories.`,
    tags: ["React", "Vite", "GSAP", "Lenis", "UK Construction"],
    features: ["Cinematic Preloader with Iris Exit", "GSAP Text Reveal Animations", "Smooth Lenis Scrolling", "Parallax Video Hero", "Filterable Project Gallery", "Mobile-First Responsive Design"],
    tech: ["React", "Vite", "GSAP", "Lenis", "CSS3", "Nginx"],
    live: "https://www.stravion.co.uk/",
    emoji: "🏗️"
  },
  {
    id: 6, category: "Full Stack",
    title: "Logistics & Billing Platform",
    short: "Web-based solution modernizing transport operations with smart billing, GST calculation, invoice generation, and fleet management.",
    desc: `MBS Logistics digitizes traditional paper-heavy workflows into a streamlined system. Every Lorry Receipt and invoice is digitally generated, stored, and tracked — eliminating calculation errors in freight and GST.\n\nKey modules: Smart billing engine with auto GST calculation, digital fleet registry, financial analytics with daily/monthly reports, and a reusable customer database.`,
    tags: ["HTML/CSS", "MySQL", "Billing", "Logistics", "GST"],
    features: ["Automated Invoice with GST Calculation", "Digital Fleet & Vehicle Management", "Financial Analytics & Reports", "Customer Database Management", "Lorry Receipt (LR) Digitization"],
    tech: ["HTML5", "CSS3", "JavaScript", "MySQL", "GitHub Pages"],
    live: "https://mbslogisticsind.github.io/logistics/MySQL/home%20and%20login/Home.html",
    emoji: "🚛"
  },
  {
    id: 7, category: "Mobile",
    title: "Healthcare Service Application",
    short: "Mobile-first platform delivering professional physiotherapy services to patients' homes — connecting patients with certified specialists.",
    desc: `PhysioCare connects patients with certified physiotherapists for home visits. Built with React Native and Expo for native-grade performance on iOS and Android.\n\nPatients can browse specialists, book sessions, and track recovery. Doctors get a mobile office: schedule, navigation, session notes, and report generation. HIPAA-compliant data security via Supabase.`,
    tags: ["React Native", "Expo", "Supabase", "TypeScript", "Healthcare"],
    features: ["Role-Based Ecosystem (Patient/Doctor/Admin)", "Home Appointment Booking", "Digital Medical Reports", "Doctor's Schedule Dashboard", "Real-time Notifications", "HIPAA-Compliant Data Security"],
    tech: ["React Native", "Expo", "Supabase", "PostgreSQL", "TypeScript"],
    emoji: "🏥"
  },
  {
    id: 8, category: "Mobile",
    title: "On-Demand Car Wash App",
    short: "Cross-platform mobile app for on-demand vehicle service booking — connecting vehicle owners with local service providers.",
    desc: `An Uber-like marketplace for car wash and detailing services built with Flutter. Users create profiles for multiple vehicles, select service packages, and schedule appointments.\n\nBuilt on Flutter for a single high-fidelity codebase on iOS and Android, with Supabase backend providing real-time booking status updates and enterprise-grade authentication.`,
    tags: ["Flutter", "Supabase", "Mobile", "PostgreSQL"],
    features: ["Cross-Platform (iOS & Android via Flutter)", "Multi-Vehicle Registry", "Service Provider Marketplace", "Real-Time Booking Status", "Secure Authentication", "Scalable for GPS & Payments"],
    tech: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    emoji: "🚗"
  },
  {
    id: 9, category: "Full Stack",
    title: "Document Automation Tool",
    short: "All-in-one browser-based PDF manipulation suite — convert, merge, split, edit, and secure documents with zero file retention.",
    desc: `FlexiPDF brings desktop-grade PDF tools to the browser. Users can merge, split, rotate, edit, annotate, and secure documents without expensive software.\n\nHybrid architecture: lightweight operations run client-side for instant feedback; heavy conversions are offloaded to a Node.js server. Zero-retention policy — files are deleted immediately after download.`,
    tags: ["PDF Tools", "Web App", "Node.js", "React"],
    features: ["Universal PDF Conversion (Word, Excel, JPG)", "Merge, Split, Rotate, Reorder", "Browser Editor with Annotations", "Password Protection & Unlock", "Smart Compression Engine", "Zero-Retention Privacy Policy"],
    tech: ["React", "Node.js", "File Processing", "Render"],
    live: "https://flexipdf-9frt.onrender.com/",
    emoji: "📄"
  },
  {
    id: 10, category: "Full Stack",
    title: "Crumblee Food Discovery App",
    short: "Modern restaurant discovery web app with intelligent search, advanced filtering, and high-performance server-side rendering.",
    desc: `Crumblee helps users find the best dining experiences based on preferences and location. Built with Next.js for SEO and performance, featuring server-side rendering for lightning-fast page loads.\n\nSophisticated search and filtering by cuisine, location, rating, and price range, consuming structured restaurant data via RESTful APIs.`,
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
    features: ["Location-Based Restaurant Search", "Multi-Parameter Filtering", "Server-Side Rendering (SSR)", "RESTful API Integration", "Mobile-First Responsive UI"],
    tech: ["Next.js", "React", "TypeScript", "REST APIs", "Vercel"],
    live: "https://crumblee-web-rc8f-git-main-saud-ali-khans-projects.vercel.app/",
    emoji: "🍕"
  },
  {
    id: 11, category: "Frontend",
    title: "MA Electricals Website",
    short: "Professional business website for an electrical services company with service showcase, portfolio, and lead-generating contact system.",
    desc: `MA Electricals is a professional digital presence for an established electrical services provider, engineered to convert visitors into business leads.\n\nFeatures dedicated service pages, project portfolio, SEO-optimized semantic HTML, and a functional contact form. Optimized for mobile where most customers search for emergency electrical services.`,
    tags: ["HTML", "CSS", "JavaScript", "Business Website"],
    features: ["Professional Corporate Identity", "Service Showcase & Portfolio", "Lead-Generating Contact Form", "Mobile-First Responsive Layout", "SEO-Optimized Structure"],
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    live: "https://saksaud7.github.io/maelectricals/",
    emoji: "⚡"
  },
  {
    id: 12, category: "Full Stack",
    title: "E-Commerce Fashion Platform",
    short: "Full-featured online store with product catalog, cart, Stripe payments, order management, and seller dashboard.",
    desc: `A comprehensive e-commerce solution for a fashion retailer. Built with a React frontend and Django backend, featuring a complete product management system, advanced filtering by category/size/color, and secure Stripe payment integration.\n\nIncludes a seller dashboard with inventory tracking, order management, and revenue analytics.`,
    tags: ["React", "Django", "Stripe", "E-Commerce"],
    features: ["Product Catalog with Advanced Filters", "Shopping Cart & Wishlist", "Stripe Payment Integration", "Order Tracking System", "Seller Dashboard & Analytics", "Inventory Management"],
    tech: ["React", "Django", "PostgreSQL", "Stripe", "AWS S3"],
    emoji: "👗"
  },
  {
    id: 13, category: "Backend",
    title: "Real Estate Listing API",
    short: "Scalable REST API for a real estate platform with property listings, agent management, search, and recommendation engine.",
    desc: `A high-performance REST API powering a real estate marketplace. Built with Node.js and Express, featuring geolocation-based search, property recommendation algorithms, and comprehensive agent management.\n\nHandles millions of listing records with sub-second response times using optimized PostgreSQL queries and Redis caching.`,
    tags: ["Node.js", "PostgreSQL", "REST API", "Redis"],
    features: ["Geolocation-Based Property Search", "AI Property Recommendation Engine", "Agent & Listing Management", "Redis Caching for Performance", "JWT Authentication", "Comprehensive Admin API"],
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS"],
    emoji: "🏠"
  },
  {
    id: 14, category: "Full Stack",
    title: "Hotel Management System",
    short: "End-to-end hotel operations platform with room booking, housekeeping management, invoicing, and guest portal.",
    desc: `A full-featured hotel management system replacing manual operations with a digital workflow. Guests can book rooms online, view amenities, and manage stays. Staff get tools for housekeeping scheduling, room status tracking, and invoice generation.\n\nReal-time dashboard shows occupancy rates, revenue, and operational KPIs at a glance.`,
    tags: ["React", "Django", "PostgreSQL", "Hospitality"],
    features: ["Online Room Booking & Availability", "Housekeeping Management", "Guest Portal & Self Check-in", "Automated Invoice Generation", "Real-time Occupancy Dashboard", "Revenue Analytics"],
    tech: ["React", "Django", "PostgreSQL", "Celery", "Redis"],
    emoji: "🏨"
  },
  {
    id: 15, category: "Mobile",
    title: "Fitness Tracking App",
    short: "Cross-platform fitness app with workout planning, progress tracking, nutrition logging, and social community features.",
    desc: `A comprehensive fitness application built with Flutter. Users create personalized workout plans, log exercises, track progress with visual charts, and connect with a fitness community.\n\nIntegrates with device health sensors, provides AI-powered workout recommendations, and features a nutrition tracking module with a 500,000+ food database.`,
    tags: ["Flutter", "Supabase", "Mobile", "Health"],
    features: ["Personalized Workout Planning", "Progress Charts & Analytics", "Nutrition Logging with Food Database", "Social Community Features", "Device Health Sensor Integration", "AI Workout Recommendations"],
    tech: ["Flutter", "Dart", "Supabase", "PostgreSQL", "ML Kit"],
    emoji: "💪"
  },
  {
    id: 16, category: "Full Stack",
    title: "School Management Platform",
    short: "Comprehensive school ERP with student management, attendance, gradebook, parent portal, and online exam system.",
    desc: `A complete school management system built for a private school chain. Covers student enrollment, attendance tracking, gradebook management, timetable generation, and fee collection.\n\nParent portal provides real-time academic updates, attendance notifications, and direct messaging with teachers. Online exam module supports multiple question types and auto-grading.`,
    tags: ["React", "Django", "PostgreSQL", "Education"],
    features: ["Student Enrollment & Management", "Attendance Tracking & Notifications", "Digital Gradebook & Report Cards", "Parent Portal with Messaging", "Online Exam with Auto-Grading", "Fee Management & Invoicing"],
    tech: ["React", "Django", "PostgreSQL", "Celery", "AWS"],
    emoji: "🎓"
  },
  {
    id: 17, category: "Backend",
    title: "Fintech Payment Gateway",
    short: "Secure payment gateway API with multi-currency support, fraud detection, wallet management, and transaction analytics.",
    desc: `A production-grade payment gateway built for a fintech startup. Handles multi-currency transactions, implements fraud detection algorithms, and manages digital wallets with real-time balance updates.\n\nPCI-DSS compliant architecture with end-to-end encryption, comprehensive transaction logging, and real-time webhook notifications for payment events.`,
    tags: ["Node.js", "PostgreSQL", "Fintech", "Security"],
    features: ["Multi-Currency Transaction Processing", "AI Fraud Detection System", "Digital Wallet Management", "PCI-DSS Compliant Architecture", "Real-time Webhook Notifications", "Transaction Analytics Dashboard"],
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    emoji: "💳"
  },
  {
    id: 18, category: "Frontend",
    title: "SaaS Dashboard UI",
    short: "Premium analytics dashboard with real-time charts, data visualization, dark mode, and fully responsive design.",
    desc: `A sophisticated SaaS analytics dashboard built for a B2B software company. Features real-time data visualization with interactive charts, customizable widgets, and a comprehensive reporting module.\n\nBuilt with React and Recharts, the dashboard delivers instant insights through animated KPI cards, drill-down reports, and exportable data tables.`,
    tags: ["React", "TypeScript", "Charts", "SaaS"],
    features: ["Real-Time Data Visualization", "Customizable Widget Dashboard", "Interactive Drill-Down Reports", "Export to PDF & Excel", "Dark/Light Mode Toggle", "Mobile-Responsive Layout"],
    tech: ["React", "TypeScript", "Recharts", "Tailwind CSS", "Vercel"],
    emoji: "📊"
  },
];

// ---- LOADER ----
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 2000);
});

// ---- NAVBAR ----
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

function closeMobile() {
  document.getElementById("mobileMenu").classList.remove("open");
}
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});

// ---- RENDER SERVICES ----
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = services.map(s => `
    <div class="service-card">
      <div class="sc-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="sc-tags">${s.tags.map(t => `<span class="sc-tag">${t}</span>`).join("")}</div>
    </div>
  `).join("");
}

// ---- RENDER PROJECTS ----
let currentFilter = "All";
let visibleCount = 9;

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const filtered = currentFilter === "All" ? projects : projects.filter(p => p.category === currentFilter);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  grid.innerHTML = visible.map(p => `
    <div class="project-card" onclick="openModal(${p.id})">
      <div class="project-card-img-placeholder">${p.emoji}</div>
      <div class="project-card-body">
        <div class="project-cat">${p.category}</div>
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        <div class="project-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join("")}</div>
      </div>
      <div class="project-arrow">→</div>
    </div>
  `).join("");

  document.getElementById("loadMoreBtn").style.display = hasMore ? "inline-block" : "none";
}

function loadMore() {
  visibleCount += 6;
  renderProjects();
}

// ---- FILTER ----
document.getElementById("filterTabs").addEventListener("click", e => {
  if (!e.target.classList.contains("filter-btn")) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  currentFilter = e.target.dataset.cat;
  visibleCount = 9;
  renderProjects();
});

// ---- MODAL ----
function openModal(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  const techAll = [...(p.tech || [])];
  document.getElementById("modalContent").innerHTML = `
    <div class="modal-cat">${p.category}</div>
    <div class="modal-title">${p.emoji} ${p.title}</div>
    <p class="modal-desc">${p.desc.replace(/\n/g, "<br><br>")}</p>
    <div class="modal-section-title">✅ Key Features</div>
    <ul class="modal-features">${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
    <div class="modal-section-title">🛠 Tech Stack</div>
    <div class="modal-tech">${techAll.map(t => `<span>${t}</span>`).join("")}</div>
    ${p.live ? `<div class="modal-links"><a href="${p.live}" target="_blank" class="modal-link">🔗 View Live Site</a></div>` : ""}
  `;
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ---- COUNTERS ----
function animateCounters() {
  document.querySelectorAll(".counter").forEach(el => {
    const target = +el.dataset.target;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current);
    }, 25);
  });
}

// ---- SKILL BARS ----
function animateSkills() {
  document.querySelectorAll(".skill-fill").forEach(el => {
    const w = el.style.width;
    el.style.width = "0";
    setTimeout(() => { el.style.width = w; }, 100);
  });
}

// ---- INTERSECTION OBSERVER ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      if (entry.target.id === "hero") animateCounters();
      if (entry.target.id === "about") animateSkills();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

// ---- FORM ----
function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("fname").value;
  const phone = "917411091256";
  const msg = encodeURIComponent(`Hi SAKtechsolutions! I'm ${name}. Project: ${document.getElementById("ftype").value}. Message: ${document.getElementById("fmsg").value}`);
  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}

// ---- SCROLL REVEAL ----
const style = document.createElement("style");
style.textContent = `
  .service-card, .project-card, .why-card, .about-card, .tech-pill {
    opacity: 0; transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .service-card.visible, .project-card.visible, .why-card.visible,
  .about-card.visible, .tech-pill.visible {
    opacity: 1; transform: translateY(0);
  }
`;
document.head.appendChild(style);

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 80);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderProjects();

  document.querySelectorAll("#hero, #about").forEach(el => observer.observe(el));
  // Observe cards after render
  setTimeout(() => {
    document.querySelectorAll(".service-card, .project-card, .why-card, .about-card, .tech-pill")
      .forEach(el => cardObserver.observe(el));
  }, 100);
});
