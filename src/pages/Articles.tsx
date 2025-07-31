import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      id: "color-psychology-web-design",
      title: "What's Slowing You Down?",
      excerpt: "Small inefficiencies compound over time, creating bigger problems that drain your energy and slow your progress.",
      date: "04 Jul 2024",
      readTime: "5 min read",
      category: "Productivity",
      author: "HummingBird Team",
      featured: true
    },
    {
      id: "improve-user-work",
      title: "Ways to Improve How You Work", 
      excerpt: "Simple adjustments to your daily workflow can dramatically improve both your productivity and your customers' experience.",
      date: "28 Jun 2024",
      readTime: "5 min read",
      category: "Workflow",
      author: "HummingBird Team",
      featured: false
    },
    {
      id: "truth-about-admin",
      title: "Truth That Help You Do Less Admin",
      excerpt: "Administrative tasks don't have to consume your day. With the right tools and mindset, you can reduce admin work without adding complexity.",
      date: "25 Jun 2024",
      readTime: "5 min read",
      category: "Automation",
      author: "HummingBird Team",
      featured: false
    },
    {
      id: "improve-offers",
      title: "Start Small, Improve Often",
      excerpt: "Sustainable improvement comes from consistent small changes, not dramatic overhauls.",
      date: "24 Jun 2024",
      readTime: "3 min read",
      category: "Growth",
      author: "HummingBird Team",
      featured: false
    },
    {
      id: "business-essentials",
      title: "Which Business Essentials Run",
      excerpt: "Not all business activities are created equal. Understanding which essentials actually move your business forward helps you focus your energy where it matters most.",
      date: "31 mai 2024",
      readTime: "3 min read",
      category: "Business Strategy",
      author: "HummingBird Team",
      featured: false
    },
    {
      id: "progress-not-perfection",
      title: "Progress, Not Perfection",
      excerpt: "Perfectionism is the enemy of progress. Learning to start small, focus on what matters, and fix things as you go is the key to sustainable success.",
      date: "05 mai 2024",
      readTime: "5 min read",
      category: "Mindset",
      author: "HummingBird Team",
      featured: false
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Productivity": "from-mint-teal to-mint-teal/80",
      "Workflow": "from-soft-mauve to-soft-mauve/80", 
      "Automation": "from-creamy-apricot to-creamy-apricot/80",
      "Growth": "from-mint-teal to-soft-mauve",
      "Business Strategy": "from-soft-mauve to-creamy-apricot",
      "Mindset": "from-creamy-apricot to-mint-teal"
    };
    return colors[category as keyof typeof colors] || "from-mint-teal to-soft-mauve";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-mint-teal/10 via-soft-mauve/10 to-creamy-apricot/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-mint-teal to-soft-mauve rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Learning Space
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Welcome to our learning space. Read through practical articles on improving customer 
              journeys, websites, and the way things run behind the scenes. Start at 1 and end with 6. 
              It's a path to greater success.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Featured Article</h2>
            <Link to={`/blog/${featuredArticle.id}`}>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className={`bg-gradient-to-r ${getCategoryColor(featuredArticle.category)} text-white px-4 py-2 rounded-full font-medium`}>
                          {featuredArticle.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {featuredArticle.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {featuredArticle.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 group-hover:text-mint-teal transition-colors">
                        {featuredArticle.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {featuredArticle.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="h-4 w-4 mr-2" />
                          {featuredArticle.author}
                        </div>
                        <div className="flex items-center text-mint-teal group-hover:text-mint-teal/80 transition-colors">
                          <span className="mr-2 font-medium">Read Article</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-mint-teal/20 to-soft-mauve/20 rounded-2xl flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-mint-teal to-soft-mauve rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Link key={article.id} to={`/blog/${article.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-card h-full">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-mint-teal/20 to-soft-mauve/20 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-mint-teal to-soft-mauve flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{index + 2}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                      <span className={`bg-gradient-to-r ${getCategoryColor(article.category)} text-white px-3 py-1 rounded-full font-medium text-xs`}>
                        {article.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-mint-teal transition-colors flex-1">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <User className="h-3 w-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center text-mint-teal group-hover:text-mint-teal/80 transition-colors">
                        <span className="text-sm font-medium mr-1">Read</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5 rounded-2xl p-12">
          <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
            Ready to Apply These Insights?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to implement these strategies in your website and business processes. 
            Get personalized guidance tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-mint-teal to-soft-mauve text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Get Personalized Help
            </Link>
            <Link 
              to="/services" 
              className="inline-block border-2 border-mint-teal text-mint-teal px-8 py-4 rounded-xl font-semibold hover:bg-mint-teal hover:text-white transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;