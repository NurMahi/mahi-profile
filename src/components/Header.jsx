import React from 'react';

const Header = ({ currentTheme = 'light' }) => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const themes = {
    light: { bgColor: '#f8f9fa', textColor: '#333', accent: '#007bff' },
    dark: { bgColor: '#0a0a0a', textColor: '#fff', accent: '#00d4ff' },
    green: { bgColor: '#0f1e0f', textColor: '#e8f5e8', accent: '#00ff88' },
    purple: { bgColor: '#1a0f1e', textColor: '#f5e8f5', accent: '#b967db' }
  };

  const currentThemeData = themes[currentTheme] || themes.light;

  return (
    <header style={{
      ...headerStyle,
      backgroundColor: `${currentThemeData.bgColor}95`,
      borderBottom: 'none', // Remove the white line
      boxShadow: `0 2px 10px ${currentThemeData.bgColor}30`
    }}>
      <div className="container" style={containerStyle}>
        <div style={{
          ...logoStyle,
          color: currentThemeData.accent
        }}>
          <h2>Profile</h2>
        </div>
        
        <nav style={navStyle}>
          <button 
            onClick={() => scrollToSection('home')} 
            style={{
              ...navLinkStyle,
              color: currentThemeData.textColor
            }}
            onMouseEnter={(e) => e.target.style.color = currentThemeData.accent}
            onMouseLeave={(e) => e.target.style.color = currentThemeData.textColor}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            style={{
              ...navLinkStyle,
              color: currentThemeData.textColor
            }}
            onMouseEnter={(e) => e.target.style.color = currentThemeData.accent}
            onMouseLeave={(e) => e.target.style.color = currentThemeData.textColor}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            style={{
              ...navLinkStyle,
              color: currentThemeData.textColor
            }}
            onMouseEnter={(e) => e.target.style.color = currentThemeData.accent}
            onMouseLeave={(e) => e.target.style.color = currentThemeData.textColor}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            style={{
              ...navLinkStyle,
              color: currentThemeData.textColor
            }}
            onMouseEnter={(e) => e.target.style.color = currentThemeData.accent}
            onMouseLeave={(e) => e.target.style.color = currentThemeData.textColor}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = {
  position: 'fixed',
  top: 0,
  width: '100%', // Changed from 53.7% to full width
  backdropFilter: 'blur(20px)',
  zIndex: 1000,
  padding: '1rem 0',
  left: 0,
  right: 0
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem'
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  letterSpacing: '1px'
};

const navStyle = {
  display: 'flex',
  gap: '2rem'
};

const navLinkStyle = {
  background: 'none',
  border: 'none',
  fontWeight: '500',
  cursor: 'pointer',
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  position: 'relative'
};

export default Header;