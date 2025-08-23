import React from 'react';
import './About.css'; 

const About = ({ currentTheme }) => {
  const skills = [
    'C++', 'C#', 
    'Python', 'HTML/CSS',
    'Linux', 'Excel',
    'Java', 'JavaScript',
    'SQL', 'MongoDB' ,'React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Git', 'GitHub', 'Firebase', 'TypeScript', 'FastAPI', 'TensorFlow'
  ];

  // Theme configuration
  const themes = {
    light: { 
      bgColor: '#f8f9fa', 
      textColor: '#333', 
      accent: '#007bff', 
      secondary: '#ffffff',
      cardBg: '#ffffff',
      borderColor: 'rgba(0, 123, 255, 0.2)'
    },
    dark: { 
      bgColor: '#1a1a2e', 
      textColor: '#ffffff', 
      accent: '#4fc3f7', 
      secondary: '#16213e',
      cardBg: '#16213e',
      borderColor: 'rgba(79, 195, 247, 0.2)'
    },
    green: { 
      bgColor: '#0f1419', 
      textColor: '#ffffff', 
      accent: '#4caf50', 
      secondary: '#1b2f1b',
      cardBg: '#1b2f1b',
      borderColor: 'rgba(76, 175, 80, 0.2)'
    },
    purple: { 
      bgColor: '#1a0b2e', 
      textColor: '#ffffff', 
      accent: '#9c27b0', 
      secondary: '#2d1b4e',
      cardBg: '#2d1b4e',
      borderColor: 'rgba(156, 39, 176, 0.2)'
    }
  };

  const currentThemeData = themes[currentTheme] || themes.dark;

  return (
    <section 
      id="about" 
      className="about-section"
      style={{
        backgroundColor: currentThemeData.bgColor,
        color: currentThemeData.textColor
      }}
    >
      <div className="container">
        
        {/* About Me Section */}
        <div className="about-content">
          <h2 
            className="main-heading"
            style={{ color: currentThemeData.textColor }}
          >
            More about me
          </h2>
          
          <div 
            className="content-card"
            style={{
              backgroundColor: currentThemeData.cardBg,
              border: `1px solid ${currentThemeData.borderColor}`,
              color: currentThemeData.textColor
            }}
          >
            <p className="about-text" style={{ color: currentThemeData.textColor }}>
              <span 
                className="highlight"
                style={{ color: currentThemeData.accent }}
              >
                Academically,
              </span> I'm an undergraduate student at  
              <span 
                className="university"
                style={{ color: currentThemeData.accent }}
              > University of North Texas</span> pursuing a BS in Computer Science.
            </p>
            
            <p className="about-text" style={{ color: currentThemeData.textColor }}>
              <span 
                className="highlight"
                style={{ color: currentThemeData.accent }}
              >
                Un-academically,
              </span> I like working out, playing sports, and 
              hiking.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="divider">
          <div 
            className="divider-line"
            style={{ backgroundColor: currentThemeData.borderColor }}
          ></div>
          <div 
            className="divider-dot"
            style={{ backgroundColor: currentThemeData.accent }}
          ></div>
          <div 
            className="divider-line"
            style={{ backgroundColor: currentThemeData.borderColor }}
          ></div>
        </div>

        {/* Expertise Section */}
        <div className="expertise-section">
          <h3 
            className="section-heading"
            style={{ color: currentThemeData.textColor }}
          >
            Expertise
          </h3>
          
          <div className="expertise-intro">
            <p 
              className="expertise-text"
              style={{ color: currentThemeData.textColor }}
            >
              <span 
                className="prev-role"
                style={{ color: currentThemeData.accent }}
              >
                Intern @ Great Dakotas LLC.
              </span>{" "}
              <a 
                href="/Resume .pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="learn-more-link"
                style={{
                  color: currentThemeData.accent,
                  textDecoration: 'underline'
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '0.8';
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '1';
                }}
              >
                Learn more.
              </a>
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-container">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={skill} 
                  className={`skill-badge skill-${index % 10}`}
                  style={{
                    backgroundColor: currentThemeData.secondary,
                    color: currentThemeData.textColor,
                    border: `1px solid ${currentThemeData.borderColor}`,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = currentThemeData.accent;
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = currentThemeData.secondary;
                    e.target.style.color = currentThemeData.textColor;
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;