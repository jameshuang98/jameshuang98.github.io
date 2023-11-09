import React from 'react'
import "./ExperienceSlot.scss";
import { Chip } from '@mui/material';

function ExperienceSlot({ slotInfo, isDark }) {

    const DescBulletPoints = ({ descBullets, isDark }) => {
        return descBullets ? descBullets.map((item, i) => (
            <div
                key={i}
                className={isDark ? "dark-mode-text bullet-points" : "bullet-points"}
            >
                {item}
            </div>
        ))
            : null;
    };

    const TechStackChips = ({ technologies, isDark }) => {
        return technologies ? technologies.map((tech, i) => (
            <Chip label={tech} key={i} color={isDark ? "primary" : "default"} classes={"chip"} />
        ))
            : null;
    };

    return (
        <div className={isDark ? "experience-slot-dark" : "experience-slot"}>
            <div className="date-range">{slotInfo.date}</div>
            <div className={isDark ? "job-info-dark" : "job-info"}>
                <div className={"role"}>
                    {slotInfo.role}
                </div>
                <div className="company">
                    {slotInfo.company}
                </div>
                <DescBulletPoints descBullets={slotInfo.descBulletPoints} isDark={isDark} />
                <div className="chipset">
                    <TechStackChips technologies={slotInfo.techStack} isDark={isDark} />
                </div>
            </div>
        </div>
    )
}

export default ExperienceSlot