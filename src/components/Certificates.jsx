import React from "react";
import "./Certificates.css"; // Ensure to import the CSS file

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h3 className="certificates-header">My Certifications</h3>
      <ul className="certificates-list">
        <li className="certificate-item">
          <strong>Web Designing</strong>
          <br />
          <span className="certificate-details">
            Academy of Computer and Electronic Learning
          </span>
        </li>
        <li className="certificate-item">
          <strong>Cloud Computing Jr. Analyst</strong>
          <br />
          <span className="certificate-details">
            Academy of Computer and Electronic Learning
          </span>
        </li>
        <li className="certificate-item">
          <strong>React Library</strong>
          <br />
          <span className="certificate-details">Udemy</span>
        </li>
        <li className="certificate-item">
          <strong>Core Java</strong>
          <br />
          <span className="certificate-details">Future Skills Prime</span>
        </li>
      </ul>
    </div>
  );
};

export default Certificates;
