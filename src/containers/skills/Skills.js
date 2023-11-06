import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkills from "../../components/softwareSkills/SoftwareSkills";
import { illustration, skillsSection } from "../../portfolio";
// import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <div className="skills-text-div">
          <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
            {skillsSection.title}
          </h1>
          <SoftwareSkills />
        </div>
      </div>
    </div>
  );
}
