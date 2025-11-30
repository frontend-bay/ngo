import CommonFooter from "./CommonFooter.jsx";
import React from "react";
import './CommonHeader.css';

const CommonHeader = ({logo, orgName}) => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="org-name">{orgName}</h1>
        </header>
    )
}
export default CommonHeader;