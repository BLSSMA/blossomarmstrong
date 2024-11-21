import React from "react";
import "../DarkModeToggle.css";

export default function WorkCardStructureVideo(props){
return(
    <div className="Work WorkVideo">
        <div className="container"> 
            <div className="grid">
                <div className="row">
                    <div className="col-md-7">
                        <span className="row">
                            <span className="col-6">
                            <span className="previewTitle"><a href="https://cbdstoreexample.netlify.app/">Live Site Preview</a></span>
                            </span>
                            <span className="col-6">
                            <span className="previewTitle">Original Figma Outline</span>
                            </span>
                        </span>
                        <span className="video"><a href="https://cbdstoreexample.netlify.app/"><iframe src={props.video} width="240" height="380" title="storeVid"/></a></span>            
                    <span className="pagePreview"><a href="/"><iframe width="240" height="380" src={props.figma} title="figma outline"></iframe></a></span>  
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="project">{props.videoProject}</div>
                        </div>
                        <div className="row">
                            <div className="dateSkill">{props.videoDateSkill}</div>
                        </div>
                        <div className="row">
                            <p className="WorkParagraph">{props.videoWorkParagraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)}