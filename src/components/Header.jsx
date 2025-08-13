import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={containerStyle}>
        <div style={logoStyle}>
          <h2>Profile</h2>
        </div>
        
        <nav style={navStyle}>
          <button onClick={() => scrollToSection('home')} style={navLinkStyle}>
            Home
          </button>
          <button onClick={() => scrollToSection('about')} style={navLinkStyle}>
            About
          </button>
          <button onClick={() => scrollToSection('projects')} style={navLinkStyle}>
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} style={navLinkStyle}>
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
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  padding: '1rem 0',
  borderBottom: '1px solid #eee'
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333'
};

const navStyle = {
  display: 'flex',
  gap: '2rem'
};

const navLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#333',
  fontWeight: '500',
  cursor: 'pointer',
  fontSize: '1rem',
  padding: '0.5rem',
  transition: 'color 0.3s ease'
};

export default Header;