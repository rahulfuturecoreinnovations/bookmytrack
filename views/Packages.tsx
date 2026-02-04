
import React from 'react';
import { PACKAGES } from '../constants';
import { Clock, Check } from 'lucide-react';

interface PackagesProps {
  onEnquire?: (packageName: string) => void;
}

const Packages: React.FC<PackagesProps> = ({ onEnquire }) => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.3em] block mb-4 animate-reveal stagger-1">Curated Experiences</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-reveal stagger-2">Signature Packages</h1>
          <p className="text-stone-500 max-w-2xl mx-auto animate-reveal stagger-3">
            Everything you need for the perfect getaway. All-inclusive luxury tailored to your preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={pkg.id} 
              className="bg-white border border-stone-100 rounded-[2.5rem] overflow-hidden flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-reveal"
              style={{ animationDelay: `${200 + idx * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-2 text-stone-900 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-3 h-3" />
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-3xl font-serif mb-6">{pkg.title}</h3>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-500 text-sm">
                      <div className="w-5 h-5 bg-stone-50 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-stone-900" />
                      </div>
                      {h}
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-stone-50 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 uppercase tracking-widest block mb-1">Starting from</span>
                    <span className="text-3xl font-serif text-stone-900">${pkg.price.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={() => onEnquire?.(pkg.title)}
                    className="px-6 py-3 bg-stone-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all active:scale-95"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
