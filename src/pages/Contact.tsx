import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import {
  sendContactEmail,
  initEmailJS,
  type ContactFormData,
} from "@/lib/emailjs";
import { useEffect } from "react";

const Contact = () => {
  const { toast } = useToast();
  const seoData = useSEO();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }

      // Send email using EmailJS
      const success = await sendContactEmail(formData as ContactFormData);

      if (success) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+27 (72) 608-5749",
      description: "Mon-Fri from 9am to 6pm EST",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kenilworth, Cape Town",
      description: "Available for remote projects worldwide",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "24 hours",
      description: "We'll get back to you quickly",
    },
  ];

  return (
    <>
      <SEO seoData={seoData} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-mint-mauve opacity-5"></div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Let's transform your business{" "}
              <span className="text-gradient">together</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your digital presence with the power of colour?
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
                    Contact Us
                  </CardTitle>
                  <CardDescription>Let us know your thoughts</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
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
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
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
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Service Interested In</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleInputChange("service", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website-design">
                              Wix Website Design
                            </SelectItem>
                            <SelectItem value="color-strategy">
                              Color Strategy Consulting
                            </SelectItem>
                            <SelectItem value="brand-identity">
                              Brand Identity Design
                            </SelectItem>
                            <SelectItem value="ux-optimization">
                              UX/UI Optimization
                            </SelectItem>
                            <SelectItem value="complete-package">
                              Complete Package
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Project Budget</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) =>
                            handleInputChange("budget", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-2k">
                              Under $2,000
                            </SelectItem>
                            <SelectItem value="2k-5k">
                              $2,000 - $5,000
                            </SelectItem>
                            <SelectItem value="5k-10k">
                              $5,000 - $10,000
                            </SelectItem>
                            <SelectItem value="10k-plus">$10,000+</SelectItem>
                            <SelectItem value="not-sure">
                              Not sure yet
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="min-h-32"
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-mint-teal hover:bg-mint-teal-dark text-white group"
                        disabled={isSubmitting}
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        className="border-mint-teal text-mint-teal hover:bg-mint-teal hover:text-white"
                      >
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
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-mint-teal font-medium mb-1">
                            {item.details}
                          </p>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
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
                    Book a 30-minute consultation to discuss your color strategy
                    and receive actionable insights for your brand.
                  </p>
                  <Button variant="secondary" className="w-full" disabled>
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
                      <h4 className="font-medium text-gray-900 mb-1">
                        How long does a project take?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Most projects are completed within 2-6 weeks, depending
                        on scope and complexity.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Do you work with existing websites?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Yes! We offer optimization services for existing Wix
                        websites to improve their color strategy.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        What's included in support?
                      </h4>
                      <p className="text-sm text-gray-600">
                        All projects include training, documentation, and
                        ongoing support for the specified period.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
