import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { generatePageSEO, pageSEOConfigs, type SEOData, type PageSEOConfig } from '@/lib/seo';

export const useSEO = (customConfig?: Partial<PageSEOConfig>): SEOData => {
  const location = useLocation();
  
  return useMemo(() => {
    // Get base config based on current route
    let baseConfig: PageSEOConfig;
    
    switch (location.pathname) {
      case '/':
        baseConfig = pageSEOConfigs.home;
        break;
      case '/about':
        baseConfig = pageSEOConfigs.about;
        break;
      case '/services':
        baseConfig = pageSEOConfigs.services;
        break;
      case '/contact':
        baseConfig = pageSEOConfigs.contact;
        break;
      case '/articles':
        baseConfig = pageSEOConfigs.articles;
        break;
      default:
        // For dynamic routes like /case-study/:id or /blog/:id
        if (location.pathname.startsWith('/case-study/')) {
          const slug = location.pathname.split('/').pop();
          baseConfig = {
            title: `Case Study | HummingBird Web Design`,
            description: "Explore our latest web design case study showcasing color psychology in action and measurable business results.",
            path: location.pathname,
            type: "article"
          };
        } else if (location.pathname.startsWith('/blog/')) {
          const slug = location.pathname.split('/').pop();
          baseConfig = {
            title: `Blog Post | HummingBird Design Insights`,
            description: "Read our latest insights on web design, color theory, and digital strategy to help your business grow.",
            path: location.pathname,
            type: "article"
          };
        } else {
          baseConfig = {
            title: "HummingBird | Color-Driven Web Design Agency",
            description: "Professional Wix website design agency specializing in color theory and emotionally resonant web experiences.",
            path: location.pathname
          };
        }
        break;
    }
    
    // Merge with custom config
    const finalConfig = { ...baseConfig, ...customConfig };
    
    return generatePageSEO(finalConfig);
  }, [location.pathname, customConfig]);
};

// Hook for case study specific SEO
export const useCaseStudySEO = (caseStudy: any): SEOData => {
  return useMemo(() => {
    if (!caseStudy) {
      return generatePageSEO(pageSEOConfigs.home);
    }
    
    const config = pageSEOConfigs.caseStudy(
      caseStudy.title,
      caseStudy.description,
      caseStudy.slug?.current || ''
    );
    
    return generatePageSEO({
      ...config,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": caseStudy.title,
        "description": caseStudy.description,
        "author": {
          "@type": "Organization",
          "name": "HummingBird Web Design Agency"
        },
        "publisher": {
          "@type": "Organization",
          "name": "HummingBird Web Design Agency",
          "logo": {
            "@type": "ImageObject",
            "url": "https://hummingbird-hxd.com/assets/logo-sl.svg"
          }
        },
        "datePublished": caseStudy._createdAt,
        "dateModified": caseStudy._updatedAt || caseStudy._createdAt,
        "image": caseStudy.image ? `https://hummingbird-hxd.com${caseStudy.image.asset.url}` : undefined
      }
    });
  }, [caseStudy]);
};

// Hook for blog post specific SEO
export const useBlogSEO = (blogPost: any): SEOData => {
  return useMemo(() => {
    if (!blogPost) {
      return generatePageSEO(pageSEOConfigs.articles);
    }
    
    const config = pageSEOConfigs.blog(
      blogPost.title,
      blogPost.excerpt || blogPost.description,
      blogPost.slug || ''
    );
    
    return generatePageSEO({
      ...config,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blogPost.title,
        "description": blogPost.excerpt || blogPost.description,
        "author": {
          "@type": "Organization",
          "name": "HummingBird Web Design Agency"
        },
        "publisher": {
          "@type": "Organization",
          "name": "HummingBird Web Design Agency",
          "logo": {
            "@type": "ImageObject",
            "url": "https://hummingbird-hxd.com/assets/logo-sl.svg"
          }
        },
        "datePublished": blogPost.date,
        "dateModified": blogPost.date,
        "wordCount": blogPost.wordCount || 0,
        "articleSection": blogPost.category || "Web Design"
      }
    });
  }, [blogPost]);
};
