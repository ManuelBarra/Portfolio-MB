// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss'; // Importamos los estilos actualizados

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            {/* --- SECCIÓN HERO (RETOQUES EN TEXTO) --- */}
            <section className={styles.hero}>
                <h1 className={styles.title}>
                    Desarrollo web que <br /> impulsa tu negocio.
                </h1>
                <p className={styles.subtitle}>
                    Hola, soy Manuel Barra. Convierto cafeína en código y tus
                    ideas en sitios web rápidos, funcionales y con un diseño que
                    no deja indiferente a nadie.
                </p>
                <Link to="/projects" className={styles.ctaButton}>
                    Ver mis trabajos
                </Link>
            </section>

            {/* --- NUEVA SECCIÓN: FILOSOFÍA --- */}
            <section className={styles.philosophy}>
                <h2 className={styles.sectionTitle}>
                    Mi Filosofía de Código (y de vida)
                </h2>
                <div className={styles.philosophyGrid}>
                    <div className={styles.philosophyItem}>
                        <h3>Código con sentido común</h3>
                        <p>
                            No me limito a escribir líneas; construyo soluciones
                            lógicas que tu negocio entiende y tus usuarios
                            agradecen. Si algo es complicado, lo hago simple.
                        </p>
                    </div>
                    <div className={styles.philosophyItem}>
                        <h3>Obsesionado con los detalles</h3>
                        <p>
                            Desde una animación fluida hasta una carga web
                            impecable. El éxito (y la magia) está en los
                            pequeños detalles que marcan la diferencia.
                        </p>
                    </div>
                    <div className={styles.philosophyItem}>
                        <h3>Comunicación sin rodeos</h3>
                        <p>
                            Te mantendré al tanto de todo, sin jerga técnica
                            incomprensible. Soy un miembro más de tu equipo,
                            pero uno que sabe de código.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- NUEVA SECCIÓN: CAJA DE HERRAMIENTAS --- */}
            <section className={styles.toolbox}>
                <h2 className={styles.sectionTitle}>Mi Caja de Herramientas</h2>
                <p className={styles.sectionSubtitle}>
                    No son solo logos bonitos; son las tecnologías que uso a
                    diario para construir soluciones robustas y a prueba de
                    futuro.
                </p>
                <div className={styles.techIcons}>
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>Vue.js</span>
                    <span>SCSS</span>
                    <span>Node.js</span>
                    <span>WordPress</span>
                </div>
            </section>

            {/* --- SECCIÓN CTA (SIN CAMBIOS) --- */}
            <section className={styles.ctaSection}>
                <h3>¿Listo para empezar algo grande?</h3>
                <p>
                    Si tienes un proyecto en mente o simplemente quieres charlar
                    sobre tecnología, no dudes en contactarme.
                </p>
                <Link to="/contact" className={styles.ctaButton}>
                    Hablemos
                </Link>
            </section>
        </div>
    );
};

export default HomePage;
