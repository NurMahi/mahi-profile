import React from 'react';

const Projects = ({ currentTheme }) => {
  const projects = [
    {
      title: "Interactive Dashboard",
      description: "Full-stack web application with real-time data visualization and user management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Mobile Finance App",
      description: "Cross-platform mobile app for personal finance tracking and budget management",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
      tech: ["React Native", "Firebase", "TypeScript"]
    },
    {
      title: "AI Data Analytics",
      description: "Machine learning platform for predictive analytics and data insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tech: ["Python", "TensorFlow", "FastAPI"]
    }
  ];

  // Theme configuration matching Hero.jsx exactly
  const themes = {
    light: { 
      bgColor: '#f8f9fa', 
      textColor: '#333', 
      accent: '#007bff', 
      secondary: '#e9ecef',
      cardBg: '#ffffff',
      cardBorder: 'rgba(0, 123, 255, 0.15)',
      cardShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    },
    dark: { 
      bgColor: '#1a1a2e', // Matches Hero.jsx dark theme
      textColor: '#ffffff', 
      accent: '#4fc3f7', 
      secondary: '#16213e', // Matches Hero.jsx
      cardBg: '#16213e',
      cardBorder: 'rgba(79, 195, 247, 0.2)',
      cardShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
    },
    green: { 
      bgColor: '#0f1419', // Matches Hero.jsx green theme
      textColor: '#ffffff', 
      accent: '#4caf50', 
      secondary: '#1b2f1b', // Matches Hero.jsx
      cardBg: '#1b2f1b',
      cardBorder: 'rgba(76, 175, 80, 0.2)',
      cardShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
    },
    purple: { 
      bgColor: '#1a0b2e', // Matches Hero.jsx purple theme
      textColor: '#ffffff', 
      accent: '#9c27b0', 
      secondary: '#2d1b4e', // Matches Hero.jsx
      cardBg: '#2d1b4e',
      cardBorder: 'rgba(156, 39, 176, 0.2)',
      cardShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
    }
  };

  const currentThemeData = themes[currentTheme] || themes.dark;

  return (
    <>
      <style>{`
        /* Projects Component Styles with Hero.jsx theme integration */
        .projects-section {
          transition: background-color 0.3s ease, color 0.3s ease;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* Animated background gradient like Hero.jsx */
        .projects-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, ${currentThemeData.bgColor} 0%, ${currentThemeData.secondary}80 100%);
          z-index: 0;
        }

        /* Floating particles like Hero.jsx */
        .floating-particle {
          position: absolute;
          border-radius: 50%;
          background-color: ${currentThemeData.accent};
          opacity: 0.2;
          animation: float 3s ease-in-out infinite;
        }

        /* Main title styling to match Hero.jsx */
        .projects-section-title {
          color: ${currentThemeData.textColor};
          font-size: 3rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 2;
        }

        /* Section label styling */
        .section-label {
          color: ${currentThemeData.accent};
          background-color: ${currentThemeData.accent};
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1.5rem;
          font-weight: 600;
          text-align: center;
          display: inline-block;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .project-card {
          position: relative;
          overflow: hidden;
          background: ${currentThemeData.secondary};
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: ${currentThemeData.cardShadow};
          z-index: 2;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
          border-color: ${currentThemeData.accent}60;
        }

        .project-image {
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.03);
        }

        .project-title {
          color: ${currentThemeData.textColor};
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background-color: rgba(255, 255, 255, 0.1);
          color: ${currentThemeData.textColor};
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background-color: ${currentThemeData.accent};
          color: white;
          border-color: ${currentThemeData.accent};
          transform: scale(1.05);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .projects-section-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .projects-section-title {
            font-size: 1.75rem;
          }
          
          .project-content {
            padding: 1rem !important;
          }
        }
      `}</style>
      <section 
        id="projects" 
        className="projects-section"
        style={{
          backgroundColor: currentThemeData.bgColor,
          color: currentThemeData.textColor,
          padding: '2rem 2rem 4rem 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated background like Hero.jsx */}
        <div className="projects-background"></div>
        
        {/* Floating particles like Hero.jsx */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}

        <div className="container" style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          
          {/* Main Title matching Hero.jsx style */}
          <h1 className="projects-section-title">
            Featured Projects
          </h1>
          
          <div className="projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card"
                style={{
                  backgroundColor: currentThemeData.secondary,
                  border: `1px solid rgba(255, 255, 255, 0.1)`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: currentThemeData.cardShadow
                }}
              >
                <div className="project-image-container" style={{ overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    style={{
                      width: '100%',
                      height: '220px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block'
                    }}
                  />
                </div>
                
                <div 
                  className="project-content"
                  style={{
                    padding: '1rem'
                  }}
                >
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  
                  <p className="project-description">
                    {project.description}
                  </p>
                  
                  <div 
                    className="tech-tags"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;