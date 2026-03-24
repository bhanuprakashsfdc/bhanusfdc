// Certifications data for Certifications page
// Sorted from toughest (Architect) to easiest (Specialist)

// Base Trailhead profile URL for verification
const TRAILHEAD_PROFILE = 'https://www.salesforce.com/trailblazer/bhanuprakashsfdc';

export const certifications = [
  // === ARCHITECTS (Hardest) ===
  {
    id: 14,
    name: 'Salesforce Certified System Architect',
    shortName: 'System Architect',
    level: 'Architect',
    year: 2025,
    status: 'Active',
    description: 'Certified System Architects focus on off-platform systems, integration, and securing access between systems.',
    color: '#EF4444',
    image: '/assets/Certifications/System-Architect.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },
  {
    id: 4,
    name: 'Salesforce Certified Application Architect',
    shortName: 'Application Architect',
    level: 'Architect',
    year: 2023,
    status: 'Active',
    description: 'Certified Application Architects have a deep understanding of native Salesforce features and functionality.',
    color: '#EF4444',
    image: '/assets/Certifications/Application-Architect.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },
  {
    id: 7,
    name: 'Salesforce Certified Platform Data Architect',
    shortName: 'Data Architect',
    level: 'Architect',
    year: 2023,
    status: 'Active',
    description: 'Certified Platform Data Architects are experts at designing sound, scalable, high-performing solutions on the Salesforce Platform.',
    color: '#EF4444',
    image: '/assets/Certifications/Platform-Data-Architect.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },
  {
    id: 12,
    name: 'Salesforce Certified Platform Integration Architect',
    shortName: 'Integration Architect',
    level: 'Architect',
    year: 2025,
    status: 'Active',
    description: 'Certified Platform Integration Architects are experts at designing sound and scalable technical solutions on the Salesforce Platform.',
    color: '#EF4444',
    image: '/assets/Certifications/Platform-Integration-Architect.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },
  {
    id: 13,
    name: 'Salesforce Certified Platform Sharing and Visibility Architect',
    shortName: 'Sharing Architect',
    level: 'Architect',
    year: 2023,
    status: 'Active',
    description: 'Certified Platform Sharing and Visibility Architects are fluent in designing sound, scalable, and high-performing technical solutions.',
    color: '#EF4444',
    image: '/assets/Certifications/Platform-Sharing-and-Visibility-Architect.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },
  {
    id: 11,
    name: 'Salesforce Certified Platform Identity and Access Management Architect',
    shortName: 'IAM Architect',
    level: 'Architect',
    year: 2025,
    status: 'Active',
    description: 'Certified Platform Identity and Access Management Architects are experts at designing sound, high-performing solutions on the Salesforce Platform.',
    color: '#EF4444',
    image: '/assets/Certifications/Platform-Identity-and-Access-Management-Architect.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },
  {
    id: 10,
    name: 'Salesforce Certified Platform Development Lifecycle and Deployment Architect',
    shortName: 'Deployment Architect',
    level: 'Architect',
    year: 2025,
    status: 'Active',
    description: 'Certified Platform Development Lifecycle and Deployment Architects are experts at assessing architecture environments and requirements.',
    color: '#EF4444',
    image: '/assets/Certifications/Platform-Development-Lifecycle-Deployement-Architect.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },

  // === DEVELOPERS ===
  {
    id: 9,
    name: 'Salesforce Certified Platform Developer II',
    shortName: 'Platform Developer II',
    level: 'Developer',
    year: 2022,
    status: 'Active',
    description: 'Certified Platform Developer II developers are experts in the advanced programmatic capabilities of the Salesforce Platform.',
    color: '#06B6D4',
    image: '/assets/Certifications/Platform-Developer-II.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },
  {
    id: 8,
    name: 'Salesforce Certified Platform Developer',
    shortName: 'Platform Developer I',
    level: 'Developer',
    year: 2020,
    status: 'Active',
    description: 'Certified Platform Developers understand how to develop and deploy custom business logic and custom interfaces using the programmatic capabilities.',
    color: '#06B6D4',
    image: '/assets/Certifications/Platform-Developer.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },
  {
    id: 6,
    name: 'Salesforce Certified Platform App Builder',
    shortName: 'Platform App Builder',
    level: 'Developer',
    year: 2023,
    status: 'Active',
    description: 'Certified Platform App Builders have the skills and knowledge to design, build, and implement custom applications using the declarative customization capabilities.',
    color: '#00A1E0',
    image: '/assets/Certifications/Platform-App-Builder.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },

  // === ADMINISTRATORS ===
  {
    id: 5,
    name: 'Salesforce Certified Platform Administrator',
    shortName: 'Platform Admin',
    level: 'Administrator',
    year: 2020,
    status: 'Active',
    description: 'Certified Platform Administrators are Salesforce professionals who build and manage trusted solutions on the Salesforce Platform.',
    color: '#00A1E0',
    image: '/assets/Certifications/Platform-Administrator.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },

  // === CONSULTANTS ===
  {
    id: 16,
    name: 'Salesforce Certified Service Cloud Consultant',
    shortName: 'Service Cloud',
    level: 'Consultant',
    year: 2022,
    status: 'Active',
    description: 'Certified Service Cloud Consultants are experts at designing and implementing Service Cloud solutions.',
    color: '#00A1E0',
    image: '/assets/Certifications/Service_Cloud.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },
  {
    id: 15,
    name: 'Salesforce Certified Field Service Consultant',
    shortName: 'Field Service',
    level: 'Consultant',
    year: 2023,
    status: 'Active',
    description: 'Certified Field Service Consultants have proven experience with the administration and configuration of the Salesforce Platform.',
    color: '#F59E0B',
    image: '/assets/Certifications/Field-Service-Consultant.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },
  {
    id: 3,
    name: 'Salesforce Certified CRM Analytics and Einstein Discovery Consultant',
    shortName: 'CRM Analytics',
    level: 'Consultant',
    year: 2020,
    status: 'Active',
    description: 'Certified CRM Analytics and Einstein Discovery Consultants have experience designing and implementing on the CRM Analytics and Einstein Discovery platforms.',
    color: '#06B6D4',
    image: '/assets/Certifications/CRM-Analytics-and-Einstein-Discovery-Consultant-Badge.webp',
    verifyUrl: TRAILHEAD_PROFILE
  },

  // === SPECIALISTS (Easiest) ===
  {
    id: 2,
    name: 'Salesforce Certified AI Associate',
    shortName: 'AI Associate',
    level: 'Specialist',
    year: 2024,
    status: 'Active',
    description: 'Certified AI Associates should be able to provide informed strategies and guide stakeholder decisions based on Salesforce\'s Trusted AI Principles.',
    color: '#8B5CF6',
    image: '/assets/Certifications/ai-associate.png',
    verifyUrl: TRAILHEAD_PROFILE
  },
  {
    id: 1,
    name: 'Salesforce Certified Agentforce Specialist',
    shortName: 'Agentforce Specialist',
    level: 'Specialist',
    year: 2024,
    status: 'Active',
    description: 'Certified Agentforce Specialists are responsible for managing and optimizing Agentforce and have a deep understanding of both Salesforce platform configuration and Agentforce capabilities.',
    color: '#00A1E0',
    image: '/assets/Certifications/Agentforce-Specialist.webp',
    verifyUrl: TRAILHEAD_PROFILE
  }
];

export const certificationStats = {
  total: 16,
  administrators: 1,
  developers: 4,
  consultants: 3,
  architects: 7,
  specialists: 2
};
