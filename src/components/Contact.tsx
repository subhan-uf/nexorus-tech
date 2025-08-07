import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Headphones, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white font-display mb-6 leading-tight">
              Let's build something
              <span className="block text-gradient-primary bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-text">
                unforgettable.
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to deploy cognition? Let's discuss your vision and architect a solution that scales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-purple-400 h-12"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-purple-400 h-12"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-white/80 text-sm font-medium mb-2">
                    Project Description
                  </label>
                  <Textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-purple-400 min-h-32 resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 w-5 h-5" />
                      Message Sent
                    </>
                  ) : (
                    <>
                      Deploy Now
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Response time card */}
              <div className="glass rounded-2xl p-6 hover-glow-secondary">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold font-display">Average Response Time</h3>
                    <p className="text-white/60">We move fast</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white font-display mb-2">12 hours</div>
                <p className="text-white/70 text-sm">
                  Most inquiries receive a detailed response within 12 hours. 
                  Urgent projects often get same-day attention.
                </p>
              </div>

              {/* Support availability */}
              <div className="glass rounded-2xl p-6 hover-glow-secondary">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold font-display">Support Available</h3>
                    <p className="text-white/60">Around the clock</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white font-display mb-2">24/7</div>
                <p className="text-white/70 text-sm">
                  Our systems monitor themselves, but we're always available 
                  for critical issues and strategic discussions.
                </p>
              </div>

              {/* Project types */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold font-display text-lg">What We Build</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                    <span className="text-white/80">AI-powered SaaS MVPs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-yellow-400 rounded-full"></div>
                    <span className="text-white/80">Intelligent automation systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"></div>
                    <span className="text-white/80">Custom AI agents</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                    <span className="text-white/80">High-scale data processing</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 border border-white/10">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-white">Ready to move fast?</strong> Most projects start 
                  within 48 hours of our first conversation. We're builders, not talkers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;