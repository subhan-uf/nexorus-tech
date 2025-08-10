import { Brain, Rocket, Ghost, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "SaaS MVP Development",
    description: "Rapid design and development of minimum viable products for SaaS startups with <span className='text-gradient-bold'>fully responsive, cloud-ready apps</span>.",
    tech: ["Next.js", "React", "Node.js", "Django"],
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Authentication & dashboards",
      "Payment processing", 
      "Database integration",
      "Cloud deployment"
    ]
  },
  {
    icon: Rocket,
    title: "AI-Powered Automation",
    description: "Integration of <span className='text-gradient-bold'>LangChain, OpenAI, and other AI frameworks</span> to automate customer service, lead qualification, and more.",
    tech: ["LangChain", "OpenAI", "Vector DB", "Function Calling"],
    gradient: "from-cyan-500 to-blue-500",
    features: [
      "Natural language processing",
      "Context-aware responses",
      "Learning from interactions",
      "Multi-modal capabilities"
    ]
  },
  {
    icon: Ghost,
    title: "API Development & Integration",
    description: "Building secure <span className='text-gradient-bold'>REST & GraphQL APIs</span> for SaaS platforms and connecting third-party services.",
    tech: ["REST APIs", "GraphQL", "Webhooks", "OAuth"],
    gradient: "from-yellow-500 to-orange-500",
    features: [
      "Secure authentication",
      "Rate limiting",
      "Documentation",
      "Testing suite"
    ]
  },
  {
    icon: RotateCw,
    title: "Web Scraping & Data Solutions",
    description: "Custom data extraction pipelines for research, market analysis, and <span className='text-gradient-bold'>lead generation at massive scale</span>.",
    tech: ["Playwright", "Proxies", "AI Parser", "Queue System"],
    gradient: "from-green-500 to-cyan-500",
    features: [
      "15K+ pages/hour capacity",
      "Anti-detection technology",
      "Smart content parsing",
      "Real-time monitoring"
    ]
  }
];

const Services = () => {
  return (
    <section className="py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Subtle background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-orb rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-orb rounded-full" style={{ animationDelay: '60s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-orb rounded-full" style={{ animationDelay: '120s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-apple-title text-black dark:text-white font-display mb-6">
            Deploy
            <span className="block text-gradient-primary">
              Cognition
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                        <h3 className="text-4xl font-bold text-black dark:text-white font-display">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8" 
                       dangerouslySetInnerHTML={{ __html: service.description }}>
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {service.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="gradient" size="lg" className="group [animation-duration:13s] before:[animation-duration:13s] after:[animation-duration:13s]">
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
                          <span className="text-black dark:text-white font-semibold">{service.title}</span>
                        </div>
                        <div className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm">
                          Active
                        </div>
                      </div>

                      {/* Mock interface based on service type */}
                      {index === 0 && (
                        <div className="space-y-4">
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-gray-600 dark:text-gray-300 text-sm">Deployment Status</span>
                              <span className="text-cyan-600 dark:text-cyan-400 text-sm">Live in Production</span>
                            </div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className={`h-full w-3/4 bg-gradient-to-r ${service.gradient} rounded-full animate-pulse`}></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                              <div className="text-2xl font-bold text-black dark:text-white">847</div>
                              <div className="text-gray-600 dark:text-gray-300 text-sm">Users Active</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                              <div className="text-2xl font-bold text-black dark:text-white">97.2%</div>
                              <div className="text-gray-600 dark:text-gray-300 text-sm">Uptime</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">AI Processing</span>
                            <span className="text-green-600 dark:text-green-400">2.3K tokens/sec</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-300 text-sm">GPT-4</span>
                              <span className="text-green-600 dark:text-green-400 text-sm">✓ Active</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-300 text-sm">LangChain</span>
                              <span className="text-green-600 dark:text-green-400 text-sm">✓ Running</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-300 text-sm">Vector DB</span>
                              <span className="text-green-600 dark:text-green-400 text-sm">✓ Connected</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-300 text-sm">Functions</span>
                              <span className="text-green-600 dark:text-green-400 text-sm">✓ Deployed</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-4">
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                            <div className="flex justify-between mb-2">
                              <span className="text-gray-600 dark:text-gray-300 text-sm">API Requests</span>
                              <span className="text-yellow-600 dark:text-yellow-400 text-sm">15.2K requests/hr</span>
                            </div>
                            <div className="h-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse opacity-60"></div>
                            </div>
                          </div>
                          <div className="text-gray-600 dark:text-gray-300 text-sm">
                            Last request: 2.3 seconds ago
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700">
                              <div className="text-lg font-bold text-black dark:text-white">15K</div>
                              <div className="text-gray-600 dark:text-gray-300 text-xs">Pages/Hr</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700">
                              <div className="text-lg font-bold text-black dark:text-white">99.8%</div>
                              <div className="text-gray-600 dark:text-gray-300 text-xs">Success Rate</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700">
                              <div className="text-lg font-bold text-black dark:text-white">2.1s</div>
                              <div className="text-gray-600 dark:text-gray-300 text-xs">Avg Response</div>
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