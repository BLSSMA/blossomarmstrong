import React from 'react';
import "./Work.css";
import WorkCardStructure from "./WorkCardStructure";
import preview from "../images/videos/1216.mp4";
import WorkCardStructureVideo from "./WorkCardStructureVideo";
import advancedResponsiveWebDevelopment from "../images/advancedResponsiveWebDevelopment.jpeg";
import reactDevelopment from "../images/reactDevelopment.jpeg"
import advancedReactDevelopment from "../images/advancedReactDevelopment.jpeg";
import WorkCardCarousel from "./WorkCardCarousel";


export default function Work(){
         
    return (<div className="workCards">
        <div className="workTitle">Work</div>    
        <WorkCardCarousel url="/"  project="Link Pages" dateSkill="December 2024 | Figma Link Page Examples" WorkParagraph="" />       
        <WorkCardStructureVideo url="/" video={preview} figma="https://embed.figma.com/design/kwLm5B3OmVfIYytWc2zLuI/cbd-store-example-1?node-id=0-1&embed-host=share" videoProject="CBD Store Example" videoDateSkill="November 2024 | React" videoWorkParagraph="HTML5, CSS5, Bootstrap, JS, JSX" />        
        <WorkCardStructure url="https://www.shecodes.io/cohorts/2006/projects/2327376?_gl=1*16h9w1u*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2"image={advancedResponsiveWebDevelopment} project="Advanced Responsive Web Development" dateSkill="July 2024 | SheCodes - Responsive Add On" WorkParagraph="HTML5, CSS5, ES6, Bootstrap, SEO, Hosting" />
        <WorkCardStructure url="https://www.shecodes.io/cohorts/2031/projects/2398735?_gl=1*5pg2n4*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2"image={reactDevelopment} project="React Development" dateSkill="September 2024 | SheCodes - React" WorkParagraph="React" />
        <WorkCardStructure url="https://www.shecodes.io/cohorts/2137/projects/2421278?_gl=1*5pg2n4*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2"image={advancedReactDevelopment} project="Advanced React Development" dateSkill="October 2024 | SheCodes - React Add On" WorkParagraph="React" />
</div>

        )}