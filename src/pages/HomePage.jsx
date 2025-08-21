// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import { content } from '../data/content';

const HomePage = () => {
    const home = content.home;

    return (
        <div className={styles.homePage}>
            {/* --- HERO SECTION --- */}
            <section className={styles.hero}>
                <h1 className={styles.mainTitle}>{home.hero.title}</h1>
                <h2 className={styles.subtitle}>{home.hero.subtitle}</h2>
                <p className={styles.description}>{home.hero.description}</p>
            </section>

            {/* --- INTRODUCTION SECTION --- */}
            <section className={styles.introduction}>
                <h2 className={styles.sectionTitle}>
                    {home.introduction.title}
                </h2>
                <p>{home.introduction.text}</p>
            </section>

            {/* --- APPROACH SECTION --- */}
            <section className={styles.approach}>
                <h2 className={styles.sectionTitle}>{home.approach.title}</h2>
                <p className={styles.sectionIntro}>{home.approach.text}</p>
                <div className={styles.pillarsGrid}>
                    {home.approach.pillars.map((pillar, index) => (
                        <div key={index} className={styles.pillarItem}>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CEBRATICA SECTION --- */}
            <section className={styles.cebratica}>
                <h2 className={styles.sectionTitle}>{home.cebratica.title}</h2>
                {home.cebratica.text.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
                <a
                    href={home.cebratica.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                >
                    {home.cebratica.button}
                </a>
            </section>

            {/* --- CTA SECTION --- */}
            <section className={styles.ctaSection}>
                <h3>{home.cta.title}</h3>
                <p>{home.cta.text}</p>
                <Link to="/contact" className={styles.ctaButton}>
                    {home.cta.button}
                </Link>
            </section>
        </div>
    );
};

export default HomePage;
