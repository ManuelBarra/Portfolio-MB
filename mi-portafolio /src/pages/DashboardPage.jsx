// src/pages/DashboardPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { projectsAPI } from '../services/projectsAPI';
import ProjectForm from '../components/admin/ProjectForm';
import Modal from '../components/ui/Modal/Modal';
import styles from './DashboardPage.module.scss'; // Importar estilos

const DashboardPage = () => {
    // ... (la lógica interna no cambia)
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    useEffect(() => {
        setProjects(projectsAPI.getProjects());
    }, []);
    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    const handleOpenModal = (project = null) => {
        setEditingProject(project);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingProject(null);
    };
    const handleDelete = (id) => {
        if (
            window.confirm(
                '¿Estás seguro de que quieres eliminar este proyecto?'
            )
        ) {
            projectsAPI.deleteProject(id);
            setProjects(projectsAPI.getProjects());
        }
    };
    const handleSave = (projectData) => {
        if (editingProject) {
            projectsAPI.updateProject(editingProject.id, projectData);
        } else {
            projectsAPI.addProject(projectData);
        }
        setProjects(projectsAPI.getProjects());
        handleCloseModal();
    };

    return (
        <div className="container">
            <div className={styles.pageHeader}>
                <h1>Panel de Administración</h1>
                <button onClick={handleLogout} className={styles.logoutButton}>
                    Cerrar Sesión
                </button>
            </div>
            <p>Desde aquí puedes gestionar los proyectos de tu portafolio.</p>

            <button onClick={() => handleOpenModal()} className={styles.button}>
                + Añadir Nuevo Proyecto
            </button>

            <table className={styles.projectsTable}>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Compañía</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td>{project.title}</td>
                            <td>{project.company}</td>
                            <td>
                                <button
                                    onClick={() => handleOpenModal(project)}
                                    className={styles.actionButton}
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(project.id)}
                                    className={styles.deleteButton}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <ProjectForm
                        project={editingProject}
                        onSave={handleSave}
                        onCancel={handleCloseModal}
                    />
                </Modal>
            )}
        </div>
    );
};

export default DashboardPage;
