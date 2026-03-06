import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero section">
        <h1>Popov Sergiu</h1>
        <p>
          Dedicated and detail-oriented student with a strong foundation in advanced mathematics 
           and algebraic problem-solving. Interested in automotive technology and visual design.
        </p>
        <div className="contact-info">
          <div className="contact-item">📍 Cahul, Moldova</div>
          <div className="contact-item">📞 +37378578158</div>
          <div className="contact-item">📧 <a href="mailto:sergiupopov05@gmail.com">sergiupopov05@gmail.com</a></div>
        </div>
      </header>

      <section id="education">
        <h2>Education</h2>
        <div className="card">
          <span className="date-label">Expected Graduation: 2027</span>
          <h3>High School Diploma (In Progress)</h3>
          <p><strong>Colegiul "Iulia Hasdeu" din Cahul</strong> | 10th Grade</p>
          <p>Key Coursework: Advanced Algebra, Geometry, Physics, and Information Technology.</p>
          <p><em>Achievements: Consistent performance in mathematical assessments and specialized logic exercises.</em></p>
        </div>
      </section>

      <section id="experience" style={{ backgroundColor: 'var(--accent-light)' }}>
        <h2>Experience & Projects</h2>
        <div className="card-grid">
          <div className="card" style={{ background: 'white' }}>
            <span className="date-label">Present</span>
            <h3>Independent Project: Automotive Digital Design</h3>
            <ul>
              <li>Explored visual vehicle customization using digital tools.</li>
              <li>Researched and implemented conceptual lighting configurations for emergency vehicle safety.</li>
            </ul>
          </div>
          <div className="card" style={{ background: 'white' }}>
            <span className="date-label">Ongoing</span>
            <h3>Volunteer / Team Projects</h3>
            <ul>
              <li>Managed tasks ensuring high accuracy and attention to detail.</li>
              <li>Collaborated with teams to achieve specific project goals.</li>
              <li>Developed communication and technical troubleshooting skills.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Technical & Interpersonal Skills</h2>
        <div className="card-grid">
          <div>
            <h3>Mathematics</h3>
            <div className="skills-list">
              <span className="skill-tag">Advanced Algebra</span>
              <span className="skill-tag">Irrational Equations</span>
              <span className="skill-tag">Domain Analysis</span>
              <span className="skill-tag">Geometry</span>
            </div>
          </div>
          <div>
            <h3>Software & Tools</h3>
            <div className="skills-list">
              <span className="skill-tag">Microsoft Office Suite</span>
              <span className="skill-tag">Google Workspace</span>
              <span className="skill-tag">Visual Design Tools</span>
            </div>
          </div>
          <div>
            <h3>Soft Skills</h3>
            <div className="skills-list">
              <span className="skill-tag">Analytical Thinking</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Time Management</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Popov Sergiu. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
