// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPage.module.scss';
import { content } from '../data/content';

// Pequeño componente para renderizar párrafos a partir de texto con saltos de línea
const Paragraphs = ({ text }) => {
    return text.split('\n\n').map((paragraph, index) => (
        <p key={index} style={{ marginBottom: '1em' }}>
            {paragraph}
        </p>
    ));
};

const AboutPage = () => {
    const about = content.about;

    return (
        <div className="container">
            {/* --- INTRODUCCIÓN --- */}
            <section className={styles.intro}>
                <h1>{about.title}</h1>
                <p className={styles.introText}>{about.intro}</p>
            </section>

            {/* --- TRAYECTORIA --- */}
            <section className={styles.section}>
                <h2>{about.trajectory.title}</h2>
                <div className={styles.textBlock}>
                    <h3>{about.trajectory.formation.title}</h3>
                    <Paragraphs text={about.trajectory.formation.text} />
                </div>
            </section>

            {/* --- FILOSOFÍA --- */}
            <section className={styles.section}>
                <h2>{about.philosophy.title}</h2>
                <p className={styles.sectionIntro}>{about.philosophy.intro}</p>
                <div className={styles.philosophyGrid}>
                    {about.philosophy.points.map((point) => (
                        <div
                            key={point.title}
                            className={styles.philosophyItem}
                        >
                            <h4>{point.title}</h4>
                            <p>{point.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CEBRATICA --- */}
            <section className={styles.section}>
                <h2>{about.cebratica.title}</h2>
                <div className={styles.textBlock}>
                    <Paragraphs text={about.cebratica.text} />
                    <a
                        href={about.cebratica.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        {about.cebratica.button}
                    </a>
                </div>
            </section>

            {/* --- MÁS ALLÁ DEL CÓDIGO --- */}
            <section className={styles.section}>
                <h2>{about.beyondCode.title}</h2>
                <div className={styles.textBlock}>
                    <Paragraphs text={about.beyondCode.text} />
                </div>
            </section>

            {/* --- LLAMADO A LA ACCIÓN --- */}
            <section className={`${styles.section} ${styles.ctaSection}`}>
                <h2>{about.cta.title}</h2>
                <p>{about.cta.text}</p>
                <Link to="/contact" className={styles.ctaButton}>
                    {about.cta.button}
                </Link>
            </section>
        </div>
    );
};

export default AboutPage;
