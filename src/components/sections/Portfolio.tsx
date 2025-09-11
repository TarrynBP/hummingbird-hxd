import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: "telecoms-x",
      title: "Telecoms X",
      description: "Effortless web signup and upgrades",
      color: "mint-teal",
      keyFeatures: [
        "Streamlined signup process",
        "Intuitive upgrade flow",
        "Mobile-first design",
      ],
      projectedResults: [
        "40% faster signup completion",
        "25% increase in upgrades",
        "Improved user satisfaction",
      ],
    },
    {
      id: "banking-x",
      title: "Banking X",
      description: "Redesigned client account experience",
      color: "pink-500",
      keyFeatures: [
        "Simplified account management",
        "Enhanced security features",
        "Personalized dashboard",
      ],
      projectedResults: [
        "50% reduction in support calls",
        "30% increase in engagement",
        "Higher customer retention",
      ],
    },
    {
      id: "enrique-fourie",
      title: "Enrique Fourie",
      description: "Elegant website for hair and makeup artistry",
      color: "yellow-500",
      keyFeatures: [
        "Portfolio showcase",
        "Booking system integration",
        "Brand storytelling",
      ],
      projectedResults: [
        "60% increase in bookings",
        "Professional brand presence",
        "Enhanced client experience",
      ],
    },
    {
      id: "yoursashwindows",
      title: "Yoursashwindows.com",
      description: "Modern website for sash window restoration",
      color: "purple-500",
      keyFeatures: [
        "Service showcase",
        "Quote request system",
        "Before/after galleries",
      ],
      projectedResults: [
        "45% more quote requests",
        "Improved local SEO",
        "Professional credibility",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help small businesses work smarter and show up better online.
            From websites to workflows to AI tools, we make things simpler for
            you and smoother for your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <Link key={index} to={`/case-study/${item.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-3 h-3 rounded-full mr-3 ${
                        item.color === "mint-teal"
                          ? "bg-mint-teal"
                          : item.color === "pink-500"
                          ? "bg-pink-500"
                          : item.color === "yellow-500"
                          ? "bg-yellow-500"
                          : "bg-purple-500"
                      }`}
                    ></div>
                    <CardTitle className="text-lg font-serif font-semibold">
                      {item.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Features
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {item.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-mint-teal rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Projected Results
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {item.projectedResults.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-mint-teal rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
