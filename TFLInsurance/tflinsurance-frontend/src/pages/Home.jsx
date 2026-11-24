
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <style>{`
                * {
                    box-sizing: border-box;
                }

                /* Main Body */

                .home-page {
                    min-height: 100vh;
                    background: linear-gradient(115deg, #fff8f2, #ffe4d2);
                    font-family: Arial, sans-serif;
                    overflow: hidden;
                }

                /* Header */

                .home-header {
                    min-height: 90px;
                    padding: 0 35px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #ffffff;
                    border-bottom: 1px solid #eeeeee;
                }

                .brand {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #102d59;
                    font-size: 25px;
                    font-weight: 700;
                    text-decoration: none;
                    white-space: nowrap;
                }

                .brand span {
                    color: #ed4a28;
                }

                .brand-logo {
                    width: 45px;
                    height: 45px;
                }

                .home-nav {
                    display: flex;
                    align-items: center;
                    gap: 35px;
                }

                .home-nav a {
                    text-decoration: none;
                    color: #222222;
                    font-size: 16px;
                    transition: 0.3s;
                }

                .home-nav a:hover {
                    color: #e9472d;
                }

                .header-actions {
                    display: flex;
                    gap: 12px;
                }

                .signin-btn,
                .started-btn {
                    padding: 12px 21px;
                    border-radius: 9px;
                    font-size: 14px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: 0.3s;
                }

                .signin-btn {
                    background: linear-gradient(90deg, #d72e35, #ff5428);
                    color: white;
                }

                .started-btn {
                    color: #ed422b;
                    border: 2px solid #ed422b;
                    background: white;
                }

                .signin-btn:hover,
                .started-btn:hover {
                    transform: translateY(-2px);
                }

                /* Hero Section */

                .hero-section {
                    min-height: 620px;
                    padding: 55px 40px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    gap: 45px;
                }

                /* Hero Content */

                .hero-content h1 {
                    color: #102448;
                    font-size: clamp(36px, 3.5vw, 52px);
                    line-height: 1.15;
                    font-weight: 750;
                    margin: 0 0 18px;
                }

                .hero-content h1 span {
                    color: #ed492d;
                }

                .hero-content p {
                    color: #707b8d;
                    font-size: 17px;
                    line-height: 1.5;
                    max-width: 600px;
                    margin-bottom: 28px;
                }

                /* Hero Button */

                .hero-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 15px;
                    padding: 14px 24px;
                    background: linear-gradient(90deg, #dc3038, #ff5425);
                    color: white;
                    border-radius: 10px;
                    text-decoration: none;
                    font-size: 15px;
                    font-weight: 600;
                    transition: 0.3s;
                }

                .hero-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px #e94b2840;
                }

                /* Social Links */

                .social-section {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    margin-top: 30px;
                    flex-wrap: wrap;
                }

                .social-section strong {
                    color: #15294a;
                    font-size: 14px;
                    margin-right: 5px;
                }

                .social-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: #fce5e3;
                    color: #e74632;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 16px;
                    text-decoration: none;
                }

                /* Large Hero Photo */

                .hero-photo {
                    width: 100%;
                    height: 480px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    border-radius: 28px;
                    background: #ffe9dc;
                    box-shadow: 0 12px 35px #102d5920;
                }

                .hero-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                }

                /* Responsive Design */

                @media (max-width: 1000px) {

                    .home-header {
                        padding: 15px 20px;
                        height: auto;
                        flex-wrap: wrap;
                        gap: 20px;
                    }

                    .home-nav {
                        gap: 20px;
                    }

                    .hero-section {
                        gap: 25px;
                        padding: 45px 25px;
                    }

                    .hero-photo {
                        height: 380px;
                    }

                    .hero-content p {
                        font-size: 16px;
                    }
                }

                @media (max-width: 700px) {

                    .home-header {
                        justify-content: center;
                    }

                    .home-nav {
                        width: 100%;
                        justify-content: center;
                        gap: 25px;
                    }

                    .header-actions {
                        justify-content: center;
                        width: 100%;
                    }

                    .hero-section {
                        grid-template-columns: 1fr;
                        padding: 40px 20px;
                    }

                    .hero-content h1 {
                        font-size: 36px;
                    }

                    .hero-content p {
                        font-size: 15px;
                    }

                    .hero-photo {
                        height: 320px;
                    }
                }
            `}</style>

            <div className="home-page">

                {/* Header */}

                <header className="home-header">

                    <Link to="/" className="brand">

                        <svg
                            className="brand-logo"
                            viewBox="0 0 48 48"
                            fill="none"
                        >
                            <path
                                d="M24 2 L43 10 V23 C43 34 34 42 24 46 C14 42 5 34 5 23 V10 Z"
                                fill="#123566"
                            />

                            <path
                                d="M24 7 L38 13 V23 C38 31 31 37 24 41 C17 37 10 31 10 23 V13 Z"
                                fill="white"
                            />

                            <path
                                d="M15 24 L22 31 L34 17"
                                stroke="#ed492d"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <div>
                            TFL<span>Insurance</span>
                        </div>

                    </Link>

                    <nav className="home-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                    </nav>

                    <div className="header-actions">

                        <Link to="/login" className="signin-btn">
                            Sign In
                        </Link>

                        <Link to="/register" className="started-btn">
                            Get Started
                        </Link>

                    </div>

                </header>

                {/* Hero Section */}

                <section className="hero-section">

                    <div className="hero-content">

                        <h1>
                            Transform Your
                            <br />
                            <span>Insurance</span> Journey
                        </h1>

                        <p>
                            Join TFLInsurance, where we are committed
                            to protecting what matters most. From life
                            to health, our insurance solutions are
                            designed to give you peace of mind.
                        </p>

                        <Link to="/services" className="hero-button">
                            Explore Our Services
                            <span>→</span>
                        </Link>

                        {/* Social Links */}

                        <div className="social-section">

                            <strong>Connect with us:</strong>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                            >
                                in
                            </a>

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                            >
                                f
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                            >
                                ▶
                            </a>

                        </div>

                    </div>

                    {/* Large Insurance Team Photo */}

                    <div className="hero-photo">

                        <img
                            src="/images/tflinsurance.png"
                            alt="TFLInsurance Team"
                            className="hero-image"
                        />

                    </div>

                </section>

            </div>
        </>
    );
}

export default Home;
