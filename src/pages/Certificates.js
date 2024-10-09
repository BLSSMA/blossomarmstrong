import React from "react";
import "./Certificates.css";
import CertificatesStructure from "./CertificatesStructure";
import basics from "../images/basics.png";
import basicsAddOn from "../images/basicsAddOn.png";
import plus from "../images/plus.png";
import plussAddOn from "../images/plusAddOn.png";
import AIAddOn from "../images/AIAddOn.png";
import responsive from "../images/responsive.png";
import responsiveAddOn from "../images/responsiveAddOn.png";
import react from "../images/react.png";
import reactAddOn from "../images/reactAddOn.png";


export default function Certificates(){
    return (<div className="Certificates">
                <div className="certTitle">Certificates</div>
        <CertificatesStructure url="https://www.shecodes.io/certificates/9a7bf6f332e69d02583780bcee442735?_gl=1*suwshv*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2" image={basics} project="Basics" dateSkill="March 24, 2024"/>
        <CertificatesStructure url="https://www.shecodes.io/certificates/a92b65a0b397023c328f020bff43a027?_gl=1*1rou2e9*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2" image={basicsAddOn} project="Basics Add On" dateSkill="March 30, 2024"/>
        <CertificatesStructure url="https://www.shecodes.io/certificates/33bd3af40d264a2958e8c84c4fbca10b?_gl=1*1rou2e9*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2" image={plus} project="Plus" dateSkill="May 13, 2024"/>
        <CertificatesStructure url="https://www.shecodes.io/certificates/77f383736ea07e0719724f8f4dbdb3b9?_gl=1*39k4iw*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2" image={plussAddOn} project="Plus Add On" dateSkill="May 28, 2024"/>
        <CertificatesStructure url="https://www.shecodes.io/certificates/684920e40c2ae25f3834a7a23b8b41b4?_gl=1*39k4iw*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2" image={AIAddOn} project="AI Add On" dateSkill="June 8 2024"/>
        <CertificatesStructure url="https://www.shecodes.io/certificates/733283a8eb251cb39f94b4c7877a2644?_gl=1*119gglm*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2" image={responsive} project="Responsive" dateSkill="July 19, 2024"/>
        <CertificatesStructure url="https://www.shecodes.io/certificates/2be954d652355b72146ff28e700ac2a8?_gl=1*119gglm*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2" image={responsiveAddOn} project="Responsive Add On" dateSkill="September 18, 2024"/>
        <CertificatesStructure url="https://www.shecodes.io/certificates/4a762c862f207a162b90f97eceb931bd?_gl=1*119gglm*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2" image={react} project="React" dateSkill="March 24, 2024"/>
        <CertificatesStructure url="https://www.shecodes.io/certificates/d71ed2fa865822127efb9ed1b6ea8d55?_gl=1*1ki4225*_gcl_au*MTc0MDk2OTc3NS4xNzI3ODAxNTQ2" image={reactAddOn} project="React Add On" dateSkill="October 4, 2024"/>

</div>

        )}
