import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Plus, RotateCw, Send } from 'lucide-react';

import { services } from '../data/services.jsx';
import { logEvent } from '../lib/analytics';

const WHATSAPP_NUMBER = '917411091256';

// Each building block maps to a real service, so descriptions and features
// always match the service pages.
const blocks = [
  { id: 'web-static', label: 'Business Website', rgb: '59,130,246' },
  { id: 'web-dynamic', label: 'Web App / Portal', rgb: '129,140,248' },
  { id: 'app-crossplatform', label: 'Mobile App', rgb: '236,72,153' },
  { id: 'platform-ecommerce', label: 'Online Store', rgb: '244,114,182' },
  { id: 'platform-booking', label: 'Booking System', rgb: '56,189,248' },
  { id: 'platform-dashboard', label: 'Dashboard & CRM', rgb: '168,85,247' },
  { id: 'ai-whatsapp', label: 'WhatsApp AI Chatbot', rgb: '16,185,129' },
  { id: 'marketing-seo', label: 'SEO', rgb: '245,158,11' },
  { id: 'marketing-ads', label: 'Paid Ads', rgb: '34,211,238' },
].map((block) => ({ ...block, service: services.find((s) => s.id === block.id) }))
  .filter((block) => block.service);

const SLAB_SIZE = 210;
const SLAB_HEIGHT = 30;
const SLAB_GAP = 8;
const preserve3d = { transformStyle: 'preserve-3d' };

// One layer of the tower: a top face plus four labelled side faces. The sides
// are the same "south" face placed in wrappers turned 0/90/180/270 degrees, so
// the label reads correctly from every angle.
const Slab = ({ block, level, active, onSelect }) => {
  const side = `linear-gradient(180deg, rgba(${block.rgb},${active ? 0.95 : 0.6}), rgba(${block.rgb},${active ? 0.55 : 0.28}))`;
  return (
    <div
      className="absolute left-0 top-0 transition-transform duration-500 ease-out"
      style={{ ...preserve3d, width: SLAB_SIZE, height: SLAB_SIZE, transform: `translateZ(${level * (SLAB_HEIGHT + SLAB_GAP)}px)` }}
    >
      <div className="slab-drop absolute inset-0" style={preserve3d} onClick={() => onSelect(block.id)}>
        <div
          className="absolute inset-0 rounded-md border border-white/30"
          style={{
            transform: `translateZ(${SLAB_HEIGHT}px)`,
            background: `linear-gradient(135deg, rgba(${block.rgb},0.95), rgba(${block.rgb},0.45))`,
            boxShadow: active ? `0 0 50px rgba(${block.rgb},0.9)` : 'none',
          }}
        />
        {[0, 90, 180, 270].map((turn) => (
          <div key={turn} className="absolute inset-0" style={{ ...preserve3d, transform: `rotateZ(${turn}deg)` }}>
            <div
              className="absolute bottom-0 left-0 flex w-full items-center justify-center border border-white/20 text-[11px] font-black uppercase tracking-wider text-white"
              style={{ height: SLAB_HEIGHT, transformOrigin: 'bottom', transform: 'rotateX(-90deg)', background: side, backfaceVisibility: 'hidden' }}
            >
              {block.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SolutionBuilder3D = () => {
  const [selected, setSelected] = useState(['web-static', 'marketing-seo']);
  const [focus, setFocus] = useState('web-static');
  const [angle, setAngle] = useState(-40);
  const [form, setForm] = useState({ name: '', phone: '' });
  const drag = useRef(null);

  const chosen = selected.map((id) => blocks.find((b) => b.id === id));
  const focused = blocks.find((b) => b.id === focus) || chosen[0] || blocks[0];

  const toggle = (id) => {
    setFocus(id);
    setSelected((current) => (current.includes(id) ? current.filter((x) => x !== id) : [...current, id]));
    logEvent('Solution Builder', 'Toggle Block', id);
  };

  // Drag horizontally to spin the tower. Vertical drags still scroll the page.
  const onPointerDown = (e) => {
    drag.current = { x: e.clientX, angle };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (drag.current) setAngle(drag.current.angle + (e.clientX - drag.current.x) * 0.5);
  };
  const onPointerUp = () => {
    drag.current = null;
  };

  const submit = (e) => {
    e.preventDefault();
    const plan = chosen.map((b) => `• ${b.label}`).join('\n');
    const text = `*New Project Plan* 🚀\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n\n*I need:*\n${plan}\n\nPlease share a quote and timeline.`;
    logEvent('Lead', 'Solution Builder Submission', chosen.map((b) => b.label).join(', '));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      id="build"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 px-6 py-16 md:py-32"
      style={{ background: 'linear-gradient(180deg, #030305 0%, #070a1c 50%, #030305 100%)' }}
    >
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Interactive 3D Planner
          </div>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Build Your <span className="text-gradient">Project</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
            Pick what your business needs and watch your solution stack up. Send it to us and we'll reply with a quote and timeline.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_420px]">
          {/* 3D stage */}
          <div className="rounded-[2rem] border border-white/10 bg-[#07070f]">
            <div
              className="relative h-[430px] cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing sm:h-[500px]"
              style={{ perspective: 1400 }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                <RotateCw size={13} /> Drag to rotate · tap a layer for details
              </div>
              <div
                className="absolute left-1/2"
                style={{
                  ...preserve3d,
                  bottom: 130,
                  width: SLAB_SIZE,
                  height: SLAB_SIZE,
                  marginLeft: -SLAB_SIZE / 2,
                  transform: `scale(1.25) rotateX(58deg) rotateZ(${angle}deg)`,
                }}
              >
                {/* Base plate */}
                <div className="absolute -inset-10 rounded-xl border border-primary/30 bg-[linear-gradient(rgba(108,99,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.18)_1px,transparent_1px)] bg-[size:26px_26px] shadow-[0_0_80px_rgba(108,99,255,0.35)]" />
                {chosen.map((block, level) => (
                  <Slab key={block.id} block={block} level={level} active={block.id === focused.id} onSelect={setFocus} />
                ))}
              </div>
              {chosen.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold uppercase tracking-widest text-gray-500">
                  Add a block below to start
                </div>
              )}
            </div>

            {/* Block picker */}
            <div className="flex flex-wrap gap-2.5 border-t border-white/10 p-5">
              {blocks.map((block) => {
                const on = selected.includes(block.id);
                return (
                  <button
                    key={block.id}
                    onClick={() => toggle(block.id)}
                    aria-pressed={on}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                      on ? 'text-white' : 'border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/30 hover:text-white'
                    }`}
                    style={on ? { borderColor: `rgba(${block.rgb},0.7)`, background: `rgba(${block.rgb},0.18)` } : undefined}
                  >
                    {on ? <Check size={13} /> : <Plus size={13} />} {block.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info + lead form */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={focused.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="rounded-[2rem] border border-white/10 bg-[#0a0a12] p-7"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: `rgba(${focused.rgb},0.85)` }}>
                    {focused.service.icon}
                  </span>
                  <h3 className="font-heading text-xl font-bold uppercase text-white">{focused.label}</h3>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-gray-400">{focused.service.desc}</p>
                <ul className="mb-5 space-y-2">
                  {focused.service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <Check size={15} className="mt-0.5 flex-shrink-0 text-secondary" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${focused.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:text-white"
                >
                  Full details <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </AnimatePresence>

            <form onSubmit={submit} className="rounded-[2rem] border border-primary/30 bg-gradient-to-br from-primary/15 to-[#0a0a12] p-7">
              <h3 className="mb-1 font-heading text-xl font-bold uppercase text-white">Get a quote for this plan</h3>
              <p className="mb-5 text-sm text-gray-400">
                {chosen.length} {chosen.length === 1 ? 'block' : 'blocks'} selected. Websites usually take 2–4 weeks; apps and platforms 6–16 weeks.
              </p>
              <div className="space-y-3">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-primary"
                />
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Phone / WhatsApp number"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-primary"
                />
                <button
                  type="submit"
                  disabled={chosen.length === 0}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Send my plan on WhatsApp <Send size={15} />
                </button>
              </div>
              <p className="mt-4 text-center text-xs text-gray-500">
                Free, no obligation. Prefer email? <Link to="/contact" className="text-gray-300 underline hover:text-white">Contact us</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
