import React from 'react'
import "./EducationSlot.scss";

function EducationSlot({ slotInfo, isDark }) {

    return (
        <div className={isDark ? "education-slot-dark" : "education-slot"}>
            <div className="timeframe">{slotInfo.date}</div>
            <div className={isDark ? "school-info-dark" : "school-info"}>
                <div className={"title"}>
                    {slotInfo.title}
                </div>
                <div className="school">
                    {slotInfo.school}
                </div>
            </div>
        </div>
    )
}

export default EducationSlot