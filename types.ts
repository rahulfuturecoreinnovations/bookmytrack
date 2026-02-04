
export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  category: 'Luxury' | 'Adventure' | 'Relaxation';
  priceRange: string;
}

export interface Place {
  id: string;
  title: string;
  image: string;
  description: string;
  location: string;
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: 'Travel Tips' | 'Destinations' | 'Budget Travel' | 'Luxury Travel';
}

export type View = 
  | 'home' 
  | 'destinations' 
  | 'dest-dhikala' 
  | 'dest-bijrani'
  | 'dest-jhirna'
  | 'dest-dhela'
  | 'dest-phanto'
  | 'dest-sitabani'
  | 'places' 
  | 'blog' 
  | 'blog-detail' 
  | 'about' 
  | 'contact'
  | 'wedding';
