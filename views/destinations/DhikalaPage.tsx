
import React from 'react';
import { View } from '../../types';
import { ArrowLeft, Footprints, Camera, Zap, Shield, CheckCircle2, Map as MapIcon, Compass, Car, Users } from 'lucide-react';
import EnquiryForm from '../../components/EnquiryForm';

const DhikalaPage: React.FC<{ setView: (v: View) => void }> = ({ setView }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen animate-in fade-in duration-700">
      <header className="relative h-screen flex items-end p-12 overflow-hidden">
        <div className="absolute inset-0">
        <img
    src="/images/Dhikalafront2.png"
    alt="Dhikala Jim Corbett National Park"
    className="hidden md:block w-full h-full object-cover scale-105 animate-[ken-burns_50s_infinite]"
  />

  {/* Mobile Image */}
  <img
    src="/images/Dhikalafront.JPG"
    alt="Dhikala Jim Corbett National Park"
    className="block md:hidden w-full h-full object-cover scale-105 animate-[ken-burns_50s_infinite]"
  />          
  <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <button onClick={() => setView('destinations')} className="flex items-center gap-2 text-white/60 mb-8 uppercase tracking-widest text-[10px] font-bold hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Jim Corbett Safari Booking
          </button>
          <span className="text-orange-500 font-bold uppercase tracking-[0.6em] text-xs mb-4 block">Official Dhikala Jungle Safari</span>
          <h1 className="text-white text-7xl md:text-[14rem] font-serif leading-[0.8] mb-8 tracking-tighter">Dhikala</h1>
          <div className="flex gap-12 items-center text-white/70 uppercase tracking-widest text-xs font-bold border-t border-white/20 pt-8">
            <div className="flex items-center gap-2"><Footprints className="w-4 h-4 text-orange-500" /> Jeep Safari in Jim Corbett</div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4 text-orange-500" /> Canter Safari Jim Corbett</div>
          </div>
        </div>
      </header>

      {/* Zone Map Section */}
      <section className="pt-12 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-stone-200">
          <img 
            src="/images/Dhikalamap.png" 
            alt="Dhikala Topography and Safari Trails"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-10 flex items-center gap-4">
             <div className="p-3 bg-orange-600 rounded-full text-white shadow-lg">
                <MapIcon className="w-6 h-6" />
             </div>
             <div className="hidden md:block absolute bottom-8 left-10">
  <span className="text-white text-[10px] font-bold uppercase tracking-[0.5em] block mb-1">
    Dhikala Jim Corbett National Park Uttarakhand
  </span>
  <p className="text-white/60 text-[10px] uppercase tracking-widest font-medium">
    Safari Timings: 6 AM to 10 AM, 2 PM to 6 PM
  </p>
</div>

          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-6xl font-serif leading-tight">Premium <br /> Jim Corbett Safari Packages.</h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              Dhikala is the most sought-after zone for a <strong>jungle safari in Jim Corbett</strong>. Known for its tiger density and the vast Ramganga grasslands, it offers the ultimate wilderness experience. Stay in premium Jim Corbett resorts nearby or book an exclusive Forest Rest House stay.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
              <MapIcon className="w-8 h-8 text-orange-600 mb-4" />
              <h4 className="font-bold mb-2">Safari Booking Dhikala</h4>
              <p className="text-stone-500 text-sm">Online booking for Jeep and Canter safari. Secure your permits 45 days in advance.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
              <Compass className="w-8 h-8 text-orange-600 mb-4" />
              <h4 className="font-bold mb-2">Jim Corbett Safari Price</h4>
              <p className="text-stone-500 text-sm">Competitive safari charges for Indian and foreign nationals. Official pricing.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?auto=format&fit=crop&q=80&w=1200" className="rounded-[4rem] shadow-2xl h-[700px] w-full object-cover" alt="Tiger in Jim Corbett" />
        </div>
      </section>

      {/* Safari Tariff Section */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Official Jim Corbett Safari Charges</span>
            <h2 className="text-5xl font-serif">Jim Corbett Safari Price & Info</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-stone-100 flex flex-col items-center text-center">
              <Car className="w-12 h-12 text-stone-900 mb-6" />
              <h3 className="text-2xl font-serif mb-2">Jeep Safari in Jim Corbett</h3>
              <p className="text-stone-400 text-sm mb-6 uppercase tracking-widest font-bold">Private Gypsy Safari</p>
              <div className="text-4xl font-serif text-stone-900 mb-2">$110</div>
              <p className="text-stone-500 text-xs mb-8">Best Jim Corbett Safari Package</p>
              <ul className="text-left w-full space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Private 4x4 Gypsy</li>
                <li className="flex items-center gap-3 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Professional Driver</li>
              </ul>
            </div>
            <div className="bg-stone-900 p-10 rounded-[2.5rem] shadow-xl text-white flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-orange-600 text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Low Price</span>
              </div>
              <Users className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-serif mb-2">Canter Safari Jim Corbett</h3>
              <p className="text-stone-400 text-sm mb-6 uppercase tracking-widest font-bold">Shared Core Zone Visit</p>
              <div className="text-4xl font-serif text-white mb-2">$25</div>
              <p className="text-stone-400 text-xs mb-8">Best Canter Safari Jim Corbett Price</p>
              <ul className="text-left w-full space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-4 h-4 text-orange-500" /> 16 Seater Vehicle</li>
                <li className="flex items-center gap-3 text-sm text-stone-300"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Entry Permits Included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Global Enquiry Footer */}
      <section id="enquiry" className="bg-orange-50 py-32 px-6 border-t border-orange-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Request Dhikala Access</span>
            <h2 className="text-6xl font-serif text-stone-900 mb-8">Secure Your Safari</h2>
            <p className="text-stone-500 text-xl font-light">Limited private permits available for the current Dhikala season.</p>
          </div>

          <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-orange-100">
            <EnquiryForm initialDestination="Dhikala Zone Safari" themeColor="orange" />
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

export default DhikalaPage;
