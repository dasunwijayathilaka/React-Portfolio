import React, { useEffect, useState } from 'react';
import './Styles/Home.css';

const Home: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="home-section">
            <div className="container">
                <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Hello, I'm <span className="highlight">John Doe</span>
                        </h1>
                        <h2 className="hero-subtitle">Full Stack Developer</h2>
                        <p className="hero-description">
                            I craft digital experiences that combine beautiful design with
                            robust functionality. Specializing in modern web technologies
                            and creating solutions that make a difference.
                        </p>
                        <div className="hero-actions">
                            <button
                                className="btn primary"
                                onClick={() => handleScrollToSection('about')}
                            >
                                Learn More
                            </button>
                            <button
                                className="btn secondary"
                                onClick={() => handleScrollToSection('contact')}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="profile-card">
                            <div className="profile-image">
                                <div className="placeholder-avatar">JD</div>
                            </div>
                            <div className="profile-info">
                                <h3>John Doe</h3>
                                <p>Full Stack Developer</p>
                                <div className="status-indicator">
                                    <span className="status-dot"></span>
                                    Available for work
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;