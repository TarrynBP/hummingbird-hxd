import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rocket, RefreshCw, Monitor, Lightbulb } from "lucide-react";
import { Button } from "../ui/button";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Launch with Purpose",
      description:
        "We'll design a website that guides your customers step by step. One that's easy to love, and made for small business growth.",
      color: "mint-teal",
    },
    {
      icon: RefreshCw,
      title: "Simplify Your Workflow",
      description:
        "We'll review your everyday tasks and customer steps to spot simple ways to improve your customer experience and how things run.",
      color: "mint-teal",
    },
    {
      icon: Monitor,
      title: "Get Set Online",
      description:
        "We'll help you choose and connect the right digital tools for your business, so your online setup supports how you work and how you grow.",
      color: "soft-mauve",
    },
    {
      icon: Lightbulb,
      title: "Grow with AI",
      description:
        "We'll show you how to use AI in smart, practical ways to ease your workload, so you focus on the growth of your business.",
      color: "creamy-apricot",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            What we do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
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
