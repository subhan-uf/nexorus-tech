import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "We launched 3x faster with Nexorus. What used to take months now happens in days.",
    author: "Sarah Chen",
    role: "CTO, FastTrack AI",
    company: "Y Combinator W23",
    rating: 5
  },
  {
    quote: "RAVEN saved us 84% in support costs. Our inbox is finally under control.",
    author: "Marcus Rodriguez",
    role: "Founder, SyncFlow",
    company: "Series A Startup",
    rating: 5
  },
  {
    quote: "They don't just build software. They architect solutions that scale with your vision.",
    author: "Emily Foster",
    role: "VP Engineering, DataVault",
    company: "Enterprise Client",
    rating: 5
  },
  {
    quote: "GhostScraper handles our data needs at a scale we never thought possible.",
    author: "Alex Kumar",
    role: "Head of Data, MetricsPro",
    company: "Growth Stage",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section className="py-32 bg-black/60 backdrop-blur-sm relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white font-display mb-6">
            Trusted by
            <span className="block text-gradient-primary bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-white/70">
            From YC startups to enterprise giants
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass rounded-3xl p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-3xl font-light text-white leading-relaxed mb-12 font-display">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{testimonials[currentIndex].author}</div>
                  <div className="text-white/60">{testimonials[currentIndex].role}</div>
                  <div className="text-white/40 text-sm">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover-glow-secondary"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover-glow-secondary"
            >
              <ChevronRight className="w-6 h-6 text-white" />
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
                    ? "bg-purple-400 w-8" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client logos placeholder */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
          {["YC", "Stripe", "OpenAI", "Vercel"].map((company) => (
            <div key={company} className="text-center">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;