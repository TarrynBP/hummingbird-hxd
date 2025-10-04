import { useState, useEffect } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import {
  sendContactEmail,
  initEmailJS,
  type ContactFormData,
} from "@/lib/emailjs";

const Contact = () => {
  const { toast } = useToast();
  const seoData = useSEO();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("form");
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

  // Load Calendly script when booking tab is active
  useEffect(() => {
    if (activeTab === "booking") {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script when component unmounts or tab changes
        const existingScript = document.querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]'
        );
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [activeTab]);

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
            {/* Contact Form with Tabs */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-semibold">
                    Get In Touch
                  </CardTitle>
                  <CardDescription>
                    Choose how you'd like to connect with us
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger
                        value="form"
                        className="flex items-center gap-2"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Send Message
                      </TabsTrigger>
                      <TabsTrigger
                        value="booking"
                        className="flex items-center gap-2"
                      >
                        <Calendar className="h-4 w-4" />
                        Book a Call
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="form" className="space-y-6">
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
                              className="transition-all duration-200 focus:scale-105 focus:shadow-md"
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
                              className="transition-all duration-200 focus:scale-105 focus:shadow-md"
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
                            className="transition-all duration-200 focus:scale-105 focus:shadow-md"
                          />
                        </div>

                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                <SelectItem value="10k-plus">
                                  $10,000+
                                </SelectItem>
                                <SelectItem value="not-sure">
                                  Not sure yet
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div> */}
                        <div className="space-y-2">
                          <Label htmlFor="message">Project Details *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) =>
                              handleInputChange("message", e.target.value)
                            }
                            placeholder="Tell us about your project, goals, and any specific requirements..."
                            className="min-h-32 transition-all duration-200 focus:scale-105 focus:shadow-md"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="bg-mint-teal hover:bg-mint-teal-dark text-white group relative overflow-hidden w-full sm:w-auto"
                          disabled={isSubmitting}
                        >
                          <Send
                            className={`mr-2 h-4 w-4 transition-transform duration-200 ${
                              isSubmitting
                                ? "animate-spin"
                                : "group-hover:translate-x-1"
                            }`}
                          />
                          {isSubmitting ? "Sending..." : "Send Message"}
                          {isSubmitting && (
                            <div className="absolute inset-0 bg-mint-teal-dark animate-pulse"></div>
                          )}
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="booking" className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                          Schedule a Free Consultation
                        </h3>
                        <p className="text-gray-600">
                          Book a 30-minute call to discuss your project and get
                          personalized recommendations.
                        </p>
                      </div>

                      <div className="calendly-inline-widget-container">
                        <div
                          className="calendly-inline-widget"
                          data-url="https://calendly.com/tarryn-pietersen/30min?hide_gdpr_banner=1"
                          style={{ minWidth: "320px", height: "700px" }}
                        ></div>
                      </div>
                    </TabsContent>
                  </Tabs>
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
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => setActiveTab("booking")}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
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
