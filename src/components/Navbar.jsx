import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030014]/65 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-neon-purple to-neon-blue p-[1px] shadow-[0_0_15px_rgba(189,0,255,0.2)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-300">
            <div className="w-full h-full bg-[#030014] rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-base tracking-wider text-white group-hover:text-neon-blue transition-colors duration-300">
                NM
              </span>
            </div>
          </div>
          <span className="font-display font-bold text-lg tracking-widest uppercase text-white bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
            Nasum Mohasin
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-medium tracking-wide text-slate-300 hover:text-neon-blue transition-colors duration-300 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/916305681693"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full overflow-hidden group border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.05)] hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="font-sans text-xs font-semibold tracking-wider text-white uppercase relative z-10 flex items-center gap-1">
              Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-neon-blue transition-colors duration-300 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/5 bg-[#030014]/95 backdrop-blur-lg overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-base font-medium tracking-wide text-slate-300 hover:text-neon-blue transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/916305681693"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-xl border border-neon-blue bg-neon-blue/10 text-white font-sans text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
              >
                Hire Me <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
