import CommonFooter from "../component/CommonFooter.jsx";
import logo from "../assets/logo.jpeg";
import React from "react";
import CommonHeader from "../component/CommonHeader.jsx";
import './NTIntro.css';
import ntfounder from "../assets/ntfounder.JPG";

const NTIntro = () => {
    return (
        <div className="container">
            <CommonHeader orgName={"Nirmal Transport"} logo={logo} />
            <section className="body-content">
                <h2 className="vision-mission">Our Vision & Mission</h2>
                <h2 className="vision">Vision</h2>
                <p>Nirmal Transport envisions being the most trusted and efficient oil logistics partner in the nation.
                    We strive to deliver every shipment with the highest standards of safety, reliability, and compliance.
                    Through modern fleet operations and technology-driven solutions, we ensure seamless energy connectivity.
                    Our mission is to fuel progress by connecting industries and communities with timely oil transportation.
                </p>
                <h2>Mission</h2>
                <p>
                    To provide safe, timely, and cost-effective oil transportation services that exceed client expectations.
                    To continuously enhance fleet efficiency and operational standards through innovation and skilled workforce.
                    To maintain strict adherence to safety, environmental, and regulatory requirements in every delivery.
                    To build long-term partnerships by prioritizing trust, transparency, and customer satisfaction.
                </p>
            </section>


            <section className="body-content">
                <h2 className="about-us">About Us</h2>
                <h3>Established in: 2021</h3>
                <img src={ntfounder} alt="Logo" className="founder-logo" />
                <h2>Founder - Shri Vijay Pal</h2>

            </section>
            <CommonFooter orgName={"Nirmal Transport"} mail={"vijay90052@gmail.com"} contact={"9005285606"} />
        </div>

    )
}

export default NTIntro;