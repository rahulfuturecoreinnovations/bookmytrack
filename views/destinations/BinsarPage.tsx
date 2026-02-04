
import React from 'react';
import { View } from '../../types';
import { ArrowLeft, Mountain, Wind, Telescope, CloudSun, CheckCircle2, MapPin, Eye } from 'lucide-react';
import EnquiryForm from '../../components/EnquiryForm';

const BinsarPage: React.FC<{ setView: (v: View) => void }> = ({ setView }) => {
  return (
    <div className="bg-[#F6F8F6] min-h-screen animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover animate-[ken-burns_30s_infinite]" alt="Binsar" />
          <div className="absolute top-12 left-12 z-20">
            <button onClick={() => setView('destinations')} className="flex items-center gap-2 text-white/80 bg-stone-900/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-stone-900 transition-all">
              <ArrowLeft className="w-4 h-4" /> Discovery Map
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center p-12 md:p-24 bg-white relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none">
            <Mountain className="w-96 h-96" />
          </div>
          <div className="relative z-10">
            <span className="text-emerald-600 font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Alpine Sanctuary</span>
            <h1 className="text-7xl md:text-9xl font-serif mb-12 leading-tight tracking-tighter">Binsar</h1>
            <p className="text-stone-500 text-xl font-light leading-relaxed mb-12 max-w-xl">
               At 2,420 meters, Binsar is a 'Zero Noise Zone'. It offers a staggering 360° panoramic view of the high Himalayan peaks, including Nanda Devi, Trishul, and Panchachuli.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-stone-900">Zero Point</h4>
                <p className="text-sm text-stone-400">The highest point in Binsar, offering unobstructed peak visibility.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <Wind className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-stone-900">Oak Forest</h4>
                <p className="text-sm text-stone-400">Ancient forests home to over 200 species of birds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Narrative Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" className="rounded-[4rem] shadow-2xl h-[600px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" alt="Peak" />
            <div className="absolute -bottom-12 -right-12 bg-stone-900 text-white p-12 rounded-[3rem] shadow-2xl">
              <h4 className="text-3xl font-serif mb-4">The Crown of Kumaon</h4>
              <p className="text-stone-400 text-sm leading-relaxed">During sunset, the snow-capped peaks turn a deep golden hue—a phenomenon locally known as the 'Alpenglow'.</p>
            </div>
          </div>
          <div className="space-y-12">
             <h2 className="text-6xl font-serif leading-tight">Touch the Sky <br /> without leaving Home.</h2>
             <div className="prose prose-stone lg:prose-xl text-stone-500 font-light">
               <p>Our Binsar estate is located within the Wildlife Sanctuary itself, meaning your neighbors are Goral, Barking Deer, and the occasional Leopard. There are no roads beyond our gate—only trails leading into the clouds.</p>
               <p>We specialize in 'Slow Living'—a curated experience focused on forest bathing, birdwatching, and alpine gastronomy.</p>
             </div>
             <div className="grid grid-cols-3 gap-8 pt-8">
               <div className="space-y-2">
                 <Eye className="w-6 h-6 text-emerald-600" />
                 <div className="text-xl font-serif">200+</div>
                 <div className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Bird Species</div>
               </div>
               <div className="space-y-2">
                 <Mountain className="w-6 h-6 text-emerald-600" />
                 <div className="text-xl font-serif">5 Peaks</div>
                 <div className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Major Visibility</div>
               </div>
               <div className="space-y-2">
                 <CloudSun className="w-6 h-6 text-emerald-600" />
                 <div className="text-xl font-serif">Pure</div>
                 <div className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">Air Quality</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Astronomy Module */}
      <section className="bg-stone-950 py-40 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
          <Telescope className="w-16 h-16 mx-auto text-emerald-400 animate-pulse" />
          <h2 className="text-6xl font-serif">The Infinite Above.</h2>
          <p className="text-stone-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Due to zero light pollution, the night sky at Binsar reveals the Milky Way in high definition. We provide guests with professional telescopes and guided celestial tours.
          </p>
          <div className="flex justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-2xl font-serif">HD</div>
              <div className="text-[10px] uppercase font-bold text-stone-500 tracking-widest">Star Trails</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-serif">Milky Way</div>
              <div className="text-[10px] uppercase font-bold text-stone-500 tracking-widest">Visibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 space-y-8">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Stay with the Clouds</span>
            <h3 className="text-5xl font-serif">Secure Your <br /> Alpine Villa</h3>
            <p className="text-stone-500 font-light leading-relaxed">Binsar has very limited high-end accommodation options due to environmental regulations. We recommend booking at least 3 months in advance for the peak clear-sky season.</p>
            <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-emerald-900 text-sm italic">"The most clear views are typically between October and March."</p>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-stone-50">
              <EnquiryForm initialDestination="Nanda Devi Viewpoint" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BinsarPage;
