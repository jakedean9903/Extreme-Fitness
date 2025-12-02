export interface ImageAsset {
  src: string;
  alt: string;
  category: 'cardio' | 'strength' | 'logo' | 'all';
  id: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
}

export interface FitnessClass {
  id: string;
  name: string;
  category: 'Cardio' | 'Strength' | 'HIIT' | 'Yoga';
  duration: string;
  intensity: 'Low' | 'Medium' | 'High';
  description: string;
  schedule: string[];
}
