import { Button } from "@/components/ui/button";
import { Zap, Target, Rocket, Bot, Database } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

const features = [
  {
    icon: Rocket,
    title: "Launch SaaS MVP in 10 days",
    description: "Full-stack applications with <span className='text-gradient-bold'>authentication, payments, and analytics</span>",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    icon: Bot,
    title: "Inbox agent using GPT-4",
    description: "AI-powered customer support that <span className='text-gradient-bold'>learns and scales</span>",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Replace Zapier with LangChain",
    description: "Advanced workflow automation with <span className='text-gradient-bold'>AI decision-making</span>",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Scrape like a hacker",
    description: "Enterprise-grade data extraction at <span className='text-gradient-bold'>massive scale</span>",
    gradient: "from-cyan-500 to-yellow-500"
  }
];

const principles = [
  {
    icon: Zap,
    title: "Speed-to-Market Focus",
    description: "We build and deliver in <span className='text-gradient-bold'>weeks, not months</span>. Speed isn't a feature—it's survival.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Target,
    title: "AI + Cloud Expertise",
    description: "We're not just developers—we're <span className='text-gradient-bold'>automation architects</span>. Every system is built to evolve.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "End-to-End Service",
    description: "From idea to launch to scaling—we handle it all. <span className='text-gradient-bold'>Built for velocity, not vanity</span>.",
    gradient: "from-cyan-500 to-blue-500"
  }
];

const WhyNexorus = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle background gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-orb rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-orb rounded-full" style={{ animationDelay: '60s' }}></div>
      <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-orb rounded-full" style={{ animationDelay: '120s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="space-apple-lg">
            <Reveal>
              <div className="space-apple-md">
                <h2 className="text-apple-title text-black dark:text-white font-display leading-tight">
                  Startups don't need
                  <span className="block text-gradient-primary">
                    code.
                  </span>
                  <span className="block text-black dark:text-white">They need outcomes.</span>
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  We don't build software. We deploy cognition. Every system is architected 
                  for velocity, built for scale, and designed to evolve with your vision.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span>Agent-first architecture</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>24-hour launch windows</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>Built for velocity, not vanity</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Button variant="apple" size="lg" className="mt-8">
                See Our Work
              </Button>
            </Reveal>
          </div>

          {/* Right side - Feature cards */}
          <Reveal.Stagger className="grid gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={index}>
                  <div
                    className="apple-card p-6 hover-lift group cursor-pointer"
                  >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black dark:text-white font-display mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed" 
                         dangerouslySetInnerHTML={{ __html: feature.description }}>
                      </p>
                    </div>
                  </div>
                </div>
                </Reveal>
              );
            })}
          </Reveal.Stagger>
        </div>
      </div>
    </section>
  );
};

export default WhyNexorus;