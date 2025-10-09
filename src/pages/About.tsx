import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Palette, Heart, Users, Award } from "lucide-react";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { scrollToElement } from "@/hooks/useScrollToElement";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const About = () => {
  const seoData = useSEO();
  const navigate = useNavigate();

  const handleViewPortfolio = () => {
    navigate("/");
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      scrollToElement("portfolio");
    }, 100);
  };

  const values = [
    {
      icon: Palette,
      title: "Digital and AI First",
      description:
        "We value digital and AI-first thinking to simplify work, enhance experiences, and help small businesses grow confidently.",
    },
    {
      icon: Heart,
      title: "Emotional Connection",
      description:
        "Beyond aesthetics, we create experiences that forge genuine connections between brands and their audiences.",
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description:
        "Your vision combined with our expertise. We team up with clients to bring their unique story to life, thoughtfully.",
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description:
        "We're passionate about delivering exceptional results that exceed expectations and drive business growth.",
    },
  ];

  const team = [
    {
      name: "Tarryn Pietersen",
      role: "Founder, consultant and Designer",
      description:
        "With 8+ years in colour theory and web design, Tarryn founded HummingBird to bridge the gap between psychology and digital aesthetics.",
    },
    {
      name: "William Hankey",
      role: "Lead Developer",
      description:
        "William specialises in user experience optimisation, using colour psychology to guide user behaviour and improve conversion rates.",
    },
  ];

  return (
    <>
      <SEO seoData={seoData} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-mint-mauve opacity-5"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              About <span className="text-gradient">HummingBird</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're a passionate team of designers, thinkers, and
              problem-solvers who believe that thoughtful design has the power
              to shift how people feel, engage, and move through the world.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-creamy-apricot/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Hummingbird started with a simple frustration: too many
                  digital experiences felt clunky, confusing, or just plain
                  forgettable. We knew businesses and their customers deserved
                  better.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We've grown from designing websites to rethinking entire
                  journeys, systems, and services. At the heart of it all is a
                  belief in thoughtful design. Design that helps people feel at
                  ease, find what they need, and connect with what matters.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we work with growing businesses to create clearer
                  customer journeys, more useful websites, and smarter ways of
                  working. Always with people in mind.
                </p>
              </div>
              <div className="relative">
                <div
                  className="w-full h-80 rounded-2xl flex items-center justify-center px-4 py-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #78CEC3 0%, #FEE8A4 100%)",
                  }}
                >
                  <div className="text-center bg-white w-full h-full flex flex-col justify-center items-center gap-10">
                    <p className="text-4xl font-bold text-gray-900 mb-2">
                      <AnimatedCounter
                        value="50+"
                        duration={2000}
                        startOnView={true}
                      />{" "}
                      Projects
                    </p>
                    <Link to="/services">
                      <Button className="bg-mint-teal hover:bg-mint-teal-dark text-white">
                        View Our Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                const colors = [
                  "bg-mint-teal/10",
                  "bg-pink-500/10",
                  "bg-yellow-500/10",
                  "bg-mint-teal/10",
                ];
                const iconColors = [
                  "text-mint-teal",
                  "text-pink-500",
                  "text-yellow-500",
                  "text-mint-teal",
                ];
                return (
                  <Card
                    key={index}
                    className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-8">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto`}
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(120, 206, 195, 0.25) 0%, rgba(195, 162, 179, 0.25) 100%)",
                        }}
                      >
                        <Icon className={`h-8 w-8 text-mint-teal`} />
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-creamy-apricot/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate designers and strategists united by our love for
                colour and commitment to creating extraordinary digital
                experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => {
                const imagePath =
                  member.name === "Tarryn Pietersen"
                    ? "/assets/tarryn.jpeg"
                    : "/assets/william.jpg";

                return (
                  <Card key={index} className="text-center border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                        <img
                          src={imagePath}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-mint-teal font-medium mb-4">
                        {member.role}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Ready to work with us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's create something effective together. We'd love to hear about
              your project and explore how design can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/#services">
                <Button
                  size="lg"
                  className="bg-mint-teal hover:bg-mint-teal-dark text-white w-48"
                >
                  View Our Services
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-mint-teal text-mint-teal hover:bg-mint-teal hover:text-white w-48"
                onClick={handleViewPortfolio}
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
