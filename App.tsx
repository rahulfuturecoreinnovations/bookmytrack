import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
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
import { BlogPost } from './types';

const App: React.FC = () => {
  const location = useLocation();

  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [prefilledDestination, setPrefilledDestination] = useState('');

  const openEnquiryModal = (destination: string = '') => {
    setPrefilledDestination(destination);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-stone-900 selection:text-stone-50">
      <ScrollToTop />
      <Navbar />

      <main
        key={location.pathname}
        className="flex-grow animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out"
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/destinations" element={<Destinations />} />
          <Route path="/weddings" element={<DestinationWedding />} />

          <Route path="/destinations/dhikala" element={<DhikalaPage />} />
          <Route path="/destinations/bijrani" element={<BijraniPage />} />
          <Route path="/destinations/jhirna" element={<JhirnaPage />} />
          <Route path="/destinations/dhela" element={<DhelaPage />} />
          <Route path="/destinations/phanto" element={<PhantoPage />} />
          <Route path="/destinations/sitabani" element={<SitabaniPage />} />

          <Route path="/places" element={<Places onEnquire={openEnquiryModal} />} />

          <Route path="/blog" element={<Blog onBlogClick={setSelectedBlog} />} />
          <Route
            path="/blog/:slug"
            element={
              selectedBlog ? (
                <BlogDetail post={selectedBlog} />
              ) : (
                <Blog onBlogClick={setSelectedBlog} />
              )
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact initialDestination={prefilledDestination} />} />
        </Routes>
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialDestination={prefilledDestination}
      />
    </div>
  );
};

export default App;
