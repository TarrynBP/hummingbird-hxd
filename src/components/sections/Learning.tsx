import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Learning = () => {
  const articles = [
    {
      id: "color-psychology-web-design",
      date: "04 Jul 2024",
      readTime: "5 min read",
      title: "What's Slowing You Down?",
      description: "How to spot small problems before they start costing you time and energy.",
      image: "/placeholder.svg"
    },
    {
      id: "improve-user-work",
      date: "28 Jun 2024", 
      readTime: "5 min read",
      title: "Ways to Improve How You Work",
      description: "A few easy wins to help you save time, stay organized, and set up customers better.",
      image: "/placeholder.svg"
    },
    {
      id: "truth-about-admin",
      date: "25 Jun 2024",
      readTime: "5 min read", 
      title: "Truth That Help You Do Less Admin",
      description: "Everyday tools that take small tasks off your plate without making life complicated.",
      image: "/placeholder.svg"
    },
    {
      id: "improve-offers",
      date: "24 Jun 2024",
      readTime: "3 min read",
      title: "Start Small, Improve Often",
      description: "Why tiny changes over time beat one big overhaul and move from good to great.",
      image: "/placeholder.svg"
    },
    {
      id: "business-essentials",
      date: "31 mai 2024",
      readTime: "3 min read", 
      title: "Which Business Essentials Run",
      description: "The simple shifts that free up your time and improve how your team works.",
      image: "/placeholder.svg"
    },
    {
      id: "progress-not-perfection",
      date: "05 mai 2024",
      readTime: "5 min read",
      title: "Progress, Not Perfection",
      description: "Why it's okay to start small, focus on progress, and fix what matters most right now.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Learning Space
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Welcome to our learning space. Read through practical articles on improving customer 
            journeys, websites, and the way things run behind the scenes.
            Start at 1 and end with 6. It's a path to greater success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link key={article.id} to={`/blog/${article.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-card">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-mint-teal/20 to-soft-mauve/20 flex items-center justify-center">
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-mint-teal flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{index + 1}</span>
                    </div>
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3 text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-mint-teal transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;