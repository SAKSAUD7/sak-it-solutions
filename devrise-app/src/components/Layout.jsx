import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ChevronDown, MessageCircle, MapPin, Phone, Mail, Globe, GitBranch, Menu, X } from 'lucide-react';
import { CustomCursor } from './ui/CustomCursor';
import { MagneticButton } from './ui/MagneticButton';
import { QuoteModal } from './QuoteModal';
import { services } from '../data/services';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === '/';



  const categories = [...new Set(services.map(s => s.category))];

  return (
    <>
    <div className="flex justify-center w-full fixed top-6 z-50 px-4 md:px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 relative ${
          scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-6xl" : "bg-transparent w-full max-w-7xl"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="360 DevRise" className="h-10 md:h-12 object-contain mix-blend-screen drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/5">
          <Link to="/" className="text-xs tracking-widest uppercase font-semibold text-gray-400 hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-xs tracking-widest uppercase font-semibold text-gray-400 hover:text-white transition-colors">About</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-xs tracking-widest uppercase font-semibold text-gray-400 hover:text-white transition-colors py-2">
              Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 grid grid-cols-3 gap-8 shadow-2xl"
                >
                  {categories.map(cat => (
                    <div key={cat}>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-3">{cat}</h4>
                      <ul className="space-y-2">
                        {services.filter(s => s.category === cat).map(service => (
                          <li key={service.id}>
                            <Link 
                              to={`/services/${service.id}`} 
                              className="block text-sm text-gray-400 hover:text-white transition-colors py-1"
                              onClick={() => setServicesOpen(false)}
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/work" className="text-xs tracking-widest uppercase font-semibold text-gray-400 hover:text-white transition-colors">Work</Link>
          <Link to="/contact" className="text-xs tracking-widest uppercase font-semibold text-gray-400 hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <MagneticButton onClick={() => setIsQuoteOpen(true)} className="hidden sm:flex rounded-full bg-white text-black px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Let's Talk
          </MagneticButton>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>
    </div>

    {/* Mobile Fullscreen Menu */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[100] bg-[#030305]/95 backdrop-blur-2xl flex flex-col p-6"
        >
          <div className="flex items-center justify-between mb-12">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img src="/logo.png" alt="360 DevRise" className="h-10 object-contain mix-blend-screen" />
            </Link>
            <button 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex flex-col gap-6 overflow-y-auto pb-20">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black font-heading uppercase tracking-widest text-white border-b border-white/10 pb-4">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black font-heading uppercase tracking-widest text-white border-b border-white/10 pb-4">About</Link>
            
            {/* Services Mobile Dropdown */}
            <div className="w-full border-b border-white/10 pb-4">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
                className="w-full flex items-center justify-between text-2xl font-black font-heading uppercase tracking-widest text-white"
              >
                Services
                <ChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid grid-cols-1 gap-2 pl-4 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                {services.map(s => (
                  <Link key={s.id} to={`/services/${s.id}`} onClick={() => setMobileMenuOpen(false)} className="block text-xs sm:text-sm font-bold text-gray-400 hover:text-white uppercase tracking-wider py-1.5">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/work" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black font-heading uppercase tracking-widest text-white border-b border-white/10 pb-4">Work</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black font-heading uppercase tracking-widest text-white border-b border-white/10 pb-4">Contact</Link>
            
            <button 
              onClick={() => { setMobileMenuOpen(false); setIsQuoteOpen(true); }} 
              className="mt-8 rounded-full bg-white text-black py-4 text-center font-bold uppercase tracking-widest text-sm"
            >
              Let's Connect
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};

const MegaFooter = () => {
  return (
    <footer className="bg-[#030305] pt-32 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.png" alt="360 DevRise" className="h-14 object-contain mix-blend-screen" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              360 DevRise engineers digital dominance. We build high-performance web applications, mobile platforms, and enterprise marketing solutions for visionary brands.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/SAKSAUD7" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"><GitBranch size={18} /></a>
              <a href="https://linkedin.com/in/saud-ali-khan-35b366191" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"><Globe size={18} /></a>
              <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"><MessageCircle size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">Capabilities</h4>
            <ul className="space-y-3">
              <li><Link to="/services/web-dynamic" className="text-sm text-gray-400 hover:text-primary transition-colors">Web Applications</Link></li>
              <li><Link to="/services/web-enterprise" className="text-sm text-gray-400 hover:text-primary transition-colors">Enterprise SaaS</Link></li>
              <li><Link to="/services/app-crossplatform" className="text-sm text-gray-400 hover:text-primary transition-colors">Mobile App Dev</Link></li>
              <li><Link to="/services/marketing-seo" className="text-sm text-gray-400 hover:text-primary transition-colors">Technical SEO</Link></li>
              <li><Link to="/services/marketing-ads" className="text-sm text-gray-400 hover:text-primary transition-colors">Performance Marketing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/work" className="text-sm text-gray-400 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">Direct Contact</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-primary shrink-0 mt-0.5 group-hover:animate-bounce" size={18} />
                <a href="https://maps.google.com/?q=Bangalore,India" target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Headquarters<br/>Bangalore, India
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <MessageCircle className="text-green-500 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                <div>
                  <a href="https://wa.me/917411091256" target="_blank" rel="noreferrer" className="block text-sm text-gray-400 hover:text-white transition-colors">Saud: +91 7411091256</a>
                  <a href="https://wa.me/918792248396" target="_blank" rel="noreferrer" className="block text-sm text-gray-400 hover:text-white transition-colors">Saqeeb: +91 8792248396</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-primary shrink-0 group-hover:rotate-12 transition-transform" size={18} />
                <a href="mailto:saksaud29@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">saksaud29@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">Copyright &copy; 2026 360 DevRise. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppWidget = () => {
  return (
    <motion.a
      href="https://wa.me/917411091256"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center text-white overflow-hidden group"
    >
      <MessageCircle size={28} className="relative z-10 group-hover:scale-110 transition-transform" />
      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />
    </motion.a>
  );
};

export const Layout = ({ children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>360 DevRise | Elite Digital Engineering Agency</title>
        <meta name="description" content="Transform your business with high-performance web applications, mobile platforms, and enterprise marketing solutions built by an elite engineering team." />
      </Helmet>
      
      <div className="min-h-screen bg-background text-gray-200 selection:bg-primary/30 selection:text-white flex flex-col">
        <CustomCursor />
        <WhatsAppWidget />
        <Navbar />
        <main className="w-full flex-grow overflow-x-hidden">
          {children}
        </main>
        <MegaFooter />
      </div>
    </HelmetProvider>
  );
};
