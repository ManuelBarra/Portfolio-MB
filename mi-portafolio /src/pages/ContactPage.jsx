// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import styles from './ContactPage.module.scss'; // 1. Importar los estilos

const ContactPage = () => {
    // 2. Estados para manejar los datos del form y el feedback
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState(''); // success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulación de envío a un backend
        console.log('Datos enviados:', formData);
        setTimeout(() => {
            // Simulamos una respuesta exitosa
            setStatus('success');
            setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
            // Volver a ocultar el mensaje después de 5 segundos
            setTimeout(() => setStatus(''), 5000);
        }, 1500);
    };

    return (
        <div className="container">
            <h1 className={styles.pageTitle}>Cuéntame tu idea</h1>
            <p className={styles.subtitle}>
                ¿Tienes una pregunta o un proyecto en mente? Me encantaría saber
                de ti. Rellena el formulario y me pondré en contacto contigo lo
                antes posible.
            </p>

            {/* 3. Conectar el formulario a la lógica */}
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Tu Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Tu Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Tu Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                {/* 4. Mostrar mensajes de estado */}
                {status === 'success' && (
                    <p className={styles.successMessage}>
                        ¡Gracias por tu mensaje! Te responderé pronto.
                    </p>
                )}
                {status === 'error' && (
                    <p className={styles.errorMessage}>
                        Hubo un error al enviar el mensaje. Inténtalo de nuevo.
                    </p>
                )}

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
