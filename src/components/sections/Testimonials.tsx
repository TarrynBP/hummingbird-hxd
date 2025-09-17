import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTestimonials } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";

const Testimonials = () => {
  const { data: testimonials, isLoading, error } = useTestimonials();

  // Use Sanity data directly
  const testimonialsData = testimonials;

  return (
    <section className="py-20 bg-creamy-apricot/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            How our clients feel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how our clients feel.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="animate-pulse">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="h-5 w-5 bg-gray-200 rounded mr-1"
                        ></div>
                      ))}
                    </div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-6 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-1 w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error || !testimonialsData || testimonialsData.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Testimonials not found
            </h3>
            <p className="text-gray-600">
              Please add testimonials in your Sanity Studio.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonialsData.map((testimonial, index) => (
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
                    {testimonial.avatar && (
                      <img
                        src={urlFor(testimonial.avatar)
                          .width(50)
                          .height(50)
                          .url()}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
