# Portafolio Personal con Dashboard de Administración

Este es un proyecto de portafolio personal construido con React, diseñado para mostrar mis habilidades como desarrollador Frontend y mi capacidad para crear aplicaciones completas, interactivas y mantenibles.

## [Ver Demo en Vivo](https://tu-enlace-a-vercel-o-netlify.com)

---

## Descripción

Este portafolio no es solo una página estática. Incluye un dashboard de administración privado y protegido por contraseña que permite gestionar los proyectos que se muestran en la sección pública. Esto demuestra un entendimiento completo del ciclo de desarrollo, desde el frontend hasta la gestión de datos (simulada en este caso).

---

## Habilidades Demostradas en este Proyecto

#### ⚛️ **Desarrollo de Componentes con React**

- **Descripción:** La aplicación está construida sobre una arquitectura de componentes reutilizables (`Header`, `Footer`, `ProjectCard`, `Modal`). Esto demuestra la habilidad para crear un código modular, mantenible y escalable, una de las principales fortalezas de React.

#### 🔄 **Manejo de Estado (Local y Global)**

- **Descripción:** Se utiliza el hook `useState` para gestionar el estado local de los componentes (como la apertura de un menú o los datos de un formulario). Para el estado global, como la sesión del usuario, se implementa **Zustand**, una librería moderna y ligera que facilita el manejo de la autenticación en toda la aplicación de forma eficiente.

#### 🗺️ **Enrutamiento del Lado del Cliente**

- **Descripción:** Se utiliza **React Router** para crear una experiencia de Single Page Application (SPA). Se definen rutas públicas (Inicio, Proyectos) y rutas privadas (`/dashboard`) que están protegidas y solo son accesibles tras iniciar sesión, demostrando conocimiento en la protección de secciones de una web.

#### 🎨 **Estilado Moderno con SCSS**

- **Descripción:** El proyecto utiliza **SCSS con Módulos CSS** para escribir estilos de forma organizada y sin colisiones de clases. Se aprovechan características avanzadas como variables para el *theming*, *mixins* para código reutilizable (botones) y una estructura de archivos BEM-like que facilita el mantenimiento.

#### 🔧 **Simulación de API y Lógica CRUD**

- **Descripción:** Se ha creado un servicio (`projectsAPI.js`) que simula una API REST. Este servicio expone métodos para las operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) sobre los datos de los proyectos. El Dashboard interactúa con este servicio, demostrando la capacidad de trabajar con fuentes de datos externas.

---

## Cómo ejecutarlo localmente

Sigue estos pasos para levantar el proyecto en tu máquina:

1. **Clona el repositorio:**

    ```bash
    git clone [https://github.com/tu-usuario/mi-portafolio.git](https://github.com/tu-usuario/mi-portafolio.git)
    cd mi-portafolio
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Ejecuta el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:5173`.

4. **Credenciales del Dashboard:**
    - **Ruta:** `/login`
    - **Usuario:** admin
    - **Contraseña:** password
