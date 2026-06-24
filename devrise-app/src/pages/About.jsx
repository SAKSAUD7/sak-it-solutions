import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { HowItWorks } from '../components/HowItWorks';
import { ArrowRight, Code2, Globe2, Lightbulb, Users2 } from 'lucide-react';
import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default || CountUpModule;

export const About = () => {
  const stats = [
    { label: "Projects Shipped", value: 130, suffix: "+" },
    { label: "Global Clients", value: 50, suffix: "+" },
    { label: "Lines of Code", value: 2, suffix: "M+" },
    { label: "Years Experience", value: 5, suffix: "+" }
  ];

  const AnimatedLogoVideo = () => {
    return (
      <div className="relative w-full max-w-4xl mx-auto mt-24 perspective-[1000px]">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] scale-125 -z-10 rounded-full" />
        
        <motion.div
          animate={{
            rotateY: [0, 15, 0, -15, 0],
            rotateX: [0, 5, 0, -5, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-full aspect-[16/9] overflow-visible flex items-center justify-center"
          style={{ 
            transformStyle: 'preserve-3d',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 60%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 60%, transparent 100%)'
          }}
        >
          {/* Base Layer: Gold Logo (Pushed slightly back) */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ translateZ: -20 }}
          >
            <img 
              src="/images/logo_gold.jpg" 
              alt="360 DevRise Gold" 
              className="w-full h-full object-contain mix-blend-screen opacity-100 drop-shadow-[0_0_30px_rgba(255,215,0,0.2)]"
              style={{ filter: 'contrast(2) brightness(0.6)' }}
            />
          </motion.div>
          
          {/* Holographic Layer: Neon Logo (Floating forward in 3D space) */}
          <motion.div 
            animate={{
              opacity: [0.3, 0.9, 1, 0.6, 0.3],
              scale: [1, 1.02, 1.05, 1.02, 1],
              filter: ['hue-rotate(0deg)', 'hue-rotate(60deg)', 'hue-rotate(120deg)', 'hue-rotate(60deg)', 'hue-rotate(0deg)']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 mix-blend-screen flex items-center justify-center"
            style={{ translateZ: 50 }}
          >
            <img 
              src="/images/logo_neon.jpg" 
              alt="360 DevRise Neon" 
              className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.8)]"
              style={{ filter: 'contrast(1.5) brightness(0.8)' }}
            />
          </motion.div>

          {/* Glitch/Energy Pulse Layer */}
          <motion.div
            animate={{
              opacity: [0, 0.8, 0, 1, 0, 0.4, 0],
              x: [0, -15, 0, 20, 0, -10, 0]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              times: [0, 0.1, 0.2, 0.25, 0.3, 0.8, 1],
              ease: "circInOut"
            }}
            className="absolute inset-0 mix-blend-screen flex items-center justify-center"
            style={{ translateZ: 20 }}
          >
            <img 
              src="/images/logo_gold.jpg" 
              alt="Glitch" 
              className="w-full h-full object-contain grayscale opacity-40 brightness-200"
            />
          </motion.div>

        </motion.div>
      </div>
    );
  };

  const values = [
    {
      icon: <Code2 className="text-blue-400" size={32} />,
      title: "Engineering Excellence",
      desc: "We don't write basic code. We architect scalable, secure, and highly performant systems designed for enterprise workloads."
    },
    {
      icon: <Globe2 className="text-purple-400" size={32} />,
      title: "Global Standards",
      desc: "From Bangalore to the world. We adhere to the highest international standards in design, accessibility, and data privacy."
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={32} />,
      title: "Visionary Approach",
      desc: "We don't just build what you ask for; we consult, challenge, and elevate your ideas into products that dominate the market."
    },
    {
      icon: <Users2 className="text-emerald-400" size={32} />,
      title: "True Partnership",
      desc: "We treat your business as our own. Your success is our portfolio. We stay by your side long after the product launches."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background pt-32"
    >
      <Helmet>
        <title>About 360 DevRise | Software Company Bangalore</title>
        <meta name="description" content="Meet the founders of 360 DevRise, Saud and Saqeeb. We are a premium software company and digital engineering agency from Bangalore, building world-class platforms." />
        <meta name="keywords" content="about 360devrise, 360 devrise founders, software company bangalore, web agency bangalore, saud, saqeeb" />
        <link rel="canonical" href="https://360devrise.vercel.app/about" />
        <meta property="og:title" content="About 360 DevRise | Software Company Bangalore" />
        <meta property="og:description" content="Meet the founders of 360 DevRise, Saud and Saqeeb. We are a premium software company and digital engineering agency from Bangalore." />
        <meta property="og:url" content="https://360devrise.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About 360 DevRise" />
        <meta name="twitter:description" content="Meet the founders of 360 DevRise, Saud and Saqeeb." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-primary">
              Our Story
            </div>
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase mb-8 leading-none">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">The Future</span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Based in Bangalore, India, 360 DevRise was founded with a singular mission: to bridge the gap between stunning visual design and hardcore software engineering. We don't just build websites; we architect digital empires.
            </p>
            <AnimatedLogoVideo />
          </motion.div>
        </div>
      </section>

      {/* How It Works Component */}
      <HowItWorks 
        title="Our Execution Roadmap" 
        subtitle="How we turn your vision into a highly-scalable digital product."
      />

      {/* Stats Section */}
      <section className="px-6 py-16 border-y border-white/5 bg-[#030305]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl sm:text-5xl font-black text-white font-heading mb-2">
                  <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase leading-tight">
                Meet The <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Founders</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-primary/30 pl-6">
                360 DevRise is spearheaded by <strong className="text-white">Saud</strong> and <strong className="text-white">Saqeeb</strong>. 
                Combining deep expertise in software architecture and performance marketing, they lead a lean, highly elite team of developers and designers.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We started this agency because we were tired of seeing businesses accept mediocre digital solutions. Too many agencies build things that look pretty but break under scale, or build robust backends with terrible UX. We bring both together — premium aesthetics backed by enterprise-grade infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a14] to-[#0d1020] p-10 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent blur-3xl rounded-full" />
              <div className="relative z-10">
                <QuoteIcon className="text-white/10 w-20 h-20 mb-6" />
                <h3 className="text-2xl font-bold font-heading text-white mb-6 leading-relaxed">
                  "Our goal isn't just to write code. It's to build scalable platforms that actually move the needle for your business."
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#0d1020] bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center font-bold text-white shadow-lg">S</div>
                    <div className="w-12 h-12 rounded-full border-2 border-[#0d1020] bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg">S</div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Saud & Saqeeb</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Founders, 360 DevRise</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-32 px-6 bg-[#030305] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase">Core <span className="text-primary">Values</span></h2>
            <p className="text-gray-400 mt-4 text-lg">The principles that dictate every line of code we write.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-white/20 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

// Simple Quote Icon component
const QuoteIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);
