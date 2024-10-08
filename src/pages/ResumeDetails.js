import React from "react";
import "./Resume.css";

export default function ResumeDetails(props){
    return(<div className="experience">
            <div className="business">{props.business}</div>
            <div>{props.location}</div>
            <div>{props.position}</div>
            <div>{props.time}</div>
            </div>
            )
}