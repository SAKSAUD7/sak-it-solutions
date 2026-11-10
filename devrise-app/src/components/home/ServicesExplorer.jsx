import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Globe, Smartphone, TrendingUp, Bot, LayoutDashboard } from 'lucide-react';

import { services } from '../../data/services.jsx';
import { logEvent } from '../../lib/analytics';

// Presentation details for each service category. Categories themselves come
// from the services data, so adding a service there shows up here automatically.
const categoryMeta = {
  'Web Development': {
    icon: Globe,
    blurb: 'From fast marketing sites to full SaaS platforms — built to load quickly, rank well and scale.',
    glow: 'rgba(59,130,246,0.22)',
  },
  'App Development': {
    icon: Smartphone,
    blurb: 'Native iOS, native Android, or one cross-platform codebase — whichever fits your users and budget.',
    glow: 'rgba(236,72,153,0.2)',
  },
  'Digital Marketing': {
    icon: TrendingUp,
    blurb: 'SEO, social and paid campaigns that turn a good-looking product into a steady flow of leads.',
    glow: 'rgba(249,115,22,0.2)',
  },
  'AI & Automation': {
    icon: Bot,
    blurb: 'Chatbots and workflows that answer customers and handle repetitive work around the clock.',
    glow: 'rgba(16,185,129,0.2)',
  },
  'Specialized Platforms': {
    icon: LayoutDashboard,
    blurb: 'Booking systems, online stores and dashboards shaped around the way your business actually runs.',
    glow: 'rgba(168,85,247,0.22)',
  },
};

const fallbackMeta = { icon: Globe, blurb: '', glow: 'rgba(108,99,255,0.2)' };

// Moves a soft spotlight to wherever the pointer is inside the card.
const trackPointer = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
};

const ServiceCard = ({ service, index }) => {
  const metric = service.metrics?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 + index * 0.08, ease: 'easeOut' }}
      className="h-full"
    >
      <Link
        to={`/services/${service.id}`}
        onMouseMove={trackPointer}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a12] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      >
        {/* Pointer spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'radial-gradient(360px circle at var(--spot-x, 50%) var(--spot-y, 0%), rgba(108,99,255,0.16), transparent 65%)' }}
        />
        {/* Gradient top edge in the service's own colour */}
        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${service.color} opacity-40 transition-opacity duration-300 group-hover:opacity-100`} />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-6 flex items-start justify-between">
            <div className={`inline-flex rounded-2xl bg-gradient-to-br ${service.color} p-3.5 text-white shadow-lg`}>
              {service.icon}
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <h3 className="mb-3 font-heading text-xl font-bold uppercase leading-tight text-white">{service.title}</h3>
          <p className="mb-6 text-sm leading-relaxed text-gray-400">{service.desc}</p>

          <ul className="mb-7 space-y-2.5">
            {service.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                <Check size={15} className="mt-0.5 flex-shrink-0 text-secondary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {metric && (
            <div className="mt-auto border-t border-white/10 pt-5">
              <div className={`w-fit bg-gradient-to-r ${service.color} bg-clip-text font-heading text-2xl font-black text-transparent`}>
                {metric.value}
              </div>
              <div className="mt-0.5 text-[11px] font-bold uppercase tracking-widest text-gray-500">{metric.label}</div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export const ServicesExplorer = () => {
  const categories = useMemo(() => {
    const names = [...new Set(services.map((s) => s.category))];
    return names.map((name) => ({
      name,
      items: services.filter((s) => s.category === name),
      ...(categoryMeta[name] || fallbackMeta),
    }));
  }, []);

  const [activeName, setActiveName] = useState(categories[0].name);
  const active = categories.find((c) => c.name === activeName) || categories[0];
  const ActiveIcon = active.icon;

  const selectCategory = (name) => {
    setActiveName(name);
    logEvent('Home Services', 'Select Category', name);
  };

  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-black px-6 py-16 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div
        key={active.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute right-0 top-1/3 h-[700px] w-[700px] rounded-full blur-[150px]"
        style={{ background: active.glow }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 lg:flex-row lg:items-end">
          <div>
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
              className="font-heading text-5xl font-black uppercase tracking-tight sm:text-7xl"
            >
              Digital <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Dominance</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-md text-lg leading-relaxed text-gray-400"
          >
            {services.length} services across {categories.length} disciplines. Pick what you need to build — we'll show you exactly how we do it.
          </motion.p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[320px_1fr]">
          {/* Category rail: horizontal scroller on mobile, sticky list on desktop */}
          <div
            role="tablist"
            aria-label="Service categories"
            className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:sticky lg:top-28 lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((category, i) => {
              const Icon = category.icon;
              const isActive = category.name === active.name;
              return (
                <button
                  key={category.name}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectCategory(category.name)}
                  className={`group relative flex flex-shrink-0 items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-colors duration-300 lg:w-full lg:px-5 lg:py-4 ${
                    isActive ? 'border-primary/50 text-white' : 'border-white/10 text-gray-400 hover:border-white/25 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="serviceCategoryActive"
                      className="absolute inset-0 rounded-2xl bg-primary/10 shadow-[0_0_30px_rgba(108,99,255,0.18)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 hidden font-heading text-xs font-black text-gray-600 lg:block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive ? 'bg-primary text-white' : 'bg-white/5 text-gray-400 group-hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="relative z-10 flex-1 whitespace-nowrap">
                    <span className="block text-sm font-bold uppercase tracking-wider">{category.name}</span>
                    <span className="block text-xs text-gray-500">
                      {category.items.length} {category.items.length === 1 ? 'service' : 'services'}
                    </span>
                  </span>
                </button>
              );
            })}

            <Link
              to="/services"
              className="mt-4 hidden items-center gap-2 px-5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-primary lg:inline-flex"
            >
              View all {services.length} services <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Active category panel */}
          <div role="tabpanel" className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a12]">
                  <img
                    src={active.items[0].mediaImage}
                    alt=""
                    loading="lazy"
                    className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-40 sm:block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a12] via-[#0a0a12]/90 to-transparent" />
                  <div className="relative z-10 flex items-center gap-5 p-6 sm:p-8">
                    <div className="hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white backdrop-blur-md sm:flex">
                      <ActiveIcon size={26} />
                    </div>
                    <div className="max-w-xl">
                      <h3 className="mb-2 font-heading text-2xl font-black uppercase text-white sm:text-3xl">{active.name}</h3>
                      <p className="leading-relaxed text-gray-400">{active.blurb}</p>
                    </div>
                  </div>
                </div>

                <div className={`grid gap-6 md:grid-cols-2 ${active.items.length >= 3 ? 'xl:grid-cols-3' : ''}`}>
                  {active.items.map((service, i) => (
                    <ServiceCard key={service.id} service={service} index={i} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 text-center lg:hidden">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-primary"
              >
                View all {services.length} services <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
