import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "frontend",
      skills: ["ReactJS", "HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "Tailwind CSS", "Responsive Design", "Web Performance"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "backend",
      skills: ["Node.js", "Java", "Spring Boot", "Python", "RESTful APIs"]
    },
    {
      title: "Database & Storage",
      icon: "💾",
      color: "database",
      skills: ["MySQL", "SQL", "Firebase", "Vector Databases"]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      color: "ai",
      skills: ["Generative AI", "RAG", "LangChain", "Prompt Engineering", "LLMs", "Embeddings", "Semantic Search"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      color: "tools",
      skills: ["Git & GitHub", "VS Code", "Postman", "Code Splitting", "SEO"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Modern tech stack I work with daily</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`skill-category ${category.color}`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-tag"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
