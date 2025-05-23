import React from 'react';
import './Styles/About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a passionate full-stack developer with expertise in modern web technologies.
                            With a strong foundation in both frontend and backend development, I create
                            engaging and efficient digital solutions.
                        </p>
                        <p>
                            My experience spans across various programming languages and frameworks,
                            allowing me to adapt to different project requirements and deliver
                            high-quality results consistently.
                        </p>
                    </div>
                    <div className="skills">
                        <h3>Technical Skills</h3>
                        <div className="skills-grid">
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">TypeScript</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">Node.js</span>
                            <span className="skill-tag">CSS3</span>
                            <span className="skill-tag">HTML5</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;