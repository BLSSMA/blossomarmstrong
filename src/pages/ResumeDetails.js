import React from "react";
import "./Resume.css";

export default function ResumeDetails(props){
    return(
        <div>
    <div className="experience">
            <div className="business">{props.business}</div>
            <div className="location">{props.location}</div>
            <div className="position">{props.position}</div>
            <div className="time">{props.time}</div>
            </div></div>
            )
}