import React, { useState } from 'react';
import { geminiTools } from '../services/geminiService';

const AIAssistant = () => {
  // State for each tool
  const [explainerState, setExplainerState] = useState({ input: '', output: '', loading: false });
  const [commandState, setCommandState] = useState({ input: '', output: '', loading: false });
  const [vulnState, setVulnState] = useState({ input: '', output: '', loading: false });
  const [packetState, setPacketState] = useState({ input: '', output: '', loading: false });
  const [encoderState, setEncoderState] = useState({ input: '', output: '', loading: false });
  const [zeroDayState, setZeroDayState] = useState({ input: '', output: '', loading: false });

  // Generic handler for tool interactions
  const handleToolQuery = async (toolName, toolFunction, state, setState) => {
    if (!state.input.trim()) {
      setState(prev => ({ ...prev, output: `Please enter input for ${toolName}.` }));
      return;
    }

    setState(prev => ({ ...prev, loading: true, output: 'Processing...' }));

    try {
      const result = await toolFunction(state.input);
      setState(prev => ({ ...prev, output: result, loading: false }));
    } catch (error) {
      console.error(`Error in ${toolName}:`, error);
      setState(prev => ({ 
        ...prev, 
        output: `Error: Failed to get response. Please try again.`,
        loading: false 
      }));
    }
  };

  const tools = [
    {
      id: 'explainer',
      title: '✨ Tool/Concept Explainer',
      description: 'Type any tool (e.g., Nmap) or concept (e.g., XSS) for a concise, beginner-friendly summary.',
      placeholder: 'Enter tool or concept...',
      buttonText: 'Get Explanation',
      loadingText: 'Explaining...',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      focusColor: 'focus:ring-blue-500 focus:border-blue-500',
      spinnerColor: 'border-t-blue-500',
      state: explainerState,
      setState: setExplainerState,
      handler: () => handleToolQuery('Tool Explainer', geminiTools.getExplanation, explainerState, setExplainerState)
    },
    {
      id: 'command',
      title: '✨ Safe Command Generator',
      description: 'Ask for a simple, safe command (e.g., "Python script to ping a host" or "Linux command to list files").',
      placeholder: 'Generate command for...',
      buttonText: 'Generate Command',
      loadingText: 'Generating...',
      borderColor: 'border-cyber-green',
      bgColor: 'bg-cyber-green',
      hoverColor: 'hover:bg-emerald-600',
      focusColor: 'focus:ring-green-500 focus:border-green-500',
      spinnerColor: 'border-t-emerald-500',
      state: commandState,
      setState: setCommandState,
      handler: () => handleToolQuery('Command Generator', geminiTools.generateCommand, commandState, setCommandState)
    },
    {
      id: 'vuln',
      title: '✨ Vulnerability Explainer',
      description: 'Enter a vulnerability (e.g., Buffer Overflow, Log4Shell) for a breakdown of the exploit and defense.',
      placeholder: 'Enter vulnerability or CVE...',
      buttonText: 'Analyze Vulnerability',
      loadingText: 'Analyzing...',
      borderColor: 'border-cyber-red',
      bgColor: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      focusColor: 'focus:ring-red-500 focus:border-red-500',
      spinnerColor: 'border-t-red-500',
      state: vulnState,
      setState: setVulnState,
      handler: () => handleToolQuery('Vulnerability Explainer', geminiTools.getVulnerabilityExplanation, vulnState, setVulnState)
    },
    {
      id: 'packet',
      title: '🚨 Packet Analysis Interpreter',
      description: 'Describe suspicious network traffic (e.g., "SYN flood on port 80 from 10 hosts") for a forensic interpretation.',
      placeholder: 'Describe network traffic...',
      buttonText: 'Interpret Traffic',
      loadingText: 'Interpreting...',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      focusColor: 'focus:ring-blue-500 focus:border-blue-500',
      spinnerColor: 'border-t-blue-500',
      state: packetState,
      setState: setPacketState,
      handler: () => handleToolQuery('Packet Analysis', geminiTools.interpretPacketAnalysis, packetState, setPacketState)
    },
    {
      id: 'encoder',
      title: '⚙ Payload Encoder/Decoder Helper',
      description: 'Ask about an encoding technique (e.g., XOR, Base64, Shikata Ga Nai) for its use in payload evasion.',
      placeholder: 'Enter encoding technique or method...',
      buttonText: 'Get Evasion Help',
      loadingText: 'Getting Help...',
      borderColor: 'border-cyber-green',
      bgColor: 'bg-cyber-green',
      hoverColor: 'hover:bg-emerald-600',
      focusColor: 'focus:ring-green-500 focus:border-green-500',
      spinnerColor: 'border-t-emerald-500',
      state: encoderState,
      setState: setEncoderState,
      handler: () => handleToolQuery('Payload Encoder', geminiTools.getPayloadEncodingHelp, encoderState, setEncoderState)
    },
    {
      id: 'zeroday',
      title: '💥 Zero-Day Concept Generator',
      description: 'Hypothesize a zero-day. Enter a target system (e.g., "IoT firmware," "Browser extension") for a conceptual analysis.',
      placeholder: 'Enter target system or technology...',
      buttonText: 'Analyze Zero-Day Concept',
      loadingText: 'Analyzing...',
      borderColor: 'border-cyber-red',
      bgColor: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      focusColor: 'focus:ring-red-500 focus:border-red-500',
      spinnerColor: 'border-t-red-500',
      state: zeroDayState,
      setState: setZeroDayState,
      handler: () => handleToolQuery('Zero-Day Concept', geminiTools.getZeroDayConcept, zeroDayState, setZeroDayState)
    }
  ];

  const handleInputChange = (toolId, value) => {
    const tool = tools.find(t => t.id === toolId);
    if (tool) {
      tool.setState(prev => ({ ...prev, input: value }));
    }
  };

  const handleKeyPress = (event, handler) => {
    if (event.key === 'Enter') {
      handler();
    }
  };

  return (
    <section id="assistant" className="py-20 bg-gray-900 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          <span className="text-cyber-green">Cyber Intelligence</span> Assistant
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-4xl mx-auto">
          Need quick help? Use our AI-powered assistant for instant tool explanations, safe command generation, and vulnerability breakdowns.
        </p>

        {/* Grid Container for all 6 tools (3x2 layout on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className={`bg-gray-800 p-6 rounded-xl shadow-2xl border-t-4 ${tool.borderColor}`}>
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2 text-2xl">{tool.title}</span>
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                {tool.description}
              </p>
              <input 
                type="text" 
                value={tool.state.input}
                onChange={(e) => handleInputChange(tool.id, e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, tool.handler)}
                placeholder={tool.placeholder}
                className={`w-full p-3 mb-4 rounded-lg bg-gray-700 text-white border border-gray-600 ${tool.focusColor}`}
              />
              <button 
                onClick={tool.handler}
                disabled={tool.state.loading}
                className={`w-full ${tool.bgColor} ${tool.hoverColor} text-white font-bold py-3 px-4 rounded-lg transition duration-150 flex justify-center items-center cta-button`}
              >
                <span>{tool.state.loading ? tool.loadingText : tool.buttonText}</span>
                {tool.state.loading && (
                  <div className={`ml-2 spinner ${tool.spinnerColor}`}></div>
                )}
              </button>
              <div className="mt-6 p-4 bg-gray-700/50 border border-gray-700 rounded-lg whitespace-pre-wrap text-sm text-gray-200 min-h-[50px] max-h-64 overflow-y-auto">
                {tool.state.output || ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;