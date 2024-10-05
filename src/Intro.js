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
        <section>
            <div className="recentProjects">
            <div>RECENT PROJECTS</div>
                <ProjectCard />            
        </div>
        </section>    
        <section>    
        <div className="featuredWorks">
        <div>FEATURED WORKS</div>
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