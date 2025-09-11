import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, MessageCircle, Users, Trophy } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: "Digital and AI First",
      description:
        "We embrace technology to simplify your work and enhance your customer experiences, making your business more efficient and effective.",
      color: "mint-teal",
    },
    {
      icon: MessageCircle,
      title: "Emotional Connection",
      description:
        "We believe in forging genuine connections between your brand and your customers, creating experiences that resonate and build lasting relationships.",
      color: "soft-mauve",
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description:
        "We work closely with you, combining your vision with our expertise to create solutions that truly reflect your business and goals.",
      color: "creamy-apricot",
    },
    {
      icon: Trophy,
      title: "Excellence Driven",
      description:
        "We're committed to delivering exceptional results that exceed expectations, always striving for the highest quality in everything we do.",
      color: "mint-teal",
    },
  ];

  return (
    <section className="py-20 bg-white">
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
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 ${
                      value.color === "mint-teal"
                        ? "bg-mint-teal/10"
                        : value.color === "soft-mauve"
                        ? "bg-soft-mauve/10"
                        : "bg-creamy-apricot/10"
                    }`}
                  >
                    <Icon
                      className={`h-8 w-8 ${
                        value.color === "mint-teal"
                          ? "text-mint-teal"
                          : value.color === "soft-mauve"
                          ? "text-soft-mauve"
                          : "text-yellow-600"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-xl font-serif font-semibold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
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

export default Values;
