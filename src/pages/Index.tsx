import { Suspense, useEffect, lazy } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyNexorus from "@/components/WhyNexorus";
import Reveal from "@/components/motion/Reveal";

const MockInterface = lazy(() => import("@/components/MockInterface"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Services = lazy(() => import("@/components/Services"));
const AboutSection = lazy(() => import("@/components/About"));
const Founders = lazy(() => import("@/components/Founders"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  useEffect(() => {
    void Promise.all([
      import("@/components/MockInterface"),
      import("@/components/Testimonials"),
      import("@/components/Services"),
      import("@/components/About"),
      import("@/components/Founders"),
      import("@/components/Contact"),
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      <main>
        <Hero />
        
        <section id="why">
          <Reveal>
            <WhyNexorus />
          </Reveal>
        </section>
        
        <Suspense fallback={null}>
          <Reveal>
            <MockInterface />
          </Reveal>
        </Suspense>
        
        <Suspense fallback={null}>
          <Reveal>
            <Testimonials />
          </Reveal>
        </Suspense>
        
        <section id="services">
          <Suspense fallback={null}>
            <Reveal>
              <Services />
            </Reveal>
          </Suspense>
        </section>
        
        <section id="about">
          <Suspense fallback={null}>
            <Reveal>
              <AboutSection />
            </Reveal>
          </Suspense>
        </section>
        
        <section id="founders">
          <Suspense fallback={null}>
            <Reveal>
              <Founders />
            </Reveal>
          </Suspense>
        </section>
        
        <section id="contact">
          <Suspense fallback={null}>
            <Reveal>
              <Contact />
            </Reveal>
          </Suspense>
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

export default Index;
