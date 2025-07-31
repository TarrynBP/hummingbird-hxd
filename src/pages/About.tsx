
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Heart, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Palette,
      title: "Color Psychology",
      description: "We believe every color tells a story and evokes emotion. Our designs are rooted in psychological principles."
    },
    {
      icon: Heart,
      title: "Emotional Connection",
      description: "Beyond aesthetics, we create experiences that forge genuine connections between brands and their audiences."
    },
    {
      icon: Users,
      title: "Collaborative Process", 
      description: "Your vision combined with our expertise. We work closely with clients to bring their unique story to life."
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "We're passionate about delivering exceptional results that exceed expectations and drive business growth."
    }
  ];

  const team = [
    {
      name: "Emma Rodriguez",
      role: "Creative Director & Founder",
      description: "With 8+ years in color theory and web design, Emma founded HummingBird to bridge the gap between psychology and digital aesthetics."
    },
    {
      name: "David Kim",
      role: "Lead UX Designer",
      description: "David specializes in user experience optimization, using color psychology to guide user behavior and improve conversion rates."
    },
    {
      name: "Sophie Laurent",
      role: "Brand Strategist",
      description: "Sophie helps clients discover their authentic color story, aligning visual identity with business goals and target audience needs."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mint-mauve opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            About <span className="text-gradient">HummingBird</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We're a passionate team of designers, strategists, and color enthusiasts 
            who believe that the right palette can transform not just how a website looks, 
            but how it makes people feel and act.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                HummingBird was born from a simple observation: most websites look the same. 
                Generic color palettes, predictable layouts, and designs that fail to capture 
                the unique essence of the businesses they represent.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our founder, Emma Rodriguez, spent years studying color psychology and its impact 
                on human behavior. She discovered that the right color combinations could increase 
                user engagement by up to 80% and boost conversion rates significantly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be the leading color-focused web design agency, 
                helping businesses across industries create websites that don't just look 
                beautiful—they perform beautifully.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 gradient-teal-apricot rounded-2xl opacity-80"></div>
              <div className="absolute inset-4 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 gradient-mint-mauve rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">H</span>
                  </div>
                  <p className="text-gray-600 font-medium">Since 2019</p>
                  <p className="text-2xl font-bold text-gray-900">50+ Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
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
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 gradient-mint-mauve rounded-2xl mb-6 mx-auto">
                      <Icon className="h-8 w-8 text-white" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate designers and strategists united by our love for color 
              and commitment to creating extraordinary digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-24 h-24 gradient-mint-mauve rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's create something beautiful together. We'd love to hear about your project 
            and explore how color can transform your digital presence.
          </p>
          <Button size="lg" className="bg-mint-teal hover:bg-mint-teal-dark text-white">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
