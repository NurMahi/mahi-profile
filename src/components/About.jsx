import React from 'react';
import './About.css'; 

const About = () => {
  const skills = [
    'C++', 'C#', 
    'Python', 'HTML/CSS',
    'Linux', 'Excel',
    'Java', 'JavaScript',
    'SQL', 'MongoDB' ,'React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Git', 'GitHub', 'Firebase', 'TypeScript', 'FastAPI', 'TensorFlow'
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* About Me Section */}
        <div className="about-content">
          <h2 className="main-heading">More about me</h2>
          
          <div className="content-card">
            <p className="about-text">
              <span className="highlight">Academically,</span> I'm an undergraduate student at 
              <span className="university"> University of North Texas</span> pursuing a BS in Computer Science.
            </p>
            
            <p className="about-text">
              <span className="highlight">Un-academically,</span> I like working out, playing sports, and 
              hiking.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div>

        {/* Expertise Section */}
        <div className="expertise-section">
          <h3 className="section-heading">Expertise</h3>
          
          <div className="expertise-intro">
            <p className="expertise-text">
              <span className="prev-role">Intern @ Great Dakotas LLC.</span>{" "}
              <a href="/Resume .pdf" target="_blank" rel="noopener noreferrer" className="learn-more-link">Learn more.</a>
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-container">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill} className={`skill-badge skill-${index % 10}`}>
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