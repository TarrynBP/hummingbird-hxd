import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-mint-teal/10 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-soft-mauve/10 rounded-full blur-xl opacity-40"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          Ready to build your{" "}
          <span className="text-gray-500">colourful future?</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Every colour, every shape, every word of your website is carefully
          chosen to connect with your audience and invite a relationship,
          driving real results for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-mint-teal hover:bg-mint-teal-dark text-white"
          >
            View Our Packages
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-mint-teal text-mint-teal hover:bg-mint-teal hover:text-white"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
