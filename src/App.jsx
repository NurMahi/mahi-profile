import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  // Theme state management
  const [currentTheme, setCurrentTheme] = useState('dark');

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/dashboard', aria: 'GitHub profile' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nur-mahi-255b99216/', aria: 'LinkedIn profile' },
    { name: 'Email', href: 'nurmahi487@gmail.com', aria: 'Send email to Mahi' }
  ];

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Handle theme changes
  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem('portfolioTheme', themeName);
  };

  // Define theme data (same as in Hero component)
  const themes = {
    light: { 
      bgColor: '#f8f9fa', 
      textColor: '#333', 
      accent: '#007bff', 
      secondary: '#e9ecef',
      footerBg: '#ffffff',
      footerText: '#333'
    },
    dark: { 
      bgColor: '#1a1a2e', 
      textColor: '#ffffff', 
      accent: '#4fc3f7', 
      secondary: '#16213e',
      footerBg: '#111827',
      footerText: '#ffffff'
    },
    green: { 
      bgColor: '#0f1419', 
      textColor: '#ffffff', 
      accent: '#4caf50', 
      secondary: '#1b2f1b',
      footerBg: '#0a0f0a',
      footerText: '#ffffff'
    },
    purple: { 
      bgColor: '#1a0b2e', 
      textColor: '#ffffff', 
      accent: '#9c27b0', 
      secondary: '#2d1b4e',
      footerBg: '#1a0b2e',
      footerText: '#ffffff'
    }
  };

  const currentThemeData = themes[currentTheme] || themes.dark;

  // Apply theme to body
  useEffect(() => {
    document.body.style.backgroundColor = currentThemeData.bgColor;
    document.body.style.color = currentThemeData.textColor;
  }, [currentThemeData]);

  return (
    <div className="App flex flex-col min-h-screen" style={{
      backgroundColor: currentThemeData.bgColor,
      color: currentThemeData.textColor
    }}>
      {/* Header */}
      <Header currentTheme={currentTheme} />

      {/* Main Content */}
      <main className="flex-grow">
        <section id="hero">
          <Hero 
            currentTheme={currentTheme} 
            onThemeChange={handleThemeChange}
          />
        </section>
        <section id="about">
          <About currentTheme={currentTheme} />
        </section>
        <section id="projects">
          <Projects currentTheme={currentTheme} />
        </section>
        <section id="contact">
          <Contact currentTheme={currentTheme} />
        </section>
      </main>

      {/* Footer with theme support */}
      <footer style={{
        backgroundColor: currentThemeData.footerBg,
        color: currentThemeData.footerText,
        padding: '2rem 0'
      }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p style={{ 
            color: currentTheme === 'light' ? '#666' : 'rgba(255, 255, 255, 0.7)'
          }}>
            © 2025 Mahi. 
          </p>

          {/* Social Links */}
          <div className="mt-4 flex justify-center space-x-6">
            {socialLinks.map(({ name, href, aria }) => (
              <a
                key={name}
                href={href}
                aria-label={aria}
                style={{
                  color: currentTheme === 'light' ? '#666' : 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = currentThemeData.accent;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = currentTheme === 'light' ? '#666' : 'rgba(255, 255, 255, 0.7)';
                }}
                target={name !== 'Email' ? '_blank' : undefined}
                rel={name !== 'Email' ? 'noopener noreferrer' : undefined}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;