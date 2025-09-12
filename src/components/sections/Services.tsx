import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useServices } from "@/hooks/useSanityData";
import * as LucideIcons from "lucide-react";

const Services = () => {
  const { data: services, isLoading, error } = useServices();

  // Fallback services if Sanity data is not available
  const fallbackServices = [
    {
      icon: "Rocket",
      title: "Launch with Purpose",
      description:
        "We'll design a website that guides your customers step by step. One that's easy to love, and made for small business growth.",
      color: "mint-teal",
    },
    {
      icon: "RefreshCw",
      title: "Simplify Your Workflow",
      description:
        "We'll review your everyday tasks and customer steps to spot simple ways to improve your customer experience and how things run.",
      color: "mint-teal",
    },
    {
      icon: "Monitor",
      title: "Get Set Online",
      description:
        "We'll help you choose and connect the right digital tools for your business, so your online setup supports how you work and how you grow.",
      color: "soft-mauve",
    },
    {
      icon: "Lightbulb",
      title: "Grow with AI",
      description:
        "We'll show you how to use AI in smart, practical ways to ease your workload, so you focus on the growth of your business.",
      color: "creamy-apricot",
    },
  ];

  const servicesData = services || fallbackServices;

  // Helper function to get icon component
  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent || LucideIcons.Rocket;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            What we do
          </h2>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="animate-pulse">
                    <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-4 mx-auto"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {servicesData.map((service, index) => {
              const Icon = getIconComponent(service.icon);
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-white"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 ${
                        service.color === "mint-teal"
                          ? "bg-mint-teal/10"
                          : service.color === "soft-mauve"
                          ? "bg-soft-mauve/10"
                          : "bg-creamy-apricot/10"
                      }`}
                    >
                      <Icon
                        className={`h-8 w-8 ${
                          service.color === "mint-teal"
                            ? "text-mint-teal"
                            : service.color === "soft-mauve"
                            ? "text-soft-mauve"
                            : service.color === "creamy-apricot"
                            ? "text-yellow-600"
                            : "text-mint-teal"
                        }`}
                      />
                    </div>
                    <CardTitle className="text-xl font-serif font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-center">
          <Button
            size="lg"
            className="bg-mint-teal hover:bg-mint-teal-dark text-white group"
          >
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
