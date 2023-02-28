import React from "react";

import poster from './Resources/poster.jpg'

import Popup from "../Common/Popup";

import './IntroPage.css'
import { Form } from "react-router-dom";


const IntroPage =()=>{
    return ( <div className="home-screen">
    <div className="home-intro">
        {/* <img className="main-poster" src={poster} alt="poster"/> */}
        <h1>The Generals</h1>
        <p>Nothing can do what Ooh can do..</p>
    </div>
    <div className="register-form">
                <Form>
                    <div>
                    <h1>Register</h1>
                        <label className="custom-label" htmlFor="email" required>Email *</label>
                        <input className="custom-input" required id="email" name="email" type="email" placeholder="Email"/>
                        <label className="custom-label" htmlFor="mobile" required>Mobile Number *</label>
                        <input className="custom-input" required type="number" id="mobile" name="mobile" placeholder="Mobile Number"/>
                        <button onClick = {registerClick} className="custom-button" id="register" type="submit">Register</button>
                        <p id="submit-success">Details shared with our team, They will contact you shortly.</p>
                    </div>
                </Form>
                </div>
                
            </div> );
}

function registerClick(){
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    if(email && mobile)document.getElementById('submit-success').style.display = 'block';
}

export default IntroPage;