import { Card, CardContent } from "@/components/ui/card";
import { Palette, Heart, Users, Award } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Palette,
      title: "Digital and AI First",
      description: "We believe every color tells a story and evokes emotion. Our designs are rooted in psychological principles."
    },
    {
      icon: Heart,
      title: "Emotional Connection",
      description: "Beyond aesthetics, we create experiences that forge genuine connections between brands and their audiences."
    },
    {
      icon: Users,
      title: "Collaborative Process", 
      description: "Your vision combined with our expertise. We work closely with clients to bring their unique story to life."
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "We're passionate about delivering exceptional results that exceed expectations and drive business growth."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core principles guide every project we take on and every 
            relationship we build with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-mint-mauve rounded-2xl mb-6 mx-auto">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
