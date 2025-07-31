import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, TrendingUp, Users, Target, Clock, Palette, Eye, MousePointer, Heart, Lightbulb, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  const { projectId } = useParams();

  const projects = [
    {
      id: "bloom-botanicals",
      title: "Bloom Botanicals",
      category: "E-commerce",
      colors: ["#77cebb", "#c1a5b4", "#fee1a3"],
      description: "Natural skincare brand with earthy, calming palette designed to evoke trust and wellness",
      features: ["Product catalog", "Shopping cart", "Brand storytelling"],
      results: "40% increase in conversion rate, 65% boost in time on site",
      duration: "8 weeks",
      team: "Lead Designer, UX Researcher, 2 Developers",
      platforms: "Desktop, Mobile, Tablet",
      
      overview: "Bloom Botanicals approached us to redesign their e-commerce platform with a focus on emotional connection and trust-building through strategic color psychology. As a premium natural skincare brand, they needed to differentiate themselves in a saturated market while maintaining accessibility and conversion optimization.",
      
      problemStatement: "How might we create an e-commerce experience that immediately communicates natural authenticity and wellness expertise while optimizing for both emotional engagement and conversion efficiency?",
      
      userPersonas: [
        {
          name: "Wellness Emma",
          age: "28-35",
          goals: "Seeks clean, effective skincare with transparent ingredients",
          painPoints: "Overwhelmed by greenwashing, wants authentic natural products",
          behavior: "Researches extensively before purchase, values brand story"
        },
        {
          name: "Busy Professional Sarah", 
          age: "35-45",
          goals: "Quick, reliable skincare routine that delivers results",
          painPoints: "Limited time for research, needs trusted recommendations",
          behavior: "Shops on mobile, values convenience and expert guidance"
        }
      ],
      
      designProcess: [
        {
          phase: "Research & Discovery",
          duration: "2 weeks",
          activities: ["User interviews", "Competitive analysis", "Brand audit", "Color psychology research"],
          insights: "Users associate certain colors with naturalness and trust, current site lacks emotional connection"
        },
        {
          phase: "Ideation & Strategy",
          duration: "1 week", 
          activities: ["Color palette development", "Information architecture", "User journey mapping"],
          insights: "Mint teal tested highest for 'natural' and 'trustworthy' associations"
        },
        {
          phase: "Design & Iteration",
          duration: "3 weeks",
          activities: ["Wireframing", "Visual design", "Prototype development", "User testing"],
          insights: "Soft mauve improved perceived femininity while maintaining professionalism"
        },
        {
          phase: "Implementation & Launch",
          duration: "2 weeks",
          activities: ["Development collaboration", "QA testing", "Launch preparation"],
          insights: "Creamy apricot as accent color increased CTA engagement by 23%"
        }
      ],
      
      colorStrategy: {
        primary: {
          color: "#77cebb",
          name: "Mint Teal",
          psychology: "Trust, freshness, natural healing",
          usage: "Primary CTAs, navigation, trust indicators"
        },
        secondary: {
          color: "#c1a5b4", 
          name: "Soft Mauve",
          psychology: "Femininity, nurturing, premium quality",
          usage: "Secondary elements, product highlights, testimonials"
        },
        accent: {
          color: "#fee1a3",
          name: "Creamy Apricot", 
          psychology: "Energy, warmth, optimism",
          usage: "Interactive elements, notifications, emphasis"
        }
      },
      
      keyInsights: [
        "Color temperature directly influences purchase intent in skincare",
        "Natural color palettes increase time spent on product pages by 40%",
        "Warm accent colors improve CTA click-through rates significantly",
        "Consistent color application builds subconscious brand trust"
      ],
      
      challenge: "Bloom Botanicals needed to establish trust and convey their natural, wellness-focused brand identity in a crowded skincare market. Their previous website felt clinical and didn't communicate the organic, nurturing qualities of their products. User research revealed that potential customers couldn't distinguish them from mass-market competitors.",
      
      solution: "We developed a comprehensive color strategy centered around mint teal (#77cebb) to evoke freshness and natural healing, complemented by soft mauve (#c1a5b4) for femininity and warmth, and creamy apricot (#fee1a3) for energy and vitality. The design emphasized organic shapes, breathing room, and earth-inspired textures while maintaining e-commerce best practices.",
      
      impact: [
        { metric: "Conversion Rate", value: "+40%", description: "More visitors became customers", icon: "TrendingUp" },
        { metric: "Time on Site", value: "+65%", description: "Users engaged longer with content", icon: "Clock" },
        { metric: "Cart Abandonment", value: "-28%", description: "Smoother checkout experience", icon: "CheckCircle" },
        { metric: "Brand Perception", value: "+85%", description: "Improved trust and authenticity scores", icon: "Heart" },
        { metric: "Mobile Conversions", value: "+52%", description: "Enhanced mobile shopping experience", icon: "MousePointer" },
        { metric: "Product Page Views", value: "+73%", description: "Increased product exploration", icon: "Eye" }
      ],
      
      lessons: [
        "Color psychology research should precede all visual design decisions",
        "A/B testing color variations early saves significant iteration time", 
        "Emotional connection drives conversion more than feature highlights",
        "Consistent color application across touchpoints amplifies brand impact"
      ],
      
      nextSteps: [
        "Expand color system to packaging and retail displays",
        "Develop seasonal color variations for product launches",
        "Create brand guidelines for future marketing campaigns",
        "Implement personalization based on color preferences"
      ],
      
      testimonial: {
        quote: "The new website perfectly captures our brand's essence. Customers constantly tell us how calming and trustworthy our site feels. More importantly, our sales have increased dramatically.",
        author: "Sarah Mitchell",
        role: "Founder, Bloom Botanicals",
        details: "The collaboration was seamless and the results exceeded our expectations. The color strategy has become central to our entire brand identity."
      }
    },
    {
      id: "azure-consulting", 
      title: "Azure Consulting",
      category: "Professional Services",
      colors: ["#4a90e2", "#77cebb", "#f8f9fa"],
      description: "Professional consulting firm using trust-building blues with mint accents",
      features: ["Service showcase", "Team profiles", "Client testimonials"],
      results: "3x increase in consultation bookings, improved brand perception",
      duration: "6 weeks",
      team: "Lead Designer, Content Strategist, Developer",
      platforms: "Desktop, Mobile",
      
      overview: "Azure Consulting needed to establish credibility and differentiate themselves in the competitive business consulting space through strategic color psychology and professional design.",
      
      problemStatement: "How might we create a digital presence that immediately communicates expertise and trustworthiness while standing out from generic corporate websites?",
      
      challenge: "Azure Consulting struggled with credibility issues as a new firm in a competitive market. Their website looked generic and failed to convey expertise or inspire confidence in potential clients.",
      
      solution: "We used strategic blues (#4a90e2) to build trust and professionalism, with mint teal accents (#77cebb) to add approachability and freshness. Clean layouts and ample white space reinforced their organized, methodical approach to consulting.",
      
      impact: [
        { metric: "Consultation Bookings", value: "3x", description: "Tripled lead generation", icon: "TrendingUp" },
        { metric: "Client Inquiries", value: "+180%", description: "More qualified prospects", icon: "Users" },
        { metric: "Brand Recognition", value: "+95%", description: "Increased market awareness", icon: "Target" }
      ],
      
      testimonial: {
        quote: "Our new website positions us as the premium choice in our market. The professional design speaks to our expertise before we even say a word.",
        author: "David Chen", 
        role: "Managing Partner, Azure Consulting"
      }
    },
    {
      id: "sunset-cafe",
      title: "Sunset Cafe", 
      category: "Restaurant",
      colors: ["#fee1a3", "#ff6b6b", "#c1a5b4"],
      description: "Cozy restaurant using warm, appetite-enhancing colors to create inviting atmosphere",
      features: ["Menu display", "Online reservations", "Event bookings"],
      results: "25% increase in online reservations, higher customer engagement",
      duration: "4 weeks",
      team: "Designer, Food Photographer, Developer",
      platforms: "Desktop, Mobile, Tablet",
      
      overview: "Sunset Cafe needed to translate their warm, welcoming physical atmosphere into a digital experience that would drive online reservations and capture their cozy dining ambiance.",
      
      challenge: "Sunset Cafe's previous website failed to convey the warm, welcoming atmosphere of their physical location. Online reservations were low, and the site didn't stimulate appetite or excitement about dining there.",
      
      solution: "We created a warm, appetite-stimulating palette using creamy apricot (#fee1a3) as the primary color to evoke comfort and appetite, coral (#ff6b6b) for energy and excitement, and soft mauve (#c1a5b4) for sophistication and warmth.",
      
      impact: [
        { metric: "Online Reservations", value: "+25%", description: "More bookings through website", icon: "TrendingUp" },
        { metric: "Menu Views", value: "+89%", description: "Increased food interest", icon: "Eye" },
        { metric: "Event Bookings", value: "+45%", description: "Private dining growth", icon: "Users" }
      ],
      
      testimonial: {
        quote: "The website now matches the cozy feeling of our restaurant. We've seen a significant increase in reservations and event bookings.",
        author: "Maria Rodriguez",
        role: "Owner, Sunset Cafe"
      }
    }
  ];

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case "TrendingUp": return TrendingUp;
      case "Clock": return Clock;
      case "CheckCircle": return CheckCircle;
      case "Heart": return Heart;
      case "MousePointer": return MousePointer;
      case "Eye": return Eye;
      case "Users": return Users;
      case "Target": return Target;
      default: return TrendingUp;
    }
  };

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">{/* Changed background */}
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/portfolio">
            <Button variant="ghost" className="mb-6 text-mint-teal hover:text-mint-teal-dark">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="secondary" className="bg-mint-teal/10 text-mint-teal border-mint-teal/20">
                  {project.category}
                </Badge>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>{project.team}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {project.overview || project.description}
              </p>
              
              {project.problemStatement && (
                <div className="bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5 p-6 rounded-xl border-l-4 border-mint-teal">
                  <h3 className="font-semibold text-gray-900 mb-2">Design Challenge</h3>
                  <p className="text-gray-700 italic">"{project.problemStatement}"</p>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Project Details</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <span className="ml-2 font-medium">{project.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Team:</span>
                      <span className="ml-2 font-medium">{project.team}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Platforms:</span>
                      <span className="ml-2 font-medium">{project.platforms}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Color Palette</h4>
                    <div className="flex space-x-2 mb-3">
                      {project.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-lg border-2 border-white shadow-md"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      {project.colorStrategy && Object.entries(project.colorStrategy).map(([key, colorInfo]) => (
                        <div key={key} className="flex items-center space-x-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: colorInfo.color }}
                          />
                          <span className="font-medium">{colorInfo.name}:</span>
                          <span>{colorInfo.psychology}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Color Strategy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every color choice was strategically selected based on psychological impact and user research insights.
            </p>
          </div>
          
          <div className="h-64 rounded-2xl overflow-hidden shadow-xl mb-8">
            <div className="h-full flex">
              {project.colors.map((color, index) => (
                <div
                  key={index}
                  className="flex-1 relative group cursor-pointer transition-all duration-500 hover:flex-grow"
                  style={{ backgroundColor: color }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-mono text-lg opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                      {color}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {project.colorStrategy && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(project.colorStrategy).map(([key, colorInfo]) => (
                <Card key={key} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div 
                        className="w-8 h-8 rounded-lg"
                        style={{ backgroundColor: colorInfo.color }}
                      />
                      <h3 className="font-semibold text-gray-900">{colorInfo.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{colorInfo.psychology}</p>
                    <div className="text-xs text-gray-500">
                      <strong>Usage:</strong> {colorInfo.usage}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* User Research & Personas */}
      {project.userPersonas && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">User Research</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Understanding our users' motivations and pain points guided every design decision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.userPersonas.map((persona, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{persona.name}</h3>
                    <p className="text-mint-teal font-medium mb-4">Age: {persona.age}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Target className="h-4 w-4 mr-2 text-mint-teal" />
                          Goals
                        </h4>
                        <p className="text-sm text-gray-600">{persona.goals}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-soft-mauve" />
                          Pain Points
                        </h4>
                        <p className="text-sm text-gray-600">{persona.painPoints}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <MousePointer className="h-4 w-4 mr-2 text-creamy-apricot" />
                          Behavior
                        </h4>
                        <p className="text-sm text-gray-600">{persona.behavior}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design Process */}
      {project.designProcess && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Design Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A structured approach ensuring user needs drive every design decision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.designProcess.map((phase, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-mint-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardContent className="p-6 pt-8">
                    <h3 className="font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                    <p className="text-sm text-mint-teal font-medium mb-3">{phase.duration}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-gray-700 mb-2">Activities:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-mint-teal rounded-full"></div>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="text-xs font-medium text-gray-700 mb-1">Key Insight:</h4>
                      <p className="text-xs text-gray-600 italic">"{phase.insights}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge & Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-6 w-6 text-mint-teal mr-3" />
                <h2 className="text-2xl font-serif font-bold text-gray-900">The Challenge</h2>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Lightbulb className="h-6 w-6 text-mint-teal mr-3" />
                <h2 className="text-2xl font-serif font-bold text-gray-900">Our Solution</h2>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      {project.keyInsights && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Key Insights</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Research-backed insights that shaped our design decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.keyInsights.map((insight, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-mint-teal/5 to-soft-mauve/5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-mint-teal text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{insight}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-mint-teal mr-3" />
              <h2 className="text-3xl font-serif font-bold text-gray-900">Measurable Impact</h2>
            </div>
            <p className="text-gray-600 text-lg">
              Strategic color choices delivered tangible business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.impact.map((result, index) => {
              const IconComponent = getIcon(result.icon || "TrendingUp");
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-mint-teal/10 rounded-full flex items-center justify-center group-hover:bg-mint-teal/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-mint-teal" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-mint-teal mb-2">
                      {result.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">
                      {result.metric}
                    </div>
                    <div className="text-gray-600">
                      {result.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lessons Learned & Next Steps */}
      {(project.lessons || project.nextSteps) && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {project.lessons && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                    <Lightbulb className="h-6 w-6 text-mint-teal mr-3" />
                    Lessons Learned
                  </h2>
                  <div className="space-y-4">
                    {project.lessons.map((lesson, index) => (
                      <Card key={index} className="border-0 shadow-md">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-mint-teal mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700">{lesson}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              
              {project.nextSteps && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                    <Target className="h-6 w-6 text-mint-teal mr-3" />
                    Next Steps
                  </h2>
                  <div className="space-y-4">
                    {project.nextSteps.map((step, index) => (
                      <Card key={index} className="border-0 shadow-md">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-mint-teal text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-gray-700">{step}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-mint-teal/5 to-soft-mauve/5">
            <CardContent className="p-12 text-center">
              <blockquote className="text-2xl font-serif text-gray-900 mb-8 leading-relaxed">
                "{project.testimonial.quote}"
              </blockquote>
              {project.testimonial.details && (
                <p className="text-gray-600 mb-6 italic">
                  {project.testimonial.details}
                </p>
              )}
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
                  <div className="text-gray-600">{project.testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-mint-teal to-mint-teal-dark text-white">{/* Enhanced CTA styling */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Ready for similar results?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a website that delivers measurable impact for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-mint-teal hover:bg-gray-50">
              Start Your Project
            </Button>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-mint-teal">
                View More Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;