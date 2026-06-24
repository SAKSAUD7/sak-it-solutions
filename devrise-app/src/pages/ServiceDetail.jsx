import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowRight, Quote, Plus, Minus } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default || CountUpModule;
import { services } from '../data/services';
import { MagneticButton } from '../components/ui/MagneticButton';
import { HowItWorks } from '../components/HowItWorks';
import { Helmet } from 'react-helmet-async';
import { logEvent } from '../lib/analytics';

const processSteps = {
  'web-static': ['Requirements & Discovery', 'Wireframes & Design System', 'Frontend Development', 'Performance Audit & Launch'],
  'web-dynamic': ['Architecture Design', 'API Contract Definition', 'Development & Testing', 'Deployment & Monitoring'],
  'web-enterprise': ['Requirements Mapping', 'Microservices Design', 'Backend Development', 'Scale Testing & Launch'],
  'app-ios': ['Platform Strategy', 'UX Prototyping', 'Native iOS Development', 'App Store Submission'],
  'app-android': ['Platform Strategy', 'UX Prototyping', 'Native Android Development', 'Play Store Submission'],
  'app-crossplatform': ['Cross-Platform Strategy', 'UX Prototyping', 'React Native / Flutter Dev', 'Dual Store Submission'],
  'marketing-seo': ['Technical SEO Audit', 'Keyword Strategy', 'On-Page Optimization', 'Analytics & Reporting'],
  'marketing-social': ['Brand Audit', 'Content Strategy', 'Asset Production', 'Community Management'],
  'marketing-ads': ['Campaign Strategy', 'Pixel & Tracking Setup', 'Ad Copy & Creative', 'A/B Testing & Optimization'],
  'ai-whatsapp': ['Knowledge Base Creation', 'LLM Prompt Engineering', 'WhatsApp API Setup', 'Testing & Deployment'],
  'ai-workflow': ['Systems Audit', 'Webhook & API Mapping', 'Scenario Building', 'Error Handling & Launch'],
  'platform-booking': ['Availability Logic', 'Payment Gateway Sync', 'Frontend Booking Flow', 'Calendar Syncing'],
  'platform-ecommerce': ['Data Migration', 'Shopify Plus Setup', 'Next.js Frontend Build', 'Load Testing & Launch'],
  'platform-dashboard': ['Workflow Mapping', 'Database Architecture', 'Role-based Access UI', 'Security Audit'],
};

const techByService = {
  'web-static': ['React / Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Lighthouse CI'],
  'web-dynamic': ['Next.js', 'Node.js', 'Django', 'PostgreSQL', 'Redis', 'AWS'],
  'web-enterprise': ['Docker', 'Kubernetes', 'Go / Node.js', 'PostgreSQL', 'Terraform', 'AWS ECS'],
  'app-ios': ['Swift', 'SwiftUI', 'CoreData', 'ARKit', 'App Store Connect'],
  'app-android': ['Kotlin', 'Jetpack Compose', 'Room', 'Firebase', 'Google Play Console'],
  'app-crossplatform': ['React Native', 'Flutter', 'Expo', 'Supabase', 'Firebase'],
  'marketing-seo': ['Google Search Console', 'Ahrefs', 'Screaming Frog'],
  'marketing-social': ['Figma', 'Premiere Pro', 'Later', 'Sprout Social'],
  'marketing-ads': ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'GTM'],
  'ai-whatsapp': ['OpenAI / Claude', 'WhatsApp Cloud API', 'Python', 'LangChain', 'Pinecone'],
  'ai-workflow': ['Make.com', 'Zapier', 'Custom Webhooks', 'Node.js', 'Postman'],
  'platform-booking': ['React', 'Node.js', 'Stripe', 'Google Calendar API', 'Twilio'],
  'platform-ecommerce': ['Next.js', 'Shopify Storefront API', 'Vercel', 'Tailwind CSS', 'Sanity CMS'],
  'platform-dashboard': ['React', 'Django / Node.js', 'PostgreSQL', 'Chart.js / D3', 'AWS'],
};

export const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const steps = processSteps[id] || ['Discovery', 'Design', 'Build', 'Launch'];
  const techs = techByService[id] || [];
  const [openFaq, setOpenFaq] = useState(null);

  // Related services (other 3)
  const related = services.filter(s => s.id !== id).slice(0, 3);

  // Next Service Logic
  const currentIndex = services.findIndex(s => s.id === id);
  const nextService = services[(currentIndex + 1) % services.length];

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-primary hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      <Helmet>
        <title>{service.title} | 360 DevRise</title>
        <meta name="description" content={service.longDesc?.slice(0, 160)} />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden" style={{ background: 'linear-gradient(135deg, #040408 0%, #06091a 60%, #040408 100%)' }}>
        {/* Aurora bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-[120px]`} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040408] via-[#040408]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-16 pt-28 md:py-24 md:pt-36">
          <div className="flex items-center justify-between w-full mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-500 hover:text-white transition-colors">
              <ArrowLeft size={14} /> All Services
            </Link>
            
            {nextService && (
              <Link to={`/services/${nextService.id}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary hover:text-white transition-colors">
                Next Service <ArrowRight size={14} />
              </Link>
            )}
          </div>

          {/* Icon */}
          <div className={`mb-8 w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-2xl`}>
            {React.cloneElement(service.icon, { size: 36 })}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-none uppercase tracking-tight"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10"
          >
            {service.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <MagneticButton
              href={`https://wa.me/917411091256?text=${encodeURIComponent(`Hi, I am interested in the ${service.title} service. Could I get a free quote?`)}`}
              onClick={() => logEvent('Lead', 'WhatsApp Click', `${service.title} - Hero`)}
              className="inline-flex items-center gap-3 rounded-full bg-white text-black px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl"
            >
              Get a Free Quote <ArrowRight size={16} />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ── Media Showcase & Technical Deep Dive ─────────── */}
      <section className="py-16 md:py-24 px-6 border-t border-white/5 overflow-hidden relative" style={{ background: 'linear-gradient(180deg, #040408 0%, #07091a 100%)' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[130px] rounded-full -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Overview</h2>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold mb-6 leading-tight">Beyond generic solutions. We engineer for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">scale</span>.</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{service.longDesc}</p>
              </div>

              {/* Dynamic Impact Metrics */}
              {service.metrics && (
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                  {service.metrics.map((metric, i) => {
                    // Extract number from string (e.g. "+80%" -> prefix: "+", num: 80, suffix: "%")
                    const match = metric.value.match(/^([^0-9]*)([0-9.]+)([^0-9]*)$/);
                    return (
                      <div key={i}>
                        <div className="text-2xl sm:text-3xl font-black text-white font-heading mb-1">
                          {match ? (
                            <>
                              {match[1]}
                              <CountUp end={parseFloat(match[2])} duration={2.5} enableScrollSpy scrollSpyOnce />
                              {match[3]}
                            </>
                          ) : (
                            metric.value
                          )}
                        </div>
                        <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl group"
            >
              <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500`} />
              <img
                src={service.mediaImage || "/images/gallery/1.png"}
                alt={service.title}
                className="w-full h-[300px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Execution Flow & Tech Stack ───────────────────── */}
      <section className="py-16 md:py-24 px-6 border-t border-white/5 relative overflow-hidden" style={{ background: '#030305' }}>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Execution Roadmap</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-black uppercase">How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Works</span></h3>
          </div>

          {/* Flow Diagram */}
          <div className="relative mb-24">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[50%] left-[10%] right-[10%] h-[2px] bg-white/5 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0a0a0f] border border-white/10 flex items-center justify-center font-heading font-black text-2xl text-white/50 mb-6 group-hover:border-primary/50 group-hover:text-primary transition-all group-hover:shadow-[0_0_30px_rgba(108,99,255,0.2)] group-hover:scale-110 duration-300">
                    0{index + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest leading-relaxed px-4">{step}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          {techs && techs.length > 0 && (
            <div className="pt-16 border-t border-white/5 text-center">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-8">What's Needed (Tech Stack)</h2>
              <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
                {techs.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Key Features & Tiers ─────────────────────────── */}
      <section className="py-16 md:py-24 px-6 border-t border-white/5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #04040c 0%, #070b1a 50%, #04040c 100%)' }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 md:gap-16">
            <div className="space-y-12 md:space-y-16">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-10">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((f, i) => (
                    <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={1000} gyroscope={true}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-4 bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-2xl hover:border-primary/50 hover:bg-white/[0.08] transition-all h-full"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-[0_0_15px_rgba(108,99,255,0.2)]">
                          <CheckCircle2 className="text-primary" size={18} />
                        </div>
                        <span className="text-sm font-medium text-gray-200 leading-relaxed mt-2">{f}</span>
                      </motion.div>
                    </Tilt>
                  ))}
                </div>
              </div>

              {/* Tiers Component */}
              {service.tiers && service.tiers.length > 0 && (
                <div>
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-10">Engagement Models</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {service.tiers.map((tier, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-white/30 transition-all flex flex-col overflow-hidden group"
                      >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.color} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity`} />
                        <h3 className="font-heading font-bold text-2xl uppercase mb-2 relative z-10">{tier.name}</h3>
                        <div className="text-sm text-primary uppercase tracking-widest font-bold mb-8 relative z-10">{tier.price}</div>

                        <ul className="space-y-4 mb-8 flex-grow relative z-10">
                          {tier.features.map((tf, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                              <span className="text-white/30 mt-0.5">•</span> {tf}
                            </li>
                          ))}
                        </ul>

                        <a href={`https://wa.me/917411091256?text=${encodeURIComponent(`Hi, I am interested in the ${tier.name} tier for the ${service.title} service.`)}`} onClick={() => logEvent('Lead', 'WhatsApp Click', `${service.title} - Tier: ${tier.name}`)} className="relative z-10 w-full text-center rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all">
                          Inquire Now
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: Tech Stack & Testimonial */}
            <div className="space-y-6">
              {techs.length > 0 && (
                <div className="rounded-3xl border border-white/10 bg-[#0a0a12] p-8">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map(t => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Testimonial */}
              {service.testimonial && (
                <div className="rounded-3xl border border-white/10 bg-[#050508] p-8 relative overflow-hidden">
                  <Quote size={40} className="absolute top-4 right-4 text-white/5" />
                  <p className="text-gray-300 italic mb-6 relative z-10">"{service.testimonial.quote}"</p>
                  <div className="border-t border-white/10 pt-4 relative z-10">
                    <p className="font-bold text-sm text-white">{service.testimonial.author}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{service.testimonial.role}</p>
                  </div>
                </div>
              )}

              {/* CTA card */}
              <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
                <h3 className="font-heading text-xl font-bold mb-3">Ready to start?</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Talk to our team today. Free 30-min consultation, no commitment.</p>
                <MagneticButton href={`https://wa.me/917411091256?text=${encodeURIComponent(`Hi, I would like to schedule a free 30-min consultation for the ${service.title} service.`)}`} onClick={() => logEvent('Lead', 'WhatsApp Click', `${service.title} - Footer CTA`)} className="block w-full text-center rounded-2xl bg-white text-black px-6 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all">
                  WhatsApp Us Now
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Enterprise Integrations Marquee ──────────────────────── */}
      <div className="border-t border-b border-white/5 bg-[#030305] py-8 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030305] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030305] to-transparent z-10" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap gap-16 text-lg font-black uppercase tracking-widest text-gray-500/50"
        >
          {/* Double the array for seamless loop */}
          {[...techs, ...techs, ...techs, ...techs].map((t, idx) => (
            <span key={idx} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-primary/50" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Targeted FAQs ─────────────────────────────────── */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 px-6 bg-[#030305] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">Knowledge Base</div>
              <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase">Common <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Questions</span></h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
                  <button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="font-bold text-lg pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                      {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <p className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Our Process ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-12 text-center md:text-left">Execution Roadmap</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-white/30 transition-all group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="text-7xl font-black text-white/5 font-heading mb-4 leading-none">0{i + 1}</div>
                <h3 className="font-heading font-bold text-lg uppercase relative z-10">{step}</h3>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight size={16} className="text-white/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Build It ────────────────────────────── */}
      <HowItWorks
        title="How We Build Your Project"
        subtitle={`Everything we do to deliver your ${service.title} from zero to launch.`}
      />

      {/* ── Other Services ───────────────────────────────── */}
      <section className="py-24 px-6 bg-[#050508] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-12">Explore More Services</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="group rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-white/30 transition-all hover:-translate-y-2 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${s.color} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity`} />
                <div className={`mb-6 w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white relative z-10`}>
                  {s.icon}
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 uppercase relative z-10">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">{s.desc}</p>
                <span className="text-xs uppercase tracking-widest font-bold text-primary group-hover:text-white transition-colors flex items-center gap-2 relative z-10">
                  Learn More <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
