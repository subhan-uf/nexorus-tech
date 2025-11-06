import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { getLenis } from "./lib/lenis";
import GradientBackdrop from "./components/layout/GradientBackdrop";
import BottomBlurVeil from "./components/layout/BottomBlurVeil";

const queryClient = new QueryClient();
const IndexPage = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/About"));
const PortfolioPage = lazy(() => import("./pages/Portfolio"));
const BlogPage = lazy(() => import("./pages/Blog"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetail"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetailPage = lazy(() => import("./pages/CaseStudyDetail"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    getLenis()?.scrollTo(0, { immediate: true });
  }, [location.pathname]);
  
  return null;
};

const App = () => {
  useEffect(() => {
    // Initialize dark mode from localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <GradientBackdrop />
          <BottomBlurVeil />
          <Suspense fallback={<div className="sr-only" aria-hidden="true">Loading…</div>}>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
