// src/pages/ProjectsPage.jsx
import React from 'react';
import { projectsAPI } from '../services/projectsAPI';
import ProjectCard from '../components/ui/ProjectCard';
import styles from './ProjectsPage.module.scss'; // Importar estilos

const ProjectsPage = () => {
    const projects = projectsAPI.getProjects();

    return (
        <div className="container">
            <h1 className={styles.pageTitle}>Mis Proyectos</h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
                Aquí puedes ver una selección de los proyectos en los que he
                trabajado.
            </p>
            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        repoUrl={project.repoUrl}
                        demoUrl={project.demoUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
