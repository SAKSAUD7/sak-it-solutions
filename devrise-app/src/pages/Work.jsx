import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Tilt from 'react-parallax-tilt';
import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default || CountUpModule;
import { Shield, ArrowRight, Lock, Sparkles } from 'lucide-react';

export const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #06060f 0%, #080d1a 50%, #06060f 100%)' }}
    >
      <Helmet>
        <title>Our Work | 360 DevRise</title>
        <meta name="description" content="Explore our portfolio of high-performance web applications, mobile platforms, and enterprise digital solutions engineered by 360 DevRise." />
      </Helmet>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-blue-400"
          >
            Our Portfolio
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-6"
          >
            Featured <span className="text-gradient">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            A curated selection of our digital engineering projects. We build scalable, high-performance platforms that drive real business results.
          </motion.p>

          {/* Stats Strip */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16"
          >
            {[
              { label: "Projects Delivered", value: 120, suffix: "+" },
              { label: "Global Clients", value: 45, suffix: "+" },
              { label: "Uptime SLA", value: 99.9, suffix: "%" },
              { label: "Client Retention", value: 98, suffix: "%" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-black font-heading text-white mb-1">
                  <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} duration={2.5} enableScrollSpy scrollSpyOnce />{stat.suffix}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeFilter === cat 
                    ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
                gyroscope={true}
                className="h-full"
              >
                <Link to={`/projects/${project.id}`} className="flex flex-col h-full group rounded-3xl border border-white/10 bg-background overflow-hidden relative shadow-2xl hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all">
                  <div className="h-56 sm:h-64 w-full overflow-hidden relative shrink-0">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-8xl bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">{project.emoji}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <div className="mb-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">{project.category}</div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white uppercase leading-tight">{project.title}</h3>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow p-5 sm:p-6 bg-[#0a0a12] border-t border-white/5">
                    <p className="mb-4 sm:mb-6 text-sm text-gray-400 leading-relaxed line-clamp-3">{project.short}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.slice(0, 3).map((tag, j) => (
                        <span key={j} className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-medium text-blue-300 uppercase tracking-widest leading-none flex items-center justify-center">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* NDA Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#0a0a0f] border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-500/10 blur-[80px] rounded-full pointer-events-none" />
          <Lock className="mx-auto mb-6 text-gray-500" size={32} />
          <h3 className="text-xl sm:text-2xl font-heading font-bold uppercase mb-4">Confidential Projects</h3>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Due to strict Non-Disclosure Agreements (NDAs) and corporate confidentiality policies, we are unable to publicly display over <span className="text-white font-bold">100+ enterprise applications</span> we have engineered. 
            If you'd like to see specific case studies relevant to your industry, please reach out directly.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-10 sm:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: '128px 128px' }} />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <Sparkles className="mx-auto mb-6 text-blue-400" size={40} />
          <h2 className="text-4xl sm:text-6xl font-black font-heading uppercase tracking-tight mb-6">Have a vision?</h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10">Let's build your digital empire together. Talk directly with our engineering leads to start architecting your solution today.</p>
          
          <a 
            href={`https://wa.me/917411091256?text=${encodeURIComponent('Hi, I have a vision for a project and would like to talk to your engineering team.')}`} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
          >
            Start a Project <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
