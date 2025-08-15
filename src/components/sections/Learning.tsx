import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useSanityDocuments } from "../../hooks/useSanity";
import { articlesQuery } from "../../lib/sanity-queries";
import { Article } from "../../types/sanity";
import { ArrowRight } from "lucide-react";

const Learning = () => {
  const { data: articles, loading, error } = useSanityDocuments<Article>(articlesQuery);



  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  // Helper function to estimate read time
  const estimateReadTime = (body: any[]) => {
    if (!body || body.length === 0) return "3 min read";
    
    // Count words in the body (rough estimation)
    const text = JSON.stringify(body);
    const wordCount = text.split(' ').length;
    const readTime = Math.ceil(wordCount / 200); // Average reading speed
    return `${readTime} min read`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Learning Space
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In this crash course on all things human experience design, you’ll find practical steps to improve 
            customer journeys, websites, and the way things run behind the scenes. 
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2">Loading articles...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 max-w-2xl mx-auto">
            <h3 className="text-red-800 font-medium">Error loading articles</h3>
            <p className="text-red-600 mt-1">{error}</p>
          </div>
        )}

        {!loading && !error && (!articles || articles.length === 0) && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 max-w-2xl mx-auto">
            <h3 className="text-yellow-800 font-medium">No articles found</h3>
            <p className="text-yellow-600 mt-1">No articles found in Sanity. Please create some content.</p>
          </div>
        )}

                 {!loading && !error && articles && articles.length > 0 && (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {articles.map((article, index) => (
               <Link key={article._id} to={`/blog/${article.slug.current}`}>
                 <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-card">
                   <div className="relative">
                                           <div className="h-48 bg-gradient-to-br from-mint-teal/20 to-soft-mauve/20 flex items-center justify-center overflow-hidden">
                        {/* Lesson Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                          Lesson {index + 1}
                        </div>
                        
                        {/* Main Image */}
                        {article.mainImage ? (
                          <img 
                            src={article.mainImage} 
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-mint-teal/10 to-soft-mauve/10 flex items-center justify-center">
                            <span className="text-muted-foreground text-sm">No image</span>
                          </div>
                        )}
                      </div>
                   </div>
                                       <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-mint-teal transition-colors">
                          {article.title}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {estimateReadTime(article.body)}
                        </span>
                      </div>
                                             <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                         {article.description || "No description available"}
                       </p>
                      
                      {/* Continue CTA */}
                      <div className="flex justify-end">
                        <span className="text-mint-teal text-sm font-medium group-hover:text-mint-teal-dark transition-colors flex items-center">
                          Continue
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </span>
                      </div>
                    </CardContent>
                 </Card>
               </Link>
             ))}
           </div>
         )}
      </div>
    </section>
  );
};

export default Learning;