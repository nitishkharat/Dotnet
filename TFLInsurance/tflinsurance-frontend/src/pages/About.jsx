
// import { Link } from "react-router-dom";

// function About() {
//     return (
//         <>
//             <style>{`
//                 * {
//                     margin: 0;
//                     padding: 0;
//                     box-sizing: border-box;
//                 }

//                 .about-page {
//                     min-height: 100vh;
//                     background: linear-gradient(120deg, #fffaf6, #ffe9dc);
//                     font-family: Arial, sans-serif;
//                     color: #142b50;
//                     position: relative;
//                     overflow: hidden;
//                 }

//                 /* Common Hover Animation */

//                 .about-page .hover-effect {
//                     transition: all 0.3s ease;
//                 }

//                 .about-page .hover-effect:hover {
//                     transform: translateY(-7px);
//                     box-shadow: 0 12px 28px rgba(20, 43, 80, 0.16);
//                 }

//                 /* Floating Bubbles */

//                 .bubbles {
//                     position: fixed;
//                     inset: 0;
//                     overflow: hidden;
//                     pointer-events: none;
//                     z-index: 0;
//                 }

//                 .bubble {
//                     position: absolute;
//                     bottom: -100px;
//                     border-radius: 50%;
//                     background: radial-gradient(
//                         circle at 30% 30%,
//                         rgba(255,255,255,0.9),
//                         rgba(173,216,250,0.3),
//                         rgba(255,200,170,0.2)
//                     );
//                     border: 1px solid rgba(255,255,255,0.8);
//                     box-shadow: 0 0 10px rgba(150,200,235,0.2);
//                     animation: floatBubble linear infinite;
//                 }

//                 .bubble:nth-child(1) {
//                     width: 40px;
//                     height: 40px;
//                     left: 5%;
//                     animation-duration: 13s;
//                 }

//                 .bubble:nth-child(2) {
//                     width: 25px;
//                     height: 25px;
//                     left: 15%;
//                     animation-duration: 17s;
//                     animation-delay: -5s;
//                 }

//                 .bubble:nth-child(3) {
//                     width: 65px;
//                     height: 65px;
//                     left: 28%;
//                     animation-duration: 20s;
//                     animation-delay: -8s;
//                 }

//                 .bubble:nth-child(4) {
//                     width: 35px;
//                     height: 35px;
//                     left: 42%;
//                     animation-duration: 15s;
//                     animation-delay: -3s;
//                 }

//                 .bubble:nth-child(5) {
//                     width: 55px;
//                     height: 55px;
//                     left: 55%;
//                     animation-duration: 19s;
//                     animation-delay: -10s;
//                 }

//                 .bubble:nth-child(6) {
//                     width: 28px;
//                     height: 28px;
//                     left: 68%;
//                     animation-duration: 14s;
//                     animation-delay: -6s;
//                 }

//                 .bubble:nth-child(7) {
//                     width: 70px;
//                     height: 70px;
//                     left: 80%;
//                     animation-duration: 21s;
//                     animation-delay: -12s;
//                 }

//                 .bubble:nth-child(8) {
//                     width: 38px;
//                     height: 38px;
//                     left: 93%;
//                     animation-duration: 16s;
//                     animation-delay: -4s;
//                 }

//                 @keyframes floatBubble {
//                     0% {
//                         transform: translateY(0) translateX(0);
//                         opacity: 0;
//                     }

//                     10% {
//                         opacity: 0.7;
//                     }

//                     50% {
//                         transform: translateY(-60vh) translateX(25px);
//                         opacity: 0.6;
//                     }

//                     100% {
//                         transform: translateY(-120vh) translateX(-20px);
//                         opacity: 0;
//                     }
//                 }

//                 .about-content {
//                     position: relative;
//                     z-index: 1;
//                 }

//                 /* Header */

//                 .about-header {
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: center;
//                     padding: 12px 5%;
//                     background: rgba(255,255,255,0.7);
//                     gap: 20px;
//                 }

//                 .brand-name {
//                     font-size: 24px;
//                     font-weight: bold;
//                     color: #142b50;
//                     transition: 0.3s;
//                 }

//                 .brand-name:hover {
//                     transform: scale(1.05);
//                 }

//                 .brand-name span {
//                     color: #ed6b35;
//                 }

//                 .brand-tagline {
//                     font-size: 11px;
//                     margin-top: 5px;
//                     color: #555;
//                 }

//                 .header-nav {
//                     display: flex;
//                     align-items: center;
//                     gap: 18px;
//                     flex-wrap: wrap;
//                 }

//                 .header-nav a {
//                     text-decoration: none;
//                     color: #142b50;
//                     font-size: 14px;
//                     font-weight: bold;
//                     transition: all 0.3s ease;
//                 }

//                 .header-nav a:hover {
//                     color: #ed6b35;
//                     transform: translateY(-3px);
//                 }

//                 .header-nav .quote-link {
//                     background: #ed6b35;
//                     color: white;
//                     padding: 10px 20px;
//                     border-radius: 25px;
//                 }

//                 .header-nav .quote-link:hover {
//                     background: #142b50;
//                     color: white;
//                     box-shadow: 0 6px 15px rgba(20,43,80,0.2);
//                 }

//                 /* Heading */

//                 .page-heading {
//                     text-align: center;
//                     padding: 20px 15px;
//                 }

//                 .page-heading h1 {
//                     font-size: 36px;
//                     margin-bottom: 8px;
//                     transition: 0.3s;
//                 }

//                 .page-heading h1:hover {
//                     transform: scale(1.04);
//                 }

//                 .page-heading h1 span {
//                     color: #ed6b35;
//                 }

//                 .page-heading p {
//                     font-size: 15px;
//                     color: #555;
//                     transition: 0.3s;
//                 }

//                 .page-heading p:hover {
//                     color: #ed6b35;
//                 }

//                 /* About Section */

//                 .about-section {
//                     display: grid;
//                     grid-template-columns: 1fr 1fr;
//                     align-items: center;
//                     gap: 25px;
//                     max-width: 1050px;
//                     margin: auto;
//                     padding: 5px 25px 30px;
//                 }

//                 .image-wrapper {
//                     overflow: hidden;
//                     border-radius: 18px;
//                     border: 4px solid white;
//                     box-shadow: 0 8px 25px rgba(0,0,0,0.12);
//                     transition: all 0.3s ease;
//                 }

//                 .image-wrapper:hover {
//                     transform: scale(1.035);
//                     box-shadow: 0 15px 30px rgba(20,43,80,0.2);
//                 }

//                 .team-image {
//                     width: 100%;
//                     height: 330px;
//                     object-fit: cover;
//                     display: block;
//                     transition: transform 0.5s ease;
//                 }

//                 .image-wrapper:hover .team-image {
//                     transform: scale(1.08);
//                 }

//                 .about-information {
//                     background: rgba(255,255,255,0.85);
//                     padding: 22px;
//                     border-radius: 18px;
//                     box-shadow: 0 5px 20px rgba(0,0,0,0.07);
//                     transition: all 0.3s ease;
//                 }

//                 .about-information:hover {
//                     transform: translateY(-7px);
//                     box-shadow: 0 15px 30px rgba(20,43,80,0.16);
//                 }

//                 .about-information h2 {
//                     font-size: 25px;
//                     margin-bottom: 15px;
//                 }

//                 .about-information h2 span {
//                     color: #ed6b35;
//                 }

//                 .about-information p {
//                     color: #555;
//                     line-height: 1.6;
//                     font-size: 14px;
//                 }

//                 .experience-box {
//                     display: flex;
//                     align-items: center;
//                     gap: 12px;
//                     margin-top: 12px;
//                     padding: 12px;
//                     background: #fff0e5;
//                     border-radius: 12px;
//                     transition: all 0.3s ease;
//                 }

//                 .experience-box:hover {
//                     transform: translateX(7px);
//                     background: #ffe0ca;
//                     box-shadow: 0 8px 18px rgba(237,107,53,0.15);
//                 }

//                 .experience-icon {
//                     font-size: 28px;
//                     transition: transform 0.3s ease;
//                 }

//                 .experience-box:hover .experience-icon {
//                     transform: scale(1.2);
//                 }

//                 .experience-box h3 {
//                     font-size: 16px;
//                     margin-bottom: 5px;
//                 }

//                 .experience-box p {
//                     font-size: 13px;
//                 }

//                 /* Mission and Vision */

//                 .mission-vision {
//                     display: grid;
//                     grid-template-columns: 1fr 1fr;
//                     gap: 18px;
//                     max-width: 1000px;
//                     margin: auto;
//                     padding: 0 25px 30px;
//                 }

//                 .info-card {
//                     display: flex;
//                     align-items: center;
//                     gap: 15px;
//                     padding: 18px;
//                     background: rgba(255,255,255,0.9);
//                     border-radius: 16px;
//                     box-shadow: 0 5px 18px rgba(0,0,0,0.07);
//                     transition: all 0.3s ease;
//                 }

//                 .info-card:hover {
//                     transform: translateY(-8px) scale(1.02);
//                     box-shadow: 0 15px 30px rgba(20,43,80,0.16);
//                     background: white;
//                 }

//                 .info-icon {
//                     font-size: 32px;
//                     transition: transform 0.3s ease;
//                 }

//                 .info-card:hover .info-icon {
//                     transform: rotate(10deg) scale(1.2);
//                 }

//                 .info-card h3 {
//                     font-size: 20px;
//                     margin-bottom: 8px;
//                 }

//                 .info-card h3 span {
//                     color: #ed6b35;
//                 }

//                 .info-card p {
//                     color: #555;
//                     line-height: 1.6;
//                     font-size: 13px;
//                 }

//                 /* Contact Footer - Light Nail Paint Theme */

//                 .contact-footer {
//                     background: linear-gradient(
//                         135deg,
//                         #F5DCE6,
//                         #E9B8CB,
//                         #DDA6BD
//                     );
//                     color: #713B58;
//                     padding: 35px 5% 18px;
//                 }

//                 .contact-footer h2 {
//                     text-align: center;
//                     font-size: 28px;
//                     margin-bottom: 10px;
//                     color: #713B58;
//                     transition: 0.3s;
//                 }

//                 .contact-footer h2:hover {
//                     transform: scale(1.04);
//                 }

//                 .contact-footer h2 span {
//                     color: #C75B83;
//                 }

//                 .footer-description {
//                     text-align: center;
//                     color: #713B58;
//                     margin-bottom: 25px;
//                     font-size: 14px;
//                 }

//                 /* Contact Cards */

//                 .contact-details {
//                     display: grid;
//                     grid-template-columns: repeat(4, 1fr);
//                     gap: 15px;
//                     max-width: 1050px;
//                     margin: auto auto 25px;
//                 }

//                 .contact-item {
//                     display: flex;
//                     align-items: center;
//                     gap: 12px;
//                     padding: 15px 12px;
//                     border: 1px solid rgba(198,91,131,0.18);
//                     border-radius: 14px;
//                     background: rgba(255,255,255,0.65);
//                     transition: all 0.3s ease;
//                 }

//                 /* Light White Popup Hover */

//                 .contact-item:hover {
//                     transform: translateY(-5px);
//                     background: #FFFFFF;
//                     border-color: #E9B8CB;
//                     box-shadow: 0 8px 20px rgba(113,59,88,0.10);
//                 }

//                 .contact-icon {
//                     width: 42px;
//                     height: 42px;
//                     min-width: 42px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     border-radius: 50%;
//                     background: #F8DCE7;
//                     color: #A65D79;
//                     font-size: 21px;
//                     transition: all 0.3s ease;
//                 }

//                 .contact-item:hover .contact-icon {
//                     background: #F5DCE6;
//                     color: #C75B83;
//                     transform: scale(1.08);
//                 }

//                 .contact-item h4 {
//                     color: #A65D79;
//                     font-size: 13px;
//                     margin-bottom: 7px;
//                     transition: 0.3s;
//                 }

//                 .contact-item p {
//                     font-size: 12px;
//                     color: #713B58;
//                     overflow-wrap: anywhere;
//                     line-height: 1.5;
//                     transition: 0.3s;
//                 }

//                 .contact-item:hover h4 {
//                     color: #C75B83;
//                 }

//                 .contact-item:hover p {
//                     color: #713B58;
//                 }

//                 /* Social Links */

//                 .social-links {
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     flex-wrap: wrap;
//                     gap: 15px;
//                     padding: 20px 0;
//                     border-top: 1px solid rgba(113,59,88,0.18);
//                 }

//                 .social-links a {
//                     min-width: 90px;
//                     text-align: center;
//                     padding: 9px 15px;
//                     border-radius: 25px;
//                     border: 1px solid #DDA6BD;
//                     background: rgba(255,255,255,0.65);
//                     color: #713B58;
//                     text-decoration: none;
//                     font-size: 13px;
//                     font-weight: bold;
//                     transition: all 0.3s ease;
//                 }

//                 .social-links a:hover {
//                     background: #FFFFFF;
//                     color: #C75B83;
//                     border-color: #C75B83;
//                     transform: translateY(-4px);
//                     box-shadow: 0 6px 15px rgba(113,59,88,0.10);
//                 }

//                 /* Footer Bottom */

//                 .footer-bottom {
//                     display: flex;
//                     justify-content: space-between;
//                     gap: 15px;
//                     flex-wrap: wrap;
//                     border-top: 1px solid rgba(113,59,88,0.18);
//                     padding-top: 15px;
//                     font-size: 12px;
//                     color: #713B58;
//                 }

//                 .footer-bottom p {
//                     transition: 0.3s;
//                 }

//                 .footer-bottom p:hover {
//                     color: #C75B83;
//                 }

//                 /* Responsive */

//                 @media (max-width: 900px) {
//                     .about-section {
//                         grid-template-columns: 1fr;
//                         max-width: 650px;
//                     }

//                     .team-image {
//                         height: 350px;
//                     }

//                     .contact-details {
//                         grid-template-columns: 1fr 1fr;
//                     }
//                 }

//                 @media (max-width: 650px) {
//                     .about-header {
//                         flex-direction: column;
//                     }

//                     .header-nav {
//                         justify-content: center;
//                         gap: 15px;
//                     }

//                     .header-nav a {
//                         font-size: 13px;
//                     }

//                     .page-heading h1 {
//                         font-size: 30px;
//                     }

//                     .page-heading p {
//                         font-size: 13px;
//                     }

//                     .about-information {
//                         padding: 18px;
//                     }

//                     .about-information h2 {
//                         font-size: 23px;
//                     }

//                     .team-image {
//                         height: 250px;
//                     }

//                     .mission-vision {
//                         grid-template-columns: 1fr;
//                     }

//                     .contact-details {
//                         grid-template-columns: 1fr;
//                     }

//                     .contact-item {
//                         padding: 15px;
//                     }

//                     .footer-bottom {
//                         justify-content: center;
//                         text-align: center;
//                     }
//                 }

//                 @media (prefers-reduced-motion: reduce) {
//                     .bubble,
//                     .about-page *,
//                     .about-page *::before,
//                     .about-page *::after {
//                         animation: none !important;
//                         transition: none !important;
//                     }
//                 }
//             `}</style>

//             <div className="about-page">

//                 {/* Floating Bubbles */}

//                 <div className="bubbles">
//                     {Array.from({ length: 8 }, (_, index) => (
//                         <span className="bubble" key={index}></span>
//                     ))}
//                 </div>

//                 <div className="about-content">

//                     {/* Header */}

//                     <header className="about-header">

//                         <div>
//                             <div className="brand-name">
//                                 TFL<span>Insurance</span>
//                             </div>

//                             <p className="brand-tagline">
//                                 Secure Today... Brighter Tomorrow...
//                             </p>
//                         </div>

//                         <nav className="header-nav">
//                             <Link to="/">Home</Link>
//                             <Link to="/services">Services</Link>
//                             <Link to="/about">About Us</Link>
//                             <a href="#contact">Contact</a>

//                             <Link to="/login" className="quote-link">
//                                 Get Started →
//                             </Link>
//                         </nav>

//                     </header>

//                     {/* Page Heading */}

//                     <section className="page-heading">

//                         <h1>
//                             About <span>Us</span>
//                         </h1>

//                         <p>
//                             Your Trusted Insurance Partner for a Secure Future
//                         </p>

//                     </section>

//                     {/* About TFLInsurance */}

//                     <section className="about-section">

//                         <div className="image-wrapper">
//                             <img
//                                 src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop"
//                                 alt="TFLInsurance Professional Team"
//                                 className="team-image"
//                             />
//                         </div>

//                         <div className="about-information">

//                             <h2>
//                                 About <span>TFLInsurance</span>
//                             </h2>

//                             <p>
//                                 TFLInsurance is a customer-focused insurance
//                                 service provider committed to protecting
//                                 individuals, families and their valuable
//                                 assets. We believe that insurance should be
//                                 simple, transparent and accessible to everyone.
//                                 Our goal is to help customers choose suitable
//                                 insurance solutions and enjoy greater
//                                 financial confidence.
//                             </p>

//                             <div className="experience-box">

//                                 <div className="experience-icon">🏆</div>

//                                 <div>
//                                     <h3>Our Experience</h3>

//                                     <p>
//                                         Our team focuses on providing helpful
//                                         guidance and dependable customer support.
//                                     </p>
//                                 </div>

//                             </div>

//                             <div className="experience-box">

//                                 <div className="experience-icon">🤝</div>

//                                 <div>
//                                     <h3>Our Commitment</h3>

//                                     <p>
//                                         We believe in trust, transparency,
//                                         customer satisfaction and reliable service.
//                                     </p>
//                                 </div>

//                             </div>

//                         </div>

//                     </section>

//                     {/* Mission and Vision */}

//                     <section className="mission-vision">

//                         <div className="info-card">

//                             <div className="info-icon">🎯</div>

//                             <div>
//                                 <h3>
//                                     Our <span>Mission</span>
//                                 </h3>

//                                 <p>
//                                     To provide reliable and accessible
//                                     insurance solutions that help protect
//                                     individuals, families and their assets.
//                                 </p>
//                             </div>

//                         </div>

//                         <div className="info-card">

//                             <div className="info-icon">💡</div>

//                             <div>
//                                 <h3>
//                                     Our <span>Vision</span>
//                                 </h3>

//                                 <p>
//                                     To become a trusted insurance partner
//                                     by delivering customer-focused solutions
//                                     and dependable support.
//                                 </p>
//                             </div>

//                         </div>

//                     </section>

//                     {/* Contact Footer */}

//                     <footer className="contact-footer" id="contact">

//                         <h2>
//                             Contact <span>Us</span>
//                         </h2>

//                         <p className="footer-description">
//                             We are here to help! Get in touch with our
//                             team for insurance information and support.
//                         </p>

//                         <div className="contact-details">

//                             {/* Phone */}

//                             <div className="contact-item">
//                                 <div className="contact-icon">📞</div>

//                                 <div>
//                                     <h4>Phone Number</h4>
//                                     <p>8149416008</p>
//                                 </div>
//                             </div>

//                             {/* Email */}

//                             <div className="contact-item">
//                                 <div className="contact-icon">✉️</div>

//                                 <div>
//                                     <h4>Email Address</h4>
//                                     <p>nitishkharat@gmail.com</p>
//                                 </div>
//                             </div>

//                             {/* Office Address */}

//                             <div className="contact-item">
//                                 <div className="contact-icon">📍</div>

//                                 <div>
//                                     <h4>Office Address</h4>
//                                     <p>Pune, Maharashtra, India</p>
//                                 </div>
//                             </div>

//                             {/* Working Hours */}

//                             <div className="contact-item">
//                                 <div className="contact-icon">🕒</div>

//                                 <div>
//                                     <h4>Working Hours</h4>
//                                     <p>Monday - Saturday</p>
//                                     <p>9 AM - 6 PM</p>
//                                 </div>
//                             </div>

//                         </div>

//                         {/* Social Links */}

//                         <div className="social-links">
//                             <a href="#" aria-label="Facebook">Facebook</a>
//                             <a href="#" aria-label="Instagram">Instagram</a>
//                             <a href="#" aria-label="LinkedIn">LinkedIn</a>
//                             <a href="#" aria-label="YouTube">YouTube</a>
//                         </div>

//                         {/* Footer Bottom */}

//                         <div className="footer-bottom">

//                             <p>
//                                 © {new Date().getFullYear()} TFLInsurance.
//                                 All Rights Reserved.
//                             </p>

//                             <p>
//                                 Secure Today... Brighter Tomorrow...
//                             </p>

//                         </div>

//                     </footer>

//                 </div>
//             </div>
//         </>
//     );
// }

// export default About;



import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .about-page {
                    min-height: 100vh;
                    background: linear-gradient(120deg, #fffaf6, #ffe9dc);
                    font-family: Arial, sans-serif;
                    color: #142b50;
                    position: relative;
                    overflow: hidden;
                }

                /* Common Hover Animation */

                .about-page .hover-effect {
                    transition: all 0.3s ease;
                }

                .about-page .hover-effect:hover {
                    transform: translateY(-7px);
                    box-shadow: 0 12px 28px rgba(20, 43, 80, 0.16);
                }

                /* Floating Bubbles */

                .bubbles {
                    position: fixed;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                    z-index: 0;
                }

                .bubble {
                    position: absolute;
                    bottom: -100px;
                    border-radius: 50%;
                    background: radial-gradient(
                        circle at 30% 30%,
                        rgba(255,255,255,0.9),
                        rgba(173,216,250,0.3),
                        rgba(255,200,170,0.2)
                    );
                    border: 1px solid rgba(255,255,255,0.8);
                    box-shadow: 0 0 10px rgba(150,200,235,0.2);
                    animation: floatBubble linear infinite;
                }

                .bubble:nth-child(1) {
                    width: 40px;
                    height: 40px;
                    left: 5%;
                    animation-duration: 13s;
                }

                .bubble:nth-child(2) {
                    width: 25px;
                    height: 25px;
                    left: 15%;
                    animation-duration: 17s;
                    animation-delay: -5s;
                }

                .bubble:nth-child(3) {
                    width: 65px;
                    height: 65px;
                    left: 28%;
                    animation-duration: 20s;
                    animation-delay: -8s;
                }

                .bubble:nth-child(4) {
                    width: 35px;
                    height: 35px;
                    left: 42%;
                    animation-duration: 15s;
                    animation-delay: -3s;
                }

                .bubble:nth-child(5) {
                    width: 55px;
                    height: 55px;
                    left: 55%;
                    animation-duration: 19s;
                    animation-delay: -10s;
                }

                .bubble:nth-child(6) {
                    width: 28px;
                    height: 28px;
                    left: 68%;
                    animation-duration: 14s;
                    animation-delay: -6s;
                }

                .bubble:nth-child(7) {
                    width: 70px;
                    height: 70px;
                    left: 80%;
                    animation-duration: 21s;
                    animation-delay: -12s;
                }

                .bubble:nth-child(8) {
                    width: 38px;
                    height: 38px;
                    left: 93%;
                    animation-duration: 16s;
                    animation-delay: -4s;
                }

                @keyframes floatBubble {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }

                    10% {
                        opacity: 0.7;
                    }

                    50% {
                        transform: translateY(-60vh) translateX(25px);
                        opacity: 0.6;
                    }

                    100% {
                        transform: translateY(-120vh) translateX(-20px);
                        opacity: 0;
                    }
                }

                .about-content {
                    position: relative;
                    z-index: 1;
                }

                /* Header */

                .about-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 5%;
                    background: rgba(255,255,255,0.7);
                    gap: 20px;
                }

                .brand-name {
                    font-size: 24px;
                    font-weight: bold;
                    color: #142b50;
                    transition: 0.3s;
                }

                .brand-name:hover {
                    transform: scale(1.05);
                }

                .brand-name span {
                    color: #ed6b35;
                }

                .brand-tagline {
                    font-size: 11px;
                    margin-top: 5px;
                    color: #555;
                }

                .header-nav {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    flex-wrap: wrap;
                }

                .header-nav a {
                    text-decoration: none;
                    color: #142b50;
                    font-size: 14px;
                    font-weight: bold;
                    transition: all 0.3s ease;
                }

                .header-nav a:hover {
                    color: #ed6b35;
                    transform: translateY(-3px);
                }

                .header-nav .quote-link {
                    background: #ed6b35;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 25px;
                }

                .header-nav .quote-link:hover {
                    background: #142b50;
                    color: white;
                    box-shadow: 0 6px 15px rgba(20,43,80,0.2);
                }

                /* Heading */

                .page-heading {
                    text-align: center;
                    padding: 20px 15px;
                }

                .page-heading h1 {
                    font-size: 36px;
                    margin-bottom: 8px;
                    transition: 0.3s;
                }

                .page-heading h1:hover {
                    transform: scale(1.04);
                }

                .page-heading h1 span {
                    color: #ed6b35;
                }

                .page-heading p {
                    font-size: 15px;
                    color: #555;
                    transition: 0.3s;
                }

                .page-heading p:hover {
                    color: #ed6b35;
                }

                /* About Section */

                .about-section {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    gap: 25px;
                    max-width: 1050px;
                    margin: auto;
                    padding: 5px 25px 30px;
                }

                .image-wrapper {
                    overflow: hidden;
                    border-radius: 18px;
                    border: 4px solid white;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
                    transition: all 0.3s ease;
                }

                .image-wrapper:hover {
                    transform: scale(1.035);
                    box-shadow: 0 15px 30px rgba(20,43,80,0.2);
                }

                .team-image {
                    width: 100%;
                    height: 330px;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.5s ease;
                }

                .image-wrapper:hover .team-image {
                    transform: scale(1.08);
                }

                .about-information {
                    background: rgba(255,255,255,0.85);
                    padding: 22px;
                    border-radius: 18px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.07);
                    transition: all 0.3s ease;
                }

                .about-information:hover {
                    transform: translateY(-7px);
                    box-shadow: 0 15px 30px rgba(20,43,80,0.16);
                }

                .about-information h2 {
                    font-size: 25px;
                    margin-bottom: 15px;
                }

                .about-information h2 span {
                    color: #ed6b35;
                }

                .about-information p {
                    color: #555;
                    line-height: 1.6;
                    font-size: 14px;
                }

                .experience-box {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-top: 12px;
                    padding: 12px;
                    background: #fff0e5;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }

                .experience-box:hover {
                    transform: translateX(7px);
                    background: #ffe0ca;
                    box-shadow: 0 8px 18px rgba(237,107,53,0.15);
                }

                .experience-icon {
                    font-size: 28px;
                    transition: transform 0.3s ease;
                }

                .experience-box:hover .experience-icon {
                    transform: scale(1.2);
                }

                .experience-box h3 {
                    font-size: 16px;
                    margin-bottom: 5px;
                }

                .experience-box p {
                    font-size: 13px;
                }

                /* Mission and Vision */

                .mission-vision {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 18px;
                    max-width: 1000px;
                    margin: auto;
                    padding: 0 25px 30px;
                }

                .info-card {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 18px;
                    background: rgba(255,255,255,0.9);
                    border-radius: 16px;
                    box-shadow: 0 5px 18px rgba(0,0,0,0.07);
                    transition: all 0.3s ease;
                }

                .info-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 15px 30px rgba(20,43,80,0.16);
                    background: white;
                }

                .info-icon {
                    font-size: 32px;
                    transition: transform 0.3s ease;
                }

                .info-card:hover .info-icon {
                    transform: rotate(10deg) scale(1.2);
                }

                .info-card h3 {
                    font-size: 20px;
                    margin-bottom: 8px;
                }

                .info-card h3 span {
                    color: #ed6b35;
                }

                .info-card p {
                    color: #555;
                    line-height: 1.6;
                    font-size: 13px;
                }

                /* Contact Footer - Light Nail Paint Theme */

                .contact-footer {
                    background: linear-gradient(
                        135deg,
                        #F5DCE6,
                        #E9B8CB,
                        #DDA6BD
                    );
                    color: #713B58;
                    padding: 35px 5% 18px;
                }

                .contact-footer h2 {
                    text-align: center;
                    font-size: 28px;
                    margin-bottom: 10px;
                    color: #713B58;
                    transition: 0.3s;
                }

                .contact-footer h2:hover {
                    transform: scale(1.04);
                }

                .contact-footer h2 span {
                    color: #C75B83;
                }

                .footer-description {
                    text-align: center;
                    color: #713B58;
                    margin-bottom: 25px;
                    font-size: 14px;
                }

                /* Contact Cards */

                .contact-details {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 15px;
                    max-width: 1050px;
                    margin: auto auto 25px;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 15px 12px;
                    border: 1px solid rgba(198,91,131,0.18);
                    border-radius: 14px;
                    background: rgba(255,255,255,0.65);
                    transition: all 0.3s ease;
                }

                /* Light White Popup Hover */

                .contact-item:hover {
                    transform: translateY(-5px);
                    background: #FFFFFF;
                    border-color: #E9B8CB;
                    box-shadow: 0 8px 20px rgba(113,59,88,0.10);
                }

                .contact-icon {
                    width: 42px;
                    height: 42px;
                    min-width: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #F8DCE7;
                    color: #A65D79;
                    font-size: 21px;
                    transition: all 0.3s ease;
                }

                .contact-item:hover .contact-icon {
                    background: #F5DCE6;
                    color: #C75B83;
                    transform: scale(1.08);
                }

                .contact-item h4 {
                    color: #A65D79;
                    font-size: 13px;
                    margin-bottom: 7px;
                    transition: 0.3s;
                }

                .contact-item p {
                    font-size: 12px;
                    color: #713B58;
                    overflow-wrap: anywhere;
                    line-height: 1.5;
                    transition: 0.3s;
                }

                .contact-item:hover h4 {
                    color: #C75B83;
                }

                .contact-item:hover p {
                    color: #713B58;
                }

                /* Social Media Logo Links */

                .social-links {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 18px;
                    padding: 20px 0;
                    border-top: 1px solid rgba(113,59,88,0.18);
                }

                .social-links a {
                    width: 42px;
                    height: 42px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    background: #FFFFFF;
                    border: 1px solid #DDA6BD;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .social-links svg {
                    width: 21px;
                    height: 21px;
                    fill: #A65D79;
                    stroke: #A65D79;
                    stroke-width: 1.5;
                    transition: all 0.3s ease;
                }

                .social-links .instagram svg,
                .social-links .youtube svg {
                    fill: none;
                }

                .social-links .instagram .dot {
                    fill: #A65D79;
                    stroke: none;
                }

                .social-links a:hover {
                    background: #C75B83;
                    transform: translateY(-5px);
                    box-shadow: 0 6px 15px rgba(113,59,88,0.15);
                }

                .social-links a:hover svg {
                    fill: #FFFFFF;
                    stroke: #FFFFFF;
                }

                .social-links .instagram:hover svg,
                .social-links .youtube:hover svg {
                    fill: none;
                }

                .social-links .instagram:hover .dot {
                    fill: #FFFFFF;
                }

                /* Footer Bottom */

                .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                    gap: 15px;
                    flex-wrap: wrap;
                    border-top: 1px solid rgba(113,59,88,0.18);
                    padding-top: 15px;
                    font-size: 12px;
                    color: #713B58;
                }

                .footer-bottom p {
                    transition: 0.3s;
                }

                .footer-bottom p:hover {
                    color: #C75B83;
                }

                /* Responsive */

                @media (max-width: 900px) {
                    .about-section {
                        grid-template-columns: 1fr;
                        max-width: 650px;
                    }

                    .team-image {
                        height: 350px;
                    }

                    .contact-details {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media (max-width: 650px) {
                    .about-header {
                        flex-direction: column;
                    }

                    .header-nav {
                        justify-content: center;
                        gap: 15px;
                    }

                    .header-nav a {
                        font-size: 13px;
                    }

                    .page-heading h1 {
                        font-size: 30px;
                    }

                    .page-heading p {
                        font-size: 13px;
                    }

                    .about-information {
                        padding: 18px;
                    }

                    .about-information h2 {
                        font-size: 23px;
                    }

                    .team-image {
                        height: 250px;
                    }

                    .mission-vision {
                        grid-template-columns: 1fr;
                    }

                    .contact-details {
                        grid-template-columns: 1fr;
                    }

                    .contact-item {
                        padding: 15px;
                    }

                    .footer-bottom {
                        justify-content: center;
                        text-align: center;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .bubble,
                    .about-page *,
                    .about-page *::before,
                    .about-page *::after {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>

            <div className="about-page">

                {/* Floating Bubbles */}

                <div className="bubbles">
                    {Array.from({ length: 8 }, (_, index) => (
                        <span className="bubble" key={index}></span>
                    ))}
                </div>

                <div className="about-content">

                    {/* Header */}

                    <header className="about-header">

                        <div>
                            <div className="brand-name">
                                TFL<span>Insurance</span>
                            </div>

                            <p className="brand-tagline">
                                Secure Today... Brighter Tomorrow...
                            </p>
                        </div>

                        <nav className="header-nav">
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/insurance_info">Insurance_Info</Link>
                            <a href="#contact">Contact</a>

                            <Link to="/login" className="quote-link">
                                Get Started →
                            </Link>
                        </nav>

                    </header>

                    {/* Page Heading */}

                    <section className="page-heading">

                        <h1>
                            About <span>Us</span>
                        </h1>

                        <p>
                            Your Trusted Insurance Partner for a Secure Future
                        </p>

                    </section>

                    {/* About TFLInsurance */}

                    <section className="about-section">

                        <div className="image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop"
                                alt="TFLInsurance Professional Team"
                                className="team-image"
                            />
                        </div>

                        <div className="about-information">

                            <h2>
                                About <span>TFLInsurance</span>
                            </h2>

                            <p>
                                TFLInsurance is a customer-focused insurance
                                service provider committed to protecting
                                individuals, families and their valuable
                                assets. We believe that insurance should be
                                simple, transparent and accessible to everyone.
                                Our goal is to help customers choose suitable
                                insurance solutions and enjoy greater
                                financial confidence.
                            </p>

                            <div className="experience-box">

                                <div className="experience-icon">🏆</div>

                                <div>
                                    <h3>Our Experience</h3>

                                    <p>
                                        Our team focuses on providing helpful
                                        guidance and dependable customer support.
                                    </p>
                                </div>

                            </div>

                            <div className="experience-box">

                                <div className="experience-icon">🤝</div>

                                <div>
                                    <h3>Our Commitment</h3>

                                    <p>
                                        We believe in trust, transparency,
                                        customer satisfaction and reliable service.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </section>

                    {/* Mission and Vision */}

                    <section className="mission-vision">

                        <div className="info-card">

                            <div className="info-icon">🎯</div>

                            <div>
                                <h3>
                                    Our <span>Mission</span>
                                </h3>

                                <p>
                                    To provide reliable and accessible
                                    insurance solutions that help protect
                                    individuals, families and their assets.
                                </p>
                            </div>

                        </div>

                        <div className="info-card">

                            <div className="info-icon">💡</div>

                            <div>
                                <h3>
                                    Our <span>Vision</span>
                                </h3>

                                <p>
                                    To become a trusted insurance partner
                                    by delivering customer-focused solutions
                                    and dependable support.
                                </p>
                            </div>

                        </div>

                    </section>

                    {/* Contact Footer */}

                    <footer className="contact-footer" id="contact">

                        <h2>
                            Contact <span>Us</span>
                        </h2>

                        <p className="footer-description">
                            We are here to help! Get in touch with our
                            team for insurance information and support.
                        </p>

                        <div className="contact-details">

                            {/* Phone */}

                            <div className="contact-item">
                                <div className="contact-icon">📞</div>

                                <div>
                                    <h4>Phone Number</h4>
                                    <p>8149416008</p>
                                </div>
                            </div>

                            {/* Email */}

                            <div className="contact-item">
                                <div className="contact-icon">✉️</div>

                                <div>
                                    <h4>Email Address</h4>
                                    <p>nitishkharat@gmail.com</p>
                                </div>
                            </div>

                            {/* Office Address */}

                            <div className="contact-item">
                                <div className="contact-icon">📍</div>

                                <div>
                                    <h4>Office Address</h4>
                                    <p>Pune, Maharashtra, India</p>
                                </div>
                            </div>

                            {/* Working Hours */}

                            <div className="contact-item">
                                <div className="contact-icon">🕒</div>

                                <div>
                                    <h4>Working Hours</h4>
                                    <p>Monday - Saturday</p>
                                    <p>9 AM - 6 PM</p>
                                </div>
                            </div>

                        </div>

                        {/* Social Media Logos */}

                        <div className="social-links">

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                title="Facebook"
                                className="facebook"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.2H7.6V13h2.7v8h3.2z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                title="Instagram"
                                className="instagram"
                            >
                                <svg viewBox="0 0 24 24">
                                    <rect x="3" y="3" width="18" height="18" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" className="dot" />
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                title="LinkedIn"
                                className="linkedin"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3.5 9h3v12h-3zM9 9h3v1.6c.6-1 1.7-2 3.5-2 3.2 0 4 2.1 4 5V21h-3v-6.5c0-1.6-.3-3-2-3s-2.5 1.3-2.5 3V21H9z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                title="YouTube"
                                className="youtube"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.5 15.5v-7l6 3.5z" />
                                </svg>
                            </a>

                        </div>

                        {/* Footer Bottom */}

                        <div className="footer-bottom">

                            <p>
                                © {new Date().getFullYear()} TFLInsurance.
                                All Rights Reserved.
                            </p>

                            <p>
                                Secure Today... Brighter Tomorrow...
                            </p>

                        </div>

                    </footer>

                </div>
            </div>
        </>
    );
}

export default About;
