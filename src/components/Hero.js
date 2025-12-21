import React from 'react';
import './Hero.css';
import shriyaImage from '../project_images/shriyaimage.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Available for Work</span>
            </div>

            <h1 className="hero-name">
              Hi, I'm <span className="name-highlight">Shriya Tanwar</span>
            </h1>

            <div className="hero-title">
              <span className="title-text">Full Stack</span>
              <span className="title-gradient">Developer</span>
            </div>

            <p className="hero-description">
              2 years of experience building responsive web applications with ReactJS, JavaScript,
              Java, and Python. Specialized in full-stack development with expertise in building
              scalable, high-performance solutions and exploring Generative AI technologies including
              RAG, LangChain, and LLM-based applications.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Let's Talk</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
              </button>
            </div>

            <div className="hero-social">
              <a href="https://github.com/shriyatanwar" target="_blank" rel="noopener noreferrer" className="social-icon github-icon" aria-label="GitHub">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon" aria-label="LinkedIn">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-container">
              <div className="image-glow"></div>
              <div className="hero-image">
                <img src={shriyaImage} alt="Shriya Tanwar" className="profile-image" />
              </div>
              <div className="floating-card card-1">
                <div className="card-icon">💻</div>
                <div className="card-text">
                  <p className="card-title">Web Development</p>
                  <p className="card-subtitle">Expert</p>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">🎨</div>
                <div className="card-text">
                  <p className="card-title">UI/UX Design</p>
                  <p className="card-subtitle">Creative</p>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">⚡</div>
                <div className="card-text">
                  <p className="card-title">Fast & Reliable</p>
                  <p className="card-subtitle">Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
