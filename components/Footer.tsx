
import React from 'react';
import { Compass, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { View } from '../types';

interface FooterProps {
  setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => setView('home')}>
            <div className="w-16 h-16">
               <img 
                 src="/images/BMTLOGO.PNG" 
                 alt="Book My Track Logo"
                 className="w-full h-full object-contain brightness-0 invert"
               />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-serif font-black text-white tracking-tight leading-none">BOOK MY</span>
                <span className="text-lg font-serif font-light text-stone-400 tracking-[0.1em] leading-none">TRACK</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-8">
            Explore the untamed beauty of nature with India's most exclusive tracking and wildlife expedition platform.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Explore</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setView('destinations')} className="hover:text-white transition-colors">Safari Zones</button></li>
            <li><button onClick={() => setView('wedding')} className="hover:text-white transition-colors">Weddings</button></li>
            <li><button onClick={() => setView('places')} className="hover:text-white transition-colors">Places to Visit</button></li>
            <li><button onClick={() => setView('blog')} className="hover:text-white transition-colors">Field Journal</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setView('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
            <li><button className="hover:text-white transition-colors">Booking Policy</button></li>
            <li><button className="hover:text-white transition-colors">Privacy</button></li>
            <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Field Journal</h4>
          <p className="text-sm mb-4">Subscribe for sightings reports and expedition invites.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-stone-800 border-none rounded-lg py-3 px-4 text-white text-sm focus:ring-1 focus:ring-stone-600 outline-none"
            />
            <button className="absolute right-2 top-2 p-1.5 bg-white text-stone-900 rounded-md hover:bg-stone-200 transition-colors">
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-stone-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2024 Book My Track. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Eco-Conservation Partner</span>
          <span>Regenerative Travel certified</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
