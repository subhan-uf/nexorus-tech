import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-white flex items-center">
      {/* Subtle gradient orb in background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-nexorus opacity-10 rounded-full blur-3xl float-gradient"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-apple-lg fade-in-apple">
            <div className="space-apple-md">
              <p className="text-sm text-muted-foreground tracking-wide">
                We are <span className="text-gradient-slow font-semibold">Nexorus</span>
              </p>
              <h1 className="text-apple-hero text-black font-display">
                Automate
                <span className="block text-gradient-primary">
                  Better.
                </span>
                <span className="block text-black">Scale Faster.</span>
              </h1>
              
              <p className="text-apple-subtitle text-gray-600 max-w-xl leading-relaxed">
                Launch-ready systems, AI agents, and SaaS protocols – deployed in days, not months.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="gradient" size="xl" className="group">
                Deploy a Protocol
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="apple-white" size="xl" className="group">
                <Play className="mr-2" />
                Book a Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-black font-display">137+</div>
                <div className="text-gray-500 text-sm">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black font-display">92%</div>
                <div className="text-gray-500 text-sm">Faster Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black font-display">$2.1M+</div>
                <div className="text-gray-500 text-sm">SaaS Funded</div>
              </div>
            </div>
          </div>

          {/* Right side - Mock UI Dashboard */}
          <div className="relative fade-in-apple" style={{ animationDelay: '0.3s' }}>
            <div className="apple-card-lg p-8 hover-lift">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-nexorus rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-black font-semibold">NEXORUS Control</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex space-x-6 mb-8 border-b border-gray-200 pb-4">
                <button className="text-black font-medium border-b-2 border-purple-400 pb-2">Projects</button>
                <button className="text-gray-500 hover:text-black pb-2">Agents</button>
                <button className="text-gray-500 hover:text-black pb-2">Logs</button>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-cyan-500 animate-pulse" />
                    <span className="text-black font-medium">Agent.RAVEN running...</span>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-600 rounded-full text-sm">Active</div>
                </div>

                {/* Performance Graph */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 text-sm">Performance</span>
                    <span className="text-cyan-600 text-sm">+97% efficiency</span>
                  </div>
                  <div className="h-20 bg-gray-200 rounded-lg relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-nexorus rounded-lg animate-pulse"></div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <div className="text-gray-600 text-sm">Recent Activity</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-black text-sm">SynapseCRM deployed</span>
                      <span className="text-green-600 text-xs">2m ago</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-black text-sm">GhostScraper: 15K pages/hr</span>
                      <span className="text-cyan-600 text-xs">5m ago</span>
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