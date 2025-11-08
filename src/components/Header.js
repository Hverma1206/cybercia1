import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cyber-dark bg-opacity-95 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Logo Area (Mimics CyberCIA Forge Seal/Badge style) */}
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 flex items-center justify-center border-2 border-blue-500 rounded-full bg-blue-500/10 shadow-lg">
            {/* Inner Lock Icon (Mimics the center of the logo) */}
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V9a2 2 0 014 0v2"></path>
            </svg>
            {/* Small text/design on the seal */}
            <span className="absolute top-0 text-[8px] text-blue-300 font-bold tracking-widest opacity-80">CYBER</span>
            <span className="absolute bottom-0 text-[8px] text-blue-300 font-bold tracking-widest opacity-80">FORGE</span>
          </div>
          <span className="text-xl font-extrabold text-blue-400 tracking-wider">PRACTICAL HACKING</span>
        </div>
        
        {/* Navigation Links (Hidden on small screens) */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#home" className="text-gray-300 hover:text-blue-400 transition duration-150">Home</a>
          <a href="#tracks" className="text-gray-300 hover:text-blue-400 transition duration-150">Learning Tracks</a>
          <a href="#assistant" className="text-gray-300 hover:text-blue-400 transition duration-150">AI Assistant</a>
          <a href="#labs" className="text-gray-300 hover:text-blue-400 transition duration-150">Practical Labs</a>
          <a href="#contact" className="px-3 py-1 rounded-full bg-cyber-green text-white hover:bg-emerald-600 transition duration-150">Start Free</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-dark border-t border-blue-900/50">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block text-gray-300 hover:text-blue-400 transition duration-150 py-2">Home</a>
            <a href="#tracks" className="block text-gray-300 hover:text-blue-400 transition duration-150 py-2">Learning Tracks</a>
            <a href="#assistant" className="block text-gray-300 hover:text-blue-400 transition duration-150 py-2">AI Assistant</a>
            <a href="#labs" className="block text-gray-300 hover:text-blue-400 transition duration-150 py-2">Practical Labs</a>
            <a href="#contact" className="block px-3 py-2 mt-2 rounded-full bg-cyber-green text-white hover:bg-emerald-600 transition duration-150 text-center">Start Free</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;