
import React, { useEffect } from 'react';
import { Destination, View } from '../types';
import { 
  ArrowLeft, Footprints, Camera, Zap, Sunrise, Droplets, Waves, Telescope, Mountain
} from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

interface DestinationDetailProps {
  destination: Destination;
  setView: (view: View) => void;
}

// --- UNIQUE PAGE: DHIKALA (The Predator Domain) ---
const DhikalaLayout: React.FC<{ dest: Destination }> = ({ dest }) => (
  <div className="bg-[#FAF7F2] min-h-screen font-sans selection:bg-orange-600 selection:text-white">
    {/* Immersive Hero */}
    <header className="relative h-screen flex items-end p-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={dest.image} className="w-full h-full object-cover scale-105 animate-[ken-burns_30s_infinite]" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-transparent to-orange-950/20" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <span className="text-orange-500 font-bold uppercase tracking-[0.6em] text-xs mb-4 block">Apex Predator Sanctuary</span>
        <h1 className="text-white text-8xl md:text-[14rem] font-serif leading-[0.8] mb-8 tracking-tighter">Dhikala</h1>
        <div className="flex gap-12 items-center text-white/70 uppercase tracking-widest text-xs font-bold border-t border-white/20 pt-8">
          <div className="flex items-center gap-2"><Footprints className="w-4 h-4 text-orange-500" /> High Tiger Density</div>
          <div className="flex items-center gap-2"><Camera className="w-4 h-4 text-orange-500" /> Rare Sightings</div>
        </div>
      </div>
    </header>

    {/* Tracking Log Section */}
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <h2 className="text-6xl font-serif text-stone-900 leading-tight">The Pulse of <br /> the Grasslands.</h2>
          <p className="text-xl text-stone-600 font-light leading-relaxed">
            Dhikala isn't just a zone; it's a living archive of the wild. Our expeditions here focus on the "The Ghost Walk"—tracking the elusive stripes through the tall elephant grass of the Ramganga valley.
          </p>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100 flex gap-6 items-center">
            <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white shrink-0">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900">Live Field Note</h4>
              <p className="text-sm text-stone-500 italic">"Alarm calls heard near the 4th Kilometer marker. The King is on the move."</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
           <img src="https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?auto=format&fit=crop&q=80&w=1200" alt="Tiger" className="w-full h-[600px] object-cover" />
        </div>
      </div>
    </section>

    {/* Predator Stats */}
    <section className="bg-stone-900 py-32 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="text-center space-y-4">
          <div className="text-6xl font-serif text-orange-500">92%</div>
          <div className="text-xs uppercase tracking-widest font-bold opacity-50">Sighting Success</div>
        </div>
        <div className="text-center space-y-4">
          <div className="text-6xl font-serif text-orange-500">Core</div>
          <div className="text-xs uppercase tracking-widest font-bold opacity-50">Zone Exclusivity</div>
        </div>
        <div className="text-center space-y-4">
          <div className="text-6xl font-serif text-orange-500">4x4</div>
          <div className="text-xs uppercase tracking-widest font-bold opacity-50">Open Jeep Access</div>
        </div>
      </div>
    </section>
  </div>
);

// --- UNIQUE PAGE: RISHIKESH (Spiritual Flow) ---
const RishikeshLayout: React.FC<{ dest: Destination }> = ({ dest }) => (
  <div className="bg-[#F4F9FA] min-h-screen">
    <header className="h-[80vh] relative flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={dest.image} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-cyan-900/30 backdrop-blur-[2px]" />
      </div>
      <div className="relative z-10 text-center text-white px-6">
        <Waves className="w-12 h-12 mx-auto mb-8 animate-bounce text-cyan-200" />
        <h1 className="text-7xl md:text-[10rem] font-serif mb-6 leading-none tracking-tighter">The Flow</h1>
        <p className="text-xl uppercase tracking-[0.5em] font-light">Spiritual Awakening at Rishikesh</p>
      </div>
    </header>

    <main className="max-w-5xl mx-auto py-32 px-6">
      <div className="text-center mb-32">
        <span className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4 block">Wellness & Ritual</span>
        <h2 className="text-5xl font-serif mb-8">Where the Ganges learns to run.</h2>
        <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
          Our Rishikesh retreat is designed for the modern seeker. From private Ganga Aarti ceremonies to deep-tissue Himalayan spas, we prioritize your internal geography.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-12 bg-white rounded-[3rem] shadow-xl shadow-cyan-900/5 space-y-6">
           <Sunrise className="w-10 h-10 text-cyan-500" />
           <h3 className="text-3xl font-serif">Dawn Rituals</h3>
           <p className="text-stone-500">Experience the silence of the riverbank before the world wakes up. Private meditation led by Vedic masters.</p>
        </div>
        <div className="p-12 bg-white rounded-[3rem] shadow-xl shadow-cyan-900/5 space-y-6">
           <Droplets className="w-10 h-10 text-cyan-500" />
           <h3 className="text-3xl font-serif">Hydro Therapy</h3>
           <p className="text-stone-500">Cold-water immersion and mineral-rich river mud wraps for physical detoxification.</p>
        </div>
      </div>
    </main>
  </div>
);

// --- UNIQUE PAGE: BINSAR (Mountain Sanctuary) ---
const BinsarLayout: React.FC<{ dest: Destination }> = ({ dest }) => (
  <div className="bg-[#F6F8F6] min-h-screen font-serif">
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden">
        <img src={dest.image} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-emerald-950/20" />
      </div>
      <div className="lg:w-1/2 flex items-center p-12 md:p-24 bg-white">
        <div>
          <span className="text-emerald-600 font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Alpine Exclusive</span>
          <h1 className="text-6xl md:text-8xl mb-12 leading-tight">Nanda Devi <br /> Sanctuary.</h1>
          <p className="text-stone-500 text-xl font-light font-sans leading-relaxed mb-12">
             Located at 2,420 meters, Binsar is a crown jewel of the Himalayas. Our private villa stays offer 360° visibility of the peaks, including Trishul, Nanda Devi, and Panchachuli.
          </p>
          <div className="flex gap-8">
            <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100 min-w-[120px]">
              <div className="text-3xl text-emerald-900">360°</div>
              <div className="text-[10px] uppercase font-bold text-emerald-600">Views</div>
            </div>
            <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100 min-w-[120px]">
              <div className="text-3xl text-emerald-900">Zero</div>
              <div className="text-[10px] uppercase font-bold text-emerald-600">Noise</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Stargazing Module */}
    <section className="bg-stone-950 py-32 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <Telescope className="w-16 h-16 mx-auto text-emerald-400" />
        <h2 className="text-5xl">The Night is Infinite.</h2>
        <p className="text-stone-400 font-sans text-lg">Binsar is one of the few International Dark Sky-capable zones in India. Our guests receive high-grade telescope access and private astrophotography sessions.</p>
      </div>
    </section>
  </div>
);

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination, setView }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [destination]);

  const renderLayout = () => {
    switch(destination.id) {
      case '1': return <DhikalaLayout dest={destination} />;
      case '2': return <RishikeshLayout dest={destination} />;
      case '3': return <BinsarLayout dest={destination} />;
      default: return (
        <div className="pt-40 px-6 max-w-4xl mx-auto min-h-screen text-center">
          <h1 className="text-6xl font-serif mb-8">{destination.name}</h1>
          <img src={destination.image} className="w-full rounded-[3rem] shadow-2xl mb-12" alt="" />
          <p className="text-2xl font-light text-stone-500 leading-relaxed mb-24">{destination.description}</p>
        </div>
      );
    }
  };

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Global Navigation Button */}
      <div className="fixed top-24 left-12 z-[100]">
        <button 
          onClick={() => setView('destinations')}
          className="flex items-center gap-3 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-stone-900 transition-all shadow-2xl"
        >
          <ArrowLeft className="w-4 h-4" /> Discovery Map
        </button>
      </div>

      {renderLayout()}

      {/* Shared Global Enquiry Footer */}
      <section id="enquiry" className="bg-stone-50 py-40 px-6 border-t border-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-stone-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Request Access</span>
            <h2 className="text-6xl font-serif text-stone-900 mb-8">Secure Your Expedition</h2>
            <p className="text-stone-500 text-xl font-light">Limited private permits available for the current season.</p>
          </div>

          <div className="bg-white p-12 md:p-24 rounded-[4rem] shadow-3xl shadow-stone-200/50 border border-stone-50">
            <EnquiryForm initialDestination={destination.name} />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.15) translate(1%, 1%); }
          100% { transform: scale(1); }
        }
        .shadow-3xl {
          shadow-offset: { width: 0, height: 50 };
          shadow-radius: 100;
          shadow-color: rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default DestinationDetail;
