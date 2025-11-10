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
      title: 'Tool & Concept Reference',
      description: 'Get detailed explanations for cybersecurity tools, techniques, and concepts. Enter any tool name or security concept for comprehensive documentation.',
      placeholder: 'Enter tool or concept...',
      buttonText: 'Get Documentation',
      loadingText: 'Processing...',
      icon: 'book',
      state: explainerState,
      setState: setExplainerState,
      handler: () => handleToolQuery('Tool Explainer', geminiTools.getExplanation, explainerState, setExplainerState)
    },
    {
      id: 'command',
      title: 'Command Generator',
      description: 'Generate safe, verified commands for common cybersecurity tasks. Specify your requirements and get production-ready scripts.',
      placeholder: 'Describe the command you need...',
      buttonText: 'Generate Command',
      loadingText: 'Generating...',
      icon: 'terminal',
      state: commandState,
      setState: setCommandState,
      handler: () => handleToolQuery('Command Generator', geminiTools.generateCommand, commandState, setCommandState)
    },
    {
      id: 'vuln',
      title: 'Vulnerability Analysis',
      description: 'Analyze vulnerabilities, CVEs, and security flaws. Get detailed breakdowns of exploits, impacts, and mitigation strategies.',
      placeholder: 'Enter vulnerability or CVE...',
      buttonText: 'Analyze Vulnerability',
      loadingText: 'Analyzing...',
      icon: 'shield',
      state: vulnState,
      setState: setVulnState,
      handler: () => handleToolQuery('Vulnerability Explainer', geminiTools.getVulnerabilityExplanation, vulnState, setVulnState)
    },
    {
      id: 'packet',
      title: 'Network Traffic Analysis',
      description: 'Interpret network packets and traffic patterns. Analyze suspicious activity and understand network communications.',
      placeholder: 'Describe network traffic patterns...',
      buttonText: 'Analyze Traffic',
      loadingText: 'Processing...',
      icon: 'network',
      state: packetState,
      setState: setPacketState,
      handler: () => handleToolQuery('Packet Analysis', geminiTools.interpretPacketAnalysis, packetState, setPacketState)
    },
    {
      id: 'encoder',
      title: 'Payload Engineering',
      description: 'Understand encoding techniques, evasion methods, and payload construction for penetration testing and research.',
      placeholder: 'Enter encoding technique...',
      buttonText: 'Analyze Technique',
      loadingText: 'Processing...',
      icon: 'code',
      state: encoderState,
      setState: setEncoderState,
      handler: () => handleToolQuery('Payload Encoder', geminiTools.getPayloadEncodingHelp, encoderState, setEncoderState)
    },
    {
      id: 'zeroday',
      title: 'Attack Vector Research',
      description: 'Research potential attack vectors and security weaknesses in systems. Theoretical analysis for defensive purposes.',
      placeholder: 'Enter target system or technology...',
      buttonText: 'Research Vectors',
      loadingText: 'Researching...',
      icon: 'search',
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
    <section id="assistant" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">
            Security Research <span className="text-gray-400">Toolkit</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Professional cybersecurity analysis tools for research, documentation, and security assessment.
          </p>
        </div>

        {/* Grid Container for all 6 tools (3x2 layout on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            // Define color schemes for each tool - consistent with website theme
            const colorSchemes = {
              'explainer': {
                borderColor: 'border-t-gray-600',
                buttonBg: 'bg-gray-700',
                buttonHover: 'hover:bg-gray-600',
                iconBg: 'bg-gray-800',
                iconColor: 'text-gray-300'
              },
              'command': {
                borderColor: 'border-t-gray-600',
                buttonBg: 'bg-gray-700',
                buttonHover: 'hover:bg-gray-600',
                iconBg: 'bg-gray-800',
                iconColor: 'text-gray-300'
              },
              'vuln': {
                borderColor: 'border-t-gray-600',
                buttonBg: 'bg-gray-700',
                buttonHover: 'hover:bg-gray-600',
                iconBg: 'bg-gray-800',
                iconColor: 'text-gray-300'
              },
              'packet': {
                borderColor: 'border-t-gray-600',
                buttonBg: 'bg-gray-700',
                buttonHover: 'hover:bg-gray-600',
                iconBg: 'bg-gray-800',
                iconColor: 'text-gray-300'
              },
              'encoder': {
                borderColor: 'border-t-gray-600',
                buttonBg: 'bg-gray-700',
                buttonHover: 'hover:bg-gray-600',
                iconBg: 'bg-gray-800',
                iconColor: 'text-gray-300'
              },
              'zeroday': {
                borderColor: 'border-t-gray-600',
                buttonBg: 'bg-gray-700',
                buttonHover: 'hover:bg-gray-600',
                iconBg: 'bg-gray-800',
                iconColor: 'text-gray-300'
              }
            };

            const colors = colorSchemes[tool.id] || colorSchemes['explainer'];

            // Define icon SVGs for each tool
            const getIcon = (iconType) => {
              const iconProps = {
                className: `w-5 h-5 ${colors.iconColor}`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              };
              switch(iconType) {
                case 'book':
                  return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>;
                case 'terminal':
                  return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
                case 'shield':
                  return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>;
                case 'network':
                  return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>;
                case 'code':
                  return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>;
                case 'search':
                  return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>;
                default:
                  return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
              }
            };

            return (
              <div key={tool.id} className={`bg-gray-900 rounded-xl border border-gray-700 ${colors.borderColor} border-t-2 overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:shadow-lg`}>
                <div className="p-6">
                  {/* Tool Header with Icon */}
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mr-4`}>
                      {getIcon(tool.icon)}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {tool.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-secondary-400 mb-6 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  
                  {/* Input Field */}
                  <div className="mb-6">
                    <input 
                      type="text" 
                      value={tool.state.input}
                      onChange={(e) => handleInputChange(tool.id, e.target.value)}
                      onKeyPress={(e) => handleKeyPress(e, tool.handler)}
                      placeholder={tool.placeholder}
                      className="w-full p-4 rounded-lg bg-black text-white border border-secondary-600 focus:border-secondary-400 focus:outline-none transition-colors placeholder-secondary-500 font-mono text-sm"
                    />
                  </div>
                  
                  {/* Action Button */}
                  <button 
                    onClick={tool.handler}
                    disabled={tool.state.loading}
                    className={`w-full ${colors.buttonBg} ${colors.buttonHover} text-white font-semibold py-4 px-4 rounded-lg transition-all duration-200 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {tool.state.loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        {tool.loadingText}
                      </>
                    ) : (
                      tool.buttonText
                    )}
                  </button>
                  
                  {/* Output Area */}
                  {tool.state.output && (
                    <div className="mt-6 p-4 bg-black border border-secondary-600 rounded-lg">
                      <div className="text-sm text-secondary-200 whitespace-pre-wrap max-h-48 overflow-y-auto font-mono">
                        {tool.state.output}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;