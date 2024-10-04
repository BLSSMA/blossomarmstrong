import React from "react";
import ProjectCard from "./ProjectCard";
import FeaturedWorks from "./FeaturedWorks";


export default function Intro(){

    return(
        <div className="Intro">
        <section>
            <h2>BLOSSOM ARMSTRONG</h2>
            <h1>JUNIOR FRONT END DEVELOPER</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div>DOWNLOAD RESUME</div>
            <div><img src="./images/SelfPortrait.JPG" alt="portrait of blossom"/></div>
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