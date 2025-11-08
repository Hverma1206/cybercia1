import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-cyber-accent/50 border-t border-b border-blue-900/50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Join the Next Generation of Ethical Hackers</h2>
        <p className="text-lg text-gray-300 mb-8">
          Gain the practical skills you need to secure your future in cybersecurity. Start your journey today!
        </p>
        <a 
          href="#subscribe" 
          className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-full text-white bg-cyber-green hover:bg-emerald-600 cta-button"
        >
          Enroll for Free Today
        </a>
      </div>
    </section>
  );
};

export default CallToAction;