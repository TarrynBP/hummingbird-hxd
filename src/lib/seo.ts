// SEO utility functions and types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
}

export interface PageSEOConfig {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: string;
  structuredData?: any;
}

// Default SEO configuration
export const defaultSEO: SEOData = {
  title: "HummingBirdd | Human Experience Design",
  description: "HummingBirdd specializes in human experience design, creating user-centered solutions that enhance customer engagement and drive business growth through empathetic design thinking.",
  keywords: "human experience design, user experience design, UX design, human-centered design, design thinking, customer experience design, user-centered design, experience design agency, interaction design, service design, empathy-driven design, inclusive design, digital experience design",
  ogType: "website",
  twitterCard: "summary_large_image",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HummingBirdd Human Experience Design",
    "description": "HummingBirdd specializes in human experience design, creating user-centered solutions that enhance customer engagement and drive business growth through empathetic design thinking",
    "url": "https://hummingbird-hxd.com",
    "logo": "https://hummingbird-hxd.com/assets/logo-sl.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-72-608-5749",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kenilworth",
      "addressRegion": "Cape Town",
      "addressCountry": "South Africa"
    },
    "sameAs": [
      "https://www.linkedin.com/company/hummingbird-web-design",
      "https://twitter.com/hummingbird_hxd"
    ],
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Tarryn Pietersen"
    }
  }
};

// Generate SEO data for different pages
export const generatePageSEO = (config: PageSEOConfig): SEOData => {
  const baseUrl = "https://hummingbird-hxd.com";
  const fullPath = config.path ? `${baseUrl}${config.path}` : baseUrl;
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords || defaultSEO.keywords,
    canonical: fullPath,
    ogTitle: config.title,
    ogDescription: config.description,
    ogImage: config.image || `${baseUrl}/assets/og-default.jpg`,
    ogUrl: fullPath,
    ogType: config.type || "website",
    twitterCard: "summary_large_image",
    twitterTitle: config.title,
    twitterDescription: config.description,
    twitterImage: config.image || `${baseUrl}/assets/og-default.jpg`,
    structuredData: config.structuredData || defaultSEO.structuredData
  };
};

// Page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: "HummingBirdd | Human Experience Design",
    description: "HummingBirdd specializes in human experience design, creating user-centered solutions that enhance customer engagement and drive business growth through empathetic design thinking.",
    keywords: "human experience design, user experience design, UX design, human-centered design, design thinking, customer experience design, user-centered design, experience design agency, interaction design, service design, empathy-driven design, inclusive design, digital experience design",
    path: "/",
    type: "website"
  },
  about: {
    title: "About Us | HummingBirdd Human Experience Design",
    description: "Meet the passionate team behind HummingBirdd. We're human experience designers, thinkers, and problem-solvers who believe empathetic design has the power to transform how people feel and engage.",
    keywords: "about hummingbirdd, human experience design team, UX design experts, design agency team, human-centered design, design thinking experts, user experience specialists",
    path: "/about",
    type: "website"
  },
  services: {
    title: "Our Services | Human Experience Design Solutions",
    description: "From user research to digital experiences and service design, we offer comprehensive human experience design services with expert design thinking implementation.",
    keywords: "human experience design services, UX design consulting, user research, service design, interaction design, customer experience design, design thinking workshops, user-centered design solutions",
    path: "/services",
    type: "website"
  },
  contact: {
    title: "Contact Us | Get Your Free Human Experience Design Consultation",
    description: "Ready to transform your user experience? Contact HummingBirdd for a free consultation and discover how human-centered design can elevate your business.",
    keywords: "contact human experience design agency, free UX consultation, design thinking consultation, user experience design quote, human-centered design services",
    path: "/contact",
    type: "website"
  },
  caseStudy: (title: string, description: string, slug: string) => ({
    title: `${title} | Case Study | HummingBirdd`,
    description: description,
    keywords: "case study, human experience design project, UX design in action, design thinking process, user experience results, design case study",
    path: `/case-study/${slug}`,
    type: "article"
  }),
  blog: (title: string, description: string, slug: string) => ({
    title: `${title} | HummingBirdd Blog`,
    description: description,
    keywords: "human experience design blog, UX design insights, design thinking tips, user experience, business growth, design strategy",
    path: `/blog/${slug}`,
    type: "article"
  }),
  articles: {
    title: "Articles & Insights | HummingBirdd Human Experience Design",
    description: "Explore our latest insights on human experience design, UX strategy, and design thinking. Expert tips and case studies to help your business grow through better user experiences.",
    keywords: "human experience design articles, UX design blog, design thinking insights, user experience strategy tips, business growth through design",
    path: "/articles",
    type: "website"
  }
};

// Generate structured data for different content types
export const generateStructuredData = {
  organization: () => defaultSEO.structuredData,
  
  website: () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HummingBirdd Human Experience Design",
    "url": "https://hummingbird-hxd.com",
    "description": "HummingBirdd specializes in human experience design, creating user-centered solutions that enhance customer engagement and drive business growth through empathetic design thinking",
    "publisher": {
      "@type": "Organization",
      "name": "HummingBirdd Human Experience Design"
    }
  }),
  
  breadcrumb: (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://hummingbird-hxd.com${item.url}`
    }))
  }),
  
  service: (service: any) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "HummingBirdd Human Experience Design"
    },
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "USD"
    }
  }),
  
  article: (article: any) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": "HummingBirdd Human Experience Design"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HummingBirdd Human Experience Design",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hummingbird-hxd.com/assets/logo-sl.svg"
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate
  })
};
