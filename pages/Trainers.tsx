import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { TRAINERS } from '../constants';

const Trainers: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="bg-neutral-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-blue mb-4 text-center">Elite Trainers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
            Work with professionals who combine science, experience, and passion to help you succeed.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TRAINERS.map((trainer) => (
            <div key={trainer.id} className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-80 overflow-hidden bg-gray-200">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-dark-blue">{trainer.name}</h3>
                  <p className="text-primary font-medium text-lg">{trainer.role}</p>
                </div>
                
                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                  {trainer.bio}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((spec, idx) => (
                      <span key={idx} className="bg-neutral-bg text-dark-blue px-3 py-1 rounded-full text-xs font-bold">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className="w-full py-3 border-2 border-dark-blue text-dark-blue font-bold rounded-lg hover:bg-dark-blue hover:text-white transition-all text-center flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Book Session
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
