// Skills.jsx
import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <p className="skills-intro">
        I have experience working on full-stack development using modern tools
        and technologies. Below is a categorized list of the technologies and
        tools I use regularly:
      </p>

      <div className="skill-section">
        <h2>💻 Frontend Development</h2>
        <ul>
          <li>HTML5 </li>
          <li> CSS3 </li>
          <li>JavaScript (ES6+)</li>
          <li>React.js </li>
          <li>Material UI</li>
          <li>SASS </li>
        </ul>
      </div>

      <div className="skill-section">
        <h2>🛠️ Backend Development</h2>
        <ul>
          <li>Core Java</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>JDBC (Java)</li>
          <li>RESTful APIs</li>
        </ul>
      </div>

      <div className="skill-section">
        <h2>⚙️ Tools & Platforms</h2>
        <ul>
          <li>Git / GitHub / GitLab</li>
          <li>Postman (API Testing)</li>
          <li>Visual Studio Code</li>
          <li>Apache NetBeans IDE 17</li>
          <li>Netlify / Vercel / Heroku</li>
        </ul>
      </div>

      <div className="skill-section">
        <h2>📚 Programming Languages</h2>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>C </li>
          <li>C++ (Basic)</li>
          <li>Python (Basic)</li>
        </ul>
      </div>

      <div className="skill-section">
        <h2>🧰 Other Skills</h2>
        <ul>
          <li>Problem Solving (DSA - C)</li>
          <li>Responsive Design</li>
          <li>API Integration</li>
          <li>Communication & Team Collaboration</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
