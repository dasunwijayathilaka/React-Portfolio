import React, { useEffect, useState } from 'react';
import './Styles/Services.css';

const Services: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('services');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const services = [
        {
            id: 1,
            icon: '🌐',
            title: 'Frontend Development',
            description: 'Creating responsive and interactive user interfaces using modern frameworks like React, Vue.js, and Angular with a focus on performance and user experience.',
            technologies: ['React', 'TypeScript', 'Vue.js', 'HTML5', 'CSS3', 'Sass']
        },
        {
            id: 2,
            icon: '⚙️',
            title: 'Backend Development',
            description: 'Building robust server-side applications and APIs using Node.js, Python, and various databases to ensure scalable and secure solutions.',
            technologies: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs']
        },
        {
            id: 3,
            icon: '📱',
            title: 'Mobile Development',
            description: 'Developing cross-platform mobile applications using React Native and Flutter to deliver native-like experiences across iOS and Android.',
            technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'Redux']
        },
        {
            id: 4,
            icon: '☁️',
            title: 'Cloud & DevOps',
            description: 'Implementing cloud solutions and deployment pipelines using AWS, Docker, and CI/CD practices to ensure reliable and scalable applications.',
            technologies: ['AWS', 'Docker', 'Jenkins', 'Git', 'Linux', 'Kubernetes']
        },
        {
            id: 5,
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'Designing intuitive and visually appealing interfaces with a focus on user experience, accessibility, and modern design principles.',
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Wireframing', 'Prototyping']
        },
        {
            id: 6,
            icon: '🔧',
            title: 'Technical Consulting',
            description: 'Providing expert guidance on technology stack selection, architecture design, and best practices to help businesses make informed decisions.',
            technologies: ['Architecture', 'Code Review', 'Performance', 'Security', 'Scalability', 'Strategy']
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className={`services-content ${isVisible ? 'fade-in' : ''}`}>
                    <div className="section-header">
                        <h2 className="section-title">Services</h2>
                        <p className="section-subtitle">
                            Comprehensive development solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`service-card ${isVisible ? 'slide-up' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-icon">
                                    <span>{service.icon}</span>
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <div className="service-technologies">
                                        {service.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;