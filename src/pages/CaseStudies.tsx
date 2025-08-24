import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Filter, Clock, TrendingUp, Users, Award } from "lucide-react";
import { caseStudies, getCategories } from "@/data/caseStudiesData";
import { redirectToContact } from "@/lib/utils";

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = getCategories();
  
  const filteredCaseStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="container mx-auto px-6">
            <Reveal>
              <h1 className="text-apple-title text-black dark:text-white font-display mb-6 text-center">
                Case Studies
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
                Real results from real projects. See how we've helped companies
                <span className="text-gradient-bold"> transform their operations</span>, 
                <span className="text-gradient-bold"> scale their technology</span>, and 
                <span className="text-gradient-bold"> accelerate their growth</span>.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={category === selectedCategory ? "gradient" : "apple-white"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {category}
                  </Button>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured Case Study */}
        {filteredCaseStudies.length > 0 && filteredCaseStudies[0].featured && (
          <section className="pb-20">
            <div className="container mx-auto px-6">
              <Reveal>
                <div className="apple-card-lg p-8 hover-lift">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-nexorus text-white rounded-full text-sm font-medium">
                          Featured Case Study
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {filteredCaseStudies[0].category}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-black dark:text-white font-display mb-2 leading-tight">
                        {filteredCaseStudies[0].title}
                      </h2>
                      <p className="text-lg text-gradient-primary font-semibold mb-4">
                        {filteredCaseStudies[0].subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {filteredCaseStudies[0].fullDescription}
                      </p>
                      
                      {/* Key Results */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {filteredCaseStudies[0].results.slice(0, 2).map((result, index) => (
                          <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                            <div className="text-2xl font-bold text-black dark:text-white font-display mb-1">
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Link to={`/case-studies/${filteredCaseStudies[0].id}`}>
                        <Button variant="gradient" size="lg" className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]">
                          View Full Case Study
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                    
                    <div className={`h-64 ${filteredCaseStudies[0].image} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-nexorus rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 font-semibold">
                          {filteredCaseStudies[0].client.industry}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* Case Studies Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <Reveal.Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <Reveal key={index}>
                  <div className="group apple-card overflow-hidden hover-lift">
                    {/* Project Image */}
                    <div className={`h-48 ${study.image} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 dark:bg-black/90 text-black dark:text-white rounded-full text-sm font-medium">
                          {study.category}
                        </span>
                      </div>
                      {study.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-gradient-nexorus text-white rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-black dark:text-white font-display mb-2 group-hover:text-gradient-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-gradient-primary font-semibold mb-3">
                        {study.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                        {study.description}
                      </p>
                      
                      {/* Client Info */}
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{study.client.size}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{study.timeline}</span>
                        </div>
                      </div>
                      
                      {/* Key Result */}
                      <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-lg font-bold text-black dark:text-white">
                              {study.results[0].value}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              {study.results[0].metric}
                            </div>
                          </div>
                          <TrendingUp className="w-6 h-6 text-green-500" />
                        </div>
                      </div>
                      
                      {/* Tech Stack Preview */}
                      <div className="flex flex-wrap gap-1 mb-6">
                        {study.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs border border-gray-200 dark:border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                        {study.tech.length > 3 && (
                          <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                            +{study.tech.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      {/* Action Button */}
                      <Link to={`/case-studies/${study.id}`}>
                        <Button variant="gradient" size="sm" className="w-full group/btn [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
                          View Case Study
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </Reveal.Stagger>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <Reveal>
              <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-16 text-center">
                Proven Track Record
              </h2>
            </Reveal>
            
            <Reveal.Stagger className="grid md:grid-cols-4 gap-8">
              <Reveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black dark:text-white font-display mb-2">{caseStudies.length}+</div>
                  <div className="text-gray-600 dark:text-gray-400">Successful Projects</div>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black dark:text-white font-display mb-2">98%</div>
                  <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black dark:text-white font-display mb-2">$5.2M+</div>
                  <div className="text-gray-600 dark:text-gray-400">Value Generated</div>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black dark:text-white font-display mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-400">Industries Served</div>
                </div>
              </Reveal>
            </Reveal.Stagger>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-6">
                Ready to Write Your Success Story?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business. Every great success story starts with a conversation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]" onClick={redirectToContact}>
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/portfolio">
                  <Button variant="apple-white" size="lg">
                    View Our Work
                  </Button>
                </Link>
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

export default CaseStudies;