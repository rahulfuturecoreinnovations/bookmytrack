
import React, { useState } from 'react';
import { DESTINATIONS } from '../constants';
import { MapPin } from 'lucide-react';
import { Destination } from '../types';

interface DestinationsProps {
  onExploreDetail?: (dest: Destination) => void;
}

const Destinations: React.FC<DestinationsProps> = ({ onExploreDetail }) => {
  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Jim Corbett National Park</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Explore Safari Zones</h1>
          <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
            From the world-famous grasslands of Dhikala to the dense Sal forests of Bijrani. Each zone in Corbett offers a unique wildlife perspective and distinct ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="group relative overflow-hidden rounded-3xl aspect-[16/10] bg-stone-200">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
              <div className="hidden md:flex items-center gap-2 text-white/70 text-xs uppercase tracking-widest mb-4">
  <MapPin className="w-4 h-4" />
  {dest.name} Core Zone
</div>

                <h3 className="text-4xl text-white font-serif mb-4">{dest.name}</h3>
                <p className="text-white/80 line-clamp-2 text-sm leading-relaxed mb-6 max-w-lg">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/30">
                    {dest.priceRange}
                  </span>
                  <button 
                    onClick={() => onExploreDetail?.(dest)}
                    className="text-white text-sm font-bold border-b border-white/50 pb-0.5 hover:border-white transition-all"
                  >
                    View Zone Details
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

export default Destinations;
