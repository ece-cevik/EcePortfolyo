import React, { useState } from 'react';
import './Contact.css';
import Particle from './Particle';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mesajınız gönderildi!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (

        <div name="contact" className="contact-container">
            <Particle />
            <div className="contact-inner">
                <div>
                    <p className="contact-title">İletişim</p>
                    <p className="contact-subtitle">Aşağıdaki formu doldurarak benimle iletişime geçebilirsin</p>
                </div>


                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        placeholder="Ad Soyad"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Mail Adresi"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        placeholder="Mesaj"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="contact-button">Gönder</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
