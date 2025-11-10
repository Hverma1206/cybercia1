// Gemini API Service
// For demo purposes, using mock responses to ensure functionality

/**
 * Generic function to call the Gemini API with retry logic.
 * For demo purposes, using mock responses to ensure functionality.
 */
export async function callGemini(userQuery, systemPrompt, maxRetries = 3) {
  // Mock delay to simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
  
  // Mock responses based on query type
  const query = userQuery.toLowerCase();
  
  if (query.includes('tool') || query.includes('concept')) {
    return generateMockExplanation(userQuery);
  } else if (query.includes('command') || query.includes('script')) {
    return generateMockCommand(userQuery);
  } else if (query.includes('vulnerability') || query.includes('cve')) {
    return generateMockVulnerability(userQuery);
  } else if (query.includes('traffic') || query.includes('packet')) {
    return generateMockPacketAnalysis(userQuery);
  } else if (query.includes('encoding') || query.includes('payload')) {
    return generateMockPayload(userQuery);
  } else if (query.includes('zero') || query.includes('day')) {
    return generateMockZeroDay(userQuery);
  } else {
    return "I can help you with cybersecurity tools, commands, vulnerabilities, traffic analysis, payload encoding, and zero-day concepts. Please be more specific about what you'd like to learn.";
  }
}

// Mock response generators
function generateMockExplanation(query) {
  const tools = {
    'nmap': 'Nmap (Network Mapper) is a powerful network discovery and security auditing tool. It can discover hosts and services on a network, identify open ports, detect operating systems and service versions, and scan for security vulnerabilities. Common usage includes port scanning, network inventory, and security assessments.',
    'metasploit': 'Metasploit is a comprehensive penetration testing framework that provides tools for vulnerability assessment and exploitation. It includes a database of known exploits, payloads, and auxiliary modules for various security testing scenarios.',
    'wireshark': 'Wireshark is a network protocol analyzer that captures and examines network traffic in real-time. It\'s essential for network troubleshooting, security analysis, and understanding network communications.',
    'xss': 'Cross-Site Scripting (XSS) is a web vulnerability where malicious scripts are injected into trusted websites. It occurs when applications include untrusted data without proper validation, allowing attackers to execute scripts in users\' browsers.'
  };
  
  for (const [tool, description] of Object.entries(tools)) {
    if (query.toLowerCase().includes(tool)) {
      return description;
    }
  }
  
  return `The concept "${query.split(':')[1]?.trim() || 'requested topic'}" is an important cybersecurity topic. It involves various techniques and methodologies used in security assessment and defense. Understanding this concept is crucial for building robust security systems and conducting effective penetration testing.`;
}

function generateMockCommand(query) {
  const commands = {
    'ping': '```bash\nping -c 4 target.com\n```\nSends 4 ICMP echo requests to test network connectivity.',
    'scan': '```bash\nnmap -sV -sC target.com\n```\nPerforms a version detection and default script scan.',
    'python': '```python\nimport socket\nsock = socket.socket()\nsock.connect((\'target.com\', 80))\nprint("Connection successful")\nsock.close()\n```'
  };
  
  for (const [cmd, result] of Object.entries(commands)) {
    if (query.toLowerCase().includes(cmd)) {
      return result;
    }
  }
  
  return '```bash\n# Safe example command\necho "Hello, Security World!"\n```\nReplace with your specific requirements for a tailored solution.';
}

function generateMockVulnerability(query) {
  return `**What is it?**
A security vulnerability that allows unauthorized access or manipulation of system resources. This type of flaw can be exploited by attackers to compromise system integrity.

**How it works (Exploit)**
The vulnerability is typically exploited through specific input manipulation or by taking advantage of improper validation mechanisms in the target system.

**How to Fix it (Defense)**
1. Implement proper input validation and sanitization
2. Apply security patches and updates regularly  
3. Use security frameworks and follow secure coding practices
4. Conduct regular security assessments and code reviews`;
}

function generateMockPacketAnalysis(query) {
  return `**Traffic Interpretation**
The network traffic pattern suggests potential reconnaissance or scanning activity. This could indicate automated tools attempting to discover open services or vulnerabilities.

**Next Steps**
• Monitor source IP for additional suspicious activity
• Check firewall logs for blocked connection attempts  
• Verify system integrity and patch levels on targeted services`;
}

function generateMockPayload(query) {
  return `**Purpose in Exploitation**
This encoding technique is commonly used to evade detection systems and bypass input filters by obfuscating malicious payloads.

**Example of Concept**  
Base64 encoding transforms binary data into ASCII text format:
\`echo "Hello" | base64\` produces \`SGVsbG8K\`

This technique helps avoid signature-based detection while maintaining payload functionality.`;
}

function generateMockZeroDay(query) {
  return `**Vulnerability Mechanism**
Hypothetical buffer overflow in input validation routines of the target system, potentially allowing arbitrary code execution through carefully crafted input.

**Conceptual Impact**
Could allow remote code execution with system privileges, potentially leading to full system compromise and lateral movement within network infrastructure.

**Mitigation Steps**
1. Implement comprehensive input validation and bounds checking
2. Enable modern exploit mitigation techniques (ASLR, DEP, stack canaries)
3. Conduct regular security code reviews and penetration testing`;
}

// AI Assistant Tool Functions
export const geminiTools = {
  /**
   * Tool/Concept Explainer
   */
  async getExplanation(query) {
    const systemPrompt = "You are a friendly, expert cybersecurity tutor. Provide a concise, one-paragraph explanation of the requested cybersecurity tool or concept, suitable for a beginner. Be encouraging.";
    const userQuery = `Explain the cybersecurity concept or tool: ${query}`;
    return await callGemini(userQuery, systemPrompt);
  },

  /**
   * Safe Command Generator
   */
  async generateCommand(query) {
    const systemPrompt = "You are an expert Linux and Python cybersecurity script generator focused on learning. Based on the user's request, provide a single, safe, beginner-level command or a very brief, runnable Python code snippet (max 5 lines) to achieve the goal. ONLY output the code/command, using markdown code blocks. Prioritize safety and ethical use, refusing any dangerous or complex requests.";
    const userQuery = `Generate a safe command or script for: ${query}`;
    return await callGemini(userQuery, systemPrompt);
  },

  /**
   * Vulnerability Explainer
   */
  async getVulnerabilityExplanation(query) {
    const systemPrompt = "You are an expert cybersecurity analyst providing educational information. Analyze the requested vulnerability (e.g., Log4Shell or SQL Injection). Provide the output in three distinct sections: **1. What is it?**, **2. How it works (Exploit)**, and **3. How to Fix it (Defense)**. Keep each section concise and beginner-friendly.";
    const userQuery = `Explain the cybersecurity vulnerability: ${query}`;
    return await callGemini(userQuery, systemPrompt);
  },

  /**
   * Packet Analysis Interpreter
   */
  async interpretPacketAnalysis(query) {
    const systemPrompt = "You are a senior network forensics analyst. Analyze the provided network traffic description. Interpret what attack, communication, or anomaly this traffic represents. Suggest the immediate **Next Investigative Steps** (max 3 bullet points). Output should be formatted with bold titles for: **Traffic Interpretation** and **Next Steps**.";
    const userQuery = `Analyze and interpret this network traffic: ${query}`;
    return await callGemini(userQuery, systemPrompt);
  },

  /**
   * Payload Encoder/Decoder Helper
   */
  async getPayloadEncodingHelp(query) {
    const systemPrompt = "You are an expert security researcher specializing in offensive security and evasion. Explain the requested payload encoding or obfuscation technique. Describe its primary **Purpose in Exploitation** (e.g., avoiding signature detection) and provide a simplified, non-malicious **Example of Concept** (e.g., a simple base64 conversion). Output must be formatted with bold titles.";
    const userQuery = `Explain the payload encoding technique: ${query}`;
    return await callGemini(userQuery, systemPrompt);
  },

  /**
   * Zero-Day Exploit Concept Generator
   */
  async getZeroDayConcept(query) {
    const systemPrompt = "You are an elite, ethical security researcher focused on conceptual zero-day analysis for educational purposes. Based on the target technology provided by the user, you must hypothetically describe a high-level **Vulnerability Mechanism**, its maximum **Conceptual Impact**, and the three most critical **Mitigation Steps** the vendor should take. **NEVER** provide actual code, functional commands, or specific steps that could lead to a working exploit. Focus strictly on conceptual theory and defensive advice. Format the output with bold titles.";
    const userQuery = `Hypothesize a conceptual zero-day vulnerability in the following system: ${query}`;
    return await callGemini(userQuery, systemPrompt);
  }
};