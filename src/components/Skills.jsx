import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'Python', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'React', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Tech Stack</h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percent">{skill.level}%</span>
                            </div>
                            <div className="skill-track">
                                <div
                                    className="skill-bar"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="other-skills-container">
                    <h3 className="other-skills-title">Other Technologies</h3>
                    <div className="other-skills-list">
                        {['Git', 'GitHub', 'CI/CD', 'Redux', 'REST APIs', 'Bootstrap', 'Linux', 'DSA'].map((tech, i) => (
                            <span key={i} className="skill-badge">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
