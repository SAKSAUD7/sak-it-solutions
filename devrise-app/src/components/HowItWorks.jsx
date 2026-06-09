import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, PenSquare, Code2, Database, Plug, TestTube2,
  Globe, Rocket, HeartHandshake, ChevronRight, Check
} from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: <Search size={24} />,
    title: 'Discovery & Planning',
    subtitle: 'Understanding your vision',
    desc: 'We start with a deep-dive call to understand your goals, target audience, and competitors. You receive a full project brief, sitemap, and timeline.',
    tags: ['Requirements Docs', 'Sitemap', 'Project Brief', 'Timeline'],
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.3)',
    optional: false,
  },
  {
    num: '02',
    icon: <PenSquare size={24} />,
    title: 'UI/UX Design',
    subtitle: 'Visualizing before building',
    desc: 'Our designers create pixel-perfect wireframes and interactive prototypes in Figma. You see and approve the exact experience before a single line of code is written.',
    tags: ['Figma Mockups', 'Wireframes', 'Prototype', 'Design System', 'Color & Typography'],
    color: 'from-purple-500 to-pink-500',
    glow: 'rgba(168,85,247,0.3)',
    optional: false,
  },
  {
    num: '03',
    icon: <Code2 size={24} />,
    title: 'Frontend Development',
    subtitle: 'Building what the user sees',
    desc: 'We code your website using modern frameworks. Every page is responsive, animated, and optimized. This is where your design becomes a real, live experience.',
    tags: ['React / Next.js', 'HTML & CSS', 'Framer Motion', 'Tailwind CSS', 'Cross-Device Testing'],
    color: 'from-indigo-500 to-blue-500',
    glow: 'rgba(99,102,241,0.3)',
    optional: false,
  },
  {
    num: '04',
    icon: <Database size={24} />,
    title: 'Backend & Database',
    subtitle: 'The engine under the hood',
    desc: 'For dynamic websites, web apps, and platforms — we build a secure backend with a database. This powers logins, dashboards, product catalogues, and bookings.',
    tags: ['Node.js / Django', 'PostgreSQL / MySQL', 'REST APIs', 'Authentication', 'Admin Panel'],
    color: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.3)',
    optional: true,
    optionalNote: 'Required for dynamic sites & apps',
  },
  {
    num: '05',
    icon: <Plug size={24} />,
    title: 'Integrations & Automations',
    subtitle: 'Connecting your tools',
    desc: 'We integrate payment gateways, WhatsApp, CRM tools, booking systems, email providers, and any third-party service your business depends on.',
    tags: ['Stripe / Razorpay', 'WhatsApp API', 'Google Calendar', 'Zapier / Make', 'Email / SMS'],
    color: 'from-orange-500 to-yellow-500',
    glow: 'rgba(249,115,22,0.3)',
    optional: true,
    optionalNote: 'As needed per project scope',
  },
  {
    num: '06',
    icon: <TestTube2 size={24} />,
    title: 'Testing & QA',
    subtitle: 'Ensuring everything works perfectly',
    desc: 'We run a thorough quality audit — testing on every browser, device, and screen size. We fix bugs, verify form submissions, and optimize performance scores.',
    tags: ['Cross-Browser Testing', 'Mobile Testing', 'Google Lighthouse', 'Bug Fixes', 'Performance Audit'],
    color: 'from-rose-500 to-red-500',
    glow: 'rgba(244,63,94,0.3)',
    optional: false,
  },
  {
    num: '07',
    icon: <Globe size={24} />,
    title: 'Hosting & Domain',
    subtitle: 'Making it live on the internet',
    desc: 'We deploy your website to a fast, secure server and connect your domain. SSL certificate (HTTPS), CDN setup, and email configuration are all handled.',
    tags: ['Vercel / AWS / Hostinger', 'Domain Connection', 'SSL Certificate', 'CDN Setup', 'Email Hosting'],
    color: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6,182,212,0.3)',
    optional: false,
  },
  {
    num: '08',
    icon: <Rocket size={24} />,
    title: 'SEO & Launch',
    subtitle: 'Getting found on Google',
    desc: 'Before going live, we set up on-page SEO, submit your sitemap to Google Search Console, install Analytics, and ensure your site is ready to rank.',
    tags: ['On-Page SEO', 'Google Analytics', 'Search Console', 'Sitemap', 'Meta Tags & OG Images'],
    color: 'from-violet-500 to-purple-500',
    glow: 'rgba(124,58,237,0.3)',
    optional: false,
  },
  {
    num: '09',
    icon: <HeartHandshake size={24} />,
    title: 'Support & Growth',
    subtitle: 'We stay your tech partner',
    desc: 'Every project includes 30 days of free post-launch support. We offer monthly maintenance retainers for ongoing updates, feature additions, and performance monitoring.',
    tags: ['30-Day Support', 'Bug Fixes', 'Monthly Retainer', 'Feature Updates', 'Uptime Monitoring'],
    color: 'from-green-500 to-emerald-500',
    glow: 'rgba(34,197,94,0.3)',
    optional: false,
  },
];

export const HowItWorks = ({ title = "How We Build Your Product", subtitle = "From idea to live website — a transparent, step-by-step process." }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      className="py-32 px-6 border-t border-white/5 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #040408 0%, #07091a 50%, #040408 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Our Process
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase mb-6">
            {title.split(' ').map((word, i, arr) =>
              i === arr.length - 1
                ? <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400"> {word}</span>
                : <span key={i}>{word} </span>
            )}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">

          {/* Left: Step List */}
          <div className="space-y-2 sticky top-32">
            {steps.map((step, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setActiveStep(i)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border text-left transition-all duration-300 ${
                  activeStep === i
                    ? 'border-primary/50 bg-primary/10 shadow-[0_0_25px_rgba(108,99,255,0.15)]'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/5'
                }`}
              >
                {/* Step dot */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                  activeStep === i
                    ? `bg-gradient-to-br ${step.color} shadow-lg`
                    : 'bg-white/5 border border-white/10'
                }`}>
                  <span className="text-white">
                    {activeStep > i
                      ? <Check size={16} />
                      : <span className="text-xs font-black">{step.num}</span>
                    }
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm text-white truncate">{step.title}</div>
                  <div className="text-xs text-gray-500 truncate">{step.subtitle}</div>
                </div>

                {step.optional && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-500/70 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-2 py-0.5 flex-shrink-0">
                    Optional
                  </span>
                )}

                <ChevronRight
                  size={14}
                  className={`flex-shrink-0 transition-transform ${activeStep === i ? 'text-primary rotate-90' : 'text-white/20'}`}
                />
              </motion.button>
            ))}
          </div>

          {/* Right: Active Step Detail Card */}
          <div className="relative">
            {steps.map((step, i) => (
              i === activeStep && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a14] to-[#0c0c1e] overflow-hidden"
                  style={{ boxShadow: `0 0 60px ${step.glow}` }}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${step.color}`} />

                  <div className="p-10">
                    {/* Step Header */}
                    <div className="flex items-start gap-6 mb-10">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-2xl flex-shrink-0`}
                        style={{ boxShadow: `0 10px 40px ${step.glow}` }}
                      >
                        {React.cloneElement(step.icon, { size: 36 })}
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Step {step.num}</div>
                        <h3 className="font-heading text-3xl font-black uppercase mb-1">{step.title}</h3>
                        <p className={`text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-10 border-l-2 border-primary/30 pl-6">
                      {step.desc}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-5">
                        {step.optional ? 'Includes' : 'Deliverables & Tools'}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {step.tags.map((tag, j) => (
                          <motion.span
                            key={j}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: j * 0.06 }}
                            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 hover:border-primary/30 hover:text-white transition-colors"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color} flex-shrink-0`} />
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Optional badge */}
                    {step.optional && (
                      <div className="mt-8 flex items-center gap-3 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 px-5 py-4">
                        <span className="text-yellow-400 text-xl">⚡</span>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-yellow-500">Optional Step</div>
                          <div className="text-sm text-gray-400">{step.optionalNote}</div>
                        </div>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="mt-10 flex items-center justify-between pt-8 border-t border-white/5">
                      <button
                        onClick={() => setActiveStep(Math.max(0, i - 1))}
                        disabled={i === 0}
                        className="px-6 py-3 rounded-xl border border-white/10 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:border-white/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ← Previous
                      </button>
                      <span className="text-xs text-gray-600 font-bold uppercase tracking-widest">
                        {i + 1} / {steps.length}
                      </span>
                      <button
                        onClick={() => setActiveStep(Math.min(steps.length - 1, i + 1))}
                        disabled={i === steps.length - 1}
                        className={`px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                          i < steps.length - 1
                            ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                            : 'border border-white/10 text-gray-400'
                        }`}
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            ))}

            {/* Progress Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`rounded-full transition-all ${
                    i === activeStep ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
