import React from 'react';
import { Terminal, Database, Globe } from 'lucide-react';
import './About.css';

const About = () => {
    const services = [
        {
            title: 'Full Stack Development',
            description: 'Building end-to-end web applications with seamless integration between frontend and backend.',
            icon: <Globe size={32} />
        },
        {
            title: 'Backend Engineering',
            description: 'Designing robust API architectures and database schemas using Python, Django, and PostgreSQL.',
            icon: <Database size={32} />
        },
        {
            title: 'Frontend Craftsmanship',
            description: 'Creating responsive, interactive user interfaces with React and modern CSS frameworks.',
            icon: <Terminal size={32} />
        }
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-intro-container">
                    <p>
                        I'm a passionate Full Stack Developer with a strong foundation in Python and modern web technologies.
                        My journey into software development is driven by a curiosity to understand how things work and a desire to build solutions that solve real-world problems.
                    </p>
                    <p>
                        With expertise in Django, React, and cloud technologies, I focus on writing clean, efficient code
                        and staying updated with the latest industry trends. When I'm not coding, I'm exploring new technologies
                        or refining my problem-solving skills on platforms like LeetCode.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="card service-card">
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p style={{ color: 'var(--text-body)' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
