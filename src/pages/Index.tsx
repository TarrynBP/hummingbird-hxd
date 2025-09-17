import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Portfolio from "@/components/sections/Portfolio";
import CTA from "@/components/sections/CTA";
import Values from "@/components/sections/Values";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { useScrollToElement } from "@/hooks/useScrollToElement";

const Index = () => {
  const seoData = useSEO();
  useScrollToElement(); // Handle hash navigation

  return (
    <>
      <SEO seoData={seoData} />
      <div className="min-h-screen">
        <Hero />
        <Services />
        <Testimonials />
        <Portfolio />
        <CTA />
        <Values />
      </div>
    </>
  );
};

export default Index;
