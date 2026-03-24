import { useState, useRef, useEffect } from 'react';

const MODELS = [
  'nvidia/nemotron-3-super-120b-a12b:free',
];

const systemPrompt = `You are a Salesforce expert AI assistant. You help users with Salesforce-related questions only.

You specialize in:
- Salesforce platform fundamentals and architecture
- Lightning Web Components (LWC) and Aura development
- Apex programming and triggers
- Flow Builder and process automation
- Sales Cloud, Service Cloud, Experience Cloud
- Field Service, CPQ, Marketing Cloud
- Agentforce and Einstein AI
- Salesforce certifications and career guidance
- Integration patterns and best practices

If users ask about anything unrelated to Salesforce, politely redirect them to say "I'm specifically designed to help with Salesforce questions. Feel free to ask about Salesforce development, implementation, or any Salesforce-related topic!"

Respond in a helpful, professional manner with clear, simple sentences. Always add this disclaimer at the end of your response: 'AI can make mistakes. Please double-check responses.' Avoid using markdown symbols like #, *, -, or :.`;

const fallbackResponses = {
  'lwc': "Lightning Web Components (LWC) is Salesforce's modern JavaScript framework for building fast, reusable UI components. It uses standard HTML, CSS, and JavaScript with Web Components standards. Key features include lightweight, secure, and mobile-responsive design.\n\nKey LWC concepts: Shadow DOM, Lightning Design System, Lightning Message Service, LMS for communication between Aura and LWC.\n\nAI can make mistakes. Please double-check responses.",
  'apex': "Apex is Salesforce's procedural programming language similar to Java. It's used for building complex business logic, triggers, and batch processes. Key concepts include classes, triggers, SOQL queries, and governor limits.\n\nImportant Apex topics: DML operations, SOSL queries, Batch Apex, Schedule Apex, Queueable Apex, Apex Triggers (before/after), and Governor Limits.\n\nAI can make mistakes. Please double-check responses.",
  'flow': "Flow Builder is Salesforce's powerful point-and-click automation tool. You can build flows to automate business processes without code. Types include Screen Flows, Record-Triggered Flows, Schedule-Triggered Flows, and Platform Event-Triggered Flows.\n\nKey Flow features: Flow Elements, Decision Elements, Loop elements, Rollback, Flow Debugger, Flow Best Practices.\n\nAI can make mistakes. Please double-check responses.",
  'sales cloud': "Sales Cloud is Salesforce's CRM platform for sales teams. Key features include lead management, opportunity tracking, account management, sales forecasting, and pipeline visualization. It helps sales teams close more deals efficiently.\n\nSales Cloud includes: Lead management, Opportunity pipeline, Account hierarchy, Sales forecasts, Quote management, Contract management.\n\nAI can make mistakes. Please double-check responses.",
  'service cloud': "Service Cloud is Salesforce's customer service and support platform. Features include case management, service console, knowledge base, live agent chat, and field service. It helps deliver exceptional customer support.\n\nService Cloud features: Case management, Service Console, Knowledge base, Entitlements, Live Agent, Field Service.\n\nAI can make mistakes. Please double-check responses.",
  'experience cloud': "Experience Cloud (formerly Community Cloud) lets you create branded digital experiences for customers, partners, and employees. Build portals, websites, and apps with self-service capabilities and collaboration tools.\n\nKey features: Experience Builder, Lightning Bolt, Salesforce CMS, Topic clustering, Reputation levels.\n\nAI can make mistakes. Please double-check responses.",
  'field service': "Field Service in Salesforce helps schedule and manage mobile workforce. Features include work orders, scheduling, dispatching, inventory management, and mobile app for field technicians.\n\nKey capabilities: Work orders, Service appointments, Resource management, Service schedules, Mobile app.\n\nAI can make mistakes. Please double-check responses.",
  'cpq': "CPQ (Configure, Price, Quote) automates the sales process for complex products and services. It handles product configuration, pricing, discount management, and quote generation.\n\nCPQ features: Product bundles, Pricing rules, Quote templates, Approval processes, Renewal management.\n\nAI can make mistakes. Please double-check responses.",
  'agentforce': "Agentforce is Salesforce's AI-powered autonomous agents that can handle tasks autonomously. It extends Salesforce's Einstein AI capabilities to automate service, sales, and marketing workflows.\n\nAgentforce topics: Agent actions, Topic-grounded responses, Salesforce Data Cloud integration, Security controls.\n\nAI can make mistakes. Please double-check responses.",
  'einstein': "Einstein is Salesforce's AI technology that brings predictive insights to users. Features include Einstein Bots, Einstein Prediction Builder, Einstein Analytics, and Einstein GPT for generative AI.\n\nEinstein features: Einstein Bot Builder, Prediction Builder, Einstein Analytics, Einstein GPT, Einstein Activity Capture.\n\nAI can make mistakes. Please double-check responses.",
  'certification': "Salesforce offers various certifications across different tracks including Administrator, Developer, Architect, and Consultant. Popular certs include Platform App Builder, Platform Developer I/II, and Technical Architect.\n\nPopular certifications: Admin, App Builder, Developer I & II, Architect (Application, System, Technical), Consultant certs.\n\nAI can make mistakes. Please double-check responses.",
  'integration': "Salesforce integration options include REST/SOAP APIs, MuleSoft, Platform Events, Canvas, and Lightning Connect. Each has specific use cases depending on your integration needs.\n\nIntegration methods: REST/SOAP API, MuleSoft Anypoint Platform, Platform Events, Canvas Apps, Outbound Messages.\n\nAI can make mistakes. Please double-check responses.",
  'interview': "Great question! Here are common Salesforce interview questions:\n\n1. What are Governor Limits in Salesforce?\n2. Explain the difference between SOQL and SOSL\n3. What is the order of execution in Salesforce?\n4. Difference between Trigger and Flow?\n5. What are Custom Settings in Salesforce?\n6. Explain Salesforce data model (Objects, Fields, Relationships)\n7. What is a wrapper class in Apex?\n8. Difference between Record-Triggered Flow and Trigger\n\nWhich topic would you like me to explain in detail?\n\nAI can make mistakes. Please double-check responses.",
  'soql': "SOQL (Salesforce Object Query Language) is used to query records from Salesforce database. Unlike SQL, SOQL is object-specific.\n\nKey SOQL features: SELECT, FROM, WHERE, ORDER BY, LIMIT, OFFSET, Aggregate functions (COUNT, SUM, AVG).\n\nExample: SELECT Id, Name, Account.Name FROM Contact WHERE Email = 'test@example.com'\n\nAI can make mistakes. Please double-check responses.",
  'governor': "Governor limits are runtime limits enforced by Salesforce to ensure efficient use of resources in a multi-tenant environment.\n\nKey limits: SOQL queries (100), DML statements (150), CPU time (10 sec), Heap size (6 MB), Query rows (50000).\n\nBest practices: Use bulkify patterns, avoid queries in loops, use collections, efficient SOQL.\n\nAI can make mistakes. Please double-check responses.",
  'trigger': "Apex Triggers execute logic before or after record operations (insert, update, delete, undelete).\n\nTrigger types: Before Insert, After Insert, Before Update, After Update, Before Delete, After Delete, After Undelete.\n\nBest practices: Use trigger handler pattern, bulkify code, avoid DML in loops, use limits methods.\n\nAI can make mistakes. Please double-check responses.",
  'aura': "Aura is Salesforce's original component-based UI framework. It uses component bundle with .cmp, .js, .css, .auradoc, .svg files.\n\nKey Aura features: Components, Events, Controllers, Helpers, Interfaces (implement 'force:appHostable'), Lightning Data Service.\n\nNote: LWC is now recommended over Aura for new development.\n\nAI can make mistakes. Please double-check responses.",
  'sandbox': "Sandbox is a copy of production environment for development and testing. Types: Developer, Developer Pro, Partial, Full.\n\nSandbox types: Developer (2GB), Developer Pro (5GB), Partial (GB), Full (complete copy).\n\nUse cases: Development, testing, training, staging.\n\nAI can make mistakes. Please double-check responses.",
  'deployment': "Salesforce deployment methods include Change Sets, Metadata API, ANT Migration Tool, VS Code with Salesforce CLI, and Scratch Orgs.\n\nPopular tools: VS Code + SFDX, Ant Migration Tool, Salesforce CLI, CI/CD pipelines (GitHub Actions, Jenkins).\n\nAI can make mistakes. Please double-check responses.",
  'default': "I'm specifically designed to help with Salesforce questions! Feel free to ask about Salesforce development, implementation, interview preparation, or any Salesforce-related topic.\n\nPopular topics: LWC, Apex, Flow, Sales Cloud, Service Cloud, Agentforce, Certifications, Integration.\n\nAI can make mistakes. Please double-check responses."
};

export default function AIChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getFallbackResponse = (input) => {
    const lowerInput = input.toLowerCase();
    for (const [key, response] of Object.entries(fallbackResponses)) {
      if (lowerInput.includes(key)) {
        return response;
      }
    }
    return fallbackResponses.default;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    
    setError('');
    const userMessage = { id: Date.now(), role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    if (!apiKey) {
      const fallback = getFallbackResponse(inputValue);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: fallback }]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://bhanuprakashsfdc.com',
          'X-Title': 'Bhanu Prakash Salesforce'
        },
        body: JSON.stringify({
          model: MODELS[0],
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages,
            userMessage
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const fallback = getFallbackResponse(inputValue);
        setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: fallback }]);
        return;
      }

      const data = await response.json();
      let aiResponse = data.choices[0].message.content || data.choices[0].message.reasoning || '';
      
      if (data.choices[0].message.reasoning && !data.choices[0].message.content) {
        aiResponse = data.choices[0].message.reasoning;
      }
      
      if (aiResponse) {
        aiResponse = aiResponse
          .replace(/#+\s*/g, '')
          .replace(/^[-*]\s*/gm, '')
          .replace(/^:\s*/g, '')
          .replace(/\*\*/g, '')
          .replace(/\*/g, '')
          .replace(/`/g, '')
          .replace(/\n+/g, ' ')
          .trim();
      }
      
      if (!aiResponse || aiResponse.trim() === '') {
        aiResponse = getFallbackResponse(inputValue);
      }
      
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: aiResponse }]);
    } catch (err) {
      console.error('Error calling AI:', err);
      const fallback = getFallbackResponse(inputValue);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: fallback }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-gradient-to-r from-[#00a1e0] to-[#0077b5] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        aria-label="Ask me anything"
      >
        <span className="material-symbols-outlined text-white text-xl transition-transform duration-300 group-hover:scale-110">
          search
        </span>
        <span className="text-white font-semibold text-sm">Ask me anything</span>
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-8xl bg-[var(--color-surface)] rounded-2xl shadow-2xl border border-[var(--color-border)] overflow-hidden flex flex-col" style={{ height: '90vh', maxHeight: '1200px' }}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00a1e0] to-[#0077b5] p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-3xl">smart_toy</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl">Salesforce AI Expert</h3>
              <p className="text-white/70 text-sm">Your Salesforce knowledge assistant</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <span className="material-symbols-outlined text-white text-xl">close</span>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#00a1e0] to-[#0077b5] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-6xl">search</span>
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mb-3">
                How can I help you today?
              </h2>
              <p className="text-[var(--color-on-surface-variant)] mb-8 max-w-md mx-auto">
                Ask me about any Salesforce topic - development, implementation, or best practices.
              </p>
              
              {/* Quick suggestions */}
              <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
                {['What is Salesforce?', 'How to prepare for Salesforce interview?', 'Difference between Aura and LWC?', 'Salesforce developer roles and responsibilities', 'Governor limits in Salesforce', 'What is SOQL and SOSL?'].map((q, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setInputValue(q);
                    }}
                    className="px-5 py-2.5 bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)] rounded-full text-sm hover:bg-[#00a1e0] hover:text-white transition-colors font-medium"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-[#00a1e0]' : 'bg-gradient-to-br from-[#00a1e0] to-[#0077b5]'}`}>
                  <span className="material-symbols-outlined text-white text-lg">
                    {msg.role === 'user' ? 'person' : 'smart_toy'}
                  </span>
                </div>
                
                {/* Content */}
                <div className={`flex-1 max-w-[85%] ${msg.role === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block rounded-2xl px-5 py-3 text-base leading-relaxed ${msg.role === 'user' ? 'bg-[#00a1e0] text-white' : 'bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)]'}`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))
          )}
          
          {isLoading && (
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00a1e0] to-[#0077b5] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-lg">smart_toy</span>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-[var(--color-surface-variant)] rounded-2xl px-5 py-4">
                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 bg-[#00a1e0] rounded-full animate-bounce"></span>
                    <span className="w-2.5 h-2.5 bg-[#00a1e0] rounded-full animate-bounce delay-75"></span>
                    <span className="w-2.5 h-2.5 bg-[#00a1e0] rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Search Input */}
        <div className="p-5 border-t border-[var(--color-border)] shrink-0 bg-[var(--color-surface)]">
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center bg-[var(--color-surface-variant)] rounded-full border border-[var(--color-border)] focus-within:border-[#00a1e0] focus-within:ring-2 focus-within:ring-[#00a1e0]/20 transition-all">
              <span className="material-symbols-outlined text-[var(--color-on-surface-variant)] pl-5">search</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Salesforce..."
                className="flex-1 px-4 py-4 bg-transparent text-[var(--color-on-surface)] placeholder-[var(--color-on-surface-variant)]/60 outline-none text-base"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="w-12 h-12 bg-[#00a1e0] hover:bg-[#0077b5] rounded-full flex items-center justify-center transition-colors disabled:opacity-50 mr-1.5"
              >
                <span className="material-symbols-outlined text-white">send</span>
              </button>           
            </div>
          </form>
        </div>
           <p className="text-[var(--color-on-surface-variant)] text-xs text-center">Output generated by AI may contain mistakes. Please double-check responses.</p>
      </div>
    </div>
  );
}