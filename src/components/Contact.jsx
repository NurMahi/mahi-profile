import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully! (This is a demo)');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <style>{`
        /* Contact.css - Modern styling for Contact component */
        #contact {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #2d3748;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
          padding: 5rem 0;
        }

        #contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
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
          background: linear-gradient(135deg, #1e293b, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
          text-align: center;
        }

        #contact p {
          font-size: 1.125rem;
          color: #64748b;
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
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .contact-info-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-info-item:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .contact-info-item:hover::before {
          opacity: 1;
        }

        .icon-container {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .icon-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .icon-container.email {
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
        }

        .icon-container.email::before {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        }

        .icon-container.location {
          background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
        }

        .icon-container.location::before {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        }

        .contact-info-item:hover .icon-container::before {
          opacity: 1;
        }

        .contact-info-item:hover .icon-container svg {
          color: white !important;
          transform: scale(1.1);
        }

        .icon-container svg {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          position: relative;
        }

        .contact-info-item h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .contact-info-item p {
          color: #64748b;
          font-size: 1rem;
          margin: 0;
          font-weight: 500;
        }

        .form-container {
          display: flex;
          justify-content: center;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          padding: 2.5rem;
          box-shadow: 
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
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
          color: #374151;
          margin-bottom: 0.5rem;
          letter-spacing: 0.025em;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          font-size: 1rem;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255, 255, 255, 0.9);
          color: #374151;
          font-family: inherit;
          box-sizing: border-box;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 
            0 0 0 3px rgba(59, 130, 246, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.05);
          background: rgba(255, 255, 255, 1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #9ca3af;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.5;
        }

        .form-submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
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
          box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.25);
        }

        .form-submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #1d4ed8, #1e40af);
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.4);
        }

        .form-submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .form-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .form-submit-btn.submitting {
          background: linear-gradient(135deg, #6b7280, #4b5563);
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

        .contact-info-item:nth-child(1) { animation-delay: 0.1s; }
        .contact-info-item:nth-child(2) { animation-delay: 0.2s; }

        @media (max-width: 768px) {
          #contact {
            padding: 3rem 0;
          }
          
          #contact h2 {
            font-size: 2rem;
          }
          
          .contact-info-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .contact-info-item {
            padding: 1.5rem 1rem;
          }
          
          .contact-form {
            padding: 2rem 1.5rem;
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
            <div className="contact-form">
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
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`form-submit-btn ${isSubmitting ? 'submitting' : ''}`}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;