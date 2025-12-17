import React from "react";
import "./Education.css"; // Make sure to link the CSS file

const Education = () => {
  return (
    <div className="education-container">
      <h3 className="education-header">My Education</h3>
      <ul className="education-list">
        <li className="education-item">
          <strong>High School</strong>
          <br />
          <span className="education-details">
            School: Uttarakhand Board | Year: 2016
          </span>
        </li>
        <li className="education-item">
          <strong>Intermediate</strong>
          <br />
          <span className="education-details">
            School: Uttarakhand Board | Year: 2018
          </span>
        </li>
        <li className="education-item">
          <strong>Bachelor of Computer Applications (BCA)</strong>
          <br />
          <span className="education-details">
            University: Kumaon University | Year: 2018-2021
          </span>
        </li>
        <li className="education-item">
          <strong>Master of Computer Applications (MCA)</strong>
          <br />
          <span className="education-details">
            University: Graphic Era Hill University | Year: 2022-2024
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Education;
