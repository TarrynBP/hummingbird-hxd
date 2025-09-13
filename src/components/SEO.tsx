import { Helmet } from "react-helmet-async";
import { SEOData } from "@/lib/seo";

interface SEOProps {
  seoData: SEOData;
}

export const SEO: React.FC<SEOProps> = ({ seoData }) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      {seoData.keywords && <meta name="keywords" content={seoData.keywords} />}
      {seoData.canonical && <link rel="canonical" href={seoData.canonical} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoData.ogTitle || seoData.title} />
      <meta
        property="og:description"
        content={seoData.ogDescription || seoData.description}
      />
      <meta property="og:type" content={seoData.ogType || "website"} />
      {seoData.ogUrl && <meta property="og:url" content={seoData.ogUrl} />}
      {seoData.ogImage && (
        <meta property="og:image" content={seoData.ogImage} />
      )}
      <meta property="og:site_name" content="HummingBird Web Design Agency" />

      {/* Twitter Card Meta Tags */}
      <meta
        name="twitter:card"
        content={seoData.twitterCard || "summary_large_image"}
      />
      <meta
        name="twitter:title"
        content={seoData.twitterTitle || seoData.title}
      />
      <meta
        name="twitter:description"
        content={seoData.twitterDescription || seoData.description}
      />
      {seoData.twitterImage && (
        <meta name="twitter:image" content={seoData.twitterImage} />
      )}

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="HummingBird Web Design Agency" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured Data */}
      {seoData.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(seoData.structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
