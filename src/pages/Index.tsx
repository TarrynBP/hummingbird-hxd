
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Learning from "@/components/sections/Learning";
import CTA from "@/components/sections/CTA";
import Values from "@/components/sections/Values";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useSanityDocuments } from "../hooks/useSanity";
import { caseStudiesQuery } from "../lib/sanity-queries";
import { CaseStudy } from "../types/sanity";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { data: caseStudies, loading, error } = useSanityDocuments<CaseStudy>(caseStudiesQuery);
  const navigate = useNavigate();

  const handleCaseStudyClick = (slug: string) => {
    navigate(`/case-study/${slug}`);
  };

  const renderPortfolioSection = () => {
    if (loading) {
      return (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">
                Our Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We help small businesses work smarter and show up better online. From websites to workflows to AI tools, we make things simpler for you and smoother for your customers.
              </p>
            </div>
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2">Loading case studies...</span>
            </div>
          </div>
        </section>
      );
    }

    if (error) {
      return (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">
                Our Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We help small businesses work smarter and show up better online. From websites to workflows to AI tools, we make things simpler for you and smoother for your customers.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-md p-4 max-w-2xl mx-auto">
              <h3 className="text-red-800 font-medium">Error loading case studies</h3>
              <p className="text-red-600 mt-1">{error}</p>
            </div>
          </div>
        </section>
      );
    }

    if (!caseStudies || caseStudies.length === 0) {
      return (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">
                Our Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We help small businesses work smarter and show up better online. From websites to workflows to AI tools, we make things simpler for you and smoother for your customers.
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 max-w-2xl mx-auto">
              <h3 className="text-yellow-800 font-medium">No case studies found</h3>
              <p className="text-yellow-600 mt-1">No case studies found in Sanity. Please create some content.</p>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help small businesses work smarter and show up better online. From websites to workflows to AI tools, we make things simpler for you and smoother for your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((caseStudy) => (
              <Card 
                key={caseStudy._id} 
                className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer relative overflow-hidden"
                onClick={() => handleCaseStudyClick(caseStudy.slug.current)}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex-1">
                    {/* Header with category tag and color palette */}
                    <div className="flex justify-between items-start mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                        {caseStudy.category}
                      </span>
                                          <div className="flex space-x-2">
                      {caseStudy.colorPalette && caseStudy.colorPalette.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-200"
                          style={{ backgroundColor: color.color }}
                        />
                      ))}
                    </div>
                    </div>

                    {/* Project title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {caseStudy.title}
                    </h3>

                    {/* Project description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {caseStudy.description}
                    </p>

                    {/* Key Features */}
                    {caseStudy.features && caseStudy.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {caseStudy.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Results */}
                    {caseStudy.results && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {caseStudy.results}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Arrow icon - always at the bottom */}
                  <div className="flex justify-end mt-auto pt-4">
                    <ArrowRight className="h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                  </div>
                </CardContent>

                {/* Dynamic Color Bar at Bottom */}
                {caseStudy.colorPalette && caseStudy.colorPalette.length > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-2 flex">
                    {caseStudy.colorPalette.slice(0, 4).map((color, index) => (
                      <div
                        key={index}
                        className="flex-1 transition-all duration-300 hover:opacity-80"
                        style={{ 
                          backgroundColor: color.color,
                          opacity: 0.8
                        }}
                      />
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      {renderPortfolioSection()}
      <CTA />
      <Values />
      <Learning />
    </div>
  );
};

export default Index;
