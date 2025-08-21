// src/services/projectsAPI.js

// Datos extraídos directamente de tu CV para poblar tu portafolio.
// Cada objeto representa una experiencia laboral clave.

let projects = [
    {
        id: 1,
        title: 'Restyling Web Corporativa',
        company: 'Genomcore',
        description:
            'Responsable del desarrollo y restyling de los sitios principales de la empresa, Genomcore y MadeofGenes.',
        technologies: ['Vue.js', 'PHP', 'SASS', 'WordPress'],
        imageUrl: 'https://picsum.photos/seed/genomcore/800/600',
        repoUrl: '#',
        demoUrl: 'https://genomcore.com/',
    },
    {
        id: 2,
        title: 'Desarrollo de Plataformas Web',
        company: 'Vass (para Roca, Guía Repsol)',
        description:
            'Participé en el desarrollo de componentes y mantenimiento para clientes de gran envergadura como Roca y Guía Repsol.',
        technologies: ['JavaScript', 'jQuery', 'SASS', 'Bootstrap', 'AEM'],
        imageUrl: 'https://picsum.photos/seed/repsol/800/600',
        repoUrl: '#',
        demoUrl: 'https://www.roca.es/',
    },
    {
        id: 3,
        title: 'Sitios para Sector Inmobiliario',
        company: 'Inmotion Real Estate Media',
        description:
            'Desarrollé sitios web para el sector inmobiliario de Norte América, usando plantillas personalizadas en WordPress.',
        technologies: ['PHP', 'Vue.js', 'jQuery', 'SASS', 'WordPress'],
        imageUrl: 'https://picsum.photos/seed/inmotion/800/600',
        repoUrl: '#',
        demoUrl: 'https://www.theabbeyco.com/',
    },
    {
        id: 4,
        title: 'Gestión Web para Marca Vinícola',
        company: 'Clos del Portal y Vins Nus',
        description:
            'Gestioné y mantuve los sitios web, realizando administración de hosting, seguridad y optimización SEO.',
        technologies: ['WordPress', 'PHP', 'SEO', 'Bootstrap'],
        imageUrl: 'https://picsum.photos/seed/closdelportal/800/600',
        repoUrl: '#',
        demoUrl: 'https://www.closdelportal.com/',
    },
];

// Simula un ID autoincremental
let nextId = projects.length + 1;

// Objeto que exportaremos, simulando una API real
export const projectsAPI = {
    getProjects: () => {
        // Devuelve una copia para no mutar el array original directamente
        return [...projects];
    },

    addProject: (projectData) => {
        const newProject = {
            id: nextId++,
            ...projectData,
            // Valores por defecto para nuevos proyectos
            imageUrl:
                projectData.imageUrl || 'https://via.placeholder.com/400x250',
            repoUrl: projectData.repoUrl || '#',
            demoUrl: projectData.demoUrl || '#',
        };
        projects.push(newProject);
        return newProject;
    },

    updateProject: (id, updatedData) => {
        projects = projects.map((project) =>
            project.id === id ? { ...project, ...updatedData } : project
        );
        return projects.find((p) => p.id === id);
    },

    deleteProject: (id) => {
        projects = projects.filter((project) => project.id !== id);
        return true; // Simula éxito
    },
};
