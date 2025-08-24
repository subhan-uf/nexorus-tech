import { Linkedin, Globe, Code, Brain, Cloud, Zap, Database, Rocket, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { redirectToContact } from "@/lib/utils";

const founders = [
  {
    name: "Subhan Farooq",
    role: "Co-Founder",
    image: "/Subhan2.jpeg",
    linkedin: "https://www.linkedin.com/in/subhan-farooq/",
    github: "https://github.com/subhan-uf",
    expertise: [
      "Backend Development",
      "Full-Scale Software Deployment", 
      "Cloud Technologies",
      "Automation Tools",
      "Enterprise Architecture"
    ],
    description: "Subhan brings extensive experience in deploying software solutions for major organizations. His expertise spans backend development, cloud technologies, and automation tools that power enterprise-scale systems.",
    achievements: [
      "Deployed software for Fortune 500 companies",
      "Expert in cloud-native architectures",
      "Specialized in automation and DevOps",
      "Full-stack development veteran"
    ],
    icon: Cloud,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Ahsan Toufiq", 
    role: "Co-Founder",
    image: "/Ahsan.jpeg",
    linkedin: "https://www.linkedin.com/in/ahsan-toufiq/",
    github: "https://github.com/Ahsan-Toufiq",
    expertise: [
      "Machine Learning & AI",
      "Agentic AI Systems",
      "Automation & Robotics",
      "Neural Networks",
      "AI Strategy"
    ],
    description: "Ahsan is a visionary in machine learning and AI, specializing in agentic AI systems and automation. His expertise drives our AI-first approach to software development and business solutions.",
    achievements: [
      "Pioneered agentic AI implementations",
      "Expert in machine learning systems",
      "AI strategy and automation specialist",
      "Neural network architecture design"
    ],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500"
  }
];

const Founders = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-orb rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-orb rounded-full" style={{ animationDelay: '60s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-orb rounded-full" style={{ animationDelay: '120s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-apple-title text-black dark:text-white font-display mb-6 leading-tight">
              Meet the
              <span className="block text-gradient-primary">
                Architects
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The minds behind NEXORUS. Two founders with complementary expertise in software engineering and AI.
            </p>
          </div>
        </Reveal>

        {/* Founders Grid */}
        <Reveal.Stagger className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {founders.map((founder, index) => {
            const Icon = founder.icon;
            return (
              <Reveal key={founder.name}>
                <div className="space-y-8">
                {/* Founder Card */}
                <div className="apple-card-lg p-8 hover-lift group">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                    {/* Image */}
                    <div className="relative">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-gray-200 dark:ring-gray-700 group-hover:ring-purple-200 dark:group-hover:ring-purple-700 transition-all duration-300">
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-r ${founder.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="mb-4">
                        <h3 className="text-3xl font-bold text-black dark:text-white font-display mb-2">
                          {founder.name}
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                          {founder.role}
                        </p>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {founder.description}
                      </p>

                      {/* Social Links */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href={founder.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span className="font-medium">LinkedIn</span>
                        </a>
                        <a 
                          href={founder.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
                        >
                          <Github className="w-5 h-5" />
                          <span className="font-medium">GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expertise */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold text-black dark:text-white font-display">
                    Expertise
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {founder.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${founder.gradient}`}></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold text-black dark:text-white font-display">
                    Key Achievements
                  </h4>
                  <div className="space-y-4">
                    {founder.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${founder.gradient} mt-2 flex-shrink-0`}></div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
            );
          })}
        </Reveal.Stagger>

        {/* Vision Statement */}
        <Reveal delay={0.1}>
          <div className="mt-20">
            <div className="apple-card-lg p-12 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-black dark:text-white font-display mb-6">
              Our Vision
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We believe the future of software isn't just about code—it's about <span className="text-gradient-bold">cognition</span>. 
              By combining Subhan's expertise in enterprise-scale software deployment with Ahsan's mastery of AI and automation, 
              we're building systems that think, learn, and evolve with your business.
            </p>
            <div className="mt-8 flex justify-center">
              <Button variant="gradient" size="lg" className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]" onClick={redirectToContact}>
                <Rocket className="mr-2 w-5 h-5" />
                Join Our Mission
              </Button>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Founders;
