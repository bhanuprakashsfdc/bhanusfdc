import { useState, useEffect } from 'react';

const quickQuestions = [
  "Who is Bhanu?",
  "Certifications",
  "Services offered",
  "Projects portfolio",
  "Training courses",
  "Contact info"
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(true);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadData, setLeadData] = useState({
    last_name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFullMessage, setShowFullMessage] = useState(false);

  // Reset lead form when chat is closed
  useEffect(() => {
    if (!isOpen) {
      // Keep lead form state
    }
  }, [isOpen]);

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new URLSearchParams();
    formData.append('oid', '00D280000016jv0');
    formData.append('retURL', 'http://www.bhanuprakashsfdc.com');
    formData.append('last_name', leadData.last_name);
    formData.append('email', leadData.email);
    formData.append('phone', leadData.phone);
    formData.append('description', leadData.description);

    try {
      await fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D280000016jv0', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      setLeadSubmitted(true);
      setShowFullMessage(true);
    } catch (error) {
      setLeadSubmitted(true);
      setShowFullMessage(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseFullMessage = () => {
    setShowFullMessage(false);
    setShowLeadForm(false);
    setMessages([{ id: 1, text: "Thanks for connecting! 🎉 I've received your information. Bhanu will get back to you soon. How else can I help you today?", sender: 'bot' }]);
  };

  const handleSkipForm = () => {
    setShowLeadForm(false);
    setMessages([{ id: 1, text: "Hi there! 👋 I'm Bhanu's AI assistant. How can I help you today?", sender: 'bot' }]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    handleSend();
  };

  // Full thank you message overlay
  if (showFullMessage) {
    return (
      <>
        {/* Floating Toggle Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowFullMessage(false);
          }}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#00a1e0] to-[#0077b5] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Toggle chat"
        >
          <span className="material-symbols-outlined text-white text-3xl transition-transform duration-300 group-hover:scale-110">
            chat
          </span>
          <span className="absolute w-full h-full rounded-full bg-[#00a1e0] animate-ping opacity-50"></span>
        </button>

        {/* Full Thank You Message */}
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-[var(--color-surface)] rounded-2xl shadow-2xl border border-[var(--color-border)] max-w-md w-full p-8 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00a1e0] to-[#0077b5] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-4xl">check_circle</span>
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-on-surface)] mb-2">Thanks for connecting! 🎉</h3>
            <p className="text-[var(--color-on-surface-variant)] mb-6">
              I've received your information. Bhanu will get back to you within 24 hours.
            </p>
            <div className="space-y-3">
              <button
                onClick={handleCloseFullMessage}
                className="w-full py-3 bg-gradient-to-r from-[#00a1e0] to-[#0077b5] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Continue Browsing
              </button>
              <button
                onClick={() => {
                  setShowFullMessage(false);
                  setShowLeadForm(false);
                  setMessages([{ id: 1, text: "Hi there! 👋 I'm Bhanu's AI assistant. How can I help you today?", sender: 'bot' }]);
                  setIsOpen(true);
                }}
                className="w-full py-3 text-[var(--color-on-surface-variant)] hover:text-[#00a1e0] transition-colors"
              >
                Ask me anything →
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#00a1e0] to-[#0077b5] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Toggle chat"
      >
        <span className="material-symbols-outlined text-white text-3xl transition-transform duration-300 group-hover:scale-110">
          {isOpen ? 'close' : 'chat'}
        </span>
        {!isOpen && (
          <span className="absolute w-full h-full rounded-full bg-[#00a1e0] animate-ping opacity-50"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] bg-[var(--color-surface)] rounded-2xl shadow-2xl border border-[var(--color-border)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00a1e0] to-[#0077b5] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">smart_toy</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">AI Assistant</h3>
              <p className="text-white/80 text-sm">Always here to help</p>
            </div>
          </div>

          {/* Content Area - Either Lead Form or Chat */}
          {showLeadForm ? (
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="text-center mb-4">
                <span className="material-symbols-outlined text-4xl text-[#00a1e0]">contact_mail</span>
                <h4 className="font-semibold mt-2 text-[var(--color-on-surface)]">Let's get started</h4>
                <p className="text-sm text-[var(--color-on-surface-variant)]">Fill in your details to connect with Bhanu</p>
              </div>
              
              <form onSubmit={handleLeadSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-on-surface)] mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={leadData.last_name}
                    onChange={(e) => setLeadData({...leadData, last_name: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)] border border-[var(--color-border)] focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent outline-none text-sm"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--color-on-surface)] mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={leadData.email}
                    onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)] border border-[var(--color-border)] focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent outline-none text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--color-on-surface)] mb-1">Phone</label>
                  <input
                    type="tel"
                    value={leadData.phone}
                    onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)] border border-[var(--color-border)] focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent outline-none text-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--color-on-surface)] mb-1">How can I help you?</label>
                  <textarea
                    value={leadData.description}
                    onChange={(e) => setLeadData({...leadData, description: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)] border border-[var(--color-border)] focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent outline-none text-sm resize-none"
                    rows="2"
                    placeholder="Tell us about your project or question..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-gradient-to-r from-[#00a1e0] to-[#0077b5] text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Connecting...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-sm">send</span>
                      Connect with Bhanu
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={handleSkipForm}
                  className="w-full py-2 text-sm text-[var(--color-on-surface-variant)] hover:text-[#00a1e0] transition-colors"
                >
                  Skip for now →
                </button>
              </form>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                        msg.sender === 'user'
                          ? 'bg-[#00a1e0] text-white rounded-br-md'
                          : 'bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)] rounded-bl-md'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-[var(--color-surface-variant)] rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-[#00a1e0] rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-[#00a1e0] rounded-full animate-bounce delay-75"></span>
                        <span className="w-2 h-2 bg-[#00a1e0] rounded-full animate-bounce delay-150"></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Questions */}
              <div className="px-4 pb-2 flex gap-2 flex-wrap">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickQuestion(q)}
                    className="text-xs px-3 py-1.5 rounded-full bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)] hover:bg-[#00a1e0] hover:text-white transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-[var(--color-border)]">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)] placeholder-[var(--color-on-surface-variant)]/60 border-0 focus:ring-2 focus:ring-[#00a1e0] outline-none text-sm"
                  />
                  <button
                    onClick={handleSend}
                    className="w-11 h-11 bg-[#00a1e0] hover:bg-[#0077b5] rounded-xl flex items-center justify-center transition-colors"
                  >
                    <span className="material-symbols-outlined text-white">send</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

function getBotResponse(input) {
  const lowerInput = input.toLowerCase();
  
  // About Bhanu
  if (lowerInput.includes('who') && (lowerInput.includes('bhanu') || lowerInput.includes('you')) || lowerInput.includes('about yourself') || lowerInput.includes('tell me about')) {
    return `👋 Hi! I'm Bhanu Prakash Reddy, a Salesforce Solution Architect with 10+ years of experience.

🏢 **Current Role:** Technical Lead at a leading Salesforce partner company

💼 **Expertise:**
• Agentforce Implementation & AI
• Lightning Web Components (LWC)
• Apex Programming
• Flow Builder & Automation
• Enterprise Architecture
• Salesforce Integration

🌟 **What I do:** I help organizations transform their business processes through Salesforce. Whether it's building custom applications, implementing AI-powered solutions with Agentforce, or designing enterprise architecture - I've got you covered!

📍 Based in India, working with clients globally.

Want to know more about my certifications or services?`;
  }
  
  // Certifications
  if (lowerInput.includes('certification') || lowerInput.includes('certifications') || lowerInput.includes('certified')) {
    return `📜 **Bhanu's Salesforce Certifications (16 total):**

🏆 **Technical Architect Track:**
• System Architect
• Application Architect  
• Data Architect
• Integration Architect
• Sharing & Visibility Architect
• Identity & Access Architect

💻 **Developer Track:**
• Platform Developer II (Pro)
• Platform Developer I

📊 **Administrator Track:**
• Platform Administrator II
• Platform Administrator I
• Platform App Builder

☁️ **Cloud Certifications:**
• Sales Cloud Consultant
• Service Cloud Consultant
• CRM Analytics & Einstein Discovery Consultant

🏭 **Specialized:**
• Field Service Consultant
• Agentforce Specialist

🔗 View all: /certifications.html`;
  }
  
  // Services
  if (lowerInput.includes('service') || lowerInput.includes('offer') || lowerInput.includes('help') || lowerInput.includes('what do you do')) {
    return `🛠️ **Salesforce Services Offered:**

1. **🔧 Custom Development**
   - Lightning Web Components (LWC)
   - Aura Components
   - Apex Programming
   - Visualforce Pages

2. **🤖 Agentforce & AI**
   - Agentforce Implementation
   - Einstein AI Setup
   - Einstein Bots

3. **⚡ Flow Automation**
   - Flow Builder
   - Process Builder
   - Workflow Rules

4. **🏗️ Architecture**
   - Solution Architecture
   - System Design
   - Best Practices Implementation

5. **🔄 Integration**
   - REST/SOAP APIs
   - MuleSoft
   - Third-party integrations

6. **📚 Training**
   - Custom training programs
   - Certification prep
   - Hands-on workshops

📞 Let's discuss your project! /contact.html`;
  }
  
  // Projects / Portfolio
  if (lowerInput.includes('project') || lowerInput.includes('portfolio') || lowerInput.includes('work') || lowerInput.includes('experience')) {
    return `💼 **Bhanu's Project Experience:**

🏢 **Enterprise Implementations:**
• Led end-to-end Salesforce implementations for Fortune 500 companies
• Designed and built custom LWC applications
• Implemented Agentforce for customer service automation

🔧 **Technical Projects:**
• Built AppExchange products with 1000+ installs
• Created custom payment integrations
• Developed real-time dashboards with CRM Analytics

🤖 **Agentforce Projects:**
• Implemented AI-powered customer support agents
• Built service bots with Einstein
• Created custom agent workflows

🏭 **Industry Experience:**
• Financial Services
• Healthcare
• Manufacturing
• Retail
• Technology

📁 View detailed portfolio: /portfolio.html`;
  }
  
  // Training
  if (lowerInput.includes('training') || lowerInput.includes('course') || lowerInput.includes('learn') || lowerInput.includes('teach')) {
    return `📚 **Salesforce Training Programs:**

☁️ **Cloud Training:**
• Sales Cloud Fundamentals
• Service Cloud Expert
• Experience Cloud (Community Cloud)
• Field Service Lightning
• Financial Services Cloud
• Health Cloud
• Manufacturing Cloud
• CPQ (Configure, Price, Quote)

💻 **Technical Training:**
• LWC (Lightning Web Components)
• Apex Programming
• Flow Builder Mastery
• Integration Patterns

🤖 **AI Training:**
• Agentforce Implementation
• Einstein Discovery
• Einstein Bots

🎯 **What's Included:**
• Live sessions
• Hands-on exercises
• Real-world projects
• Certification guidance
• Lifetime access to materials

📖 Browse courses: /training.html`;
  }
  
  // Contact
  if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach') || lowerInput.includes('linkedin')) {
    return `📞 **Get in Touch with Bhanu:**

✉️ **Email:** bhanusunny7@gmail.com

💼 **LinkedIn:** linkedin.com/in/bhanu-prakash-salesforce

🌐 **Website:** bhanuprakashsfdc.com

📝 **Other ways to connect:**
• Use the contact form: /contact.html
• Fill out the lead form in this chat
• Check out my GitHub projects

⏰ **Availability:**
• Open to consulting projects
• Training engagements
• Speaking opportunities
• Full-time opportunities

Looking forward to connecting! 🤝`;
  }
  
  // Skills
  if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('tech stack')) {
    return `🛠️ **Technical Skills:**

**Salesforce Platform:**
• LWC, Aura, Visualforce
• Apex, SOQL, SOSL
• Flow Builder, Process Builder
• CRM Analytics
• Experience Cloud
• Field Service

**AI & Automation:**
• Agentforce
• Einstein AI
• Einstein Bots
• Flow Automation

**Integration:**
• REST/SOAP APIs
• MuleSoft Anypoint Platform
• Webhook integrations

**Tools & Practices:**
• Git, CI/CD
• JIRA, Agile/Scrum
• VS Code, Salesforce DX
• Sandbox management

**Certifications:** 16 Salesforce certifications + Agentforce Specialist`;
  }
  
  // Hello / Greetings
  if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey') || lowerInput.includes('greeting')) {
    return `Hello! 👋 I'm Bhanu's AI assistant. 

I'm here to help you learn about:
• 🏆 Bhanu's certifications & expertise
• 🛠️ Salesforce services offered
• 💼 Project portfolio & experience
• 📚 Training programs
• 📞 How to get in touch

Feel free to ask any question or use the quick buttons below!`;
  }
  
  // Default response
  return `Thanks for your message! 😊

Bhanu is a Salesforce Solution Architect with 10+ years of experience and 16 certifications. He specializes in:

• 🤖 Agentforce & AI
• 💻 LWC & Apex Development
• ⚡ Flow Automation
• 🏗️ Enterprise Architecture

You can:
• 📖 Learn more: /about.html
• 🏆 See certifications: /certifications.html
• 💼 View portfolio: /portfolio.html
• 📚 Browse training: /training.html
• 📞 Contact him: /contact.html

What would you like to know more about?`;
}