import React from "react";
import "./NameCard.css";
import SelfPortrait from "./images/SelfPortrait.JPG";
import ResumeMain from "./pdf/ResumeMain.pdf";


export default function NameCard(){
   return( 
   <div className="NameCard d-grid-md">
    <div className="row">
    <section className="col-md-7">
    <h2>BLOSSOM ARMSTRONG</h2>
            <h1>JUNIOR FRONT END DEVELOPER</h1>
            <p>Hello!
                I am a junior front end developer looking to find my place in this industry! I have completed multiple courses on SheCodes to learn basic and advanced coding techniques. Here you'll find a display of my projects and certificates earned, my resume, and some links to connect with me. 
            </p>
            <div className="resumeLink"><a href={ResumeMain} target="_blank" rel="noreferrer" title="view resume">VIEW RESUME</a></div>  
</section>
<div className="selfImg col-md-5">
        <img src={SelfPortrait} alt="portrait of blossom" className="SelfPortrait"/>
 </div>   
    </div>
    </div>)
}