import React from 'react';
import './Styles/Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Portfolio</h3>
                        <p>Building digital experiences with passion and precision.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <nav className="footer-nav">
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>

                    <div className="footer-section">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                LinkedIn
                            </a>
                            <a href="#" className="social-link" aria-label="GitHub">
                                GitHub
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;