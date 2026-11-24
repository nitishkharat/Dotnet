
import { useState } from "react";
import { Link } from "react-router-dom";

function Registration() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;

        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match.");
            return;
        }

        alert("Registration API is not connected yet.");
    };

    return (
        <>
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .register-page {
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 25px 15px;
                    background: #FFFCF6;
                    font-family: Arial, sans-serif;
                }

                .register-container {
                    width: 100%;
                    max-width: 420px;
                    padding: 35px 20px;
                    background: #FFFFFF;
                    border-radius: 15px;
                    box-shadow: 0 8px 25px rgba(180, 130, 70, 0.08);
                }

                /* TFL Insurance Logo */

                .insurance-logo {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 15px;
                }

                .insurance-logo svg {
                    width: 48px;
                    height: 48px;
                }

                .welcome-title {
                    text-align: center;
                    font-size: 17px;
                    font-weight: 600;
                    color: #142B50;
                    margin-bottom: 18px;
                }

                /* Registration Heading */

                .register-title {
                    text-align: center;
                    font-size: 36px;
                    font-weight: bold;
                    color: #142B50;
                    margin-bottom: 12px;
                }

                .register-subtitle {
                    text-align: center;
                    color: #777777;
                    font-size: 14px;
                    margin-bottom: 35px;
                }

                /* Form */

                .form-group {
                    margin-bottom: 22px;
                }

                .form-group label {
                    display: block;
                    text-align: left;
                    color: #142B50;
                    font-size: 14px;
                    font-weight: bold;
                    margin-bottom: 13px;
                }

                .form-group input {
                    width: 100%;
                    padding: 13px 14px;
                    border: 1px solid #E8DCCB;
                    border-radius: 10px;
                    outline: none;
                    font-size: 14px;
                    color: #333333;
                    background: #FFFCF6;
                }

                .form-group input:focus {
                    border-color: #EFB36F;
                    box-shadow: 0 0 0 3px rgba(239, 179, 111, 0.15);
                }

                .password-wrapper {
                    position: relative;
                }

                .password-wrapper input {
                    padding-right: 65px;
                }

                /* Show / Hide Blue */

                .show-password {
                    position: absolute;
                    right: 13px;
                    top: 50%;
                    transform: translateY(-50%);
                    border: none;
                    background: transparent;
                    color: #142B50;
                    font-weight: bold;
                    cursor: pointer;
                }

                /* Register Button Blue */

                .register-button {
                    width: 100%;
                    padding: 14px;
                    border: none;
                    border-radius: 30px;
                    background: #142B50;
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: 0.3s;
                    margin-top: 5px;
                }

                .register-button:hover {
                    background: #203F70;
                    transform: translateY(-2px);
                }

                /* Login Link Red */

                .login-text {
                    text-align: center;
                    margin-top: 30px;
                    color: #666666;
                    font-size: 14px;
                }

                .login-text a {
                    color: #D93636;
                    text-decoration: none;
                    font-weight: bold;
                }

                .login-text a:hover {
                    text-decoration: underline;
                }

                /* Back Home */

                .back-home {
                    display: block;
                    text-align: center;
                    margin-top: 28px;
                    color: #142B50;
                    text-decoration: none;
                    font-size: 13px;
                }

                .back-home:hover {
                    color: #EFB36F;
                }

                /* Responsive Design */

                @media (max-width: 480px) {
                    .register-container {
                        padding: 25px 5px;
                    }

                    .register-title {
                        font-size: 32px;
                    }
                }
            `}</style>

            <div className="register-page">
                <div className="register-container">

                    {/* TFL Insurance Logo */}

                    <div className="insurance-logo">
                        <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24 3L40 9V21C40 32 33 40 24 45C15 40 8 32 8 21V9L24 3Z"
                                fill="#FFF4E5"
                                stroke="#142B50"
                                strokeWidth="2.5"
                            />

                            <path
                                d="M16 23L22 29L33 17"
                                stroke="#142B50"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <h3 className="welcome-title">
                        Welcome to TFL Insurance
                    </h3>

                    <h1 className="register-title">
                        Register
                    </h1>

                    <p className="register-subtitle">
                        Enter your details to create your account.
                    </p>

                    <form onSubmit={handleRegister}>

                        {/* Username */}

                        <div className="form-group">
                            <label>Username</label>

                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        {/* Email */}

                        <div className="form-group">
                            <label>Email</label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Password */}

                        <div className="form-group">
                            <label>Password</label>

                            <div className="password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    minLength="8"
                                    required
                                />

                                <button
                                    type="button"
                                    className="show-password"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}

                        <div className="form-group">
                            <label>Confirm Password</label>

                            <div className="password-wrapper">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    minLength="8"
                                    required
                                />

                                <button
                                    type="button"
                                    className="show-password"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                >
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="register-button"
                        >
                            Register →
                        </button>

                    </form>

                    <p className="login-text">
                        Already have an account?{" "}
                        <Link to="/login">
                            Sign in
                        </Link>
                    </p>

                    <Link to="/" className="back-home">
                        ← Back to Home
                    </Link>

                </div>
            </div>
        </>
    );
}

export default Registration;
