import React from "react";
import Dictionarypage from "./images/Dictionarypage.jpg";
import "./FeaturedProjects.css";


export default function FreaturedProjects(props){

return(

    <div className="container FeaturedProjects">

            <div className="grid">
                <div className="row">
                    <div className="col-4">
                        <img src={Dictionarypage} alt="screenshot of webpage"/>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="project">{props.project}
                        </div></div>
                        <div className="row">
                            <div className="dateSkill">{props.dateSkill}</div>
                        </div>
                        <div className="row">
                            <p>{props.paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>  
        )}