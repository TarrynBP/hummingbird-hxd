import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useServicePackages } from "@/hooks/useSanityData";
import * as LucideIcons from "lucide-react";

const Services = () => {
  const { data: servicePackages, isLoading, error } = useServicePackages();

  // Helper function to get icon component
  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent || LucideIcons.Monitor;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mint-mauve opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From smooth-running systems to smart websites and practical AI
            tools, we offer down-to-earth support to help your business work
            better and shine online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="animate-pulse">
                      <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-4"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                      <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="animate-pulse space-y-3 mb-6">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="h-5 w-5 bg-gray-200 rounded"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>
                      ))}
                    </div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error || !servicePackages || servicePackages.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Service packages not found
              </h3>
              <p className="text-gray-600">
                Please add service packages in your Sanity Studio.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicePackages.map((servicePackage, index) => {
                const Icon = getIconComponent(servicePackage.icon);
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardHeader className="pb-4">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                          servicePackage.color === "mint-teal"
                            ? "bg-mint-teal/10"
                            : servicePackage.color === "soft-mauve"
                            ? "bg-soft-mauve/10"
                            : "bg-creamy-apricot/10"
                        }`}
                      >
                        <Icon
                          className={`h-8 w-8 ${
                            servicePackage.color === "mint-teal"
                              ? "text-mint-teal"
                              : servicePackage.color === "soft-mauve"
                              ? "text-soft-mauve"
                              : servicePackage.color === "creamy-apricot"
                              ? "text-yellow-600"
                              : "text-mint-teal"
                          }`}
                        />
                      </div>
                      <CardTitle className="text-2xl font-serif font-semibold">
                        {servicePackage.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {servicePackage.description}
                      </CardDescription>
                      <div className="text-2xl font-bold text-mint-teal mt-2">
                        {servicePackage.price}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {servicePackage.features.map(
                          (feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center space-x-3"
                            >
                              <Check className="h-5 w-5 text-mint-teal flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          )
                        )}
                      </ul>
                      <Button className="w-full bg-mint-teal hover:bg-mint-teal-dark text-white group">
                        {servicePackage.ctaText || "Start Your Project"} →
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures every project delivers
              exceptional results through strategic colour implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your brand, audience, and goals through detailed consultation.",
                color: "mint-teal",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Developing colour psychology insights and strategic recommendations.",
                color: "soft-mauve",
              },
              {
                step: "03",
                title: "Design",
                description:
                  "Creating beautiful, functional designs that implement our colour strategy.",
                color: "creamy-apricot",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Testing, refining, and launching your new website with ongoing support.",
                color: "mint-teal",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    phase.color === "mint-teal"
                      ? "bg-mint-teal"
                      : phase.color === "soft-mauve"
                      ? "bg-soft-mauve"
                      : "bg-yellow-500"
                  }`}
                >
                  <span className="text-white font-bold text-lg">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's discuss your project and create a custom solution that
            perfectly fits your needs and budget.
          </p>
          <Button
            size="lg"
            className="bg-mint-teal hover:bg-mint-teal-dark text-white"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
