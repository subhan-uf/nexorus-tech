import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyNexorus from "@/components/WhyNexorus";
import MockInterface from "@/components/MockInterface";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-nexorus">
      <Navigation />
      
      <main>
        <Hero />
        
        <section id="why">
          <WhyNexorus />
        </section>
        
        <MockInterface />
        
        <Testimonials />
        
        <section id="services">
          <Services />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-12 bg-black/60 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg"></div>
              <span className="text-white font-semibold font-display">NEXORUS</span>
            </div>
            
            <div className="text-white/60 text-sm text-center md:text-right">
              <p>© 2024 NEXORUS. We deploy cognition.</p>
              <p className="mt-1">Built for velocity, designed for scale.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
