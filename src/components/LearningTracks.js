import React from 'react';

const LearningTracks = () => {
  const tracks = [
    {
      id: 1,
      title: "1. Core Fundamentals",
      description: "Master Linux, Networking, and Python scripting. The essential groundwork for any practical cybersecurity role.",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-400",
      linkText: "Start Basic Track",
      linkHover: "hover:text-blue-300",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "2. Ethical Hacking & Pentesting",
      description: "Dive into real-world scenarios. Practice vulnerability scanning, web application attacks (OWASP Top 10), and reporting.",
      borderColor: "border-cyber-green",
      bgColor: "bg-cyber-green/20",
      textColor: "text-cyber-green",
      linkText: "View Live Labs",
      linkHover: "hover:text-emerald-300",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "3. Advanced Exploitation & Defense",
      description: "Explore advanced topics: Reverse engineering, malware analysis, buffer overflows, and building custom security tools.",
      borderColor: "border-red-500",
      bgColor: "bg-red-500/20",
      textColor: "text-red-400",
      linkText: "Access Advanced Modules",
      linkHover: "hover:text-red-300",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="tracks" className="py-20 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Our <span className="text-cyber-blue">Core</span> Learning Tracks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tracks.map((track) => (
            <div 
              key={track.id}
              className={`p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 ${track.borderColor} transform hover:scale-[1.02] transition duration-300 cursor-pointer`}
            >
              <div className="flex items-center mb-4">
                <span className={`p-3 ${track.bgColor} ${track.textColor} rounded-full`}>
                  {track.icon}
                </span>
                <h3 className="ml-4 text-xl font-semibold text-white">{track.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">
                {track.description}
              </p>
              <button 
                className={`${track.textColor} font-medium ${track.linkHover} flex items-center`}
                onClick={() => alert(`Coming soon: ${track.linkText}`)}
              >
                {track.linkText}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTracks;