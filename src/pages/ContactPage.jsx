import { SectionHeader } from '@/ui/sections';
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="animate-fade-in pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Contact Us" subtitle="We're here to answer your questions and provide quotes." />
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-amber-400">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Call Us 24/7</p>
                    <p className="text-lg font-bold">+234 913 437 7218</p>
                    <p className="text-lg font-bold">+234 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email Us</p>
                    <p className="text-lg font-bold">info@atek-tech.com</p>
                    <p className="text-lg font-bold">support@atek-tech.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Visit Our Office</p>
                    <p className="text-lg font-bold">Federal Polytechnic </p>
                    <p className="text-lg">Ede, Osun State.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-gray-300 mb-4">Follow us on social media</p>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-amber-500 hover:text-blue-900 transition-colors"><Facebook size={20} /></a>
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-amber-500 hover:text-blue-900 transition-colors"><Twitter size={20} /></a>
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-amber-500 hover:text-blue-900 transition-colors"><Instagram size={20} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-header p-8 md:p-10 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-fore/90 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-fore/70 mb-2">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-fore/70 mb-2">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="+234..." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-fore/70 mb-2">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>CCTV Installation</option>
                  <option>Car Tracking</option>
                  <option>Solar Power System</option>
                  <option>Repairs</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-fore/70 mb-2">Message</label>
                <textarea rows="4" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  formStatus === 'sent' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-blue-900 text-white hover:bg-blue-800'
                }`}
              >
                {formStatus === 'idle' && 'Send Message'}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && 'Message Sent Successfully!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;