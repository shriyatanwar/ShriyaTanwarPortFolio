import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="about-image-wrapper">
              <div className="about-placeholder">
                <span>Profile Image</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3>Hi, I'm Shriya Tanwar</h3>
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies
              and a growing expertise in Generative AI. I love building elegant solutions to complex
              problems and creating seamless user experiences.
            </p>
            <p>
              With expertise in both frontend and backend development, I specialize in creating
              responsive, scalable, and performant web applications. Currently expanding my skillset
              in AI technologies including RAG, prompt engineering, embeddings, vector search, and
              LangChain workflows, building innovative projects like document-based Q&A systems and
              semantic search using LLMs and vector databases.
            </p>

            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Shriya Tanwar</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">your.email@example.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Your City, Country</span>
              </div>
              <div className="info-item">
                <span className="info-label">Degree:</span>
                <span className="info-value">Your Degree</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
