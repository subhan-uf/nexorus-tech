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
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="space-apple-lg">
            <div className="space-apple-md">
              <h2 className="text-apple-title text-black font-display leading-tight">
                Startups don't need
                <span className="block text-gradient-primary">
                  code.
                </span>
                <span className="block text-black">They need outcomes.</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We don't build software. We deploy cognition. Every system is architected 
                for velocity, built for scale, and designed to evolve with your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-700">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Agent-first architecture</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>24-hour launch windows</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>Built for velocity, not vanity</span>
              </div>
            </div>

            <Button variant="apple" size="lg" className="mt-8">
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
                  className="apple-card p-6 hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black font-display mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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