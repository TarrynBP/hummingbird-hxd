// TypeScript types for Sanity data

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

// Case Study Types
export interface CaseStudy {
  _id: string
  title: string
  slug: SanitySlug
  description: string
  mainImage: string
  category: string
  client: string
  duration: string
  team: string
  platforms: string
  overview: string
  problemStatement: string
  challenge: string
  solution: string
  features: string[]
  results: string
  colorPalette: ColorPalette[]
  userPersonas: UserPersona[]
  designProcess: DesignProcessStep[]
  lessonsLearned: string[]
  nextSteps: string[]
  clientFeedback: ClientFeedback
  services: Service[]
  body?: any[] // Portable Text
  publishedAt: string
}

export interface ColorPalette {
  color: string
  name: string
  psychology: string
  usage: string
}

export interface UserPersona {
  name: string
  age: string
  goals: string
  painPoints: string
  behavior: string
}

export interface DesignProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface ClientFeedback {
  quote: string
  author: string
  role: string
  details: string
}

// Article Types
export interface Article {
  _id: string
  title: string
  slug: SanitySlug
  description: string
  mainImage: string
  publishedAt: string
  author: string
  category: string
  tags: string[]
  body: any[] // Portable Text
}

// Site Settings Types
export interface SiteSettings {
  title: string
  description: string
  logo: string
  contactEmail: string
  contactPhone: string
  socialLinks: SocialLinks
}

export interface SocialLinks {
  twitter?: string
  linkedin?: string
  instagram?: string
  github?: string
}

// Service Types
export interface Service {
  _id: string
  title: string
  description: string
  icon: string
  color: string
  order: number
}

// Testimonial Types
export interface Testimonial {
  _id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  featured: boolean
}

// Team Member Types
export interface TeamMember {
  _id: string
  name: string
  role: string
  bio: string
  avatar: string
  socialLinks: TeamSocialLinks
  skills: string[]
  order: number
}

export interface TeamSocialLinks {
  linkedin?: string
  twitter?: string
  github?: string
  portfolio?: string
}

// Legacy types for backward compatibility
export interface Post {
  _id: string
  title: string
  slug: SanitySlug
  publishedAt: string
  body: any[] // Portable Text
  excerpt: string
  mainImage: SanityImage
  author: {
    name: string
  }
  categories: Category[]
}

export interface Category {
  title: string
  slug: SanitySlug
}
