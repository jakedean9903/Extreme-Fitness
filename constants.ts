import { ImageAsset, Trainer, FitnessClass } from './types';

export const IMAGES: Record<string, ImageAsset> = {
  bikes: {
    id: 'img-bikes',
    src: 'https://raw.githubusercontent.com/jakedean9903/ExtremeFitnessImages/main/extremefitnessbikes.jpg',
    alt: 'Stationary Bikes',
    category: 'cardio'
  },
  freeWeights: {
    id: 'img-weights',
    src: 'https://raw.githubusercontent.com/jakedean9903/ExtremeFitnessImages/main/extremefitnessfreeweights.jpg',
    alt: 'Free Weights Area',
    category: 'strength'
  },
  logo: {
    id: 'img-logo',
    src: 'https://raw.githubusercontent.com/jakedean9903/ExtremeFitnessImages/main/extremefitnesslogo.jpg',
    alt: 'Extreme Fitness Logo',
    category: 'logo'
  },
  machines: {
    id: 'img-machines',
    src: 'https://raw.githubusercontent.com/jakedean9903/ExtremeFitnessImages/main/extremefitnessmachines.jpg',
    alt: 'Strength Machines',
    category: 'strength'
  },
  plates: {
    id: 'img-plates',
    src: 'https://raw.githubusercontent.com/jakedean9903/ExtremeFitnessImages/main/extremefitnessplates.jpg',
    alt: 'Weight Plates',
    category: 'strength'
  },
  treadmills: {
    id: 'img-treadmills',
    src: 'https://raw.githubusercontent.com/jakedean9903/ExtremeFitnessImages/main/extremefitnesstreadmills.jpg',
    alt: 'Treadmills',
    category: 'cardio'
  },
  ellipticals: {
    id: 'img-ellipticals',
    src: 'https://raw.githubusercontent.com/jakedean9903/ExtremeFitnessImages/main/extremefitnesstreadmillsandolypticals.jpg',
    alt: 'Cardio Section',
    category: 'cardio'
  }
};

export const GALLERY_IMAGES: ImageAsset[] = [
  IMAGES.bikes,
  IMAGES.freeWeights,
  IMAGES.machines,
  IMAGES.plates,
  IMAGES.treadmills,
  IMAGES.ellipticals
];

export const TRAINERS: Trainer[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Head Trainer',
    bio: 'Former Olympian with 10 years of coaching experience specializing in high-performance conditioning.',
    specialties: ['HIIT', 'Athletic Conditioning'],
    image: IMAGES.freeWeights.src // Using placeholder crop
  },
  {
    id: 't2',
    name: 'Mike Ross',
    role: 'Strength Coach',
    bio: 'Dedicated to helping you build raw power and perfect your form with heavy lifting.',
    specialties: ['Powerlifting', 'Bodybuilding'],
    image: IMAGES.machines.src // Using placeholder crop
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Wellness Guide',
    bio: 'Focuses on the mind-body connection to ensure recovery is as effective as the workout.',
    specialties: ['Yoga', 'Mobility'],
    image: IMAGES.ellipticals.src // Using placeholder crop
  }
];

export const CLASSES: FitnessClass[] = [
  {
    id: 'c1',
    name: 'Morning HIIT',
    category: 'HIIT',
    duration: '45 min',
    intensity: 'High',
    description: 'High intensity interval training to jumpstart your metabolism.',
    schedule: ['Mon 6:00 AM', 'Wed 6:00 AM', 'Fri 6:00 AM']
  },
  {
    id: 'c2',
    name: 'Power Lift',
    category: 'Strength',
    duration: '60 min',
    intensity: 'High',
    description: 'Focus on compound movements and progressive overload.',
    schedule: ['Tue 5:00 PM', 'Thu 5:00 PM']
  },
  {
    id: 'c3',
    name: 'Vinyasa Flow',
    category: 'Yoga',
    duration: '50 min',
    intensity: 'Low',
    description: 'A relaxing flow to improve flexibility and reduce stress.',
    schedule: ['Mon 7:00 PM', 'Wed 7:00 PM', 'Sat 10:00 AM']
  },
  {
    id: 'c4',
    name: 'Endurance Ride',
    category: 'Cardio',
    duration: '45 min',
    intensity: 'Medium',
    description: 'Rhythmic cycling class focused on stamina and heart health.',
    schedule: ['Tue 7:00 AM', 'Thu 7:00 AM']
  }
];
