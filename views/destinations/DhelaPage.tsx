
import React from 'react';
import { View } from '../../types';
import { ArrowLeft, Footprints, Camera, Zap, Shield, CheckCircle2, MapPin, Compass, Car, Leaf, Map as MapIcon, Users } from 'lucide-react';
import EnquiryForm from '../../components/EnquiryForm';

const DhelaPage: React.FC<{ setView: (v: View) => void }> = ({ setView }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen animate-in fade-in duration-700">
      {/* Immersive Hero */}
      <header className="relative h-screen flex items-end p-12 overflow-hidden">
        <div className="absolute inset-0">
        <img
    src="/images/Dhelafront.png"
    alt="Dhikala Jim Corbett National Park"
    className="hidden md:block w-full h-full object-cover scale-105 animate-[ken-burns_50s_infinite]"
  />

  {/* Mobile Image */}
  <img
    src="/images/Dhelahome.JPG"
    alt="Dhikala Jim Corbett National Park"
    className="block md:hidden w-full h-full object-cover scale-105 animate-[ken-burns_50s_infinite]"
  /> 
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <button onClick={() => setView('destinations')} className="flex items-center gap-2 text-white/60 mb-8 uppercase tracking-widest text-[10px] font-bold hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Safari Zones Map
          </button>
          <span className="text-stone-400 font-bold uppercase tracking-[0.6em] text-xs mb-4 block">Eco-Tourism Frontier</span>
          <h1 className="text-white text-7xl md:text-[14rem] font-serif leading-[0.8] mb-8 tracking-tighter">Dhela</h1>
          <div className="flex gap-12 items-center text-white/70 uppercase tracking-widest text-xs font-bold border-t border-white/20 pt-8">
            <div className="flex items-center gap-2"><Leaf className="w-4 h-4 text-stone-400" /> Eco-Sensitive Zone</div>
            <div className="flex items-center gap-2"><Footprints className="w-4 h-4 text-stone-400" /> Riverbed Sightings</div>
          </div>
        </div>
      </header>

      {/* Zone Map Section */}
      <section className="pt-12 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-stone-200">
          <img 
            src="/images/Dhelamap.png" 
            alt="Dhikala Topography and Safari Trails"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-10 flex items-center gap-4">
             <div className="p-3 bg-orange-600 rounded-full text-white shadow-lg">
                <MapIcon className="w-6 h-6" />
             </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-6xl font-serif leading-tight">The Modern <br /> Wild.</h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              Dhela is one of the newest and most diverse zones in Jim Corbett. Developed to promote sustainable tourism, it has quickly gained fame for its rich birdlife and frequent sightings of tigers and elephants near its riverbeds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
              <Zap className="w-8 h-8 text-emerald-600 mb-4" />
              <h4 className="font-bold mb-2">Bio-Diversity Spot</h4>
              <p className="text-stone-500 text-sm">A unique mix of Sal forest and high grasslands making it a wildlife magnet.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
              <Camera className="w-8 h-8 text-emerald-600 mb-4" />
              <h4 className="font-bold mb-2">Riverbed Vista</h4>
              <p className="text-stone-500 text-sm">Ideal for spotting herds of elephants crossing the Dhela river at dusk.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="/images/Dhelafront2.JPG" className="rounded-[4rem] shadow-2xl h-[700px] w-full object-cover" alt="Dhela Jungle" />
        </div>
      </section>

      {/* Safari Tariff Section */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Jim Corbett Safari Price</span>
            <h2 className="text-5xl font-serif">Dhela Safari Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-stone-100 flex flex-col items-center text-center">
              <Car className="w-12 h-12 text-stone-900 mb-6" />
              <h3 className="text-2xl font-serif mb-2">Eco-Jeep Safari</h3>
              <p className="text-stone-400 text-sm mb-6 uppercase tracking-widest font-bold">Standard Wild Access</p>
              <div className="text-4xl font-serif text-stone-900 mb-2">INR 7500 -Indian</div>
              <p className="text-stone-500 text-xs mb-8">Best Value for Jim Corbett Safari Booking</p>
              <ul className="text-left w-full space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Professional Driver</li>
                <li className="flex items-center gap-3 text-sm text-stone-600"><CheckCircle2 className="w-8 h- text-emerald-600" /> Maximum 6 Persons & 1 children (b/w - 5 to 12 years) are allowed in ONE Jeep</li>
              </ul>
            </div>
            <div className="bg-emerald-900 p-10 rounded-[2.5rem] shadow-xl text-white flex flex-col items-center text-center relative overflow-hidden">
              <Users className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-serif mb-2">Naturalist Escort</h3>
              <p className="text-stone-400 text-sm mb-6 uppercase tracking-widest font-bold">Educational Wildlife Tour</p>
              <div className="text-4xl font-serif text-white mb-2">Prices As Per Availablity</div>
              <p className="text-stone-400 text-xs mb-8">Deep Ecosystem Insight</p>
              <ul className="text-left w-full space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Senior Naturalist</li>
                <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Bird ID Guide</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Global Enquiry Footer */}
      <section id="enquiry" className="bg-[#f2fcf2] py-32 px-6 border-t border-emerald-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-emerald-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Request Dhela Access</span>
            <h2 className="text-6xl font-serif text-stone-900 mb-8">Eco-Safari Experience</h2>
            <p className="text-stone-500 text-xl font-light">Discover Corbett's newest eco-tourism frontier with us.</p>
          </div>

          <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-emerald-50">
            <EnquiryForm initialDestination="Dhela Zone Safari" themeColor="emerald" />
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

export default DhelaPage;
