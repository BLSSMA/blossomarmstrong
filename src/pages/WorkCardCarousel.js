import React from "react";
import "../DarkModeToggle.css"
import Carousel from 'react-bootstrap/Carousel';
import linkPage1 from "../images/linkPage1.jpeg";
import linkPage2 from "../images/linkPage2.jpeg";
import linkPage3 from "../images/linkPage3.jpeg";
import linkPage4 from "../images/linkPage4.jpeg";


export default function WorkCardCarousel(props){
return(
    <div className="Work">
    <div className="container">
        <div className="grid">
            <div className="row">
    <div className="pictureCarousel  col-md-7">
            <Carousel className="productPicture d-flex">
                <Carousel.Item>
                    <img src={linkPage1} text="first slide" alt="linktree"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={linkPage2} text="first slide" alt="linktree"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={linkPage3} text="first slide" alt="linktree"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={linkPage4} text="first slide" alt="linktree"/>
                </Carousel.Item>
                
            </Carousel>
    </div>
    <div className="col-md-5">
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