
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Clock, Star, Shield, Globe, Compass, Leaf, Eye, ArrowUpRight, Trophy, Sparkles, UserCheck, HeartHandshake, Quote, ChevronLeft, ChevronRight, Heart, Sparkle, CloudSun, Navigation, Target } from 'lucide-react';
import { DESTINATIONS, PLACES_TO_VISIT, BLOG_POSTS } from '../constants';
import { useNavigate } from 'react-router-dom';

const TESTIMONIALS = [
  {
    name: "Elena Richardson",
    location: "London, UK",
    text: "The level of exclusivity Lumina provides is unparalleled. Tracking a male tiger in Dhikala with their senior naturalist was the most profound wildlife experience of my life.",
    destination: "Dhikala Expedition",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Marcus Thorne",
    location: "New York, USA",
    text: "Bespoke in every sense of the word. From the private Ganga Aarti to the luxury glamping setup, Lumina understands that luxury is found in the details of the journey.",
    destination: "Himalayan Retreat",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Sophie Chen",
    location: "Singapore",
    text: "Waking up to the 360-degree views of Nanda Devi was spiritual. The silence of Binsar is a rare luxury that Lumina captures perfectly. Simply flawless execution.",
    destination: "Binsar Sanctuary",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "James Sutherland",
    location: "Sydney, AU",
    text: "I've traveled the world, but the authenticity of Lumina's wildlife tracking is special. They respect the jungle while providing world-class comfort.",
    destination: "Bijrani Safari",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: string }> = ({ children, className = "", delay = "0ms" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.15 });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: delay }}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  
    document.title = 'Jim Corbett Safari Booking | Book My Track';
  
    const canonicalUrl = 'https://www.bookmytrack.com/';
    let link = document.querySelector("link[rel='canonical']");
  
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
  
    link.setAttribute('href', canonicalUrl);
  }, []);
  
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const DESTINATION_ROUTE_MAP: Record<string, string> = {
    '1': 'dhikala',
    '4': 'bijrani',
    '5': 'jhirna',
    '6': 'dhela',
    '7': 'phanto',
    '8': 'sitabani',
  };  

  return (
    <div className="bg-stone-50">
      {/* Immersive Tiger Background Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=90&w=2560" 
            alt="Majestic Tiger in Jim Corbett National Park Uttarakhand"
            className="w-full h-full object-cover scale-110 animate-[ken-burns_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-stone-900/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-transparent to-stone-50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl text-white font-serif mb-50 mt-1 md:mt-0 leading-[0.9] drop-shadow-2xl animate-reveal stagger-2">
            Jim Corbett <br /> National Park
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-reveal stagger-3">
            Embark on a luxury jungle safari in Jim Corbett. Secure your permits for Dhikala, Bijrani, and Jhirna with our premium Jim Corbett safari packages.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-reveal" style={{ animationDelay: '400ms' }}>
            <button 
              onClick={() => navigate('/destinations')}
              className="px-12 py-5 bg-white text-stone-900 rounded-full font-bold hover:bg-stone-100 hover:scale-105 transition-all flex items-center gap-3 group shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              Safari Booking <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/places')}
              className="px-12 py-5 bg-stone-900/20 backdrop-blur-xl border border-white/30 text-white rounded-full font-bold hover:bg-white/10 hover:scale-105 transition-all"
            >
              Places to Visit
            </button>
          </div>
        </div>

      </section>

      {/* Quick Info Bar for SEO (Weather, Distance, Timings) */}
      <section className="bg-white py-12 px-6 border-b border-stone-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <AnimatedSection className="flex flex-col items-center">
            <CloudSun className="w-6 h-6 text-stone-400 mb-4" />
            <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Jim Corbett Weather</h4>
            <p className="text-stone-500 text-sm">24°C - Ideal for Jungle Safari Sightings</p>
          </AnimatedSection>
          <AnimatedSection delay="100ms" className="flex flex-col items-center">
            <Navigation className="w-6 h-6 text-stone-400 mb-4" />
            <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Delhi to Jim Corbett Distance</h4>
            <p className="text-stone-500 text-sm">245 KM | Smooth 5.5 Hour Journey</p>
          </AnimatedSection>
          <AnimatedSection delay="200ms" className="flex flex-col items-center">
            <Clock className="w-6 h-6 text-stone-400 mb-4" />
            <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Jim Corbett Safari Timings</h4>
            <p className="text-stone-500 text-sm">Morning: 6:00 AM | Evening: 2:30 PM</p>
          </AnimatedSection>
        </div>
      </section>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.15) translate(1%, 1%); }
          100% { transform: scale(1); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-paused {
          animation-play-state: paused;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Featured Destinations (Safari Zones) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Jim Corbett <br /> Jungle Safari Zones</h2>
            <p className="text-stone-500 leading-relaxed text-lg">
              Explore the most wildlife-rich zones of Corbett National Park. Secure your official Jim Corbett safari booking for Dhikala, Bijrani, and more.
            </p>
          </div>
          <button 
            onClick={() => navigate('/destinations')}
            className="text-stone-900 font-bold border-b-2 border-stone-900 pb-2 flex items-center gap-3 hover:gap-5 transition-all group text-sm uppercase tracking-widest"
          >
            All Safari Zones <ArrowRight className="w-4 h-4" />
          </button>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {DESTINATIONS.map((dest, idx) => (
            <AnimatedSection key={dest.id} delay={`${idx * 150}ms`}>
              <div 
                className="group cursor-pointer h-full"
                onClick={() =>
                  navigate(`/destinations/${DESTINATION_ROUTE_MAP[dest.id]}`)
                }                
              >
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] mb-8 shadow-xl transition-all duration-700 group-hover:shadow-2xl">
                  <img 
                    src={dest.image} 
                    alt={`${dest.name} Safari Jim Corbett`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 text-white translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">{dest.category}</span>
                    <p className="text-sm text-stone-300 font-light">Jim Corbett Safari Price: {dest.priceRange}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-stone-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                  <MapPin className="w-3 h-3" />
                  Jim Corbett National Park
                </div>
                <h3 className="text-2xl font-serif group-hover:text-stone-600 transition-colors">{dest.name}</h3>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay="900ms" className="hidden lg:block lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-10 text-stone-900 group shadow-xl border border-stone-100 flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-stone-50 rounded-full -translate-x-1/4 -translate-y-1/4 blur-3xl pointer-events-none group-hover:bg-stone-100/50 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 text-orange-600" />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Expedition Guide</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight italic">Which zone is <br /> right for you?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start group/item">
                      <div className="w-px h-8 bg-gradient-to-b from-orange-400 to-transparent shrink-0 group-hover/item:h-10 transition-all duration-300" />
                      <div>
                        <h5 className="font-bold text-[10px] uppercase tracking-widest mb-1 text-stone-800">Dhikala & Bijrani</h5>
                        <p className="text-[10px] text-stone-500 leading-relaxed font-light">Highest probability for Tiger & Elephant tracking in mixed forest terrains.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start group/item">
                      <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent shrink-0 group-hover/item:h-10 transition-all duration-300" />
                      <div>
                        <h5 className="font-bold text-[10px] uppercase tracking-widest mb-1 text-stone-800">Jhirna & Dhela</h5>
                        <p className="text-[10px] text-stone-500 leading-relaxed font-light">Exceptional birding, sloth bear territory, and reliable all-season gateway access.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start group/item">
                      <div className="w-px h-8 bg-gradient-to-b from-stone-400 to-transparent shrink-0 group-hover/item:h-10 transition-all duration-300" />
                      <div>
                        <h5 className="font-bold text-[10px] uppercase tracking-widest mb-1 text-stone-800">Phanto & Sitabani</h5>
                        <p className="text-[10px] text-stone-500 leading-relaxed font-light">New frontiers for pristine wilderness, spiritual history, and walking safari routes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 flex items-center justify-between border-t border-stone-50">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-900 hover:text-stone-600 transition-all group/btn"
                  >
                    Speak with a Tracker <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                  <Compass className="w-8 h-8 text-stone-100" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* --- PLACES TO VISIT CAROUSEL SECTION (Replaces Packages) --- */}
        <div className="border-t border-stone-200 pt-24 pb-16">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">Nearby Attractions</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Places to Visit in <br /> Jim Corbett</h2>
              <p className="text-stone-500 leading-relaxed text-lg">
                Enhance your wildlife journey with visits to these iconic historical and spiritual landmarks near the park.
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollCarousel('left')}
                className="p-4 rounded-full border border-stone-200 hover:bg-stone-100 transition-all text-stone-600"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                className="p-4 rounded-full bg-stone-900 hover:bg-black transition-all text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </AnimatedSection>

          <div 
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto no-scrollbar pb-8 px-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {PLACES_TO_VISIT.map((place) => (
              <div 
                key={place.id} 
                className="flex-shrink-0 w-[85%] md:w-[450px] bg-white rounded-[2.5rem] overflow-hidden border border-stone-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> {place.location}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-stone-600 transition-colors leading-tight">{place.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-8">{place.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-stone-50">
                    <button 
                      onClick={() => navigate('/places')}
                      className="text-[10px] font-bold uppercase tracking-widest border-b border-stone-900 pb-1"
                    >
                      Read More
                    </button>
                    <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 transition-transform group-hover:rotate-45 group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- HIGH-IMPACT WEDDING SECTION --- */}
        <AnimatedSection className="mb-24">
          <div className="relative rounded-[4rem] overflow-hidden min-h-[650px] flex items-center bg-stone-900 group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
                alt="Jim Corbett Resorts Wedding"
                className="w-full h-full object-cover opacity-70 transition-transform duration-[10s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/40 to-transparent" />
            </div>
            
            <div className="relative z-10 px-12 md:px-24 max-w-4xl py-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-10">
                <Sparkle className="w-3 h-3 text-rose-300" /> Signature Celebrations
              </div>
              <h2 className="text-6xl md:text-[9rem] text-white font-serif mb-10 leading-[0.8] tracking-tighter">
                Wildly <br /> in <span className="italic text-rose-200">Love</span>
              </h2>
              <p className="text-white/80 text-xl md:text-2xl font-light mb-14 max-w-xl leading-relaxed">
                Experience the magic of an eternal union at the best Jim Corbett resorts, where the mountains are your witness.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => navigate('/weddings')}
                  className="px-12 py-6 bg-white text-stone-900 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-stone-100 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 group"
                >
                  Start Planning <Heart className="w-4 h-4 text-rose-500 fill-rose-500 group-hover:scale-125 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/weddings')}
                  className="px-12 py-6 bg-transparent border border-white/40 text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
                >
                  Main Wedding Page
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Us Section */}
        <div className="border-t border-stone-200 pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                  <img 
                    src="/images/Home2.png" 
                    alt="Jeep Safari in Jim Corbett" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square rounded-[3rem] bg-stone-900 p-12 text-white hidden md:flex flex-col justify-end shadow-2xl">
                  <Sparkles className="w-12 h-12 text-stone-400 mb-8" />
                  <h3 className="text-3xl font-serif mb-4 italic">"Nature is the ultimate luxury."</h3>
                  <p className="text-stone-400 text-sm font-light uppercase tracking-widest">Our Founding Philosophy</p>
                </div>
              </div>
            </AnimatedSection>

            <div className="space-y-12">
              <AnimatedSection>
                <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">The Lumina Distinction</span>
                <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">The Best Jungle Safari <br /> in Jim Corbett</h2>
                <p className="text-stone-500 text-lg leading-relaxed max-w-xl">
                  We don't just facilitate Jim Corbett safari booking; we architect legacies. Every Lumina expedition is a masterclass in balance.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Trophy, title: 'Award Winning', desc: 'Ranked #1 for bespoke Corbett expeditions and luxury Jim Corbett resorts.' },
                  { icon: UserCheck, title: 'Private Concierge', desc: 'A dedicated field specialist assigned to you for Jeep safari Jim Corbett.' },
                  { icon: HeartHandshake, title: 'Sustainability', desc: 'We reinvest 15% of profits into Jim Corbett National Park conservation.' },
                  { icon: Shield, title: 'Deep Access', desc: 'Exclusive early-entry permits to core zones like Dhikala and Bijrani.' }
                ].map((item, idx) => (
                  <AnimatedSection key={idx} delay={`${idx * 100}ms`}>
                    <div className="group p-8 rounded-3xl bg-white border border-stone-100 hover:border-stone-200 transition-all hover:shadow-xl">
                      <item.icon className="w-8 h-8 text-stone-900 mb-6 transition-transform group-hover:scale-110" />
                      <h4 className="text-lg font-serif mb-2">{item.title}</h4>
                      <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="border-t border-stone-200 pt-12 pb-6 overflow-hidden">
          <AnimatedSection className="text-center mb-10">
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">Guest Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">Whispers of <br /> the Wild</h2>
          </AnimatedSection>

          <div 
            className="relative flex overflow-hidden group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`flex gap-8 py-6 animate-scroll ${isPaused ? 'animate-scroll-paused' : ''}`}>
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 w-[400px] md:w-[500px] bg-white border border-stone-100 p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 relative group/card"
                >
                  <Quote className="absolute top-8 right-8 w-16 h-16 text-stone-50 opacity-10 group-hover/card:opacity-20 transition-opacity" />
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map(star => (Star && <Star key={star} className="w-3 h-3 fill-stone-900 text-stone-900" />))}
                  </div>
                  <p className="text-xl md:text-2xl font-serif text-stone-900 mb-10 leading-relaxed italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-between border-t border-stone-50 pt-8">
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-stone-50" />
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">{t.name}</h4>
                        <p className="text-stone-400 text-[10px] uppercase tracking-widest">{t.location}</p>
                      </div>
                    </div>
                    <div className="px-4 py-1.5 bg-stone-50 rounded-full text-[9px] font-bold uppercase tracking-widest text-stone-500">
                      {t.destination}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map-Based CTA Section */}
        <AnimatedSection className="mt-8 mb-6">
          <div className="relative rounded-[3rem] overflow-hidden bg-stone-900 h-[600px] md:h-[500px] group flex items-center justify-center shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1741168132924-419b48f58d9f?q=80&w=2940&auto=format&fit=crop" 
                alt="Jim Corbett National Park Safari Map"
                className="w-full h-full object-cover object-[center_35%] opacity-40 transition-transform duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-950/60 transition-colors duration-500 group-hover:bg-stone-950/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/40" />
            </div>

            <div className="relative z-10 text-center px-8 max-w-3xl">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-px bg-white/30" />
                <div className="mx-6 p-2 border border-white/20 rounded-full">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <div className="w-16 h-px bg-white/30" />
              </div>
              
              <h2 className="text-4xl md:text-6xl text-white font-serif mb-8 leading-[1.1]">
                Your Chart to the <br /> <span className="italic">Untamed Heart</span>
              </h2>
              
              <p className="text-white/70 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-2xl mx-auto">
                Discover the best jim corbett safari package and map your way to the tiger's core.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <button 
                  onClick={() => navigate('/contact')}>
                  className="px-10 py-5 bg-white text-stone-900 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-100 hover:scale-105 transition-all shadow-xl"
                
                  Start Your Expedition
                </button>
                <button 
                  onClick={() => navigate('/destinations')}
                  className="px-10 py-5 bg-transparent border border-white/30 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white transition-all flex items-center gap-3"
                >
                  Explore The Map <MapPin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Home;
