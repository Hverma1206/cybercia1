import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LearningTracks from './components/LearningTracks';
import AIAssistant from './components/AIAssistant';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import { useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const { currentUser, showLogin, showRegister } = useAuth();
  return (
    <ErrorBoundary>
      <div className="bg-black text-white font-sans min-h-screen">
        <Header />
        <main>
          <Hero />
          <LearningTracks />
          {/* Only show AI Assistant to authenticated users */}
          {currentUser ? (
            <AIAssistant />
          ) : (
            <div id="assistant" className="max-w-4xl mx-auto my-8 p-8 bg-secondary-900 rounded-xl border border-secondary-700">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary-800 mb-4">
                  <svg className="h-6 w-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Assistant</h3>
                <p className="text-secondary-300 mb-4">Please sign in to access the AI Assistant and personalized learning features.</p>
                <button 
                  onClick={() => window.location.hash = 'login'}
                  className="btn-primary"
                >
                  Sign In to Continue
                </button>
              </div>
            </div>
          )}
          <CallToAction />
        </main>
        <Footer />
        {/* Global modals for login/register */}
        {showLogin && <Login />}
        {showRegister && <Register />}
      </div>
    </ErrorBoundary>
  );
}

export default App;