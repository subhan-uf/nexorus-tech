import { Button } from "@/components/ui/button";
import { Rocket, Bot, Zap, Database } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Launch SaaS MVP in 10 days",
    description: "Full-stack applications with authentication, payments, and analytics",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    icon: Bot,
    title: "Inbox agent using GPT-4",
    description: "AI-powered customer support that learns and scales",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Replace Zapier with LangChain",
    description: "Advanced workflow automation with AI decision-making",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Scrape like a hacker",
    description: "Enterprise-grade data extraction at massive scale",
    gradient: "from-cyan-500 to-yellow-500"
  }
];

const WhyNexorus = () => {
  return (
    <section className="py-32 bg-black/40 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="space-apple-lg">
            <div className="space-apple-md">
              <h2 className="text-6xl font-bold text-white font-display leading-tight">
                Startups don't need
                <span className="block text-gradient-primary bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  code.
                </span>
                <span className="block">They need outcomes.</span>
              </h2>
              
              <p className="text-xl text-white/70 leading-relaxed max-w-lg">
                We don't build software. We deploy cognition. Every system is architected 
                for velocity, built for scale, and designed to evolve with your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white/80">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Agent-first architecture</span>
              </div>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>24-hour launch windows</span>
              </div>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Built for velocity, not vanity</span>
              </div>
            </div>

            <Button variant="gradient" size="lg" className="mt-8">
              See Our Work
            </Button>
          </div>

          {/* Right side - Feature cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover-glow-secondary group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white font-display mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNexorus;