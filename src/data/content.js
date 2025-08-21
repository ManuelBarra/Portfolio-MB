// src/data/content.js

export const content = {
    home: {
        hero: {
            title: 'Del diseño a la interacción.',
            subtitle:
                'Convierto ideas visuales en experiencias web fluidas y de alto rendimiento.',
            description:
                'Soy Manuel Barra, desarrollador Frontend con experiencia construyendo las interfaces para marcas como Roca y Guía Repsol. Mi especialidad: código limpio, rendimiento optimizado y una ejecución técnica impecable del diseño.',
        },
        introduction: {
            title: 'Hola, soy Manuel. Bienvenido a mi espacio digital.',
            text: 'Con una formación como Full Stack Developer y una especialización obsesiva en el Frontend, mi trabajo consiste en ser el puente entre la visión creativa y el usuario final. Durante mi carrera, he tenido el privilegio de materializar proyectos de gran escala, desde portales internacionales para CaixaBank hasta soluciones a medida para el sector inmobiliario de Norteamérica y bodegas de autor en Cataluña.',
        },
        approach: {
            title: 'Mi filosofía: el código al servicio de la experiencia.',
            text: 'Para mí, el desarrollo Frontend es un oficio de precisión que se apoya en tres pilares fundamentales:',
            pillars: [
                {
                    title: 'Fidelidad Absoluta al Diseño',
                    text: 'Mi punto de partida es un respeto total por la visión del equipo de diseño. Mi especialidad es traducir esa visión, ya provenga de Figma o de un gestor de contenidos como AEM, en una interfaz pixel-perfect. Me encargo de que la coherencia visual y la intención creativa se mantengan intactas en cada dispositivo.',
                },
                {
                    title: 'Rendimiento como Prioridad',
                    text: 'Una interfaz bonita que es lenta, es una interfaz rota. Me enfoco en optimizar cada recurso para que los componentes dinámicos, sliders y filtros no solo funcionen, sino que vuelen. La velocidad es una parte no negociable de una buena experiencia de usuario y del SEO.',
                },
                {
                    title: 'Código Limpio y Sostenible',
                    text: 'Escribo código pensando en el futuro. Utilizo SASS, JavaScript moderno y un enfoque modular para que las plataformas sean fáciles de mantener, actualizar y escalar, ya sea un proyecto en Vue.js o un ecosistema complejo en WordPress.',
                },
            ],
        },
        cebratica: {
            title: 'La pieza que faltaba: Cebratica.',
            text: [
                'Tras años perfeccionando la ejecución técnica de interfaces para grandes marcas, entendí algo fundamental: la mejor experiencia de usuario no puede salvar una marca sin alma o con una identidad visual débil. La funcionalidad necesita una historia que contar.',
                'Por eso co-fundé Cebratica con mi hermano, un talentoso diseñador. Es el lugar donde mi experiencia Frontend se fusiona con su visión para el branding. Yo me aseguro de que la web funcione de manera impecable y se sienta increíble al usarla; él se asegura de que la marca conecte emocionalmente desde el primer vistazo.',
                'Si buscas un especialista Frontend para tu equipo o proyecto, estás en el lugar correcto. Si lo que necesitas es una solución completa de marca y web, entonces necesitas a Cebratica.',
            ],
            button: 'Descubre la solución completa en Cebratica',
            link: 'https://cebratica.com', // Asumimos este enlace
        },
        cta: {
            title: '¿Tienes un proyecto en mente?',
            text: 'Si tienes un diseño listo para cobrar vida, necesitas mejorar el rendimiento de tu web actual, o buscas un desarrollador Frontend con experiencia probada para tu equipo, me encantaría saber más.',
            button: 'Contacta conmigo',
        },
    },
    projects: {
        title: 'Proyectos Destacados',
        intro: 'Aquí presento una selección de proyectos en los que he trabajado. Cada uno representa un desafío técnico único y una oportunidad para aplicar mi enfoque en el desarrollo Frontend: crear interfaces que sean funcionales, eficientes y fieles a la visión del diseño, sin importar la escala del proyecto.',
        projectList: [
            {
                title: 'Genomcore',
                imageUrl: 'https://picsum.photos/seed/genomcore-new/1200/800',
                project:
                    'Restyling y desarrollo integral de los principales sitios de la compañía de biotecnología, Genomcore y MadeofGenes.',
                role: 'Frontend Developer, responsable de todo el desarrollo web de los sitios.',
                challenge:
                    'Modernizar la presencia digital de la empresa, creando una interfaz limpia, profesional y escalable que reflejara su posicionamiento en un sector altamente innovador.',
                technologies: [
                    'JavaScript',
                    'PHP',
                    'Vue.js',
                    'jQuery',
                    'Bootstrap',
                    'SASS',
                    'WordPress',
                ],
                link: 'https://genomcore.com/',
            },
            {
                title: 'Vass para Roca & Guía Repsol',
                imageUrl: 'https://picsum.photos/seed/roca-new/1200/800',
                project:
                    'Desarrollo, mantenimiento y gestión de plataformas web para clientes corporativos de gran escala como Roca, Guía Repsol y AgroBank Hub.',
                role: 'Frontend Developer.',
                challenge:
                    'Trabajar en ecosistemas web complejos, incluyendo portales internacionales. Mi labor se centró en crear componentes dinámicos, interfaces responsivas, sliders con filtros por categorías y asegurar el soporte técnico continuo.',
                technologies: [
                    'JavaScript',
                    'jQuery',
                    'SASS',
                    'Bootstrap',
                    'AEM',
                    'LifeRay',
                    'Figma',
                ],
                link: 'https://www.roca.es/',
            },
            {
                title: 'Inmotion Real Estate Media',
                imageUrl: 'https://picsum.photos/seed/inmotion-new/1200/800',
                project:
                    'Desarrollo de sitios web para el sector inmobiliario de Norteamérica.',
                role: 'Frontend Developer.',
                challenge:
                    'Crear soluciones web flexibles y personalizables. La clave fue el desarrollo de plantillas a medida en WordPress, utilizando PHP, Vue.js y Custom Post Types para una gestión de contenidos avanzada y sencilla para el cliente final.',
                technologies: [
                    'JavaScript',
                    'PHP',
                    'Vue.js',
                    'jQuery',
                    'Bootstrap',
                    'SASS',
                    'WordPress',
                ],
                link: 'https://multifamilyfirm.com/',
            },
            {
                title: 'Clos del Portal y Vins Nus',
                imageUrl: 'https://picsum.photos/seed/vinsnus-new/1200/800',
                project:
                    'Gestión y mantenimiento web para dos marcas vinícolas de Cataluña.',
                role: 'Frontend Developer.',
                challenge:
                    'Encargarme de la gestión integral de los sitios, incluyendo la administración de hosting y bases de datos. Mi trabajo también consistió en implementar mejoras de seguridad y optimización SEO para aumentar su visibilidad y rendimiento.',
                technologies: [
                    'JavaScript',
                    'PHP',
                    'jQuery',
                    'Bootstrap',
                    'SASS',
                    'WordPress',
                ],
                link: 'https://vinsnus.com/',
            },
        ],
        focus: {
            title: 'Evolución y Colaboración: Cebratica',
            text: 'Mi experiencia en estos proyectos me ha enseñado que el éxito de una web no depende solo de la calidad de su código. Por eso, mi enfoque principal ahora está en Cebratica, el estudio que co-fundé con mi hermano. En Cebratica, no solo entrego un Frontend impecable, sino que lo integro desde el inicio con una estrategia de marca sólida. Es la evolución natural de mi trabajo, donde la técnica y el diseño colaboran para crear un resultado final mucho más potente.',
            button: 'Ver nuestros proyectos en Cebratica',
            link: 'https://cebratica.com',
        },
        cta: {
            title: '¿Tienes un diseño que necesite una ejecución impecable?',
            text: 'Si te gusta lo que has visto y necesitas un especialista Frontend para dar vida a tu proyecto o para unirte a tu equipo, hablemos.',
            button: 'Contacta conmigo',
        },
    },
    about: {
        title: 'Hola, soy Manuel Barra.',
        intro: 'Soy un desarrollador Frontend con base en Barcelona, y mi trabajo es ser el puente entre una gran idea y una experiencia digital impecable. Nací en Arica, Chile, pero mi carrera profesional ha echado raíces aquí en España, donde he tenido la oportunidad de crecer y colaborar en proyectos para marcas que respeto y admiro.',
        trajectory: {
            title: 'Mi Trayectoria: Un Camino de Código y Aprendizaje',
            formation: {
                title: 'Mi Formación',
                text: 'Mi viaje en el desarrollo web comenzó con una curiosidad innata por construir cosas en internet. Para darle una base sólida a esa pasión, me formé primero en Maquetación Web en la Escola Espai. Poco después, decidí sumergirme de lleno y potenciar mis habilidades con un riguroso Bootcamp de Full Stack Development en ISDI Coders. \n\nEsta combinación de formación en diseño y desarrollo intensivo me proporcionó la base técnica y la visión integral sobre la que he construido mi carrera, permitiéndome afrontar desde el restyling de un sitio web hasta el mantenimiento de complejas plataformas internacionales.',
            },
        },
        philosophy: {
            title: 'Cómo entiendo mi profesión',
            intro: 'Más allá de las tecnologías y los lenguajes de programación, creo que el éxito de un proyecto reside en la forma de trabajar. Mi enfoque se basa en principios claros:',
            points: [
                {
                    title: 'Colaboración y Responsabilidad',
                    text: 'Me integro con naturalidad en los equipos de trabajo, asumiendo la responsabilidad de mi parte del proyecto para que el engranaje funcione a la perfección.',
                },
                {
                    title: 'Resolución de Problemas',
                    text: 'No me limito a ejecutar tareas. Me implico en el proyecto para encontrar la solución más eficiente y robusta a cada desafío técnico que se presenta.',
                },
                {
                    title: 'Organización y Puntualidad',
                    text: 'La planificación y el cumplimiento de los plazos son fundamentales para mí. Creo que la confianza se construye con un trabajo bien hecho y entregado a tiempo.',
                },
            ],
        },
        cebratica: {
            title: 'La pieza que faltaba: Cebratica',
            text: 'Después de años trabajando en distintas empresas y agencias, sentí la necesidad de crear algo propio. Un lugar donde la excelencia técnica y un diseño excepcional no fueran dos departamentos separados, sino el núcleo de un mismo equipo. \n\nAsí nació Cebratica, el estudio que he co-fundado con mi hermano. Él es el genio creativo; yo, el encargado de que esa creatividad se transforme en una experiencia web funcional, rápida e impecable. Es la culminación de mi viaje profesional y el proyecto que, a día de hoy, más me ilusiona.',
            button: 'Conoce nuestro estudio: Cebratica',
            link: 'https://cebratica.com',
        },
        beyondCode: {
            title: 'Cuando no estoy programando',
            text: 'Cuando cierro el editor de código, una de mis grandes pasiones es la producción musical. Es un universo creativo sorprendentemente similar al desarrollo: se trata de estructura, armonía, capas y la búsqueda de un resultado final que conecte y emocione. \n\nAdemás, mi nivel de inglés intermedio (B1) me permite comunicarme y colaborar sin problemas en equipos de trabajo internacionales.',
        },
        cta: {
            title: 'Conectemos',
            text: 'Gracias por tomarte el tiempo de conocer mi historia. Si mi perfil y mi forma de trabajar encajan con lo que buscas, me encantaría saber de ti.',
            button: 'Hablemos de tu proyecto',
        },
    },
    contact: {
        title: 'Contacto',
        intro: 'Gracias por tu interés en mi trabajo. Si tienes un proyecto en mente, una consulta técnica o simplemente quieres conectar, este es el lugar. La forma más eficiente para contactarme es a través del siguiente formulario, ya que me ayuda a gestionar todas las solicitudes de manera ordenada.',
        form: {
            title: 'Envíame un mensaje',
            fields: {
                name: {
                    label: 'Tu Nombre',
                    placeholder: 'Nombre y Apellido',
                },
                email: {
                    label: 'Tu Email',
                    placeholder: 'tu@email.com',
                },
                reason: {
                    label: 'Motivo de la Consulta',
                    options: [
                        'Consulta Técnica Frontend',
                        'Propuesta de Colaboración',
                        'Oportunidad Laboral',
                        'Otro',
                    ],
                },
                message: {
                    label: 'Tu Mensaje',
                    placeholder:
                        'Hola Manuel, te escribo porque estoy buscando un desarrollador Frontend para...',
                },
            },
            button: 'Enviar Mensaje',
        },
        directContact: {
            title: '¿Prefieres un contacto más directo?',
            text: 'Si tu consulta no se ajusta al formulario, puedes utilizar mis datos de contacto profesionales.',
            methods: [
                {
                    label: 'Email',
                    value: 'manuelbarralazo@gmail.com',
                    href: 'mailto:manuelbarralazo@gmail.com',
                },
                {
                    label: 'Teléfono',
                    value: '(+34) 634 008 260',
                    href: 'tel:+34634008260',
                },
                {
                    label: 'Ubicación',
                    value: 'Barcelona, España.',
                },
            ],
        },
        cebratica: {
            title: '¿Buscas una solución integral de Marca y Web?',
            text: 'Te recuerdo que mi foco principal para proyectos integrales es Cebratica. Si tu necesidad incluye no solo desarrollo Frontend, sino también diseño de marca, estrategia y una solución completa, te invito a que contactes a través de nuestro estudio. Allí, mi hermano y yo ofrecemos el paquete completo.',
            button: 'Visitar la web de Cebratica',
            link: 'https://cebratica.com',
        },
    },
};
