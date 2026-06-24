import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Tilt from 'react-parallax-tilt';
import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default || CountUpModule;

import { services } from '../data/services.jsx';
import { projects } from '../data/projects';
import { HowItWorks } from '../components/HowItWorks';
import { QuoteModal } from '../components/QuoteModal';

const Hero = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 z-0 bg-[#030305] overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(66,56,255,0.4),transparent_70%)] blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.3),transparent_70%)] blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute top-[30%] left-[40%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(108,99,255,0.2),transparent_70%)] blur-[100px]"
        />
      </div>

      {/* Massive Background Stroke Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-[18vw] font-black tracking-tighter leading-none select-none"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)', color: 'transparent' }}
        >
          360
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mt-40 md:mt-20 pb-32 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> 360 DevRise Agency
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-6xl sm:text-8xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-8 uppercase"
        >
          We Build <br/>
          <span className="text-white drop-shadow-2xl">Digital</span><br/> 
          <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Futures</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-xl text-lg md:text-xl text-gray-400 font-light leading-relaxed"
        >
          360 DevRise transforms ideas into high-performance digital products. Web development, UI/UX, and marketing for visionary brands.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <button onClick={() => setIsQuoteOpen(true)} className="group relative rounded-full bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 hover:bg-gray-200 overflow-hidden cursor-pointer">
            <span className="relative z-10">Start a Project</span>
          </button>
        </motion.div>
      </div>
      
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      
      {/* Marquee Banner at bottom of hero */}
      <div className="absolute bottom-0 w-full overflow-hidden border-y border-white/10 bg-black/50 backdrop-blur-md py-4">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap gap-10 text-2xl font-black uppercase tracking-widest text-transparent"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
        >
          <span>360 DEVRISE</span>
          <span className="text-white">•</span>
          <span>ENTERPRISE WEB</span>
          <span className="text-white">•</span>
          <span>NATIVE APPS</span>
          <span className="text-white">•</span>
          <span>SEO & MARKETING</span>
          <span className="text-white">•</span>
          <span>360 DEVRISE</span>
          <span className="text-white">•</span>
          <span>ENTERPRISE WEB</span>
          <span className="text-white">•</span>
          <span>NATIVE APPS</span>
          <span className="text-white">•</span>
          <span>SEO & MARKETING</span>
        </motion.div>
      </div>
    </section>
  );
};

const BentoServicesSection = () => {
  return (
    <section id="services" className="relative px-6 py-16 md:py-32 overflow-hidden bg-black scroll-mt-24">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary"
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl sm:text-7xl font-black uppercase tracking-tight"
          >
            Digital <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Dominance</span>
          </motion.h2>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {/* Main Large Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 group relative rounded-[2rem] border border-white/10 bg-[#0a0a0a] overflow-hidden p-8 hover:border-primary/50 transition-colors"
          >
            <Link to={`/services/${services[0].id}`} className="absolute inset-0 z-50" aria-label={services[0].title} />
            <div className="absolute inset-0 z-0">
              <img src="/images/gallery/bento_1.png" alt="Abstract tech" className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-4 text-white backdrop-blur-md w-fit">
                {services[0].icon}
              </div>
              <h3 className="text-4xl font-black font-heading mb-4 uppercase">{services[0].title}</h3>
              <p className="text-gray-400 text-lg mb-6 max-w-md">{services[0].desc}</p>
              <span className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest group-hover:text-white transition-colors w-fit pointer-events-none">
                Explore Engineering <ChevronRight size={16} />
              </span>
            </div>
          </motion.div>

          {/* Top Right Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 group relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#050505] overflow-hidden p-8 hover:border-blue-500/30 transition-colors"
          >
            <Link to={`/services/${services[1].id}`} className="absolute inset-0 z-50" aria-label={services[1].title} />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <div className="inline-flex rounded-full bg-blue-500/20 text-blue-400 p-3">
                  {services[1].icon}
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading mb-2 uppercase">{services[1].title}</h3>
                <p className="text-gray-400">{services[1].desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right Cards (2) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative rounded-[2rem] border border-white/10 bg-[#0a0a0a] overflow-hidden p-8 hover:border-purple-500/30 transition-colors flex flex-col justify-between"
          >
             <Link to={`/services/${services[2].id}`} className="absolute inset-0 z-50" aria-label={services[2].title} />
             <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500 blur-[80px] rounded-full" />
             </div>
             <div className="relative z-10">
               {services[2].icon}
             </div>
             <div className="relative z-10">
               <h3 className="text-xl font-bold font-heading mb-2 uppercase">{services[2].title}</h3>
               <span className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-white flex items-center gap-2">Read More <ArrowUpRight size={14}/></span>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative rounded-[2rem] border border-white/10 bg-[#0a0a0a] overflow-hidden p-8 hover:border-blue-500/30 transition-colors flex flex-col justify-between"
          >
             <Link to={`/services/${services[8].id}`} className="absolute inset-0 z-50" aria-label={services[8].title} />
             <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <img src="/images/gallery/bento_2.png" className="w-full h-full object-cover" alt="abstract" />
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay" />
             </div>
             <div className="relative z-10 text-white">
               {services[8].icon}
             </div>
             <div className="relative z-10">
               <h3 className="text-xl font-bold font-heading mb-2 uppercase">{services[8].title}</h3>
               <span className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-white flex items-center gap-2">Read More <ArrowUpRight size={14}/></span>
             </div>
          </motion.div>

        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-primary transition-colors border-b border-white/20 pb-1">
            View All Services <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 border-y border-white/10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #030305 0%, #080d1a 40%, #050510 100%)' }}>
      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 relative z-10">
        <div className="text-center">
          <div className="text-5xl md:text-7xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-primary to-accent mb-2">
            <CountUp end={100} duration={2.5} enableScrollSpy scrollSpyOnce />+
          </div>
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Projects Delivered</div>
        </div>
        <div className="text-center">
          <div className="text-5xl md:text-7xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-primary mb-2">
            <CountUp end={50} duration={2.5} enableScrollSpy scrollSpyOnce />+
          </div>
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Enterprise Clients</div>
        </div>
        <div className="text-center">
          <div className="text-5xl md:text-7xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-blue-400 mb-2">
            <CountUp end={99} duration={2.5} enableScrollSpy scrollSpyOnce />%
          </div>
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Client Retention</div>
        </div>
        <div className="text-center">
          <div className="text-5xl md:text-7xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-primary to-cyan-400 mb-2">
            <CountUp end={5} duration={2.5} enableScrollSpy scrollSpyOnce />
          </div>
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Global Awards</div>
        </div>
      </div>
    </section>
  );
};

const CapabilitiesSection = () => {
  const [activeTag, setActiveTag] = useState('All');
  
  const tags = [
    { name: 'All', count: 138, desc: "Explore our complete showcase of award-winning digital experiences and engineering feats." },
    { name: 'Static Websites', count: 99, desc: "Lightning-fast, highly secure static architectures perfect for high-converting marketing sites." },
    { name: 'E-commerce', count: 31, desc: "High-performance digital storefronts engineered for maximum conversion and scalability." },
    { name: 'WordPress', count: 24, desc: "Custom themes and headless architectures built for editorial speed and SEO dominance." },
    { name: 'Shopify', count: 15, desc: "Premium Shopify setups tailored for massive traffic, custom functionality, and bespoke branding." },
    { name: 'Next.js / React', count: 42, desc: "Enterprise-grade web applications with server-side rendering for ultimate speed and SEO." },
    { name: 'Custom Design', count: 99, desc: "Bespoke user interfaces that blend striking aesthetics with frictionless user journeys." },
    { name: 'UI/UX', count: 17, desc: "Data-driven user experience strategies designed to engage, retain, and convert your audience." },
    { name: 'SaaS Platforms', count: 14, desc: "Scalable, multi-tenant software architectures built from the ground up for recurring revenue businesses." },
    { name: 'Education', count: 24, desc: "Interactive learning management systems and portals designed for maximum student engagement." },
    { name: 'Health & Medical', count: 9, desc: "HIPAA-compliant, highly secure digital health tools and patient management portals." },
    { name: 'Portfolio & Agency', count: 18, desc: "Show-stopping creative portfolios that command attention and win high-ticket clients." },
    { name: 'Technology', count: 24, desc: "Advanced technical platforms integrating AI, blockchain, and real-time data processing." },
    { name: 'Corporate', count: 19, desc: "Authoritative, trust-building digital footprints for enterprise brands and established industry leaders." },
    { name: 'Real Estate', count: 6, desc: "Immersive property listing platforms with high-definition media, virtual tours, and map integrations." }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-[#030305] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="font-heading text-4xl sm:text-6xl font-black text-white mb-4 leading-tight">
            We Help Brands Craft <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Meaningful Relationships</span>
          </h2>
          <p className="text-gray-400 text-lg">Some highlights of our favorite projects we've done for forward thinking clients.</p>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          {tags.map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              onClick={() => setActiveTag(tag.name)}
              className={`group relative flex items-center gap-3 px-6 py-3 rounded-full border text-sm font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer overflow-hidden ${
                activeTag === tag.name
                  ? 'border-blue-500/50 bg-blue-500/10 text-white shadow-[0_0_30px_rgba(59,130,246,0.2)]' 
                  : 'border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10'
              }`}
            >
              {activeTag === tag.name && (
                <motion.span 
                  layoutId="activeTagIndicator"
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" 
                />
              )}
              <span className="relative z-10">{tag.name}</span>
              
              {/* Subtle hover gradient background */}
              {!tag.active && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
              transition={{ duration: 0.3 }}
              className="px-6 py-5 rounded-2xl bg-[#0a0a0f] border border-white/5 max-w-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  <span className="font-bold text-white uppercase tracking-widest mr-3 text-sm">{activeTag} —</span> 
                  {tags.find(t => t.name === activeTag)?.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ProjectsCarousel = () => {
  return (
    <section id="work" className="relative py-16 md:py-32 overflow-hidden scroll-mt-24" style={{ background: 'linear-gradient(180deg, #06060f 0%, #080d1a 50%, #06060f 100%)' }}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* Big blue orb center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-blue-400">
            Our Portfolio
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-black">Featured <span className="text-gradient">Work</span></h2>
        </div>
      </div>
      
      <div className="relative z-10 pb-20">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="w-full"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i} className="max-w-md w-[85vw] sm:w-[500px]">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <Link to={`/projects/${project.id}`} className="block group rounded-3xl border border-white/10 bg-background overflow-hidden relative shadow-2xl hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all">
                  <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-8xl bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">{project.emoji}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <div className="mb-1 sm:mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">{project.category}</div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white uppercase leading-tight">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 bg-[#0a0a12] border-t border-white/5">
                    <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">{project.short}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.slice(0, 3).map((tag, j) => (
                        <span key={j} className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-medium text-blue-300 uppercase tracking-widest leading-none flex items-center justify-center">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const reviews = [
    { name: 'Alex M.', role: 'CEO, TechVenture', body: 'The team at 360 DevRise completely transformed our booking platform. They delivered a production-grade system that handles thousands of daily sessions. Absolutely elite work.', rating: 5 },
    { name: 'Sarah K.', role: 'CTO, HealthFirst', body: 'We needed a HIPAA-compliant mobile app in 8 weeks. Not only did they deliver on time, the code quality was impeccable. I would not trust anyone else with our tech stack.', rating: 5 },
    { name: 'James O.', role: 'Founder, Logix', body: 'From wireframes to deployment, every single sprint was delivered on schedule. The dashboard they built has saved our ops team 20+ hours per week. Incredible ROI.', rating: 5 },
    { name: 'Priya R.', role: 'Product Lead, Crumblee', body: 'Our Next.js app needed a full performance overhaul. 360 DevRise cut our load time from 6 seconds to under 1. Our conversion rate jumped 38% overnight.', rating: 5 },
  ];
  return (
    <section className="py-32 px-6 border-t border-white/5 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #030305 0%, #06091a 50%, #030305 100%)' }}>
      {/* Orb glow */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-indigo-300">Reviews</div>
          <h2 className="font-heading text-5xl sm:text-6xl font-black uppercase">
            Trust Is <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(99,102,241,0.8)' }}>Earned</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">Real words from clients who bet on us and won.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a14] to-[#0d1020] p-8 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)] transition-all"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg italic">"{r.body}"</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center font-bold text-white text-sm shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-bold text-sm">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const ClientsSection = () => {
  const clients = ['Ninja Park', 'The Metakey', 'MBS Logistics', 'PhysioCare', 'Crumblee', 'MA Electricals', 'FlexiPDF', 'BSM Platform'];
  return (
    <section className="py-16 border-y border-blue-500/10 overflow-hidden relative" style={{ background: 'linear-gradient(90deg, #030305 0%, #06091a 50%, #030305 100%)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
      <div className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-blue-400/50 font-bold relative z-10">Trusted By Industry Leaders</div>
      <div className="relative flex overflow-hidden z-10">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="text-xl font-black uppercase tracking-widest text-blue-500/20 hover:text-blue-400/50 transition-colors cursor-default">{c}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { num: '01', title: 'Discovery & Strategy', desc: 'We start with a deep-dive into your business goals, target audience, and competitive landscape to build a razor-sharp project brief.', color: 'from-blue-500 to-indigo-500' },
    { num: '02', title: 'Design & Prototype', desc: 'Our designers create high-fidelity wireframes and interactive prototypes. You see and approve the exact experience before a single line of code is written.', color: 'from-indigo-500 to-primary' },
    { num: '03', title: 'Agile Engineering', desc: 'Development runs in 2-week sprints with continuous delivery. You have full visibility into progress through live preview environments at every stage.', color: 'from-primary to-accent' },
    { num: '04', title: 'Launch & Scale', desc: 'We deploy to production-grade infrastructure, monitor performance, and remain your technical partner for ongoing growth and optimization.', color: 'from-accent to-cyan-500' },
  ];
  return (
    <section className="py-16 md:py-32 px-6 border-t border-white/5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #04040c 0%, #080d1a 60%, #04040c 100%)' }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/8 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">How We Work</div>
            <h2 className="font-heading text-5xl sm:text-6xl font-black uppercase">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Process</span></h2>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">A transparent, results-driven workflow refined across 100+ enterprise projects.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a14] to-[#0d0d1a] p-8 hover:border-primary/30 transition-all hover:-translate-y-2 overflow-hidden">
              {/* Number glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${step.color} opacity-5 group-hover:opacity-15 blur-3xl transition-opacity rounded-full`} />
              <div className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.color} opacity-20 font-heading mb-6 group-hover:opacity-40 transition-all`}>{step.num}</div>
              <h3 className="font-heading font-bold text-xl mb-4 uppercase">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: 'What types of projects do you take on?', a: 'We handle the full spectrum — from landing pages and e-commerce stores to complex enterprise SaaS platforms, mobile apps, and AI-powered automation tools. If it involves software, we can build it.' },
    { q: 'How long does a typical project take?', a: 'A standard marketing website takes 2-4 weeks. A full-scale web application or mobile app typically runs 6-16 weeks, depending on scope. We always establish a clear timeline during our initial discovery call.' },
    { q: 'Do you provide post-launch support?', a: 'Absolutely. All projects include a 30-day post-launch support window. We also offer ongoing monthly retainer agreements for continuous development, monitoring, and optimization.' },
    { q: 'How do you handle project communication?', a: 'We use a shared project workspace (Notion/Linear) and hold weekly video calls for progress updates. You will always have full visibility into what is being built and why.' },
    { q: 'What is your pricing model?', a: 'We offer fixed-price project quotes for well-defined scopes, and time-and-materials billing for ongoing or evolving engagements. Contact us for a free, no-obligation estimate.' },
  ];
  return (
    <section className="py-16 md:py-32 px-6 border-t border-white/5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #030308 0%, #06091a 50%, #030308 100%)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">Questions</div>
          <h2 className="font-heading text-5xl sm:text-6xl font-black uppercase">Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Asked</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a0a14] to-[#0d0d1a] overflow-hidden hover:border-primary/20 transition-colors">
              <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-bold text-lg pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${open === i ? 'border-primary bg-primary/20 text-primary' : 'border-white/20'}`}>
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
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
  );
};

export const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Helmet>
        <title>360 DevRise | Software Company Bangalore | 360devrise</title>
        <meta name="description" content="360 DevRise (360devrise) is an elite software company in Bangalore specializing in custom web applications, native mobile apps, and technical SEO. Start your digital dominance today." />
        <meta name="keywords" content="360devrise, 360 devrise, software company bangalore, web development agency bangalore, app developers bangalore, SEO agency bangalore, react development company, 360devrise bangalore" />
        <link rel="canonical" href="https://360devrise.vercel.app/" />
        <meta property="og:title" content="360 DevRise | Software Company Bangalore" />
        <meta property="og:description" content="Elite software company in Bangalore specializing in custom web applications, native mobile apps, and technical SEO." />
        <meta property="og:url" content="https://360devrise.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="360 DevRise | Software Company Bangalore" />
        <meta name="twitter:description" content="Elite software company in Bangalore specializing in custom web applications, native mobile apps, and technical SEO." />
      </Helmet>
      <Hero />
      <StatsSection />
      <BentoServicesSection />
      <CapabilitiesSection />
      <ProjectsCarousel />
      <TestimonialsSection />
      <ClientsSection />
      <HowItWorks />
      <ProcessSection />
      <FAQSection />
    </motion.div>
  );
};
