
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@hummingbird.design",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm EST"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "New York, NY",
      description: "Available for remote projects worldwide"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "24 hours",
      description: "We'll get back to you quickly"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mint-mauve opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Let's Create Something <span className="text-gradient">Beautiful</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your digital presence with the power of color? 
            We'd love to hear about your project and explore how we can help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-semibold">
                  Start Your Project
                </CardTitle>
                <CardDescription>
                  Tell us about your vision and we'll create a custom proposal for your project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Service Interested In</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website-design">Wix Website Design</SelectItem>
                          <SelectItem value="color-strategy">Color Strategy Consulting</SelectItem>
                          <SelectItem value="brand-identity">Brand Identity Design</SelectItem>
                          <SelectItem value="ux-optimization">UX/UI Optimization</SelectItem>
                          <SelectItem value="complete-package">Complete Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Project Budget</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-2k">Under $2,000</SelectItem>
                          <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-plus">$10,000+</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="bg-mint-teal hover:bg-mint-teal-dark text-white group">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    <Button type="button" size="lg" variant="outline" className="border-mint-teal text-mint-teal hover:bg-mint-teal hover:text-white">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Call
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif font-semibold">
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Multiple ways to reach us for your convenience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-mint-teal/10 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-mint-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-mint-teal font-medium mb-1">{item.details}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg gradient-mint-mauve text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-4">
                  Free Color Consultation
                </h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Book a 30-minute consultation to discuss your color strategy and 
                  receive actionable insights for your brand.
                </p>
                <Button variant="secondary" className="w-full">
                  Book Free Call
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">How long does a project take?</h4>
                    <p className="text-sm text-gray-600">Most projects are completed within 2-6 weeks, depending on scope and complexity.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Do you work with existing websites?</h4>
                    <p className="text-sm text-gray-600">Yes! We offer optimization services for existing Wix websites to improve their color strategy.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">What's included in support?</h4>
                    <p className="text-sm text-gray-600">All projects include training, documentation, and ongoing support for the specified period.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
