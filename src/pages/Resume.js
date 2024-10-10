import React from "react";
import "./Resume.css";
import ResumeDetails from "./ResumeDetails";
import { HiOutlineMailOpen } from "react-icons/hi";


export default function Resume(){
    return (
    <div><div className="resumeTitle">Resume</div><div className="Resume grid">
        <div className="row name">
            <div className="col-sm-12">
                <div className="title">BLOSSOM ARMSTRONG</div>
                <p className="minorPosition">JUNIOR FRONT END DEVELOPER</p>

                <p>HTML + CSS, JS, JSX</p>

                <p>VS CODE, GIT, NPM</p>

                <p>FRONT END DEVELOPMENT, REACT.JS, 
                 RESPONSIVE DEVELOPMENT</p>
                <div className="contact">
                    <span className="mailIcon"><HiOutlineMailOpen /></span><a href="mailto:blossom.armstrong@gmail.com">blossom.armstrong@gmail.com</a>
                </div>
            </div>
        </div>
        <div className="row">
                    <div className="leftSide col-sm-6">
            <ResumeDetails business="KIND FARMS RESERVE" location="357 Portland St, Berwick ME 03901" position="MANAGER" time="FEBRUARY 2020 - OCTOBER 2024" />
                    <ul>
                        <li>
                           Hiring/firing/interviewing and maintaining staff  
                        </li>
                        <li>
                            Large cash and check money handling and tracking 
                        </li>
                        <li>
                            Creating SOP for shop and updating as needed
                        </li>
                        <li>
                            Maintaining store legality with OCP state compliance
                        </li>
                        <li>
                            Ensuring staff is educated and functioning properly
                        </li>
                        <li>
                            Handling communication with store vendors
                        </li>
                        <li>
                            Creating/counting/adding/removing inventory and vendors
                        </li>
                        <li>
                            Creating pricing and deals for all store products
                        </li>
                        <li>
                            Making menu displays that work well for staff and customers
                        </li>
                    </ul>  
            <ResumeDetails business="YOUR GREEN THUMB CAREGIVERS LLC" location="99 STATE RD UNIT 2 KITTERY, ME 03904" position="MANAGER" time="FEBRUARY 2019- JANUARY 2020" />
                            <ul>
                                <li>
                                    Schedule out daily tasks
                                </li>
                                <li>
                                    Manage time, tasks, and staff
                                </li>
                                <li>
                                    Producing medicated edibles
                                </li>
                                <li>
                                    Weighing, portioning, and selling medical cannabis
                                </li>
                                <li>
                                    Making purchasing decisions and handling money
                                </li>
                                <li>
                                    Create procedures and structure for staff
                                </li>
                                <li>
                                    Educating customers on product
                                </li>
                            </ul>

            <ResumeDetails business="KITTERY DISCOUNT SMOKE SHOP" location="99 STATE RD UNIT 1 KITTERY, ME 03904" position="MANAGER" time="JANUARY 2017 - FEBRUARY 2019" />
                            <ul>
                                <li>
                                    Purchasing and pricing out inventory
                                </li>
                                <li>
                                    Helping customers
                                </li>
                                <li>
                                    Customer education on products
                                </li>
                                <li>
                                    Restocking and inventory management 
                                </li>
                            </ul>
                </div>
            <div className="rightSide col-sm-6">
                        <div className="additionalExperience">
                            <div className="business">ADDITIONAL EXPERIENCE:</div>
                            <ul>
                                <li>
                                    Identifying areas in need of improvement and learning on the fly to optimize effciency
                                </li>
                                <li>
                                    Creating and maintaining personal website on Shopify for 2+ years
                                </li>
                                <li>
                                    Creating products with my own art to sell on Shopify via dropshipping
                                </li>
                                <li>
                                    Designing custom art and translating ideas to sellable sticker formats
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className="Education">
                            <div className="business">SHECODES</div> 
                            <div className="location">ONLINE</div> 
                            <div className="time">2024 - 2024</div>
                            CERTIFICATES EARNED:
                            <ul>
                                <li>
                                    Intro to coding
                                </li>
                                <li>
                                    Intro to webdevelopment
                                </li>
                                <li>
                                    Web development
                                </li>
                                <li>
                                    Advanced web development
                                </li>
                                <li>
                                    Introduction to AI
                                </li>
                                <li>
                                    Responsive web development
                                </li>
                            </ul>
                        </div>
                        <div className="Education">
                            <div className="business">RAYMOND HIGH SCHOOL</div>
                            <div className="location">RAYMOND, NH</div>
                            <div className="time">2009- 2013</div>
                            <ul>
                                <li>
                                    High School Diploma
                                </li>
                            </ul>
                            </div>
                        </div>
</div>
</div></div>
            )}