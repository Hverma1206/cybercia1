import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-background text-center py-24 sm:py-32 border-b border-blue-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 leading-tight text-white">
          Practical Hacking & <span className="text-cyber-green">Cybersecurity Mastery</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Learn by doing: From basic Python scripting and network analysis to advanced vulnerability exploitation and defense.
        </p>
        <a 
          href="#tracks" 
          className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-lg font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 cta-button"
        >
          View Learning Roadmaps
        </a>
      </div>
    </section>
  );
};

export default Hero;