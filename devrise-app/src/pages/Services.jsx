import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services.jsx';
import { ArrowRight, Sparkles } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { logEvent } from '../lib/analytics';

export const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Group services by category
  const categories = [...new Set(services.map(s => s.category))];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden bg-background"
    >
      <Helmet>
        <title>All Services | 360 DevRise</title>
        <meta name="description" content="Explore our complete suite of digital engineering services including Web Platforms, Mobile Apps, SEO, and AI Chatbots." />
      </Helmet>

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary"
          >
            Our Expertise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-6"
          >
            Digital <span className="text-gradient">Engineering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            We engineer scalable digital ecosystems designed to dominate your market and drive measurable business growth.
          </motion.p>
        </div>

        {/* Services grouped by category */}
        {categories.map((category, catIdx) => (
          <div key={category} className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * catIdx }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px flex-grow bg-white/10" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full">{category}</span>
              <div className="h-px flex-grow bg-white/10" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.filter(s => s.category === category).map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                  className="h-full"
                >
                  <Tilt
                    tiltMaxAngleX={3}
                    tiltMaxAngleY={3}
                    perspective={1000}
                    scale={1.02}
                    transitionSpeed={1000}
                    className="h-full"
                  >
                    <Link
                      to={`/services/${service.id}`}
                      className="flex flex-col h-full group p-7 rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/[0.08] transition-all duration-500 relative overflow-hidden shadow-xl"
                    >
                      {/* Glow on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none rounded-[2rem]" />

                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-[#0f0f1a] border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500 shadow-inner shrink-0">
                        {service.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-heading font-bold uppercase tracking-tight text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                        {service.title}
                      </h3>

                      {/* Short description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors">
                        {service.desc}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center text-xs font-bold uppercase tracking-widest text-primary mt-auto">
                        Explore Service
                        <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </Link>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-10 sm:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/15 blur-[100px] rounded-full pointer-events-none" />
          <Sparkles className="mx-auto mb-6 text-blue-400" size={40} />
          <h2 className="text-4xl sm:text-6xl font-black font-heading uppercase tracking-tight mb-6 relative z-10">Not sure where to start?</h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10 relative z-10">Let us analyze your business and recommend the exact digital architecture you need to scale.</p>
          <a
            href={`https://wa.me/917411091256?text=${encodeURIComponent('Hi, I would like to schedule a free consultation. I am not sure where to start.')}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => logEvent('Lead', 'WhatsApp Click', 'Services Hub - Consultation')}
            className="relative z-10 inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
          >
            Get Free Consultation <ArrowRight size={18} />
          </a>
        </motion.div>

      </div>
    </motion.div>
  );
};
