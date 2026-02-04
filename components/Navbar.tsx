import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Safari Zones', path: '/destinations' },
    { label: 'Weddings', path: '/weddings' },
    { label: 'Places to Visit', path: '/places' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const forceDarkText =
    isScrolled ||
    ['/places', '/blog', '/contact', '/destinations', '/weddings'].some(p =>
      location.pathname.startsWith(p)
    );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate('/')}
          >
            <div className="relative w-20 h-20 flex items-center justify-center">
              <img
                src="/images/BMTLOGO.PNG"
                alt="Book My Track Logo"
                className={`w-full h-full object-contain transition-all duration-500 ${
                  forceDarkText ? 'brightness-100' : 'brightness-0 invert'
                }`}
              />
            </div>

            <div className="hidden md:flex flex-col">
              <span
                className={`text-xl font-serif font-black leading-none ${
                  forceDarkText ? 'text-stone-900' : 'text-white'
                }`}
              >
                BOOK MY
              </span>
              <span
                className={`text-lg font-serif tracking-[0.1em] leading-none ${
                  forceDarkText ? 'text-stone-700' : 'text-stone-200'
                }`}
              >
                TRACK
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks
              .filter(link => link.path !== '/contact')
              .map(link => {
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavigate(link.path)}
                    className={`text-sm font-medium uppercase tracking-wide relative group ${
                      forceDarkText ? 'text-stone-600 hover:text-stone-900' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      } ${forceDarkText ? 'bg-stone-900' : 'bg-white'}`}
                    />
                  </button>
                );
              })}

            <button
              onClick={() => handleNavigate('/contact')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                forceDarkText
                  ? 'bg-stone-900 text-white hover:bg-stone-800'
                  : 'bg-white text-stone-900 hover:bg-stone-100'
              }`}
            >
              ENQUIRE
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 active:scale-90"
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[90] md:hidden transition-all duration-700 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-stone-50/95 backdrop-blur-xl transition-transform duration-700 ease-expo ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        />

        <div className="relative h-full flex flex-col px-8 pt-32 pb-12">
          <div className="flex-1 flex flex-col justify-center space-y-6">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavigate(link.path)}
                  className={`text-4xl font-serif flex justify-between items-center transition-all duration-500 ${
                    isActive ? 'text-stone-900' : 'text-stone-400'
                  }`}
                  style={{ transitionDelay: `${150 + idx * 50}ms` }}
                >
                  {link.label}
                  <ArrowRight className="w-6 h-6" />
                </button>
              );
            })}
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
