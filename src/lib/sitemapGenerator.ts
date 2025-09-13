// Utility to generate dynamic sitemap from Sanity data
import { client } from './sanity';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = async (): Promise<string> => {
  const baseUrl = 'https://hummingbird-hxd.com';
  const currentDate = new Date().toISOString();
  
  // Static pages
  const staticPages: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/articles`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    }
  ];

  try {
    // Fetch dynamic content from Sanity
    const [caseStudies, blogPosts] = await Promise.all([
      client.fetch(`*[_type == "caseStudy"] { slug, _updatedAt }`),
      client.fetch(`*[_type == "post"] { slug, _updatedAt }`)
    ]);

    // Add case studies to sitemap
    const caseStudyPages: SitemapUrl[] = caseStudies.map((study: any) => ({
      loc: `${baseUrl}/case-study/${study.slug?.current || study._id}`,
      lastmod: study._updatedAt || currentDate,
      changefreq: 'monthly' as const,
      priority: 0.7
    }));

    // Add blog posts to sitemap
    const blogPages: SitemapUrl[] = blogPosts.map((post: any) => ({
      loc: `${baseUrl}/blog/${post.slug?.current || post._id}`,
      lastmod: post._updatedAt || currentDate,
      changefreq: 'monthly' as const,
      priority: 0.6
    }));

    // Combine all pages
    const allPages = [...staticPages, ...caseStudyPages, ...blogPages];

    // Generate XML
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemapXml;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return basic sitemap if Sanity fetch fails
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  }
};

// Function to save sitemap to public directory (for build process)
export const saveSitemap = async (): Promise<void> => {
  try {
    const sitemap = await generateSitemap();
    // This would typically be used in a build script
    // For now, we'll just log it
    console.log('Generated sitemap:', sitemap);
  } catch (error) {
    console.error('Error saving sitemap:', error);
  }
};
