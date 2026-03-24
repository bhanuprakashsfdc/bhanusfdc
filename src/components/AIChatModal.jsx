import { useState, useRef, useEffect } from 'react';

// Try different free models
const MODELS = [
  'nvidia/nemotron-3-super-120b-a12b:free',
];

const systemPrompt = `You are Bhanu Prakash Reddy's AI assistant. You are a Salesforce Solution Architect with 15+ years of expertise.

You help visitors learn about:
- Bhanu's Salesforce expertise and experience (10+ years as Technical Lead/Solution Architect)
- His 16 Salesforce certifications including System Architect, Application Architect, Platform Developer II, Agentforce Specialist, etc.
- Services offered: LWC development, Apex programming, Flow automation, Agentforce implementation, Salesforce training
- Project portfolio and case studies
- Training programs on various Salesforce clouds
- How to contact or hire Bhanu

Respond in a helpful, professional manner with clear, simple sentences. Avoid using markdown symbols like #, *, -, or :. When mentioning pages, just say the page name like "about page" or "certifications page" instead of using links.`;

const fallbackResponses = {
  'who': "Hi! I'm Bhanu Prakash Reddy, a Salesforce Solution Architect with over 10 years of experience. I'm a Technical Lead specializing in Agentforce, LWC, Apex, Flow Builder, and Enterprise Architecture. I help organizations transform their business processes through Salesforce. Want to know more about my certifications or services?",
  'certification': "Bhanu has 16 Salesforce certifications including System Architect, Application Architect, Data Architect, Platform Developer II, Platform Administrator, Sales Cloud Consultant, Service Cloud Consultant, and Agentforce Specialist. You can view all certifications on the certifications page.",
  'service': "Bhanu offers several Salesforce services including custom LWC development, Apex programming, Flow automation, Agentforce implementation, solution architecture, and Salesforce training. Visit the portfolio page to see his work or contact page to get in touch!",
  'project': "Bhanu has led enterprise Salesforce implementations for various companies, built custom LWC applications, implemented Agentforce for automation, and created AppExchange products. Check out his portfolio page for detailed case studies.",
  'training': "Bhanu offers Salesforce training on Sales Cloud, Service Cloud, Experience Cloud, Field Service, CPQ, and more. He also provides LWC and Apex programming training. Visit the training page for available courses.",
  'contact': "You can contact Bhanu through the contact page or by connecting on LinkedIn. He's available for consulting projects, training engagements, and speaking opportunities.",
  'default': "Thanks for your question! Bhanu is a Salesforce Solution Architect with 10+ years of experience and 16 certifications. He specializes in Agentforce, LWC, Apex, and Flow automation. Feel free to ask about his certifications, services, projects, or training!"
};

export default function AIChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: "Hi! I'm Bhanu's AI assistant. With 15+ years of Salesforce expertise, I can help you learn about his services, certifications, projects, or answer any Salesforce-related questions. How can I help you today?" }
  ]);
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
      // Use fallback if no API key
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
        // Use fallback on error
        const fallback = getFallbackResponse(inputValue);
        setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: fallback }]);
        return;
      }

      const data = await response.json();
      let aiResponse = data.choices[0].message.content || data.choices[0].message.reasoning || '';
      
      // If response is in reasoning field
      if (data.choices[0].message.reasoning && !data.choices[0].message.content) {
        aiResponse = data.choices[0].message.reasoning;
      }
      
      // Clean up the response
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
      
      // Use fallback if empty
      if (!aiResponse || aiResponse.trim() === '') {
        aiResponse = getFallbackResponse(inputValue);
      }
      
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: aiResponse }]);
    } catch (err) {
      console.error('Error calling AI:', err);
      // Use fallback on exception
      const fallback = getFallbackResponse(inputValue);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: fallback }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button - Bottom Center */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
          aria-label="Ask me anything"
        >
          <span className="material-symbols-outlined text-white text-xl transition-transform duration-300 group-hover:scale-110">
            auto_awesome
          </span>
          <span className="text-white font-semibold text-sm">Ask Me Anything</span>
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 md:p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full md:w-[400px] md:max-w-[400px] h-[85vh] md:h-[500px] bg-[var(--color-surface)] md:rounded-2xl md:shadow-2xl border-t md:border border-[var(--color-border)] md:border-t-0 flex flex-col overflow-hidden animate-in slide-in-from-bottom-20 fade-in duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-lg">auto_awesome</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Ask Me Anything</h3>
                  <p className="text-white/70 text-xs">AI powered - 15+ years Salesforce expert</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <span className="material-symbols-outlined text-white text-lg">close</span>
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mx-4 mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                      msg.role === 'user'
                        ? 'bg-[#7c3aed] text-white rounded-br-md'
                        : 'bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)] rounded-bl-md'
                    }`}
                  >
                    <div className="text-sm leading-relaxed">{msg.content}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[var(--color-surface-variant)] rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-[#7c3aed] rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-[#7c3aed] rounded-full animate-bounce delay-75"></span>
                      <span className="w-2 h-2 bg-[#7c3aed] rounded-full animate-bounce delay-150"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[var(--color-border)] shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about Salesforce..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)] placeholder-[var(--color-on-surface-variant)]/60 border-0 focus:ring-2 focus:ring-[#7c3aed] outline-none text-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="w-11 h-11 bg-[#7c3aed] hover:bg-[#5b21b6] rounded-xl flex items-center justify-center transition-colors disabled:opacity-50 shrink-0"
                >
                  <span className="material-symbols-outlined text-white">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}