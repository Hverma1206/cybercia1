import React from 'react';

const LearningTracks = () => {
  const tracks = [
    {
      id: 1,
      title: "Fundamentals",
      subtitle: "Security Foundations",
      description: "Master essential security concepts, Linux systems, networking protocols, and Python scripting. Build the foundation every cybersecurity professional needs.",
      duration: "6-8 weeks",
      level: "Beginner",
      skills: ["Linux Administration", "Network Security", "Python Scripting", "Security Frameworks"],
      color: "primary",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Ethical Hacking",
      subtitle: "Penetration Testing",
      description: "Learn professional penetration testing methodologies. Practice on real-world scenarios including web applications, networks, and infrastructure.",
      duration: "10-12 weeks",
      level: "Intermediate",
      skills: ["Vulnerability Assessment", "Web App Testing", "Network Pentesting", "Reporting"],
      color: "accent",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Advanced Security",
      subtitle: "Threat Intelligence & Defense",
      description: "Dive deep into advanced topics: malware analysis, reverse engineering, threat hunting, and building enterprise security programs.",
      duration: "12-16 weeks",
      level: "Advanced",
      skills: ["Malware Analysis", "Reverse Engineering", "Threat Hunting", "Security Architecture"],
      color: "secondary",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: 'bg-secondary-900',
        border: 'border-secondary-700',
        iconBg: 'bg-primary-600',
        text: 'text-primary-400',
        badge: 'bg-secondary-800 text-primary-300'
      },
      accent: {
        bg: 'bg-secondary-900',
        border: 'border-secondary-700',
        iconBg: 'bg-accent-600',
        text: 'text-accent-400',
        badge: 'bg-secondary-800 text-accent-300'
      },
      secondary: {
        bg: 'bg-secondary-900',
        border: 'border-secondary-700',
        iconBg: 'bg-secondary-600',
        text: 'text-secondary-400',
        badge: 'bg-secondary-800 text-secondary-300'
      }
    };
    return colors[color];
  };

  return (
    <section id="tracks" className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Learning Paths
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary-300">
            Master cybersecurity through structured, hands-on learning paths designed 
            by industry experts. Progress from fundamentals to advanced techniques.
          </p>
        </div>
        
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tracks.map((track, index) => {
              const colors = getColorClasses(track.color);
              return (
                <div 
                  key={track.id} 
                  className={`card group relative overflow-hidden ${colors.bg} ${colors.border}`}
                >
                  <div className="p-8">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg} mb-6`}>
                      <div className="text-white">
                        {track.icon}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {track.title}
                        </h3>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colors.badge}`}>
                          {track.level}
                        </span>
                      </div>
                      <p className={`text-sm font-medium ${colors.text}`}>
                        {track.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-secondary-300 mb-6 leading-relaxed">
                      {track.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-sm text-secondary-400 mb-2">Duration: {track.duration}</div>
                      <div className="text-sm text-secondary-400">Key Skills:</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {track.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="inline-flex items-center rounded-md bg-secondary-800 px-2 py-1 text-xs font-medium text-secondary-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      className={`inline-flex items-center font-semibold ${colors.text} hover:${colors.text}/80 transition-colors`}
                      onClick={() => alert(`Starting ${track.title} course...`)}
                    >
                      Start Learning
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningTracks;