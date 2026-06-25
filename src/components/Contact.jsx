import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate contact form submission success
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Trigger a premium confetti explosion to celebrate
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#bd00ff', '#ff007a', '#ffffff'],
      });

      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after a few seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-[10%] right-[-10%] w-96 h-96 bg-neon-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-80 h-80 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5 text-neon-blue" />
            <span className="font-display font-medium text-xs tracking-wider text-slate-300">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Start A New Project Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            Have an idea for a logo, a cinematic reel edit, or social post designs? Leave a message or write directly on WhatsApp.
          </motion.p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & WhatsApp Quick Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Contact Information
              </h3>
              <p className="font-sans text-sm text-slate-400 leading-relaxed">
                Reach out using the form, or initiate a direct chat. I'll get back to you within 12 hours.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20">
                  <Mail className="w-4 h-4 text-neon-blue" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-slate-400">Email Me</span>
                  <p className="font-sans text-sm font-semibold text-white mt-0.5">
                    nasum.mohasin@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20">
                  <Phone className="w-4 h-4 text-neon-purple" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-slate-400">Call Me</span>
                  <p className="font-sans text-sm font-semibold text-white mt-0.5">
                    +91 6305681693
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-neon-pink/10 flex items-center justify-center border border-neon-pink/20">
                  <MapPin className="w-4 h-4 text-neon-pink" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-slate-400">Location</span>
                  <p className="font-sans text-sm font-semibold text-white mt-0.5">
                    Anantapur, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Big WhatsApp CTA Button */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 bg-[#25D366]/5 shadow-[0_15px_30px_rgba(37,211,102,0.03)] text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/10 rounded-full blur-xl pointer-events-none" />
              
              <h4 className="font-display font-bold text-base text-white mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#25D366]" /> Fast WhatsApp Chat
              </h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed mb-6">
                Skip the email forms and start talking to me directly about your video requirements or graphic drafts.
              </p>
              
              <a
                href="https://wa.me/916305681693?text=Hi%20Nasum%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs font-bold tracking-widest uppercase transition-colors shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] flex items-center justify-center gap-2"
              >
                Send Message
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full glass-panel border-white/5 rounded-2xl p-6 sm:p-8 space-y-5 bg-dark-card shadow-[0_15px_35px_rgba(0,0,0,0.4)] text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-sans text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Subject Title
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  placeholder="What's this project about?"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                  placeholder="Detail your requirements here..."
                />
              </div>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-sans text-xs flex items-center justify-between">
                  <span>Message sent successfully! I will reach out soon.</span>
                  <button onClick={() => setSubmitStatus(null)}>✕</button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white font-sans text-xs font-bold tracking-widest uppercase hover:shadow-[0_0_25px_rgba(189,0,255,0.4)] disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>Sending Message...</>
                ) : (
                  <>
                    Send Enquiry <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
