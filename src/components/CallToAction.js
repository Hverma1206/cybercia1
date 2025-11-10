import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to advance your cybersecurity career?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-secondary-300">
            Join thousands of professionals who have transformed their careers through our 
            hands-on cybersecurity training programs. Start your journey today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#tracks"
              className="btn-primary"
            >
              Start Learning
            </a>
            <a href="#contact" className="text-sm font-semibold leading-6 text-white">
              Talk to an expert <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stopColor="#3B82F6" />
            <stop offset={1} stopColor="#1E40AF" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
};

export default CallToAction;