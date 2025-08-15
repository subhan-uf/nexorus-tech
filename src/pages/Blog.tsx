import Navigation from "@/components/Navigation";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag, Search } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "The Future of AI-Powered Automation in 2024",
      excerpt: "Exploring how artificial intelligence is revolutionizing business processes and what trends we can expect to see in the coming year. From natural language processing to predictive analytics.",
      category: "AI & Automation",
      date: "March 15, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Building Scalable SaaS Architecture: Lessons from 100+ Deployments",
      excerpt: "Key insights and best practices we've learned from deploying over 100 SaaS applications. Covering everything from database design to microservices architecture.",
      category: "Engineering",
      date: "March 12, 2024",
      readTime: "12 min read",
      featured: false
    },
    {
      title: "How We Achieved 15K Pages/Hour Web Scraping Performance",
      excerpt: "Deep dive into the technical architecture behind our high-performance web scraping solution. Learn about queue systems, proxy management, and anti-detection techniques.",
      category: "Technical",
      date: "March 10, 2024",
      readTime: "10 min read",
      featured: false
    },
    {
      title: "The Psychology of User Experience in AI Applications",
      excerpt: "Understanding how to design AI interfaces that users actually trust and enjoy using. We explore the balance between automation and human control.",
      category: "UX Design",
      date: "March 8, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "From MVP to Enterprise: Scaling Your Tech Stack",
      excerpt: "A comprehensive guide to evolving your technology stack as your startup grows. When to refactor, when to rebuild, and how to make the right architectural decisions.",
      category: "Growth",
      date: "March 5, 2024",
      readTime: "15 min read",
      featured: false
    },
    {
      title: "LangChain vs Custom Solutions: When to Use What",
      excerpt: "Comparing LangChain's framework with custom AI implementations. We break down the pros and cons of each approach and provide decision-making frameworks.",
      category: "AI & Automation",
      date: "March 3, 2024",
      readTime: "9 min read",
      featured: false
    },
    {
      title: "The Hidden Costs of Technical Debt in Fast-Growing Startups",
      excerpt: "Why technical debt isn't always bad, but how to manage it effectively. Real examples from our experience working with YC startups and scale-ups.",
      category: "Engineering",
      date: "March 1, 2024",
      readTime: "11 min read",
      featured: false
    },
    {
      title: "Automating Customer Support: ROI and Implementation Guide",
      excerpt: "How we helped clients reduce support costs by 84% while improving customer satisfaction. Step-by-step implementation guide with real metrics.",
      category: "Business",
      date: "February 28, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Vector Databases: Choosing the Right Solution for Your AI App",
      excerpt: "Comparing Pinecone, Weaviate, and custom solutions. Performance benchmarks, cost analysis, and implementation considerations for different use cases.",
      category: "Technical",
      date: "February 25, 2024",
      readTime: "13 min read",
      featured: false
    }
  ];

  const categories = ["All", "AI & Automation", "Engineering", "Technical", "UX Design", "Growth", "Business"];

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
                    variant={category === "All" ? "gradient" : "apple-white"}
                    size="sm"
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
                    <Button variant="gradient" size="lg" className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]">
                      Read Full Article
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
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
                    
                    <Button variant="apple-white" size="sm" className="group/btn w-full">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button variant="gradient" size="lg" className="group">
                  Subscribe
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
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
