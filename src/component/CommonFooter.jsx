import React from "react";
import './CommonFooter.css';

const CommonFooter = ({orgName, mail, contact}) => {
    return (
        <footer className="footer">
            <p>{orgName} | Contact:  {mail} | Phone:- {contact}</p>
        </footer>
    )
}

export default CommonFooter;