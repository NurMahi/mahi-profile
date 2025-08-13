import React, { useState } from 'react';

const Hero = ({ onThemeChange, currentTheme }) => {
  const themes = [
    { name: 'light', color: '#f0f0f0', bgColor: '#f8f9fa' },
    { name: 'dark', color: '#333', bgColor: '#1a1a1a' },
    { name: 'green', color: '#5a6c57', bgColor: '#e8f5e8' },
    { name: 'purple', color: '#8b4d6b', bgColor: '#f5e8f5' }
  ];

  const currentThemeData = themes.find(t => t.name === currentTheme) || themes[0];

  return (
    <section id="home" style={{
      ...heroStyle,
      backgroundColor: currentThemeData.bgColor
    }}>
      <div className="container" style={containerStyle}>
        <div style={contentStyle}>
          {/* Left side - Text content */}
          <div style={textContentStyle}>
            <h1 style={titleStyle}>Hi, I'm Mahi.</h1>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>What I Do</h3>
              <p style={cardTextStyle}>
                Software developer and student on weekdays, explorer
                 on weekends
              </p>
            </div>
          </div>
          
          {/* Right side - Profile and theme picker */}
          <div style={profileSectionStyle}>
            <div style={profileImageStyle}>
              <img 
                src="my-photo.jpg"
                alt="Mahi's Profile"
                style={imageStyle}
              />
            </div>
            
            <div style={themePickerStyle}>
              <p style={themeTextStyle}>Personalize Theme</p>
              <div style={colorPickerStyle}>
                {themes.map((theme) => (
                  <button
                    key={theme.name}
                    style={{
                      ...colorDotStyle,
                      backgroundColor: theme.color,
                      border: currentTheme === theme.name ? '3px solid #007bff' : '2px solid #ddd',
                      transform: currentTheme === theme.name ? 'scale(1.1)' : 'scale(1)'
                    }}
                    onClick={() => onThemeChange(theme.name)}
                  />
                ))}
              </div>
              <small style={saveTextStyle}>
                *Theme settings will be saved for your next visit
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated styles with bigger image
const heroStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '100px',
  paddingBottom: '50px',
  transition: 'background-color 0.3s ease'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const contentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center'
};

const textContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
};

const titleStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '1rem'
};

const cardStyle = {
  backgroundColor: '#e8f4f8',
  border: '2px solid #4a90a4',
  borderRadius: '8px',
  padding: '2rem',
  maxWidth: '400px'
};

const cardTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  color: '#333'
};

const cardTextStyle = {
  color: '#666',
  lineHeight: '1.6'
};

const profileSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem'
};

const profileImageStyle = {
  width: '286px',        // Bigger!
  height: '395px',       // Bigger!
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',    // Less cropping!
  backgroundColor: '#f8f9fa'
};

const themePickerStyle = {
  textAlign: 'center'
};

const themeTextStyle = {
  marginBottom: '1rem',
  fontWeight: '500',
  color: '#333'
};

const colorPickerStyle = {
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'center',
  marginBottom: '0.5rem'
};

const colorDotStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};

const saveTextStyle = {
  color: '#666',
  fontSize: '0.8rem'
};

export default Hero;