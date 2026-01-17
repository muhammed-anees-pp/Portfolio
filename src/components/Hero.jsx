import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import profileImg from '../assets/profile.png';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-grid">
                <div className="hero-content fade-in">
                    <p className="hero-greeting">
                        Hello, I'm
                    </p>
                    <h1 className="hero-title">
                        Muhammed <br />
                        <span style={{ color: 'var(--text-body)' }}>Anees P P</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        Python Full Stack Developer
                    </h2>
                    <p className="hero-desc">
                        Crafting robust web applications with Python, Django, and React.
                        Passionate about building scalable solutions and clean, maintainable code.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                            View My Work
                        </button>
                        <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                            Contact Me
                        </button>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/muhammed-anees-pp" target="_blank" rel="noopener noreferrer">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammed-anees-p-p/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://www.instagram.com/mhdanees.pp/" target="_blank" rel="noopener noreferrer">
                            <Instagram size={24} />
                        </a>
                        <a href="mailto:muhammedanees.work@gmail.com">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="hero-image-container fade-in">
                    <div className="hero-bg-glow"></div>
                    <img
                        src={profileImg}
                        alt="Muhammed Anees"
                        className="hero-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
