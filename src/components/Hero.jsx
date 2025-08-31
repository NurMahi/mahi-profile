import React, { useState, useEffect } from 'react';

const Hero = ({ onThemeChange, currentTheme }) => {
  // Fallback state management if props aren't provided
  const [localTheme, setLocalTheme] = useState('dark');
  const [robotMessage, setRobotMessage] = useState("Hi there! 👋 I'm your portfolio assistant!");
  const [showRobot, setShowRobot] = useState(false);
  
  const themes = [
    { name: 'light', color: '#ffffff', bgColor: '#f8f9fa', textColor: '#333', accent: '#007bff', secondary: '#e9ecef' },
    { name: 'dark', color: '#2c2c54', bgColor: '#1a1a2e', textColor: '#ffffff', accent: '#4fc3f7', secondary: '#16213e' },
    { name: 'green', color: '#228B22', bgColor: '#0f1419', textColor: '#ffffff', accent: '#4caf50', secondary: '#1b2f1b' },
    { name: 'purple', color: '#6a4c93', bgColor: '#1a0b2e', textColor: '#ffffff', accent: '#9c27b0', secondary: '#2d1b4e' }
  ];

const robotMessages = [
    "Hi there! 👋 I'm your portfolio assistant!",
    "Nice theme choice! Looking good! 🎨",
    "Want to see Mahi's projects? Click Projects above! 📂",
    "I love helping visitors explore portfolios! 💼",
    "Did you know? This site has multiple themes! 🌈",
    "Feel free to contact Mahi if you like what you see! 📧",
    "I'm doing a little dance! 💃 Click me again!",
    "Wheee! I can jump too! 🚀",
    "✨ Magic sparkles! ✨ I love interactive fun!",
    "My eyes change expressions! Watch this! 👀",
    "I never get tired of helping visitors! 🤖",
    "Try hovering over me for surprises! 🎉"
  ];

// Use prop or fallback to local state
  const activeTheme = currentTheme || localTheme;
  const currentThemeData = themes.find(t => t.name === activeTheme) || themes[1]; // Default to dark

  const handleThemeClick = (themeName) => {
    if (onThemeChange) {
      onThemeChange(themeName);
    } else {
      setLocalTheme(themeName);
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
    document.body.style.backgroundColor = currentThemeData.bgColor;
    document.body.style.color = currentThemeData.textColor;
    
    // Show robot after 2 seconds
    setTimeout(() => setShowRobot(true), 2000);
  }, [activeTheme, currentThemeData]);

  // Cute Robot Component
  const CuteRobot = ({ onClick, theme }) => {
    const [isWaving, setIsWaving] = useState(true);
    const [eyeExpression, setEyeExpression] = useState('happy');
    const [isDancing, setIsDancing] = useState(false);
    const [isJumping, setIsJumping] = useState(false);
    const [sparkles, setSparkles] = useState([]);
    
    const handleRobotInteraction = () => {
      // Cycle through expressions on click
      const expressions = ['happy', 'excited', 'sleepy', 'surprised', 'love'];
      const currentIndex = expressions.indexOf(eyeExpression);
      const nextExpression = expressions[(currentIndex + 1) % expressions.length];
      setEyeExpression(nextExpression);
      
      // Random fun interactions
      const interactions = ['wave', 'dance', 'jump', 'sparkle'];
      const randomInteraction = interactions[Math.floor(Math.random() * interactions.length)];
      
      switch (randomInteraction) {
        case 'wave':
          setIsWaving(!isWaving);
          break;
        case 'dance':
          setIsDancing(true);
          setTimeout(() => setIsDancing(false), 3000);
          break;
        case 'jump':
          setIsJumping(true);
          setTimeout(() => setIsJumping(false), 1000);
          break;
        case 'sparkle':
          // Create sparkle effect
          const newSparkles = Array.from({ length: 8 }, (_, i) => ({
            id: Date.now() + i,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            delay: i * 0.1
          }));
          setSparkles(newSparkles);
          setTimeout(() => setSparkles([]), 2000);
          break;
      }
      
      // Call the parent onClick
      onClick();
      
      // Reset to happy after 3 seconds
      setTimeout(() => {
        setEyeExpression('happy');
        setIsWaving(true);
      }, 3000);
    };

    const getEyeStyle = (expression) => {
      const baseStyle = {
        width: '8px',
        height: '8px',
        backgroundColor: theme.accent,
        borderRadius: '50%',
        boxShadow: `0 0 10px ${theme.accent}`,
        transition: 'all 0.3s ease',
        animation: 'eyeGlow 2s ease-in-out infinite'
      };

      switch (expression) {
        case 'excited':
          return { ...baseStyle, transform: 'scaleY(1.3)', backgroundColor: '#ff6b6b' };
        case 'sleepy':
          return { ...baseStyle, height: '3px', transform: 'translateY(2px)' };
        case 'surprised':
          return { ...baseStyle, width: '12px', height: '12px', transform: 'scale(1.2)' };
        case 'love':
          return { ...baseStyle, backgroundColor: '#ff1493', boxShadow: '0 0 15px #ff1493', animation: 'heartPulse 0.5s ease-in-out infinite' };
        default:
          return baseStyle;
      }
    };

    return (
      <div 
        onClick={handleRobotInteraction}
        style={{
          width: '90px',
          height: '120px',
          cursor: 'pointer',
          position: 'relative',
          transform: isJumping ? 'scale(1.1) translateY(-15px)' : 'scale(1)',
          transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          animation: `robotFloat 3s ease-in-out infinite ${isDancing ? ', robotDance 0.5s ease-in-out infinite' : ''}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = isJumping ? 'scale(1.25) translateY(-15px) rotate(2deg)' : 'scale(1.15) rotate(2deg)';
          setEyeExpression('excited');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = isJumping ? 'scale(1.1) translateY(-15px)' : 'scale(1)';
          setEyeExpression('happy');
        }}
      >
        {/* Sparkle Effects */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            style={{
              position: 'absolute',
              left: `50%`,
              top: `50%`,
              transform: `translate(${sparkle.x}px, ${sparkle.y}px)`,
              width: '6px',
              height: '6px',
              backgroundColor: theme.accent,
              borderRadius: '50%',
              animation: `sparkleEffect 2s ease-out forwards`,
              animationDelay: `${sparkle.delay}s`,
              pointerEvents: 'none',
              zIndex: 20
            }}
          />
        ))}

        {/* Robot Antennas with glowing tips */}
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '20px',
          zIndex: 10
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              backgroundColor: theme.accent,
              borderRadius: '50%',
              boxShadow: `0 0 8px ${theme.accent}`,
              animation: 'antennaGlow 1.5s ease-in-out infinite alternate'
            }} />
            <div style={{
              width: '2px',
              height: '15px',
              backgroundColor: '#e0e0e0',
              borderRadius: '1px'
            }} />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              backgroundColor: theme.accent,
              borderRadius: '50%',
              boxShadow: `0 0 8px ${theme.accent}`,
              animation: 'antennaGlow 1.5s ease-in-out infinite alternate 0.3s'
            }} />
            <div style={{
              width: '2px',
              height: '15px',
              backgroundColor: '#e0e0e0',
              borderRadius: '1px'
            }} />
          </div>
        </div>

        {/* Robot Head/Helmet */}
        <div style={{
          width: '60px',
          height: '50px',
          backgroundColor: '#f8f9fa',
          borderRadius: '30px 30px 25px 25px',
          margin: '0 auto',
          position: 'relative',
          border: '3px solid #e9ecef',
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
          background: 'linear-gradient(145deg, #ffffff, #f0f0f0)'
        }}>
          {/* Helmet Visor/Screen */}
          <div style={{
            width: '48px',
            height: '32px',
            backgroundColor: '#1a1a2e',
            borderRadius: '20px',
            position: 'absolute',
            top: '6px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            border: '2px solid #333',
            overflow: 'hidden'
          }}>
            {/* Robot Eyes - Now properly positioned */}
            <div style={getEyeStyle(eyeExpression)} />
            <div style={getEyeStyle(eyeExpression)} />
          </div>

          {/* Smile - Now outside the visor */}
          <div style={{
            position: 'absolute',
            bottom: '6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '25px',
            height: '12px',
            border: `3px solid ${theme.accent}`,
            borderTop: 'none',
            borderRadius: '0 0 25px 25px',
            opacity: eyeExpression === 'sleepy' ? 0.3 : 1,
            transition: 'all 0.3s ease'
          }} />

          {/* Cheek lights */}
          <div style={{
            position: 'absolute',
            top: '25px',
            left: '8px',
            width: '4px',
            height: '4px',
            backgroundColor: eyeExpression === 'excited' ? '#ff6b6b' : theme.accent,
            borderRadius: '50%',
            boxShadow: `0 0 8px ${eyeExpression === 'excited' ? '#ff6b6b' : theme.accent}`,
            opacity: 0.7,
            animation: 'cheekGlow 2s ease-in-out infinite alternate'
          }} />
          <div style={{
            position: 'absolute',
            top: '25px',
            right: '8px',
            width: '4px',
            height: '4px',
            backgroundColor: eyeExpression === 'excited' ? '#ff6b6b' : theme.accent,
            borderRadius: '50%',
            boxShadow: `0 0 8px ${eyeExpression === 'excited' ? '#ff6b6b' : theme.accent}`,
            opacity: 0.7,
            animation: 'cheekGlow 2s ease-in-out infinite alternate 0.5s'
          }} />
        </div>

        {/* Robot Neck - Connects head to body */}
        <div style={{
          width: '25px',
          height: '8px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          margin: '0 auto',
          border: '2px solid #e0e0e0'
        }} />

        {/* Robot Body */}
        <div style={{
          width: '55px',
          height: '40px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          margin: '0 auto',
          border: '3px solid #e9ecef',
          position: 'relative',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          background: 'linear-gradient(145deg, #ffffff, #f0f0f0)'
        }}>
          {/* Body Panel Lines */}
          <div style={{
            width: '35px',
            height: '2px',
            backgroundColor: '#d6d8db',
            position: 'absolute',
            top: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '1px'
          }} />
          <div style={{
            width: '25px',
            height: '2px',
            backgroundColor: '#d6d8db',
            position: 'absolute',
            top: '22px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '1px'
          }} />
          
          {/* Chest Light */}
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: theme.accent,
            borderRadius: '50%',
            position: 'absolute',
            top: '6px',
            left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: `0 0 12px ${theme.accent}`,
            animation: 'heartbeat 2s ease-in-out infinite'
          }} />

          {/* Side buttons */}
          <div style={{
            position: 'absolute',
            right: '8px',
            top: '15px',
            width: '4px',
            height: '4px',
            backgroundColor: '#28a745',
            borderRadius: '50%',
            boxShadow: '0 0 4px #28a745'
          }} />
          <div style={{
            position: 'absolute',
            left: '8px',
            top: '15px',
            width: '4px',
            height: '4px',
            backgroundColor: '#ffc107',
            borderRadius: '50%',
            boxShadow: '0 0 4px #ffc107'
          }} />
        </div>

        {/* Robot Arms - Better connected to body */}
        <div style={{
          position: 'absolute',
          top: '55px', // Moved up to connect better with body
          left: '-12px', // Moved closer to body
          width: '15px',
          height: '30px', // Made longer
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '2px solid #e0e0e0',
          background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
          transformOrigin: 'top center',
          animation: isWaving ? 'none' : 'armSwing 3s ease-in-out infinite'
        }}>
          {/* Left Hand - Better positioned */}
          <div style={{
            position: 'absolute',
            bottom: '-6px',
            left: '1px',
            width: '13px',
            height: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '2px solid #e0e0e0',
            background: 'linear-gradient(145deg, #ffffff, #f0f0f0)'
          }} />
        </div>

        <div style={{
          position: 'absolute',
          top: '55px', // Moved up to connect better with body
          right: '-12px', // Moved closer to body
          width: '15px',
          height: '30px', // Made longer
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '2px solid #e0e0e0',
          background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
          transform: isWaving ? 'rotate(-20deg)' : 'rotate(0deg)',
          transformOrigin: 'top center',
          transition: 'transform 0.5s ease',
          animation: isWaving ? 'wave 1.2s ease-in-out infinite' : 'armSwing 3s ease-in-out infinite 0.5s'
        }}>
          {/* Right Waving Hand - Better positioned */}
          <div style={{
            position: 'absolute',
            bottom: '-6px',
            right: '1px',
            width: '13px',
            height: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '2px solid #e0e0e0',
            background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
            animation: isWaving ? 'handWave 0.6s ease-in-out infinite alternate' : 'none'
          }} />
        </div>

        {/* Robot Legs - Better connected to body */}
        <div style={{
          position: 'absolute',
          bottom: '-25px', // Moved up to connect better
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px' // Reduced gap
        }}>
          <div style={{
            width: '14px', // Made slightly wider
            height: '22px', // Made longer
            backgroundColor: '#f8f9fa',
            borderRadius: '7px',
            border: '2px solid #e0e0e0',
            background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
            position: 'relative'
          }}>
            {/* Left Foot - Better connected */}
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '-3px',
              width: '20px',
              height: '10px',
              backgroundColor: '#f8f9fa',
              borderRadius: '10px',
              border: '2px solid #e0e0e0',
              background: 'linear-gradient(145deg, #ffffff, #f0f0f0)'
            }} />
          </div>
          <div style={{
            width: '14px', // Made slightly wider
            height: '22px', // Made longer
            backgroundColor: '#f8f9fa',
            borderRadius: '7px',
            border: '2px solid #e0e0e0',
            background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
            position: 'relative'
          }}>
            {/* Right Foot - Better connected */}
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              right: '-3px',
              width: '20px',
              height: '10px',
              backgroundColor: '#f8f9fa',
              borderRadius: '10px',
              border: '2px solid #e0e0e0',
              background: 'linear-gradient(145deg, #ffffff, #f0f0f0)'
            }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="home" style={{
      minHeight: '100vh',
      backgroundColor: currentThemeData.bgColor,
      color: currentThemeData.textColor,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Enhanced animated background with geometric shapes */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, ${currentThemeData.accent}20 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, ${currentThemeData.color}30 0%, transparent 50%),
          linear-gradient(135deg, ${currentThemeData.bgColor} 0%, ${currentThemeData.secondary} 100%)
        `,
        zIndex: 0
      }}>
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              background: `linear-gradient(45deg, ${currentThemeData.accent}40, ${currentThemeData.color}20)`,
              borderRadius: i % 3 === 0 ? '50%' : i % 2 === 0 ? '8px' : '0',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite ${Math.random() * 2}s`,
              opacity: 0.1,
              backdropFilter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Enhanced Navigation bar with glassmorphism */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(26, 26, 46, 0.8)',
        backdropFilter: 'blur(20px)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        borderBottom: `1px solid ${currentThemeData.accent}30`
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: currentThemeData.textColor
        }}>
          Portfolio
        </div>
        
        {/* Enhanced Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              position: 'relative'
            }}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Interactive Robot with enhanced animations */}
      {showRobot && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '10px'
        }}>
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${currentThemeData.accent}, ${currentThemeData.color})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: `0 8px 25px ${currentThemeData.accent}40`,
            transition: 'all 0.3s ease',
            animation: 'robotFloat 3s ease-in-out infinite',
            fontSize: '2rem',
            border: `2px solid ${currentThemeData.accent}60`
          }} onClick={handleRobotClick}>
            
          </div>
          <div style={{
            maxWidth: '250px',
            padding: '12px 16px',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '18px',
            color: 'white',
            fontSize: '0.9rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            animation: 'fadeIn 0.5s ease',
            border: `1px solid ${currentThemeData.accent}30`
          }}>
            {robotMessage}
          </div>
        </div>
      )}

      {/* Main content with space-efficient layout */}
      <div style={{
        paddingTop: '120px',
        padding: '120px 2rem 4rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Compact Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            margin: '0 0 1rem 0',
            color: currentThemeData.textColor,
            letterSpacing: '-0.02em'
          }}>
            Hi, I'm Mahi!
          </h1>
        </div>

        {/* Redesigned main terminal - More compact and modern */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '4rem'
        }}>
          <div style={{
            backgroundColor: `${currentThemeData.secondary}CC`,
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: `1px solid ${currentThemeData.accent}30`,
            overflow: 'hidden',
            width: '100%',
            maxWidth: '900px',
            boxShadow: `0 25px 80px ${currentThemeData.bgColor}60`
          }}>
            {/* Enhanced terminal header */}
            <div style={{
              background: `linear-gradient(90deg, ${currentThemeData.bgColor}80, ${currentThemeData.color}20)`,
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#27ca3f' }}></div>
              </div>
              <div style={{
                color: `${currentThemeData.accent}`,
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                
              </div>
            </div>
            
            {/* Compact terminal content in a card layout */}
            <div style={{
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '2.5rem',
              alignItems: 'start'
            }}>
              {/* Profile photo - Optimized size */}
              <div style={{
                width: '180px',
                height: '240px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: `2px solid ${currentThemeData.accent}40`,
                boxShadow: `0 15px 40px ${currentThemeData.bgColor}40`,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(45deg, transparent 30%, ${currentThemeData.accent}20)`,
                  zIndex: 1
                }}></div>
                <img 
                  src="my-photo.jpg" // Replace with your actual photo path
                  alt="Mahi's Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Compact info section */}
              <div>
                <div style={{
                  background: `linear-gradient(135deg, ${currentThemeData.accent}, ${currentThemeData.color})`,
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                  display: 'inline-block',
                  boxShadow: `0 8px 25px ${currentThemeData.accent}40`
                }}>
                  <h2 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    What I Do
                  </h2>
                </div>
                
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: '0 0 2rem 0',
                  opacity: 0.9,
                  color: currentThemeData.textColor
                }}>
                  Software developer and student on weekdays, hiker on weekends.
                </p>

                {/* Compact theme picker */}
                <div>
                  <p style={{
                    marginBottom: '1rem',
                    fontWeight: '500',
                    fontSize: '1rem',
                    color: currentThemeData.textColor
                  }}>
                    Personalize Theme
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '0.8rem',
                    marginBottom: '0.5rem'
                  }}>
                    {themes.map((theme) => (
                      <button
                        key={theme.name}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: `linear-gradient(135deg, ${theme.color}, ${theme.accent || theme.color})`,
                          border: activeTheme === theme.name ? `3px solid ${currentThemeData.accent}` : '2px solid rgba(255,255,255,0.2)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          transform: activeTheme === theme.name ? 'scale(1.1)' : 'scale(1)',
                          boxShadow: activeTheme === theme.name ? `0 0 15px ${currentThemeData.accent}60` : '0 4px 15px rgba(0,0,0,0.2)'
                        }}
                        onClick={() => handleThemeClick(theme.name)}
                      />
                    ))}
                  </div>
                  <small style={{
                    fontSize: '0.8rem',
                    opacity: 0.7,
                    color: currentThemeData.textColor,
                    fontStyle: 'italic'
                  }}>
                    Theme settings saved for your next visit
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Space-efficient Family and Friends section with cards */}
        <div style={{
          display: 'grid',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Family & Friends in compact card layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            width: '100%'
          }}>
            {/* Family Card */}
            <div style={{
              background: `${currentThemeData.secondary}CC`,
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: `1px solid ${currentThemeData.accent}30`,
              overflow: 'hidden',
              boxShadow: `0 20px 60px ${currentThemeData.bgColor}40`,
              transition: 'transform 0.3s ease',
              width: '100%'
            }}>
              <div style={{
                position: 'relative',
                height: '350px',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                 
                  zIndex: 1
                }}></div>
                <img
                  src="family-1.jpeg" // Replace with your actual family photo path
                  alt="Family photo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{
                padding: '2rem'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: currentThemeData.textColor
                }}>
                  Family
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  opacity: 0.9,
                  margin: 0,
                  color: currentThemeData.textColor
                }}>
                  I love spending time with my siblings. Here's a photo of me, my brother, and my sister hanging out at the zoo.
                </p>
              </div>
            </div>

            {/* Friends Card */}
            <div style={{
              background: `${currentThemeData.secondary}CC`,
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: `1px solid ${currentThemeData.accent}30`,
              overflow: 'hidden',
              boxShadow: `0 20px 60px ${currentThemeData.bgColor}40`,
              transition: 'transform 0.3s ease',
              width: '100%'
            }}>
              <div style={{
                position: 'relative',
                height: '350px',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  
                  zIndex: 1
                }}></div>
                <img
                  src="friend-1.jpeg" // Replace with your actual friends photo path
                  alt="Friends photo"
                  style={{
                    width: '100%',
                    height: '150%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{
                padding: '2rem'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: currentThemeData.textColor
                }}>
                  Friends
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  opacity: 0.9,
                  margin: 0,
                  color: currentThemeData.textColor
                }}>
                  From laughing through high school days to surviving life's hardest exams, I'm glad I've had them by my side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes robotFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            box-shadow: 0 8px 25px ${currentThemeData.accent}40;
          }
          50% { 
            transform: translateY(-10px) rotate(2deg) scale(1.05); 
            box-shadow: 0 15px 35px ${currentThemeData.accent}60;
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(10px) rotate(2deg); }
          66% { transform: translateY(10px) translateX(-5px) rotate(-1deg); }
        }

        button:hover {
          transform: scale(1.15) !important;
          filter: brightness(1.1);
        }

        nav a:hover {
          color: ${currentThemeData.accent} !important;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        div[style*="gridTemplateColumns"]:hover > div {
          transform: translateY(-5px);
        }

        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="minmax(350px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;