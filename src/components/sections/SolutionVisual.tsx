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
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Mockups Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Desktop Mockup */}
            {desktopImage && (
              <div>
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[12px] rounded-t-xl h-[258px] max-w-[452px] md:h-[441px] md:max-w-[768px]">
                  <div className="rounded-lg overflow-hidden h-[234px] md:h-[417px] bg-white dark:bg-gray-800">
                    <img
                      src={urlFor(desktopImage).url()}
                      className="dark:hidden h-[234px] md:h-[417px] w-full rounded-lg"
                      alt=""
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                      className="hidden dark:block h-[234px] md:h-[417px] w-full rounded-lg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[26px] max-w-[527px] md:h-[32px] md:max-w-[896px]">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[84px] h-[8px] md:w-[144px] md:h-[12px] bg-gray-800"></div>
                </div>
              </div>
            )}

            {/* Mobile Mockup */}
            {mobileImage && (
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[7px] rounded-[1.25rem] h-[300px] w-[150px]">
                <div className="h-[16px] w-[1.5px] bg-gray-800 dark:bg-gray-800 absolute -start-[8.5px] top-[36px] rounded-s-lg"></div>
                <div className="h-[23px] w-[1.5px] bg-gray-800 dark:bg-gray-800 absolute -start-[8.5px] top-[62px] rounded-s-lg"></div>
                <div className="h-[23px] w-[1.5px] bg-gray-800 dark:bg-gray-800 absolute -start-[8.5px] top-[89px] rounded-s-lg"></div>
                <div className="h-[32px] w-[1.5px] bg-gray-800 dark:bg-gray-800 absolute -end-[8.5px] top-[71px] rounded-e-lg"></div>
                <div className="rounded-[1rem] overflow-hidden w-[136px] h-[286px] bg-white dark:bg-gray-800">
                  <img
                    src={urlFor(mobileImage).url()}
                    className="dark:hidden w-[136px] h-[286px]"
                    alt=""
                  />
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                    className="hidden dark:block w-[136px] h-[286px]"
                    alt=""
                  />
                </div>
              </div>
            )}
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
