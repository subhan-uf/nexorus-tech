import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

const testimonials = [
  {
    quote: "We launched 3x faster with Nexorus. What used to take months now happens in <span className='text-gradient-bold'>days</span>.",
    author: "Sarah Chen",
    role: "CTO, FastTrack AI",
    company: "Y Combinator W23",
    rating: 5
  },
  {
    quote: "RAVEN saved us 84% in support costs. Our inbox is finally <span className='text-gradient-bold'>under control</span>.",
    author: "Marcus Rodriguez",
    role: "Founder, SyncFlow",
    company: "Series A Startup",
    rating: 5
  },
  {
    quote: "They don't just build software. They architect solutions that <span className='text-gradient-bold'>scale with your vision</span>.",
    author: "Emily Foster",
    role: "VP Engineering, DataVault",
    company: "Enterprise Client",
    rating: 5
  },
  {
    quote: "GhostScraper handles our data needs at a <span className='text-gradient-bold'>scale we never thought possible</span>.",
    author: "Alex Kumar",
    role: "Head of Data, MetricsPro",
    company: "Growth Stage",
    rating: 5
  }
];

// Expanded list of technologies and companies NEXORUS works with
const technologies = [
  "YC", "Stripe", "OpenAI", "Vercel", "AWS", "Google Cloud", "Azure", "Supabase",
  "Next.js", "React", "Node.js", "Python", "Django", "FastAPI", "LangChain",
  "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "Terraform",
  "GitHub", "GitLab", "Jira", "Slack", "Zapier", "n8n", "Playwright",
  "TypeScript", "JavaScript", "Tailwind CSS", "GraphQL", "REST APIs",
  "Machine Learning", "Computer Vision", "Neural Networks", "Vector DB"
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // Simplified drag - just pause animation for now
    if (isDragging) {
      // Animation is paused via CSS class
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsMarqueeHovered(false);
    setIsDragging(false);
  };

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900 relative">
      {/* Subtle background gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-orb rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-orb rounded-full" style={{ animationDelay: '60s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-orb rounded-full" style={{ animationDelay: '120s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-apple-title text-black dark:text-white font-display mb-6">
              Trusted by
              <span className="block text-gradient-primary">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From YC startups to enterprise giants
            </p>
          </div>
        </Reveal>

        {/* Testimonial carousel */}
        <Reveal delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
            <div className="apple-card-lg p-12 text-center h-[500px] sm:h-[400px] flex flex-col justify-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex-1 flex items-center justify-center px-4">
                <blockquote 
                  className="text-lg sm:text-2xl lg:text-3xl font-light text-black dark:text-white leading-relaxed font-display max-w-3xl"
                  dangerouslySetInnerHTML={{ __html: `"${testimonials[currentIndex].quote}"` }}
                />
              </div>
              
              <div className="flex items-center justify-center space-x-4 mt-6">
                <div className="w-16 h-16 bg-gradient-nexorus rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-black dark:text-white font-semibold">{testimonials[currentIndex].author}</div>
                  <div className="text-gray-600 dark:text-gray-300">{testimonials[currentIndex].role}</div>
                  <div className="text-gray-400 dark:text-gray-400 text-sm">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 apple-card rounded-full flex items-center justify-center hover-lift"
            >
              <ChevronLeft className="w-6 h-6 text-black dark:text-white" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 apple-card rounded-full flex items-center justify-center hover-lift"
            >
              <ChevronRight className="w-6 h-6 text-black dark:text-white" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-purple-500 w-8" 
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
        </Reveal>
        {/* Technologies Marquee */}
        <Reveal delay={0.2}>
          <div className="mt-20">
            <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-black dark:text-white font-display mb-2">
              Technologies We Work With
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              From cloud platforms to cutting-edge AI frameworks
            </p>
          </div>
          
          <div 
            className="relative cursor-grab active:cursor-grabbing overflow-hidden"
            onMouseEnter={() => setIsMarqueeHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* Left blur gradient */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right blur gradient */}
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Marquee container with padding for shadows */}
            <div className="py-4">
              <div 
                ref={marqueeRef}
                className={`flex space-x-8 animate-marquee ${
                  isMarqueeHovered || isDragging ? 'paused' : ''
                }`}
                style={{ width: 'max-content' }}
              >
                {/* First set of items */}
                {technologies.map((tech, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex-shrink-0 px-6 py-4 rounded-xl border bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="font-semibold text-sm text-gradient-primary">
                      {tech}
                    </span>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {technologies.map((tech, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex-shrink-0 px-6 py-4 rounded-xl border bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="font-semibold text-sm text-gradient-primary">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;