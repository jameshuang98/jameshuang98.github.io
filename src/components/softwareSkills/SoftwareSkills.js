import React from "react";
import "./SoftwareSkills.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkills() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
              >
                <img src={skills.icon} alt={skills.skillName} className="svg" />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
