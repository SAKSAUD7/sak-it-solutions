import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { MagneticButton } from '../components/ui/MagneticButton';
import { services } from '../data/services';

export const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: services.length > 0 ? services[0].title : 'Web Development',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Contact Form Inquiry* 🚀\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Email:* ${formData.email}\n*Service Needed:* ${formData.projectType}\n\n*Details:* ${formData.details}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917411091256?text=${encodedText}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #030308 0%, #06091a 50%, #030308 100%)' }}
    >
      <Helmet>
        <title>Contact Us | 360 DevRise</title>
        <meta name="description" content="Get in touch with 360 DevRise. Contact Saud and Saqeeb directly to start your digital engineering project." />
      </Helmet>

      {/* Background Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-primary/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-600/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary"
          >
            Start a Project
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight"
          >
            Build with <br /><span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>360 DevRise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            Whether it's a high-performance web app, a native mobile platform, or a growth marketing campaign — we are ready.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* Direct Contacts */}
          <div className="space-y-8">
            <h2 className="text-2xl font-heading font-bold uppercase mb-8">Direct Lines</h2>
            
            {/* Saud Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a14] to-[#0d1020] p-8 overflow-hidden hover:border-primary/50 transition-all shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-[0_0_25px_rgba(108,99,255,0.5)]">
                  S
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold uppercase">Saud</h3>
                  <p className="text-sm text-primary uppercase tracking-widest font-bold">CEO & Founder</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <a href="tel:+917411091256" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone size={18} className="text-gray-500" /> +91 7411091256
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-gray-500" /> Bangalore, India
                </div>
              </div>
              <MagneticButton href="https://wa.me/917411091256" className="w-full rounded-2xl bg-[#25D366] text-white px-6 py-4 font-bold flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition-all shadow-lg">
                <MessageCircle size={20} /> Message on WhatsApp
              </MagneticButton>
            </motion.div>

            {/* Saqeeb Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a14] to-[#0d1020] p-8 overflow-hidden hover:border-accent/50 transition-all shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 blur-[60px] rounded-full pointer-events-none" />
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  S
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold uppercase">Saqeeb</h3>
                  <p className="text-sm text-accent uppercase tracking-widest font-bold">Partner / Lead</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <a href="tel:+918792248396" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone size={18} className="text-gray-500" /> +91 8792248396
                </a>
              </div>
              <MagneticButton href="https://wa.me/918792248396" className="w-full rounded-2xl bg-[#25D366] text-white px-6 py-4 font-bold flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition-all shadow-lg">
                <MessageCircle size={20} /> Message on WhatsApp
              </MagneticButton>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a14] to-[#0d1020] p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
            <h2 className="text-2xl font-heading font-bold uppercase mb-2">Send an Inquiry</h2>
            <p className="text-gray-400 text-sm mb-8">Fill out the form below and we will get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">First Name</label>
                  <input required type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Last Name</label>
                  <input required type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Project Type</label>
                <select value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option value="" disabled className="bg-black">Select a Service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title} className="bg-black">{s.title}</option>
                  ))}
                  <option value="Other" className="bg-black">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Project Details</label>
                <textarea required rows={4} value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your project goals, timeline, and budget..."></textarea>
              </div>

              <button type="submit" className="w-full rounded-xl bg-white text-black px-6 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                Submit Inquiry <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};
