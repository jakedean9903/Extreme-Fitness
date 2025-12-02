import React from 'react';
import { Target, Heart, Zap } from 'lucide-react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-neutral-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-blue mb-6">About Extreme Fitness</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            More than just a gym. We are a community dedicated to physical excellence, mental toughness, and holistic well-being.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={IMAGES.machines.src} 
              alt="Gym Interior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-dark-blue mb-6">Our Philosophy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2010, Extreme Fitness started with a simple belief: everyone deserves access to professional-grade equipment and expert guidance, regardless of their starting point.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We don't believe in shortcuts. We believe in sweat, consistency, and science-backed training methods. Our facility is designed to cater to everyone from powerlifters to cardio enthusiasts.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg text-primary mt-1">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark-blue">Goal Oriented</h3>
                  <p className="text-sm text-gray-500">Structured programs designed to hit specific milestones.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg text-primary mt-1">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark-blue">Community Focused</h3>
                  <p className="text-sm text-gray-500">A supportive environment where egos are left at the door.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg text-primary mt-1">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark-blue">High Energy</h3>
                  <p className="text-sm text-gray-500">Atmosphere designed to keep you motivated and moving.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History/Timeline */}
      <div className="bg-neutral-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-center text-dark-blue mb-12">Our Journey</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            
            {/* Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">2010</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-dark-blue mb-1">The Beginning</h3>
                <p className="text-sm text-gray-500">Opened our doors in a small garage with just basic free weights.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">2015</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-dark-blue mb-1">Expansion</h3>
                <p className="text-sm text-gray-500">Moved to our current location and added the cardio theater.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">2023</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-dark-blue mb-1">Modernization</h3>
                <p className="text-sm text-gray-500">Full renovation with state-of-the-art smart equipment and new recovery zone.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
