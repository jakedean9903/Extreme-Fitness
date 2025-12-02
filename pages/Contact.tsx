import React, { FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! In a real app, this would send an email.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="w-full bg-neutral-bg">
      <div className="bg-dark-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Have questions about memberships, classes, or personal training? We're here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          {/* Info Side */}
          <div className="bg-primary text-white p-10 md:p-14">
            <h2 className="text-2xl font-bold mb-8 font-display">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-blue-100">5088 Harley Dr<br/>Walkertown, NC 27051</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-blue-100"><a href="tel:+13365951744" className="hover:text-white">(336) 595-1744</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-blue-100"><a href="mailto:info@extremefitness.com" className="hover:text-white">info@extremefitness.com</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Hours</h3>
                  <p className="text-blue-100 text-sm">
                    Mon - Fri: 5:00 AM - 11:00 PM<br/>
                    Sat: 7:00 AM - 9:00 PM<br/>
                    Sun: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:p-14 bg-white">
            <h2 className="text-2xl font-bold text-dark-blue mb-6 font-display">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Membership</option>
                  <option>Personal Training</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full btn-primary font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Map Embed */}
        <div className="mt-12 bg-white p-2 rounded-lg shadow-md h-80">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.782078699411!2d-80.1764359238386!3d36.14739997243977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853b0c268019b85%3A0xe542718870195a63!2s5088%20Harley%20Dr%2C%20Walkertown%2C%20NC%2027051!5e0!3m2!1sen!2sus!4v1710500000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '0.5rem' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Gym Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;