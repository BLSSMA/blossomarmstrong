import React from "react";
import "./Projects.css";
import minisProject from "./images/minisProject.jpeg";
import weatherProject from "./images/weatherProject.jpeg";
import dictionaryProject from "./images/dictionaryProject.jpeg";
import cert from "./images/cert.jpeg";

const Projects = () => {
    return(
        <div className="Projects" id="anchor2">
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <h3><strong>Projects via SheCodes</strong></h3>
                    </div>
                    <br />
                    <div className="row projectsRow">
                        <div className="col-md-4">
                            <a href="https://www.shecodes.io/cohorts/2006/projects/2327376?_gl=1*pqxo3g*_gcl_au*MTc5Mjc2NTc5Mi4xNzM2NTM1MDQx" target="_blank" rel="noreferrer"><img src={minisProject} alt="webpage screenshot" title="go to project" className="d-flex projectPage"/></a>
                        </div>
                        <div className="col-md-4 projectMiddle">
                            <a href="https://www.shecodes.io/cohorts/2137/projects/2421278?_gl=1*4r850b*_gcl_au*MTc5Mjc2NTc5Mi4xNzM2NTM1MDQx" target="_blank" rel="noreferrer"><img src={dictionaryProject} alt="webpage screenshot" title="go to project" className="d-flex projectPage" /></a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://www.shecodes.io/cohorts/2031/projects/2398735?_gl=1*1m2bljy*_gcl_au*MTc5Mjc2NTc5Mi4xNzM2NTM1MDQx" target="_blank" rel="noreferrer"><img src={weatherProject} alt="webpage screenshot" title="go to project" className="d-flex projectPage" /></a>
                        </div>
                    </div>
                    <br />
                    <div className="row certRow">
                        <a href="https://www.shecodes.io/graduates/123692-blossom-armstrong" target="_blank" rel="noreferrer"><img src={cert} alt="certificate for junior front end development" title="SheCodes Profile" className="d-flex cert"/></a>
                    </div>
                    <br />
                    <div className="row skills">
                        <strong><p>HTML  ✧  CSS  ✧  Javascript  ✧  VS Code  ✧  Bootstrap</p>
                        <p>Git  ✧  Github  ✧  Reponsive  ✧  API  ✧  SEO  ✧  React.js  ✧  Hosting </p></strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;