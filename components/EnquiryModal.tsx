
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, initialDestination = '' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 max-h-[92vh] flex flex-col">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-6 sm:p-10 pb-0 sm:pb-0 z-20">
          <div>
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.3em] block mb-1">Enquire Now</span>
            <h2 className="text-2xl sm:text-3xl font-serif">Tailor Your Safari</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors bg-stone-50"
          >
            <X className="w-5 h-5 sm:w-6 h-6 text-stone-500" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 pt-6 sm:pt-8">
          <EnquiryForm 
            initialDestination={initialDestination} 
            onSuccess={() => setTimeout(onClose, 3000)}
          />
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
