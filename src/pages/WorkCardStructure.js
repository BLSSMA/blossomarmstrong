import React from "react";
import "../DarkModeToggle.css"

export default function WorkCardStructure(props){
return(
    <div className="Work">
        <div className="container"> 
            <div className="grid">
                <div className="row">
                    <div className="col-md-7">
                       <a href={props.url} target="_blank" rel="noreferrer"><img src={props.image} alt="screenshot of a webpage" className="shadow"/></a>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="project">{props.project}</div>
                        </div>
                        <div className="row">
                            <div className="dateSkill">{props.dateSkill}</div>
                        </div>
                        <div className="row">
                            <p className="WorkParagraph">{props.WorkParagraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)}