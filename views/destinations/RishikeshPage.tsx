
import React from 'react';
import { View } from '../../types';
import { ArrowLeft, Waves, Sunrise, Droplets, Heart, Wind, Sparkles } from 'lucide-react';
import EnquiryForm from '../../components/EnquiryForm';

const RishikeshPage: React.FC<{ setView: (v: View) => void }> = ({ setView }) => {
  return (
    <div className="bg-[#F4FBFC] min-h-screen animate-in fade-in duration-700">
      <header className="h-[90vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1598971861713-54ad16a7e71e?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover animate-[ken-burns_30s_infinite]" alt="Rishikesh" />
          <div className="absolute inset-0 bg-cyan-900/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <button onClick={() => setView('destinations')} className="inline-flex items-center gap-2 mb-12 bg-white/10 px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all">
            <ArrowLeft className="w-4 h-4" /> Discovery Map
          </button>
          <Waves className="w-16 h-16 mx-auto mb-8 text-cyan-200 animate-pulse" />
          <h1 className="text-8xl md:text-[12rem] font-serif mb-6 leading-none tracking-tighter">Rishikesh</h1>
          <p className="text-xl uppercase tracking-[0.5em] font-light text-cyan-100">The Spiritual Flow</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-40">
          <div className="lg:col-span-7 space-y-10">
            <span className="text-cyan-600 font-bold uppercase tracking-widest text-xs block">Wellness & Ritual</span>
            <h2 className="text-6xl md:text-7xl font-serif leading-tight">Where the Ganges <br /> finds its Peace.</h2>
            <div className="prose prose-stone lg:prose-xl text-stone-600 max-w-2xl font-light">
              <p>Rishikesh is the world capital of Yoga, but our retreat offers a deeper, more private connection to this ancient frequency. Nestled away from the crowded ghats, we offer a sanctuary where the river's song is your constant companion.</p>
              <p>From private 'Ganga Aarti' ceremonies to bespoke Ayurvedic detox programs, every moment is curated for internal alignment.</p>
            </div>
            
            <div className="flex gap-12 pt-8">
              <div className="text-center">
                <div className="text-4xl font-serif text-cyan-900">120+</div>
                <div className="text-[10px] uppercase font-bold text-cyan-600 tracking-widest">Herbal Blends</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif text-cyan-900">Vedic</div>
                <div className="text-[10px] uppercase font-bold text-cyan-600 tracking-widest">Masters</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544735047-498c368c347f?auto=format&fit=crop&q=80&w=1200" alt="Yoga" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/60 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <Sparkles className="w-8 h-8 mb-4 text-cyan-300" />
                <h4 className="text-2xl font-serif">Private Ghat Access</h4>
                <p className="text-cyan-100/70 text-sm mt-2">Exclusive riverfront meditation spots reserved solely for Lumina guests.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wellness Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {[
            { icon: Sunrise, title: 'Pranayama at Dawn', desc: 'Guided breathing exercises as the first light hits the Himalayan foothills.' },
            { icon: Droplets, title: 'River Immersion', desc: 'Cold water therapy sessions and spiritual baths in the untouched stretches of the Ganges.' },
            { icon: Heart, title: 'Ayurvedic Spa', desc: 'Holistic treatments using medicinal plants sourced from the high-altitude forests.' }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-white rounded-[3rem] shadow-xl shadow-cyan-900/5 space-y-6 border border-cyan-50 group hover:-translate-y-2 transition-all">
              <item.icon className="w-10 h-10 text-cyan-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-serif">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Enquiry Section */}
        <div className="bg-cyan-950 rounded-[5rem] overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-16 md:p-24 space-y-12">
              <div>
                <h3 className="text-5xl font-serif mb-6">Begin Your <br /> Transformation</h3>
                <p className="text-cyan-200/60 font-light text-lg">Our wellness specialists will design a retreat that aligns with your physical and spiritual goals.</p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-cyan-900/50 rounded-2xl flex items-center justify-center text-cyan-400">
                    <Wind className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Custom Diet Plan</h5>
                    <p className="text-xs text-cyan-400/60 uppercase tracking-widest">Sattvic & Ayurvedic</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-cyan-900/50 rounded-2xl flex items-center justify-center text-cyan-400">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Vedic Astrology</h5>
                    <p className="text-xs text-cyan-400/60 uppercase tracking-widest">Personal Consultations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-16 md:p-24 bg-white/5 backdrop-blur-md">
              <EnquiryForm initialDestination="Rishikesh Retreat" variant="dark" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RishikeshPage;
