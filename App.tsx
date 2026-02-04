
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Destinations from './views/Destinations';
import Places from './views/Places';
import Blog from './views/Blog';
import BlogDetail from './views/BlogDetail';
import About from './views/About';
import Contact from './views/Contact';
import DestinationWedding from './views/DestinationWedding';
import DhikalaPage from './views/destinations/DhikalaPage';
import BijraniPage from './views/destinations/BijraniPage';
import JhirnaPage from './views/destinations/JhirnaPage';
import DhelaPage from './views/destinations/DhelaPage';
import PhantoPage from './views/destinations/PhantoPage';
import SitabaniPage from './views/destinations/SitabaniPage';
import EnquiryModal from './components/EnquiryModal';
import { View, BlogPost, Destination } from './types';

const App: React.FC = () => {
  const [currentView, setView] = useState<View>('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [prefilledDestination, setPrefilledDestination] = useState('');

  const navigateTo = (view: View, context?: string) => {
    if (context) setPrefilledDestination(context);
    else if (view !== 'contact' && !isEnquiryModalOpen) setPrefilledDestination('');
    
    setView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigateToBlog = (blog: BlogPost) => {
    setSelectedBlog(blog);
    navigateTo('blog-detail');
  };

  const handleExploreWildlife = (dest: Destination) => {
    if (dest.id === '1') navigateTo('dest-dhikala');
    else if (dest.id === '4') navigateTo('dest-bijrani');
    else if (dest.id === '5') navigateTo('dest-jhirna');
    else if (dest.id === '6') navigateTo('dest-dhela');
    else if (dest.id === '7') navigateTo('dest-phanto');
    else if (dest.id === '8') navigateTo('dest-sitabani');
    else navigateTo('dest-dhikala'); 
  };

  const openEnquiryModal = (destination: string = '') => {
    setPrefilledDestination(destination);
    setIsEnquiryModalOpen(true);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home setView={navigateTo} onBlogClick={handleNavigateToBlog} onDestinationClick={handleExploreWildlife} />;
      case 'destinations': return <Destinations onExploreDetail={handleExploreWildlife} />;
      case 'wedding': return <DestinationWedding setView={navigateTo} />;
      case 'dest-dhikala': return <DhikalaPage setView={navigateTo} />;
      case 'dest-bijrani': return <BijraniPage setView={navigateTo} />;
      case 'dest-jhirna': return <JhirnaPage setView={navigateTo} />;
      case 'dest-dhela': return <DhelaPage setView={navigateTo} />;
      case 'dest-phanto': return <PhantoPage setView={navigateTo} />;
      case 'dest-sitabani': return <SitabaniPage setView={navigateTo} />;
      case 'places': return <Places onEnquire={openEnquiryModal} />;
      case 'blog': return <Blog onBlogClick={handleNavigateToBlog} />;
      case 'blog-detail': return selectedBlog ? <BlogDetail post={selectedBlog} setView={navigateTo} /> : <Blog onBlogClick={handleNavigateToBlog} />;
      case 'about': return <About />;
      case 'contact': return <Contact initialDestination={prefilledDestination} />;
      default: return <Home setView={navigateTo} onBlogClick={handleNavigateToBlog} onDestinationClick={handleExploreWildlife} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-stone-900 selection:text-stone-50">
      <Navbar currentView={currentView} setView={navigateTo} />
      <main 
        key={currentView} 
        className="flex-grow animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out"
      >
        {renderView()}
      </main>
      <Footer setView={navigateTo} />
      
      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)} 
        initialDestination={prefilledDestination}
      />
    </div>
  );
};

export default App;
