import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart } from 'lucide-react';
import { CLASSES } from '../constants';

const Classes: React.FC = () => {
  return (
    <div className="w-full bg-neutral-bg min-h-screen">
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-blue mb-6">Class Schedule</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            From high-intensity interval training to restorative yoga, we have a class that fits your style.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CLASSES.map((cls) => (
            <div key={cls.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between hover:border-primary/30 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-primary">
                    {cls.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock size={16} />
                    <span>{cls.duration}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-dark-blue mb-3">{cls.name}</h3>
                <p className="text-gray-600 mb-6">{cls.description}</p>
                
                <div className="space-y-3 mb-8">
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wide">Weekly Schedule</h4>
                  <div className="flex flex-wrap gap-2">
                    {cls.schedule.map((time, idx) => (
                      <span key={idx} className="bg-neutral-bg text-gray-700 px-3 py-1.5 rounded text-sm font-medium border border-gray-200">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm">
                   <BarChart size={16} className={cls.intensity === 'High' ? 'text-red-500' : 'text-yellow-500'} />
                   <span className="font-medium text-gray-700">{cls.intensity} Intensity</span>
                </div>
                <Link to="/contact" className="text-primary font-bold hover:text-dark-blue transition-colors text-sm">
                  Contact to Enroll
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-dark-blue rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Not sure where to start?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Drop by for a free consultation. We'll help you find the right classes for your fitness goals.
            </p>
            <Link to="/contact" className="bg-white text-dark-blue hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors inline-block">
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
