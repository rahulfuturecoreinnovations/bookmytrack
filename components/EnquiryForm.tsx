
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Calendar, Phone, User, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import { DESTINATIONS } from '../constants';

interface EnquiryFormProps {
  initialDestination?: string;
  onSuccess?: () => void;
  variant?: 'light' | 'dark';
  themeColor?: 'stone' | 'orange' | 'emerald' | 'cyan' | 'rose' | 'black';
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ 
  initialDestination = '', 
  onSuccess,
  variant = 'light',
  themeColor = 'stone'
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: initialDestination,
    date: '',
    message: ''
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, destination: initialDestination }));
  }, [initialDestination]);

  const colorMap = {
    stone: { ring: 'focus:ring-stone-200', icon: 'text-stone-300', btn: 'bg-stone-900', hover: 'hover:bg-stone-800', check: 'bg-stone-900' },
    orange: { ring: 'focus:ring-orange-200', icon: 'text-orange-300', btn: 'bg-orange-600', hover: 'hover:bg-orange-700', check: 'bg-orange-600' },
    emerald: { ring: 'focus:ring-emerald-200', icon: 'text-emerald-300', btn: 'bg-emerald-700', hover: 'hover:bg-emerald-800', check: 'bg-emerald-700' },
    cyan: { ring: 'focus:ring-cyan-200', icon: 'text-cyan-300', btn: 'bg-cyan-700', hover: 'hover:bg-cyan-800', check: 'bg-cyan-700' },
    rose: { ring: 'focus:ring-rose-200', icon: 'text-rose-300', btn: 'bg-stone-900', hover: 'hover:bg-black', check: 'bg-rose-500' },
    black: { ring: 'focus:ring-stone-400', icon: 'text-stone-500', btn: 'bg-stone-900', hover: 'hover:bg-black', check: 'bg-stone-900' }
  };

  const theme = colorMap[themeColor] || colorMap.stone;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/mjgopgko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to send enquiry. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = variant === 'light' 
    ? `w-full bg-stone-50 border-none rounded-xl sm:rounded-2xl py-3 sm:py-4 px-5 sm:px-6 text-stone-900 text-sm sm:text-base outline-none focus:ring-2 transition-all placeholder:text-stone-300 ${theme.ring}`
    : `w-full bg-white/10 border border-white/10 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-5 sm:px-6 text-white text-sm sm:text-base outline-none focus:ring-2 transition-all placeholder:text-white/20 focus:ring-white/20`;

  const labelClasses = variant === 'light'
    ? "text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1 mb-1.5 block"
    : "text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/50 ml-1 mb-1.5 block";

  if (submitted) {
    return (
      <div className="py-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
        <div className={`w-16 h-16 sm:w-20 h-20 rounded-full flex items-center justify-center mb-6 sm:mb-8 text-white ${theme.check}`}>
          <CheckCircle2 className="w-8 h-8 sm:w-10 h-10" />
        </div>
        <h3 className={`text-2xl sm:text-3xl font-serif mb-4 ${variant === 'light' ? 'text-stone-900' : 'text-white'}`}>Enquiry Sent</h3>
        <p className={`text-sm sm:text-base max-w-xs mx-auto ${variant === 'light' ? 'text-stone-500' : 'text-white/60'}`}>
          Our {formData.destination || 'specialist'} will contact you on {formData.phone} shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {error && (
        <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-2xl text-sm animate-in fade-in slide-in-from-top-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-1">
          <label className={labelClasses}>Full Name *</label>
          <div className="relative">
            <User className={`absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-4 h-4 ${variant === 'light' ? theme.icon : 'text-white/20'}`} />
            <input 
              required 
              type="text" 
              name="name"
              placeholder="Your Full Name"
              className={`${inputClasses} pl-12 sm:pl-14`}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className={labelClasses}>Mobile Number *</label>
          <div className="relative">
            <Phone className={`absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-4 h-4 ${variant === 'light' ? theme.icon : 'text-white/20'}`} />
            <input 
              required 
              type="tel" 
              name="phone"
              placeholder="+1 234 567 890"
              className={`${inputClasses} pl-12 sm:pl-14`}
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-1">
          <label className={labelClasses}>Email Address *</label>
          <div className="relative">
            <Mail className={`absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-4 h-4 ${variant === 'light' ? theme.icon : 'text-white/20'}`} />
            <input 
              required 
              type="email" 
              name="email"
              placeholder="name@email.com"
              className={`${inputClasses} pl-12 sm:pl-14`}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className={labelClasses}>Travel Date *</label>
          <div className="relative">
            <Calendar className={`absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-4 h-4 ${variant === 'light' ? theme.icon : 'text-white/20'}`} />
            <input 
              required 
              type="date" 
              name="date"
              className={`${inputClasses} pl-12 sm:pl-14 min-h-[48px]`}
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <label className={labelClasses}>Destination/Service</label>
        <select 
          name="destination"
          className={`${inputClasses} cursor-pointer`}
          value={formData.destination}
          onChange={(e) => setFormData({...formData, destination: e.target.value})}
        >
          <option value="">Select Option</option>
          <option value="Dhikala Zone Safari">Dhikala Zone Safari</option>
          <option value="Bijrani Zone Safari">Bijrani Zone Safari</option>
          <option value="Jhirna Zone Safari">Jhirna Zone Safari</option>
          <option value="Dhela Zone Safari">Dhela Zone Safari</option>
          <option value="Phanto Zone Safari">Phanto Zone Safari</option>
          <option value="Sitabani Zone Safari">Sitabani Zone Safari</option>
          <option value="Girija Mata Temple">Girija Mata Temple</option>
          <option value="Shri Hanuman Dham">Shri Hanuman Dham</option>
          <option value="Sitabani Temple">Sitabani Temple</option>
          <option value="Corbett Museum">Corbett Museum</option>
          <option value="Full Day Local Tour">Full Day Local Tour</option>
          <option value="Destination Wedding">Destination Wedding</option>
          <option value="Luxury Package">Luxury Package</option>
        </select>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full py-4 sm:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all flex items-center justify-center gap-3 shadow-xl ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        } ${
          variant === 'light' 
            ? `${theme.btn} text-white ${theme.hover}` 
            : 'bg-white text-stone-900 hover:bg-stone-100'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Confirm Expedition Request'} <Send className="w-3.5 h-3.5" />
      </button>
    </form>
  );
};

export default EnquiryForm;
