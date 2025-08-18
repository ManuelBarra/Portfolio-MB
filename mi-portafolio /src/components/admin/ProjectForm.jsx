// src/components/admin/ProjectForm.jsx
import React, { useState, useEffect } from 'react';

const styles = {
    form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    input: { padding: '0.5rem' },
    button: { padding: '0.7rem', cursor: 'pointer' },
};

const ProjectForm = ({ project, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        description: '',
        technologies: '', // Lo manejaremos como un string separado por comas
    });

    useEffect(() => {
        if (project) {
            setFormData({
                ...project,
                technologies: project.technologies.join(', '),
            });
        }
    }, [project]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSave = {
            ...formData,
            technologies: formData.technologies
                .split(',')
                .map((tech) => tech.trim()),
        };
        onSave(dataToSave);
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2>{project ? 'Editar Proyecto' : 'Añadir Proyecto'}</h2>
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Título del proyecto"
                required
                style={styles.input}
            />
            <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Compañía / Cliente"
                style={styles.input}
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descripción"
                required
                rows="4"
                style={styles.input}
            ></textarea>
            <input
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="Tecnologías (separadas por coma)"
                style={styles.input}
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '1rem',
                }}
            >
                <button type="button" onClick={onCancel} style={styles.button}>
                    Cancelar
                </button>
                <button
                    type="submit"
                    style={{
                        ...styles.button,
                        backgroundColor: 'var(--primary-color)',
                    }}
                >
                    Guardar
                </button>
            </div>
        </form>
    );
};

export default ProjectForm;
