import React, { useState, useEffect } from 'react';
import './Styles/Navbar.css';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-brand">
                        <a href="#home" onClick={() => handleNavClick('home')}>
                            Portfolio
                        </a>
                    </div>

                    <ul className={`navbar-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        <li>
                            <a href="#home" onClick={() => handleNavClick('home')}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => handleNavClick('about')}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => handleNavClick('contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <button
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;