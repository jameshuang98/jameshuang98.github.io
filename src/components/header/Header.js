import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  projectSection,
  articleSection,
  achievementSection,
  educationSection
} from "../../portfolio";
import logo from "../../assets/images/logo1_cropped.png";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewProjects = projectSection.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewEducation = educationSection.display;
  const viewBlog = articleSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <img src={logo} alt="personal brand logo" className="personal-logo"></img>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewExperience && (
            <li>
              <a href="#experience">Work Experience</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#opensource">Projects</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#articles">Articles</a>
            </li>
          )}
          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </div>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
