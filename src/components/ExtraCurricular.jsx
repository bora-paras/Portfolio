import React from "react";
import "./ExtraCurricular.css";

const ExtraCurricular = () => {
  return (
    <div className="extra-curricular">
      <h3>🎖️ Extra Curricular Activities</h3>

      <div className="section">
        <h4>NCC - National Cadet Corps (77 UK BN NCC, Almora)</h4>
        <ul>
          <li>Cadet from 2018 to 2021</li>
          <li>
            Completed all training modules and parade sessions successfully
          </li>
        </ul>
      </div>

      <div className="section">
        <h4>🏕️ National Camps Attended</h4>
        <ul>
          <li>
            <strong>Ek Bharat Shreshtha Bharat Camp</strong> – Mumbai, 2019
          </li>
          <li>
            <strong>IMA Attachment Camp</strong> – Dehradun, 2021
          </li>
          <li>
            <strong>Combined Annual Training Camp</strong> – 2018-2019
          </li>
        </ul>
      </div>

      <div className="section">
        <h4>⚽ Sports & Physical Activities</h4>
        <ul>
          <li>🏏 State-level Cricket Player (School Level)</li>
          <li>🏸 Inter-college Badminton Tournament Participant</li>
          <li>Regular participant in 5km & 10km marathons</li>
        </ul>
      </div>

      <div className="section">
        <h4>🎤 Public Speaking & Cultural Events</h4>
        <ul>
          <li>Hosted multiple college and school level events as an anchor</li>
          <li>Debate Competition Winner – Inter-college level</li>
          <li>Active participant in cultural fest & tech fests</li>
        </ul>
      </div>
    </div>
  );
};

export default ExtraCurricular;
