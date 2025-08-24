import Navigation from "@/components/Navigation";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Zap, Shield } from "lucide-react";
import { redirectToContact } from "@/lib/utils";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Craft",
      description: "Every line of code is written with purpose. We don't just build—we architect solutions that scale."
    },
    {
      icon: Zap,
      title: "Velocity First",
      description: "Speed without compromise. Launch-ready systems in days, not months, without sacrificing quality."
    },
    {
      icon: Shield,
      title: "Reliability Built-In",
      description: "Enterprise-grade security and performance from day one. Your success is our foundation."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Founded",
      description: "Started with a vision to democratize AI-powered automation"
    },
    {
      year: "2024",
      title: "First 100 Clients",
      description: "Reached milestone of 100+ satisfied clients across industries"
    },
    {
      year: "2024",
      title: "YC Recognition",
      description: "Selected for Y Combinator's prestigious startup program"
    },
    {
      year: "2024",
      title: "Scale Phase",
      description: "Expanding team and capabilities to serve enterprise clients"
    }
  ];

  const team = [
    {
      name: "Subhan Farooq",
      role: "Co-Founder",
      avatar: "SF"
    },
    {
      name: "Ahsan Toufiq",
      role: "Co-Founder",
      avatar: "AT"
    },

  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="container mx-auto px-6">
            <Reveal>
              <h1 className="text-apple-title text-black dark:text-white font-display mb-6 text-center">
                Who We Are
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
                We're a team of engineers, designers, and strategists who believe that 
                <span className="text-gradient-bold"> automation should be accessible to everyone</span>. 
                Our mission is to help startups and enterprises deploy AI-powered systems that actually work.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <Reveal>
              <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-16 text-center">
                Our Values
              </h2>
            </Reveal>
            
            <Reveal.Stagger className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Reveal key={index}>
                    <div className="apple-card p-8 hover-lift">
                      <div className="w-12 h-12 bg-gradient-nexorus rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-black dark:text-white font-display mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </Reveal.Stagger>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Reveal>
              <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-16 text-center">
                Our Journey
              </h2>
            </Reveal>
            
            <div className="max-w-4xl mx-auto relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500"></div>
              
              <Reveal.Stagger className="space-y-12">
                {timeline.map((item, index) => (
                  <Reveal key={index}>
                    <div className="flex items-start space-x-8">
                      {/* Timeline dot */}
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-nexorus rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {item.year}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <h3 className="text-2xl font-bold text-black dark:text-white font-display mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </Reveal.Stagger>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <Reveal>
              <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-16 text-center">
                Meet Our Team
              </h2>
            </Reveal>
            
            <Reveal.Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Reveal key={index}>
                  <div className="apple-card p-6 text-center hover-lift">
                    <div className="w-20 h-20 bg-gradient-nexorus rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{member.avatar}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white font-display mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {member.role}
                    </p>
                  </div>
                </Reveal>
              ))}
            </Reveal.Stagger>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-6">
                Ready to Build Together?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you deploy AI-powered automation that scales with your business.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]" onClick={redirectToContact}>
                  Start a Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="apple-white" size="lg" onClick={redirectToContact}>
                  <Users className="mr-2" />
                  Join Our Team
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-nexorus rounded-lg"></div>
              <span className="text-black dark:text-white font-semibold font-display text-gradient-slow">NEXORUS</span>
            </div>
            
            <div className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-right">
              <p>© 2024 NEXORUS. We deploy cognition.</p>
              <p className="mt-1">Built for velocity, designed for scale.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
