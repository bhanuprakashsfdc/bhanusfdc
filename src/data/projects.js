// Projects data for Portfolio page
export const projects = [
  {
    id: 1,
    slug: 'agentforce-customer-service-agent',
    name: 'Agentforce Customer Service Agent',
    type: 'Agentforce',
    category: 'Agentforce',
    description: 'AI-powered customer service agent handling 10K+ daily inquiries with 85% automation rate. Built custom actions for case management, knowledge base integration, and order tracking.',
    techStack: ['Agentforce', 'Apex', 'LWC', 'Einstein AI'],
    status: 'Delivered',
    year: 2025,
    highlights: [
      'Reduced support ticket volume by 45%',
      'Achieved 4.5/5 customer satisfaction',
      'Integrated with 3 external systems'
    ]
  },
  {
    id: 2,
    slug: 'enterprise-lwc-component-library',
    name: 'Enterprise LWC Component Library',
    type: 'LWC Components',
    category: 'LWC',
    description: 'Comprehensive reusable component library with 50+ components including data tables, forms, charts, and dynamic layouts. Standardized UI across all orgs.',
    techStack: ['LWC', 'TypeScript', 'CSS', 'Jest'],
    status: 'Open Source',
    year: 2024,
    highlights: [
      'Downloaded 1000+ times',
      'Reduces dev time by 40%',
      'Maintained on GitHub'
    ]
  },
  {
    id: 3,
    slug: 'complex-approval-workflow-engine',
    name: 'Complex Approval Workflow Engine',
    type: 'Flow Automation',
    category: 'Flow',
    description: 'Multi-level approval system with dynamic routing, parallel approvals, delegation, and escalations. Handles 500+ daily approval requests.',
    techStack: ['Flow Builder', 'Apex', 'Process Builder'],
    status: 'Delivered',
    year: 2024,
    highlights: [
      'Reduced approval time by 70%',
      '100% audit compliance',
      'Self-service delegation feature'
    ]
  },
  {
    id: 4,
    slug: 'mulesoft-salesforce-integration-hub',
    name: 'MuleSoft Salesforce Integration Hub',
    type: 'Integration',
    category: 'Integration',
    description: 'Enterprise integration platform connecting Salesforce with ERP, HR systems, marketing automation, and 15+ external APIs using MuleSoft Anypoint Platform.',
    techStack: ['MuleSoft', 'REST API', 'OAuth 2.0', 'DataWeave'],
    status: 'Delivered',
    year: 2023,
    highlights: [
      '2M+ daily API calls',
      '99.99% uptime',
      'Real-time sync < 1s latency'
    ]
  },
  {
    id: 5,
    slug: 'multi-org-salesforce-architecture',
    name: 'Multi-Org Salesforce Architecture',
    type: 'Architecture Design',
    category: 'Architecture',
    description: 'Designed and implemented hub-and-spoke architecture for 12 business units with shared services, cross-org reporting, and centralized data governance.',
    techStack: ['Salesforce', 'Integration', 'BigObjects'],
    status: 'Delivered',
    year: 2023,
    highlights: [
      'Unified 50M+ records',
      'Saved $2M annually',
      'Zero data silos'
    ]
  },
  {
    id: 6,
    slug: 'healthcare-patient-360-portal',
    name: 'Healthcare Patient 360 Portal',
    type: 'Experience Cloud',
    category: 'Architecture',
    description: 'Patient self-service portal with appointment scheduling, medical records access, prescription management, and telehealth integration.',
    techStack: ['Experience Cloud', 'LWC', 'Health Cloud', 'FHIR API'],
    status: 'Delivered',
    year: 2022,
    highlights: [
      '50K+ registered patients',
      '30% reduction in call center',
      'HIPAA compliant'
    ]
  },
  {
    id: 7,
    slug: 'financial-services-cpq-platform',
    name: 'Financial Services CPQ Platform',
    type: 'CPQ Implementation',
    category: 'Architecture',
    description: 'Enterprise CPQ solution for wealth management with complex pricing structures, multi-currency support, and automated renewal processing.',
    techStack: ['CPQ', 'Apex', 'Pricing Matrix', 'Quote Templates'],
    status: 'Delivered',
    year: 2022,
    highlights: [
      '$500M+ annual revenue',
      '90% quote accuracy',
      '60% faster sales cycle'
    ]
  },
  {
    id: 8,
    slug: 'data-cloud-implementation',
    name: 'Data Cloud Implementation',
    type: 'Data Cloud',
    category: 'Architecture',
    description: 'Implemented Salesforce Data Cloud for unified customer profiles, real-time segmentation, and AI-powered analytics across 10 data sources.',
    techStack: ['Data Cloud', 'CDP', 'Tableau CRM', 'Einstein AI'],
    status: 'Delivered',
    year: 2024,
    highlights: [
      'Unified 100M+ data points',
      'Real-time activation',
      '360-degree customer view'
    ]
  }
];

export const projectFilters = [
  'All',
  'Agentforce',
  'LWC',
  'Flow',
  'Integration',
  'Architecture'
];
