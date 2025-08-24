import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Users, Building, TrendingUp, Award, Quote, ExternalLink, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { getCaseStudyById, caseStudies } from "@/data/caseStudiesData";
import { useEffect, useState } from "react";
import { redirectToContact } from "@/lib/utils";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState(getCaseStudyById(id || ""));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-black dark:text-white font-display mb-6">
              Case Study Not Found
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              The case study you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/case-studies">
              <Button variant="gradient" size="lg" className="group">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      <main>
        {/* Back Navigation */}
        <section className="pt-32 pb-8">
          <div className="container mx-auto px-6">
            <Reveal>
              <Link 
                to="/case-studies" 
                className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Case Studies
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Hero Section */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Reveal>
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="px-3 py-1 bg-gradient-nexorus text-white rounded-full text-sm font-medium">
                        {caseStudy.category}
                      </span>
                      {caseStudy.featured && (
                        <span className="px-3 py-1 bg-gradient-nexorus text-white rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                  </Reveal>
                  
                  <Reveal delay={0.1}>
                    <h1 className="text-apple-title text-black dark:text-white font-display mb-4 leading-tight">
                      {caseStudy.title}
                    </h1>
                  </Reveal>
                  
                  <Reveal delay={0.2}>
                    <p className="text-2xl text-gradient-primary font-semibold mb-6">
                      {caseStudy.subtitle}
                    </p>
                  </Reveal>
                  
                  <Reveal delay={0.3}>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {caseStudy.fullDescription}
                    </p>
                  </Reveal>
                  
                  {/* Client Info */}
                  <Reveal delay={0.4}>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <Building className="w-6 h-6 text-purple-500" />
                        <div>
                          <div className="font-semibold text-black dark:text-white">
                            {caseStudy.client.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {caseStudy.client.industry}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <Users className="w-6 h-6 text-blue-500" />
                        <div>
                          <div className="font-semibold text-black dark:text-white">
                            {caseStudy.client.size}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Company Size
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
                
                {/* Visual Element */}
                <Reveal delay={0.5}>
                  <div className={`h-96 ${caseStudy.image} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-nexorus rounded-full flex items-center justify-center mx-auto mb-6">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                        Success Story
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                        {caseStudy.timeline} project
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Key Results */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-16 text-center">
                  Key Results
                </h2>
              </Reveal>
              
              <Reveal.Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {caseStudy.results.map((result, index) => (
                  <Reveal key={index}>
                    <div className="text-center p-6 apple-card hover-lift">
                      <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-black dark:text-white font-display mb-2">
                        {result.value}
                      </div>
                      <div className="text-lg font-semibold text-black dark:text-white mb-2">
                        {result.metric}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">
                        {result.description}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </Reveal.Stagger>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                <Reveal>
                  <div>
                    <h2 className="text-3xl font-bold text-black dark:text-white font-display mb-6">
                      The Challenge
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {caseStudy.challenge}
                    </p>
                  </div>
                </Reveal>
                
                <Reveal delay={0.2}>
                  <div>
                    <h2 className="text-3xl font-bold text-black dark:text-white font-display mb-6">
                      Our Solution
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {caseStudy.solution}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Approach */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-16 text-center">
                  Project Details
                </h2>
              </Reveal>
              
              <div className="grid lg:grid-cols-2 gap-16">
                <Reveal>
                  <div className="apple-card p-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white font-display mb-6">
                      Project Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {caseStudy.details.overview}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                      Technical Approach
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {caseStudy.details.technicalApproach}
                    </p>
                  </div>
                </Reveal>
                
                <Reveal delay={0.2}>
                  <div className="apple-card p-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white font-display mb-6">
                      Implementation & Impact
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {caseStudy.details.implementation}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                      Business Impact
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {caseStudy.details.impact}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <h2 className="text-3xl font-bold text-black dark:text-white font-display mb-12 text-center">
                  Technology Stack
                </h2>
              </Reveal>
              
              <Reveal>
                <div className="flex flex-wrap justify-center gap-4">
                  {caseStudy.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Check className="w-4 h-4 mr-2 inline text-green-500" />
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <Reveal>
                  <Quote className="w-12 h-12 text-purple-500 mx-auto mb-8" />
                  <blockquote className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-nexorus rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-black dark:text-white">
                        {caseStudy.testimonial.author}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {caseStudy.testimonial.role} at {caseStudy.testimonial.company}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        )}

        {/* Related Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <h2 className="text-3xl font-bold text-black dark:text-white font-display mb-12 text-center">
                  Related Case Studies
                </h2>
              </Reveal>
              
              <Reveal.Stagger className="grid md:grid-cols-2 gap-8">
                {caseStudies
                  .filter(cs => cs.id !== caseStudy.id && cs.category === caseStudy.category)
                  .slice(0, 2)
                  .map((relatedCase, index) => (
                    <Reveal key={index}>
                      <Link to={`/case-studies/${relatedCase.id}`} className="group">
                        <div className="apple-card overflow-hidden hover-lift">
                          <div className={`h-48 ${relatedCase.image} relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-white/90 dark:bg-black/90 text-black dark:text-white rounded-full text-sm font-medium">
                                {relatedCase.category}
                              </span>
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-black dark:text-white font-display mb-2 group-hover:text-gradient-primary transition-colors">
                              {relatedCase.title}
                            </h3>
                            <p className="text-sm text-gradient-primary font-semibold mb-3">
                              {relatedCase.subtitle}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                              {relatedCase.description}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                              <span>{relatedCase.client.industry}</span>
                              <span>{relatedCase.timeline}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
              </Reveal.Stagger>
              
              <Reveal delay={0.3}>
                <div className="text-center mt-12">
                  <Link to="/case-studies">
                    <Button variant="apple-white" size="lg" className="group">
                      <ExternalLink className="mr-2 group-hover:scale-110 transition-transform" />
                      View All Case Studies
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-4xl font-bold text-black dark:text-white font-display mb-6">
                Ready to Achieve Similar Results?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you implement similar solutions and achieve exceptional results for your business.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" className="group [animation-duration:10s] before:[animation-duration:13s] after:[animation-duration:13s]" onClick={redirectToContact}>
                  Start Your Project
                </Button>
                <Button variant="apple-white" size="lg" onClick={redirectToContact}>
                  Schedule Consultation
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

export default CaseStudyDetail;