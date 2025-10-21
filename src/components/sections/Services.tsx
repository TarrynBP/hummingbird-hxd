import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { useServices } from "@/hooks/useSanityData";

const Services = () => {
  const { data: servicesData, isLoading, error } = useServices();

  // Helper to map string icon name from Sanity to a Lucide icon component
  const getIconComponent = (iconName: string) => {
    const IconComponent =
      (LucideIcons as any)[iconName] || (LucideIcons as any)["Zap"];
    return IconComponent;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 animate-fade-in">
            What we do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {isLoading ? (
            [...Array(6)].map((_, index) => (
              <Card
                key={index}
                className="border-0 animate-pulse"
                style={{ backgroundColor: "#F8FDFB" }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto bg-mint-teal/10"></div>
                  <div className="h-6 bg-gray-200 rounded w-40 mx-auto"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : error || !servicesData || servicesData.length === 0 ? (
            <div className="col-span-full text-center text-gray-600">
              Services not found. Add services in Sanity Studio.
            </div>
          ) : (
            servicesData.map((service: any, index: number) => {
              const Icon = getIconComponent(service.icon);
              return (
                <Card
                  key={service._id || service.id || index}
                  className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 animate-slide-up"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "both",
                    backgroundColor: "#F8FDFB",
                  }}
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
                        className={`h-8 w-8 group-hover:rotate-12 transition-transform duration-300 ${
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
            })
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center">
          <Link to="/services">
            <Button
              size="lg"
              className="bg-mint-teal hover:bg-mint-teal-dark text-white group w-48"
            >
              View Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
