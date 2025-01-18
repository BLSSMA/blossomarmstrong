import React from "react";
import "./FeaturedWorks.css";
import FeaturedProjects from "./FeaturedProjects";
import passionProject from "../src/images/passionProject.png";
import JSWeather from "../src/images/JSWeather.png";
import "./DarkModeToggle.css";
import FeaturedProjectsCarousel from "./FeaturedProjectsCarousel";

export default function FeaturedWorks(){


    


    return(
        <section>
            <container>
        <div className="FeaturedWorks">
            <div className="title">FEATURED WORKS</div>
                <FeaturedProjectsCarousel  project={"Introduction to AI"} dateSkill={"June 2024 | AI Integration"} paragraph={"In this lesson I was introduced to AI. I implimented an AI into the project so the user can type in any word they like and they will get back a custom romantic, rhyming poem"}/>        
                    <hr /> 
                <FeaturedProjects image={passionProject} project={"Passion Project"} dateSkill={"March 2024 | Coding Basics"} paragraph={"This site was my first cohisive design. It features some of my favorite digital drawings I've done and is able to be switched into a custom colored dark mode. This project focused on the :hover properties which was displayed in the button hover color change and the scale change on hovering of the pictures."}/>   
                    <hr />       
                <FeaturedProjects image={JSWeather} project={"First Edition Weather Application"} dateSkill={"May 2024 | Javascript"} paragraph={"Within the course I built several weather applications, this one is the first one. This was also my first deep dive into Javascript and how to funnel through information to get the user what they're searching for. I also integrated eventListeners and more advanced usage of grids."}/>          
        </div>
    </container>
    </section>)
}