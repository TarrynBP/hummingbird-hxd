import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Monitor, Smartphone } from "lucide-react";
import { urlFor } from "@/lib/sanity";

interface SolutionVisualProps {
  desktopImage?: any;
  mobileImage?: any;
  figmaEmbedUrl?: string;
  demoButtonText?: string;
}

const SolutionVisual = ({
  desktopImage,
  mobileImage,
  figmaEmbedUrl,
  demoButtonText = "Explore Demo",
}: SolutionVisualProps) => {
  const [showFigmaEmbed, setShowFigmaEmbed] = useState(false);

  const handleExploreDemo = () => {
    if (figmaEmbedUrl) {
      setShowFigmaEmbed(true);
    }
  };

  const handleCloseEmbed = () => {
    setShowFigmaEmbed(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mockups Section */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* Desktop Mockup */}
              {desktopImage && (
                <div className="relative">
                  <div className="w-full max-w-md lg:max-w-lg">
                    <div className="relative bg-gray-800 rounded-lg p-4 shadow-2xl">
                      {/* Browser Chrome */}
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-gray-700 rounded px-3 py-1">
                          <div className="text-xs text-gray-300">bankx.com</div>
                        </div>
                      </div>
                      {/* Desktop Image */}

                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={urlFor(desktopImage)
                            .width(800)
                            .height(600)
                            .url()}
                          alt="Desktop mockup"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-mint-teal text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Monitor className="w-4 h-4" />
                    <span>Desktop</span>
                  </div>
                </div>
              )}

              {/* Mobile Mockup */}
              {mobileImage && (
                <div className="relative">
                  <div className="w-64 lg:w-72">
                    <div
                      className="relative w-full h-auto bg-contain bg-no-repeat bg-center"
                      style={{
                        backgroundImage: "url('/assets/mobile_mockup.svg')",
                        aspectRatio: "9/16",
                      }}
                    >
                      {/* Overlay the project image on the mobile mockup */}
                      <div className="absolute inset-0 flex items-center justify-center pr-7 pl-7 pt-4 pb-3">
                        <div className="w-full h-full rounded-3xl overflow-hidden">
                          <img
                            src={urlFor(mobileImage).url()}
                            alt="Mobile mockup"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="max-w-md">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Ready for some <span className="text-gray-500">fun?</span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                See the project come to life. Click, scroll, and explore each
                screen as if you're using the real thing. No rules, just
                curiosity.
              </p>
              {figmaEmbedUrl && (
                <Button
                  onClick={handleExploreDemo}
                  size="lg"
                  className="bg-mint-teal hover:bg-mint-teal/90 text-white px-8 py-3 text-lg font-medium"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {demoButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Figma Embed Modal */}
      {showFigmaEmbed && figmaEmbedUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl h-[80vh] relative">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                Interactive Demo
              </h3>
              <Button
                onClick={handleCloseEmbed}
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </Button>
            </div>
            <div className="h-full p-4">
              <iframe
                src={figmaEmbedUrl}
                className="w-full h-full border-0 rounded"
                allowFullScreen
                title="Figma Interactive Demo"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolutionVisual;
