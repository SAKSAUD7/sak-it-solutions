export const projects = [
  {
    id: "7chats-platform",
    title: "7Chats AI Platform",
    category: "Full Stack & AI",
    short: "An all-in-one social platform and AI-powered chatbot ecosystem for everyday tasks and global connectivity.",
    description: `7Chats is a multifaceted digital platform combining a global social network with a suite of intelligent AI chatbots. The platform serves two primary functions: a seamless social environment to connect with friends globally, and a powerful AI ecosystem designed to save time and deliver instant results.

Users can access specialized AI bots for diverse tasks ranging from trading card appraisals and utility bill reviews to lead generation and lottery insights. The platform features robust mobile applications alongside a comprehensive web portal, ensuring seamless accessibility across all devices.`,
    features: [
      "Global Social Networking & Real-time Messaging",
      "Suite of Specialized AI Chatbots (Appraisals, Analytics, etc.)",
      "Custom AI Bot Creation Tools for Personalized Use",
      "Cross-Platform Availability (Web, iOS, Android)",
      "Secure User Authentication & Profile Management",
      "Market Indicators & Lead Generation Modules"
    ],
    techStack: {
      frontend: ["React.js", "React Native", "Tailwind CSS"],
      backend: ["Node.js", "Python (AI Models)"],
      database: ["PostgreSQL", "Redis"],
      other: ["OpenAI API", "WebSockets", "AWS"]
    },
    roles: ["Full Stack Engineer", "AI Integration Specialist"],
    links: { live: "https://7chats.com/" },
    tags: ["React", "AI", "Social", "React Native", "Python"],
    image: "/images/gallery/7chats-1.png",
    gallery: [
      "/images/gallery/7chats-1.png",
      "/images/gallery/7chats-2.png",
      "/images/gallery/7chats-3.png",
      "/images/gallery/7chats-4.jpg",
      "/images/gallery/7chats-5.jpg"
    ],
    emoji: "🤖"
  },
  {
    id: "stravion-construction",
    title: "Stravion Construction",
    category: "Full Stack",
    short: "A world-class, cinematic, and highly responsive luxury construction platform built with GSAP and React.",
    description: `Stravion Construction Group required a premium digital presence that reflected their high-end, Midlands-based construction services. This project involved building a cinematic single-page application with advanced GSAP animations, a custom preloader, and smooth Lenis scrolling.

The result is a highly responsive, luxury digital experience designed to instantly build trust and drive high-value client inquiries. Every interaction is carefully choreographed to deliver a true "wow" factor while maintaining perfect performance.`,
    features: [
      "Cinematic GSAP Text Reveals & Preloader",
      "Premium Matte Black & Rich Gold UI Design System",
      "Lenis Smooth Scrolling Engine Integration",
      "High-Performance Video Backgrounds & Parallax Effects",
      "Responsive Grid Layouts & Mobile-Optimized Navigation",
      "WhatsApp Integration & Custom Inquiry Forms"
    ],
    techStack: {
      frontend: ["React.js", "Vite", "Tailwind CSS"],
      backend: ["Node.js (API)"],
      database: ["PostgreSQL"],
      other: ["GSAP", "Lenis Scroll", "Framer Motion"]
    },
    roles: ["Frontend Engineer", "UI/UX Animator"],
    links: { live: "https://www.stravion.co.uk/" },
    tags: ["React", "GSAP", "Tailwind", "Animation", "Luxury"],
    image: "/images/gallery/stravion-1.png",
    gallery: [
      "/images/gallery/stravion-1.png",
      "/images/gallery/stravion-2.png",
      "/images/gallery/stravion-3.png",
      "/images/gallery/stravion-4.png"
    ],
    emoji: "🏗️"
  },
  {
    id: "ninja-park",
    title: "Booking & Management System",
    category: "Full Stack",
    short: "End-to-end operational platform for a high-volume indoor amusement park, replacing manual paperwork with intelligent digital workflows.",
    description: `Ninja Inflatable Park is a comprehensive, production-grade booking and management platform designed for a large indoor amusement center. This full-stack application serves as the operational backbone of the business, unifying public-facing services with internal administration tools.

The platform digitizes the entire customer journey — from session booking and waiver signing to check-in and payments — significantly reducing queue times and administrative overhead.`,
    features: [
      "Advanced Session & Party Booking Engine with Capacity Management",
      "Legally Compliant Digital Waiver System with Kiosk Mode",
      "Real-time Admin Dashboard for Operations & Revenue Tracking",
      "Custom CMS for Dynamic Content & Pricing Management",
      "Role-Based Access Control (Admin, Manager, Staff, Customer)",
      "Secure Payment Processing via Razorpay",
      "Automated Email Notifications & Marketing Module"
    ],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "JavaScript"],
      backend: ["Django", "RESTful APIs"],
      database: ["PostgreSQL"],
      other: ["Azure App Services", "Razorpay", "JWT Auth"]
    },
    roles: ["Full Stack Developer", "Database Architect", "Deployment Engineer"],
    links: { live: "https://ninjapark-frontend.azurewebsites.net/" },
    tags: ["React", "Django", "PostgreSQL", "Azure", "Razorpay"],
    image: "/images/gallery/Screenshot 2026-02-05 193653.png",
    gallery: [
      "/images/gallery/Screenshot 2026-02-05 193736.png",
      "/images/gallery/Screenshot 2026-02-05 193753.png",
      "/images/gallery/Screenshot 2026-02-05 193818.png",
      "/images/gallery/Screenshot 2026-02-05 193903.png",
      "/images/gallery/Screenshot 2026-02-05 193915.png",
      "/images/gallery/Screenshot 2026-02-05 194015.png",
      "/images/gallery/Screenshot 2026-02-05 194035.png",
      "/images/gallery/Screenshot 2026-02-06 031819.png",
      "/images/gallery/Screenshot 2026-02-06 031838.png"
    ],
    emoji: "🎪"
  },
  {
    id: "the-metakey",
    title: "The Metakey Platform",
    category: "Backend",
    short: "Secure, highly-available backend infrastructure for mass-scale NFT minting, verification, and blockchain data pipelines.",
    description: `The Metakey is a pioneering digital asset platform at the intersection of NFTs, blockchain gaming, and the metadata ecosystem. My role focused on architecting and maintaining the high-performance backend infrastructure that powers live platforms.

This involved ensuring data integrity between on-chain blockchain interactions and internal databases — a critical requirement for accurate asset ownership and transaction history across millions of records.`,
    features: [
      "Real-time NFT Marketplace Integrations (OpenSea API)",
      "High-Volume Blockchain Data Ingestion & Normalization",
      "Low-Latency Game APIs for Roblox & Unity Integrations",
      "Complex SQL Data Modeling for Digital Assets",
      "Automated Web Scraping & Data Extraction Pipelines",
      "Enterprise-Grade RESTful API Security & Validation"
    ],
    techStack: {
      backend: ["Node.js", "Python", "REST APIs"],
      database: ["SQL", "PostgreSQL"],
      other: ["Docker", "AWS", "Bitquery", "OpenSea API"]
    },
    roles: ["Backend Developer", "API Engineer"],
    links: { live: "https://www.themetakey.com/" },
    tags: ["Node.js", "Python", "Blockchain", "SQL", "NFT"],
    image: "/images/gallery/Screenshot 2026-02-06 031418.png",
    gallery: [
      "/images/gallery/Screenshot 2026-02-06 031506.png",
      "/images/gallery/Screenshot 2026-02-06 031520.png",
      "/images/gallery/Screenshot 2026-02-06 031602.png"
    ],
    emoji: "🔗"
  },
  {
    id: "bsm-platform",
    title: "Business Management System",
    category: "Full Stack",
    short: "Enterprise-grade customer experience and service management suite unifying support operations, SLA tracking, and real-time monitoring.",
    description: `The Business Service Management (BSM) Platform is an enterprise-grade system designed to unify support operations, service monitoring, and performance tracking. It serves as a central command center for support teams, replacing disjointed tools with a cohesive, API-driven workflow.

The platform integrates ticket lifecycle management directly with SLA performance tracking, ensuring no customer request slips through the cracks and support teams are held accountable to response time targets.`,
    features: [
      "Unified Customer Support Portal & Admin Command Center",
      "Automated SLA Performance Tracking & Compliance Reporting",
      "Full Ticket Lifecycle Management (Open, In Progress, Resolved)",
      "Real-time Service Health & Status Monitoring System",
      "Integrated Customer Satisfaction (CSAT) Rating Module",
      "Role-Based Access Control (Customer, Support Agent, Admin)",
      "Incident Management & Root Cause Logging"
    ],
    techStack: {
      frontend: ["React", "Next.js"],
      backend: ["Django", "REST Framework"],
      database: ["PostgreSQL"],
      other: ["AWS", "Vercel", "Postman"]
    },
    roles: ["Full Stack Developer", "System Architect"],
    links: { live: "https://deployed-project-e7a7.vercel.app/" },
    tags: ["Next.js", "Django", "Enterprise", "SLA", "Support"],
    image: "/images/gallery/Screenshot 2026-02-05 200645.png",
    gallery: [
      "/images/gallery/Screenshot 2026-02-05 200710.png",
      "/images/gallery/Screenshot 2026-02-05 200731.png",
      "/images/gallery/Screenshot 2026-02-05 200752.png",
      "/images/gallery/Screenshot 2026-02-05 200807.png",
      "/images/gallery/Screenshot 2026-02-05 200816.png",
      "/images/gallery/Screenshot 2026-02-05 200854.png",
      "/images/gallery/Screenshot 2026-02-05 200913.png",
      "/images/gallery/Screenshot 2026-02-05 200921.png",
      "/images/gallery/Screenshot 2026-02-05 200941.png",
      "/images/gallery/Screenshot 2026-02-05 201006.png",
      "/images/gallery/Screenshot 2026-02-05 201041.png",
      "/images/gallery/Screenshot 2026-02-05 201051.png",
      "/images/gallery/Screenshot 2026-02-05 201144.png",
      "/images/gallery/Screenshot 2026-02-05 201156.png",
      "/images/gallery/Screenshot 2026-02-05 201218.png",
      "/images/gallery/Screenshot 2026-02-05 201435.png"
    ],
    emoji: "📋"
  },
  {
    id: "mbs-logistics",
    title: "Logistics & Billing Platform",
    category: "Full Stack",
    short: "Digitized freight billing, GST auto-calculation, invoice generation and fleet management for a logistics contractor.",
    description: `MBS Logistics modernizes the operations of a transport and logistics contractor by digitizing traditional paper-heavy workflows. The system transforms manual bill writing and fragmented record-keeping into a structured, error-free digital environment.

Every Lorry Receipt (LR) and invoice is digitally generated, stored, and tracked — eliminating calculation errors in freight and GST and ensuring financial accuracy across operations.`,
    features: [
      "Automated Invoice Generation with Accurate GST Calculation",
      "Digital Fleet & Vehicle Record Management System",
      "Centralized Customer Database for Rapid Billing",
      "Financial Analytics: Daily & Monthly Revenue Reports",
      "Readiness for E-Way Bill System Integration",
      "Integrated Workflow Utilities (Calculator, Notepad)",
      "Digitized Lorry Receipt (LR) Management"
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      database: ["MySQL"],
      other: ["GitHub Pages", "Component Architecture"]
    },
    roles: ["Full Stack Developer", "UI/UX Designer"],
    links: { live: "https://mbslogisticsind.github.io/logistics/MySQL/home%20and%20login/Home.html" },
    tags: ["HTML/CSS", "MySQL", "Billing", "Logistics", "GST"],
    image: "/images/gallery/mbs.jpeg",
    gallery: ["/images/gallery/WhatsApp Image 2026-02-05 at 8.51.41 PM.jpeg"],
    emoji: "🚛"
  },
  {
    id: "physio-care",
    title: "PhysioCare Mobile App",
    category: "Mobile",
    short: "HIPAA-compliant React Native platform connecting patients with certified physiotherapists for home visits.",
    description: `PhysioCare is a transformative mobile-first healthcare platform that redefines how physiotherapy services are delivered. By connecting patients with certified physiotherapists for home visits, it bridges the gap between clinical care and patient convenience.

Built with React Native and Expo, the app delivers a native-grade experience on both iOS and Android. The backend, powered by Supabase (PostgreSQL), ensures HIPAA-compliant data security and real-time synchronization of appointment status.`,
    features: [
      "Secure Role-Based Ecosystem (Patient, Doctor, Admin)",
      "Seamless Home Appointment Booking & Scheduling",
      "Digital Medical Reports & Treatment History Tracking",
      "Doctor's Dashboard for Session & Patient Management",
      "Real-time Notification & Reminder System",
      "Admin Panel for System-Wide Analytics & Oversight",
      "Scalable Architecture Ready for AI Integration"
    ],
    techStack: {
      frontend: ["React Native", "Expo", "TypeScript"],
      backend: ["Supabase", "PostgreSQL"],
      other: ["TanStack Query", "React Native Paper", "Expo Router"]
    },
    roles: ["Mobile Developer", "System Architect"],
    links: {},
    tags: ["React Native", "Expo", "Supabase", "TypeScript", "Healthcare"],
    image: "/images/gallery/physiocare-main.png",
    gallery: ["/images/gallery/Screenshot 2026-02-05 201435.png"],
    emoji: "🏥"
  },
  {
    id: "blink-wash",
    title: "On-Demand Service App",
    category: "Mobile",
    short: "Flutter-powered Uber-like marketplace for on-demand car wash services with real-time booking and provider tracking.",
    description: `On-Demand Service Application is a sophisticated cross-platform mobile solution designed to streamline the vehicle service industry. It functions as an Uber-like marketplace for car wash and detailing services, connecting vehicle owners with high-quality local service providers.

Built entirely with Flutter, this dual-sided marketplace features an intelligent dispatch architecture, integrated payments via Stripe, and real-time GPS-based tracking — delivering a flawless on-demand experience.`,
    features: [
      "Cross-Platform Native Experience (iOS & Android via Flutter)",
      "Secure User Authentication & Profile Management",
      "Multi-Vehicle Registry & Management System",
      "Service Provider Marketplace with Detailed Listings",
      "Real-Time Booking Status Tracking & Updates",
      "Scalable Backend Architecture on Supabase",
      "Optimized for Future Payment & GPS Integration"
    ],
    techStack: {
      frontend: ["Flutter", "Dart"],
      backend: ["Supabase", "PostgreSQL"],
      other: ["Android", "iOS", "JSON Serialization"]
    },
    roles: ["Mobile Developer", "Full Stack Developer"],
    links: {},
    tags: ["Flutter", "Supabase", "Mobile", "PostgreSQL"],
    image: "/images/gallery/on-demand-service.png",
    gallery: [],
    emoji: "🚗"
  },
  {
    id: "flexi-pdf",
    title: "FlexiPDF Document Suite",
    category: "Full Stack",
    short: "Zero-retention, browser-based PDF manipulation suite with a hybrid client/server processing pipeline.",
    description: `FlexiPDF is a powerful, all-in-one web-based utility platform that brings desktop-grade PDF manipulation tools directly to the browser. Designed with a zero-retention privacy policy, all files are processed and immediately deleted after download — ensuring absolute data security.

The platform leverages a smart hybrid architecture: lightweight operations are handled client-side for instant feedback, while heavy-duty processing is offloaded to a Node.js server pipeline.`,
    features: [
      "Universal PDF Conversion Suite (Word, Excel, JPG, HTML)",
      "Advanced Document Organization (Merge, Split, Rotate, Reorder)",
      "Full-Featured Browser Editor with Annotation Capabilities",
      "Enterprise-Grade Security (Password Protect, Unlock, Redact)",
      "Smart Compression & Optimization Engine",
      "Hybrid Client-Side / Server-Side Processing Pipeline",
      "Zero-Retention Privacy Policy for User Data"
    ],
    techStack: {
      frontend: ["React", "Component Architecture"],
      backend: ["Node.js", "Server-side PDF Processing"],
      other: ["File Handling Pipelines", "Render", "Security Protocols"]
    },
    roles: ["Full Stack Developer"],
    links: { live: "https://flexipdf-9frt.onrender.com/" },
    tags: ["PDF Tools", "React", "Node.js", "Web App", "File Processing"],
    image: "/images/gallery/Screenshot 2026-02-05 213011.png",
    gallery: [
      "/images/gallery/Screenshot 2026-02-05 212959.png",
      "/images/gallery/Screenshot 2026-02-05 213034.png",
      "/images/gallery/Screenshot 2026-02-05 213046.png",
      "/images/gallery/Screenshot 2026-02-05 213058.png",
      "/images/gallery/Screenshot 2026-02-05 213137.png"
    ],
    emoji: "📄"
  },
  {
    id: "crumblee-web",
    title: "Crumblee Food Discovery",
    category: "Full Stack",
    short: "Modern restaurant discovery web app with intelligent multi-parameter search and server-side rendering.",
    description: `Crumblee is a modern, discovery-focused web application designed to help users find the best dining experiences based on their specific preferences and location. Built using Next.js, it prioritizes performance and SEO with server-side rendering for lightning-fast page loads.

The application features a sophisticated search and filtering system — users can explore restaurants by cuisine, location, rating, and price range — all served via RESTful API integrations.`,
    features: [
      "Location-Based Intelligent Restaurant Search",
      "Advanced Multi-Parameter Filtering System",
      "Dynamic Consumption of Structured Restaurant Data",
      "High-Performance Server-Side Rendering (SSR)",
      "Responsive, Mobile-First UI Design",
      "RESTful API Integration Architecture"
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript"],
      backend: ["REST APIs"],
      other: ["Vercel"]
    },
    roles: ["Full Stack Developer"],
    links: { live: "https://crumblee-web-rc8f-git-main-saud-ali-khans-projects.vercel.app/" },
    tags: ["Next.js", "React", "Web App", "Search", "Discovery"],
    image: "/images/gallery/Screenshot 2026-02-05 203534.png",
    gallery: [],
    emoji: "🍕"
  },
  {
    id: "ma-electricals",
    title: "MA Electricals Website",
    category: "Frontend",
    short: "Lead-generating corporate website for an electrical contractor with SEO-optimized architecture and mobile-first layout.",
    description: `MA Electricals is a professional digital presence for an established electrical services provider, engineered to convert site visitors into business leads. The website showcases the company's expertise through dedicated service pages, a project portfolio, and clear calls-to-action.

Developed with clean, semantic HTML5, modern CSS3, and JavaScript, the site is optimized for speed and search engine visibility. It ensures a flawless experience on all devices — a critical requirement for emergency service searches on mobile.`,
    features: [
      "Professional Corporate Identity & Design",
      "Comprehensive Service Showcase & Portfolio",
      "Lead-Generating Contact Form System",
      "Fully Responsive Mobile-First Layout",
      "SEO-Optimized Semantic Structure",
      "High-Performance Static Asset Delivery"
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      other: ["GitHub Pages"]
    },
    roles: ["Frontend Developer", "UI/UX Designer"],
    links: { live: "https://saksaud7.github.io/maelectricals/" },
    tags: ["HTML", "CSS", "JavaScript", "Business Website", "SEO"],
    image: "/images/gallery/ma-electricals-main.png",
    gallery: [],
    emoji: "⚡"
  }
];
