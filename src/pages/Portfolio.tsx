import Navigation from "@/components/Navigation";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github, Zap, Brain, Ghost, Database } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "SynapseCRM",
      description: "AI-powered customer relationship management system with automated lead scoring and predictive analytics.",
      image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      tech: ["Next.js", "OpenAI", "PostgreSQL", "Stripe"],
      category: "SaaS Platform",
      link: "#",
      github: "#"
    },
    {
      title: "GhostScraper Pro",
      description: "High-performance web scraping solution capable of processing 15K+ pages per hour with intelligent content extraction.",
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      tech: ["Playwright", "Redis", "Queue System", "AI Parser"],
      category: "Data Automation",
      link: "#",
      github: "#"
    },
    {
      title: "RAVEN AI Assistant",
      description: "Enterprise-grade AI chatbot with context awareness and seamless integration with existing workflows.",
      image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      tech: ["LangChain", "GPT-4", "Vector DB", "Webhooks"],
      category: "AI Automation",
      link: "#",
      github: "#"
    },
    {
      title: "MetricsPro Dashboard",
      description: "Real-time analytics dashboard with customizable widgets and automated reporting capabilities.",
      image: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
      tech: ["React", "D3.js", "WebSocket", "Node.js"],
      category: "Data Visualization",
      link: "#",
      github: "#"
    },
    {
      title: "AutoInvoice AI",
      description: "Intelligent invoice processing system that extracts data and automates payment workflows.",
      image: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
      tech: ["Computer Vision", "OCR", "FastAPI", "MongoDB"],
      category: "Process Automation",
      link: "#",
      github: "#"
    },
    {
      title: "CloudSync API",
      description: "Multi-cloud file synchronization service with real-time collaboration and version control.",
      image: "bg-gradient-to-br from-pink-500/20 to-red-500/20",
      tech: ["AWS S3", "Google Cloud", "GraphQL", "Docker"],
      category: "Cloud Infrastructure",
      link: "#",
      github: "#"
    },
    {
      title: "SmartForms Builder",
      description: "Dynamic form builder with conditional logic and automated data processing workflows.",
      image: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20",
      tech: ["React", "TypeScript", "Zod", "Supabase"],
      category: "SaaS Tool",
      link: "#",
      github: "#"
    },
    {
      title: "DataVault Enterprise",
      description: "Secure data warehouse with advanced encryption and compliance reporting for enterprise clients.",
      image: "bg-gradient-to-br from-slate-500/20 to-gray-500/20",
      tech: ["Snowflake", "Apache Airflow", "Kubernetes", "Terraform"],
      category: "Enterprise Solution",
      link: "#",
      github: "#"
    },
    {
      title: "LeadGen AI",
      description: "Automated lead generation platform with AI-powered prospect scoring and outreach automation.",
      image: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
      tech: ["Python", "Selenium", "OpenAI", "HubSpot API"],
      category: "Marketing Automation",
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="container mx-auto px-6">
            <Reveal>
              <h1 className="text-apple-title text-black dark:text-white font-display mb-6 text-center">
                Selected Work
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
                A showcase of our most impactful projects, from 
                <span className="text-gradient-bold"> AI-powered automation</span> to 
                <span className="text-gradient-bold"> enterprise-scale solutions</span>.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <Reveal.Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Reveal key={index}>
                  <div className="group apple-card overflow-hidden hover-lift">
                    {/* Project Image */}
                    <div className={`h-48 ${project.image} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 dark:bg-black/90 text-black dark:text-white rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-black dark:text-white font-display mb-3 group-hover:text-gradient-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button variant="gradient" size="sm" className="flex-1 group/btn [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
                          View Project
                        </Button>
                        <Button variant="apple-white" size="sm">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </Reveal.Stagger>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <Reveal>
              <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-16 text-center">
                Impact by the Numbers
              </h2>
            </Reveal>
            
            <Reveal.Stagger className="grid md:grid-cols-4 gap-8">
              <Reveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black dark:text-white font-display mb-2">137+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black dark:text-white font-display mb-2">92%</div>
                  <div className="text-gray-600 dark:text-gray-400">Faster Delivery</div>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black dark:text-white font-display mb-2">$2.1M+</div>
                  <div className="text-gray-600 dark:text-gray-400">Revenue Generated</div>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black dark:text-white font-display mb-2">99.8%</div>
                  <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
              </Reveal>
            </Reveal.Stagger>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-6">
                Ready to Build Your Next Project?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you bring your vision to life with cutting-edge technology and proven expertise.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="apple-white" size="lg">
                  <Zap className="mr-2" />
                  View Case Studies
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

export default Portfolio;
