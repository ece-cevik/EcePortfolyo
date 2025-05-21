import React from 'react';
import './ContactForm.css';


const ContactForm = ({ formData, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="form-wrapper">
            <input
                type="text"
                name="name"
                placeholder="Ad Soyad"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Mail Adresi"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Mesaj"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit" className="submit-button">Gönder</button>
        </form>
    );
};

export default ContactForm;
