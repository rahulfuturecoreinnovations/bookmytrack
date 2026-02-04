
import React from 'react';
import { PLACES_TO_VISIT } from '../constants';
import { MapPin, Info, ArrowRight } from 'lucide-react';

interface PlacesProps {
  onEnquire?: (placeName: string) => void;
}

const Places: React.FC<PlacesProps> = ({ onEnquire }) => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Local Attractions</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Places to Visit</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Beyond the jungle, Jim Corbett is home to ancient temples and historical landmarks that define the spirit of the Kumaon region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PLACES_TO_VISIT.map((place, idx) => (
            <div 
              key={place.id} 
              className="bg-white border border-stone-100 rounded-[3rem] overflow-hidden flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-500"
            >
              <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-2 text-stone-900 text-[10px] font-bold uppercase tracking-wider">
                  <MapPin className="w-3 h-3 text-orange-600" />
                  {place.location}
                </div>
              </div>
              
              <div className="p-10 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 text-stone-400">
                  <span className="text-[10px] font-black uppercase tracking-widest">Attraction 0{idx + 1}</span>
                </div>
                <h3 className="text-3xl font-serif mb-6 leading-tight">{place.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-grow">
                  {place.description}
                </p>

                <div className="pt-8 border-t border-stone-50 flex items-center justify-between">
                  <button 
                    onClick={() => onEnquire?.(place.title)}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900 hover:text-stone-600 transition-colors"
                  >
                    Enquire Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center">
                    <Info className="w-4 h-4 text-stone-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-stone-900 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/4 -translate-y-1/4 blur-3xl" />
          <h2 className="text-4xl font-serif mb-6 relative z-10">Plan Your Local Tour</h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-10 relative z-10">
            We offer guided day-trips to all these locations with professional naturalists and storytellers.
          </p>
          <button 
            onClick={() => onEnquire?.('Full Day Local Tour')}
            className="px-10 py-4 bg-white text-stone-900 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-100 transition-all relative z-10"
          >
            Download Local Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default Places;
