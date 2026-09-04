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
      case '/service/web-design':
      case '/service/productivity-services':
      case '/service/digital-integration':
      case '/service/ai-integration': {
        const slug = location.pathname.split('/').pop() || '';
        const titles: Record<string, { t: string; d: string }> = {
          'web-design': {
            t: 'Web Design | HummingBird',
            d: 'Custom, mobile-ready websites built around your brand and your customers.',
          },
          'productivity-services': {
            t: 'Productivity Services | HummingBird',
            d: 'Smarter ways of working, shaped around your customers and your goals.',
          },
          'digital-integration': {
            t: 'Digital Integration | HummingBird',
            d: 'Simple tools and smooth systems that take the friction out of how you work.',
          },
          'ai-integration': {
            t: 'AI Integration | HummingBird',
            d: 'Practical, no-hype AI that saves you time and helps you do more with less.',
          },
        };
        const meta = titles[slug] || {
          t: 'Services | HummingBird',
          d: 'Down-to-earth support to help your business work better and shine online.',
        };
        baseConfig = {
          title: meta.t,
          description: meta.d,
          path: location.pathname,
          type: 'website',
        };
        break;
      }
      default:
        // For dynamic routes like /case-study/:id or /blog/:id
        if (location.pathname.startsWith('/case-study/')) {
          const slug = location.pathname.split('/').pop();
          baseConfig = {
            title: `Case Study | HummingBird Web Design`,
            description: "Explore our latest web design case study showcasing colour psychology in action and measurable business results.",
            path: location.pathname,
            type: "article"
          };
        } else if (location.pathname.startsWith('/blog/')) {
          const slug = location.pathname.split('/').pop();
          baseConfig = {
            title: `Blog Post | HummingBird Design Insights`,
            description: "Read our latest insights on web design, colour theory, and digital strategy to help your business grow.",
            path: location.pathname,
            type: "article"
          };
        } else {
          baseConfig = {
            title: "HummingBird | Colour-Driven Web Design Agency",
            description: "Professional Wix website design agency specialising in colour theory and emotionally resonant web experiences.",
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
            "url": "https://hummingbirdhxd.com/assets/logo-sl.svg"
          }
        },
        "datePublished": caseStudy._createdAt,
        "dateModified": caseStudy._updatedAt || caseStudy._createdAt,
        "image": caseStudy.image ? `https://hummingbirdhxd.com${caseStudy.image.asset.url}` : undefined
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
            "url": "https://hummingbirdhxd.com/assets/logo-sl.svg"
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
