import React from "react";
import "./Work.css";
import WorkCardStructure from "./WorkCardStructure";
import introductionToWebDevelopment from "../images/introductionToWebDevelopment.jpeg";
import introductionToCoding from "../images/introductionToCoding.jpeg";
import webDevelopment from "../images/webDevelopment.jpeg";
import advancedWebDesign from "../images/advancedWebDevelopment.jpeg";
import introductionToAi from "../images/introductionToAi.jpeg";
import responsiveWebDevelopment from "../images/responsiveWebDevelopment.jpeg";
import advancedResponsiveWebDevelopment from "../images/advancedResponsiveWebDevelopment.jpeg";
import reactDevelopment from "../images/reactDevelopment.jpeg"
import advancedReactDevelopment from "../images/advancedReactDevelopment.jpeg";


export default function Work(){
    return (<div className="workCards">
        <WorkCardStructure url="https://www.shecodes.io/cohorts/1729/projects/2153858?_gl=1*16uyybw*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2" image={introductionToCoding} project="Introduction To Coding" dateSkill="date and skill here" WorkParagraph="paragraph details"/>
        <WorkCardStructure url="https://www.shecodes.io/cohorts/1740/projects/2164793?_gl=1*lyf67f*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2"image={introductionToWebDevelopment} project="Introduction To Web Development" dateSkill="date and skill here" WorkParagraph="paragraph details" />
        <WorkCardStructure url="https://www.shecodes.io/cohorts/1751/projects/2219091?_gl=1*13qxrce*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2"image={webDevelopment} project="Web Development" dateSkill="date and skill here" WorkParagraph="paragraph details" />
        <WorkCardStructure url="https://www.shecodes.io/cohorts/1857/projects/2234486?_gl=1*13qxrce*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2"image={advancedWebDesign} project="Advanced Web Design" dateSkill="date and skill here" WorkParagraph="paragraph details" />
        <WorkCardStructure url="https://www.shecodes.io/cohorts/1880/projects/2247263?_gl=1*16h9w1u*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2"image={introductionToAi} project="Introduction to AI " dateSkill="date and skill here" WorkParagraph="paragraph details" />
        <WorkCardStructure url="https://www.shecodes.io/cohorts/1904/projects/2308583?_gl=1*16h9w1u*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2"image={responsiveWebDevelopment} project="Responsive Web Development" dateSkill="date and skill here" WorkParagraph="paragraph details" />
        <WorkCardStructure url="https://www.shecodes.io/cohorts/2006/projects/2327376?_gl=1*16h9w1u*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2"image={advancedResponsiveWebDevelopment} project="Advanced Responsive Web Development" dateSkill="date and skill here" WorkParagraph="paragraph details" />
        <WorkCardStructure url="https://www.shecodes.io/cohorts/2031/projects/2398735?_gl=1*5pg2n4*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2"image={reactDevelopment} project="React Development" dateSkill="date and skill here" WorkParagraph="paragraph details" />
        <WorkCardStructure url="https://www.shecodes.io/cohorts/2137/projects/2421278?_gl=1*5pg2n4*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2"image={advancedReactDevelopment} project="Advanced React Development" dateSkill="date and skill here" WorkParagraph="paragraph details" />
</div>

        )}