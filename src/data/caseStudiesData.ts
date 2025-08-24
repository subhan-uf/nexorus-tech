export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  image: string;
  tech: string[];
  category: string;
  client: {
    name: string;
    industry: string;
    size: string;
  };
  timeline: string;
  featured: boolean;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  details: {
    overview: string;
    technicalApproach: string;
    implementation: string;
    impact: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "synapsecrm-ai-platform",
    title: "SynapseCRM",
    subtitle: "AI-Powered Customer Intelligence Platform",
    description: "AI-powered customer relationship management system with automated lead scoring and predictive analytics.",
    fullDescription: "Built a comprehensive CRM platform that leverages machine learning to automate lead scoring, predict customer behavior, and provide actionable insights for sales teams. The system processes over 10M customer interactions daily.",
    challenge: "Our client, a fast-growing SaaS company, was struggling with manual lead qualification and poor conversion rates. Their sales team was spending 60% of their time on administrative tasks rather than selling, and they had no visibility into which leads were most likely to convert.",
    solution: "We developed SynapseCRM, an AI-powered platform that automatically scores leads, predicts customer lifetime value, and provides personalized recommendations for each prospect. The system integrates with their existing tools and learns from every interaction.",
    results: [
      {
        metric: "Conversion Rate",
        value: "+340%",
        description: "Increase in lead-to-customer conversion rate"
      },
      {
        metric: "Sales Velocity",
        value: "65% Faster",
        description: "Reduction in average sales cycle length"
      },
      {
        metric: "Revenue Growth",
        value: "$2.3M",
        description: "Additional annual recurring revenue generated"
      },
      {
        metric: "Time Savings",
        value: "25 hrs/week",
        description: "Saved per sales representative"
      }
    ],
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    tech: ["Next.js", "OpenAI GPT-4", "PostgreSQL", "Stripe", "Redis", "Python"],
    category: "SaaS Platform",
    client: {
      name: "TechFlow Solutions",
      industry: "B2B SaaS",
      size: "50-200 employees"
    },
    timeline: "6 months",
    featured: true,
    testimonial: {
      quote: "SynapseCRM transformed our entire sales process. We're now closing deals 65% faster and our conversion rates have more than tripled. The AI insights are incredibly accurate and actionable.",
      author: "Sarah Chen",
      role: "VP of Sales",
      company: "TechFlow Solutions"
    },
    details: {
      overview: "SynapseCRM represents a new generation of intelligent CRM systems that go beyond simple contact management to provide predictive insights and automated workflows. Built for modern sales teams who need to move fast and close more deals.",
      technicalApproach: "The platform uses a combination of natural language processing, machine learning models, and real-time data analysis to score leads, predict outcomes, and automate routine tasks. We implemented a microservices architecture to ensure scalability and reliability.",
      implementation: "The project was delivered in three phases over 6 months: Phase 1 focused on core CRM functionality and data integration, Phase 2 introduced AI-powered lead scoring and analytics, and Phase 3 added advanced automation and predictive features.",
      impact: "Since deployment, TechFlow Solutions has seen dramatic improvements in sales performance, with conversion rates increasing from 2.1% to 9.3% and average deal size growing by 45%. The platform now processes over 10,000 leads monthly."
    }
  },
  {
    id: "ghostscraper-pro-data-automation",
    title: "GhostScraper Pro",
    subtitle: "High-Performance Web Scraping Engine",
    description: "High-performance web scraping solution capable of processing 15K+ pages per hour with intelligent content extraction.",
    fullDescription: "Engineered a distributed web scraping platform that can process over 15,000 pages per hour while maintaining data quality and avoiding detection. Used by e-commerce companies to monitor competitor pricing and product data.",
    challenge: "An e-commerce analytics company needed to scrape product data from 500+ websites daily, but their existing solution was slow, unreliable, and frequently blocked by anti-bot measures. They were losing competitive intelligence and missing market opportunities.",
    solution: "We built GhostScraper Pro, a distributed scraping platform with intelligent proxy rotation, adaptive rate limiting, and ML-powered content extraction. The system can scale horizontally and includes sophisticated anti-detection measures.",
    results: [
      {
        metric: "Processing Speed",
        value: "15K+ pages/hour",
        description: "Average processing rate across all targets"
      },
      {
        metric: "Success Rate",
        value: "94.3%",
        description: "Successful data extraction rate"
      },
      {
        metric: "Detection Rate",
        value: "<2%",
        description: "Requests blocked or flagged as bots"
      },
      {
        metric: "Cost Reduction",
        value: "67%",
        description: "Compared to previous solution"
      }
    ],
    image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
    tech: ["Python", "Playwright", "Redis", "Docker", "MongoDB", "Proxies"],
    category: "Data Automation",
    client: {
      name: "MarketIntel Analytics",
      industry: "E-commerce Analytics",
      size: "20-50 employees"
    },
    timeline: "4 months",
    featured: true,
    testimonial: {
      quote: "GhostScraper Pro completely transformed our data collection capabilities. We went from processing 2,000 pages per day to over 360,000, and the data quality is exceptional. It's been a game-changer for our business.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "MarketIntel Analytics"
    },
    details: {
      overview: "GhostScraper Pro is an enterprise-grade web scraping platform designed for companies that need to collect large amounts of web data reliably and efficiently. It combines advanced anti-detection techniques with intelligent content extraction.",
      technicalApproach: "The system uses a distributed architecture with multiple scraping nodes, intelligent proxy rotation, and machine learning for content classification and extraction. We implemented behavioral patterns to mimic human browsing and avoid detection.",
      implementation: "Development was completed in 4 phases: infrastructure setup, core scraping engine, anti-detection features, and monitoring/optimization tools. The platform includes real-time dashboards and automated alerting systems.",
      impact: "MarketIntel Analytics now processes over 360,000 pages daily with 94.3% success rate, enabling them to provide real-time competitive intelligence to their clients and expand into new markets."
    }
  },
  {
    id: "raven-ai-assistant",
    title: "RAVEN AI Assistant",
    subtitle: "Enterprise Conversational AI Platform",
    description: "Enterprise-grade AI chatbot with context awareness and seamless integration with existing workflows.",
    fullDescription: "Developed an intelligent AI assistant that understands business context, integrates with enterprise systems, and provides automated support across multiple channels. Handles complex queries and escalates appropriately to human agents.",
    challenge: "A Fortune 500 company was overwhelmed with customer support tickets, with average response times of 24+ hours and customer satisfaction scores below 60%. Their support team was burning out and costs were escalating rapidly.",
    solution: "We created RAVEN, an AI assistant that handles routine inquiries, provides intelligent routing for complex issues, and integrates with their existing CRM, ticketing, and knowledge base systems. The AI learns from every interaction to improve responses.",
    results: [
      {
        metric: "Response Time",
        value: "84% Faster",
        description: "Average time to first response"
      },
      {
        metric: "Resolution Rate",
        value: "73%",
        description: "Issues resolved without human intervention"
      },
      {
        metric: "Customer Satisfaction",
        value: "+89%",
        description: "Improvement in CSAT scores"
      },
      {
        metric: "Cost Savings",
        value: "$1.2M/year",
        description: "Reduction in support costs"
      }
    ],
    image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    tech: ["LangChain", "GPT-4", "Vector DB", "Webhooks", "FastAPI", "React"],
    category: "AI Automation",
    client: {
      name: "GlobalTech Corp",
      industry: "Technology Services",
      size: "10,000+ employees"
    },
    timeline: "8 months",
    featured: true,
    testimonial: {
      quote: "RAVEN has revolutionized our customer support. We're now providing 24/7 support with faster response times and higher satisfaction scores, while significantly reducing costs. It's like having our best support agent available around the clock.",
      author: "Jennifer Walsh",
      role: "Director of Customer Success",
      company: "GlobalTech Corp"
    },
    details: {
      overview: "RAVEN AI Assistant represents the next evolution of customer support, combining advanced language models with deep business context to provide human-like assistance at scale. The platform learns continuously and integrates seamlessly with existing workflows.",
      technicalApproach: "Built on a foundation of large language models enhanced with retrieval-augmented generation (RAG), the system accesses real-time data from multiple enterprise systems to provide accurate, contextual responses. Advanced conversation management ensures smooth handoffs to human agents when needed.",
      implementation: "The 8-month implementation included extensive training data preparation, integration with 12 different enterprise systems, and gradual rollout across different support channels. We implemented comprehensive monitoring and feedback loops for continuous improvement.",
      impact: "Since deployment, GlobalTech Corp has seen dramatic improvements in support metrics, with 73% of inquiries now resolved automatically and customer satisfaction scores reaching all-time highs of 4.7/5."
    }
  },
  {
    id: "metricspro-dashboard",
    title: "MetricsPro Dashboard",
    subtitle: "Real-time Analytics Platform",
    description: "Real-time analytics dashboard with customizable widgets and automated reporting capabilities.",
    fullDescription: "Built a comprehensive analytics platform that aggregates data from multiple sources, provides real-time visualizations, and generates automated reports. Designed for executive teams who need instant access to business metrics.",
    challenge: "A growing startup was drowning in data from multiple tools but had no unified view of their business performance. Executives were spending hours each week manually compiling reports, and critical insights were being missed due to data silos.",
    solution: "MetricsPro Dashboard consolidates data from 15+ sources into a single, real-time view of business performance. The platform includes customizable dashboards, automated alerting, and AI-powered insights that highlight anomalies and opportunities.",
    results: [
      {
        metric: "Decision Speed",
        value: "10x Faster",
        description: "Time from data to decision making"
      },
      {
        metric: "Report Generation",
        value: "95% Automated",
        description: "Reduction in manual reporting work"
      },
      {
        metric: "Data Accuracy",
        value: "99.7%",
        description: "Accuracy of automated data aggregation"
      },
      {
        metric: "Time Savings",
        value: "40 hrs/week",
        description: "Executive time saved on reporting"
      }
    ],
    image: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
    tech: ["React", "D3.js", "WebSocket", "Node.js", "InfluxDB", "Docker"],
    category: "Data Visualization",
    client: {
      name: "RapidGrow Ventures",
      industry: "FinTech",
      size: "100-300 employees"
    },
    timeline: "5 months",
    featured: false,
    testimonial: {
      quote: "MetricsPro has transformed how we make decisions. We now have real-time visibility into every aspect of our business, and the automated insights have helped us identify opportunities we would have missed otherwise.",
      author: "Alex Thompson",
      role: "CEO",
      company: "RapidGrow Ventures"
    },
    details: {
      overview: "MetricsPro Dashboard eliminates data silos by providing a unified, real-time view of business performance. The platform combines data visualization, automated reporting, and intelligent alerting to keep teams informed and aligned.",
      technicalApproach: "The platform uses a modern data pipeline architecture with real-time streaming, in-memory processing, and intelligent caching. We implemented a flexible widget system that allows users to create custom visualizations without coding.",
      implementation: "Development focused on data integration, visualization engine, and user experience. We built connectors for 15+ popular business tools and created an intuitive drag-and-drop interface for dashboard creation.",
      impact: "RapidGrow Ventures now makes data-driven decisions 10x faster, with executives spending 95% less time on manual reporting and more time on strategic initiatives that drive growth."
    }
  },
  {
    id: "autoinvoice-ai-processing",
    title: "AutoInvoice AI",
    subtitle: "Intelligent Document Processing System",
    description: "Intelligent invoice processing system that extracts data and automates payment workflows.",
    fullDescription: "Developed an AI-powered system that automatically processes invoices, extracts key information, validates data, and integrates with existing accounting systems. Reduces manual processing time by 90% while improving accuracy.",
    challenge: "A mid-size manufacturing company was processing 1,000+ invoices monthly by hand, leading to errors, delays, and high processing costs. The manual process took 15 minutes per invoice and was prone to human error.",
    solution: "AutoInvoice AI uses computer vision and natural language processing to automatically extract data from invoices in any format, validate the information, and route approvals. The system integrates with their existing ERP and accounting software.",
    results: [
      {
        metric: "Processing Time",
        value: "90% Reduction",
        description: "Average time per invoice processed"
      },
      {
        metric: "Accuracy Rate",
        value: "99.2%",
        description: "Data extraction accuracy"
      },
      {
        metric: "Cost Savings",
        value: "$180K/year",
        description: "Reduction in processing costs"
      },
      {
        metric: "Error Reduction",
        value: "95%",
        description: "Fewer data entry errors"
      }
    ],
    image: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    tech: ["Computer Vision", "OCR", "FastAPI", "MongoDB", "TensorFlow", "Azure"],
    category: "Process Automation",
    client: {
      name: "Precision Manufacturing Inc",
      industry: "Manufacturing",
      size: "200-500 employees"
    },
    timeline: "3 months",
    featured: false,
    testimonial: {
      quote: "AutoInvoice AI has been a game-changer for our accounts payable process. We're processing invoices 10x faster with better accuracy, and our team can focus on more strategic work instead of data entry.",
      author: "Maria Gonzalez",
      role: "CFO",
      company: "Precision Manufacturing Inc"
    },
    details: {
      overview: "AutoInvoice AI transforms manual invoice processing into an automated, intelligent workflow. The system handles invoices in any format, from any vendor, while maintaining the highest levels of accuracy and security.",
      technicalApproach: "The solution combines optical character recognition (OCR) with machine learning models trained specifically for financial documents. Advanced validation rules ensure data quality, while intelligent routing handles approval workflows.",
      implementation: "The 3-month project included system integration, model training on historical invoices, and gradual rollout across different vendor types. We provided comprehensive training and ongoing support for the accounting team.",
      impact: "Precision Manufacturing now processes 1,000+ invoices monthly in a fraction of the time, with 99.2% accuracy and significant cost savings that improve their bottom line."
    }
  },
  {
    id: "cloudsync-api-infrastructure",
    title: "CloudSync API",
    subtitle: "Multi-Cloud File Synchronization Service",
    description: "Multi-cloud file synchronization service with real-time collaboration and version control.",
    fullDescription: "Architected a robust file synchronization service that works across multiple cloud providers, enabling seamless collaboration and automated backups. Supports real-time sync, conflict resolution, and version history.",
    challenge: "A creative agency needed a reliable way to sync large files across multiple cloud storage providers while enabling real-time collaboration between distributed team members. Existing solutions were slow and unreliable for their large design files.",
    solution: "CloudSync API provides a unified interface for multiple cloud providers with intelligent sync algorithms, conflict resolution, and real-time collaboration features. The system optimizes transfers based on file types and network conditions.",
    results: [
      {
        metric: "Sync Speed",
        value: "5x Faster",
        description: "File synchronization across clouds"
      },
      {
        metric: "Reliability",
        value: "99.9%",
        description: "Uptime and successful sync rate"
      },
      {
        metric: "Collaboration",
        value: "+400%",
        description: "Increase in team collaboration"
      },
      {
        metric: "Storage Costs",
        value: "30% Lower",
        description: "Optimized multi-cloud strategy"
      }
    ],
    image: "bg-gradient-to-br from-pink-500/20 to-red-500/20",
    tech: ["AWS S3", "Google Cloud", "GraphQL", "Docker", "Redis", "Kubernetes"],
    category: "Cloud Infrastructure",
    client: {
      name: "Creative Collective",
      industry: "Digital Agency",
      size: "30-80 employees"
    },
    timeline: "4 months",
    featured: false,
    testimonial: {
      quote: "CloudSync API solved our biggest challenge - keeping our distributed team in sync. Files sync instantly across all platforms, and we've never lost a single file. It's incredibly reliable and fast.",
      author: "James Parker",
      role: "Creative Director",
      company: "Creative Collective"
    },
    details: {
      overview: "CloudSync API eliminates the complexity of multi-cloud file management while providing enterprise-grade reliability and performance. The platform enables seamless collaboration regardless of team location or device.",
      technicalApproach: "Built with a microservices architecture, the system uses intelligent algorithms to optimize sync paths and minimize bandwidth usage. Advanced conflict resolution ensures no work is ever lost during collaborative editing.",
      implementation: "The project involved integrating with multiple cloud providers, building real-time sync engines, and creating intuitive client applications. We implemented comprehensive monitoring and automated failover systems.",
      impact: "Creative Collective now operates as a truly distributed team with seamless file access and collaboration, leading to increased productivity and the ability to take on larger, more complex projects."
    }
  }
];

export const getFeaturedCaseStudies = () => {
  return caseStudies.filter(study => study.featured);
};

export const getCaseStudyById = (id: string) => {
  return caseStudies.find(study => study.id === id);
};

export const getCaseStudiesByCategory = (category: string) => {
  if (category === "All") return caseStudies;
  return caseStudies.filter(study => study.category === category);
};

export const getCategories = () => {
  const categories = ["All", ...new Set(caseStudies.map(study => study.category))];
  return categories;
};