import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cyber-dark text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-cyber-red">Something went wrong</h1>
            <p className="text-gray-400 mb-6">We're sorry, but something unexpected happened.</p>
            <button 
              className="bg-cyber-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-150"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;