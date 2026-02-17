
import React from 'react';
import { View } from '../../types';
import { ArrowLeft, Footprints, Camera, Zap, Shield, CheckCircle2, MapPin, Compass, Car, Sparkles, Map as MapIcon, Users } from 'lucide-react';
import EnquiryForm from '../../components/EnquiryForm';

const PhantoPage: React.FC<{ setView: (v: View) => void }> = ({ setView }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen animate-in fade-in duration-700">
      {/* Immersive Hero */}
      <header className="relative h-screen flex items-end p-12 overflow-hidden">
        <div className="absolute inset-0">
        <img
    src="/images/Phantofront.png"
    alt="Phanto Zone Jim Corbett National Park"
    className="hidden md:block w-full h-full object-cover scale-105 animate-[ken-burns_50s_infinite]"
  />

  {/* Mobile Image */}
  <img
    src="/images/Phantohome.JPG"
    alt="Phanto Jim Corbett National Park"
    className="block md:hidden w-full h-full object-cover scale-105 animate-[ken-burns_50s_infinite]"
  /> 
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <button onClick={() => setView('destinations')} className="flex items-center gap-2 text-white/60 mb-8 uppercase tracking-widest text-[10px] font-bold hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Safari Zones Map
          </button>
          <span className="text-stone-400 font-bold uppercase tracking-[0.6em] text-xs mb-4 block">The New Frontier</span>
          <h1 className="text-white text-7xl md:text-[14rem] font-serif leading-[0.8] mb-8 tracking-tighter">Phanto</h1>
          <div className="flex gap-12 items-center text-white/70 uppercase tracking-widest text-xs font-bold border-t border-white/20 pt-8">
            <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-stone-400" /> Pristine Wilderness</div>
            <div className="flex items-center gap-2"><Footprints className="w-4 h-4 text-stone-400" /> Untouched Trails</div>
          </div>
        </div>
      </header>

      {/* Zone Map Section */}
      <section className="pt-12 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-stone-800">
          <img 
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000" 
            alt="Phanto Topography"
            className="w-full h-[300px] md:h-[500px] object-cover grayscale opacity-40 bg-stone-900"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-10 flex items-center gap-4">
             <div className="p-3 bg-stone-50 rounded-full text-stone-900 shadow-lg">
                <MapIcon className="w-6 h-6" />
             </div>
             <div>
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.5em] block mb-1">Phanto Virgin Territory</span>
                <p className="text-white/60 text-[10px] uppercase tracking-widest font-medium">Uncharted Northern Gateway Route</p>
             </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-6xl font-serif leading-tight">The Uncharted <br /> Wild.</h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              Phanto is the newest jewel in Jim Corbett's crown. Located on the northern boundary, it offers a raw, untouched jungle experience away from the traditional tourist circuits. This zone is a primary movement corridor for big cats migrating between the Kumaon and Garhwal hills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
              <Compass className="w-8 h-8 text-stone-900 mb-4" />
              <h4 className="font-bold mb-2">New Trails</h4>
              <p className="text-stone-500 text-sm">Experience the thrill of being among the first to map these wild pathways.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
              <Zap className="w-8 h-8 text-stone-900 mb-4" />
              <h4 className="font-bold mb-2">High Migration</h4>
              <p className="text-stone-500 text-sm">Strategically located for spotting migrating wildlife between ranges.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="/images/Phantofront2.png" className="rounded-[4rem] shadow-2xl h-[700px] w-full object-cover" alt="Phanto Virgin Forest" />
        </div>
      </section>

      {/* Safari Tariff Section */}
      <section className="py-24 px-6 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          <Sparkles className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-stone-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Official Jim Corbett Safari Charges</span>
            <h2 className="text-5xl font-serif">Phanto Safari Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center">
              <Car className="w-12 h-12 text-stone-400 mb-6" />
              <h3 className="text-2xl font-serif mb-2">Frontier Jeep Safari</h3>
              <p className="text-stone-400 text-sm mb-6 uppercase tracking-widest font-bold">Private Gypsy Safari</p>
              <div className="text-4xl font-serif text-stone mb-2">INR 7500 -Indian</div>
              <p className="text-stone-400 text-xs mb-8">Special Introductory Jim Corbett Safari Price</p>
              <ul className="text-left w-full space-y-3 mb-10">
              <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-8 h-8 text-white" /> Maximum 6 Persons & 1 children (b/w - 5 to 12 years) are allowed in ONE Jeep</li>
              <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-4 h-4 text-white" /> Exclusive Tracks</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl text-stone-900 flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-stone-900 mb-6" />
              <h3 className="text-2xl font-serif mb-2">Expedition Group</h3>
              <p className="text-stone-400 text-sm mb-6 uppercase tracking-widest font-bold">Guided Group Discovery</p>
              <div className="text-4xl font-serif text-stone-900 mb-2">Prices As Per Availablity</div>
              <p className="text-stone-500 text-xs mb-8">Pioneer Exploration Team</p>
              <ul className="text-left w-full space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-stone-900" /> Professional Naturalist</li>
                <li className="flex items-center gap-3 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-stone-900" /> Refreshments Incl.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Global Enquiry Footer */}
      <section id="enquiry" className="bg-stone-900 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-stone-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Pioneer Phanto Access</span>
            <h2 className="text-6xl font-serif text-white mb-8">Untouched Core</h2>
            <p className="text-stone-400 text-xl font-light">Be the first to explore Corbett's newest raw frontier.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-12 md:p-20 rounded-[4rem] border border-white/10">
            <EnquiryForm initialDestination="Phanto Zone Safari" variant="dark" themeColor="black" />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.1) translate(1%, 1%); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default PhantoPage;
