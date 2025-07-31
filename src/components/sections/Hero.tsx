
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mint-mauve opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 gradient-mauve-apricot rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 gradient-teal-apricot rounded-full blur-2xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <Palette className="h-6 w-6 text-mint-teal" />
              <span className="text-mint-teal font-medium">Color-Driven Design</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Websites that{" "}
              <span className="text-gradient">speak in color</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We craft emotionally resonant Wix websites using the psychology of color theory. 
              Every hue, shade, and gradient is carefully chosen to connect with your audience 
              and elevate your brand story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-mint-teal hover:bg-mint-teal-dark text-white group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-mint-teal text-mint-teal hover:bg-mint-teal hover:text-white">
                View Our Work
              </Button>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative w-full h-96">
              {/* Floating Color Swatches */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-mint-teal rounded-2xl shadow-lg animate-float"></div>
              <div className="absolute top-20 left-10 w-12 h-12 bg-soft-mauve rounded-xl shadow-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-20 right-10 w-20 h-20 bg-creamy-apricot rounded-3xl shadow-lg animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-0 left-0 w-14 h-14 gradient-mint-mauve rounded-2xl shadow-lg animate-float" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Central Design Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 gradient-teal-apricot rounded-full opacity-80 blur-sm"></div>
                <div className="absolute w-48 h-48 gradient-mint-mauve rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
