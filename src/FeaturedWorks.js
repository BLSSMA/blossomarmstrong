import React from "react";
import "./FeaturedWorks.css";
import FeaturedProjects from "./FeaturedProjects";

export default function FeaturedWorks(){


    


    return(
        <div className="FeaturedWorks">
              <FeaturedProjects project={"React dictionary app"} dateSkill={"2024 react"} paragraph={"a paragraph explaining the first featured product will go here"}/>        
              <hr /> 
                          <FeaturedProjects project={"React dictionary app"} dateSkill={"2024 react"} paragraph={"a paragraph explaining the first featured product will go here"}/>   
                          <hr />       
              <FeaturedProjects project={"React dictionary app"} dateSkill={"2024 react"} paragraph={"a paragraph explaining the first featured product will go here"}/>          

        </div>
    )
}