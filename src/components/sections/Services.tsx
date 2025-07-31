
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Monitor, Lightbulb, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Wix Website Design",
      description: "Custom Wix websites that blend stunning visuals with seamless functionality, optimized for your unique brand voice.",
      color: "mint-teal"
    },
    {
      icon: Palette,
      title: "Color Strategy Consulting", 
      description: "Deep-dive color psychology sessions to identify the perfect palette that resonates with your target audience.",
      color: "soft-mauve"
    },
    {
      icon: Lightbulb,
      title: "Brand Identity Design",
      description: "Complete visual identity systems built around strategic color choices that tell your brand's story.",
      color: "creamy-apricot"
    },
    {
      icon: Zap,
      title: "UX/UI Optimization",
      description: "User experience enhancements using color theory to guide user behavior and improve conversion rates.",
      color: "mint-teal"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Colorful Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine artistic vision with strategic thinking to create websites 
            that don't just look beautiful—they perform beautifully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 ${
                    service.color === 'mint-teal' ? 'bg-mint-teal/10' :
                    service.color === 'soft-mauve' ? 'bg-soft-mauve/10' :
                    'bg-creamy-apricot/10'
                  }`}>
                    <Icon className={`h-8 w-8 ${
                      service.color === 'mint-teal' ? 'text-mint-teal' :
                      service.color === 'soft-mauve' ? 'text-soft-mauve' :
                      service.color === 'creamy-apricot' ? 'text-yellow-600' :
                      'text-mint-teal'
                    }`} />
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
      </div>
    </section>
  );
};

export default Services;
