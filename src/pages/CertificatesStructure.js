import React from "react";

export default function CertificatesStructure(props){
return(
    <div className="CertificateStructure">
        <div className="container"> 
            <div className="grid">
                <div className="row">
                    <div className="col-7">
                       <a href={props.url} target="_blank" rel="noreferrer"><img src={props.image} alt="a certificate"/></a>
                    </div>
                    <div className="col-5 textCol">
                        <div className="row">
                            <div className="project">{props.project}</div>
                        </div>
                        <div className="row">
                            <div className="dateSkill">{props.dateSkill}</div>
                        </div>
                        <div className="row">
                            <p className="WorkParagraph">{props.WorkParagraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)}