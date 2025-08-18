// src/pages/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.scss'; // Importar estilos

const AboutPage = () => {
    return (
        <div className="container">
            <h1 className={styles.pageTitle}>Sobre Mí</h1>
            <p className={styles.content}>
                Soy Manuel Barra, desarrollador Frontend afincado en la vibrante
                ciudad de Barcelona. Aunque nací en Arica, Chile, mi pasión por
                la tecnología me trajo hasta aquí, donde he podido colaborar con
                agencias de primer nivel y clientes de toda índole.
                <br />
                <br />
                Mi carrera comenzó formalmente con formaciones especializadas en
                Maquetación Web y un Full Stack Development Bootcamp, pero mi
                curiosidad es el verdadero motor. Me he enfrentado a proyectos
                para grandes marcas como Roca y Guía Repsol, donde aprendí la
                importancia de un código robusto y escalable, y también he
                ayudado a negocios más pequeños, como las bodegas Clos del
                Portal y Vins Nus, a construir su presencia online con un toque
                personal y único.
            </p>

            <h2 className={styles.skillsTitle}>Habilidades Técnicas</h2>
            <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                    <h4>Frontend</h4>
                    <ul>
                        <li>React</li>
                        <li>JavaScript (ES6+)</li>
                        <li>Vue.js</li>
                        <li>HTML5 & CSS3</li>
                        <li>SASS/SCSS</li>
                    </ul>
                </div>
                <div className={styles.skillCategory}>
                    <h4>Backend & CMS</h4>
                    <ul>
                        <li>Node.js (Básico)</li>
                        <li>PHP</li>
                        <li>WordPress</li>
                        <li>AEM / LifeRay</li>
                    </ul>
                </div>
                <div className={styles.skillCategory}>
                    <h4>Herramientas</h4>
                    <ul>
                        <li>Git & GitHub</li>
                        <li>Vite / Webpack</li>
                        <li>Figma</li>
                        <li>SEO</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
