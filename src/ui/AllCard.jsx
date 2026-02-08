
import { Avatar, Button as Btn } from "@material-tailwind/react";

import logo from './assets/atek_logo.png'; // Import image as a module
import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Camera, 
  MapPin, 
  Zap, 
  Battery, 
  Smartphone, 
  Tv, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Map, 
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
  Sun,
  Flame,
  Wrench,
  Sparkles,
  MessageSquare,
  Send,
  Loader,
  Lightbulb,
  AlertTriangle,
  ClipboardList
} from 'lucide-react';

// --- Gemini API Helper ---
const callGemini = async (prompt, systemInstruction = "") => {
  const apiKey = ""; // Set by environment
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] }
        }),
      }
    );
    if (!response.ok) throw new Error('API call failed');
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, there was an error connecting to the AI service. Please try again later.";
  }
};

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', onClick, disabled }) => {
  const baseStyle = "px-6 py-3 rounded-md font-bold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  
  const variants = {
    primary: "bg-amber-500 text-gray-900 hover:bg-amber-400 focus:ring-amber-500",
    secondary: "bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-900",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-50 focus:ring-blue-900",
    outlineWhite: "border-2 border-white text-white hover:bg-white/10 focus:ring-white",
    ai: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md"
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeader = ({ title, subtitle, aiThemed = false }) => (
  <div className="text-center mb-12">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide ${aiThemed ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' : 'text-fore/90'}`}>
      {title}
      {aiThemed && <Sparkles className="inline-block ml-3 w-8 h-8 text-purple-500" />}
      <span className={`block h-1 w-24 mx-auto mt-4 ${aiThemed ? 'bg-purple-500' : 'bg-amber-500'}`}></span>
    </h2>
    {subtitle && <p className="text-fore/60 max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-header p-8 rounded-xl shadow-lg border-b-4 border-amber-500 hover:shadow-2xl transition-all duration-300 group cursor-pointer" data-aos="fade-up" data-aos-delay={300}
  >
    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors duration-300">
      <Icon className="w-8 h-8 text-blue-900 group-hover:text-amber-400 transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold text-fore/90 mb-3">{title}</h3>
    <p className="text-fore/60 mb-4">{description}</p>
    <div className="flex items-center text-blue-700 font-semibold group-hover:text-blue-900">
      Learn More <ArrowRight className="ml-2 w-4 h-4" />
    </div>
  </div>
);

// --- Pages ---

const HomePage = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-amber-500 text-blue-900 font-bold px-4 py-1 rounded-full mb-6 text-sm uppercase tracking-wider">
              Trusted Security Experts
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Your Trusted Partner in <span className="text-amber-400">Security & Power</span> Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              From advanced CCTV surveillance and solar power systems to precision electronics repair. We secure your world and keep you powered up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigateTo('contact')} variant="ai">
                Get a Free Quote
              </Button>
              <Btn color="amber">Ade</Btn>
              <Button onClick={() => navigateTo('ai-tools')} variant="ai" className="fle items-center justify-center gap-2 !hidden">
                <Sparkles className="w-5 h-5" /> Try AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-back py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Expert Technicians", value: "50+" },
              { label: "Projects Completed", value: "1200+" },
              { label: "Support Available", value: "24/7" },
              { label: "Client Satisfaction", value: "100%" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-fore/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-header">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Core Services" 
            subtitle="We provide comprehensive technology solutions tailored for homes and businesses across the region."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 *:bg-back">
            <ServiceCard 
              icon={Camera} 
              title="CCTV Installation" 
              description="High-definition surveillance systems with remote viewing capabilities for homes and offices."
              onClick={() => navigateTo('services')}
            />
            <ServiceCard 
              icon={Sun} 
              title="Solar Power Systems" 
              description="Sustainable energy solutions including solar panels, inverters, and high-capacity batteries."
              onClick={() => navigateTo('services')}
            />
            <ServiceCard 
              icon={MapPin} 
              title="Car Tracking" 
              description="Real-time GPS vehicle tracking with engine cut-off features and fleet management."
              onClick={() => navigateTo('services')}
            />
          </div>
          <div className="text-center mt-12">
            <Button onClick={() => navigateTo('services')} variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-back">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Core Services" 
            subtitle="We provide comprehensive technology solutions tailored for homes and businesses across the region."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Camera} 
              title="CCTV Installation" 
              description="High-definition surveillance systems with remote viewing capabilities for homes and offices."
              onClick={() => navigateTo('services')}
            />
            <ServiceCard 
              icon={Sun} 
              title="Solar Power Systems" 
              description="Sustainable energy solutions including solar panels, inverters, and high-capacity batteries."
              onClick={() => navigateTo('services')}
            />
            <ServiceCard 
              icon={MapPin} 
              title="Car Tracking" 
              description="Real-time GPS vehicle tracking with engine cut-off features and fleet management."
              onClick={() => navigateTo('services')}
            />
          </div>
          <div className="text-center mt-12">
            <Button onClick={() => navigateTo('services')} variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Why ATEK Technologies?</h2>
              <div className="space-y-6">
                {[
                  "Professional and certified installation experts",
                  "Affordable pricing with no hidden costs",
                  "High-quality equipment from trusted brands",
                  "Excellent after-sales support and maintenance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-400 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button onClick={() => navigateTo('contact')} variant="primary">
                  Contact Us Today
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-center">
                <Shield className="w-20 h-20 text-amber-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Security You Can Trust</h3>
                <p className="text-gray-300">
                  In an uncertain world, ATEK provides the certainty of safety. We don't just sell products; we sell peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AIAssistantPage = () => {
  const [activeTab, setActiveTab] = useState('chat');
  
  // Chat State
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hello! I'm the ATEK AI Assistant. Ask me anything about CCTV, Solar Power, or Security Systems!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Solar State
  const [solarForm, setSolarForm] = useState({
    houseSize: '3 Bedroom Flat',
    appliances: '',
    hours: '12'
  });
  const [solarResult, setSolarResult] = useState('');
  const [solarLoading, setSolarLoading] = useState(false);

  // Diagnostics State
  const [diagIssue, setDiagIssue] = useState('');
  const [diagResult, setDiagResult] = useState('');
  const [diagLoading, setDiagLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendChat = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const systemPrompt = "You are the helpful AI Assistant for ATEK Technologies, a security and power solutions company in Africa. Your expertise covers: CCTV Cameras, Solar Panels, Inverters, Batteries, Car Tracking, and Burglar Alarms. \n\nGoal: Answer technical questions, suggest products, and explain ATEK's services. \n\nTone: Professional, technical yet accessible, and friendly. \n\nRules:\n1. If asked about specific prices, say 'Prices vary due to market rates. Please use the Contact page for a formal quote.'\n2. Recommend ATEK's installation services.\n3. Keep answers concise (under 100 words) unless detailed explanation is needed.";
    
    const response = await callGemini(userMsg, systemPrompt);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  const handleSolarEstimate = async () => {
    if (!solarForm.appliances.trim()) return;
    setSolarLoading(true);
    
    const prompt = `
      User details for solar estimate:
      - House Type: ${solarForm.houseSize}
      - Appliances to run: ${solarForm.appliances}
      - Power duration needed: ${solarForm.hours} hours/day
      
      Based on this, recommend a specific Solar Power System configuration (Inverter kVA, Battery bank voltage/capacity, number of solar panels). Explain why. Format clearly with bullet points.
    `;
    
    const systemPrompt = "You are an expert solar energy engineer at ATEK Technologies. Provide realistic, technically accurate solar system sizing estimates for African contexts (considering standard 12V/24V/48V systems). Be conservative to ensure reliability.";

    const response = await callGemini(prompt, systemPrompt);
    setSolarResult(response);
    setSolarLoading(false);
  };

  const handleDiagnostics = async () => {
    if (!diagIssue.trim()) return;
    setDiagLoading(true);

    const prompt = `Customer reports issue: "${diagIssue}". Provide a numbered list of troubleshooting steps they can safely try. If it involves high voltage (inverters/mains), warn them to contact a professional. End with a recommendation to call ATEK support if unresolved.`;
    
    const systemPrompt = "You are a Senior Technical Support Engineer at ATEK Technologies. You help customers troubleshoot common issues with CCTV, Inverters, Batteries, and Tracking systems. Your tone is calm, reassuring, and safety-conscious. Always prioritize safety first.";

    const response = await callGemini(prompt, systemPrompt);
    setDiagResult(response);
    setDiagLoading(false);
  };

  return (
    <div className="animate-fade-in pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="ATEK AI Smart Assistant" 
          subtitle="Leverage the power of Artificial Intelligence to plan, quote, and repair your systems."
          aiThemed={true}
        />

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden min-h-[650px] flex flex-col border border-indigo-100">
          {/* Tabs */}
          <div className="flex flex-col md:flex-row border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-4 font-bold text-center flex items-center justify-center gap-2 transition-colors ${activeTab === 'chat' ? 'bg-indigo-50 text-indigo-700 border-b-4 border-indigo-600' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <MessageSquare className="w-5 h-5" />
              Security Consultant
            </button>
            <button 
              onClick={() => setActiveTab('solar')}
              className={`flex-1 py-4 font-bold text-center flex items-center justify-center gap-2 transition-colors ${activeTab === 'solar' ? 'bg-amber-50 text-amber-700 border-b-4 border-amber-500' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Sun className="w-5 h-5" />
              Smart Solar Estimator
            </button>
            <button 
              onClick={() => setActiveTab('diagnose')}
              className={`flex-1 py-4 font-bold text-center flex items-center justify-center gap-2 transition-colors ${activeTab === 'diagnose' ? 'bg-red-50 text-red-700 border-b-4 border-red-500' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Wrench className="w-5 h-5" />
              Tech Diagnostics
            </button>
          </div>

          {/* Chat Interface */}
          {activeTab === 'chat' && (
            <div className="flex flex-col flex-grow h-[600px]">
              <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-gray-50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-xl shadow-sm ${msg.role === 'user' ? 'bg-blue-900 text-white rounded-br-none' : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'}`}>
                      {msg.role === 'model' && <div className="text-xs font-bold text-indigo-600 mb-1 flex items-center gap-1"><Sparkles size={12}/> ATEK AI</div>}
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white p-4 rounded-xl border border-gray-200 rounded-bl-none flex items-center gap-2">
                      <Loader className="w-4 h-4 animate-spin text-indigo-600" />
                      <span className="text-sm text-gray-500">AI is thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendChat()}
                    placeholder="Ask about CCTV, Tracking, or Power systems..."
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                  />
                  <button 
                    onClick={handleSendChat}
                    disabled={loading || !input.trim()}
                    className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                  >
                    <Send className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Solar Estimator Interface */}
          {activeTab === 'solar' && (
            <div className="p-8 bg-gradient-to-br from-amber-50 to-white h-full overflow-y-auto">
              <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-900 rounded-r-lg">
                <h4 className="font-bold text-blue-900 flex items-center gap-2"><Lightbulb className="w-5 h-5"/> How it works</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Tell the AI what appliances you want to run (e.g., "1 Fridge, 4 Fans, 10 Lights, 1 TV") and it will calculate the ideal Inverter and Battery setup for you.
                </p>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Property Type</label>
                  <select 
                    value={solarForm.houseSize}
                    onChange={(e) => setSolarForm({...solarForm, houseSize: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-500 outline-none"
                  >
                    <option>1 Bedroom / Studio</option>
                    <option>2 Bedroom Apartment</option>
                    <option>3 Bedroom Flat</option>
                    <option>Duplex / Large House</option>
                    <option>Office / Commercial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">What appliances must run?</label>
                  <textarea 
                    value={solarForm.appliances}
                    onChange={(e) => setSolarForm({...solarForm, appliances: e.target.value})}
                    placeholder="e.g., 1 Freezer, 2 ACs (1HP), 5 Fans, Laptop, TV..."
                    className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 outline-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Desired Backup Hours</label>
                  <select 
                    value={solarForm.hours}
                    onChange={(e) => setSolarForm({...solarForm, hours: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-500 outline-none"
                  >
                    <option value="6">6 Hours (Basic Backup)</option>
                    <option value="12">12 Hours (Overnight)</option>
                    <option value="24">24 Hours (Full Off-Grid)</option>
                  </select>
                </div>

                <Button 
                  onClick={handleSolarEstimate} 
                  disabled={solarLoading || !solarForm.appliances}
                  variant="primary" 
                  className="w-full flex justify-center items-center gap-2"
                >
                  {solarLoading ? <Loader className="animate-spin" /> : <Sparkles />}
                  {solarLoading ? 'Calculating System...' : 'Generate Solar Estimate ✨'}
                </Button>

                {solarResult && (
                  <div className="mt-8 bg-white p-6 rounded-xl border border-amber-200 shadow-md animate-fade-in">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Sun className="text-amber-500"/> Recommended Configuration
                    </h3>
                    <div className="prose prose-sm text-gray-600 whitespace-pre-line">
                      {solarResult}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                      <p className="text-sm text-gray-500 mb-3">This is an AI estimate. For a guaranteed quote, book a site visit.</p>
                      <button className="text-blue-900 font-bold hover:underline">Book Site Visit &rarr;</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Diagnostics Interface */}
          {activeTab === 'diagnose' && (
            <div className="p-8 bg-gray-50 h-full overflow-y-auto">
              <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                <h4 className="font-bold text-red-900 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> Diagnostics Mode</h4>
                <p className="text-sm text-red-800 mt-1">
                  Describe your equipment failure below. The AI will guide you through standard troubleshooting. 
                  <span className="font-bold block mt-1">WARNING: Never touch exposed wires. If in doubt, turn it off.</span>
                </p>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Describe the Problem</label>
                  <textarea 
                    value={diagIssue}
                    onChange={(e) => setDiagIssue(e.target.value)}
                    placeholder="e.g., 'My Inverter is showing Fault Code 04' or 'My CCTV camera view is black at night'..."
                    className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-red-400 focus:border-red-500 outline-none"
                  ></textarea>
                </div>

                <Button 
                  onClick={handleDiagnostics} 
                  disabled={diagLoading || !diagIssue}
                  className="w-full flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white"
                >
                  {diagLoading ? <Loader className="animate-spin" /> : <ClipboardList />}
                  {diagLoading ? 'Analyzing Fault...' : 'Run Diagnostics'}
                </Button>

                {diagResult && (
                  <div className="mt-8 bg-white p-6 rounded-xl border border-red-200 shadow-md animate-fade-in">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 border-b pb-2">
                      <Wrench className="text-red-500"/> Troubleshooting Guide
                    </h3>
                    <div className="prose prose-sm text-gray-700 whitespace-pre-line leading-relaxed">
                      {diagResult}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                      <p className="text-xs text-gray-500 italic">Disclaimer: AI advice is for reference only.</p>
                      <Button variant="secondary" className="py-2 text-sm">
                        Request Technician Visit
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const servicesList = [
    {
      icon: Camera,
      title: "CCTV Surveillance",
      desc: "HD & IP Cameras, DVR/NVR setup, remote viewing configuration on mobile/PC, and maintenance.",
      features: ["Night Vision", "Motion Detection", "Cloud Storage"]
    },
    {
      icon: MapPin,
      title: "GPS Car Tracking",
      desc: "Advanced vehicle tracking solutions ensuring the safety of your fleet or personal car.",
      features: ["Real-time Location", "Engine Shutdown", "Geo-fencing"]
    },
    {
      icon: Sun,
      title: "Solar & Power Solutions",
      desc: "Complete off-grid and hybrid solar installations to keep your lights on when the grid goes down.",
      features: ["Solar Panels", "Inverters", "Deep Cycle Batteries"]
    },
    {
      icon: Flame,
      title: "Fire & Burglar Alarms",
      desc: "Early warning systems to protect life and property from fire hazards and intruders.",
      features: ["Smoke Detectors", "Motion Sensors", "GSM Auto-dialers"]
    },
    {
      icon: Smartphone,
      title: "Phone Sales & Repair",
      desc: "We sell the latest smartphones and provide expert repair services for screens, batteries, and boards.",
      features: ["Screen Replacement", "Software Issues", "Genuine Accessories"]
    },
    {
      icon: Tv,
      title: "Electronics Repair",
      desc: "Professional repair of Plasma TVs, home theaters, and general household electronics.",
      features: ["Component Level Repair", "Power Supply Fixes", "Audio Systems"]
    }
  ];

  return (
    <div className="animate-fade-in pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Services" 
          subtitle="Comprehensive security and technology solutions tailored to your specific needs."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-blue-900 p-6 flex justify-center">
                <service.icon className="w-12 h-12 text-amber-400" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <div className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20 bg-amber-500 rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Need a Custom Installation Plan?</h3>
          <p className="text-blue-900/80 text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to visit your site for a comprehensive assessment and free quotation.
          </p>
          <a 
            href="tel:+1234567890" 
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Schedule a Visit
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  // Mock product data
  const products = [
    { cat: "Security", name: "Hikvision 5MP Bullet Camera", price: "Call for Price", tag: "Best Seller" },
    { cat: "Security", name: "Wireless Door/Window Sensor", price: "Affordable", tag: "New" },
    { cat: "Power", name: "200Ah Tubular Battery", price: "High Durability", tag: "Hot" },
    { cat: "Power", name: "5KVA Hybrid Inverter", price: "Premium", tag: "Warranty" },
    { cat: "Tracking", name: "GPS Tracker 4G", price: "Subscription Free", tag: "Sale" },
    { cat: "Mobile", name: "Screen Protectors & Cases", price: "Various", tag: "Accessories" }
  ];

  return (
    <div className="animate-fade-in pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Products" 
          subtitle="Top-quality equipment from world-renowned manufacturers."
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "CCTV Cameras", "Solar & Batteries", "Car Trackers", "Accessories"].map((filter, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full border-2 text-sm font-bold transition-colors ${idx === 0 ? 'bg-blue-900 border-blue-900 text-white' : 'border-gray-300 text-gray-600 hover:border-blue-900 hover:text-blue-900'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 group hover:border-amber-500 transition-all">
              <div className="h-48 bg-gray-100 rounded-md mb-6 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-2 right-2 bg-amber-500 text-xs font-bold px-2 py-1 rounded text-blue-900 uppercase">
                  {product.tag}
                </span>
                <div className="text-gray-400 group-hover:scale-110 transition-transform duration-300">
                  {idx % 2 === 0 ? <Camera size={48} /> : <Battery size={48} />}
                </div>
              </div>
              <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">{product.cat}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-4">{product.price}</p>
              <Button variant="outline" className="w-full text-sm py-2">
                Inquire Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="animate-fade-in pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="About ATEK Technologies" />
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500 rounded-tl-3xl z-0"></div>
              <div className="relative hiden z-10 bg-gray-100 rounded-xl p-8 h-80 flex items-center justify-center border-2 border-gray-200">
                <div className="text-center">
                  <img src={logo} className="w-80"/>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-900 rounded-br-3xl z-0"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Securing Africa's Future with Technology</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ATEK Technologies was founded with a single mission: to provide accessible, high-quality security and power solutions to businesses and households. We understand the unique challenges of our environment, which is why we specialize in robust systems that stand the test of time.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From securing your perimeter with advanced CCTV to ensuring your business never stops with our solar inverters, we are dedicated to excellence. Our team consists of highly trained engineers and technicians who are passionate about what they do.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-900">
                <h4 className="font-bold text-blue-900">Our Vision</h4>
                <p className="text-sm text-gray-600">To be the #1 security tech provider in the region.</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-bold text-blue-900">Our Mission</h4>
                <p className="text-sm text-gray-600">Delivering reliability through technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="animate-fade-in pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Contact Us" subtitle="We're here to answer your questions and provide quotes." />
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-amber-400">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Call Us 24/7</p>
                    <p className="text-lg font-bold">+234 913 437 7218</p>
                    <p className="text-lg font-bold">+234 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email Us</p>
                    <p className="text-lg font-bold">info@atek-tech.com</p>
                    <p className="text-lg font-bold">support@atek-tech.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Visit Our Office</p>
                    <p className="text-lg font-bold">Federal Polytechnic </p>
                    <p className="text-lg">Ede, Osun State.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-gray-300 mb-4">Follow us on social media</p>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-amber-500 hover:text-blue-900 transition-colors"><Facebook size={20} /></a>
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-amber-500 hover:text-blue-900 transition-colors"><Twitter size={20} /></a>
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-amber-500 hover:text-blue-900 transition-colors"><Instagram size={20} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="+234..." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>CCTV Installation</option>
                  <option>Car Tracking</option>
                  <option>Solar Power System</option>
                  <option>Repairs</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  formStatus === 'sent' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-blue-900 text-white hover:bg-blue-800'
                }`}
              >
                {formStatus === 'idle' && 'Send Message'}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && 'Message Sent Successfully!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Layout & Main App ---

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
 //   { id: 'ai-tools', label: 'AI Tools ✨' },
 //   { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <div className="font-sans text-fore bg-back min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900 shadow-lg py-3' : 'bg-blue-900 lg:bg-blue-900 py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <img src={logo} className="w-24 md:w-32 h-auto" onClick={() => navigateTo('home')} />
          <div 
            className="fle hidden items-center gap-2 cursor-pointer" 
            onClick={() => navigateTo('home')}
          >
            <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center">
              <Shield className="text-blue-900 w-6 h-6 fill-current" />
            </div>
            <div className="leading-tight">
              <span className={`block font-extrabold text-xl tracking-wider ${scrolled ? 'text-white' : 'text-white'}`}>ATEK</span>
              <span className={`block text-xs font-bold tracking-widest ${scrolled ? 'text-amber-400' : 'text-amber-400'}`}>TECHNOLOGIES</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  activePage === link.id 
                    ? 'text-amber-400' 
                    : scrolled ? 'text-gray-200 hover:text-white' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-amber-500 text-blue-900 px-5 py-2 rounded font-bold text-sm hover:bg-amber-400 transition-colors"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-900 absolute top-full left-0 w-full shadow-xl border-t border-blue-800">
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`py-3 text-left font-bold border-b border-blue-800 last:border-0 ${
                    activePage === link.id ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => navigateTo('contact')}
                className="mt-4 bg-amber-500 text-blue-900 py-3 rounded font-bold"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePage === 'home' && <HomePage navigateTo={navigateTo} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'services' && <ServicesPage />}
        {activePage === 'products' && <ProductsPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'ai-tools' && <AIAssistantPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Avatar src={logo} className="w-auto" />
                <div className="w-8 hidden h-8 bg-amber-500 rounded lex items-center justify-center">
                  <Shield className="text-gray-900 w-5 h-5 fill-current" />
                </div>
                <span className="hidden font-extrabold text-xl tracking-wider">ATEK</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your premier partner for security systems, solar energy solutions, and professional electronics repair services in Africa.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-amber-500 inline-block pb-1">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><button onClick={() => navigateTo('home')} className="hover:text-amber-400 transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-amber-400 transition-colors">About Us</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-amber-400 transition-colors">Services</button></li>
                <li><button onClick={() => navigateTo('products')} className="hover:text-amber-400 transition-colors">Products</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-amber-500 inline-block pb-1">Our Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>CCTV Installation</li>
                <li>Car Tracking</li>
                <li>Solar Power Systems</li>
                <li>Burglar Alarms</li>
                <li>Phone & TV Repair</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-amber-500 inline-block pb-1">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                  <span>Federal Polytechnic Ede, Osun State.</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                  <span>+234 913 437 7218</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                  <span>info@atek-tech.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} ATEK Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/2349134377218" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 hover:scale-110 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;