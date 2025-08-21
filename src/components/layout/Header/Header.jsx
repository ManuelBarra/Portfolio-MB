import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
// Asumo que tu logo está en assets/images/. Si no, crea esa carpeta.
import logoImage from '../../../assets/images/mb-logo.png';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    // --- MEJORA 1: Bloqueo de scroll ---
    // Este efecto se ejecuta cada vez que 'isMenuOpen' cambia.
    useEffect(() => {
        if (isMenuOpen) {
            // Añade una clase al body para deshabilitar el scroll
            document.body.classList.add('body-no-scroll');
        } else {
            // La elimina cuando el menú se cierra
            document.body.classList.remove('body-no-scroll');
        }

        // Función de limpieza: se asegura de eliminar la clase si el componente se desmonta
        return () => {
            document.body.classList.remove('body-no-scroll');
        };
    }, [isMenuOpen]);

    // Efecto para detectar el scroll (sin cambios)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);
    const closeMenu = () => setMenuOpen(false);

    const headerClasses = `${styles.header} ${
        isScrolled ? styles.scrolled : ''
    }`;
    const mobileNavClasses = `${styles.mobileNav} ${
        isMenuOpen ? styles.open : ''
    }`;

    return (
        <header className={headerClasses}>
            <div className={styles.logo}>
                <NavLink to="/" onClick={closeMenu}>
                    <img
                        src={logoImage}
                        alt="Logo de mi portafolio"
                        className={styles.logoImage}
                    />
                </NavLink>
            </div>

            {/* Navegación para Desktop (sin cambios) */}
            <nav className={styles.desktopNav}>
                <ul className={styles.navList}>
                    <li>
                        <NavLink to="/">_inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">_proyectos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">_sobre_mí</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">_contacto</NavLink>
                    </li>
                </ul>
                <a
                    href="/CV-Manuel-Barra.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resumeButton}
                >
                    Mi CV
                </a>
            </nav>

            {/* Botón de Hamburguesa para Móvil */}
            <button
                className={`${styles.hamburger} ${
                    isMenuOpen ? styles.open : ''
                }`}
                onClick={toggleMenu}
                // --- MEJORA 2: Accesibilidad Dinámica ---
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
                <div />
                <div />
                <div />
            </button>

            {/* Navegación para Móvil (sin cambios en JSX) */}
            <div className={mobileNavClasses}>
                <nav>
                    <ul className={styles.mobileNavList}>
                        <li>
                            <NavLink to="/" onClick={closeMenu}>
                                _inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" onClick={closeMenu}>
                                _proyectos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={closeMenu}>
                                _sobre_mí
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={closeMenu}>
                                _contacto
                            </NavLink>
                        </li>
                    </ul>
                    <a
                        href="/CV-Manuel-Barra.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeButtonMobile}
                    >
                        Mi CV
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
