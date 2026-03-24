// Training courses data
export const trainingCourses = [
  {
    id: 1,
    slug: 'health-cloud',
    name: 'Health Cloud',
    description: 'Master Salesforce Health Cloud for healthcare patient management, care coordination, and patient 360 solutions.',
    fullDescription: 'This comprehensive Health Cloud training covers patient engagement, care planning, symptom tracking, and integrated healthcare workflows. Learn to build patient-centric solutions that improve health outcomes and streamline healthcare operations.',
    icon: 'health_and_safety',
    image: '/assets/Training/health-cloud.svg',
    duration: '12 Weeks',
    level: 'Advanced',
    modules: [
      {
        title: 'Introduction to Salesforce Health Cloud',
        topics: ['Overview of Salesforce Health Cloud', 'Key Features and Benefits', 'Use Cases in Healthcare', 'Comparison with Other Salesforce Clouds', 'Health Cloud Architecture and Data Model']
      },
      {
        title: 'Setting Up Health Cloud',
        topics: ['Licensing and Prerequisites', 'Health Cloud Installation and Configuration', 'Setting Up Patient 360', 'Configuring Health Cloud Settings', 'Managing Users, Roles, and Profiles']
      },
      {
        title: 'Patient Management in Health Cloud',
        topics: ['Understanding the Patient Record', 'Care Plans and Care Programs', 'Patient Timeline and Interactions', 'Managing Encounters and Care Teams', 'Patient Outreach and Engagement Tools']
      },
      {
        title: 'Care Coordination and Collaboration',
        topics: ['Creating and Managing Care Teams', 'Assigning Tasks and Activities', 'Using Care Plans for Treatment Management', 'Communication Tools', 'Integrating with Electronic Health Records (EHR)']
      },
      {
        title: 'Health Cloud Data Model',
        topics: ['Core Objects in Health Cloud', 'Customizing Health Cloud Data Model', 'Working with Health Cloud Extensions', 'Managing Related Records', 'Data Migration and Integration Best Practices']
      },
      {
        title: 'Reporting and Analytics in Health Cloud',
        topics: ['Standard Reports and Dashboards', 'Building Custom Reports for Healthcare Metrics', 'Using Einstein Analytics for Predictive Insights', 'Tracking Key Performance Indicators', 'Compliance and Audit Reporting']
      },
      {
        title: 'Automation and Workflows',
        topics: ['Process Builder and Flows in Health Cloud', 'Automating Care Coordination Tasks', 'Alerts and Notifications for Care Teams', 'Best Practices for Workflow Automation']
      },
      {
        title: 'Security and Compliance',
        topics: ['HIPAA Compliance in Health Cloud', 'Data Security and Sharing Settings', 'Field-Level Security and Encryption', 'Audit Trails and Compliance Reporting', 'Managing Patient Consent and Privacy']
      },
      {
        title: 'Integration with External Systems',
        topics: ['EHR Integration (HL7, FHIR)', 'Telehealth and Remote Patient Monitoring', 'API Integration with Healthcare Systems', 'Middleware Solutions', 'Real-Time Data Synchronization']
      },
      {
        title: 'Mobile and Patient Engagement',
        topics: ['Salesforce Mobile App for Health Cloud', 'Patient Portal and Community Cloud', 'Appointment Scheduling and Reminders', 'Surveys and Feedback Collection', 'Enhancing Patient Experience']
      },
      {
        title: 'Advanced Topics & Best Practices',
        topics: ['AI and Predictive Analytics in Healthcare', 'Custom App Development with Health Cloud', 'Performance Optimization and Scaling', 'Troubleshooting Common Issues', 'Future Trends in Health Cloud']
      },
      {
        title: 'Certification & Career Path',
        topics: ['Salesforce Health Cloud Certification Overview', 'Exam Preparation Tips', 'Real-World Case Studies', 'Career Opportunities in Health Cloud', 'Resources for Continuous Learning']
      }
    ],
    capstone: 'Build a complete patient management system including care plans, patient portal, and care team coordination.'
  },
  {
    id: 2,
    slug: 'field-service-lightning',
    name: 'Field Service Lightning',
    description: 'Learn to implement mobile field service solutions for dispatch management, work orders, and technician scheduling.',
    fullDescription: 'Field Service Lightning training covers the complete field service lifecycle from scheduling to completion. Master work order management, service appointments, asset tracking, and mobile technician workflows.',
    icon: 'construction',
    image: '/assets/Training/field-service-lightning.svg',
    duration: '12 Weeks',
    level: 'Intermediate',
    modules: [
      {
        title: 'Introduction to Field Service Lightning (FSL)',
        topics: ['Overview of Field Service Lightning', 'Key Features and Benefits', 'Use Cases across Industries', 'FSL Architecture Overview', 'Dispatcher, Technician, and Customer Roles']
      },
      {
        title: 'FSL Setup & Configuration',
        topics: ['Enabling Field Service', 'Installing FSL Managed Package', 'Service Territories Setup', 'Operating Hours and Holidays', 'User Roles and Permissions']
      },
      {
        title: 'Work Orders & Service Appointments',
        topics: ['Understanding Work Orders', 'Creating and Managing Service Appointments', 'Work Types and Work Type Groups', 'Service Resources Setup', 'Scheduling Policies']
      },
      {
        title: 'Scheduling & Optimization',
        topics: ['Dispatcher Console Overview', 'Manual vs Automated Scheduling', 'Optimization Engine', 'Scheduling Policies and Objectives', 'Gantt Chart Usage']
      },
      {
        title: 'Resource Management',
        topics: ['Managing Technicians (Service Resources)', 'Skills and Skill Levels', 'Crew Management', 'Resource Availability', 'Capacity Planning']
      },
      {
        title: 'Mobile App for Technicians',
        topics: ['Field Service Mobile App Overview', 'Offline Capabilities', 'Job Execution and Updates', 'Capturing Signatures and Photos', 'Navigation and Route Optimization']
      },
      {
        title: 'Inventory Management',
        topics: ['Products and Inventory Tracking', 'Managing Warehouses and Locations', 'Stock Levels and Replenishment', 'Product Consumption', 'Returns and Transfers']
      },
      {
        title: 'Automation & Workflows',
        topics: ['Flows in FSL', 'Automating Work Order Lifecycle', 'Notifications and Alerts', 'Approval Processes', 'Best Practices']
      },
      {
        title: 'Reports & Analytics',
        topics: ['Standard FSL Reports', 'Custom Reports for Field Operations', 'KPI Tracking', 'Dashboards for Dispatchers', 'Performance Monitoring']
      },
      {
        title: 'Integration & APIs',
        topics: ['Integration with IoT Devices', 'Third-Party System Integrations', 'API-Based Data Exchange', 'MuleSoft Integration', 'Real-Time Updates']
      },
      {
        title: 'Security & Compliance',
        topics: ['Data Security in FSL', 'Role Hierarchy and Sharing', 'Mobile Security', 'Compliance and Audit', 'Data Privacy']
      },
      {
        title: 'Advanced Topics & Career Path',
        topics: ['AI-based Scheduling', 'Custom Development in FSL', 'Performance Optimization', 'FSL Certification Guide', 'Career Opportunities in Field Service']
      }
    ],
    capstone: 'Create an end-to-end field service solution with scheduling optimization and mobile app configuration.'
  },
  {
    id: 3,
    slug: 'manufacturing-cloud',
    name: 'Manufacturing Cloud',
    description: 'Implement manufacturing sales and service solutions for order management, contracts, and product traceability.',
    fullDescription: 'Manufacturing Cloud training teaches you to build solutions for manufacturers including account-based forecasting, agreement management, and product traceability. Perfect for sales and service transformations in manufacturing.',
    icon: 'factory',
    image: '/assets/Training/manufacturing-cloud.svg',
    duration: '12 Weeks',
    level: 'Intermediate',
    modules: [
      {
        title: 'Introduction to Salesforce Manufacturing Cloud',
        topics: ['Overview of Salesforce Manufacturing Cloud', 'Key Features and Benefits', 'Use Cases in Manufacturing Industry', 'Comparison with Other Salesforce Clouds', 'Manufacturing Cloud Architecture and Data Model']
      },
      {
        title: 'Setting Up Manufacturing Cloud',
        topics: ['Licensing and Prerequisites', 'Installation and Configuration', 'Setting Up Account-Based Forecasting', 'Configuring Manufacturing Cloud Settings', 'Managing Users, Roles, and Profiles']
      },
      {
        title: 'Account-Based Forecasting',
        topics: ['Understanding Forecasting in Manufacturing', 'Creating and Managing Forecasts', 'Collaborating with Sales and Operations Teams', 'Forecast Adjustments and Versioning', 'Reporting on Forecast Accuracy']
      },
      {
        title: 'Sales Agreements',
        topics: ['Understanding Sales Agreements', 'Creating and Managing Agreements', 'Tracking Product Schedules and Volumes', 'Managing Amendments and Renewals', 'Linking Agreements with Opportunities']
      },
      {
        title: 'Manufacturing Data Model',
        topics: ['Core Objects', 'Customizing Data Model', 'Managing Relationships Between Objects', 'Data Migration Best Practices']
      },
      {
        title: 'Reporting and Analytics',
        topics: ['Standard Reports and Dashboards', 'Custom Reports for Manufacturing KPIs', 'Using CRM Analytics', 'Tracking Performance Metrics', 'Forecast and Revenue Insights']
      },
      {
        title: 'Automation and Workflows',
        topics: ['Using Flows and Process Builder', 'Automating Forecast Updates', 'Alerts and Notifications', 'Approval Processes for Agreements', 'Best Practices for Automation']
      },
      {
        title: 'Security and Compliance',
        topics: ['Data Security Model', 'Role Hierarchies and Sharing Rules', 'Field-Level Security', 'Compliance in Manufacturing Industry', 'Audit and Monitoring']
      },
      {
        title: 'Integration with External Systems',
        topics: ['ERP Integration', 'API Integrations', 'Middleware', 'Data Synchronization', 'Real-Time Data Exchange']
      },
      {
        title: 'Mobile and User Experience',
        topics: ['Salesforce Mobile App Usage', 'Managing Forecasts on Mobile', 'User Interface Customization', 'Enhancing User Adoption']
      },
      {
        title: 'Advanced Topics & Best Practices',
        topics: ['AI in Manufacturing', 'Custom App Development', 'Performance Optimization', 'Troubleshooting Common Issues', 'Future Trends']
      },
      {
        title: 'Certification & Career Path',
        topics: ['Manufacturing Cloud Certification Overview', 'Exam Preparation Tips', 'Real-World Use Cases', 'Career Opportunities', 'Learning Resources']
      }
    ],
    capstone: 'Build a manufacturing customer 360 solution with forecasting, contract management, and product traceability.'
  },
  {
    id: 4,
    slug: 'industries-cloud',
    name: 'Industries Cloud',
    description: 'Learn OmniStudio, Data Model, and custom industry solutions for vertical-specific CRM implementations.',
    fullDescription: 'Industries Cloud training covers the foundation of all industry solutions. Learn OmniStudio, Vlocity CMT, and custom industry data models to build any vertical-specific solution.',
    icon: 'apps',
    image: '/assets/Training/industries-cloud.svg',
    duration: '12 Weeks',
    level: 'Advanced',
    modules: [
      {
        title: 'Industries Foundation',
        topics: ['Industry Data Model Overview', 'Core Components', 'OmniStudio Overview', 'Industry Cloud Architecture', 'Vertical Solutions Overview']
      },
      {
        title: 'OmniStudio - Fundamentals',
        topics: ['OmniStudio Overview', 'Introduction to OmniScripts', 'DataRaptors Basics', 'Integration Procedures', 'OmniStudio Console']
      },
      {
        title: 'OmniScript Development',
        topics: ['Building OmniScripts', 'Script Templates', 'Data Elements', 'Navigation and Validation', 'Advanced OmniScript Patterns']
      },
      {
        title: 'DataRaptors',
        topics: ['DataRaptor Types', 'Extraction, Transform, Load', 'Data Mapping', 'Error Handling', 'Performance Optimization']
      },
      {
        title: 'Integration Procedures',
        topics: ['API Integration', 'REST and SOAP Services', 'External Services', 'Middleware Integration', 'Real-Time Data Sync']
      },
      {
        title: 'Industry Templates',
        topics: ['Public Sector Solutions', 'Healthcare Industry', 'Financial Services', 'Manufacturing Industry', 'Retail Industry']
      },
      {
        title: 'Vlocity CMT',
        topics: ['Vlocity CMT Overview', 'CPQ Implementation', 'Insurance Policy Management', 'Telecom Solutions', 'Energy Industry']
      },
      {
        title: 'Custom Industry Solutions',
        topics: ['Building Custom Data Models', 'Industry-Specific Components', 'Process Automation', 'Reporting and Analytics', 'Integration Best Practices']
      },
      {
        title: 'Card Composer',
        topics: ['Card Composer Overview', 'Building Industry Cards', 'Data Binding', 'Styling and Branding', 'Advanced Card Patterns']
      },
      {
        title: 'DX (Developer Experience)',
        topics: ['VS Code Setup', 'Salesforce CLI', 'Source Tracking', 'Deployment Strategies', 'Version Control']
      },
      {
        title: 'Advanced Topics & Best Practices',
        topics: ['Performance Optimization', 'Security Best Practices', 'Testing Strategies', 'Migration Considerations', 'Future of Industries Cloud']
      },
      {
        title: 'Certification & Career Path',
        topics: ['Industries Cloud Certification Overview', 'OmniStudio Certification', 'Exam Preparation Tips', 'Career Opportunities', 'Resources for Learning']
      }
    ],
    capstone: 'Build a custom industry solution using OmniStudio with complete integration and data model.'
  },
  {
    id: 5,
    slug: 'financial-service-cloud',
    name: 'Financial Service Cloud',
    description: 'Master wealth management, banking, and insurance solutions with FSC data model and compliance.',
    fullDescription: 'Financial Service Cloud training covers the complete banking and wealth management data model. Learn household management, prospector, compliance tracking, and financial account modeling for banking transformations.',
    icon: 'account_balance',
    image: '/assets/Training/financial-service-cloud.svg',
    duration: '12 Weeks',
    level: 'Advanced',
    modules: [
      {
        title: 'Introduction to Financial Service Cloud',
        topics: ['Overview of Financial Service Cloud', 'Key Features and Benefits', 'Use Cases in Banking and Insurance', 'Comparison with Sales Cloud and Service Cloud', 'FSC Architecture and Data Model']
      },
      {
        title: 'FSC Setup & Configuration',
        topics: ['Licensing and Prerequisites', 'FSC Installation and Configuration', 'Setting Up Financial Services Data Model', 'Configuring FSC Settings', 'Managing Users, Roles, and Profiles']
      },
      {
        title: 'Household Management',
        topics: ['Understanding Households', 'Creating and Managing Households', 'Household Hierarchy', 'Household Financial Overview', 'Household Member Management']
      },
      {
        title: 'Account Management',
        topics: ['Financial Accounts', 'Banking Accounts', 'Investment Accounts', 'Insurance Policies', 'Account Relationships']
      },
      {
        title: 'Prospecting & Opportunity Management',
        topics: ['Prospector Overview', 'Lead and Opportunity Management', 'Campaign Management', 'Sales Pipeline', 'Forecasting']
      },
      {
        title: 'Wealth Management',
        topics: ['Wealth Management Overview', 'Financial Planning', 'Investment Planning', 'Asset Allocation', 'Portfolio Management']
      },
      {
        title: 'Insurance Solutions',
        topics: ['Policy Management', 'Claims Processing', 'Underwriting', 'Agent Management', 'Insurance Analytics']
      },
      {
        title: 'Compliance & Audit',
        topics: ['Audit Trail', 'Compliance Checks', 'Regulatory Reporting', 'Data Privacy', 'Risk Management']
      },
      {
        title: 'Reporting and Analytics',
        topics: ['Standard Reports and Dashboards', 'Custom Reports for Financial Services', 'Einstein Analytics', 'KPI Tracking', 'Compliance Reporting']
      },
      {
        title: 'Automation and Workflows',
        topics: ['Flows and Process Builder', 'Automating Financial Processes', 'Alerts and Notifications', 'Approval Processes', 'Best Practices']
      },
      {
        title: 'Integration & APIs',
        topics: ['Integration with Core Banking Systems', 'API Integration', 'Middleware Solutions', 'Data Synchronization', 'Real-Time Updates']
      },
      {
        title: 'Certification & Career Path',
        topics: ['Financial Service Cloud Certification Overview', 'Exam Preparation Tips', 'Real-World Case Studies', 'Career Opportunities', 'Resources for Continuous Learning']
      }
    ],
    capstone: 'Build a complete wealth management solution with household management, compliance tracking, and financial planning.'
  },
  {
    id: 6,
    slug: 'experience-cloud',
    name: 'Experience Cloud',
    description: 'Create customer and partner portals with Experience Builder, Lightning Web Components, and authentication.',
    fullDescription: 'Experience Cloud training covers the complete portal implementation lifecycle. Learn Experience Builder, digital experiences, community moderation, and custom Lightning Web Components for external users.',
    icon: 'language',
    image: '/assets/Training/experience-cloud.svg',
    duration: '12 Weeks',
    level: 'Intermediate',
    modules: [
      {
        title: 'Introduction to Experience Cloud',
        topics: ['Overview of Experience Cloud', 'Key Features and Benefits', 'Use Cases for Customer and Partner Portals', 'Experience Cloud vs Community Cloud', 'Licensing and Prerequisites']
      },
      {
        title: 'Digital Experiences Setup',
        topics: ['Creating Digital Experiences', 'Experience Builder Overview', 'Templates and Themes', 'Branding and Customization', 'Domain Management']
      },
      {
        title: 'Experience Builder',
        topics: ['Experience Builder Interface', 'Page Editor', 'Components and Widgets', 'Navigation Setup', 'Search Configuration']
      },
      {
        title: 'Community Templates',
        topics: ['Customer Service Template', 'Partner Portal Template', 'Lightning Bolts', 'Custom Template Development', 'Template Selection Best Practices']
      },
      {
        title: 'User Management & Security',
        topics: ['External User Licenses', 'Customer User Setup', 'Partner User Management', 'Sharing Settings', 'Guest User Access']
      },
      {
        title: 'Authentication & Login',
        topics: ['Login Settings', 'Self-Registration', 'Forgot Password Flow', 'Multi-Factor Authentication', 'SSO Integration']
      },
      {
        title: 'Content Management',
        topics: ['Chatter Implementation', 'Feed Tracking', 'Files and Documents', 'Knowledge Articles', 'Topic Management']
      },
      {
        title: 'Lightning Web Components for Experience',
        topics: ['LWC Overview', 'Building Custom LWCs', 'Component Styling', 'Data Binding', 'Deployment to Experience']
      },
      {
        title: 'Moderation & Governance',
        topics: ['Content Moderation', 'Reputation and Karma', 'Idea Themes', 'Case Deflection', 'Escalation Rules']
      },
      {
        title: 'Reports & Analytics',
        topics: ['Experience Analytics', 'Usage Metrics', 'Login Metrics', 'Content Engagement', 'Custom Dashboards']
      },
      {
        title: 'Integration & APIs',
        topics: ['REST API for External Users', 'Salesforce Connect', 'Web-to-Case and Web-to-Lead', 'Experience API', 'Third-Party Integrations']
      },
      {
        title: 'Advanced Topics & Best Practices',
        topics: ['Performance Optimization', 'Mobile Responsive Design', 'Search Optimization', 'Troubleshooting Common Issues', 'Experience Cloud Certification Guide']
      }
    ],
    capstone: 'Build a complete customer portal with custom branding, LWC components, and external API integration.'
  },
  {
    id: 7,
    slug: 'cpq-cloud',
    name: 'CPQ Cloud',
    description: 'Master configure, price, quote solutions for streamlined sales processes and accurate pricing.',
    fullDescription: 'CPQ (Configure, Price, Quote) Cloud training covers the complete quote-to-cash lifecycle. Learn product configuration, pricing logic, quote generation, contract management, and billing integration for efficient sales processes.',
    icon: 'shopping_cart',
    image: '/assets/Training/cpq-cloud.svg',
    duration: '10 Weeks',
    level: 'Advanced',
    modules: [
      {
        title: 'Introduction to CPQ Cloud',
        topics: ['CPQ Overview', 'Quote-to-Cash Process', 'Key Features and Benefits', 'CPQ Architecture', 'Licensing and Prerequisites']
      },
      {
        title: 'Product Management',
        topics: ['Product Objects', 'Product Bundles', 'Product Options', 'Feature Management', 'Product Scheduling']
      },
      {
        title: 'Price Rules & Logic',
        topics: ['Pricing Methods', 'Price Rules Configuration', 'Block Pricing', 'Tiered Pricing', 'Discount Schedules']
      },
      {
        title: 'Quote Configuration',
        topics: ['Quote Line Editor', 'Option Constraints', 'Configuration Attributes', 'Validation Rules', 'Template Selection']
      },
      {
        title: 'Contracting',
        topics: ['Contract Sobject', 'Amendments', 'Renewals', 'Contract Terms', 'Auto-Renewal Setup']
      },
      {
        title: 'Approval Processes',
        topics: ['Approval Workflows', 'Approver Selection', 'Step Criteria', 'Delegation', 'Approval Emails']
      },
      {
        title: 'Billing Integration',
        topics: ['Billing Overview', 'Billing Rules', 'Invoice Generation', 'Revenue Recognition', 'Integration with Billing']
      },
      {
        title: 'Order Management',
        topics: ['Order Creation', 'Order Processing', 'Asset Management', 'Order Amendments', 'Fulfillment Integration']
      },
      {
        title: 'Advanced Pricing',
        topics: ['Complex Pricing Scenarios', 'Custom Price Formulas', 'Discount Guards', 'Margin Analysis', 'Pricing Optimization']
      },
      {
        title: 'Reports & Analytics',
        topics: ['CPQ Reporting', 'Quote Performance Metrics', 'Pricing Analysis', 'Sales Pipeline', 'Custom Dashboards']
      },
      {
        title: 'Integration & APIs',
        topics: ['CPQ APIs', 'Apex Integration', 'MuleSoft Integration', 'Third-Party ERP', 'Data Synchronization']
      },
      {
        title: 'Certification & Career Path',
        topics: ['CPQ Specialist Certification', 'Exam Preparation Tips', 'Implementation Best Practices', 'Career Opportunities', 'Resources for Learning']
      }
    ],
    capstone: 'Build a complete CPQ solution with product bundles, pricing rules, and contract management.'
  },
  {
    id: 8,
    slug: 'revenue-cloud',
    name: 'Revenue Cloud',
    description: 'Learn billing, revenue management, and subscription solutions for modern SaaS and subscription businesses.',
    fullDescription: 'Revenue Cloud training covers the complete revenue management lifecycle. Learn billing, subscription management, revenue recognition, usage-based pricing, and financial reporting for subscription businesses.',
    icon: 'payments',
    image: '/assets/Training/revenue-cloud.svg',
    duration: '10 Weeks',
    level: 'Advanced',
    modules: [
      {
        title: 'Introduction to Revenue Cloud',
        topics: ['Revenue Cloud Overview', 'Quote-to-Cash Evolution', 'Key Features and Benefits', 'Revenue Cloud Architecture', 'Licensing and Prerequisites']
      },
      {
        title: 'Subscription Management',
        topics: ['Subscription Objects', 'Subscription Terms', 'Renewal Management', 'Subscription Amendments', 'Trial Management']
      },
      {
        title: 'Billing Foundation',
        topics: ['Billing Overview', 'Invoice Generation', 'Billing Rules', 'Payment Processing', 'Credit Management']
      },
      {
        title: 'Pricing Models',
        topics: ['Subscription Pricing', 'Usage-Based Pricing', 'Tiered Pricing', 'Flat Fee Pricing', 'Hybrid Pricing Models']
      },
      {
        title: 'Revenue Recognition',
        topics: ['ASC 606 Compliance', 'Revenue Schedules', 'Recognition Rules', 'Deferred Revenue', 'Revenue Automation']
      },
      {
        title: 'Asset Management',
        topics: ['Asset Tracking', 'Asset Lifecycle', 'Usage Monitoring', 'Entitlement Management', 'Asset-Based Billing']
      },
      {
        title: 'Usage-Based Billing',
        topics: ['Usage Tracking', 'Metering Services', 'Consumption Tracking', 'Overage Billing', 'Usage Analytics']
      },
      {
        title: 'Contract Management',
        topics: ['Contract Objects', 'Contract Terms', 'Clause Library', 'Contract Analytics', 'Renewal Automation']
      },
      {
        title: 'Financial Reporting',
        topics: ['Revenue Analytics', 'Financial Dashboards', 'Revenue Forecasting', 'AR/AP Reports', 'Compliance Reporting']
      },
      {
        title: 'CPQ Integration',
        topics: ['CPQ Integration', 'Quote Sync', 'Order to Bill Process', 'Subscription Lifecycle', 'Data Flow']
      },
      {
        title: 'Integration & APIs',
        topics: ['Revenue Cloud APIs', 'ERP Integration', 'Payment Gateway', 'Third-Party Billing', 'Data Synchronization']
      },
      {
        title: 'Certification & Career Path',
        topics: ['Revenue Cloud Certification', 'Exam Preparation Tips', 'Implementation Best Practices', 'Career Opportunities', 'Resources for Learning']
      }
    ],
    capstone: 'Build a complete revenue management solution with subscription billing, usage tracking, and revenue recognition.'
  }
];