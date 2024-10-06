import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Intro.css";
import NameCard from "./NameCard";
import ProjectCard from "./ProjectCard";
import FeaturedWorks from "./FeaturedWorks";


export default function Intro(){

    return(
        <div className="Intro">
        <section className="NameCard">
            <NameCard />
        </section>
        <section className="ProjectCard">
                <ProjectCard />            
        </section>    
        <section>    
        <div className="featuredWorks">
        <FeaturedWorks />
        <div className="project1">
            <div>img</div>
            <div>title</div>
            <div>date and certificate</div>
            <div>description</div>
        </div>
</div>
</section>
</div>
    );
}