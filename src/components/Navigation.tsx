import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
// import { useSmoothScroll } from "@/hooks/use-lenis";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('scroll', handleScroll);
      document.addEventListener('touchmove', handleScroll);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchmove', handleScroll);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Why Nexorus", href: "#why" },
    { label: "Services", href: "#services" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" }
  ];

  // --- NEW: smooth-scroll handler for same-page hashes (works even if not on "/")
  const handleHashClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    const scrollToHash = () => {
      const el = document.querySelector(hash);
      if (el) {
        // Use native scroll for mobile compatibility
        const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
          // Use native scrollIntoView for mobile
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Use Lenis if available on desktop
          const lenis = (window as any).lenis;
          if (lenis) {
            lenis.scrollTo(el, { offset: -80 });
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    };
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToHash, 100);
    } else {
      scrollToHash();
    }
    setIsMobileMenuOpen(false);
  };

  // Handle mobile menu toggle
  const handleMobileMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-screen max-w-screen ${
        isScrolled ? "glassmorphism-ultra" : "glassmorphism"
      }`}
    >
      <div className="w-full px-3 sm:px-6">
        <div className="flex items-center justify-between h-20 min-w-0">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer min-w-0 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-nexorus [animation-duration:24s] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-bold font-display text-gradient-slow truncate">
              NEXORUS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isHash = item.href.startsWith('#');
              const isActive = location.pathname === item.href || 
                (isHash && location.pathname === '/' && location.hash === item.href);
              
              return isHash ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleHashClick(e, item.href)}
                  className={`transition-colors duration-300 font-medium ${
                    isActive 
                      ? 'text-gradient-primary' 
                      : 'text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`transition-colors duration-300 font-medium ${
                    isActive 
                      ? 'text-gradient-primary' 
                      : 'text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
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
            onClick={handleMobileMenuToggle}
            className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 glassmorphism rounded-xl flex items-center justify-center z-50"
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
        <div 
          className="lg:hidden glassmorphism-ultra animate-fade-in-up"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full px-3 sm:px-6 py-6 max-w-7xl mx-auto">
            <div className="space-y-4">
              {navItems.map((item) => {
                const isHash = item.href.startsWith('#');
                const isActive = location.pathname === item.href || 
                  (isHash && location.pathname === '/' && location.hash === item.href);
                
                return isHash ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleHashClick(e, item.href)}
                    className={`block transition-colors duration-300 font-medium py-2 ${
                      isActive 
                        ? 'text-gradient-primary' 
                        : 'text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block transition-colors duration-300 font-medium py-2 ${
                      isActive 
                        ? 'text-gradient-primary' 
                        : 'text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
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