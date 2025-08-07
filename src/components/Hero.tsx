import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-nexorus flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-apple-lg animate-fade-in-up">
            <div className="space-apple-md">
              <h1 className="text-7xl lg:text-8xl font-bold leading-none text-white font-display">
                Automate
                <span className="block text-gradient-primary animate-gradient-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Better.
                </span>
                <span className="block">Scale Faster.</span>
              </h1>
              
              <p className="text-2xl text-white/80 font-light max-w-xl leading-relaxed">
                Launch-ready systems, AI agents, and SaaS protocols – deployed in days, not months.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="hero" size="xl" className="group">
                Deploy a Protocol
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Play className="mr-2" />
                Book a Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-display">137+</div>
                <div className="text-white/60 text-sm">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-display">92%</div>
                <div className="text-white/60 text-sm">Faster Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-display">$2.1M+</div>
                <div className="text-white/60 text-sm">SaaS Funded</div>
              </div>
            </div>
          </div>

          {/* Right side - Mock UI Dashboard */}
          <div className="relative animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-3xl p-8 hover-glow-primary">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-semibold">NEXORUS Control</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex space-x-6 mb-8 border-b border-white/10 pb-4">
                <button className="text-white font-medium border-b-2 border-purple-400 pb-2">Projects</button>
                <button className="text-white/60 hover:text-white pb-2">Agents</button>
                <button className="text-white/60 hover:text-white pb-2">Logs</button>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                    <span className="text-white font-medium">Agent.RAVEN running...</span>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Active</div>
                </div>

                {/* Performance Graph */}
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white/80 text-sm">Performance</span>
                    <span className="text-cyan-400 text-sm">+97% efficiency</span>
                  </div>
                  <div className="h-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg animate-pulse"></div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <div className="text-white/60 text-sm">Recent Activity</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-white text-sm">SynapseCRM deployed</span>
                      <span className="text-green-400 text-xs">2m ago</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-white text-sm">GhostScraper: 15K pages/hr</span>
                      <span className="text-cyan-400 text-xs">5m ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;