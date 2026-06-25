import React from 'react';
import { ArrowUp, Mail, Send, Award, Phone } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030014] border-t border-white/5 pt-16 pb-8 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Footer Top Links */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="text-left flex flex-col items-start gap-2">
            <h4 className="font-display font-bold text-lg text-white tracking-widest uppercase">
              Nasum Mohasin
            </h4>
            <p className="font-sans text-xs text-slate-400">
              Creative Graphic Designer &amp; Mobile Video Editor • Anantapur, AP
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* Behance */}
            <a
              href="https://www.behance.net/gallery/251407111/Graphic-Design-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-neon-blue hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
              title="Behance Portfolio"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M8.22 7.72H5.06v8.56h3.11c1.55 0 2.8-.75 2.8-2.22s-1.07-2.07-2.43-2.1c1.19-.13 2.05-.72 2.05-1.99 0-1.39-1.09-2.25-2.37-2.25zM7.56 9.47c.56 0 1 .28 1 .84 0 .56-.44.84-1 .84H6.38V9.47h1.18zm.13 3.38c.61 0 1.09.33 1.09.95s-.48.97-1.09.97H6.38V12.85h1.31zm10.76-1.57c-1.63 0-2.88 1.06-2.88 2.72 0 1.73 1.15 2.76 2.82 2.76 1.48 0 2.45-.72 2.68-1.74h-1.36c-.16.39-.62.77-1.32.77-.81 0-1.33-.51-1.42-1.28h4.21c.07-2.06-1.06-3.23-2.73-3.23zm-.06 1.11c.71 0 1.18.42 1.25 1.06h-2.52c.07-.64.51-1.06 1.27-1.06zm-1.49-3.21h3.11v1.03h-3.11z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/916305681693"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
              title="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              href="mailto:nasum.mohasin@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-neon-pink hover:border-neon-pink hover:bg-neon-pink/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
              title="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Bottom info */}
        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-neon-blue" />
            <span>&copy; {currentYear} Nasum Mohasin. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-sans text-[10px] tracking-wide text-slate-600 uppercase">
              Build using React • Tailwind • ThreeJS
            </span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-neon-blue hover:text-neon-blue flex items-center justify-center transition-all duration-300"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
