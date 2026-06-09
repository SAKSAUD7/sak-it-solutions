import React from 'react';
import { Code, Smartphone, Globe, PenTool, BarChart, Server, MonitorPlay, Zap, ShieldCheck, Bot, Workflow, Calendar, ShoppingCart, LayoutDashboard } from 'lucide-react';

export const services = [
  // WEB DEVELOPMENT
  { 
    id: "web-static",
    category: "Web Development",
    icon: <Globe size={24} />, 
    title: "Static Websites", 
    desc: "Beautiful, lightning-fast websites for businesses, portfolios and landing pages.",
    longDesc: "First impressions are everything. We build lightning-fast, highly aesthetic static websites designed to convert visitors into leads. Using modern frameworks like React and Next.js (SSG), we guarantee perfect Lighthouse scores, ensuring your site ranks higher on Google and provides a flawless experience across all devices.",
    features: ["Sub-second Load Times", "Perfect Google Lighthouse Scores", "Responsive Mobile-First Design", "Basic SEO Setup", "Contact Form Integrations"],
    color: "from-blue-500 to-cyan-400",
    mediaImage: "/images/gallery/service_web_static.png",
    metrics: [
      { label: "Avg Load Time", value: "< 0.8s" },
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Conversion Rate", value: "+40%" }
    ],
    faqs: [
      { q: "What is a static website?", a: "A static website delivers pre-rendered HTML/CSS to the user, making it incredibly fast and secure since there is no database processing on the fly." },
      { q: "Can I update the content myself?", a: "Yes, we can integrate a Headless CMS (like Sanity) that allows you to edit text and images without touching the code, while retaining the speed of a static site." },
      { q: "How long does it take to build?", a: "Typically, a premium 5-page static website takes between 2 to 4 weeks from design to launch." }
    ],
    testimonial: {
      quote: "Our new landing page is ridiculously fast. Since the redesign, our bounce rate dropped by 60% and lead form submissions have doubled.",
      author: "Michael T.",
      role: "Director of Marketing"
    },
    tiers: [
      { name: 'Starter', price: 'Fixed Quote', features: ['Up to 5 Pages', 'Mobile Responsive', 'Contact Form', '1 Month Support'] },
      { name: 'Professional', price: 'Fixed Quote', features: ['Up to 15 Pages', 'Custom Animations', 'CMS Integration', 'Basic SEO', '3 Months Support'] }
    ]
  },
  { 
    id: "web-dynamic",
    category: "Web Development",
    icon: <Zap size={24} />, 
    title: "Dynamic Websites & Web Apps", 
    desc: "Interactive websites with logins, dashboards, bookings, and real-time features.",
    longDesc: "When a static site isn't enough, we build dynamic web applications that react in real-time. Whether it's an e-commerce storefront, a booking platform, or a custom CMS, we engineer interactive interfaces powered by headless CMS architectures and REST/GraphQL APIs.",
    features: ["User Authentication", "Real-Time Databases", "Payment Gateway Integration", "Dynamic Content Management", "Third-Party API Integrations"],
    color: "from-indigo-500 to-purple-500",
    mediaImage: "/images/gallery/service_web_dynamic.png",
    metrics: [
      { label: "Uptime SLA", value: "99.9%" },
      { label: "API Response", value: "< 200ms" },
      { label: "Data Sync", value: "Real-Time" }
    ],
    faqs: [
      { q: "What makes a site dynamic?", a: "Dynamic sites process data on a server and generate pages on-the-fly, allowing for user logins, shopping carts, and live feeds." },
      { q: "Do you handle payment integrations?", a: "Yes, we integrate with Stripe, Razorpay, PayPal, and custom global payment gateways depending on your requirements." },
      { q: "Can you migrate my existing database?", a: "Absolutely. We handle complex data migrations from legacy systems into modern PostgreSQL or NoSQL architectures with zero data loss." }
    ],
    testimonial: {
      quote: "The booking platform they built handles our entire operations. It's flawless, scalable, and the Stripe integration worked perfectly from day one.",
      author: "Sarah K.",
      role: "Operations Manager"
    },
    tiers: [
      { name: 'Business', price: 'Custom Scope', features: ['Custom Database', 'User Authentication', 'Admin Dashboard', 'Payment Integration'] }
    ]
  },
  { 
    id: "web-enterprise",
    category: "Web Development",
    icon: <ShieldCheck size={24} />, 
    title: "Enterprise Web Platforms", 
    desc: "Scalable, secure SaaS products built for large teams and enterprise workloads.",
    longDesc: "We architect and scale multi-tenant SaaS products built for enterprise requirements. From complex role-based access control (RBAC) to microservices architecture, we ensure your platform is secure, compliant, and capable of handling millions of concurrent requests without breaking a sweat.",
    features: ["Multi-Tenant Architecture", "Microservices & Docker", "Advanced Role-Based Access Control", "Data Encryption & Compliance", "Automated CI/CD Pipelines"],
    color: "from-emerald-500 to-teal-400",
    mediaImage: "/images/gallery/service_web_saas.png",
    metrics: [
      { label: "Concurrent Users", value: "10k+" },
      { label: "Deployments", value: "Zero Downtime" },
      { label: "Security", value: "Bank-Grade" }
    ],
    faqs: [
      { q: "What is multi-tenancy?", a: "Multi-tenancy allows a single instance of software to serve multiple separate customer organizations (tenants) securely and independently." },
      { q: "How do you handle security compliance?", a: "We build with strict adherence to OWASP guidelines, encrypt data at rest and in transit, and can accommodate HIPAA or GDPR compliance requirements." },
      { q: "Will I own the source code?", a: "Yes. Upon project completion and final payment, you retain 100% intellectual property ownership of the codebase." }
    ],
    testimonial: {
      quote: "We needed a platform capable of handling thousands of medical records securely. The microservices architecture 360 DevRise implemented is bulletproof.",
      author: "Dr. James O.",
      role: "Chief Medical Officer"
    },
    tiers: [
      { name: 'Enterprise', price: 'Retainer / Milestone', features: ['Microservices', 'SLA Guarantees', 'Dedicated Engineering Team', '24/7 Monitoring'] }
    ]
  },

  // APP DEVELOPMENT
  { 
    id: "app-ios",
    category: "App Development",
    icon: <Smartphone size={24} />, 
    title: "iOS App Development", 
    desc: "Premium iPhone & iPad apps built natively with Swift for the Apple ecosystem.",
    longDesc: "We build native iOS applications using Swift that take full advantage of Apple's hardware and software ecosystem. From flawless ARKit integrations to smooth CoreAnimation transitions, we deliver an uncompromised, premium experience for iPhone and iPad users.",
    features: ["Swift & SwiftUI", "Apple HealthKit & ARKit", "Native Push Notifications", "Strict App Store Compliance"],
    color: "from-slate-600 to-slate-400",
    mediaImage: "/images/gallery/service_app_ios.png",
    metrics: [
      { label: "App Store Approval", value: "100%" },
      { label: "Crash-Free Rate", value: "99.8%" },
      { label: "Performance", value: "60 FPS" }
    ],
    faqs: [
      { q: "Do you handle App Store submission?", a: "Yes, we handle the entire process from provisioning profiles and certificates to passing the strict Apple App Store review process." },
      { q: "Why choose Native iOS over Cross-platform?", a: "Native iOS provides absolute maximum performance, the most fluid animations, and direct access to Apple-specific hardware like the LiDAR scanner or Neural Engine." }
    ],
    testimonial: {
      quote: "The UI feels incredibly smooth. We tried building it cross-platform before, but going Native with 360 DevRise made it feel like a true Apple app.",
      author: "Elena R.",
      role: "Product Founder"
    },
    tiers: []
  },
  { 
    id: "app-android",
    category: "App Development",
    icon: <MonitorPlay size={24} />, 
    title: "Android App Development", 
    desc: "Powerful Android apps reaching billions of users across all devices.",
    longDesc: "Reach billions of users with a native Android application built in Kotlin. We handle the fragmentation of the Android ecosystem, ensuring your app runs perfectly on thousands of different devices, screen sizes, and OS versions without performance drops.",
    features: ["Kotlin Architecture", "Material Design System", "Google Play Services", "Hardware Optimization"],
    color: "from-green-500 to-emerald-400",
    mediaImage: "/images/gallery/service_app_android.png",
    metrics: [
      { label: "Device Coverage", value: "12,000+" },
      { label: "Play Store Ready", value: "Yes" },
      { label: "Architecture", value: "MVVM" }
    ],
    faqs: [
      { q: "How do you handle Android fragmentation?", a: "We use responsive layouts, vector graphics, and rigorous testing across different OS versions and screen densities to ensure consistency." },
      { q: "Do you implement Material Design?", a: "Yes, our designs strictly adhere to Google's Material Design 3 principles for intuitive and native-feeling user experiences." }
    ],
    testimonial: {
      quote: "We have users on hundreds of different Android models globally. 360 DevRise ensured the app performed flawlessly on older devices and flagships alike.",
      author: "David M.",
      role: "Head of Mobile"
    },
    tiers: []
  },
  { 
    id: "app-crossplatform",
    category: "App Development",
    icon: <Code size={24} />, 
    title: "Cross-Platform Mobile Apps", 
    desc: "One app, both iPhone & Android — built with React Native or Flutter.",
    longDesc: "Maximize your ROI by developing cross-platform mobile applications. Using React Native and Flutter, we build single-codebase apps that compile natively to both iOS and Android. It cuts development time and cost in half while maintaining 95% of the performance of a pure native app.",
    features: ["React Native & Flutter", "Unified Codebase", "Faster Time-to-Market", "Over-The-Air (OTA) Updates"],
    color: "from-pink-500 to-rose-400",
    mediaImage: "/images/gallery/service_app_cross.png",
    metrics: [
      { label: "Code Reusability", value: "~90%" },
      { label: "Time Saved", value: "40%" },
      { label: "Cost Reduction", value: "50%" }
    ],
    faqs: [
      { q: "What is the difference between React Native and Flutter?", a: "React Native uses Javascript/React while Flutter uses Dart. Both compile to native code. We choose the framework based on your team's familiarity and the app's animation requirements." },
      { q: "Will the app feel slow?", a: "No. Modern cross-platform frameworks compile down to native C++ and Objective-C/Java primitives. To the end-user, it is indistinguishable from a native app." },
      { q: "Can we use device hardware like the camera?", a: "Yes, we can bridge to native modules to access cameras, GPS, Bluetooth, and biometric sensors." }
    ],
    testimonial: {
      quote: "Releasing on both iOS and Android simultaneously without hiring two separate teams saved our startup. The app feels incredibly fast.",
      author: "Priya T.",
      role: "Startup Founder"
    },
    tiers: [
      { name: 'MVP', price: 'Fixed Scope', features: ['Core Features Only', 'iOS & Android Export', 'Basic Analytics', 'Store Submission'] },
      { name: 'Scale', price: 'Custom Quote', features: ['Full Feature Set', 'Custom Animations', 'Advanced Backend', 'Post-Launch Support'] }
    ]
  },

  // DIGITAL MEDIA MARKETING
  { 
    id: "marketing-seo",
    category: "Digital Marketing",
    icon: <BarChart size={24} />, 
    title: "SEO & Search Rankings", 
    desc: "Get your website found on Google and rank above your competitors.",
    longDesc: "We don't just guess; we reverse-engineer search algorithms. Our technical SEO services dive deep into site architecture, schema markup, core web vitals, and programmatic content generation to ensure your digital platform becomes an organic lead-generation machine.",
    features: ["Comprehensive SEO Audit", "Advanced Schema Markup", "Programmatic SEO", "Backlink Strategy", "Competitor Gap Analysis"],
    color: "from-orange-500 to-yellow-400",
    mediaImage: "/images/gallery/service_web_dynamic.png",
    metrics: [
      { label: "Organic Traffic", value: "+250%" },
      { label: "Domain Rating", value: "Increased" },
      { label: "Keyword Rankings", value: "Page 1" }
    ],
    faqs: [
      { q: "How long does SEO take to see results?", a: "Technical SEO fixes (like speed and schema) can show results in weeks. Content and backlink-driven ranking improvements typically take 3 to 6 months to mature." },
      { q: "What is Programmatic SEO?", a: "It's the automation of thousands of targeted landing pages based on datasets, allowing you to capture long-tail keyword traffic efficiently." },
      { q: "Do you guarantee a #1 ranking?", a: "No reputable agency can guarantee a #1 spot due to Google's proprietary algorithm. However, we guarantee that we execute the exact strategies used by industry leaders to maximize your probability of ranking." }
    ],
    testimonial: {
      quote: "Within 4 months, our organic traffic tripled. We stopped relying solely on paid ads because the inbound leads from Google were highly qualified.",
      author: "Alex C.",
      role: "E-commerce Director"
    },
    tiers: [
      { name: 'Local SEO', price: 'Monthly Retainer', features: ['Google My Business', 'Local Citations', 'On-Page SEO', 'Monthly Reporting'] },
      { name: 'National/Global', price: 'Monthly Retainer', features: ['Technical SEO Audit', 'Content Strategy', 'Programmatic Pages', 'Advanced Analytics'] }
    ]
  },
  { 
    id: "marketing-social",
    category: "Digital Marketing",
    icon: <PenTool size={24} />, 
    title: "Social Media Marketing", 
    desc: "Grow your brand on Instagram, LinkedIn, and TikTok with scroll-stopping content.",
    longDesc: "Attention is the new currency. We build and execute high-impact social media strategies designed to capture attention and build authority. From high-production video reels to thought-leadership LinkedIn posts, we make your brand impossible to ignore.",
    features: ["Content Calendar Management", "Short-Form Video Production", "Community Management", "Brand Voice Architecture"],
    color: "from-red-500 to-rose-400",
    mediaImage: "/images/gallery/service_web_static.png",
    metrics: [
      { label: "Engagement Rate", value: "+150%" },
      { label: "Follower Growth", value: "Organic" },
      { label: "Brand Reach", value: "Millions" }
    ],
    faqs: [
      { q: "Which platforms do you manage?", a: "We specialize in Instagram, LinkedIn, X (Twitter), and TikTok, tailoring the content format specifically for each algorithm." },
      { q: "Do you handle video production?", a: "Yes. We offer scriptwriting, video editing, and motion graphics specifically optimized for short-form content like Reels and Shorts." }
    ],
    testimonial: {
      quote: "Our LinkedIn presence was nonexistent. 360 DevRise built a content strategy that positioned our CEO as an industry thought leader within weeks.",
      author: "Jessica M.",
      role: "PR Manager"
    },
    tiers: []
  },
  { 
    id: "marketing-ads",
    category: "Digital Marketing",
    icon: <Server size={24} />, 
    title: "Google & Meta Paid Ads", 
    desc: "High-ROI ad campaigns on Google, Facebook, and Instagram that drive real sales.",
    longDesc: "Stop burning money on ineffective ads. We run aggressive, highly-targeted Pay-Per-Click campaigns across Google, Meta, and LinkedIn. By utilizing advanced pixel tracking and conversion APIs, we track exactly how much revenue every ad dollar generates.",
    features: ["Google Search & Display Ads", "Meta (Facebook/IG) Ads", "LinkedIn B2B Lead Gen", "A/B Multivariate Testing", "Conversion API Setup"],
    color: "from-cyan-500 to-blue-500",
    mediaImage: "/images/gallery/service_web_saas.png",
    metrics: [
      { label: "Target ROAS", value: "3x - 8x" },
      { label: "CPA Reduction", value: "-40%" },
      { label: "Tracking", value: "Server-Side" }
    ],
    faqs: [
      { q: "What is ROAS?", a: "Return on Ad Spend. If you spend $1,000 and generate $5,000 in revenue, your ROAS is 5x." },
      { q: "Do you handle ad creatives?", a: "Yes, our team designs all graphic banners, writes ad copy, and tests multiple variations to find the winning formula." },
      { q: "How much ad spend do I need?", a: "We recommend a minimum ad spend budget of $2,000/month to generate enough data for the algorithms to optimize effectively." }
    ],
    testimonial: {
      quote: "They restructured our entire Google Ads account. Our Cost-Per-Acquisition dropped by 45% in the first 30 days.",
      author: "Robert B.",
      role: "Chief Marketing Officer"
    },
    tiers: [
      { name: 'Growth', price: '% of Ad Spend', features: ['Campaign Setup', 'Ad Copy & Creative', 'Pixel Integration', 'Weekly Optimization'] }
    ]
  },

  // AI & AUTOMATION
  { 
    id: "ai-whatsapp",
    category: "AI & Automation",
    icon: <Bot size={24} />, 
    title: "WhatsApp AI Chatbots", 
    desc: "Custom-trained AI agents for 24/7 automated customer support and lead generation.",
    longDesc: "Transform your WhatsApp Business account into a 24/7 sales machine. We build custom conversational AI agents powered by GPT-4 and Claude that actually understand context, answer complex FAQs, qualify leads, and book appointments directly inside WhatsApp.",
    features: ["LLM Integration (GPT-4/Claude)", "Custom Knowledge Base Training", "Human Handoff Protocols", "WhatsApp Business API Setup", "Automated Appointment Booking"],
    color: "from-green-400 to-emerald-600",
    mediaImage: "/images/gallery/service_app_ios.png",
    metrics: [
      { label: "Response Time", value: "< 2s" },
      { label: "Resolution Rate", value: "85%" },
      { label: "Availability", value: "24/7" }
    ],
    faqs: [
      { q: "Will the AI hallucinate or give wrong info?", a: "No. We restrict the AI's knowledge base strictly to your company's data and documents. If it doesn't know the answer, it seamlessly hands the conversation over to a human agent." },
      { q: "Do we need the WhatsApp Business API?", a: "Yes, we handle the entire application and verification process with Meta to secure your official API access." }
    ],
    testimonial: {
      quote: "Our customer service team was drowning. The WhatsApp bot now handles 80% of routine inquiries instantly. It's like having a team of 10 working overnight.",
      author: "Priya R.",
      role: "Head of Operations"
    },
    tiers: [
      { name: 'Starter Bot', price: 'Fixed Scope', features: ['FAQ Training', 'Basic Lead Capture', 'WhatsApp Setup'] },
      { name: 'Enterprise AI', price: 'Custom Quote', features: ['Deep API Integrations', 'Custom LLM Fine-Tuning', 'Multi-Language Support'] }
    ]
  },
  { 
    id: "ai-workflow",
    category: "AI & Automation",
    icon: <Workflow size={24} />, 
    title: "Business Process Automation", 
    desc: "Connect your apps and eliminate manual tasks using smart automation tools.",
    longDesc: "Stop doing manual data entry. We architect complex, multi-step automation workflows using Make.com, Zapier, and custom webhooks. We connect your CRM, email, payment gateways, and databases so your business runs on autopilot.",
    features: ["Zapier / Make.com Architecture", "Custom API Webhooks", "CRM Syncing", "Invoice Automation", "Error Handling & Logging"],
    color: "from-orange-400 to-red-500",
    mediaImage: "/images/gallery/service_app_android.png",
    metrics: [
      { label: "Manual Hours Saved", value: "400+" },
      { label: "Data Accuracy", value: "100%" },
      { label: "Systems Connected", value: "Limitless" }
    ],
    faqs: [
      { q: "What software can you connect?", a: "If the software has an API, we can connect it. Common integrations include Salesforce, HubSpot, Stripe, Slack, Notion, and Google Workspace." },
      { q: "Is workflow automation secure?", a: "Yes, data is transferred via encrypted webhooks and API keys are stored securely following strict credential management protocols." }
    ],
    testimonial: {
      quote: "Every time a lead came in, we used to manually add them to 3 different sheets. Now, it happens instantly. The ROI on this automation was realized in the first week.",
      author: "David L.",
      role: "Sales Director"
    },
    tiers: []
  },

  // SPECIALIZED PLATFORMS
  { 
    id: "platform-booking",
    category: "Specialized Platforms",
    icon: <Calendar size={24} />, 
    title: "Custom Booking Systems", 
    desc: "High-performance scheduling platforms for clinics, salons, and consultants.",
    longDesc: "When Calendly or standard booking software doesn't fit your business model, we build custom scheduling engines. We implement dynamic availability, complex service routing, deposit payments, and deep Google Calendar sync, all wrapped in a premium UI.",
    features: ["Dynamic Calendar Sync", "Timezone Management", "Stripe Deposit Integration", "Automated SMS/Email Reminders", "Staff Availability Routing"],
    color: "from-blue-400 to-indigo-500",
    mediaImage: "/images/gallery/service_app_cross.png",
    metrics: [
      { label: "No-Show Reduction", value: "-60%" },
      { label: "Booking Speed", value: "< 30s" },
      { label: "Payments Processed", value: "Secure" }
    ],
    faqs: [
      { q: "Can clients reschedule automatically?", a: "Yes, clients receive unique links to manage or reschedule their appointments based on rules you define (e.g., no cancellations within 24 hours)." },
      { q: "Do you integrate SMS reminders?", a: "We integrate Twilio or local SMS providers to send automated confirmations and reminders, drastically reducing no-show rates." }
    ],
    testimonial: {
      quote: "Our clinic needed a booking system that handled 4 different doctor schedules and deposit payments. 360 DevRise delivered exactly what we needed.",
      author: "Dr. Sarah K.",
      role: "Clinic Director"
    },
    tiers: []
  },
  { 
    id: "platform-ecommerce",
    category: "Specialized Platforms",
    icon: <ShoppingCart size={24} />, 
    title: "E-Commerce Stores", 
    desc: "Fast, beautiful online stores built on Shopify, WooCommerce or custom backends.",
    longDesc: "For brands doing high volume, a slow site kills revenue. We build headless e-commerce architectures using Next.js/React on the frontend and Shopify Plus or custom databases on the backend. This delivers instant page loads and unparalleled UX.",
    features: ["Next.js Commerce", "Shopify Storefront API", "Sub-second Product Loads", "Advanced Filtering & Search", "Custom Cart Experiences"],
    color: "from-pink-400 to-rose-500",
    mediaImage: "/images/gallery/service_web_static.png",
    metrics: [
      { label: "Page Load Time", value: "< 1s" },
      { label: "Conversion Rate", value: "+35%" },
      { label: "Scalability", value: "Infinite" }
    ],
    faqs: [
      { q: "What does 'Headless' mean?", a: "Headless means separating the frontend (what the user sees) from the backend (the database/Shopify). This allows us to build incredibly fast, custom user interfaces without the limitations of standard Shopify themes." },
      { q: "Can we still use Shopify's dashboard?", a: "Yes. You continue to manage your products, inventory, and orders inside Shopify just like normal." }
    ],
    testimonial: {
      quote: "Going headless completely changed our business. The site loads instantly, even during Black Friday traffic spikes.",
      author: "Alex M.",
      role: "E-Commerce Founder"
    },
    tiers: [
      { name: 'Headless Build', price: 'Custom Quote', features: ['Custom UI/UX', 'Next.js Frontend', 'Shopify Backend', 'Advanced Search'] }
    ]
  },
  { 
    id: "platform-dashboard",
    category: "Specialized Platforms",
    icon: <LayoutDashboard size={24} />, 
    title: "Business Dashboard & CRM", 
    desc: "Custom management tools that replace expensive off-the-shelf software.",
    longDesc: "Generic software forces you to change how your business runs. We build custom ERP and CRM dashboards that adapt to you. Manage your team, track complex logistics, and visualize data securely on a platform you own 100%.",
    features: ["Custom Data Visualization", "Complex Role & Permission Systems", "Logistics & Inventory Tracking", "API Aggregation", "Export & Reporting Tools"],
    color: "from-purple-400 to-fuchsia-500",
    mediaImage: "/images/gallery/service_web_saas.png",
    metrics: [
      { label: "Operational Efficiency", value: "+80%" },
      { label: "Data Security", value: "Enterprise" },
      { label: "User Adoption", value: "High" }
    ],
    faqs: [
      { q: "Is this better than Salesforce?", a: "Salesforce is incredibly powerful but often bloated and expensive. A custom CRM gives you exactly what you need without the monthly per-user licensing fees." },
      { q: "Who owns the code?", a: "You do. We build it, deploy it to your servers (AWS/GCP), and hand over full intellectual property rights." }
    ],
    testimonial: {
      quote: "We replaced three different clunky software subscriptions with one custom dashboard built by 360 DevRise. It does exactly what we need.",
      author: "James T.",
      role: "Operations Manager"
    },
    tiers: []
  }
];
