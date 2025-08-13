import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/dashboard', aria: 'GitHub profile' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nur-mahi-255b99216/', aria: 'LinkedIn profile' },
    { name: 'Email', href: 'nurmahi487@gmail.com', aria: 'Send email to Mahi' }
  ];

  return (
    <div className="App flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-300">
            © 2025 Mahi. 
          </p>

          {/* Social Links */}
          <div className="mt-4 flex justify-center space-x-6">
            {socialLinks.map(({ name, href, aria }) => (
              <a
                key={name}
                href={href}
                aria-label={aria}
                className="text-gray-300 hover:text-white transition-colors"
                target={name !== 'Email' ? '_blank' : undefined}
                rel={name !== 'Email' ? 'noopener noreferrer' : undefined}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
