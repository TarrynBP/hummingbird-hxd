import { client } from './sanity';

// Hero content queries
export const getHeroContent = async () => {
  const query = `*[_type == "hero"][0]`;
  return await client.fetch(query);
};

// Services queries
export const getServices = async () => {
  const query = `*[_type == "service"] | order(order asc)`;
  return await client.fetch(query);
};

// Testimonials queries
export const getTestimonials = async () => {
  const query = `*[_type == "testimonial"] | order(order asc)`;
  return await client.fetch(query);
};

// Portfolio queries
export const getPortfolioItems = async () => {
  const query = `*[_type == "portfolio"] | order(order asc)`;
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
    "services": *[_type == "service"] | order(order asc)
  }`;
  return await client.fetch(query);
};
