import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import ExperienceSlot from "../../components/experienceSlot/ExperienceSlot";
import { workExperiences } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Work Experience</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((info, idx) => {
                  return (
                    <ExperienceSlot
                      key={idx}
                      isDark={isDark}
                      slotInfo={{...info}}
                    />
                  );
                })}
              </div>
            </div>
          </div>
      </div>
    );
  }
  return null;
}
