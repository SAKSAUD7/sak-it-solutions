import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';
import { ProjectDetail } from './pages/ProjectDetail';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { Services } from './pages/Services';
import { initGA, logPageView } from './lib/analytics';

const Preloader = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState('Initiating Systems...');

  useEffect(() => {
    const t1 = setTimeout(() => setLoadingText('Compiling Architecture...'), 400);
    const t2 = setTimeout(() => setLoadingText('Engineering Digital Dominance...'), 800);
    const t3 = setTimeout(() => onComplete(), 1500);
    
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030305] overflow-hidden"
    >
      {/* Graphical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Rotating Rings */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute w-[400px] h-[400px] border border-white/5 rounded-full border-t-primary/50" 
      />
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute w-[500px] h-[500px] border border-white/5 rounded-full border-b-accent/50" 
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Reveal */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <img src="/logo.png" alt="360 DevRise" className="relative z-10 h-20 md:h-28 object-contain mix-blend-screen drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]" />
        </motion.div>

        {/* Loading Bar */}
        <div className="h-[2px] w-64 md:w-80 overflow-hidden bg-white/5 rounded-full relative mb-6">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.2, ease: "easeInOut" }}
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary via-white to-accent shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          />
        </div>

        {/* Dynamic Intro Text */}
        <div className="h-6 overflow-hidden flex justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={loadingText}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400"
            >
              {loadingText}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// ScrollToTop component to ensure new routes start at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    logPageView(); // Send page view to Google Analytics on route change
  }, [pathname]);
  return null;
};

function App() {
  // Initialize Google Analytics once on mount
  useEffect(() => {
    initGA();
  }, []);

  // Only show preloader once per browser session
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('preloaderShown'));

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloaderShown', 'true');
    setLoading(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-gray-200 font-sans selection:bg-primary/30 selection:text-white relative">
        <div className="noise-bg" />
        <AnimatePresence>
          {loading && <Preloader onComplete={handlePreloaderComplete} />}
        </AnimatePresence>

        {!loading && (
          <Layout>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </Layout>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
