import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Settings, Activity, Users, BarChart3, Brain, Zap, Database, Rocket } from "lucide-react";

const MockInterface = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section className="py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Subtle background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-orb rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-orb rounded-full" style={{ animationDelay: '60s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-orb rounded-full" style={{ animationDelay: '120s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-apple-title text-black dark:text-white font-display mb-6">
            Command Your
            <span className="block text-gradient-primary">
              Digital Empire
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Every agent, workflow, and system under one unified control plane
          </p>
        </div>

        {/* Full-width dashboard mockup */}
        <div className="max-w-7xl mx-auto">
          <div className="apple-card-lg p-8 hover-lift">
            {/* Top bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-nexorus rounded-lg"></div>
                  <span className="text-black dark:text-white font-semibold text-xl">NEXORUS</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
                <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">Production Environment</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 dark:text-green-400 text-xs sm:text-sm">All systems operational</span>
                </div>
                <Button variant="apple-white" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === "dashboard" 
                        ? "bg-purple-500/10 text-black dark:text-white border border-purple-200 dark:border-purple-700" 
                        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("agents")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === "agents" 
                        ? "bg-purple-500/10 text-black dark:text-white border border-purple-200 dark:border-purple-700" 
                        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Activity className="w-5 h-5" />
                    <span>AI Agents</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("workflows")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === "workflows" 
                        ? "bg-purple-500/10 text-black dark:text-white border border-purple-200 dark:border-purple-700" 
                        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Zap className="w-5 h-5" />
                    <span>Workflows</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("data")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === "data" 
                        ? "bg-purple-500/10 text-black dark:text-white border border-purple-200 dark:border-purple-700" 
                        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Database className="w-5 h-5" />
                    <span>Data Pipeline</span>
                  </button>
                </div>
              </div>

              {/* Main content */}
              <div className="lg:col-span-3">
                {activeTab === "dashboard" && (
                  <div className="space-y-6 animate-fade-in-scale">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                      <h3 className="text-2xl font-semibold text-black dark:text-white font-display">System Overview</h3>
                      <div className="flex space-x-3">
                        <Button variant="gradient" size="sm" className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]">
                          <Play className="w-4 h-4 mr-2" />
                          Run Analysis
                        </Button>
                      </div>
                    </div>

                    {/* Metrics grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
                        <div className="text-2xl sm:text-3xl font-bold text-black dark:text-white font-display mb-2">97.3%</div>
                        <div className="text-gray-600 dark:text-gray-300 text-sm">Uptime</div>
                        <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full w-[97%] bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
                        <div className="text-2xl sm:text-3xl font-bold text-black dark:text-white font-display mb-2">2.4K</div>
                        <div className="text-gray-600 dark:text-gray-300 text-sm">Tasks/Hour</div>
                        <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full w-[84%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 sm:col-span-2 lg:col-span-1">
                        <div className="text-2xl sm:text-3xl font-bold text-black dark:text-white font-display mb-2">$127K</div>
                        <div className="text-gray-600 dark:text-gray-300 text-sm">Saved/Month</div>
                        <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full w-[91%] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Performance chart */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
                        <h4 className="text-lg font-semibold text-black dark:text-white">Performance Timeline</h4>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-300">Agent Tasks</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-300">System Load</span>
                          </div>
                        </div>
                      </div>
                      <div className="h-32 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 rounded-lg animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "agents" && (
                  <div className="space-y-6 animate-fade-in-scale">
                    <h3 className="text-2xl font-semibold text-black dark:text-white font-display">Active AI Agents</h3>
                    <div className="grid gap-4">
                      {[
                        { name: "Agent.RAVEN", status: "Active", type: "Customer Support", uptime: "1h 23m" },
                        { name: "Agent.PHANTOM", status: "Active", type: "Data Scraping", uptime: "2h 45m" },
                        { name: "Agent.SYNAPSE", status: "Active", type: "Workflow Automation", uptime: "45m" }
                      ].map((agent, index) => (
                        <div key={agent.name} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-nexorus rounded-full flex items-center justify-center">
                              <Brain className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-black dark:text-white font-semibold">{agent.name}</div>
                              <div className="text-gray-600 dark:text-gray-300 text-sm">{agent.type} • Running for {agent.uptime}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm">
                              {agent.status}
                            </div>
                            <Button variant="apple-white" size="sm">
                              <Pause className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "workflows" && (
                  <div className="space-y-6 animate-fade-in-scale">
                    <h3 className="text-2xl font-semibold text-black dark:text-white font-display">Automated Workflows</h3>
                    <div className="grid gap-4">
                      {[
                        { name: "Lead Qualification", status: "Running", efficiency: "94%", tasks: "156/hr" },
                        { name: "Invoice Processing", status: "Running", efficiency: "89%", tasks: "89/hr" },
                        { name: "Content Generation", status: "Idle", efficiency: "0%", tasks: "0/hr" }
                      ].map((workflow, index) => (
                        <div key={workflow.name} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                              <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-black dark:text-white font-semibold">{workflow.name}</div>
                              <div className="text-gray-600 dark:text-gray-300 text-sm">{workflow.tasks} • {workflow.efficiency} efficiency</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className={`px-3 py-1 rounded-full text-sm ${
                              workflow.status === "Running" 
                                ? "bg-green-500/20 text-green-600 dark:text-green-400" 
                                : "bg-gray-500/20 text-gray-600 dark:text-gray-400"
                            }`}>
                              {workflow.status}
                            </div>
                            <Button variant="apple-white" size="sm">
                              <Play className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "data" && (
                  <div className="space-y-6 animate-fade-in-scale">
                    <h3 className="text-2xl font-semibold text-black dark:text-white font-display">Data Pipeline</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Active Crawlers</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 dark:text-gray-300">GhostScraper</span>
                              <span className="text-green-600 dark:text-green-400 font-semibold">15K pages/hr</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 dark:text-gray-300">MarketAnalyzer</span>
                              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">8.2K pages/hr</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Storage</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 dark:text-gray-300">Raw Data</span>
                              <span className="text-black dark:text-white font-semibold">2.4TB</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 dark:text-gray-300">Processed</span>
                              <span className="text-black dark:text-white font-semibold">847GB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockInterface;