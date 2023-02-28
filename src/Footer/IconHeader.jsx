import React from "react";
import EmailIcon from './Resources/email.png';
import LocationIcon from './Resources/location.png';
import PhoneIcon from './Resources/phone.png';

import HyperLink from '../Common/HyperLink';

import './IconHeader.css'







const IconHeader = () => {

    return (
        <div className="icon-card-container">
            <div className="icon-card">
                <div className="icon-card-img"> <img src={LocationIcon} alt="img"/></div>
                <div className="icon-card-content">
                    <p className="icon-card-link"><span className="next-line"> Hazrztganj, plotno:45</span> <span className="next-line">The Generals,Lucknow, India</span></p>
                </div>
            </div>
            <div className="icon-card">
                <div className="icon-card-img"><img src={PhoneIcon} alt="img"/></div>
            
                <div className="icon-card-content">
                    {/* <h1 className="icon-card-heading">Call us</h1> */}
                    <p className="icon-card-link"> <HyperLink link='tel:"+91999999999"' label="+91999999999" /><a ></a></p>
                    <div className="hidden-text"><p>fill area</p></div>
                </div>
            </div>
            <div className="icon-card">
                <div className="icon-card-img"><img src={EmailIcon} alt="img"/></div>
                <div className="icon-card-content">
                    <p className="icon-card-link"><HyperLink link='mailto:"testmail@test.com"' label="testmail@test.com" /></p>
                    <div className="hidden-text"><p>fill area</p></div>
                </div>
            </div>
        </div >
    )
};

export default IconHeader;