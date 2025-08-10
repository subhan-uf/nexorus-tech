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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "apple-blur border-b border-gray-200 dark:border-gray-700" 
        : "bg-white/80 dark:bg-black/80 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-nexorus [animation-duration:24s] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold font-display text-gradient-slow">
              NEXORUS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium"
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
            className="lg:hidden w-10 h-10 apple-card rounded-lg flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-black dark:text-white" />
            ) : (
              <Menu className="w-5 h-5 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden apple-blur border-t border-gray-200 dark:border-gray-700 animate-fade-in-up">
          <div className="container mx-auto px-6 py-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <div className="flex justify-center">
                  <DarkModeToggle />
                </div>
                <Button variant="apple-white" size="sm" className="w-full">
                  Book Demo
                </Button>
                <Button variant="gradient" size="sm" className="w-full">
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