import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const { blogId } = useParams();

  const blogPosts = {
    "color-psychology-web-design": {
      title: "What's Slowing You Down?",
      date: "04 Jul 2024",
      readTime: "5 min read",
      category: "Productivity",
      author: "HummingBird Team",
      excerpt: "Small inefficiencies compound over time, creating bigger problems that drain your energy and slow your progress.",
      content: `
        <div class="text-xl text-muted-foreground leading-relaxed mb-8">Small inefficiencies compound over time, creating bigger problems that drain your energy and slow your progress. Here's how to identify and eliminate them before they become major roadblocks.</div>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">The Hidden Cost of Small Problems</h2>
        <p class="text-lg leading-relaxed mb-8">Every day, small friction points accumulate in our workflows. A confusing file structure here, an unclear process there, and suddenly you're spending hours on tasks that should take minutes.</p>

        <div class="bg-gradient-to-r from-mint-teal/10 to-soft-mauve/10 border-l-4 border-mint-teal p-6 rounded-r-lg mb-8">
          <p class="text-lg font-medium text-foreground">💡 <strong>Key Insight:</strong> Most productivity issues stem from small, repeated inefficiencies rather than major problems.</p>
        </div>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">Common Productivity Killers</h2>
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
              <p class="text-lg">Disorganized digital files and folders</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-soft-mauve rounded-full mt-3"></div>
              <p class="text-lg">Unclear communication channels</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-creamy-apricot rounded-full mt-3"></div>
              <p class="text-lg">Manual processes that could be automated</p>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
              <p class="text-lg">Constantly switching between too many tools</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-soft-mauve rounded-full mt-3"></div>
              <p class="text-lg">Lack of standardized procedures</p>
            </div>
          </div>
        </div>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">The 5-Minute Rule</h2>
        <p class="text-lg leading-relaxed mb-8">If something consistently takes longer than expected, spend 5 minutes analyzing why. Often, a small upfront investment in organization or process improvement can save hours down the line.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">Quick Wins</h2>
        <p class="text-lg leading-relaxed mb-6">Start with these immediate improvements:</p>
        <div class="bg-card border rounded-lg p-6 mb-8">
          <ol class="space-y-4">
            <li class="flex items-start space-x-4">
              <span class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-mint-teal to-soft-mauve text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
              <div>
                <h4 class="font-semibold text-foreground mb-1">Create a consistent file naming convention</h4>
                <p class="text-muted-foreground">Use dates, project names, and version numbers consistently</p>
              </div>
            </li>
            <li class="flex items-start space-x-4">
              <span class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-mint-teal to-soft-mauve text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
              <div>
                <h4 class="font-semibold text-foreground mb-1">Set up email templates for common responses</h4>
                <p class="text-muted-foreground">Save time on frequently sent communications</p>
              </div>
            </li>
            <li class="flex items-start space-x-4">
              <span class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-mint-teal to-soft-mauve text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
              <div>
                <h4 class="font-semibold text-foreground mb-1">Use keyboard shortcuts for frequent actions</h4>
                <p class="text-muted-foreground">Small time savings add up throughout the day</p>
              </div>
            </li>
            <li class="flex items-start space-x-4">
              <span class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-mint-teal to-soft-mauve text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
              <div>
                <h4 class="font-semibold text-foreground mb-1">Batch similar tasks together</h4>
                <p class="text-muted-foreground">Reduce context switching and increase focus</p>
              </div>
            </li>
            <li class="flex items-start space-x-4">
              <span class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-mint-teal to-soft-mauve text-white rounded-full flex items-center justify-center text-sm font-semibold">5</span>
              <div>
                <h4 class="font-semibold text-foreground mb-1">Document processes as you do them</h4>
                <p class="text-muted-foreground">Create reusable procedures for future reference</p>
              </div>
            </li>
          </ol>
        </div>

        <div class="bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5 border border-mint-teal/20 rounded-lg p-8 mb-8">
          <p class="text-xl font-semibold text-foreground text-center">Remember: The goal isn't perfection, it's progress. Small improvements compound into significant time savings.</p>
        </div>
      `
    },
    "improve-user-work": {
      title: "Ways to Improve How You Work",
      date: "28 Jun 2024", 
      readTime: "5 min read",
      category: "Workflow",
      author: "HummingBird Team",
      excerpt: "Simple adjustments to your daily workflow can dramatically improve both your productivity and your customers' experience.",
      content: `
        <div class="text-xl text-muted-foreground leading-relaxed mb-8">Simple adjustments to your daily workflow can dramatically improve both your productivity and your customers' experience. Here are proven strategies that deliver immediate results.</div>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">Time-Saving Communication</h2>
        <p class="text-lg leading-relaxed mb-8">Clear communication prevents misunderstandings and reduces back-and-forth emails. Create templates for common scenarios and establish clear expectations upfront.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">Organization Systems</h2>
        <p class="text-lg leading-relaxed mb-6">A well-organized workspace—both physical and digital—reduces stress and increases efficiency:</p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
            <p class="text-lg">Use consistent folder structures across all projects</p>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-soft-mauve rounded-full mt-3"></div>
            <p class="text-lg">Implement a clear file naming system</p>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-creamy-apricot rounded-full mt-3"></div>
            <p class="text-lg">Keep your desktop and downloads folder clean</p>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
            <p class="text-lg">Use project management tools to track progress</p>
          </li>
        </ul>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">Customer Setup Best Practices</h2>
        <p class="text-lg leading-relaxed mb-8">The way you onboard new customers sets the tone for the entire relationship. Create a smooth process that makes them feel confident and informed from day one.</p>

        <div class="bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5 border border-mint-teal/20 rounded-lg p-8 mb-8">
          <p class="text-xl font-semibold text-foreground text-center">Small changes in how you work can create big improvements in both your efficiency and customer satisfaction.</p>
        </div>
      `
    },
    "truth-about-admin": {
      title: "Truth That Help You Do Less Admin",
      date: "25 Jun 2024",
      readTime: "5 min read",
      category: "Automation",
      author: "HummingBird Team",
      excerpt: "Administrative tasks don't have to consume your day. With the right tools and mindset, you can reduce admin work without adding complexity.",
      content: `
        <div class="text-xl text-muted-foreground leading-relaxed mb-8">Administrative tasks don't have to consume your day. With the right tools and mindset, you can reduce admin work without adding complexity to your life.</div>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">The Admin Trap</h2>
        <p class="text-lg leading-relaxed mb-8">Many people think more tools equals more efficiency. The truth is, the right tools—used consistently—are far better than many tools used sporadically.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">Everyday Tools That Actually Help</h2>
        <div class="grid gap-4 mb-8">
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
            <p class="text-lg">Calendar scheduling apps that let clients book directly</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-soft-mauve rounded-full mt-3"></div>
            <p class="text-lg">Email templates for common responses</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-creamy-apricot rounded-full mt-3"></div>
            <p class="text-lg">Automated invoice reminders</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
            <p class="text-lg">Cloud storage with automatic syncing</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-soft-mauve rounded-full mt-3"></div>
            <p class="text-lg">Password managers for secure, quick access</p>
          </div>
        </div>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">The Keep-It-Simple Approach</h2>
        <p class="text-lg leading-relaxed mb-8">The best admin solutions are often the simplest ones. Focus on tools that integrate well with what you already use and don't require a steep learning curve.</p>

        <div class="bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5 border border-mint-teal/20 rounded-lg p-8 mb-8">
          <p class="text-xl font-semibold text-foreground text-center">Less admin time means more time for the work that truly matters—and the work you actually enjoy.</p>
        </div>
      `
    },
    "improve-offers": {
      title: "Start Small, Improve Often",
      date: "24 Jun 2024",
      readTime: "3 min read",
      category: "Growth",
      author: "HummingBird Team",
      excerpt: "Sustainable improvement comes from consistent small changes, not dramatic overhauls.",
      content: `
        <div class="text-xl text-muted-foreground leading-relaxed mb-8">Sustainable improvement comes from consistent small changes, not dramatic overhauls. Here's why the incremental approach wins every time.</div>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">The Power of 1% Better</h2>
        <p class="text-lg leading-relaxed mb-8">Small improvements compound over time. A 1% improvement every day leads to being 37 times better after a year. It's mathematics, not motivation.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">Why Big Changes Fail</h2>
        <p class="text-lg leading-relaxed mb-8">Major overhauls are disruptive, overwhelming, and often unsustainable. They require perfect conditions and heroic effort—neither of which are reliable long-term.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">The Small Change Strategy</h2>
        <div class="space-y-3 mb-8">
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
            <p class="text-lg">Pick one thing to improve each week</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-soft-mauve rounded-full mt-3"></div>
            <p class="text-lg">Make the change so small it feels almost silly</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-creamy-apricot rounded-full mt-3"></div>
            <p class="text-lg">Focus on consistency over intensity</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
            <p class="text-lg">Celebrate small wins to build momentum</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5 border border-mint-teal/20 rounded-lg p-8 mb-8">
          <p class="text-xl font-semibold text-foreground text-center">Progress isn't about perfection—it's about direction. Small steps in the right direction beat standing still while planning the perfect leap.</p>
        </div>
      `
    },
    "business-essentials": {
      title: "Which Business Essentials Run",
      date: "31 mai 2024",
      readTime: "3 min read",
      category: "Business Strategy",
      author: "HummingBird Team",
      excerpt: "Not all business activities are created equal. Understanding which essentials actually move your business forward helps you focus your energy where it matters most.",
      content: `
        <div class="text-xl text-muted-foreground leading-relaxed mb-8">Not all business activities are created equal. Understanding which essentials actually move your business forward helps you focus your energy where it matters most.</div>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">Revenue-Generating Activities</h2>
        <p class="text-lg leading-relaxed mb-8">These are the activities that directly contribute to your bottom line. Everything else should support these core functions.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">The Essential Few</h2>
        <div class="space-y-3 mb-8">
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
            <p class="text-lg">Customer acquisition and retention</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-soft-mauve rounded-full mt-3"></div>
            <p class="text-lg">Product or service delivery</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-creamy-apricot rounded-full mt-3"></div>
            <p class="text-lg">Financial management and planning</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
            <p class="text-lg">Team communication and coordination</p>
          </div>
        </div>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">Simple Shifts, Big Impact</h2>
        <p class="text-lg leading-relaxed mb-8">Often, small changes to how your team works together can free up significant time and improve outcomes across all your essential functions.</p>

        <div class="bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5 border border-mint-teal/20 rounded-lg p-8 mb-8">
          <p class="text-xl font-semibold text-foreground text-center">Focus on the essentials, and let everything else serve those priorities.</p>
        </div>
      `
    },
    "progress-not-perfection": {
      title: "Progress, Not Perfection",
      date: "05 mai 2024",
      readTime: "5 min read",
      category: "Mindset",
      author: "HummingBird Team",
      excerpt: "Perfectionism is the enemy of progress. Learning to start small, focus on what matters, and fix things as you go is the key to sustainable success.",
      content: `
        <div class="text-xl text-muted-foreground leading-relaxed mb-8">Perfectionism is the enemy of progress. Learning to start small, focus on what matters, and fix things as you go is the key to sustainable success.</div>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">The Perfectionism Trap</h2>
        <p class="text-lg leading-relaxed mb-8">Waiting for the perfect moment, perfect plan, or perfect conditions means never starting. Perfectionism masquerades as high standards but often results in paralysis.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">The Progress Mindset</h2>
        <div class="space-y-3 mb-8">
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
            <p class="text-lg">Done is better than perfect</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-soft-mauve rounded-full mt-3"></div>
            <p class="text-lg">Feedback improves what planning alone cannot</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-creamy-apricot rounded-full mt-3"></div>
            <p class="text-lg">Small actions create momentum</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-mint-teal rounded-full mt-3"></div>
            <p class="text-lg">Iteration beats ideation</p>
          </div>
        </div>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">What Matters Most Right Now</h2>
        <p class="text-lg leading-relaxed mb-8">Instead of trying to fix everything, identify the one thing that would make the biggest difference and focus there. You can always improve other areas later.</p>

        <h2 class="text-3xl font-serif font-bold text-foreground mb-6 mt-12">Start Where You Are</h2>
        <p class="text-lg leading-relaxed mb-8">You don't need perfect conditions to begin. You need clarity on the next small step and the willingness to take it.</p>

        <div class="bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5 border border-mint-teal/20 rounded-lg p-8 mb-8">
          <p class="text-xl font-semibold text-foreground text-center">Progress compounds. Perfection procrastinates. Choose progress.</p>
        </div>
      `
    }
  };

  const post = blogPosts[blogId as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <Link to="/" className="text-mint-teal hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mint-teal/10 via-soft-mauve/10 to-creamy-apricot/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            to="/" 
            className="inline-flex items-center text-mint-teal hover:text-mint-teal/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="mb-8">
            <div className="flex items-center flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <span className="bg-gradient-to-r from-mint-teal to-soft-mauve text-white px-4 py-2 rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BookOpen className="h-5 w-5 text-mint-teal" />
              <span className="text-sm text-muted-foreground">Article</span>
            </div>
            <button className="flex items-center space-x-2 text-mint-teal hover:text-mint-teal/80 transition-colors">
              <Share2 className="h-4 w-4" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8 lg:p-16">
            <div 
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Section */}
            <div className="mt-16 pt-12 border-t border-border">
              <div className="text-center bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5 rounded-2xl p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-mint-teal to-soft-mauve rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Ready to Transform Your Website?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's work together to create a website that not only looks beautiful but drives real results for your business through strategic color choices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-gradient-to-r from-mint-teal to-soft-mauve text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    to="/articles" 
                    className="inline-block border-2 border-mint-teal text-mint-teal px-8 py-4 rounded-xl font-semibold hover:bg-mint-teal hover:text-white transition-colors"
                  >
                    Read More Articles
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;