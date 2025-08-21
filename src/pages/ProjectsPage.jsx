// src/pages/ProjectsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsPage.module.scss';
import { content } from '../data/content';
import FeaturedProject from '../components/ui/FeaturedProject'; // Importamos el nuevo componente

const ProjectsPage = () => {
    const { title, intro, projectList, focus, cta } = content.projects;

    return (
        <div className="container">
            <section className={styles.intro}>
                <h1>{title}</h1>
                <p>{intro}</p>
            </section>

            <section className={styles.projectsList}>
                {projectList.map((project, index) => (
                    <FeaturedProject
                        key={project.title}
                        project={project}
                        orientation={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </section>

            <section className={styles.focusSection}>
                <h2>{focus.title}</h2>
                <p>{focus.text}</p>
                <a
                    href={focus.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                >
                    {focus.button}
                </a>
            </section>

            <section className={styles.ctaSection}>
                <h2>{cta.title}</h2>
                <p>{cta.text}</p>
                <Link to="/contact" className={styles.ctaButton}>
                    {cta.button}
                </Link>
            </section>
        </div>
    );
};

export default ProjectsPage;
