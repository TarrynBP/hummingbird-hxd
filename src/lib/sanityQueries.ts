import { client } from './sanity';

// Hero content queries - using actual hero documents
export const getHeroContent = async () => {
  const query = `*[_type == "hero"][0] {
    _id,
    title,
    subtitle,
    description
  }`;
  return await client.fetch(query);
};

// Services queries (for home page)
export const getServices = async () => {
  const query = `*[_type == "service"] | order(order asc)`;
  return await client.fetch(query);
};

// Get all services for navigation
export const getAllServices = async () => {
  const query = `*[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    serviceType,
    order
  }`;
  return await client.fetch(query);
};

// Get service by slug with its packages
export const getServiceBySlug = async (slug: string) => {
  const query = `*[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    heroTitle,
    heroSubtitle,
    heroDescription,
    icon,
    features,
    price,
    serviceType,
    ctaTitle,
    ctaDescription,
    "packages": *[_type == "servicePackage" && references(^._id)] | order(order asc) {
      _id,
      name,
      price,
      description,
      servicesIncluded,
      popular,
      ctaLink,
      order
    }
  }`;
  return await client.fetch(query, { slug });
};

// Service packages queries (for services page)
export const getServicePackages = async () => {
  const query = `*[_type == "servicePackage"] | order(order asc)`;
  return await client.fetch(query);
};

// Get service package by slug
export const getServicePackageBySlug = async (slug: string) => {
  const query = `*[_type == "servicePackage" && slug.current == $slug][0] {
    _id,
    name,
    price,
    description,
    servicesIncluded,
    popular,
    ctaLink,
    order,
    service-> {
      _id,
      title,
      slug,
      serviceType
    }
  }`;
  return await client.fetch(query, { slug });
};

// Testimonials queries - using actual testimonial documents
export const getTestimonials = async () => {
  const query = `*[_type == "testimonial"] | order(_createdAt desc)`;
  return await client.fetch(query);
};

// Portfolio queries - using caseStudy but only fetching fields needed for portfolio preview
export const getPortfolioItems = async () => {
  const query = `*[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    description,
    category,
    features,
    keyFeatures,
    projectedResults,
    measurableImpact,
    colorPalette,
    slug
  }`;
  return await client.fetch(query);
};

// Case study queries
export const getCaseStudies = async () => {
  const query = `*[_type == "caseStudy"]`;
  return await client.fetch(query);
};

export const getCaseStudyBySlug = async (slug: string) => {
  const query = `*[_type == "caseStudy" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
};

// Values queries
export const getValues = async () => {
  const query = `*[_type == "value"] | order(order asc)`;
  return await client.fetch(query);
};

// Team members queries
export const getTeamMembers = async () => {
  const query = `*[_type == "teamMember"] | order(order asc)`;
  return await client.fetch(query);
};

// About page content queries
export const getAboutContent = async () => {
  const query = `{
    "hero": *[_type == "hero" && _id == "about-hero"][0],
    "values": *[_type == "value"] | order(order asc),
    "team": *[_type == "teamMember"] | order(order asc)
  }`;
  return await client.fetch(query);
};

// Services page content queries
export const getServicesPageContent = async () => {
  const query = `{
    "hero": *[_type == "hero" && _id == "services-hero"][0],
    "servicePackages": *[_type == "servicePackage"] | order(order asc)
  }`;
  return await client.fetch(query);
};

// Site settings queries
export const getSiteSettings = async () => {
  const query = `*[_type == "siteSettings"][0]`;
  return await client.fetch(query);
};
