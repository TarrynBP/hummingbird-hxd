import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Monitor,
  Users,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCaseStudy } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";

const CaseStudy = () => {
  const { id } = useParams();
  const { data: caseStudy, isLoading, error } = useCaseStudy(id || "");

  // Fallback case study data if Sanity data is not available
  const fallbackCaseStudy = {
    "telecoms-x": {
      title: "Telecoms X",
      description:
        "Telecoms X approached us to redesign their VoIP signup and upgrade flow with a focus on clarity, trust, and ease. As a digital-first telecom provider targeting small businesses, they needed a flow that felt effortless, professional, and reassuring, even without live support.",
      challenge:
        "How might we design a self-serve signup flow that builds user trust, feels human, and makes small businesses upgrade with confidence?",
      projectDetails: {
        location: "Z-Africa",
        year: "2024",
        team: "UX/UI Designer",
        partners: "Swishco",
      },
      colorPalette: [
        {
          color: "#77cebb",
          name: "Primary: Sky Blue",
          description: "trust, open, reliable",
        },
        {
          color: "#c1a5b4",
          name: "Secondary: Pink",
          description: "energetic, playful",
        },
        {
          color: "#2c2c2c",
          name: "Accent: Black",
          description: "bold, modern",
        },
      ],
      userResearch: {
        description:
          "Understanding user goals, motivations, and pain points guided every design decision.",
        personas: [
          {
            name: "Micro Business Owner: David",
            age: "Age: 30-45",
            goals: ["Set up VoIP quickly without tech support"],
            motivations: ["Save time, reduce costs, look professional"],
            painPoints: ["Complex setup, hidden fees, unreliable service"],
          },
          {
            name: "Office Manager: Priya",
            age: "Age: 35-50",
            goals: ["Manage multiple lines easily"],
            motivations: ["Efficiency, control, peace of mind"],
            painPoints: [
              "Confusing invoices, difficult upgrades, poor support",
            ],
          },
        ],
      },
      designProcess: {
        description:
          "A structured approach ensuring every decision leads to a better design solution.",
        steps: [
          {
            number: "1",
            title: "Research & Discovery",
            items: [
              "User interviews",
              "Competitor analysis",
              "Stakeholder workshops",
              "Requirements gathering",
            ],
          },
          {
            number: "2",
            title: "Strategy & Ideation",
            items: [
              "User flows",
              "Wireframing",
              "Information architecture",
              "Content strategy",
              "Concept development",
            ],
          },
          {
            number: "3",
            title: "Design & Build",
            items: [
              "UI design",
              "Prototyping",
              "Usability testing",
              "Development hand-off",
              "Launch & iteration",
            ],
          },
        ],
      },
      challengeSolution: {
        challenge:
          "Telecoms X's existing flow was functional but uninspiring. Users dropped off during the legal and payment steps, often due to unclear copy, lack of reassurance, or unnecessary friction. The product itself was strong, but the sign-up experience didn't reflect that.",
        solution:
          "We designed a guided 4-step sign-up journey that made complex tasks feel simple. From address verification to electronic signature, each screen included helpful microscopy, consistent formatting, and always visible plan details. Color narratives drew the eye to the next active progress-markers, showed users exactly where they were and how close they were to completion.",
      },
      keyInsights: [
        "Users want to feel secure and confident online.",
        "Legal terms are more likely to be accepted with clear context.",
        "Transparent plan summaries reduce abandonment.",
        "Customers expect clear debit options and payment processes.",
        "Reassuring language ('You're nearly done', 'Your choice is saved') gives users a sense of control and reassurance.",
      ],
      measurableImpact: {
        description:
          "While not formally tracked, the redesigned flow was projected to improve clarity, reduce friction and increase user confidence.",
        metrics: [
          {
            percentage: "+25%",
            title: "Plan Clarity",
            description: "Plan details staying visible improves comparison.",
          },
          {
            percentage: "+25%",
            title: "Upgrade Completion",
            description: "Step-by-step cues aim to reduce user drop-offs.",
          },
          {
            percentage: "+30%",
            title: "User Confidence",
            description:
              "Friendly copy aims to make users feel more supported.",
          },
          {
            percentage: "-35%",
            title: "Payment Drop-off",
            description: "Simplified process reduces payment related exits.",
          },
          {
            percentage: "+28%",
            title: "Mobile Completion",
            description: "Mobile-first design improves flow completion.",
          },
          {
            percentage: "-25%",
            title: "Time to Complete",
            description: "Faster, streamlined flow based on user testing.",
          },
        ],
      },
    },
  };

  // Transform Sanity data to match expected structure or use fallback
  const transformedData = caseStudy
    ? {
        title: caseStudy.title,
        description: caseStudy.description,
        challenge: caseStudy.challenge,
        projectDetails: {
          location: caseStudy.platforms || "Remote",
          year: "2024",
          team: caseStudy.team || "UX/UI Designer",
          partners: "Hummingbird HXD",
        },
        colorPalette: caseStudy.colorPalette || [],
        userResearch: {
          description:
            "Understanding user goals, motivations, and pain points guided every design decision.",
          personas: caseStudy.userPersonas || [],
        },
        designProcess: {
          description:
            "A structured approach ensuring every decision leads to a better design solution.",
          steps: caseStudy.designProcess || [],
        },
        keyInsights: caseStudy.keyInsights || [],
        measurableImpact: {
          description:
            "While not formally tracked, the redesigned flow was projected to improve clarity, reduce friction and increase user confidence.",
          metrics: caseStudy.measurableImpact || [],
        },
        results: caseStudy.results || "Results coming soon",
        solution: caseStudy.solution || caseStudy.description,
        challengeSolution: {
          challenge: caseStudy.challenge || "Challenge details coming soon.",
          solution:
            caseStudy.solution ||
            caseStudy.description ||
            "Solution details coming soon.",
        },
      }
    : fallbackCaseStudy[id as keyof typeof fallbackCaseStudy];

  // If no data found, show not found message
  if (!isLoading && !transformedData) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Case Study Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mb-4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-48 mb-8 mx-auto"></div>
            <div className="h-10 bg-gray-200 rounded w-32 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!transformedData) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Case Study Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-mint-teal hover:bg-mint-teal-dark text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/">
          <Button
            variant="ghost"
            className="text-mint-teal hover:text-mint-teal-dark"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                {transformedData.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {transformedData.description}
              </p>

              <Card className="bg-mint-teal/5 border-mint-teal/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                    Design Challenge
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {transformedData.challenge}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
                    Project Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Location:</span>{" "}
                      {transformedData.projectDetails.location}
                    </div>
                    <div>
                      <span className="font-medium">Year:</span>{" "}
                      {transformedData.projectDetails.year}
                    </div>
                    <div>
                      <span className="font-medium">Team:</span>{" "}
                      {transformedData.projectDetails.team}
                    </div>
                    <div>
                      <span className="font-medium">Partners:</span>{" "}
                      {transformedData.projectDetails.partners}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
                    Color Palette
                  </h3>
                  <div className="space-y-3">
                    {transformedData.colorPalette.map((palette, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className="w-8 h-8 rounded border"
                          style={{ backgroundColor: palette.color }}
                        ></div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {palette.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {palette.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Visual */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <Monitor className="h-16 w-16 text-mint-teal mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Solution Preview
              </h3>
              <p className="text-gray-600 mb-6">
                A streamlined signup flow with clear pricing plans and intuitive
                navigation.
              </p>
              <Button className="bg-mint-teal hover:bg-mint-teal-dark text-white">
                Explore Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* User Research Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              User Research
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {transformedData.userResearch.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformedData.userResearch.personas &&
            transformedData.userResearch.personas.length > 0 ? (
              transformedData.userResearch.personas.map((persona, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                      {persona.name || "User Persona"}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {persona.age || "Age: Not specified"}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Goals:
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {(persona.goals && Array.isArray(persona.goals)
                            ? persona.goals
                            : []
                          ).map((goal, goalIndex) => (
                            <li key={goalIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-mint-teal rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Motivations:
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {(persona.motivations &&
                          Array.isArray(persona.motivations)
                            ? persona.motivations
                            : []
                          ).map((motivation, motivationIndex) => (
                            <li
                              key={motivationIndex}
                              className="flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-mint-teal rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {motivation}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Pain Points:
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {(persona.painPoints &&
                          Array.isArray(persona.painPoints)
                            ? persona.painPoints
                            : []
                          ).map((painPoint, painIndex) => (
                            <li key={painIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-mint-teal rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {painPoint}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-8">
                <p className="text-gray-600">
                  User research data will be available soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {transformedData.designProcess.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformedData.designProcess.steps &&
            transformedData.designProcess.steps.length > 0 ? (
              transformedData.designProcess.steps.map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-mint-teal rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">
                        {step.number || index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                      {step.title || "Design Step"}
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {(step.items && Array.isArray(step.items)
                        ? step.items
                        : []
                      ).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-mint-teal rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-600">
                  Design process information will be available soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  The Challenge
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {transformedData.challengeSolution.challenge}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  Our Solution
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {transformedData.challengeSolution.solution}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Key Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-backed insights that shaped our design decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformedData.keyInsights.map((insight, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-mint-teal rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{insight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {transformedData.measurableImpact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformedData.measurableImpact.metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-mint-teal mb-2">
                    {metric.percentage}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-mint-teal/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Ready for similar results?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's create a website that delivers measurable impact for your
            business.
          </p>
          <Button
            size="lg"
            className="bg-mint-teal hover:bg-mint-teal-dark text-white"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
