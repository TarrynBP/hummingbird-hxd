import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Check, Star, Lightbulb, Settings, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { useService, useTestimonials, useValues } from "@/hooks/useSanityData";
import LoadingSpinner from "@/components/LoadingSpinner";
import Testimonials from "@/components/sections/Testimonials";
import Values from "@/components/sections/Values";
import Process from "@/components/sections/Process";
import OtherServices from "@/components/sections/OtherServices";
import ServiceHero from "@/components/sections/ServiceHero";
import { fallbackServices } from "@/lib/fallbackServices";

const Service = () => {
  const { slug } = useParams<{ slug: string }>();
  const seoData = useSEO();
  const { data: service, isLoading, error } = useService(slug || "");

  // Use Sanity data when available; otherwise fall back to built-in copy for known
  // slugs (so /service/digital-integration and /service/ai-integration render even
  // before Studio documents exist).
  const resolvedService =
    service && !error ? service : fallbackServices[slug || ""] || null;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !resolvedService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-mint-teal hover:bg-mint-teal-dark text-white">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Icon mapping for different service types
  const getIcon = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      case "lightbulb":
        return Lightbulb;
      case "settings":
        return Settings;
      case "zap":
        return Zap;
      default:
        return Lightbulb;
    }
  };

  const Icon = getIcon(resolvedService.icon);

  return (
    <>
      <SEO seoData={seoData} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <ServiceHero />

        {/* Packages/Services Section */}
        {resolvedService.packages && resolvedService.packages.length > 0 ? (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                  {resolvedService.serviceType === "web-design"
                    ? "Complete Packages"
                    : "Our Services"}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {resolvedService.serviceType === "web-design"
                    ? "Choose a package that suits your stage of business. All options include design, build, and mobile optimisation."
                    : "From smooth-running systems to smart websites and practical AI tools, we offer down-to-earth support to help your business work better and shine online."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {resolvedService.packages.map((pkg: any, index: number) => (
                  <div key={index} className="flex flex-col h-full">
                    <Card
                      className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex-grow ${
                        pkg.popular ? "ring-2 ring-mint-teal scale-105" : ""
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-mint-teal text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                            <Star className="h-4 w-4 fill-current" />
                            Most Popular
                          </div>
                        </div>
                      )}

                      <CardHeader className="text-center pb-4">
                        {service.serviceType !== "web-design" && (
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto bg-mint-teal/10">
                            <Icon className="h-8 w-8 text-mint-teal" />
                          </div>
                        )}
                        <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                          {pkg.name}
                        </CardTitle>
                        <div className="text-3xl font-bold text-mint-teal mb-2">
                          {pkg.price}
                        </div>
                        <CardDescription className="text-gray-600">
                          {pkg.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-3 mb-8">
                          {pkg.servicesIncluded?.map(
                            (service: string, serviceIndex: number) => (
                              <li
                                key={serviceIndex}
                                className="flex items-start space-x-3"
                              >
                                <Check className="h-5 w-5 text-mint-teal flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{service}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </CardContent>
                    </Card>

                    <Link to={pkg.ctaLink || "/contact"} className="mt-4">
                      <Button className="w-full bg-mint-teal hover:bg-mint-teal-dark text-white">
                        {service.serviceType === "web-design"
                          ? "Start Your Project"
                          : "Get Started"}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          // Fallback for services without packages
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto bg-mint-teal/10">
                  <Icon className="h-8 w-8 text-mint-teal" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                  {resolvedService.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {resolvedService.description}
                </p>
                {resolvedService.price && (
                  <div className="text-3xl font-bold text-mint-teal mt-4">
                    {resolvedService.price}
                  </div>
                )}
              </div>

              {resolvedService.features && resolvedService.features.length > 0 && (
                <div className="max-w-4xl mx-auto">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                        What's Included
                      </h3>
                      <ul className="space-y-4">
                        {resolvedService.features.map(
                          (feature: string, index: number) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <Check className="h-5 w-5 text-mint-teal flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        <Testimonials />

        {/* Process Section */}
        <Process />

        {/* Other Services Section */}
        <OtherServices />
      </div>
    </>
  );
};

export default Service;
