
import { Destination, Place, BlogPost, TourPackage } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Dhikala Zone',
    country: 'Jim Corbett, India',
    image: '/images/Dhikalafront.JPG',
    description: 'The premium core zone for tiger sightings. Known for its vast grasslands (Chaurs) and the stunning Ramganga reservoir backdrop.',
    category: 'Adventure',
    priceRange: 'Premium'
  },
  {
    id: '4',
    name: 'Bijrani Zone',
    country: 'Jim Corbett, India',
    image: '/images/Brijranihome.JPG',
    description: 'Deep within the Sal forests, Bijrani is famous for its diverse flora and high density of tigers and elephants.',
    category: 'Adventure',
    priceRange: 'Premium'
  },
  {
    id: '5',
    name: 'Jhirna Zone',
    country: 'Jim Corbett, India',
    image: 'images/Jhirnahome.JPG',
    description: 'Open throughout the year, this zone is known for bird watching and frequent sloth bear sightings.',
    category: 'Adventure',
    priceRange: 'Standard'
  },
  {
    id: '6',
    name: 'Dhela Zone',
    country: 'Jim Corbett, India',
    image: '/images/Dhelahome.JPG',
    description: 'A popular eco-tourism zone known for its rich biodiversity and the iconic Dhela riverbed.',
    category: 'Adventure',
    priceRange: 'Standard'
  },
  {
    id: '7',
    name: 'Phanto Zone',
    country: 'Jim Corbett, India',
    image: '/images/Phantohome.JPG',
    description: 'The newest addition to Corbett safari zones, offering pristine landscapes and untouched jungle trails.',
    category: 'Adventure',
    priceRange: 'Standard'
  },
  {
    id: '8',
    name: 'Sitabani Zone',
    country: 'Jim Corbett, India',
    image: '/images/Sitavanihome.JPG',
    description: 'The buffer zone of the reserve, allowing for walking safaris and night tracking—a truly wild experience.',
    category: 'Adventure',
    priceRange: 'Standard'
  }
];

export const PLACES_TO_VISIT: Place[] = [
  {
    id: 'pl1',
    title: 'Girija Mata Temple',
    image: '/images/Garjiya.png',
    description: 'A sacred shrine located on a huge rock in the midst of the Kosi River, offering breathtaking views and spiritual peace.',
    location: 'Ramnagar, Uttarakhand'
  },
  {
    id: 'pl2',
    title: 'Shri Hanuman Dham',
    image: '/images/Hanumandham.png',
    description: 'A magnificent temple dedicated to Lord Hanuman, featuring an enormous statue and peaceful garden surroundings.',
    location: 'Ramnagar, Uttarakhand'
  },
  {
    id: 'pl3',
    title: 'Sitabani Temple',
    image: '/images/Sitavanitemple.png',
    description: 'Ancient temple steeped in mythology, located in the lush Sitabani forest buffer zone, popular for its historical significance.',
    location: 'Sitabani Zone'
  },
  {
    id: 'pl4',
    title: 'Corbett Museum',
    image: '/images/Corbettmuseum.png',
    description: 'The former home of legendary hunter Jim Corbett at Kaladhungi, now a museum housing his personal belongings and history.',
    location: 'Kaladhungi, Uttarakhand'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Silent Stripes: My Dhikala Diary',
    excerpt: 'The adrenaline of the first tiger call echoes through the Sal trees. A journey into India’s oldest park.',
    content: 'Corbett is not just a forest; it is a legacy. As our jeep entered the Dhikala gates, the air changed—cooler, sharper, filled with the scent of wild grass and anticipation...',
    author: 'Vikram Seth',
    date: 'March 12, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1616128417859-3a984dd35f02?auto=format&fit=crop&q=80&w=800',
    category: 'Destinations'
  }
];

// Fixed error in views/Packages.tsx: Added missing PACKAGES export
export const PACKAGES: TourPackage[] = [
  {
    id: 'pkg1',
    title: 'The Royal Bengal Safari',
    duration: '3 Days / 2 Nights',
    price: 850,
    image: 'https://images.unsplash.com/photo-1616128417859-3a984dd35f02?auto=format&fit=crop&q=80&w=800',
    highlights: ['Core Zone Jeep Safari', 'Luxury Riverfront Resort', 'Naturalist Guide']
  },
  {
    id: 'pkg2',
    title: 'Himalayan Foothills Expedition',
    duration: '5 Days / 4 Nights',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    highlights: ['Bird Watching in Binsar', 'Rishikesh Yoga Retreat', 'Peak View Villas']
  },
  {
    id: 'pkg3',
    title: 'Wilderness Photography Tour',
    duration: '4 Days / 3 Nights',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?auto=format&fit=crop&q=80&w=1200',
    highlights: ['Private Safari Vehicle', 'High-Res Tracking', 'Sunset Photography']
  }
];
