
import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

interface ContactProps {
  initialDestination?: string;
}

const Contact: React.FC<ContactProps> = ({ initialDestination = '' }) => {
  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Start Your <br /> Safari Story</h1>
            <p className="text-stone-500 text-lg leading-relaxed mb-12">
              Ready to witness the stripes of Corbett or the tranquility of the Himalayas? Our travel specialists are standing by to plan your luxury escape.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-stone-900" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Our Studio</h4>
                  <p className="text-stone-500 text-sm">Main Road, Ramnagar<br />Nainital, Uttarakhand 244715</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-stone-900" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Email Us</h4>
                  <p className="text-stone-500 text-sm">expeditions@lumina-corbett.com<br />concierge@lumina.travel</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl shadow-stone-200/50 border border-stone-50 relative overflow-hidden">
            <EnquiryForm initialDestination={initialDestination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
