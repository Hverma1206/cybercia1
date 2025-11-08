import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-gray-700 pt-6">
        <div className="flex justify-center space-x-6 mb-4">
          <button className="text-gray-400 hover:text-blue-400 transition duration-150 text-sm">Roadmaps</button>
          <span className="text-gray-600">|</span>
          <button className="text-gray-400 hover:text-blue-400 transition duration-150 text-sm">Tools List</button>
          <span className="text-gray-600">|</span>
          <button className="text-gray-400 hover:text-blue-400 transition duration-150 text-sm">Contact Support</button>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; 2024 CYBER INTEL (CyberCIA Forge). Building practical skills worldwide.
        </p>
      </div>
    </footer>
  );
};

export default Footer;