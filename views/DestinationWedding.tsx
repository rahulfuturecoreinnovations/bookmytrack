
import React from 'react';
import { View } from '../types';
import { Heart, GlassWater, Music, Gem, Users, CheckCircle2, Star, Sparkles, Camera, MapPin, ArrowRight } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

const DestinationWedding: React.FC<{ setView: (v: View) => void }> = ({ setView }) => {
  return (
    <div className="bg-stone-50 min-h-screen animate-in fade-in duration-700">
      {/* Immersive Hero */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/weddingfront.png" 
            className="w-full h-full object-cover scale-105 animate-[ken-burns_30s_infinite]" 
            alt="Wedding Destination" 
          />
          <div className="absolute inset-0 bg-stone-900/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-stone-50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="text-white/80 font-bold uppercase tracking-[0.6em] text-xs mb-6 block animate-reveal stagger-1">Eternal Vows. Untamed Beauty.</span>
          <h1 className="text-white text-6xl md:text-9xl font-serif leading-[0.9] mb-10 tracking-tighter animate-reveal stagger-2">
            Weddings in <br /> the <span className="italic">Wild</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed animate-reveal stagger-3">
            Celebrate your union where luxury meets the legacy of the jungle. From riverside altars to starlit forest galas, we orchestrate the extraordinary.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-reveal" style={{ animationDelay: '400ms' }}>
            <button 
              onClick={() => {
                const el = document.getElementById('wedding-packages');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-5 bg-white text-stone-900 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-100 hover:scale-105 transition-all shadow-xl"
            >
              Explore Venues
            </button>
            <button 
              onClick={() => setView('contact')}
              className="px-10 py-5 bg-transparent border border-white/30 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-3"
            >
              Consult a Specialist <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Narrative Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-stone-400 font-bold uppercase tracking-[0.4em] text-[10px] block">A Wilder Love Story</span>
            <h2 className="text-6xl font-serif leading-tight">Your love story <br /> deserves a wilder <br /> canvas.</h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              At Book My Track, we specialize in high-concept destination weddings in the Jim Corbett heartland. We believe your big day shouldn't just be a ceremony, but an expedition of the heart. 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
              <Heart className="w-8 h-8 text-rose-400 mb-4" />
              <h4 className="font-bold mb-2">Bespoke Planning</h4>
              <p className="text-stone-500 text-sm">Every detail, from the Vedic chants to the floral architecture, tailored to your aesthetic.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
              <Users className="w-8 h-8 text-stone-400 mb-4" />
              <h4 className="font-bold mb-2">Guest Expeditions</h4>
              <p className="text-stone-500 text-sm">Give your guests more than a wedding—treat them to private safaris and riverside glamping.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative group">
            <img 
              src="/images/wedding2.JPG" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" 
              alt="Wedding Setup" 
            />
            <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl max-w-xs border border-stone-50">
            <Sparkles className="w-10 h-10 text-stone-900 mb-6" />
            <p className="text-stone-900 font-serif italic text-xl leading-relaxed">"The most magical sunset vows we've ever witnessed. The jungle fell silent as they said 'I do'."</p>
            <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold mt-4">— Wedding Journal 2024</p>
          </div>
        </div>
      </section>

      {/* Venue Showcase */}
      <section id="wedding-packages" className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-stone-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Signature Venues</span>
            <h2 className="text-5xl md:text-6xl font-serif">A Canvas for Every Vow</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Riverfront Serenity",
                desc: "Exchange rings on the banks of the Kosi river with the sound of flowing water and the Himalayas as your backdrop.",
                image: "/images/midforest.png",
                tag: "Riverside Luxury"
              },
              {
                title: "Forest Glade Manor",
                desc: "A sprawling estate nestled within the buffer zone, offering complete privacy and a heritage Sal forest ambiance.",
                image: "/images/riverfront.png",
                tag: "Bespoke Heritage"
              },
              {
                title: "Sky-Deck Pavilion",
                desc: "A high-altitude open-air venue with 360-degree views of the Corbett valley—perfect for a starlit reception.",
                image: "/images/skydeck.png",
                tag: "Valley Views"
              }
            ].map((venue, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8">
                  <img 
                    src={venue.image} 
                    alt={venue.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/30">
                      {venue.tag}
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl font-serif mb-4 group-hover:text-stone-400 transition-colors">{venue.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">{venue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              {[
                { icon: Gem, title: "Royal Decor", desc: "Sourcing local craft and high-luxury elements." },
                { icon: Music, title: "Folk & Fusion", desc: "Kumaoni traditional music meets global beats." },
                { icon: GlassWater, title: "Wildlife Gala", desc: "Themed catering under the jungle canopy." },
                { icon: Camera, title: "Visual Story", desc: "Cinematic drone and high-res capture." }
              ].map((service, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-all">
                  <service.icon className="w-8 h-8 text-stone-900 mb-4" />
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">{service.title}</h4>
                  <p className="text-stone-400 text-xs leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-stone-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">The Full Suite</span>
              <h2 className="text-5xl font-serif mb-8">We manage the chaos, <br /> you live the dream.</h2>
              <p className="text-stone-500 text-lg font-light leading-relaxed mb-10">
                From managing local logistics and permits to providing private safari escorts for your guests—our wedding concierge service handles every single detail of your jungle union.
              </p>
              <ul className="space-y-4">
                {[
                  "Private Jet & Heli-transfers available",
                  "Wildlife safety and zone management",
                  "24/7 Personal Wedding Concierge",
                  "Eco-conscious and zero-waste planning"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-stone-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-stone-900" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-32 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto bg-white rounded-[5rem] shadow-3xl overflow-hidden border border-stone-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-stone-900 p-16 md:p-24 text-white">
              <h3 className="text-5xl font-serif mb-8">Design Your <br /> Union</h3>
              <p className="text-stone-400 font-light leading-relaxed mb-12">
                Share your vision with our senior wedding architects. We recommend connecting at least 6 months prior to your preferred date for zone-specific logistics.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-stone-800 rounded-2xl flex items-center justify-center text-white">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Platinum Planning</h5>
                    <p className="text-xs text-stone-500 uppercase tracking-widest">End-to-end management</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-16 md:p-24">
              <EnquiryForm initialDestination="Destination Wedding" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.1) translate(1%, 1%); }
          100% { transform: scale(1); }
        }
        .shadow-3xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default DestinationWedding;
