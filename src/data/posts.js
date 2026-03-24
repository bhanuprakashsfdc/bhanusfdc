// Blog posts data for Bhanu Prakash Salesforce Blog
export const posts = [
  {
    id: 1,
    slug: 'building-agentforce-custom-actions-with-apex',
    title: 'Building Agentforce Custom Actions with Apex',
    excerpt: 'Learn how to create powerful custom actions for Agentforce using Apex classes. This comprehensive guide covers everything from defining action schemas to handling complex business logic.',
    category: 'Agentforce',
    tags: ['Agentforce', 'Apex', 'Custom Actions', 'AI'],
    readTime: 12,
    date: '2026-03-15',
    featured: true,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Agentforce represents Salesforce\'s next-generation AI capabilities, enabling developers to build autonomous agents that can handle complex business processes. One of the most powerful features is the ability to create custom actions using Apex.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Understanding Agentforce Custom Actions'
      },
      {
        type: 'paragraph',
        text: 'Custom actions allow your Agentforce agents to interact with external systems, execute business logic, and perform operations that go beyond the standard built-in actions. Whether you need to query custom objects, call external APIs, or orchestrate complex workflows, custom actions provide the flexibility you need.'
      },
      {
        type: 'code',
        lang: 'apex',
        code: `// Example: Custom Action for Case Priority Update
public with sharing class CasePriorityAction {
    
    @InvocableMethod(
        label='Update Case Priority'
        description='Updates the priority of a case based on criteria'
    )
    public static List<Response> updateCasePriority(List<Request> requests) {
        List<Response> responses = new List<Response>();
        
        for (Request req : requests) {
            Response res = new Response();
            res.caseId = req.caseId;
            
            try {
                Case caseToUpdate = [SELECT Id, Priority, Status 
                                     FROM Case WHERE Id = :req.caseId];
                
                caseToUpdate.Priority = req.newPriority;
                caseToUpdate.Status = req.newStatus;
                
                update caseToUpdate;
                res.success = true;
                res.message = 'Case priority updated successfully';
            } catch (Exception e) {
                res.success = false;
                res.message = e.getMessage();
            }
            
            responses.add(res);
        }
        
        return responses;
    }
    
    public class Request {
        @InvocableVariable(required=true)
        public Id caseId;
        
        @InvocableVariable(required=true)
        public String newPriority;
        
        @InvocableVariable
        public String newStatus;
    }
    
    public class Response {
        @InvocableVariable
        public Id caseId;
        
        @InvocableVariable
        public Boolean success;
        
        @InvocableVariable
        public String message;
    }
}`
      },
      {
        type: 'heading',
        level: 2,
        text: 'Best Practices for Custom Actions'
      },
      {
        type: 'paragraph',
        text: 'When building custom actions for Agentforce, there are several best practices you should follow to ensure reliability and performance.'
      },
      {
        type: 'bullet',
        items: [
          'Always implement proper error handling and return meaningful error messages',
          'Use bulkified patterns to handle multiple records efficiently',
          'Implement caching where appropriate to reduce API calls',
          'Add descriptive labels and descriptions for better agent understanding',
          'Test thoroughly with various input scenarios'
        ]
      },
      {
        type: 'blockquote',
        text: 'The key to successful Agentforce custom actions is treating them as first-class citizens in your architecture. Invest time in proper design and your agents will reward you with reliable behavior.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Security Considerations'
      },
      {
        type: 'paragraph',
        text: 'Always run custom actions with the appropriate sharing rules. Use `with sharing` or `without sharing` based on your requirements, and never expose sensitive data without proper authorization checks.'
      }
    ]
  },
  {
    id: 2,
    slug: 'lwc-vs-aura-2025-migration-guide',
    title: 'LWC vs Aura: A 2025 Migration Guide',
    excerpt: 'An updated comprehensive guide for migrating from Aura components to Lightning Web Components. Covers compatibility, performance improvements, and step-by-step migration strategies.',
    category: 'LWC',
    tags: ['LWC', 'Aura', 'Migration', 'Performance'],
    readTime: 15,
    date: '2026-03-10',
    featured: true,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'As Salesforce continues to push LWC as the primary component framework, many organizations are embarking on migration journeys from Aura. This guide provides a comprehensive roadmap for 2025.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Why Migrate to LWC?'
      },
      {
        type: 'paragraph',
        text: 'Lightning Web Components offer significant advantages over Aura, including better performance, modern JavaScript standards, and tighter integration with the Lightning platform.'
      },
      {
        type: 'bullet',
        items: [
          '40-60% faster initial load times',
          'Modern ES6+ JavaScript features',
          'Better memory management',
          'Easier third-party library integration',
          'Future-proof your investment'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Migration Strategy'
      },
      {
        type: 'paragraph',
        text: 'A successful migration requires careful planning. I recommend the following phased approach:'
      },
      {
        type: 'numbered',
        items: [
          'Audit your existing Aura components',
          'Identify reusable base components for early migration',
          'Create an LWC component library',
          'Migrate page-by-page or feature-by-feature',
          'Implement hybrid components where needed'
        ]
      }
    ]
  },
  {
    id: 3,
    slug: 'salesforce-flow-best-practices-enterprise',
    title: 'Salesforce Flow Best Practices for Enterprise Orgs',
    excerpt: 'Master Flow Builder with these enterprise-grade best practices. Learn how to build scalable, maintainable, and performant flow solutions for complex business requirements.',
    category: 'Flow Builder',
    tags: ['Flow Builder', 'Automation', 'Enterprise', 'Best Practices'],
    readTime: 18,
    date: '2026-03-05',
    featured: true,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Flow Builder has evolved into Salesforce\'s primary declarative automation tool, and for good reason. It\'s powerful, flexible, and increasingly capable of handling complex enterprise scenarios. However, with great power comes great responsibility.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Design Principles for Enterprise Flows'
      },
      {
        type: 'paragraph',
        text: 'When building flows for large organizations, consider these architectural principles:'
      },
      {
        type: 'bullet',
        items: [
          'Modular design with reusable subflows',
          'Clear naming conventions and documentation',
          'Error handling at every integration point',
          'Bulkification for handling large data volumes',
          'Version control and deployment strategies'
        ]
      },
      {
        type: 'code',
        lang: 'xml',
        code: `<!-- Example: Subflow Design Pattern -->
<flow:name>Get Account Team Members</flow:name>
<flow:description>
  Reusable subflow to get all active account team members
</flow:description>
<flow:inputVariables>
  <flow:name>accountId</flow:name>
  <flow:dataType>String</flow:dataType>
</flow:inputVariables>
<flow:outputVariables>
  <flow:name>teamMembers</flow:name>
  <flow:dataType>SObject</flow:dataType>
  <flow:collection>true</flow:collection>
</flow:outputVariables>`
      }
    ]
  },
  {
    id: 4,
    slug: 'einstein-copilot-integration-external-apis',
    title: 'Einstein Copilot Integration with External APIs',
    excerpt: 'Discover how to integrate Einstein Copilot with external APIs for enhanced AI capabilities. Step-by-step tutorial with real-world examples and security best practices.',
    category: 'Agentforce',
    tags: ['Einstein Copilot', 'AI', 'Integration', 'API'],
    readTime: 14,
    date: '2026-02-28',
    featured: false,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Einstein Copilot is transforming how organizations leverage AI within their Salesforce instances. Learn how to extend its capabilities by integrating with external APIs.'
      }
    ]
  },
  {
    id: 5,
    slug: 'soql-performance-tuning-selective-queries',
    title: 'SOQL Performance Tuning: Selective Queries',
    excerpt: 'Deep dive into writing highly selective SOQL queries for optimal performance. Learn about query optimization, index utilization, and avoiding common performance pitfalls.',
    category: 'Apex',
    tags: ['SOQL', 'Performance', 'Optimization', 'Apex'],
    readTime: 16,
    date: '2026-02-20',
    featured: false,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'SOQL performance is critical in enterprise Salesforce implementations. Poorly written queries can lead to governor limit exceptions and degraded user experience.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Understanding Selective Queries'
      },
      {
        type: 'paragraph',
        text: 'A selective query is one that can use indexes efficiently. Salesforce automatically determines if a query is selective based on the filters applied.'
      }
    ]
  },
  {
    id: 6,
    slug: 'platform-events-vs-change-data-capture',
    title: 'Platform Events vs Change Data Capture',
    excerpt: 'Compare Platform Events and Change Data Capture for real-time integrations. Learn when to use each technology and how to implement them effectively.',
    category: 'Architecture',
    tags: ['Platform Events', 'CDC', 'Integration', 'Real-time'],
    readTime: 11,
    date: '2026-02-15',
    featured: false,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Both Platform Events and Change Data Capture enable real-time integration patterns, but they serve different use cases. Understanding when to use each is crucial for building robust architectures.'
      }
    ]
  },
  {
    id: 7,
    slug: 'apex-governor-limits-advanced-patterns',
    title: 'Apex Governor Limits: Advanced Patterns',
    excerpt: 'Master advanced patterns for working within Salesforce governor limits. Includes batch processing, queueable patterns, and memory optimization techniques.',
    category: 'Apex',
    tags: ['Apex', 'Governor Limits', 'Batch', 'Performance'],
    readTime: 20,
    date: '2026-02-10',
    featured: false,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Understanding and working effectively within governor limits is essential for any Salesforce developer. This guide covers advanced patterns for handling large data volumes.'
      }
    ]
  },
  {
    id: 8,
    slug: 'experience-cloud-building-partner-portals',
    title: 'Experience Cloud: Building Partner Portals',
    excerpt: 'Complete guide to building enterprise partner portals using Experience Cloud. Covers partner self-service, lead distribution, and collaborative deal workflows.',
    category: 'Architecture',
    tags: ['Experience Cloud', 'Partner Portal', 'B2B', 'Portal'],
    readTime: 13,
    date: '2026-02-05',
    featured: false,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Experience Cloud provides powerful capabilities for building partner portals that enable seamless collaboration between organizations.'
      }
    ]
  },
  {
    id: 9,
    slug: 'cpq-pricing-waterfall-deep-dive',
    title: 'CPQ Pricing Waterfall Deep Dive',
    excerpt: 'Understanding the CPQ pricing waterfall is essential for complex pricing scenarios. Learn how to configure discounts, margins, and tiered pricing effectively.',
    category: 'Certifications',
    tags: ['CPQ', 'Pricing', 'Discounts', 'Configuration'],
    readTime: 17,
    date: '2026-01-28',
    featured: false,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'The pricing waterfall is the heart of CPQ configuration. Mastering it enables you to implement sophisticated pricing strategies that drive business value.'
      }
    ]
  },
  {
    id: 10,
    slug: 'getting-agentforce-specialist-certified',
    title: 'Getting Agentforce Specialist Certified: My Journey',
    excerpt: 'A personal account of preparing for and passing the Agentforce Specialist certification. Study tips, resources, and what to expect on exam day.',
    category: 'Certifications',
    tags: ['Agentforce', 'Certification', 'Study Guide', 'Trailhead'],
    readTime: 10,
    date: '2026-01-20',
    featured: false,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'The Agentforce Specialist certification is one of the newest Salesforce certifications, validating your ability to build AI-powered agents. Here\'s how I approached preparation.'
      }
    ]
  },
  {
    id: 11,
    slug: 'mulesoft-vs-salesforce-integration-patterns',
    title: 'MuleSoft vs Salesforce Integration Patterns',
    excerpt: 'Compare integration approaches using MuleSoft vs native Salesforce tools. Learn when to use each and how to design hybrid integration architectures.',
    category: 'Integration',
    tags: ['MuleSoft', 'Integration', 'API', 'Architecture'],
    readTime: 14,
    date: '2026-01-15',
    featured: false,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Choosing between MuleSoft and native Salesforce integration tools is a critical architectural decision. Each has strengths in different scenarios.'
      }
    ]
  },
  {
    id: 12,
    slug: 'salesforce-data-cloud-first-90-days',
    title: 'Salesforce Data Cloud: First 90 Days',
    excerpt: 'Strategic guide for implementing Data Cloud in your organization. Best practices for data unification, activation, and measuring ROI in the first quarter.',
    category: 'Architecture',
    tags: ['Data Cloud', 'CDP', 'Implementation', 'Strategy'],
    readTime: 19,
    date: '2026-01-10',
    featured: false,
    author: {
      name: 'Bhanu Prakash Reddy',
      role: 'Salesforce Architect',
      avatar: 'BP'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Data Cloud represents a paradigm shift in how organizations unify and activate their data. Here\'s a strategic approach for your first 90 days of implementation.'
      }
    ]
  }
];

export const categories = [
  'All',
  'Agentforce',
  'LWC',
  'Apex',
  'Flow Builder',
  'Architecture',
  'Certifications',
  'Integration'
];

export const tags = [
  { name: 'Agentforce', count: 3 },
  { name: 'LWC', count: 2 },
  { name: 'Apex', count: 3 },
  { name: 'Flow Builder', count: 1 },
  { name: 'Integration', count: 3 },
  { name: 'Architecture', count: 4 },
  { name: 'Certifications', count: 2 },
  { name: 'Performance', count: 2 },
  { name: 'Best Practices', count: 2 },
  { name: 'AI', count: 2 },
  { name: 'CPQ', count: 1 },
  { name: 'Data Cloud', count: 1 }
];
