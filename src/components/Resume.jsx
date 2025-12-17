// src/components/Resume.jsx

import React from "react";
import "./Resume.css"; // Import external CSS

const Resume = () => {
  return (
    <div className="resume-section" id="resume">
      <h2>My Resume</h2>
      <p>You can view or download my resume below:</p>

      <div className="resume-button-wrapper">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View / Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
