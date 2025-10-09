import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Lightbulb, Settings, Zap } from "lucide-react";

const OtherServices = () => {
  const services = [
    {
      name: "Service Design",
      icon: Lightbulb,
      description:
        "Smarter ways of working, shaped around your customers and goals",
      price: "Starting at R20,000 p/m",
      features: [
        "Look at how your business runs day to day",
        "Review how customers experience your service",
        "Find what's causing delays or confusion",
        "Suggest ways of doing things",
        "Prioritise what to fix first",
        "Get a simple plan you can act on",
      ],
    },
    {
      name: "Digital Integration",
      icon: Settings,
      description: "Simple tools and smooth systems to support how you work",
      price: "Starting at R15,000 p/m",
      features: [
        "Review your current tools",
        "Recommend better-fit options",
        "Prioritise what matters most",
        "Turn scattered tools into a smooth system",
        "Help with setup and integration",
        "Support through the change",
      ],
    },
    {
      name: "AI Integration",
      icon: Zap,
      description:
        "Use AI in practical ways to save time and do more with less",
      price: "Starting at R15,000",
      features: [
        "Look at how your business runs day to day",
        "Identify bottlenecks and frustrations",
        "Formulate practical ways to use AI day to day",
        "Help with setup and first use",
        "Support to build your confidence",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Other Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From smooth-running systems to smart websites and practical AI
            tools, we offer down-to-earth support to help your business work
            better and shine online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex flex-col h-full">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex-grow">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto bg-mint-teal/10">
                      <Icon className="h-8 w-8 text-mint-teal" />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-center">
                      {service.name}
                    </h3>

                    <p className="text-gray-600 mb-6 text-center leading-relaxed">
                      {service.description}
                    </p>

                    <div className="text-2xl font-bold text-mint-teal mb-6 text-center">
                      {service.price}
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <Check className="h-5 w-5 text-mint-teal flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Link to="/contact" className="mt-4">
                  <Button className="w-full bg-mint-teal hover:bg-mint-teal-dark text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
