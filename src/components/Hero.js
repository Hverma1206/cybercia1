import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-20 w-96 h-96 bg-secondary-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-secondary-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="inline-flex items-center rounded-full bg-secondary-800 px-4 py-2 text-sm font-medium text-secondary-300 ring-1 ring-inset ring-secondary-700">
              <svg className="mr-2 h-3 w-3" fill="currentColor" viewBox="0 0 6 6">
                <circle cx="3" cy="3" r="3" />
              </svg>
              New AI-powered learning assistant available
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Master Cybersecurity
            <br />
            <span className="text-gradient">Through Practice</span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-secondary-300">
            Learn ethical hacking and cybersecurity through hands-on experience. 
            From network analysis to vulnerability assessment, build real-world skills 
            that matter in today's security landscape.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-4">
            <a 
              href="#tracks" 
              className="btn-primary text-base px-8 py-4"
            >
              Start Learning
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#assistant" 
              className="btn-secondary text-base px-8 py-4"
            >
              Try AI Assistant
            </a>
          </div>
          
          <div className="mt-16">
            <p className="text-sm font-medium text-secondary-500 mb-6">
              Trusted by security professionals at
            </p>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              <div className="text-secondary-400 font-medium">Microsoft</div>
              <div className="text-secondary-400 font-medium">Google</div>
              <div className="text-secondary-400 font-medium">Amazon</div>
              <div className="text-secondary-400 font-medium">Meta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;