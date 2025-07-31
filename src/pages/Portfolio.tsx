
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "E-commerce", "Professional Services", "Restaurant", "Healthcare", "Agency", "Technology"];

  const projects = [
    {
      id: "bloom-botanicals",
      title: "Bloom Botanicals",
      category: "E-commerce",
      colors: ["#77cebb", "#c1a5b4", "#fee1a3"],
      description: "Natural skincare brand with earthy, calming palette designed to evoke trust and wellness",
      features: ["Product catalog", "Shopping cart", "Brand storytelling"],
      results: "40% increase in conversion rate, 65% boost in time on site"
    },
    {
      id: "azure-consulting",
      title: "Azure Consulting",
      category: "Professional Services",
      colors: ["#4a90e2", "#77cebb", "#f8f9fa"],
      description: "Professional consulting firm using trust-building blues with mint accents",
      features: ["Service showcase", "Team profiles", "Client testimonials"],
      results: "3x increase in consultation bookings, improved brand perception"
    },
    {
      id: "sunset-cafe",
      title: "Sunset Cafe",
      category: "Restaurant",
      colors: ["#fee1a3", "#ff6b6b", "#c1a5b4"],
      description: "Cozy restaurant using warm, appetite-enhancing colors to create inviting atmosphere",
      features: ["Menu display", "Online reservations", "Event bookings"],
      results: "25% increase in online reservations, higher customer engagement"
    },
    {
      id: "mindful-therapy",
      title: "Mindful Therapy",
      category: "Healthcare",
      colors: ["#c1a5b4", "#e8f4f8", "#77cebb"],
      description: "Mental health practice using soothing mauve and teal for emotional comfort",
      features: ["Service information", "Therapist bios", "Appointment booking"],
      results: "50% increase in appointment bookings, improved client trust"
    },
    {
      id: "creative-studio-co",
      title: "Creative Studio Co",
      category: "Agency",
      colors: ["#77cebb", "#fee1a3", "#c1a5b4"],
      description: "Design agency showcasing full brand palette to demonstrate creative versatility",
      features: ["Portfolio showcase", "Service descriptions", "Creative process"],
      results: "200% increase in project inquiries, enhanced brand recognition"
    },
    {
      id: "novatech-solutions",
      title: "NovaTech Solutions",
      category: "Technology",
      colors: ["#6c5ce7", "#77cebb", "#2d3436"],
      description: "Tech startup using modern purple and teal for innovation and reliability",
      features: ["Product demos", "Pricing tiers", "Customer testimonials"],
      results: "150% increase in demo requests, improved conversion funnel"
    },
    {
      id: "artisan-bakery",
      title: "Artisan Bakery",
      category: "Restaurant",
      colors: ["#fee1a3", "#d4a574", "#8b4513"],
      description: "Local bakery using warm, earthy tones to convey handcrafted quality",
      features: ["Product gallery", "Online ordering", "Catering services"],
      results: "35% increase in online orders, expanded customer base"
    },
    {
      id: "wellness-center",
      title: "Wellness Center",
      category: "Healthcare",
      colors: ["#77cebb", "#b8e6d3", "#ffffff"],
      description: "Holistic wellness center using calming greens and whites for serenity",
      features: ["Class schedules", "Practitioner profiles", "Membership options"],
      results: "60% increase in class bookings, improved member retention"
    },
    {
      id: "fashion-boutique",
      title: "Fashion Boutique",
      category: "E-commerce",
      colors: ["#c1a5b4", "#f5f5f5", "#2c2c2c"],
      description: "High-end fashion retailer using sophisticated mauve with elegant neutrals",
      features: ["Product catalog", "Style guides", "Personal shopping"],
      results: "80% increase in average order value, enhanced brand prestige"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mint-mauve opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore how strategic color choices have transformed businesses across industries, 
            creating emotional connections and driving measurable results.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 flex-wrap gap-2">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-mint-teal hover:bg-mint-teal-dark text-white"
                    : "border-mint-teal text-mint-teal hover:bg-mint-teal hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link key={index} to={`/case-study/${project.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden cursor-pointer">
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Color Palette Display */}
                  <div className="absolute inset-0 flex">
                    {project.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="flex-1 transition-all duration-300 group-hover:scale-105"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-mint-teal text-xs font-medium px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex space-x-1">
                    {project.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-mint-teal rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-1 text-sm">Results:</h4>
                    <p className="text-xs text-mint-teal font-medium">
                      {project.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "60%", label: "Average Conversion Increase" },
              { number: "12+", label: "Industries Served" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-mint-teal mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Ready to join our success stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's create a website that not only looks stunning but delivers 
            measurable results for your business through strategic color design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-mint-teal hover:bg-mint-teal-dark text-white">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-mint-teal text-mint-teal hover:bg-mint-teal hover:text-white">
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
