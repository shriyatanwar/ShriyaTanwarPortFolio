import React, { useState } from 'react';
import './Projects.css';
import focusflow from '../project_images/focus.png';
import fitAI from '../project_images/fitAi.png';
import spend from '../project_images/spendTracker.png';
import portfolio from '../project_images/portfolio.png';
import bali from '../project_images/bali.jpeg';
import wearmint from '../project_images/wearmint.jpeg';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Focus Flow - A Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      category: 'backend',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: focusflow,
      link: '#',
      github: 'https://github.com/shriyatanwar/FocusFlow-TO-DO',
    },
    {
      id: 2,
      title: 'WearMint - A E-Commerce Platform',
      description: 'WearMint is a modern eCommerce web application built with React for browsing and purchasing clothing.',
      category: 'frontend',
      technologies: ['React'],
      image: wearmint,
      link: '#',
      github: 'https://github.com/shriyatanwar/eCommerce-WearMint',
    },
    {
      id: 3,
      title: 'FitAI - An AI powered Fitness Platform',
      description: 'AI-powered fitness and nutrition dashboard with personalized workout plans, meal plans, and an intelligent coach chatbot. Built with React, Node.js, MongoDB, and Anthropic API.',
      category: 'fullstack',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      image: fitAI,
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio template with smooth animations, responsive design, and dark mode support.',
      category: 'frontend',
      technologies: ['React', 'CSS3', 'Framer Motion'],
      image: portfolio,
      link: '#',
      github: 'https://github.com/shriyatanwar/FitAi',
    },
    {
      id: 5,
      title: 'Spend Tracker',
      description: 'A full-stack expense tracking web application built with React and Node.js.',
      category: 'fullstack',
      technologies: ['React.Js', 'Node.js'],
      image: spend,
      link: '#',
      github: 'https://github.com/shriyatanwar/SpendTracker',
    },
    {
      id: 6,
      title: 'Blog Website',
      description: 'A travel guide built from my own Bali experience — from hidden waterfalls to the best cafes.',
      category: 'frontend',
      technologies: ['React.js'],
      image: bali,
      link: '#',
      github: 'https://github.com/shriyatanwar/Bali__Guide',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Check out some of my recent work</p>
        </div>

        <div className="project-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />

                <div className="project-overlay">
                  <div className="overlay-content">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
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
