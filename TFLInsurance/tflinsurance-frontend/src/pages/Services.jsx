
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
                    padding: 10px 8% 60px;
                    background: linear-gradient(
                        115deg,
                        #fff8f2,
                        #ffe4d2
                    );
                    font-family: Arial, sans-serif;
                    position: relative;
                }

                /* Floating Bubbles Background */
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
        rgba(255, 255, 255, 0.9),
        rgba(173, 216, 250, 0.30),
        rgba(255, 200, 170, 0.20)
    );

    border: 1px solid rgba(255, 255, 255, 0.75);

    box-shadow:
        0 0 10px rgba(150, 200, 235, 0.20),
        inset 0 0 10px rgba(255, 255, 255, 0.65);

    animation: floatBubble linear infinite;
}
                .bubble:nth-child(1) {
                    width: 40px;
                    height: 40px;
                    left: 5%;
                    animation-duration: 12s;
                    animation-delay: -2s;
                }

                .bubble:nth-child(2) {
                    width: 25px;
                    height: 25px;
                    left: 15%;
                    animation-duration: 16s;
                    animation-delay: -8s;
                }

                .bubble:nth-child(3) {
                    width: 65px;
                    height: 65px;
                    left: 25%;
                    animation-duration: 18s;
                    animation-delay: -5s;
                }

                .bubble:nth-child(4) {
                    width: 35px;
                    height: 35px;
                    left: 35%;
                    animation-duration: 13s;
                    animation-delay: -10s;
                }

                .bubble:nth-child(5) {
                    width: 55px;
                    height: 55px;
                    left: 45%;
                    animation-duration: 20s;
                    animation-delay: -4s;
                }

                .bubble:nth-child(6) {
                    width: 28px;
                    height: 28px;
                    left: 55%;
                    animation-duration: 15s;
                    animation-delay: -7s;
                }

                .bubble:nth-child(7) {
                    width: 70px;
                    height: 70px;
                    left: 65%;
                    animation-duration: 19s;
                    animation-delay: -12s;
                }

                .bubble:nth-child(8) {
                    width: 30px;
                    height: 30px;
                    left: 75%;
                    animation-duration: 14s;
                    animation-delay: -3s;
                }

                .bubble:nth-child(9) {
                    width: 50px;
                    height: 50px;
                    left: 85%;
                    animation-duration: 17s;
                    animation-delay: -9s;
                }

                .bubble:nth-child(10) {
                    width: 38px;
                    height: 38px;
                    left: 95%;
                    animation-duration: 15s;
                    animation-delay: -6s;
                }

                /* Continuous Upward Movement */
                @keyframes floatBubble {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }

                    10% {
                        opacity: 0.9;
                    }

                    50% {
                        transform: translateY(-60vh) translateX(30px);
                        opacity: 0.8;
                    }

                    90% {
                        opacity: 0.6;
                    }

                    100% {
                        transform: translateY(-120vh) translateX(-20px);
                        opacity: 0;
                    }
                }

                /* Page Content */
                .about-content {
                    position: relative;
                    z-index: 1;
                }

                /* Rotating Logo */
                .about-logo {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                    width: 100%;
                }

                .about-logo img {
                    display: block;
                    width: 450px;
                    height: 450px;
                    max-width: 90vw;
                    object-fit: contain;
                    animation: rotateLogo 20s linear infinite;
                }

                @keyframes rotateLogo {
                    from {
                        transform: rotate(0deg);
                    }

                    to {
                        transform: rotate(360deg);
                    }
                }

                /* Solutions Heading */
                .solutions-title {
                    text-align: center;
                    font-size: 32px;
                    color: #142b50;
                    margin-top: 0;
                    margin-bottom: 20px;
                }

                /* Insurance Cards */
                .solutions-container {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 25px;
                    max-width: 1100px;
                    margin: auto;
                }

                .solution-card {
                    background: rgba(255, 255, 255, 0.88);
                    padding: 35px 25px;
                    border-radius: 15px;
                    text-align: center;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                    transition: transform 0.3s ease;
                    backdrop-filter: blur(5px);
                }

                .solution-card:hover {
                    transform: translateY(-8px);
                }

                .solution-icon {
                    font-size: 45px;
                    margin-bottom: 15px;
                }

                .solution-card h3 {
                    color: #142b50;
                    font-size: 22px;
                    margin-bottom: 12px;
                }

                .solution-card p {
                    color: #666;
                    line-height: 1.6;
                    font-size: 15px;
                    margin-bottom: 20px;
                }

                .explore-link {
                    display: inline-block;
                    background: #ed6b35;
                    color: white;
                    text-decoration: none;
                    padding: 11px 22px;
                    border-radius: 6px;
                    font-size: 14px;
                }

                .explore-link:hover {
                    background: #d95320;
                }

                .back-home {
                    display: block;
                    width: fit-content;
                    margin: 35px auto 0;
                    color: #142b50;
                    text-decoration: none;
                    font-weight: bold;
                }

                /* Responsive Design */
                @media (max-width: 800px) {
                    .solutions-container {
                        grid-template-columns: 1fr;
                    }

                    .about-logo img {
                        width: 350px;
                        height: 350px;
                    }

                    .solutions-title {
                        font-size: 26px;
                    }
                }

                @media (max-width: 500px) {
                    .about-page {
                        padding: 5px 5% 40px;
                    }

                    .about-logo img {
                        width: 280px;
                        height: 280px;
                    }
                }

                /* Respect Reduced Motion */
                @media (prefers-reduced-motion: reduce) {
                    .bubble,
                    .about-logo img {
                        animation: none;
                    }
                }
            `}</style>

            <div className="about-page">

                {/* Floating Bubbles */}
                <div className="bubbles">
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                </div>

                <div className="about-content">

                    {/* Rotating TFLInsurance Logo */}
                    <div className="about-logo">
                        <img
                            src="/images/tflinsurancee.png"
                            alt="TFLInsurance Logo"
                        />
                    </div>

                    {/* Insurance Solutions */}
                    <h2 className="solutions-title">
                        Our Insurance Solutions
                    </h2>

                    <div className="solutions-container">

                        {/* Health Insurance */}
                        <div className="solution-card">
                            <div className="solution-icon">🏥</div>

                            <h3>Health Insurance</h3>

                            <p>
                                Protect yourself and your family
                                with reliable health insurance plans.
                            </p>

                            <Link to="/services" className="explore-link">
                                Explore More
                            </Link>
                        </div>

                        {/* Bike Insurance */}
                        <div className="solution-card">
                            <div className="solution-icon">🏍️</div>

                            <h3>Bike Insurance</h3>

                            <p>
                                Keep your vehicle protected with
                                affordable bike insurance coverage.
                            </p>

                            <Link to="/services" className="explore-link">
                                Explore More
                            </Link>
                        </div>

                        {/* Home Insurance */}
                        <div className="solution-card">
                            <div className="solution-icon">🏠</div>

                            <h3>Home Insurance</h3>

                            <p>
                                Protect your home and valuable
                                belongings with trusted coverage.
                            </p>

                            <Link to="/services" className="explore-link">
                                Explore More
                            </Link>
                        </div>

                    </div>

                    <Link to="/" className="back-home">
                        ← Back to Home
                    </Link>

                </div>
            </div>
        </>
    );
}

export default About;
