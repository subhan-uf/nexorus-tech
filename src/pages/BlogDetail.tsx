import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookmarkPlus, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { redirectToContact } from "@/lib/utils";
const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(blogPosts.find(p => p.id === id));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-black dark:text-white font-display mb-6">
              Blog Post Not Found
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/blog">
              <Button variant="gradient" size="lg" className="group">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // Debug log to check content
  console.log('Post content length:', post.content.length);
  console.log('Post content preview:', post.content.substring(0, 200));

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      <main>
        {/* Back Navigation */}
        <section className="pt-32 pb-8">
          <div className="container mx-auto px-6">
            <Reveal>
              <Link 
                to="/blog" 
                className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Article Header */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <div className="flex items-center space-x-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    post.featured 
                      ? "bg-gradient-nexorus text-white" 
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}>
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="px-3 py-1 bg-gradient-nexorus text-white rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-apple-title text-black dark:text-white font-display mb-6 leading-tight">
                  {post.title}
                </h1>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
              </Reveal>
              
              {/* Article Meta */}
              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-6 border-y border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-nexorus rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {post.author.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-black dark:text-white">
                          {post.author.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {post.author.role}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2">
                    <Button variant="apple-white" size="sm" className="group">
                      <Share2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Share
                    </Button>
                    <Button variant="apple-white" size="sm" className="group">
                      <BookmarkPlus className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Save
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Article Content */}
<section className="pb-20">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg dark:prose-invert max-w-none text-black dark:text-white">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content?.trim() ?? ""}
        </ReactMarkdown>
      </div>
    </div>
  </div>
</section>


        {/* Tags Section */}
        <section className="pb-12 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Tag className="w-3 h-3 mr-2 inline" />
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <h2 className="text-3xl font-bold text-black dark:text-white font-display mb-12 text-center">
                  Related Articles
                </h2>
              </Reveal>
              
              <Reveal.Stagger className="grid md:grid-cols-2 gap-8">
                {blogPosts
                  .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
                  .slice(0, 2)
                  .map((relatedPost, index) => (
                    <Reveal key={index}>
                      <Link to={`/blog/${relatedPost.id}`} className="group">
                        <article className="apple-card p-6 hover-lift">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                              {relatedPost.category}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-black dark:text-white font-display mb-3 group-hover:text-gradient-primary transition-colors leading-tight">
                            {relatedPost.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                            {relatedPost.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{relatedPost.date}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{relatedPost.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </Reveal>
                  ))}
              </Reveal.Stagger>
              
              <Reveal delay={0.3}>
                <div className="text-center mt-12">
                  <Link to="/blog">
                    <Button variant="apple-white" size="lg" className="group">
                      <Eye className="mr-2 group-hover:scale-110 transition-transform" />
                      View All Articles
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-6">
                Ready to Transform Your Business?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you implement the strategies and technologies discussed in this article.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]" onClick={redirectToContact}>
                  Get Started Today
                </Button>
                <Button variant="apple-white" size="lg" onClick={redirectToContact}>
                  Schedule Consultation
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

export default BlogDetail;