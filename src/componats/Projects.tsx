import React, { useEffect, useState } from 'react';
import './Styles/Projects.css';

const Projects: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>('all');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('projects');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
            image: '🛒',
            category: 'fullstack',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
            image: '📋',
            category: 'frontend',
            technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false
        },
        {
            id: 3,
            title: 'Weather Forecast App',
            description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts.',
            image: '🌤️',
            category: 'frontend',
            technologies: ['Vue.js', 'API Integration', 'Chart.js', 'CSS3'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false
        },
        {
            id: 4,
            title: 'Social Media Dashboard',
            description: 'A comprehensive analytics dashboard for social media management with data visualization and reporting.',
            image: '📊',
            category: 'fullstack',
            technologies: ['React', 'Express', 'PostgreSQL', 'D3.js'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        },
        {
            id: 5,
            title: 'Restaurant Booking System',
            description: 'An online reservation system for restaurants with table management, customer profiles, and email notifications.',
            image: '🍽️',
            category: 'fullstack',
            technologies: ['Angular', 'Node.js', 'MySQL', 'Socket.io'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false
        },
        {
            id: 6,
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.',
            image: '💼',
            category: 'frontend',
            technologies: ['React', 'TypeScript', 'CSS3', 'Framer Motion'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false
        }
    ];

    const filterCategories = ['all', 'frontend', 'fullstack'];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className={`projects-content ${isVisible ? 'fade-in' : ''}`}>
                    <div className="section-header">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">
                            A showcase of my recent work and technical expertise
                        </p>
                    </div>

                    <div className="filter-tabs">
                        {filterCategories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${filter === category ? 'active' : ''}`}
                                onClick={() => setFilter(category)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`project-card ${project.featured ? 'featured' : ''} ${isVisible ? 'slide-up' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="project-image">
                                    <div className="project-icon">{project.image}</div>
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <a href={project.liveUrl} className="project-link live" target="_blank" rel="noopener noreferrer">
                                                <span>🔗</span> Live Demo
                                            </a>
                                            <a href={project.githubUrl} className="project-link github" target="_blank" rel="noopener noreferrer">
                                                <span>📁</span> View Code
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <div className="project-header">
                                        <h3 className="project-title">{project.title}</h3>
                                        {project.featured && <span className="featured-badge">Featured</span>}
                                    </div>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-technologies">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="projects-footer">
                        <p className="projects-footer-text">
                            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
                        </p>
                        <a href="https://github.com" className="btn primary" target="_blank" rel="noopener noreferrer">
                            View All Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;