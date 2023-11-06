import React from 'react'
import { Paper } from '@mui/material'
import "./ProjectCard.scss";
// import Button from '../button/Button';
import Button from '@mui/material/Button';


export default function ProjectCard({ projectInfo, isDark }) {


    return (
        <Paper elevation={2} className="project-container">
            <img src={projectInfo.image} alt={projectInfo.projectName} className="image"/>
            <div className="info-section">
                <div className="name">
                    {projectInfo.projectName}
                </div>
                <div className="description">
                    Skills used: {projectInfo.techStack.join(", ")}
                </div>
                <div className="description">
                    {projectInfo.projectDesc}
                </div>
                <Button variant="contained" size="small" className="button" href={projectInfo.url} target="_blank">View Code</Button>
            </div>


        </Paper>
    )
}
