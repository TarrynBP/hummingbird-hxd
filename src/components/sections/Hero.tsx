import { useHeroContent } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";

const Hero = () => {
  const { data: heroContent, isLoading, error } = useHeroContent();

  // Use Sanity data directly
  const content = heroContent;

  if (isLoading) {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mb-6"></div>
            <div className="h-16 bg-gray-200 rounded w-full mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !content) {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Hero content not found
            </h1>
            <p className="text-xl text-gray-600">
              Please add hero content in your Sanity Studio.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-mint-mauve opacity-5"></div>
      <div
        className="absolute top-20 right-20 w-64 h-64 gradient-mauve-apricot rounded-full blur-3xl opacity-20 animate-float"
        style={{ transform: "translateZ(0)" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-48 h-48 gradient-teal-apricot rounded-full blur-2xl opacity-30 animate-float"
        style={{ animationDelay: "1s", transform: "translateZ(0)" }}
      ></div>
      <div
        className="absolute top-20 right-20 w-64 h-64 bg-mint-teal/10 rounded-full blur-3xl opacity-20 animate-float"
        style={{ transform: "translateZ(0)" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-48 h-48 bg-soft-mauve/10 rounded-full blur-2xl opacity-30 animate-float"
        style={{ animationDelay: "1s", transform: "translateZ(0)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-1 lg:order-1">
            <div className="mb-6">
              <span
                className="text-mint-teal font-medium text-lg animate-fade-in"
                style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              >
                {content.subtitle}
              </span>
            </div>
            <h1
              className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              {content.title}
            </h1>
            <p
              className="text-xl text-gray-600 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.6s", animationFillMode: "both" }}
            >
              {content.description}
            </p>
          </div>

          <div className="relative order-2 lg:order-2 hidden md:block">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              {/* Floating Geometric Shapes */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-mint-teal rounded-2xl shadow-lg animate-float"></div>
              <div
                className="absolute top-20 left-10 w-12 h-12 bg-soft-mauve rounded-xl shadow-lg animate-float"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-20 right-10 w-20 h-20 bg-creamy-apricot rounded-3xl shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-14 h-14 gradient-mint-mauve rounded-2xl shadow-lg animate-float"
                style={{ animationDelay: "1.5s" }}
              ></div>

              {/* Central Design Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 gradient-teal-apricot rounded-full opacity-80 blur-sm"></div>
                <div className="absolute w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 gradient-mint-mauve rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
