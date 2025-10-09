import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Monitor,
  Settings,
  Lightbulb,
  Zap,
} from "lucide-react";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";

const Services = () => {
  const seoData = useSEO();

  // Service data matching the design
  const servicesData = [
    {
      id: 1,
      title: "Website Design",
      description: "Complete custom website design and development.",
      price: "Starting at R5,750",
      icon: Monitor,
      features: [
        "Custom design tailored to your brand",
        "Mobile-ready and user-friendly layouts",
        "Engaging copy written for clarity and trust",
        "SEO foundations to help you get found",
        "Easy integrations (e.g. bookings, forms, payments)",
        "Basic on-site analytics setup",
      ],
    },
    {
      id: 2,
      title: "Service Design",
      description:
        "Smarter ways of working, shaped around your customers and goals.",
      price: "Starting at R20,000 p/m",
      icon: Settings,
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
      id: 3,
      title: "Digital Integration",
      description: "Simple tools and smooth systems to support how you work.",
      price: "Starting at R15,000 p/m",
      icon: Lightbulb,
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
      id: 4,
      title: "AI Integration",
      description:
        "Use AI in practical ways to save time and do more with less.",
      price: "Starting at R15,000",
      icon: Zap,
      features: [
        "Look at how your business runs day to day",
        "Identify bottlenecks and frustrations",
        "Formulate practical ways to use AI day to day",
        "Help with setup and first use",
        "Support to build your confidence",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding your brand, audience, and goals through detailed consultation.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Developing colour psychology insights and strategic recommendations.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Creating beautiful, functional designs that implement our colour strategy.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Testing, refining, and launching your new website with ongoing support.",
    },
  ];

  return (
    <>
      <SEO seoData={seoData} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From smooth-running systems to smart websites and practical AI
              tools, we offer down-to-earth support to help your business work
              better and shine online.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 h-full flex flex-col"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-mint-teal/10 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-mint-teal" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-serif font-semibold text-gray-900 mb-2">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 mb-3">
                            {service.description}
                          </CardDescription>
                          <p className="text-mint-teal font-semibold text-lg">
                            {service.price}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-2 mb-6 flex-1">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-2"
                          >
                            <Check className="h-4 w-4 text-mint-teal flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto">
                        <Link to="/contact">
                          <Button className="w-full bg-mint-teal hover:bg-mint-teal-dark text-white group">
                            Start Your Project
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-mint-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
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
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-mint-teal hover:bg-mint-teal-dark text-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
