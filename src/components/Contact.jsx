import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: '', message: '' });

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setFormStatus({ type: 'success', message: 'Message sent successfully!' });
                setIsSubmitting(false);
                e.target.reset(); 
                setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
            }, (error) => {
                console.log(error.text);
                setFormStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3 className="contact-title">Let's work together</h3>
                        <p className="contact-description">
                            I'm available for freelance work and full-time opportunities.
                            If you have a project in mind or just want to connect, feel free to send me a message!
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <Mail className="contact-icon" />
                                <span className="contact-text">muhammedanees.work@gmail.com</span>
                            </div>
                            <div className="contact-method">
                                <Phone className="contact-icon" />
                                <span className="contact-text">7306856010</span>
                            </div>
                            <div className="contact-method">
                                <MapPin className="contact-icon" />
                                <span className="contact-text">Malappuram, Kerala, India</span>
                            </div>
                        </div>

                        <div className="contact-social" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com/muhammed-anees-pp" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-body)' }}>
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/muhammed-anees-p-p/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-body)' }}>
                                <Linkedin size={24} />
                            </a>
                            <a href="https://www.instagram.com/mhdanees.pp/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-body)' }}>
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="form-input form-textarea"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : (
                                <>Send Message <Send size={16} /></>
                            )}
                        </button>

                        {formStatus.message && (
                            <div className={`form-status ${formStatus.type}`}>
                                {formStatus.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
