
import { useState } from "react";

function Insurance_Info() {

    const [selectedPopup, setSelectedPopup] = useState("");

    const components = [
        "Policies",
        "Proposals",
        "Agents",
        "Claims",
        "Rejected Policy"
    ];

    return (
        <div style={styles.page}>

            <style>
                {`
                    @keyframes blueGlow {
                        0%, 100% {
                            color: #142B50;
                        }

                        50% {
                            color: #5B8DB8;
                        }
                    }

                    @keyframes photoSwing {
                        0%, 100% {
                            transform: rotate(5deg);
                        }

                        50% {
                            transform: rotate(-5deg);
                        }
                    }

                    .welcome-heading {
                        animation: blueGlow 3s ease-in-out infinite;
                    }

                    .hanging-photo {
                        animation: photoSwing 4s ease-in-out infinite;
                        transform-origin: top center;
                    }

                    .component-card {
                        transition: all 0.3s ease;
                    }

                    .component-card:hover {
                        background-color: #D5E4F5 !important;
                        transform: translateY(-5px);
                        box-shadow: 0 6px 15px rgba(20,43,80,0.12);
                    }

                    @media (max-width: 600px) {
                        .hero-section {
                            flex-direction: column;
                            gap: 20px;
                            padding-top: 35px !important;
                        }

                        .welcome-heading {
                            font-size: 27px !important;
                        }

                        .hanging-photo {
                            width: 180px !important;
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .welcome-heading,
                        .hanging-photo {
                            animation: none;
                        }
                    }
                `}
            </style>

            {/* Header */}
            <div style={styles.header}>

                <div className="hero-section" style={styles.heroSection}>

                    {/* Left Side Heading */}
                    <div style={styles.headingContainer}>

                        <h1
                            className="welcome-heading"
                            style={styles.heading}
                        >
                            Welcome to TFL Insurance
                        </h1>

                        <p style={styles.subtitle}>
                            Your protection, our priority.
                        </p>

                    </div>

                    {/* Right Side Hanging Photo */}
                    <div style={styles.photoArea}>

                        <div style={styles.hangingRod}></div>

                        <div
                            className="hanging-photo"
                            style={styles.hangingPhoto}
                        >

                            <div style={styles.stringLeft}></div>
                            <div style={styles.stringRight}></div>

                            <img
                                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600"
                                alt="Happy family"
                                style={styles.photo}
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Components */}
            <div style={styles.container}>

                <div style={styles.componentGrid}>

                    {components.map((item) => (

                        <div
                            key={item}
                            className="component-card"
                            style={styles.componentCard}
                            onClick={() => setSelectedPopup(item)}
                        >
                            {item}
                        </div>

                    ))}

                </div>

            </div>

            {/* Popup */}
            {selectedPopup && (

                <div
                    style={styles.overlay}
                    onClick={() => setSelectedPopup("")}
                >

                    <div
                        style={styles.popup}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            style={styles.closeButton}
                            onClick={() => setSelectedPopup("")}
                        >
                            ×
                        </button>

                        <h2 style={styles.popupTitle}>
                            {selectedPopup}
                        </h2>

                        <p style={styles.popupText}>
                            Welcome to {selectedPopup} section.
                        </p>

                        <button
                            style={styles.popupButton}
                            onClick={() => setSelectedPopup("")}
                        >
                            Close
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
}

const styles = {

    page: {
        minHeight: "100vh",
        backgroundColor: "#FFFCF6",
        fontFamily: "Arial, sans-serif"
    },

    header: {
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E8DCCB",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        overflow: "hidden"
    },

    heroSection: {
        maxWidth: "1100px",
        minHeight: "260px",
        margin: "auto",
        padding: "30px 25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "30px"
    },

    headingContainer: {
        flex: 1
    },

    heading: {
        fontSize: "38px",
        fontWeight: "bold",
        marginBottom: "12px"
    },

    subtitle: {
        color: "#777777",
        fontSize: "15px"
    },

    photoArea: {
        width: "270px",
        height: "230px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        flexShrink: 0
    },

    hangingRod: {
        position: "absolute",
        top: "5px",
        left: 0,
        width: "100%",
        height: "5px",
        backgroundColor: "#B58A55",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.15)"
    },

    hangingPhoto: {
        position: "relative",
        marginTop: "10px",
        width: "190px",
        height: "190px",
        padding: "9px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8DCCB",
        borderRadius: "8px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.15)"
    },

    stringLeft: {
        position: "absolute",
        width: "2px",
        height: "35px",
        backgroundColor: "#B58A55",
        top: "-40px",
        left: "20px"
    },

    stringRight: {
        position: "absolute",
        width: "2px",
        height: "35px",
        backgroundColor: "#B58A55",
        top: "-40px",
        right: "20px"
    },

    photo: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "5px"
    },

    container: {
        maxWidth: "1100px",
        margin: "auto",
        padding: "50px 25px"
    },

    componentGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "25px"
    },

    componentCard: {
        backgroundColor: "#E8F0FA",
        color: "#142B50",
        padding: "30px 20px",
        borderRadius: "12px",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold",
        border: "1px solid #D2DFEF",
        cursor: "pointer",
        boxShadow: "0 3px 8px rgba(20,43,80,0.06)"
    },

    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
        zIndex: 1000
    },

    popup: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        maxWidth: "450px",
        padding: "35px 25px",
        borderRadius: "15px",
        textAlign: "center",
        position: "relative",
        boxShadow: "0 5px 25px rgba(0,0,0,0.15)"
    },

    closeButton: {
        position: "absolute",
        top: "10px",
        right: "15px",
        border: "none",
        background: "none",
        fontSize: "28px",
        color: "#142B50",
        cursor: "pointer"
    },

    popupTitle: {
        color: "#142B50",
        marginBottom: "15px"
    },

    popupText: {
        color: "#666666",
        fontSize: "15px",
        marginBottom: "25px"
    },

    popupButton: {
        backgroundColor: "#142B50",
        color: "#FFFFFF",
        border: "none",
        padding: "10px 30px",
        borderRadius: "7px",
        cursor: "pointer",
        fontSize: "15px"
    }

};

export default Insurance_Info;
