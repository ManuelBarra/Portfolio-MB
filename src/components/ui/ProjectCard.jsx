// src/components/ui/ProjectCard.jsx
import React from 'react';
import styles from './ProjectCard.module.scss'; // Importamos los estilos

const ProjectCard = ({ title, description, imageUrl, repoUrl, demoUrl }) => {
    return (
        <div className={styles.projectCard}>
            <div className={styles.imageContainer}>
                <img
                    src={imageUrl}
                    alt={`Imagen del proyecto ${title}`}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.links}>
                    <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        Código
                    </a>
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        Ver Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
