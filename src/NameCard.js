import React from "react";
import "./NameCard.css";
import SelfPortrait from "./images/SelfPortrait.JPG";


export default function NameCard(){
   return( 
   <div className="NameCard d-grid-sm">
    <div className="row">
    <section className="col-sm-7">
    <h2>BLOSSOM ARMSTRONG</h2>
            <h1>JUNIOR FRONT END DEVELOPER</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div className="resumeLink"><a href="https://docs.google.com/document/d/e/2PACX-1vRNObjh4JCaaba4LA3hOwneO-YxUQWpfRCN8cudLuSWFDUcOxfZeALd6c9dGiaewO9_coG3lSaZE9D9/pub" target="_blank" rel="noreferrer">VIEW RESUME</a></div>  
</section>
<div className="selfImg col-sm-5">
        <img src={SelfPortrait} alt="portrait of blossom" className="SelfPortrait"/>
 </div>   
    </div>
    </div>)
}