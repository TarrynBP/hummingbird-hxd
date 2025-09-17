import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { usePortfolioItems } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const { data: portfolioItems, isLoading, error } = usePortfolioItems();

  // Use Sanity data directly
  const portfolioData = portfolioItems;

  return (
    <section className="py-32 bg-white" id="portfolio">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help small businesses work smarter and show up better online.
            From websites to workflows to AI tools, we make things simpler for
            you and smoother for your customers.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="border-0 bg-white h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="animate-pulse">
                    {/* Top Section */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="h-8 bg-gray-200 rounded mb-3"></div>

                    {/* Description */}
                    <div className="space-y-2 mb-6 flex-grow">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <div className="h-5 bg-gray-200 rounded w-24 mb-3"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                      </div>
                    </div>

                    {/* Projected Results */}
                    <div className="mb-6">
                      <div className="h-5 bg-gray-200 rounded w-32 mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-end">
                      <div className="w-5 h-5 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error || !portfolioData || portfolioData.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Portfolio items not found
            </h3>
            <p className="text-gray-600">
              Please add portfolio items in your Sanity Studio.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioData.map((item, index) => (
              <Link
                key={index}
                to={`/case-study/${item.slug?.current || item._id}`}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white cursor-pointer h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Top Section with Tag and Navigation Dots */}
                    <div className="flex justify-between items-start mb-4">
                      {/* Category Tag */}
                      <div className="px-3 py-1 bg-soft-mauve-light border border-soft-mauve rounded-full">
                        <span className="text-sm font-medium text-soft-mauve">
                          {item.category || "Project"}
                        </span>
                      </div>

                      {/* Navigation Dots - using color palette */}
                      <div className="flex space-x-1">
                        {item.colorPalette && item.colorPalette.length > 0 ? (
                          item.colorPalette
                            .slice(0, 4)
                            .map((color, colorIndex) => (
                              <div
                                key={colorIndex}
                                className="w-2 h-2 rounded-full"
                                style={{
                                  backgroundColor:
                                    color.color || color.hex || "#10B981",
                                }}
                              ></div>
                            ))
                        ) : (
                          // Fallback colors if no color palette
                          <>
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Main Title */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight break-words">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed break-words">
                      {item.description}
                    </p>

                    {/* Key Features Section */}
                    <div className="mb-6">
                      <h4 className="text-sm md:text-base font-bold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {(item.features || item.keyFeatures || [])
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 bg-mint-teal"></span>
                              <span className="text-xs md:text-sm text-gray-600 break-words">
                                {feature}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Projected Results Section */}
                    <div className="mb-6">
                      <h4 className="text-sm md:text-base font-bold text-gray-900 mb-3">
                        Projected Results:
                      </h4>
                      <p className="text-xs md:text-sm text-mint-teal break-words">
                        {item.projectedResults &&
                        item.projectedResults.length > 0
                          ? item.projectedResults
                              .slice(0, 4)
                              .map((result, index) =>
                                typeof result === "string"
                                  ? result
                                  : result.description || result.metric
                              )
                              .join(", ")
                          : item.measurableImpact &&
                            item.measurableImpact.length > 0
                          ? item.measurableImpact
                              .slice(0, 4)
                              .map(
                                (metric, index) =>
                                  `${metric.percentage || "+25%"} ${
                                    metric.title || "improvement"
                                  }`
                              )
                              .join(", ")
                          : "+25% clarity, +25% upgrades, -35% drop-offs, +28% mobile completion"}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex justify-end mt-auto">
                      <ArrowRight className="w-5 h-5 text-mint-teal" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
