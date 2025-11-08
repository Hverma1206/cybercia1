# Cybersecurity Practical Training Platform

A modern, responsive React.js application for cybersecurity training with integrated AI assistance powered by Google's Gemini API.

## Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **AI-Powered Assistant**: 6 specialized cybersecurity tools powered by Gemini API:
  - Tool/Concept Explainer
  - Safe Command Generator
  - Vulnerability Explainer
  - Packet Analysis Interpreter
  - Payload Encoder/Decoder Helper
  - Zero-Day Concept Generator
- **Interactive Learning Tracks**: Three progressive learning paths
- **Professional UI/UX**: Dark theme with cybersecurity aesthetics

## Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Gemini API key from Google

### Local Development

1. **Clone or navigate to the project directory:**
   ```bash
   cd cyberciaweb
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure your Gemini API key:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and add your Gemini API key:
     ```
     REACT_APP_GEMINI_API_KEY=your-actual-gemini-api-key
     ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

### Deployment to Vercel

1. **Push your code to GitHub** (make sure `.env` is in `.gitignore`)

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

3. **Configure Environment Variables:**
   - In Vercel dashboard, go to your project settings
   - Add environment variable:
     - Key: `REACT_APP_GEMINI_API_KEY`
     - Value: Your actual Gemini API key

4. **Deploy:**
   - Vercel will automatically deploy when you push to main branch
   - Manual deploy: `npx vercel --prod`

## Project Structure

```
cyberciaweb/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # Navigation header
│   │   ├── Hero.js         # Hero section
│   │   ├── LearningTracks.js # Learning tracks section
│   │   ├── AIAssistant.js  # AI tools section
│   │   ├── CallToAction.js # CTA section
│   │   └── Footer.js       # Footer
│   ├── services/
│   │   └── geminiService.js # Gemini API integration
│   ├── App.js              # Main app component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles and Tailwind imports
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## API Configuration

### Getting a Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to `src/services/geminiService.js`

### API Features
- **Retry Logic**: Automatic retry with exponential backoff
- **Error Handling**: Graceful error handling for API failures
- **Rate Limiting**: Built-in handling for rate limit responses
- **Loading States**: Visual feedback during API calls

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- `cyber-dark`: #0f172a (main background)
- `cyber-blue`: #3b82f6 (primary accent)
- `cyber-accent`: #1e3a8a (secondary background)
- `cyber-green`: #10b981 (success/practical)
- `cyber-red`: #ef4444 (advanced/warning)

### Styling
- All styling is done with Tailwind CSS
- Custom animations and effects in `src/index.css`
- Responsive design with mobile-first approach

## Security Notes

- **API Key Security**: Never commit your API key to version control
- **Environment Variables**: Consider using environment variables for production
- **HTTPS**: Always use HTTPS in production
- **Rate Limiting**: Be mindful of API rate limits

## License

This project is for educational purposes. Please ensure you have proper authorization for any cybersecurity tools and techniques demonstrated.