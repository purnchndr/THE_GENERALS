import React from "react";

import HyperLink from "../Common/HyperLink";

import './UsefulLink.css'



const UsefulLinks = (props) =>{

    return(
        <div className={props.className}>
            <h1>Useful Links</h1>
            <div>
                <HyperLink className="footer-links" link="#" label="home"/>
                <HyperLink className="footer-links" link="#" label="Services"/>
                <HyperLink className="footer-links" link="#" label="Contact"/>
                <HyperLink className="footer-links" link="#" label="About"/>
                <HyperLink className="footer-links" link="#" label="Portfolio"/>
                <HyperLink className="footer-links" link="#" label="Out Team"/>
                <HyperLink className="footer-links" link="#" label="OurBlog"/>
            </div>
        </div>
    );
}

export default UsefulLinks;