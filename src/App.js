import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LearningTracks from './components/LearningTracks';
import AIAssistant from './components/AIAssistant';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-cyber-dark text-gray-100 font-sans min-h-screen">
        <Header />
        <main>
          <Hero />
          <LearningTracks />
          <AIAssistant />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;