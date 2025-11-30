import React, { useEffect, useState } from 'react';
import './OrganizationIntro.css';
import logo from '../assets/logo.jpeg';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import founder from '../assets/founder.jpeg';

const images = [
img1, img2, img3
];


export default function OrganizationIntro() {
const [currentIndex, setCurrentIndex] = useState(0);


useEffect(() => {
const interval = setInterval(() => {
setCurrentIndex((prev) => (prev + 1) % images.length);
}, 3000);
return () => clearInterval(interval);
}, []);


return (
<div className="container">
<header className="header">
<img src={logo} alt="Logo" className="logo" />
<h1 className="org-name">Aadivashi
Sewa
Sansthan</h1>
</header>


<div className="carousel">
<img src={images[currentIndex]} alt="Slide" className="carousel-image" />
</div>


<section className="body-content">
<h2 className="vision-mission">Our Vision & Mission</h2>
<h2 className="vision">Vision</h2>
<p>A just, inclusive, and dignified society where every tribal
individual—especially women—has the rights, opportunities,
and capabilities to lead a life of freedom, security, and cultural
pride.
</p>
<h2>Mission</h2>
<p>
To empower marginalized tribal communities across India
through rights-based development, sustainable livelihoods,
quality education, women’s leadership, and cultural
preservation—ensuring that progress reaches the last person in
the last village.
</p>
</section>

<section className="body-content">
<h2 className="about-us">About Us</h2>
<h3>Established in: 1994</h3>
<img src={founder} alt="Logo" className="founder-logo" />
<h2>Founder - Lt shri Ram pratap singh</h2>
<p>
Aadivashi Seva Sansthan is a non-political, not-for-profit organization registered under the Society Registration Act, 1860, and established in 1994 in Chitrakoot District, Uttar Pradesh. Founded by Mr. Ram Pratap Singh and Mr. Gyanendra Singh, who have been active in the region for over two decades, the organization began with a clear vision: to uplift the socio-economic conditions of marginalized and underserved communities.
</p>

<p>
For more than 30 years, the organization has worked with underprivileged families, socially backward groups, marginalized farmers, tribal communities, and vulnerable households, addressing deep-rooted inequalities with a commitment grounded in human values, dignity, and participation.
</p>

<p>
Aadivashi Seva Sansthan has expanded its work across some of India’s most underserved regions—from the forests of Chhattisgarh and Jharkhand to the drought-prone Bundelkhand, and across tribal pockets in Madhya Pradesh, Uttar Pradesh, Bihar, and Rajasthan. Our focus is on strengthening education, livelihoods, cultural identity, women’s empowerment, social inclusion, and ensuring communities access their rightful entitlements.
</p>

<p>
For over a quarter century, Aadivashi Seva Sansthan has been dedicated to socio-economic, educational, and cultural development, standing with those on the margins and helping them move towards dignity, resilience, and opportunity.
</p>
</section>


<footer className="footer">
<p>Aadivashi
Sewa
Sansthan © 2025 | Contact:  Aadivashisewasansthan@gmail.com | Phone:- 7982651154 , 7607950359</p>
</footer>
</div>
);
}