import './Experience.css';

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      role: "Software Developer",
      company: "Abhyram IT Solutions PVT LTD, Bengaluru",
      period: "August 2025 - Present",
      description: "Supporting development and maintenance of web applications using HTML, CSS, JavaScript, React.js, Java and MySQL.",
      achievements: [
        "Developing and maintaining web applications using React, Java, Python, and MySQL.",
        "Designed, built, and integrated RESTful APIs with frontend components ensuring secure and efficient data flow.",
        "Training and practicing Generative AI concepts including RAG, prompt engineering, embeddings, vector search, and LangChain workflows.",
        "Built learning projects such as document-based Q\&A systems and semantic search using LLMs and vector databases.",
        "Participated in code reviews, debugging, testing, and Agile development processes."
      ]
    },
    {
      id: 2,
      role: "Software Developer",
      company: "Mechatron Technologies, Ajmer, Rajasthan",
      period: "March 2024 - June 2025",
      description: "Developed and maintained full-stack web applications using HTML, CSS, JavaScript, and modern frameworks like React.js for the front-end.",
      achievements: [
        "Built and optimized RESTful APIs and server-side logic using Node.js",
        "Designed and managed database schemas, queries, and stored procedures using MySQL",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Worked with version control systems (Git/GitHub) to manage codebase and support collaborative development",
        "Integrated third-party APIs and payment gateways to enhance application functionality"
      ]
    },
    {
      id: 3,
      role: "Software Developer Trainee",
      company: "Mechatron Technologies, Ajmer, Rajasthan",
      period: "January 2024 - March 2024",
      description: "Assisted in developing interactive web modules using HTML5, CSS3, and JavaScript, ensuring responsive design and optimized performance.",
      achievements: [
        "Collaborated with senior developers to understand full-stack application architecture",
        "Participated in building end-to-end web solutions",
        "Contributed to front-end enhancement and back-end API integration tasks under guidance",
        "Followed Agile development practices"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      role: "Master of Physics",
      company: "S.P.R.C. GOVT COLLEGE, MDS UNIVERSITY, Ajmer, Rajasthan",
      period: "2019",
      description: "Advanced studies in Physics with focus on theoretical and applied physics.",
      achievements: [
        "Developed strong analytical and problem-solving skills",
        "Completed research projects in various physics domains"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      role: "Full Stack Master Program",
      company: "Besant Technologies, Bengaluru",
      period: "2024",
      description: "Comprehensive full-stack development training covering modern web technologies.",
      achievements: [
        "Mastered front-end and back-end development technologies",
        "Built multiple real-world projects using MERN stack"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        {/* Work Experience Section */}
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="zigzag-timeline">
          {workExperience.map((item, index) => (
            <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <span className="experience-period">{item.period}</span>
                <h3 className="experience-role">{item.role}</h3>
                <h4 className="experience-company">{item.company}</h4>
                <p className="experience-description">{item.description}</p>
                {item.achievements && (
                  <ul className="experience-achievements">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>

        {/* Education & Certification Section */}
        <div className="section-header" style={{ marginTop: '50px' }}>
          <h2 className="section-title">Education & Certifications</h2>
          <div className="title-underline"></div>
        </div>

        <div className="edu-cert-container">
          <div className="edu-cert-column">
            <h3 className="column-title">
              <span className="icon">🎓</span>
              Education
            </h3>
            {education.map(item => (
              <div key={item.id} className="edu-cert-card">
                <span className="experience-period">{item.period}</span>
                <h3 className="experience-role">{item.role}</h3>
                <h4 className="experience-company">{item.company}</h4>
                <p className="experience-description">{item.description}</p>
                {item.achievements && (
                  <ul className="experience-achievements">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="edu-cert-column">
            <h3 className="column-title">
              <span className="icon">📜</span>
              Certifications
            </h3>
            {certifications.map(item => (
              <div key={item.id} className="edu-cert-card">
                <span className="experience-period">{item.period}</span>
                <h3 className="experience-role">{item.role}</h3>
                <h4 className="experience-company">{item.company}</h4>
                <p className="experience-description">{item.description}</p>
                {item.achievements && (
                  <ul className="experience-achievements">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
