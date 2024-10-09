import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ProjectCard.css";

export default function ProjectCard(){
    return(
        <section>
    <div className="container">
        <div className="row">
            <div className="title">RECENT PROJECTS</div>
        <div className="projectCardOne col-md-6">
    <div className="cardTitle">React Weather Project</div>
        <div className="dateSkills"><span className="date">8 Sept 2024</span>   |   <span className="skills">Design, HTML, CSS, JSX, Git</span></div>
            <p>My first dive into the world of React took my abily to create interactive pages and API intergrations to the next level. I gained experience and knowledge of code mapping, linking components, and adding animations into my projects. This page uses two seperate API's working together to provide accurate current and forecasted weather whereever you'd like to search.</p>
        </div>
        <div className="projectCardTwo col-md-6">
        <div className="cardTitle">React Dictionary Project</div>
            <div className="dateSkills"><span className="date">4 Oct 2024</span>   |   <span className="skills">Components, Mapping, Props, API's</span></div>
             <p>My second React project is where things really started to get fun. Using 3 total API's in this app to display definitions, phonetic sound files, and photos I created an easy to use dictionary. I was able to utilize the grid Bootstrap function to organize the information is a clean way for the user, and I love how it came out.</p>
        </div>
        </div>
            </div>
            </section>);
}