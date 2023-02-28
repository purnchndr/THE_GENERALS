import React from "react";

import HyperLink from '../Common/HyperLink';

import {GrSend} from 'react-icons/gr';

import './SubscribeBox.css'

const SubscribeBox =(props)=>{
    return (
        <div className={props.className}>
            <h1>Subscribe</h1>
            <p>Don't miss to Subscribe to our new feeds, Kindly fill the form below.</p>
            <input className="footer-input-box" type="email" placeholder="Email"/>
            <HyperLink className="footer-submit-btn" link="#" label= <GrSend size={60} style={{ fill: '#E96479' }} /> />

        </div>
    )
}

export default SubscribeBox;