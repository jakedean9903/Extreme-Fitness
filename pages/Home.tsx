import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Dumbbell, MapPin, CheckCircle } from 'lucide-react';
import { IMAGES, CLASSES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-dark-blue">
          <img 
            src={IMAGES.ellipticals.src} 
            alt={IMAGES.ellipticals.alt} 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 via-dark-blue/40 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              BUILD YOUR <br />
              <span className="text-primary-light">BEST SELF</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              Join Extreme Fitness today. State-of-the-art equipment, expert trainers, and a supportive community to help you reach your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/classes" 
                className="btn-primary font-bold py-4 px-8 rounded-lg transition-colors text-center shadow-lg shadow-primary/30"
              >
                View Classes
              </Link>
              <Link 
                to="/facility" 
                className="btn-outline font-bold py-4 px-8 rounded-lg transition-all text-center"
              >
                Tour Facility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Replaces Stats Section */}
      <section id="why-us" className="py-20 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-blue mb-4">Why Choose Extreme Fitness</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We are dedicated to providing the best environment for your fitness journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-bg rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Dumbbell size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Modern Equipment</h3>
              <p className="text-gray-600">Access to premium Hammer Strength machines and Rogue free weights.</p>
            </div>

            <div className="bg-neutral-bg rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Expert Coaching</h3>
              <p className="text-gray-600">Certified trainers available to guide your form and programming.</p>
            </div>

            <div className="bg-neutral-bg rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">Convenient Location</h3>
              <p className="text-gray-600">Easily accessible in Walkertown with ample free parking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-20 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-blue mb-4">Featured Classes</h2>
              <p className="text-gray-600 max-w-md">Find the perfect workout for your schedule and fitness level.</p>
            </div>
            <Link to="/classes" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              See All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLASSES.slice(0, 3).map((cls) => (
              <div key={cls.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-dark-blue mb-2">{cls.name}</h3>
                <p className="text-gray-500 mb-4">{cls.description}</p>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-400">{cls.duration}</span>
                  <span className="text-primary">{cls.intensity} Intensity</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/classes" className="inline-flex items-center gap-2 text-primary font-bold">
               See All Classes <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      {/* Trainers Preview Removed */}

      {/* CTA */}
      <section className="py-20 bg-dark-blue relative overflow-hidden">
        <div className="absolute inset-0">
           <img src={IMAGES.freeWeights.src} className="w-full h-full object-cover opacity-10 mix-blend-overlay" alt="" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us today to schedule a tour or sign up for your first class. No commitments, just results.
          </p>
          <Link 
            to="/contact" 
            className="inline-block btn-primary font-bold py-4 px-10 rounded-lg transition-transform hover:-translate-y-1 shadow-lg shadow-primary/30"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;