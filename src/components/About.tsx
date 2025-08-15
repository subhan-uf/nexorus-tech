import { Zap, Target, Rocket } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

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

const About = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle background gradient orbs */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-orb rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-orb rounded-full" style={{ animationDelay: '60s' }}></div>
      <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-gradient-orb rounded-full" style={{ animationDelay: '120s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-apple-title text-black dark:text-white font-display mb-8 leading-tight">
              We build like it's
              <span className="block text-gradient-primary">
                our company
              </span>
              <span className="block text-black dark:text-white">— because it might be.</span>
            </h2>
            
            <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded in 2024, NEXORUS emerged from a simple belief: startups don't fail because of bad ideas. 
              They fail because <span className="text-gradient-bold">building takes too long</span>.
            </p>
          </div>
        </Reveal>

        <Reveal.Stagger className="grid lg:grid-cols-3 gap-8 mb-20">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Reveal key={index}>
                <div
                  className="apple-card p-8 text-center hover-lift group"
                >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${principle.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-black dark:text-white font-display mb-4">
                  {principle.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed" 
                   dangerouslySetInnerHTML={{ __html: principle.description }}>
                </p>
              </div>
            </Reveal>
            );
          })}
        </Reveal.Stagger>

        {/* Philosophy section */}
        <Reveal delay={0.1}>
          <div className="apple-card-lg p-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-apple-lg">
              <h3 className="text-4xl font-bold text-black dark:text-white font-display mb-6">
                The NEXORUS Philosophy
              </h3>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  We don't build software. We deploy cognition. Every line of code, every agent, 
                  every workflow is architected with one question in mind: <em className="text-gradient-bold">"How fast can this scale?"</em>
                </p>
                
                <p>
                  Our systems think like founders, execute like machines, and evolve like organisms. 
                  They don't just automate—they <span className="text-gradient-bold">optimize, learn, and adapt</span> to changing conditions.
                </p>
                
                <p>
                  Founded by engineers who've scaled from zero to IPO, we understand the urgency 
                  of startup life. Every day matters. Every decision compounds. Every system must earn its place.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-black dark:text-white font-display mb-2">2024</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Founded</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-black dark:text-white font-display mb-2">97%</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Client Retention</div>
                </div>
              </div>

              {/* Tools built */}
              <div className="space-y-4">
                <h4 className="text-black dark:text-white font-semibold mb-4">Signature Systems</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-black dark:text-white">RAVEN</span>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Inbox AI Agent</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-black dark:text-white">SynapseCRM</span>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Full CRM in 11 days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-black dark:text-white">GhostScraper</span>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">15K pages/hr scraper</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;