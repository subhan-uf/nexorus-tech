import { Brain, Rocket, Ghost, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "Cognitive Agent Deployment",
    description: "AI-powered automation that thinks, learns, and evolves with your business needs.",
    tech: ["GPT-4", "LangChain", "Vector DB", "Function Calling"],
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Natural language processing",
      "Context-aware responses", 
      "Learning from interactions",
      "Multi-modal capabilities"
    ]
  },
  {
    icon: Rocket,
    title: "SaaS MVP Protocols",
    description: "Full-stack applications deployed at velocity with enterprise-grade architecture.",
    tech: ["Next.js", "Supabase", "Stripe", "Vercel"],
    gradient: "from-cyan-500 to-blue-500",
    features: [
      "Authentication & authorization",
      "Payment processing",
      "Analytics dashboard",
      "Scalable infrastructure"
    ]
  },
  {
    icon: Ghost,
    title: "Phantom Scraping",
    description: "Stealth data extraction at massive scale with AI-powered content understanding.",
    tech: ["Playwright", "Proxies", "AI Parser", "Queue System"],
    gradient: "from-yellow-500 to-orange-500",
    features: [
      "15K+ pages/hour capacity",
      "Anti-detection technology",
      "Smart content parsing",
      "Real-time monitoring"
    ]
  },
  {
    icon: RotateCw,
    title: "Automated Workflows",
    description: "Replace Zapier with intelligent workflows that adapt and optimize themselves.",
    tech: ["Node.js", "Redis", "Webhooks", "AI Logic"],
    gradient: "from-green-500 to-cyan-500",
    features: [
      "Self-optimizing flows",
      "Error handling & recovery",
      "Performance analytics",
      "Custom integrations"
    ]
  }
];

const Services = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-apple-title text-black font-display mb-6">
            Deploy
            <span className="block text-gradient-primary">
              Cognition
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four core systems that transform how startups build, scale, and compete
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Content */}
                <div className={`space-apple-lg ${isEven ? "" : "lg:col-start-2"}`}>
                  <div className="space-apple-md">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-black font-display">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {service.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="gradient" size="lg">
                      Deploy This System
                    </Button>
                  </div>
                </div>

                {/* Visual representation */}
                <div className={`${isEven ? "" : "lg:col-start-1"}`}>
                  <div className="apple-card-lg p-8 hover-lift">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-black font-semibold">{service.title}</span>
                        </div>
                        <div className="px-3 py-1 bg-green-500/20 text-green-600 rounded-full text-sm">
                          Active
                        </div>
                      </div>

                      {/* Mock interface based on service type */}
                      {index === 0 && (
                        <div className="space-y-4">
                          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-gray-600 text-sm">Agent Processing</span>
                              <span className="text-cyan-600 text-sm">2.3K tokens/sec</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                              <div className={`h-full w-3/4 bg-gradient-to-r ${service.gradient} rounded-full animate-pulse`}></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                              <div className="text-2xl font-bold text-black">847</div>
                              <div className="text-gray-600 text-sm">Queries Processed</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                              <div className="text-2xl font-bold text-black">97.2%</div>
                              <div className="text-gray-600 text-sm">Accuracy Rate</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Deployment Status</span>
                            <span className="text-green-600">Live in Production</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600 text-sm">Frontend</span>
                              <span className="text-green-600 text-sm">✓ Deployed</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 text-sm">API</span>
                              <span className="text-green-600 text-sm">✓ Deployed</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 text-sm">Database</span>
                              <span className="text-green-600 text-sm">✓ Connected</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 text-sm">Payments</span>
                              <span className="text-green-600 text-sm">✓ Active</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-4">
                          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <div className="flex justify-between mb-2">
                              <span className="text-gray-600 text-sm">Scraping Rate</span>
                              <span className="text-yellow-600 text-sm">15.2K pages/hr</span>
                            </div>
                            <div className="h-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse opacity-60"></div>
                            </div>
                          </div>
                          <div className="text-gray-600 text-sm">
                            Last scraped: 2.3 seconds ago
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                              <div className="text-lg font-bold text-black">127</div>
                              <div className="text-gray-600 text-xs">Active Flows</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                              <div className="text-lg font-bold text-black">99.8%</div>
                              <div className="text-gray-600 text-xs">Success Rate</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                              <div className="text-lg font-bold text-black">2.1s</div>
                              <div className="text-gray-600 text-xs">Avg Response</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;