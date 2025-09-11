import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Gulzaar Parker",
      role: "Africa Wellness",
      content:
        "We got more than we expected. Hummingbird gave us clear, practical feedback and showed us where to focus our web efforts. If you want to improve your website and make smarter use of your budget, reach out.",
      rating: 5,
    },
    {
      name: "Nadine Agrionov",
      role: "Rugal",
      content:
        "Hummingbird saw our website needed more than a review and designed a new foundation for us instead. They truly care about small businesses. We highly recommend working with them to improve your online presence.",
      rating: 5,
    },
    {
      name: "Enrique Fourie",
      role: "Enrique Fourie Hair and Makeup",
      content:
        "Tarryn really took the time to understand my brand and brought my vision to life. The site looks and works beautifully. She truly cares, and it shows. I felt supported every step of the way.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-creamy-apricot-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            How our clients feel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how our clients feel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
