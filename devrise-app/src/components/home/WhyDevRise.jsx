import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, MotionConfig, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, Check, CheckCheck, GitBranch, KeyRound, LifeBuoy,
  PenTool, Code2, Smartphone, TrendingUp, Bot,
} from 'lucide-react';

import { QuoteModal } from '../QuoteModal';
import { logEvent } from '../../lib/analytics';

const cardBase =
  'group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a12] transition-colors duration-300 hover:border-white/20';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const CardText = ({ title, children }) => (
  <div>
    <h3 className="mb-2 font-heading text-xl font-bold uppercase text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-gray-400">{children}</p>
  </div>
);

/* ── 1. Live code window ─────────────────────────────────────────────── */

const codeLines = [
  [['text-pink-400', 'export const '], ['text-blue-300', 'BookSlot'], ['text-gray-400', ' = ({ slot }) => {']],
  [['text-gray-400', '  '], ['text-pink-400', 'const '], ['text-gray-200', '{ pay, status } = '], ['text-yellow-200', 'usePayment'], ['text-gray-400', '(slot);']],
  [['text-gray-400', '  '], ['text-pink-400', 'return '], ['text-gray-400', '(']],
  [['text-gray-400', '    <'], ['text-emerald-300', 'Button '], ['text-blue-300', 'onClick'], ['text-gray-400', '={pay}>']],
  [['text-gray-200', '      Confirm booking']],
  [['text-gray-400', '    </'], ['text-emerald-300', 'Button'], ['text-gray-400', '>']],
  [['text-gray-400', '  );']],
  [['text-gray-400', '};']],
];

const pipeline = ['Build', 'Tests', 'Preview link'];

const stages = ['Discovery', 'Design', 'Build', 'Launch'];

const Chips = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">
        {item}
      </span>
    ))}
  </div>
);

const CodeWindow = () => (
  <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#06060c] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-red-500/70" />
      <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
      <span className="h-3 w-3 rounded-full bg-green-500/70" />
      <span className="ml-3 rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-gray-400">BookSlot.jsx</span>
      <span className="ml-auto hidden items-center gap-1.5 font-mono text-[11px] text-gray-500 sm:flex">
        <GitBranch size={12} /> sprint-04
      </span>
    </div>

    <div className="grid flex-1 sm:grid-cols-[1fr_190px]">
      <pre className="overflow-hidden p-5 font-mono text-[12px] leading-6 sm:text-[13px] sm:leading-7">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.3 + i * 0.28, ease: 'linear' }}
            className="flex whitespace-pre"
          >
            <span className="mr-4 w-4 select-none text-right text-gray-700">{i + 1}</span>
            {line.map(([color, text], j) => (
              <span key={j} className={color}>{text}</span>
            ))}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="ml-8 inline-block h-4 w-2 translate-y-1 bg-primary"
        />
      </pre>

      <div className="border-t border-white/10 bg-white/[0.02] p-5 sm:border-l sm:border-t-0">
        <div className="mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Pipeline</div>
        <ul className="space-y-3">
          {pipeline.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2.8 + i * 0.45 }}
              className="flex items-center gap-2.5 text-xs text-gray-300"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <Check size={12} />
              </span>
              {step}
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 4.3 }}
          className="mt-5 flex items-center gap-2 rounded-lg border border-secondary/20 bg-secondary/10 px-3 py-2 text-[11px] font-bold text-secondary"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" /> Ready for review
        </motion.div>
      </div>
    </div>
  </div>
);

/* ── 2. Performance gauge ────────────────────────────────────────────── */

const GAUGE_RADIUS = 52;
const GAUGE_LENGTH = 2 * Math.PI * GAUGE_RADIUS;

const SpeedGauge = () => (
  <div className="relative mx-auto h-36 w-36">
    <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
      <defs>
        <linearGradient id="gaugeStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3a5" />
          <stop offset="100%" stopColor="#6c63ff" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r={GAUGE_RADIUS} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8" />
      <motion.circle
        cx="60"
        cy="60"
        r={GAUGE_RADIUS}
        fill="none"
        stroke="url(#gaugeStroke)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={GAUGE_LENGTH}
        initial={{ strokeDashoffset: GAUGE_LENGTH }}
        whileInView={{ strokeDashoffset: GAUGE_LENGTH * 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, delay: 0.3, ease: 'easeOut' }}
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="font-heading text-3xl font-black text-white">&lt;1s</span>
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Load target</span>
    </div>
  </div>
);

/* ── 3. Automation chat ──────────────────────────────────────────────── */

const chatScript = [
  { from: 'user', text: 'Hi, any slot free tomorrow evening?' },
  { from: 'bot', text: 'Yes — 5:00 PM and 6:30 PM are open. Which one suits you?' },
  { from: 'user', text: '5 PM please' },
  { from: 'bot', text: 'Booked for 5:00 PM. Confirmation sent ✅' },
];

const AutomationChat = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    // Reveal one message at a time, hold on the full conversation, then restart.
    const timer = setTimeout(
      () => setCount((c) => (c >= chatScript.length ? 0 : c + 1)),
      count >= chatScript.length ? 3200 : count === 0 ? 600 : 1300,
    );
    return () => clearTimeout(timer);
  }, [inView, count]);

  return (
    <div ref={ref} className="flex h-44 flex-col justify-end gap-2 overflow-hidden">
      <AnimatePresence initial={false}>
        {chatScript.slice(0, count).map((message, i) => (
          <motion.div
            key={i}
            layout
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.3 }}
            className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
              message.from === 'bot'
                ? 'self-start rounded-bl-md border border-emerald-500/20 bg-emerald-500/10 text-emerald-100'
                : 'self-end rounded-br-md bg-white/10 text-gray-200'
            }`}
          >
            {message.text}
            {message.from === 'user' && <CheckCheck size={12} className="ml-1.5 inline text-blue-400" />}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

/* ── 4. Orbit of disciplines ─────────────────────────────────────────── */

const disciplines = [
  { icon: PenTool, label: 'Design' },
  { icon: Code2, label: 'Web' },
  { icon: Smartphone, label: 'Apps' },
  { icon: TrendingUp, label: 'Marketing' },
  { icon: Bot, label: 'AI' },
];

const ORBIT_SECONDS = 28;

const Orbit = () => (
  <div className="relative mx-auto h-44 w-44">
    <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />
    <div className="absolute inset-8 rounded-full border border-white/5 bg-primary/5" />
    <div className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-black text-white">
      360<span className="text-primary">°</span>
    </div>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: ORBIT_SECONDS, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-0"
    >
      {disciplines.map(({ icon: Icon, label }, i) => {
        const angle = (i / disciplines.length) * 2 * Math.PI;
        return (
          <div
            key={label}
            className="absolute left-1/2 top-1/2 -ml-[18px] -mt-[18px] h-9 w-9"
            style={{ transform: `translate(${Math.cos(angle) * 88}px, ${Math.sin(angle) * 88}px)` }}
          >
            {/* Counter-rotate so the icons stay upright while the ring turns */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: ORBIT_SECONDS, repeat: Infinity, ease: 'linear' }}
              title={label}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-[#12121f] text-white shadow-lg"
            >
              <Icon size={16} />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  </div>
);

/* ── 5. Tech stack marquee ───────────────────────────────────────────── */

// Technologies used across the projects in src/data/projects.js.
const stackRows = [
  ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'React Native', 'Flutter', 'Expo'],
  ['Node.js', 'Django', 'Python', 'PostgreSQL', 'MySQL', 'Supabase', 'Azure', 'Razorpay', 'REST APIs'],
];

const StackRow = ({ items, reverse }) => (
  <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
    <motion.div
      animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      className="flex flex-shrink-0 gap-3 pr-3"
    >
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-gray-300"
        >
          {item}
        </span>
      ))}
    </motion.div>
  </div>
);

/* ── Section ─────────────────────────────────────────────────────────── */

export const WhyDevRise = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuote = () => {
    logEvent('Lead Generation', 'Open Quote Modal', 'Why DevRise Section');
    setIsQuoteOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="why-us"
        className="relative scroll-mt-24 overflow-hidden border-t border-white/5 px-6 py-16 md:py-32"
        style={{ background: 'linear-gradient(180deg, #000000 0%, #06081a 45%, #030305 100%)' }}
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-secondary/5 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-14 text-center md:mb-20">
            <motion.div
              {...reveal()}
              className="mb-4 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-secondary"
            >
              Why 360 DevRise
            </motion.div>
            <motion.h2 {...reveal(0.05)} className="font-heading text-5xl font-black uppercase tracking-tight sm:text-7xl">
              Built <span className="text-gradient">Different</span>
            </motion.h2>
            <motion.p {...reveal(0.1)} className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
              What you actually get when we build your product — beyond a good-looking homepage.
            </motion.p>
          </div>

          {/* Bento grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {/* Live previews */}
            <motion.div {...reveal()} className={`${cardBase} p-6 sm:p-8 md:col-span-2 lg:col-span-4 lg:row-span-2`}>
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-[90px]" />
              <div className="relative z-10 flex h-full flex-col gap-8">
                <div className="max-w-xl">
                  <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Transparent delivery</div>
                  <h3 className="mb-3 font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                    Watch it being built, sprint by sprint
                  </h3>
                  <p className="leading-relaxed text-gray-400">
                    We work in two-week sprints and share a live preview at every stage, so you see real progress
                    and give feedback early — no waiting months for a big reveal.
                  </p>
                </div>
                <CodeWindow />
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {stages.map((stage, i) => (
                    <motion.div
                      key={stage}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.15 }}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Stage {String(i + 1).padStart(2, '0')}</div>
                      <div className="mt-0.5 text-sm font-bold uppercase tracking-wider text-gray-200">{stage}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Speed */}
            <motion.div {...reveal(0.1)} className={`${cardBase} flex flex-col justify-between gap-6 p-6 sm:p-8 lg:col-span-2`}>
              <SpeedGauge />
              <CardText title="Speed is a feature">
                Lean, modern builds aimed at sub-second load times and top Lighthouse scores — good for visitors and for Google.
              </CardText>
            </motion.div>

            {/* Automation */}
            <motion.div {...reveal(0.15)} className={`${cardBase} flex flex-col justify-between gap-6 p-6 sm:p-8 lg:col-span-2`}>
              <AutomationChat />
              <CardText title="Automation built in">
                WhatsApp chatbots and workflows that answer enquiries, take bookings and follow up while you sleep.
              </CardText>
            </motion.div>

            {/* Ownership */}
            <motion.div {...reveal(0.05)} className={`${cardBase} flex flex-col justify-between gap-8 p-6 sm:p-8 lg:col-span-2`}>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-500 text-white shadow-[0_0_30px_rgba(108,99,255,0.4)]">
                  <KeyRound size={26} />
                </div>
                <div className="font-heading text-5xl font-black text-white">100%</div>
              </div>
              <div className="-mt-2 mb-auto"><Chips items={['Source code', 'Full IP', 'No lock-in']} /></div>
              <CardText title="You own the code">
                When the project is complete and paid for, the source code and intellectual property are yours. No lock-in.
              </CardText>
            </motion.div>

            {/* Support */}
            <motion.div {...reveal(0.1)} className={`${cardBase} flex flex-col justify-between gap-8 p-6 sm:p-8 lg:col-span-2`}>
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-emerald-600 text-white shadow-[0_0_30px_rgba(34,211,165,0.3)]">
                    <LifeBuoy size={26} />
                  </div>
                  <div className="font-heading text-5xl font-black text-white">
                    30<span className="ml-2 text-base uppercase tracking-widest text-gray-500">days</span>
                  </div>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
                  />
                </div>
                <div className="mt-2 flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  <span>Launch</span>
                  <span>Day 30</span>
                </div>
                <div className="mt-5">
                  <Chips items={['Bug fixes', 'Feature updates', 'Monitoring']} />
                </div>
              </div>
              <CardText title="Support after launch">
                Every project includes 30 days of post-launch support, with monthly retainers available for ongoing work.
              </CardText>
            </motion.div>

            {/* One team */}
            <motion.div {...reveal(0.15)} className={`${cardBase} flex flex-col justify-between gap-6 p-6 sm:p-8 md:col-span-2 lg:col-span-2`}>
              <Orbit />
              <CardText title="One team, full circle">
                Design, engineering, marketing and automation under one roof — no handoffs between agencies.
              </CardText>
            </motion.div>

            {/* Tech stack */}
            <motion.div {...reveal(0.1)} className={`${cardBase} py-8 md:col-span-2 lg:col-span-6`}>
              <div className="mb-7 flex flex-col justify-between gap-3 px-6 sm:px-8 md:flex-row md:items-end">
                <CardText title="A modern stack, not a template">
                  The tools behind the products in our portfolio.
                </CardText>
                <Link
                  to="/work"
                  className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-white"
                >
                  See what we built with it <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className="space-y-3">
                <StackRow items={stackRows[0]} />
                <StackRow items={stackRows[1]} reverse />
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div {...reveal(0.1)} className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <button
              onClick={openQuote}
              className="rounded-full bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-105 hover:bg-gray-200"
            >
              Start a Project
            </button>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/5"
            >
              See Our Work <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

        <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      </section>
    </MotionConfig>
  );
};
