import React from "react";
import "./FeaturedProjects.css";


export default function FreaturedProjects(props){

return(
<section>
    <div className="container FeaturedProjects">

            <div className="grid">
                <div className="row">
                    <div className="col-md-5">
                        <img src={props.image} alt="screenshot of webpage" title="screenshot of a webpage"/>
                    </div>
                    <div className="col-md-7">
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
          </section>
        )}