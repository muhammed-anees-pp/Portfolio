import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'URBAN EDGE',
            description: 'Full-fledged ecommerce platform with two roles: Admin and User. Features product management, cart functionality, and order processing.',
            tech: ['Python', 'Django', 'PostgreSQL', 'ORM', 'HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/muhammed-anees-pp/URBAN-EDGE.git',
            link: null
        },
        {
            title: 'Pac-Man Game',
            description: 'A classic Pac-Man game implementation using the Pygame library, demonstrating game logic and object-oriented programming in Python.',
            tech: ['Python', 'Pygame'],
            github: 'https://github.com/muhammed-anees-pp/Pac-Man-Game.git',
            link: null
        },
        {
            title: 'Face Recognition Project',
            description: 'Real-time face recognition system utilizing Computer Vision techniques.',
            tech: ['Python', 'OpenCV'],
            github: 'https://github.com/muhammed-anees-pp/Face_Recognition.git',
            link: null
        },
        {
            title: 'B-Events',
            description: 'Comprehensive Event Management System for organizing and managing events efficiently.',
            tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
            github: 'https://github.com/muhammed-anees-pp/Event_Management-B_Events.git',
            link: null
        },
        {
            title: 'CRM-Pro',
            description: 'Customer Relationship Management (CRM) application for managing customer data and interactions.',
            tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
            github: 'https://github.com/muhammed-anees-pp/CRM-RelationPro.git',
            link: null
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="card project-card">
                            <div className="project-card-header">
                                <div className="project-icon">
                                    <Code size={40} />
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <Github size={20} />
                                    </a>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech-stack">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
