import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'hquuom5o',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
  token: import.meta.env.VITE_SANITY_TOKEN, // Optional, for write operations
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

// Types for our content
export interface HeroContent {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: any;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  company: string;
  content: string;
  avatar?: any;
  rating: number;
}

export interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  color: string;
  keyFeatures: string[];
  projectedResults: string[];
  image?: any;
  slug: {
    current: string;
  };
}

export interface Value {
  _id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  description: string;
  avatar?: any;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface CaseStudy {
  _id: string;
  title: string;
  description: string;
  category: string;
  color: string;
  keyFeatures: string[];
  projectedResults: string[];
  image?: any;
  slug: {
    current: string;
  };
  // Additional case study specific fields
  challenge: string;
  solution: string;
  process: string;
  results: string;
  metrics: {
    label: string;
    value: string;
  }[];
  colorPalette: {
    name: string;
    hex: string;
  }[];
  userResearch: string;
  designProcess: string;
}
