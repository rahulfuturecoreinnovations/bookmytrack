
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { Menu, X, Compass, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Safari Zones', view: 'destinations' },
    { label: 'Weddings', view: 'wedding' },
    { label: 'Places to Visit', view: 'places' },
    { label: 'Blog', view: 'blog' },
    { label: 'About', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleLinkClick = (view: View) => {
    setView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const forceDarkText = isScrolled || ['places', 'blog', 'blog-detail', 'contact', 'destinations', 'wedding'].includes(currentView);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleLinkClick('home')}
          >
            <div className="relative w-20 h-20 sm:w-25 sm:h-25 flex items-center justify-center">
                <img 
                  src="/images/BMTLOGO.PNG" 
                  alt="Book My Track Logo"
                  className={`w-full h-full object-contain transition-all duration-500 ${forceDarkText ? 'brightness-100' : 'brightness-0 invert'}`}
                />
            </div>
            <div className="flex flex-col">
                <span className={`text-xl sm:text-2xl font-serif tracking-tight font-black transition-colors duration-300 leading-none ${forceDarkText ? 'text-stone-900' : 'text-white'}`}>
                  BOOK MY
                </span>
                <span className={`text-lg sm:text-xl font-serif tracking-[0.1em] font-light transition-colors duration-300 leading-none ${forceDarkText ? 'text-stone-700' : 'text-stone-200'}`}>
                  TRACK
                </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.filter(link => link.view !== 'contact').map((link) => (
              <button
                key={link.view}
                onClick={() => handleLinkClick(link.view)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors relative group ${
                  forceDarkText ? 'text-stone-600 hover:text-stone-900' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${forceDarkText ? 'bg-stone-900' : 'bg-white'} ${currentView === link.view ? 'w-full' : ''}`} />
              </button>
            ))}
            <button 
              onClick={() => handleLinkClick('contact')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                forceDarkText 
                  ? 'bg-stone-900 text-white hover:bg-stone-800' 
                  : 'bg-white text-stone-900 hover:bg-stone-100'
              }`}
            >
              ENQUIRE
            </button>
          </div>

          <button 
            className="md:hidden p-2 transition-transform duration-300 active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-stone-900 w-7 h-7" />
            ) : (
              <Menu className={`${forceDarkText ? 'text-stone-900' : 'text-white'} w-7 h-7`} />
            )}
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[90] md:hidden transition-all duration-700 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`absolute inset-0 bg-stone-50/95 backdrop-blur-xl transition-transform duration-700 ease-expo ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`} />
        
        <div className="relative h-full flex flex-col px-8 pt-32 pb-12 overflow-y-auto">
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
              Navigation
            </span>
            {navLinks.map((link, idx) => (
              <button
                key={link.view}
                onClick={() => handleLinkClick(link.view)}
                className={`text-4xl sm:text-5xl font-serif text-left flex items-center justify-between group transition-all duration-500 ${
                  isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${150 + idx * 50}ms` }}
              >
                <span className={`${currentView === link.view ? 'text-stone-900' : 'text-stone-400'}`}>
                  {link.label}
                </span>
                <ArrowRight className={`w-6 h-6 transition-all duration-300 ${currentView === link.view ? 'text-stone-900 opacity-100' : 'text-stone-300 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ease-expo {
          transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
        }
      `}</style>
    </>
  );
};

export default Navbar;
