// src/components/layout/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.scss'; // Importamos los estilos

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p>Diseñado y construido por Manuel Barra &copy; {currentYear}</p>
            <p>
                Hecho con{' '}
                <a
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                >
                    React
                </a>{' '}
                y mucho{' '}
                <span role="img" aria-label="café">
                    ☕
                </span>
            </p>
        </footer>
    );
};

export default Footer;
