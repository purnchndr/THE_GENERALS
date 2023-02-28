
import React from "react";


const HyperLink = (props) => {
    return (
        <a className={props.className} href={props.link}>{props.label}</a>
       );
};

export default HyperLink;