import React, { useContext } from "react";
import "./Education.scss";
import EducationSlot from "../../components/educationSlot/EducationSlot";
import { educationSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const { isDark } = useContext(StyleContext);
  if (educationSection.display) {
    return (
      <div id="education">
        <div className="education-container" id="workExperience">
          <h1 className="education-heading">Education</h1>
          <div className="education-slot-container">
            {educationSection.schools.map((info, idx) => {
              return (
                <EducationSlot
                  key={idx}
                  isDark={isDark}
                  slotInfo={{ ...info }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
