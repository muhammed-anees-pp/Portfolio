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
                    Anees<span>.</span>
                </a>

                {/* Desktop Menu */}
                <div className="nav-menu">
                    {navLinks.map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                scrollToSection(item);
                                setIsMenuOpen(false);
                            }}
                            className={`nav-link ${activeSection === item ? 'active' : ''}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="mobile-menu-overlay">
                    {navLinks.map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                scrollToSection(item);
                                setIsMenuOpen(false);
                            }}
                            className={`mobile-nav-link ${activeSection === item ? 'active' : ''}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
