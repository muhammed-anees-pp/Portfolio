import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="nav-logo">
                    <span>M</span> Anees
                </a>

                {/* Desktop Menu */}
                <div className="nav-menu">
                    {navLinks.map((link) => (
                        <button
                            key={link}
                            className={`nav-link ${activeSection === link ? 'active' : ''}`}
                            onClick={() => scrollToSection(link)}
                        >
                            {link}
                        </button>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mobile-menu-overlay">
                        {navLinks.map((link) => (
                            <button
                                key={link}
                                className={`mobile-nav-link ${activeSection === link ? 'active' : ''}`}
                                onClick={() => {
                                    scrollToSection(link);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
