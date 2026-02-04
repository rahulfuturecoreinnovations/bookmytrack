
import React from 'react';
import { Award, Heart, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Happy Travelers', value: '12k+' },
    { label: 'Global Destinations', value: '450+' },
    { label: 'Expert Guides', value: '85+' },
    { label: 'Years Experience', value: '15' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-48 pb-24 px-6 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-serif mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">The World is Waiting <br /> for Your Story</h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Founded on a passion for discovery and a commitment to luxury, Lumina has been crafting bespoke travel experiences since 2008.
          </p>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
            <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800" alt="Adventure" className="rounded-3xl shadow-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-stone-200 rounded-3xl -rotate-3 -z-10" />
          </div>
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-6 block">Our Vision</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Redefining the Journey</h2>
            <div className="space-y-6 text-stone-500 leading-loose">
              <p>We believe that travel is more than just checking off destinations. It is about the soul-stirring moments that change your perspective forever.</p>
              <p>Our team of specialists spent years exploring the most remote and exclusive locations on earth to build a network that guarantees not just quality, but soul. We look for the stories that haven't been told yet.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-16">
              {stats.map((stat, i) => (
                <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ transitionDelay: `${500 + i * 100}ms` }}>
                  <div className="text-4xl font-serif font-bold text-stone-900 mb-2">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Core Values</h2>
            <p className="text-stone-500">The principles that guide every trip we plan.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Heart, title: 'Passion', desc: 'We love what we do, and it shows in every detail.' },
              { icon: ShieldCheck, title: 'Trust', desc: 'Honesty and integrity in all our dealings.' },
              { icon: Zap, title: 'Impact', desc: 'Committed to sustainable and regenerative travel.' },
              { icon: Award, title: 'Excellence', desc: 'Only the highest standards for our clients.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-stone-100 text-center animate-in zoom-in-95 duration-700" style={{ transitionDelay: `${200 + i * 100}ms` }}>
                <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <v.icon className="text-white w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif mb-4">{v.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
