import React from "react";

import {AiFillTwitterCircle, AiFillYoutube, AiFillFacebook , AiFillInstagram} from 'react-icons/ai';

import HyperLink from "../Common/HyperLink";

const AboutUs =(props) =>{
    return(
        <div className={props.className}>
            <h1>About Us</h1>
            <p>We built the bestselling React course on Udemy - this course now allows you to take your React knowledge to the next level and build fullstack web apps based on React, NodeJS, MongoDB and Express!</p>
            <h2>Follow Us</h2>
            <div>
            <HyperLink link="#" label ={<AiFillFacebook size={50} style={{ fill: '#F5E9CF' }}/>} /> 
            <HyperLink link="#" label ={<AiFillInstagram size={50} style={{ fill: '#F5E9CF' }}/>} /> 
            <HyperLink link="#" label ={<AiFillTwitterCircle size={50} style={{ fill: '#F5E9CF' }}/>} /> 
            <HyperLink link="#" label ={<AiFillYoutube size={50} style={{ fill: '#F5E9CF' }}/>} /> 
            </div>
        </div>
    );
}

export default AboutUs;