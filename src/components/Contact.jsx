import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = ({ currentTheme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mnnzeoog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Theme configurations (keeping your existing theme code)
  const themes = {
    light: { 
      bgColor: '#f8f9fa', 
      textColor: '#333', 
      accent: '#007bff', 
      secondary: '#e9ecef',
      cardBg: '#ffffff',
      inputBg: '#ffffff',
      borderColor: '#e5e7eb',
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      subtitleColor: '#64748b'
    },
    dark: { 
      bgColor: '#1a1a2e', 
      textColor: '#ffffff', 
      accent: '#4fc3f7', 
      secondary: '#16213e',
      cardBg: 'rgba(255, 255, 255, 0.8)',
      inputBg: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#e5e7eb',
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      subtitleColor: '#64748b'
    },
    green: { 
      bgColor: '#0f1419', 
      textColor: '#ffffff', 
      accent: '#4caf50', 
      secondary: '#1b2f1b',
      cardBg: 'rgba(255, 255, 255, 0.8)',
      inputBg: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#e5e7eb',
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      subtitleColor: '#64748b'
    },
    purple: { 
      bgColor: '#1a0b2e', 
      textColor: '#ffffff', 
      accent: '#9c27b0', 
      secondary: '#2d1b4e',
      cardBg: 'rgba(255, 255, 255, 0.8)',
      inputBg: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#e5e7eb',
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      subtitleColor: '#64748b'
    }
  };

  const theme = themes[currentTheme] || themes.dark;

  return (
    <>
      <style>{`
        /* Your existing CSS styles remain the same */
        #contact {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: ${theme.textColor};
          background: ${currentTheme === 'light' ? 
            'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' :
            `linear-gradient(135deg, ${theme.bgColor} 0%, ${theme.secondary} 100%)`
          };
          position: relative;
          overflow: hidden;
          padding: 5rem 0;
          transition: all 0.3s ease;
        }

        /* Status message styles */
        .status-message {
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          font-weight: 500;
          text-align: center;
        }

        .status-success {
          background-color: #d1fae5;
          color: #065f46;
          border: 1px solid #10b981;
        }

        .status-error {
          background-color: #fee2e2;
          color: #991b1b;
          border: 1px solid #ef4444;
        }

        /* Rest of your existing CSS styles... */
        #contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${currentTheme === 'light' ? 
            `radial-gradient(circle at 20% 20%, ${theme.accent}08 0%, transparent 50%),
             radial-gradient(circle at 80% 80%, ${theme.accent}05 0%, transparent 50%)` :
            `radial-gradient(circle at 20% 20%, ${theme.accent}15 0%, transparent 50%),
             radial-gradient(circle at 80% 80%, ${theme.accent}10 0%, transparent 50%)`
          };
          pointer-events: none;
        }

        .max-w-4xl {
          max-width: 56rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }

        #contact h2 {
          font-size: 2.5rem;
          font-weight: 700;
          background: ${currentTheme === 'light' ? 
            `linear-gradient(135deg, ${theme.textColor}, ${theme.accent})` :
            'linear-gradient(135deg, #1e293b, #475569)'
          };
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
          text-align: center;
        }

        #contact p {
          font-size: 1.125rem;
          color: ${theme.subtitleColor};
          max-width: 600px;
          margin: 0 auto 3rem;
          text-align: center;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
          justify-content: center;
        }

        .contact-info-item {
          background: ${theme.cardBg};
          backdrop-filter: blur(10px);
          border: 1px solid ${currentTheme === 'light' ? theme.borderColor : 'rgba(255, 255, 255, 0.2)'};
          border-radius: 1rem;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.6s ease-out forwards;
          box-shadow: ${currentTheme === 'light' ? 
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' :
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          };
        }

        .form-container {
          display: flex;
          justify-content: center;
        }

        .contact-form {
          background: ${theme.cardBg};
          backdrop-filter: blur(10px);
          border: 1px solid ${currentTheme === 'light' ? theme.borderColor : 'rgba(255, 255, 255, 0.2)'};
          border-radius: 1rem;
          padding: 2.5rem;
          box-shadow: 
            0 10px 15px -3px ${theme.shadowColor},
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          width: 100%;
          max-width: 600px;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: ${currentTheme === 'light' ? '#374151' : '#374151'};
          margin-bottom: 0.5rem;
          letter-spacing: 0.025em;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid ${theme.borderColor};
          border-radius: 0.75rem;
          font-size: 1rem;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          background: ${theme.inputBg};
          color: ${currentTheme === 'light' ? '#374151' : '#374151'};
          font-family: inherit;
          box-sizing: border-box;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: ${theme.accent};
          box-shadow: 
            0 0 0 3px ${theme.accent}20,
            0 1px 2px 0 rgba(0, 0, 0, 0.05);
          background: rgba(255, 255, 255, 1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.5;
        }

        .form-submit-btn {
          width: 100%;
          background: linear-gradient(135deg, ${theme.accent}, ${theme.accent}DD);
          color: white;
          padding: 0.875rem 1.5rem;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          box-shadow: 0 4px 6px -1px ${theme.accent}40;
        }

        .form-submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, ${theme.accent}DD, ${theme.accent}BB);
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px ${theme.accent}60;
        }

        .form-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section id="contact">
        <div className="max-w-4xl">
          <h2>Get In Touch</h2>
          <p>Have a question or want to work together? I'd love to hear from you!</p>

          {/* Contact Info */}
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="icon-container email">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3>Email</h3>
              <p>nurmahi487@gmail.com</p>
            </div>
            
            <div className="contact-info-item">
              <div className="icon-container location">
                <MapPin className="text-purple-600" size={24} />
              </div>
              <h3>Location</h3>
              <p>Denton, TX</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="status-message status-success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="status-message status-error">
                  ❌ Failed to send message. Please try again or email me directly.
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="form-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;