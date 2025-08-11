import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Why Nexorus", href: "#why" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Founders", href: "#founders" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full overflow-hidden ${
      isScrolled 
        ? "glassmorphism-ultra border-b border-white/20 dark:border-white/10" 
        : "glassmorphism"
    }`}>
      <div className="w-full px-3 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 min-w-0">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer min-w-0 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-nexorus [animation-duration:24s] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-bold font-display text-gradient-slow truncate">
              NEXORUS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <DarkModeToggle />
            <Button variant="apple-white" size="sm">
              Book Demo
            </Button>
            <Button variant="gradient" size="sm" className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]">
              Deploy Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 glassmorphism rounded-xl flex items-center justify-center border border-white/20 dark:border-white/10 flex-shrink-0"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glassmorphism-ultra border-t border-white/20 dark:border-white/10 animate-fade-in-up">
          <div className="w-full px-3 sm:px-6 py-6 max-w-7xl mx-auto">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/20 dark:border-white/10 space-y-3">
                <div className="flex justify-center">
                  <DarkModeToggle />
                </div>
                <Button variant="apple-white" size="sm" className="w-full">
                  Book Demo
                </Button>
                <Button variant="gradient" size="sm" className="w-full group [animation-duration:7s] before:[animation-duration:7s] after:[animation-duration:7s]">
                  Deploy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;