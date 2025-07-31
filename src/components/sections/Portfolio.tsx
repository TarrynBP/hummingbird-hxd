
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Bloom Botanicals",
      category: "E-commerce",
      colors: ["#77cebb", "#c1a5b4", "#fee1a3"],
      description: "Natural skincare brand with earthy, calming palette"
    },
    {
      title: "Azure Consulting",
      category: "Professional Services", 
      colors: ["#4a90e2", "#77cebb", "#f8f9fa"],
      description: "Trust-building blues with accent mint tones"
    },
    {
      title: "Sunset Cafe",
      category: "Restaurant",
      colors: ["#fee1a3", "#ff6b6b", "#c1a5b4"],
      description: "Warm, inviting palette to enhance appetite appeal"
    },
    {
      title: "Mindful Therapy",
      category: "Healthcare",
      colors: ["#c1a5b4", "#e8f4f8", "#77cebb"],
      description: "Soothing mauve and teal for emotional comfort"
    },
    {
      title: "Creative Studio",
      category: "Agency",
      colors: ["#77cebb", "#fee1a3", "#c1a5b4"],
      description: "Full brand palette showcasing creative versatility"
    },
    {
      title: "Tech Startup",
      category: "Technology",
      colors: ["#6c5ce7", "#77cebb", "#2d3436"],
      description: "Modern purple and teal for innovation and trust"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Portfolio Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each project tells a unique story through carefully crafted color palettes 
            that connect emotionally with the target audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Color Palette Display */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {project.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-5 w-5 text-gray-600" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-sm text-mint-teal font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
