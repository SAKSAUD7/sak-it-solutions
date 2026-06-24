import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight, CheckCircle2, Code2, Database, Globe, Layers, GitBranch } from 'lucide-react';
import { projects } from '../data/projects';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Helmet } from 'react-helmet-async';
import { logEvent } from '../lib/analytics';

// Lightbox modal for gallery images
const Lightbox = ({ images, activeIndex, onClose, onPrev, onNext }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button className="absolute top-6 right-6 text-white/60 hover:text-white" onClick={onClose}>
        <X size={32} />
      </button>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 rounded-full p-3" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
        <ChevronLeft size={28} />
      </button>
      <motion.img
        key={activeIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        src={images[activeIndex]}
        alt={`Screenshot ${activeIndex + 1}`}
        className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 rounded-full p-3" onClick={(e) => { e.stopPropagation(); onNext(); }}>
        <ChevronRight size={28} />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
        {activeIndex + 1} / {images.length}
      </div>
    </motion.div>
  </AnimatePresence>
);

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const allImages = project ? [project.image, ...(project.gallery || [])].filter(Boolean) : [];

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => (i - 1 + allImages.length) % allImages.length);
  const nextImage = () => setLightboxIndex(i => (i + 1) % allImages.length);

  // keyboard nav
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link to="/" className="text-primary hover:underline">Return to Home</Link>
      </div>
    );
  }

  const categoryColors = {
    "Full Stack": "from-blue-500 to-cyan-400",
    "Backend": "from-green-500 to-emerald-400",
    "Mobile": "from-purple-500 to-pink-500",
    "Frontend": "from-orange-500 to-yellow-400",
  };

  const gradColor = categoryColors[project.category] || "from-primary to-accent";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pb-0"
    >
      <Helmet>
        <title>{project.title} | 360 DevRise Case Study</title>
        <meta name="description" content={project.short} />
        <meta name="keywords" content={`${project.title.toLowerCase()}, 360devrise case study, ${project.category.toLowerCase()} portfolio, software company bangalore`} />
        <link rel="canonical" href={`https://360devrise.vercel.app/projects/${project.id}`} />
        <meta property="og:title" content={`${project.title} | 360 DevRise Case Study`} />
        <meta property="og:description" content={project.short} />
        <meta property="og:url" content={`https://360devrise.vercel.app/projects/${project.id}`} />
        <meta property="og:type" content="article" />
        {project.image && <meta property="og:image" content={`https://360devrise.vercel.app${project.image}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | 360 DevRise`} />
        <meta name="twitter:description" content={project.short} />
        {project.image && <meta name="twitter:image" content={`https://360devrise.vercel.app${project.image}`} />}
      </Helmet>

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-20" />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradColor} opacity-10`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24 pt-36">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-xs uppercase tracking-widest font-bold text-gray-500 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className={`inline-block rounded-full bg-gradient-to-r ${gradColor} px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg`}>
              {project.category}
            </span>
            {project.tags.slice(0, 4).map(tag => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                {tag}
              </span>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-none uppercase tracking-tight"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10"
          >
            {project.short}
          </motion.p>

          {/* Action links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {project.links?.live && (
              <MagneticButton href={project.links.live} className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl">
                <ExternalLink size={16} /> View Live Project
              </MagneticButton>
            )}
            {project.links?.github && (
              <MagneticButton href={project.links.github} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm">
                <GitBranch size={16} /> GitHub
              </MagneticButton>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16">

          {/* Left column */}
          <div className="space-y-16">

            {/* Overview */}
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">Project Overview</h2>
              <div className="text-gray-300 leading-relaxed text-lg space-y-4">
                {project.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Key Features */}
            {project.features?.length > 0 && (
              <section>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">Key Features Delivered</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-2xl p-4 hover:border-primary/30 hover:bg-white/[0.05] transition-all"
                    >
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-gray-300 leading-relaxed">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Screenshot Gallery */}
            {allImages.length > 0 && (
              <section>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">
                  Project Screenshots <span className="text-gray-600 font-normal normal-case tracking-normal">({allImages.length} images)</span>
                </h2>
                {/* Featured image */}
                <div
                  className="rounded-3xl overflow-hidden border border-white/10 mb-4 cursor-zoom-in group"
                  onClick={() => openLightbox(0)}
                >
                  <div className="relative">
                    <img
                      src={allImages[0]}
                      alt={project.title}
                      className="w-full h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-bold text-sm uppercase tracking-widest bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
                        Click to Expand
                      </span>
                    </div>
                  </div>
                </div>

                {/* Gallery grid */}
                {allImages.length > 1 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {allImages.slice(1).map((img, i) => (
                      <div
                        key={i}
                        className="rounded-2xl overflow-hidden border border-white/10 cursor-zoom-in group aspect-video"
                        onClick={() => openLightbox(i + 1)}
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${i + 2}`}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Right sidebar */}
          <div className="space-y-6 lg:sticky lg:top-28 self-start">

            {/* Tech Stack breakdown */}
            {project.techStack && (
              <div className="rounded-3xl border border-white/10 bg-[#0a0a12] p-8 space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Technology Stack</h3>

                {project.techStack.frontend && (
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-gray-500 font-bold">
                      <Globe size={12} /> Frontend
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend.map(t => (
                        <span key={t} className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300">{t}</span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack.backend && (
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-gray-500 font-bold">
                      <Code2 size={12} /> Backend
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.backend.map(t => (
                        <span key={t} className="rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-xs font-medium text-green-300">{t}</span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack.database && (
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-gray-500 font-bold">
                      <Database size={12} /> Database
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.database.map(t => (
                        <span key={t} className="rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-medium text-orange-300">{t}</span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack.other && (
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-gray-500 font-bold">
                      <Layers size={12} /> Tools & Infrastructure
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.other.map(t => (
                        <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-400">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Roles */}
            {project.roles?.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-[#0a0a12] p-8">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">My Roles</h3>
                <div className="space-y-2">
                  {project.roles.map(r => (
                    <div key={r} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
              <h3 className="font-heading text-xl font-bold mb-3">Need something similar?</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">Let's engineer a bespoke solution for your business objectives.</p>
              <MagneticButton href={`https://wa.me/917411091256?text=${encodeURIComponent(`Hi, I saw the ${project.title} project and need something similar. Let's talk.`)}`} onClick={() => logEvent('Lead', 'WhatsApp Click', `Project: ${project.title}`)} className="block w-full text-center rounded-2xl bg-white text-black px-6 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all">
                Start Your Project →
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* ── Related projects ─────────────────────────────── */}
      <RelatedProjects currentId={project.id} category={project.category} />
    </motion.div>
  );
};

const RelatedProjects = ({ currentId, category }) => {
  const related = projects.filter(p => p.id !== currentId && p.category === category).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="border-t border-white/5 bg-[#050508] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-12">More {category} Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map(p => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="group rounded-3xl border border-white/10 bg-[#0a0a12] overflow-hidden hover:border-white/30 transition-all hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">{p.emoji}</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest font-bold text-primary mb-2">{p.category}</p>
                <h3 className="font-heading font-bold text-lg mb-2 uppercase">{p.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{p.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
