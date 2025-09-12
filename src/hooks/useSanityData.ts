import { useQuery } from '@tanstack/react-query';
import {
  getHeroContent,
  getServices,
  getServicePackages,
  getTestimonials,
  getPortfolioItems,
  getCaseStudies,
  getCaseStudyBySlug,
  getValues,
  getTeamMembers,
  getAboutContent,
  getServicesPageContent,
  getSiteSettings,
} from '@/lib/sanityQueries';

// Hero content hook
export const useHeroContent = () => {
  return useQuery({
    queryKey: ['heroContent'],
    queryFn: getHeroContent,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Services hook (for home page)
export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000,
  });
};

// Service packages hook (for services page)
export const useServicePackages = () => {
  return useQuery({
    queryKey: ['servicePackages'],
    queryFn: getServicePackages,
    staleTime: 5 * 60 * 1000,
  });
};

// Testimonials hook
export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
    staleTime: 5 * 60 * 1000,
  });
};

// Portfolio hook
export const usePortfolioItems = () => {
  return useQuery({
    queryKey: ['portfolioItems'],
    queryFn: getPortfolioItems,
    staleTime: 5 * 60 * 1000,
  });
};

// Case studies hook
export const useCaseStudies = () => {
  return useQuery({
    queryKey: ['caseStudies'],
    queryFn: getCaseStudies,
    staleTime: 5 * 60 * 1000,
  });
};

// Single case study hook
export const useCaseStudy = (slug: string) => {
  return useQuery({
    queryKey: ['caseStudy', slug],
    queryFn: () => getCaseStudyBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
};

// Values hook
export const useValues = () => {
  return useQuery({
    queryKey: ['values'],
    queryFn: getValues,
    staleTime: 5 * 60 * 1000,
  });
};

// Team members hook
export const useTeamMembers = () => {
  return useQuery({
    queryKey: ['teamMembers'],
    queryFn: getTeamMembers,
    staleTime: 5 * 60 * 1000,
  });
};

// About page content hook
export const useAboutContent = () => {
  return useQuery({
    queryKey: ['aboutContent'],
    queryFn: getAboutContent,
    staleTime: 5 * 60 * 1000,
  });
};

// Services page content hook
export const useServicesPageContent = () => {
  return useQuery({
    queryKey: ['servicesPageContent'],
    queryFn: getServicesPageContent,
    staleTime: 5 * 60 * 1000,
  });
};

// Site settings hook
export const useSiteSettings = () => {
  return useQuery({
    queryKey: ['siteSettings'],
    queryFn: getSiteSettings,
    staleTime: 10 * 60 * 1000, // 10 minutes - site settings change less frequently
  });
};
