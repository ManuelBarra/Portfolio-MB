// src/components/ui/FeaturedProject.jsx
import React from 'react';
import styles from './FeaturedProject.module.scss';

const FeaturedProject = ({ project, orientation = 'left' }) => {
    const {
        title,
        imageUrl,
        project: projectDesc,
        role,
        challenge,
        technologies,
        link,
    } = project;

    const orientationClass =
        orientation === 'right' ? styles.right : styles.left;

    return (
        <div className={`${styles.featuredProject} ${orientationClass}`}>
            <div className={styles.projectImage}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img
                        src={imageUrl}
                        alt={`Captura de pantalla de ${title}`}
                    />
                </a>
            </div>
            <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{title}</h3>

                <div className={styles.projectDetails}>
                    <p>
                        <strong>Proyecto:</strong> {projectDesc}
                    </p>
                    <p>
                        <strong>Mi Rol:</strong> {role}
                    </p>
                    <p>
                        <strong>El Desafío:</strong> {challenge}
                    </p>
                </div>

                <ul className={styles.techList}>
                    {technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                >
                    Ver proyecto en vivo ↗
                </a>
            </div>
        </div>
    );
};

export default FeaturedProject;
