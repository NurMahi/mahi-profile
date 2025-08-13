import React from 'react';
import './Projects.css'; 

const Projects = () => {
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

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Work</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
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
  );
};

export default Projects;