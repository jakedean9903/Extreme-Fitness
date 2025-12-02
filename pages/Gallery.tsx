import React, { useState } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

type FilterType = 'all' | 'cardio' | 'strength';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const openLightbox = (src: string) => setSelectedImage(src);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="py-16 text-center bg-neutral-bg">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-blue mb-8">Gym Gallery</h1>
        
        {/* Filters */}
        <div className="flex justify-center gap-4">
          {(['all', 'cardio', 'strength'] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={clsx(
                "px-6 py-2 rounded-full font-bold capitalize transition-all",
                filter === f 
                  ? "bg-primary text-white shadow-md transform scale-105" 
                  : "bg-white text-gray-500 hover:bg-gray-100"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div 
              key={img.id}
              onClick={() => openLightbox(img.src)}
              className="cursor-pointer group relative rounded-lg overflow-hidden aspect-video bg-gray-100"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
