import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

export const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: 'Web Development',
    budget: '$1,000 - $5,000',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const text = `*New Project Inquiry* 🚀\n\n*Name:* ${formData.name}\n*Contact:* ${formData.contact}\n*Service Needed:* ${formData.service}\n*Budget:* ${formData.budget}\n\n*Details:* ${formData.details}`;
    const encodedText = encodeURIComponent(text);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/917411091256?text=${encodedText}`, '_blank');
    
    // Close modal
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg bg-[#0a0a0f] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-10"
              >
                <X size={16} />
              </button>

              <div className="mb-8 relative z-10">
                <h3 className="font-heading text-3xl font-black uppercase text-white mb-2">Start a <span className="text-primary">Project</span></h3>
                <p className="text-gray-400 text-sm">Fill out the details below and we'll connect directly via WhatsApp to discuss your vision.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Your Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email / Phone</label>
                    <input 
                      required
                      type="text" 
                      value={formData.contact}
                      onChange={e => setFormData({...formData, contact: e.target.value})}
                      className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Service Needed</label>
                  <select 
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                  >
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>E-Commerce / Shopify</option>
                    <option>SEO & Digital Marketing</option>
                    <option>AI & Automation</option>
                    <option>Custom Dashboard / SaaS</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Estimated Budget</label>
                  <select 
                    value={formData.budget}
                    onChange={e => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                  >
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $15,000</option>
                    <option>$15,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Project Details</label>
                  <textarea 
                    required
                    rows="3"
                    value={formData.details}
                    onChange={e => setFormData({...formData, details: e.target.value})}
                    className="w-full bg-[#111116] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, and goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-blue-500 text-white rounded-xl py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
                >
                  Send Inquiry via WhatsApp <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
