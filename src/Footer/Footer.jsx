import React from "react";

import IconHeader from "./IconHeader";

import AboutUs from "./AboutUs";
import UsefulLinks from "./UsefulLinks";
import SubscribeBox from "./SubscribeBox";

import './footer.css'

const Footer = () =>{
    return (
        <footer className="main-footer">
                <IconHeader/>
            <div className="footer-details">
            <div className="column">
                <AboutUs className="footer-details-card"/>
                </div>
            <div className="column">
                <UsefulLinks className="footer-details-card useful-links"/>
                </div>
                <div className="column">
                <SubscribeBox className="footer-details-card subscribe-box"/>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;