import Navigation from "@/components/Navigation";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag, Search, AlertCircle } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "AI & Automation", "Engineering", "Technical", "UX Design", "Growth", "Business"];
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  const posts = filteredPosts;
 const [newsletterEmail, setNewsletterEmail] = useState("");
 const [isSubscribing, setIsSubscribing] = useState(false);
 const [subscribed, setSubscribed] = useState(false);
 const [subscribeError, setSubscribeError] = useState(false);
 const SCRIPT_URL = import.meta.env.VITE_GS_WEBAPP_URL || "";

 async function sendToSheet(payload: Record<string, string>) {
   if (!SCRIPT_URL) {
     console.warn("Missing VITE_GS_WEBAPP_URL. Check .env and restart dev server.");
     console.log("Subscribe payload preview:", payload);
     return;
   }
   const body = new URLSearchParams(payload);
   await fetch(SCRIPT_URL, {
     method: "POST",
     mode: "no-cors",
     headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
     body
   });
 }

 const handleSubscribe = async (e: React.FormEvent) => {
   e.preventDefault();
   if (!newsletterEmail) return;
   setIsSubscribing(true);
   setSubscribeError(false);
   try {
     await sendToSheet({
       type: "newsletter",
       email: newsletterEmail,
       source: window.location.pathname,
     });
     setSubscribed(true);
     setNewsletterEmail("");
     setTimeout(() => setSubscribed(false), 3000);
   } catch (err) {
     console.error("Subscribe failed", err);
     setSubscribeError(true);
     
     // Reset error state after 5 seconds
     setTimeout(() => {
       setSubscribeError(false);
     }, 5000);
   } finally {
     setIsSubscribing(false);
   }
 };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="container mx-auto px-6">
            <Reveal>
              <h1 className="text-apple-title text-black dark:text-white font-display mb-6 text-center">
                Insights & Ideas
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
                Deep dives into 
                <span className="text-gradient-bold"> AI automation</span>, 
                <span className="text-gradient-bold"> technical architecture</span>, and 
                <span className="text-gradient-bold"> startup growth</span> from our team of experts.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={category === selectedCategory ? "gradient" : "apple-white"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]"
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    {category}
                  </Button>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="apple-card-lg p-8 hover-lift">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-gradient-nexorus text-white rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {posts[0].category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-black dark:text-white font-display mb-4 leading-tight">
                      {posts[0].title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {posts[0].excerpt}
                    </p>
                    
                    {/* Featured Post Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {posts[0].tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/10 text-white rounded-full text-sm border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{posts[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{posts[0].readTime}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${posts[0].id}`}>
                      <Button variant="gradient" size="lg" className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]">
                        Read Full Article
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  <div className="h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-nexorus rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">Featured Article</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <Reveal.Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post, index) => (
                <Reveal key={index}>
                  <article className="group apple-card p-6 hover-lift">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-black dark:text-white font-display mb-3 group-hover:text-gradient-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs border border-gray-200 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="apple-white" size="sm" className="group/btn w-full">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </article>
                </Reveal>
              ))}
            </Reveal.Stagger>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-6">
                Stay Updated
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI automation, technical architecture, and startup growth delivered to your inbox.
              </p>
            </Reveal>
<Reveal delay={0.2}>
  <form
    onSubmit={handleSubscribe}
    className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
  >
    <input
      type="email"
      placeholder="Enter your email"
      value={newsletterEmail}
      onChange={(e) => setNewsletterEmail(e.target.value)}
      required
      className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <Button
      type="submit"
      variant={subscribeError ? "destructive" : "gradient"}
      size="lg"
      className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]"
      disabled={isSubscribing || subscribed}
    >
      {subscribed ? (
        "Subscribed"
      ) : subscribeError ? (
        <>
          <AlertCircle className="mr-2 w-4 h-4" />
          Failed - Try Again
        </>
      ) : isSubscribing ? (
        "Subscribing..."
      ) : (
        <>
          Subscribe
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </Button>
  </form>
</Reveal>

          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-nexorus rounded-lg"></div>
              <span className="text-black dark:text-white font-semibold font-display text-gradient-slow">NEXORUS</span>
            </div>
            
            <div className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-right">
              <p>© 2024 NEXORUS. We deploy cognition.</p>
              <p className="mt-1">Built for velocity, designed for scale.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
