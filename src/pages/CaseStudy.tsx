import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, TrendingUp, Users, Target, Clock, Palette, Eye, MousePointer, Heart, Lightbulb, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useSanityDocument } from "../hooks/useSanity";
import { caseStudyBySlugQuery } from "../lib/sanity-queries";
import { CaseStudy as CaseStudyType } from "../types/sanity";
import { useMemo } from "react";

const CaseStudy = () => {
  const { projectId } = useParams();
  

  
  // Memoize the parameters to prevent infinite re-renders
  const params = useMemo(() => {
    return projectId ? { slug: projectId } : undefined;
  }, [projectId]);
  
  // Only fetch data if we have a valid projectId
  const { data: caseStudy, loading, error } = useSanityDocument<CaseStudyType>(
    projectId ? caseStudyBySlugQuery(projectId) : "",
    params
  );

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

  if (!projectId) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading case study...</p>
        </div>
      </div>
    );
  }

  if (error || !caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen   bg-gray-50">{/* Changed background */}
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <Button variant="ghost" className="mb-6 text-mint-teal hover:text-mint-teal-dark">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="secondary" className="bg-mint-teal/10 text-mint-teal border-mint-teal/20">
                  {caseStudy.category}
                </Badge>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{caseStudy.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>{caseStudy.team}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {caseStudy.overview}
              </p>
              
              {caseStudy.problemStatement && (
                <div className="bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5 p-6 rounded-xl border-l-4 border-mint-teal">
                  <h3 className="font-semibold text-gray-900 mb-2">Design Challenge</h3>
                  <p className="text-gray-700 italic">"{caseStudy.problemStatement}"</p>
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
                      <span className="ml-2 font-medium">{caseStudy.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Team:</span>
                      <span className="ml-2 font-medium">{caseStudy.team}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Platforms:</span>
                      <span className="ml-2 font-medium">{caseStudy.platforms}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Color Palette</h4>
                    <div className="flex space-x-2 mb-3">
                      {caseStudy.colorPalette && caseStudy.colorPalette.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-lg border-2 border-white shadow-md"
                          style={{ backgroundColor: color.color }}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      {caseStudy.colorPalette && caseStudy.colorPalette.map((color, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: color.color }}
                          />
                          <span className="font-medium">{color.name}:</span>
                          <span>{color.psychology}</span>
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
              {caseStudy.colorPalette && caseStudy.colorPalette.map((color, index) => (
                <div
                  key={index}
                  className="flex-1 relative group cursor-pointer transition-all duration-500 hover:flex-grow"
                  style={{ backgroundColor: color.color }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-mono text-lg opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                      {color.color}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {caseStudy.colorPalette && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.colorPalette.map((color, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div 
                        className="w-8 h-8 rounded-lg"
                        style={{ backgroundColor: color.color }}
                      />
                      <h3 className="font-semibold text-gray-900">{color.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{color.psychology}</p>
                    <div className="text-xs text-gray-500">
                      <strong>Usage:</strong> {color.usage}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* User Research & Personas */}
      {caseStudy.userPersonas && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">User Research</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Understanding our users' motivations and pain points guided every design decision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.userPersonas.map((persona, index) => (
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
      {caseStudy.designProcess && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Design Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A structured approach ensuring user needs drive every design decision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.designProcess.map((phase, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-mint-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardContent className="p-6 pt-8">
                    <h3 className="font-semibold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-sm text-mint-teal font-medium mb-3">{phase.step}</p>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-600">{phase.description}</p>
                    </div>
                    
                    {phase.icon && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 italic">{phase.icon}</div>
                      </div>
                    )}
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
                  {caseStudy.challenge}
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
                  {caseStudy.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      {caseStudy.lessonsLearned && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Key Insights</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Research-backed insights that shaped our design decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.lessonsLearned.map((insight, index) => (
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

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-700 leading-relaxed text-lg">
              {caseStudy.results}
            </p>
          </div>
        </div>
      </section>

      {/* Lessons Learned & Next Steps */}
      {(caseStudy.lessonsLearned || caseStudy.nextSteps) && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {caseStudy.lessonsLearned && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                    <Lightbulb className="h-6 w-6 text-mint-teal mr-3" />
                    Lessons Learned
                  </h2>
                  <div className="space-y-4">
                    {caseStudy.lessonsLearned.map((lesson, index) => (
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
              
              {caseStudy.nextSteps && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                    <Target className="h-6 w-6 text-mint-teal mr-3" />
                    Next Steps
                  </h2>
                  <div className="space-y-4">
                    {caseStudy.nextSteps.map((step, index) => (
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
                "{caseStudy.clientFeedback.quote}"
              </blockquote>
              {caseStudy.clientFeedback.details && (
                <p className="text-gray-600 mb-6 italic">
                  {caseStudy.clientFeedback.details}
                </p>
              )}
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <div className="font-semibold text-gray-900">{caseStudy.clientFeedback.author}</div>
                  <div className="text-gray-600">{caseStudy.clientFeedback.role}</div>
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
            <Link to="/">
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