
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        alert("Login API is not connected yet.");
    };

    return (
        <>
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .login-page {
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 25px 15px;
                    background: #FFFCF6;
                    font-family: Arial, sans-serif;
                }

                .login-container {
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

                /* Sign In Heading */

                .login-title {
                    text-align: center;
                    font-size: 36px;
                    font-weight: bold;
                    color: #142B50;
                    margin-bottom: 12px;
                }

                .login-subtitle {
                    text-align: center;
                    color: #777777;
                    font-size: 14px;
                    margin-bottom: 40px;
                }

                /* Form */

                .form-group {
                    margin-bottom: 25px;
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

                /* Login Options */

                .login-options {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 5px 0 30px;
                    font-size: 13px;
                    gap: 10px;
                }

                .remember-me {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: #555555;
                }

                .remember-me input {
                    accent-color: #142B50;
                }

                /* Forgot Password Blue */

                .login-options a {
                    color: #142B50;
                    text-decoration: none;
                    font-weight: bold;
                }

                .login-options a:hover {
                    text-decoration: underline;
                }

                /* Login Button Blue */

                .login-button {
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
                }

                .login-button:hover {
                    background: #203F70;
                    transform: translateY(-2px);
                }

                /* New Registration Red */

                .register-text {
                    text-align: center;
                    margin-top: 30px;
                    color: #666666;
                    font-size: 14px;
                }

                .register-text a {
                    color: #D93636;
                    text-decoration: none;
                    font-weight: bold;
                }

                .register-text a:hover {
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
                    .login-container {
                        padding: 25px 5px;
                    }

                    .login-title {
                        font-size: 32px;
                    }
                }
            `}</style>

            <div className="login-page">
                <div className="login-container">

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

                    <h1 className="login-title">
                        Sign in
                    </h1>

                    <p className="login-subtitle">
                        Enter your email and password to continue.
                    </p>

                    <form onSubmit={handleLogin}>

                        <div className="form-group">
                            <label>Email or Username</label>

                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your email or username"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>

                            <div className="password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
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

                        <div className="login-options">

                            <label className="remember-me">
                                <input type="checkbox" />
                                Remember Me
                            </label>

                            <Link to="/forgot-password">
                                Forgot Password?
                            </Link>

                        </div>

                        <button
                            type="submit"
                            className="login-button"
                        >
                            Login →
                        </button>

                    </form>

                    <p className="register-text">
                        Don't have an account?{" "}
                        <Link to="/register">
                         New Registration
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

export default Login;
