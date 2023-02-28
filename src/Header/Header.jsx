import React from "react";

import Logo from './Resources/logo.jpg';

import NavLinks from "./NavLinks";

import './header.css'

const Header = () =>{
    return(
    <header className="main-header" >
        <img className="main-logo" src={Logo} alt="The Generals"></img>
        <NavLinks/>
    </header>);
}

export default Header;