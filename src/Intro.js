import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Intro.css";
import NameCard from "./NameCard";
import ProjectCard from "./ProjectCard";
import FeaturedWorks from "./FeaturedWorks";



export default function Intro(){

    return(
    <div className="Intro">
        <div className="container">
        <section className="NameCard">
            <NameCard />
        </section>
        <section className="ProjectCard">
            <ProjectCard />            
        </section>    
        <section className="FeaturedWorks">    
            <FeaturedWorks />
        </section>
        </div>
    </div>
    );
}