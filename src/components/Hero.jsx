import React, { useState, useEffect } from 'react';

const Hero = ({ onThemeChange, currentTheme }) => {
  // Fallback state management if props aren't provided
  const [localTheme, setLocalTheme] = useState('light');
  const [robotMessage, setRobotMessage] = useState("Hi there! 👋 I'm your portfolio assistant!");
  const [showRobot, setShowRobot] = useState(false);
  
  const themes = [
    { name: 'light', color: '#f0f0f0', bgColor: '#f8f9fa', textColor: '#333' },
    { name: 'dark', color: '#333', bgColor: '#1a1a1a', textColor: '#fff' },
    { name: 'green', color: '#5a6c57', bgColor: '#e8f5e8', textColor: '#2d3e2a' },
    { name: 'purple', color: '#8b4d6b', bgColor: '#f5e8f5', textColor: '#5a2d47' }
  ];

  const robotMessages = [
    "Hi there! 👋 I'm your portfolio assistant!",
    "Nice theme choice! 🎨 Looking good!",
    "Want to see Mahi's projects? Click Projects above! 🚀",
    "I love helping visitors explore portfolios! 🤖",
    "Did you know? This site has multiple themes! 🌈",
    "Feel free to contact Mahi if you like what you see! 💼"
  ];

  // Use prop or fallback to local state
  const activeTheme = currentTheme || localTheme;
  const currentThemeData = themes.find(t => t.name === activeTheme) || themes[0];

  const handleThemeClick = (themeName) => {
    if (onThemeChange) {
      onThemeChange(themeName);
    } else {
      setLocalTheme(themeName);
      // Apply to document root for global theming
      document.documentElement.style.setProperty('--bg-color', currentThemeData.bgColor);
      document.documentElement.style.setProperty('--text-color', currentThemeData.textColor);
    }
    
    // Robot reacts to theme changes
    setRobotMessage("Nice theme choice! 🎨 Looking good!");
    setTimeout(() => {
      setRobotMessage(robotMessages[0]);
    }, 3000);
  };

  const handleRobotClick = () => {
    const randomMessage = robotMessages[Math.floor(Math.random() * robotMessages.length)];
    setRobotMessage(randomMessage);
  };

  // Apply theme on mount and when theme changes
  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', currentThemeData.bgColor);
    document.documentElement.style.setProperty('--text-color', currentThemeData.textColor);
    document.body.style.backgroundColor = currentThemeData.bgColor;
    document.body.style.color = currentThemeData.textColor;
    
    // Show robot after 2 seconds
    setTimeout(() => setShowRobot(true), 2000);
  }, [activeTheme, currentThemeData]);

  return (
    <section id="home" style={{
      ...heroStyle,
      backgroundColor: currentThemeData.bgColor,
      color: currentThemeData.textColor
    }}>
      {/* White Header Line - Fixed positioning */}
      <div style={headerLineStyle}>
        <h2 style={profileHeaderStyle}>Profile</h2>
      </div>
      
      {/* Interactive Robot */}
      {showRobot && (
        <div style={robotContainerStyle}>
          <div style={robotStyle} onClick={handleRobotClick} className="robot-container">
            <div style={robotBodyStyle}>
              {/* Robot Head */}
              <div style={robotHeadStyle}>
                <div style={robotEyesStyle}>
                  <div style={robotEyeStyle}></div>
                  <div style={robotEyeStyle}></div>
                </div>
                <div style={robotMouthStyle}></div>
              </div>
              {/* Robot Body */}
              <div style={robotChestStyle}>
                <div style={robotLightStyle}></div>
              </div>
            </div>
          </div>
          <div style={{
            ...robotMessageStyle,
            backgroundColor: activeTheme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)'
          }}>
            {robotMessage}
          </div>
        </div>
      )}
      
      <div className="container" style={containerStyle}>
        <div style={contentStyle}>
          {/* Left side - Profile Image */}
          <div style={profileSectionStyle}>
            <div style={profileImageStyle}>
              <img 
                src="my-photo.jpg"
                alt="Mahi's Profile"
                style={imageStyle}
              />
            </div>
          </div>
          
          {/* Right side - Text content and theme picker */}
          <div style={textContentStyle}>
            <h1 style={{...titleStyle, color: currentThemeData.textColor}}>Hi, I'm Mahi.</h1>
            <div style={{
              ...cardStyle,
              backgroundColor: activeTheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#e8f4f8',
              borderColor: currentThemeData.color
            }}>
              <h3 style={{...cardTitleStyle, color: currentThemeData.textColor}}>What I Do</h3>
              <p style={{...cardTextStyle, color: activeTheme === 'dark' ? '#ccc' : '#666'}}>
                Software developer and student on weekdays, explorer on weekends
              </p>
            </div>
            
            {/* Theme picker moved to right side */}
            <div style={themePickerStyle}>
              <p style={{...themeTextStyle, color: currentThemeData.textColor}}>Personalize Theme</p>
              <div style={colorPickerStyle}>
                {themes.map((theme) => (
                  <button
                    key={theme.name}
                    style={{
                      ...colorDotStyle,
                      backgroundColor: theme.color,
                      border: activeTheme === theme.name ? '3px solid #007bff' : '2px solid #ddd',
                      transform: activeTheme === theme.name ? 'scale(1.2)' : 'scale(1)',
                      boxShadow: activeTheme === theme.name ? '0 0 10px rgba(0,123,255,0.5)' : 'none'
                    }}
                    onClick={() => handleThemeClick(theme.name)}
                    title={`Switch to ${theme.name} theme`}
                  />
                ))}
              </div>
              <small style={{...saveTextStyle, color: activeTheme === 'dark' ? '#aaa' : '#666'}}>
                *Theme settings will be saved for your next visit
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated styles - Fixed void space
const heroStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '0px',
  paddingBottom: '0px',
  transition: 'all 0.3s ease',
  position: 'relative'
};

const headerLineStyle = {
  width: '100%',
  backgroundColor: 'white',
  padding: '15px 0',
  borderBottom: '1px solid #e0e0e0',
  position: 'relative',
  zIndex: '10',
  margin: '0',  // Remove any margin
  boxSizing: 'border-box'
};

const profileHeaderStyle = {
  textAlign: 'center',
  margin: '0',
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#333'
};

// Robot styles
const robotContainerStyle = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  zIndex: '1000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '10px'
};

const robotStyle = {
  width: '70px',
  height: '70px',
  borderRadius: '15px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
  transition: 'all 0.3s ease',
  animation: 'float 3s ease-in-out infinite',
  border: '2px solid rgba(255,255,255,0.3)',
  position: 'relative',
  overflow: 'hidden'
};

const robotBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px'
};

const robotHeadStyle = {
  width: '28px',
  height: '28px',
  backgroundColor: 'rgba(255,255,255,0.9)',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
  position: 'relative'
};

const robotEyesStyle = {
  display: 'flex',
  gap: '4px'
};

const robotEyeStyle = {
  width: '4px',
  height: '4px',
  backgroundColor: '#333',
  borderRadius: '50%',
  animation: 'blink 3s infinite'
};

const robotMouthStyle = {
  width: '8px',
  height: '2px',
  backgroundColor: '#333',
  borderRadius: '2px',
  marginTop: '1px'
};

const robotChestStyle = {
  width: '20px',
  height: '12px',
  backgroundColor: 'rgba(255,255,255,0.8)',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const robotLightStyle = {
  width: '6px',
  height: '6px',
  backgroundColor: '#00ff88',
  borderRadius: '50%',
  animation: 'pulse 2s infinite',
  boxShadow: '0 0 8px #00ff88'
};

const robotFaceStyle = {
  fontSize: '24px',
  animation: 'pulse 1.5s infinite'
};

const robotMessageStyle = {
  maxWidth: '250px',
  padding: '12px 16px',
  borderRadius: '18px',
  color: 'white',
  fontSize: '0.9rem',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  position: 'relative',
  marginBottom: '10px',
  animation: 'fadeIn 0.5s ease'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 20px',  // Add some padding
  flex: '1',
  display: 'flex',
  alignItems: 'center'
};

const contentStyle = {
  display: 'grid',
  gridTemplateColumns: '400px 1fr',
  gap: '4rem',
  alignItems: 'center',
  width: '100%'
};

const textContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
};

const titleStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  transition: 'color 0.3s ease'
};

const cardStyle = {
  border: '2px solid #4a90a4',
  borderRadius: '8px',
  padding: '2rem',
  maxWidth: '500px',
  transition: 'all 0.3s ease'
};

const cardTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  transition: 'color 0.3s ease'
};

const cardTextStyle = {
  lineHeight: '1.6',
  transition: 'color 0.3s ease'
};

const profileSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem'
};

const profileImageStyle = {
  width: '300px',
  height: '400px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  backgroundColor: '#f8f9fa'
};

const themePickerStyle = {
  textAlign: 'left',
  marginTop: '1rem'
};

const themeTextStyle = {
  marginBottom: '1rem',
  fontWeight: '500',
  transition: 'color 0.3s ease'
};

const colorPickerStyle = {
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '0.5rem'
};

const colorDotStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  outline: 'none'
};

const saveTextStyle = {
  fontSize: '0.8rem',
  transition: 'color 0.3s ease'
};

// Add CSS animations to document
const addAnimations = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    
    @keyframes pulse {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.1); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes blink {
      0%, 90%, 100% { transform: scaleY(1); }
      95% { transform: scaleY(0.1); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Hover effects */
    .robot-container:hover {
      transform: scale(1.1) !important;
      box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6) !important;
    }
  `;
  document.head.appendChild(style);
};

// Add animations when component loads
if (typeof document !== 'undefined') {
  addAnimations();
}

export default Hero;