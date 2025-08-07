import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Settings, Activity, Users, BarChart3 } from "lucide-react";

const MockInterface = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white font-display mb-6">
            Command Your
            <span className="block text-gradient-primary bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Digital Empire
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Every agent, workflow, and system under one unified control plane
          </p>
        </div>

        {/* Full-width dashboard mockup */}
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-8 hover-glow-primary">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg"></div>
                  <span className="text-white font-semibold text-xl">NEXORUS</span>
                </div>
                <div className="h-6 w-px bg-white/20"></div>
                <span className="text-white/60">Production Environment</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">All systems operational</span>
                </div>
                <Button variant="glass" size="sm">
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
                        ? "bg-purple-500/20 text-white border border-purple-500/30" 
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("agents")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === "agents" 
                        ? "bg-purple-500/20 text-white border border-purple-500/30" 
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Activity className="w-5 h-5" />
                    <span>Agents</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("users")}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === "users" 
                        ? "bg-purple-500/20 text-white border border-purple-500/30" 
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Users className="w-5 h-5" />
                    <span>Users</span>
                  </button>
                </div>
              </div>

              {/* Main content */}
              <div className="lg:col-span-3">
                {activeTab === "dashboard" && (
                  <div className="space-y-6 animate-fade-in-scale">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold text-white font-display">System Overview</h3>
                      <div className="flex space-x-3">
                        <Button variant="glass" size="sm">
                          <Play className="w-4 h-4 mr-2" />
                          Run Analysis
                        </Button>
                      </div>
                    </div>

                    {/* Metrics grid */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="bg-white/5 rounded-xl p-6">
                        <div className="text-3xl font-bold text-white font-display mb-2">97.3%</div>
                        <div className="text-white/60 text-sm">Uptime</div>
                        <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-[97%] bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-6">
                        <div className="text-3xl font-bold text-white font-display mb-2">2.4K</div>
                        <div className="text-white/60 text-sm">Tasks/Hour</div>
                        <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-[84%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-6">
                        <div className="text-3xl font-bold text-white font-display mb-2">$127K</div>
                        <div className="text-white/60 text-sm">Saved/Month</div>
                        <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-[91%] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Performance chart */}
                    <div className="bg-white/5 rounded-xl p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-lg font-semibold text-white">Performance Timeline</h4>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <span className="text-white/60">Agent Tasks</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                            <span className="text-white/60">System Load</span>
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
                    <h3 className="text-2xl font-semibold text-white font-display">Active Agents</h3>
                    <div className="grid gap-4">
                      {["Agent.RAVEN", "Agent.PHANTOM", "Agent.SYNAPSE"].map((agent, index) => (
                        <div key={agent} className="bg-white/5 rounded-xl p-6 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                              <Activity className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-semibold">{agent}</div>
                              <div className="text-white/60 text-sm">Running for {index + 1}h 23m</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                              Active
                            </div>
                            <Button variant="glass" size="sm">
                              <Pause className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "users" && (
                  <div className="space-y-6 animate-fade-in-scale">
                    <h3 className="text-2xl font-semibold text-white font-display">User Activity</h3>
                    <div className="bg-white/5 rounded-xl p-6">
                      <div className="text-center text-white/60">
                        <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>User management panel would be displayed here</p>
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