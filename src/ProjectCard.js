import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ProjectCard.css";

export default function ProjectCard(){
    return(<div className="container">
        <div className="row">
        <div className="projectCardOne col-6">
    <div>React Weather Project</div>
        <div>8 Sept 2024   |   Design, HTML, CSS, JSX, Git</div>
            <div>My first dive into the world of React took my abily to create interactive pages and API intergrations to the next level. I gained experience and knowledge of code mapping, linking components, and adding animations into my projects. This page uses two seperate API's working together to provide accurate current and forecasted weather whereever you'd like to search.</div>
        </div>
        <div className="projectCardTwo col-6">
        <div>React Weather Project</div>
            <div>4 Oct 2024   |   Components, Props, Mapping, API's</div>
             <div>My second React project is where things really started to get fun. Using 3 total API's in this app to display definitions, phonetic sound files, and photos I created an easy to use dictionary. I was able to utilize the grid Bootstrap function to organize the information is a clean way for the user, and I love how it came out.</div>
        </div>
        </div>
            </div>);
}