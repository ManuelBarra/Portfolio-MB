// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import styles from './ContactPage.module.scss';
import { content } from '../data/content';

const ContactPage = () => {
    const contact = content.contact;
    const initialReason = contact.form.fields.reason.options[0];

    // ... (la lógica de los hooks useState, handleChange y handleSubmit no cambia)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: initialReason,
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        console.log('Datos enviados:', formData);
        setTimeout(() => {
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                reason: initialReason,
                message: '',
            });
            setTimeout(() => setStatus(''), 5000);
        }, 1500);
    };

    return (
        <div className={`container ${styles.contactPage}`}>
            <section className={styles.intro}>
                <h1>{contact.title}</h1>
                <p>{contact.intro}</p>
            </section>

            <section className={styles.formSection}>
                <h2>{contact.form.title}</h2>

                {/* --- CAMBIOS AQUÍ --- */}
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            {contact.form.fields.name.label}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder={contact.form.fields.name.placeholder}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            {contact.form.fields.email.label}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder={contact.form.fields.email.placeholder}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reason">
                            {contact.form.fields.reason.label}
                        </label>
                        <select
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                        >
                            {contact.form.fields.reason.options.map(
                                (option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                )
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">
                            {contact.form.fields.message.label}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder={
                                contact.form.fields.message.placeholder
                            }
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {status === 'success' && (
                        <p className={styles.successMessage}>
                            ¡Gracias! Tu mensaje ha sido enviado.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className={styles.errorMessage}>
                            Hubo un error. Inténtalo de nuevo.
                        </p>
                    )}

                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={status === 'sending'}
                    >
                        {status === 'sending'
                            ? 'Enviando...'
                            : contact.form.button}
                    </button>
                </form>
            </section>

            {/* ... (el resto del componente no cambia) ... */}
            <div className={styles.bottomGrid}>{/* ... */}</div>
        </div>
    );
};

export default ContactPage;
