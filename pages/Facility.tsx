import React from 'react';
import { Check } from 'lucide-react';
import { IMAGES } from '../constants';

const Facility: React.FC = () => {
  return (
    <div className="w-full bg-neutral-bg">
      <div className="bg-dark-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Facility</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore 15,000 sq ft of premium fitness space designed for performance.
          </p>
        </div>
      </div>

      {/* Grid Tour */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
            <div className="h-64 overflow-hidden">
               <img src={IMAGES.machines.src} alt={IMAGES.machines.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-dark-blue mb-2">Machine Zone</h3>
              <p className="text-gray-600">
                Selectorized machines for every muscle group, ensuring safe and effective isolation movements.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
             <div className="h-64 overflow-hidden">
               <img src={IMAGES.freeWeights.src} alt={IMAGES.freeWeights.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-dark-blue mb-2">Free Weights</h3>
              <p className="text-gray-600">
                Dumbbells up to 120lbs, Olympic platforms, squat racks, and benches for serious lifters.
              </p>
            </div>
          </div>

           <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
             <div className="h-64 overflow-hidden">
               <img src={IMAGES.treadmills.src} alt={IMAGES.treadmills.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-dark-blue mb-2">Cardio Theater</h3>
              <p className="text-gray-600">
                Rows of treadmills, ellipticals, and stair climbers overlooking the city.
              </p>
            </div>
          </div>

           <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
             <div className="h-64 overflow-hidden">
               <img src={IMAGES.plates.src} alt={IMAGES.plates.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-dark-blue mb-2">Powerlifting</h3>
              <p className="text-gray-600">
                Competition-grade plates and bars for deadlifts, squats, and bench presses.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Amenities */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-dark-blue text-center mb-12">Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            {[
              "Private Showers & Changing Rooms",
              "Secure Digital Lockers",
              "Complimentary Towel Service",
              "Filtered Water Stations",
              "Free On-site Parking",
              "WiFi Access",
              "Smoothie Bar",
              "Physiotherapy Room"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-neutral-bg rounded-lg">
                <div className="bg-primary/10 p-1 rounded-full text-primary">
                  <Check size={18} strokeWidth={3} />
                </div>
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
