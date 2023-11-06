import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { projectSection, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ProjectCard from "../../components/projectCard/ProjectCard";

export default function Projects() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {projectSection.projects.map((info, idx) => {
          return (
            <ProjectCard
              key={idx}
              projectInfo={{ ...info }}
              isDark={isDark}
            />
          );
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={socialMediaLinks.github}
        newTab={true}
      />
    </div>
  );
}
