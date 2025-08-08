import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyNexorus from "@/components/WhyNexorus";
import MockInterface from "@/components/MockInterface";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useGsap } from "@/hooks/useGsap";

const Index = () => {
  useGsap();
  return (
    <div className="min-h-screen bg-white">
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
      <footer className="py-12 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-nexorus rounded-lg"></div>
              <span className="text-black font-semibold font-display">NEXORUS</span>
            </div>
            
            <div className="text-gray-600 text-sm text-center md:text-right">
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
