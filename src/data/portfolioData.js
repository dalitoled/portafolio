export const portfolioData = {
  personal: {
    name: 'Daniel Ledezma Castro',
    title: 'Ingeniero de Sistemas',
    subtitle: 'Desarrollador Full Stack | Automatización | Inteligencia Artificial | Ciberseguridad | Soluciones Tecnológicas',
    description: 'Ingeniero de Sistemas con más de 3 años de experiencia transformando ideas en soluciones digitales de alto impacto. Especializado en desarrollo web full stack, aplicaciones móviles, automatización de procesos e inteligencia artificial. Apasionado por crear sistemas robustos y escalables que optimizan operaciones y potencian el crecimiento empresarial.',
    email: 'ledezmacastrodaniel@gmail.com',
    location: 'Bolivia',
    phone: '+591 72729907',
    cvUrl: 'https://drive.google.com/drive/folders/1NQTeTIZR0WnTg78paEnhbFmx1rwPUzVu?usp=drive_link',
  },
  stats: [
    { value: 20, suffix: '+', label: 'Proyectos Completados', prefix: '+' },
    { value: 100, suffix: '%', label: 'Compromiso', prefix: '' },
    { value: 3, suffix: '+', label: 'Años de Experiencia', prefix: '+' },
  ],
  skills: {
    frontend: {
      title: 'Frontend',
      icon: 'Code2',
      items: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'Vue.js', level: 88 },
        { name: 'React', level: 85 },
        { name: 'TailwindCSS', level: 90 },
      ],
    },
    backend: {
      title: 'Backend',
      icon: 'Server',
      items: [
        { name: 'PHP', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Laravel', level: 88 },
      ],
    },
    databases: {
      title: 'Bases de Datos',
      icon: 'Database',
      items: [
        { name: 'MySQL', level: 92 },
        { name: 'SQL Server', level: 85 },
      ],
    },
    ai: {
      title: 'Inteligencia Artificial',
      icon: 'Brain',
      items: [
        { name: 'OpenAI', level: 85 },
        { name: 'ComfyUI', level: 80 },
        { name: 'Automatización IA', level: 88 },
        { name: 'Prompt Engineering', level: 90 },
      ],
    },
    tools: {
      title: 'Herramientas',
      icon: 'Wrench',
      items: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 92 },
        
        { name: 'Linux', level: 85 },
      ],
    },
    other: {
      title: 'Otros',
      icon: 'Layers',
      items: [
        { name: 'Ciberseguridad', level: 75 },
        { name: 'APIs REST', level: 92 },
        { name: 'Firebase', level: 82 },
        { name: 'Automatización', level: 90 },
      ],
    },
  },
  experience: [
    {
      year: '2024 - Presente',
      title: 'Desarrollador Full Stack Junior',
      company: 'Freelance / Consultoría',
      description: 'Liderando proyectos de desarrollo web, aplicaciones móviles e integración de IA para diversos clientes. Implementación de sistemas de gestión y automatización de procesos.',
    },
    {
      year: '2023 - Presente',
      title: 'Desarrollador de Aplicaciones Móviles',
      company: 'Proyectos Empresariales',
      description: 'Desarrollo de aplicaciones móviles empresariales con integración de APIs y bases de datos en tiempo real. Optimización de rendimiento y experiencia de usuario.',
    },
    {
      year: '2025 - Presente',
      title: 'Especialista en Automatización e IA',
      company: 'Automatización de Procesos',
      description: 'Implementación de soluciones de automatización con inteligencia artificial, integración de ChatGPT en aplicaciones empresariales y optimización de flujos de trabajo.',
    },
    {
      year: '2022 - Presente',
      title: 'Desarrollador Backend',
      company: 'Sistemas de Gestión',
      description: 'Desarrollo de sistemas de gestión, asociaciones de agua potable, OTBs y avícolas. Implementación de bases de datos robustas y APIs RESTful.',
    },
    {
      year: '2023 - Presente',
      title: 'Desarrollador Web ',
      company: 'Primeros Proyectos',
      description: 'Inicio en el desarrollo web con proyectos freelance, creación de sitios web responsivos y sistemas básicos de gestión.',
    },

    {
      year: '2025 - Presente',
      title: 'Proyectos Domóticos',
      company: 'Automatización de Sistemas',
      description: 'Implementación y desarrollo de sistemas integrados de producción con actuadores, sensores y control domótico e IoT ',
    },
  ],
  projects: [
    
    {
      id: 2,
      title: 'Sistema Asociaciones Agua Potable',
      description: 'Plataforma de gestión para asociaciones de agua potable con control de socios, pagos, lecturas de medidores y reportes.',
      image: '',
      technologies: ['PHP', 'React', 'Firebase', 'TailwindCSS'],
      category: 'fullstack',
      github: '#',
      url: '#',
    },
    {
      id: 3,
      title: 'Sistema para OTBs',
      description: 'Sistema de gestión administrativa para Organizaciones Territoriales de Base con control de membresías y eventos.',
      image: '',
      technologies: ['Vue.js', 'PHP', 'MySQL', 'JavaScript'],
      category: 'fullstack',
      github: '#',
      url: '#',
    },
    {
      id: 4,
      title: 'Sistema para Avícolas',
      description: 'Plataforma de gestión avícola con control de producción, inventario, lotes y trazabilidad de productos movíl y web.',
      image: '',
      technologies: ['React', 'Node.js', 'SQL Server'],
      category: 'fullstack',
      github: '#',
      url: '#',
    },
    {
      id: 5,
      title: 'Automatización con IA',
      description: 'Sistema de automatización de procesos empresariales utilizando inteligencia artificial y modelos de lenguaje.',
      image: '',
      technologies: ['OpenAI', 'Node.js', 'Python'],
      category: 'ai',
      github: '#',
      url: '#',
    },
    {
      id: 6,
      title: 'Aplicaciones Móviles',
      description: 'Desarrollo de aplicaciones móviles empresariales con integración de APIs, notificaciones push y tiempo real.',
      image: '',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      category: 'mobile',
      github: '#',
      url: '#',
    },
  ],
  services: [
    {
      icon: 'Globe',
      title: 'Diseño Web',
      description: 'Creación de sitios web modernos, responsivos y optimizados con las mejores tecnologías del mercado.',
    },
    {
      icon: 'Code',
      title: 'Desarrollo Full Stack',
      description: 'Soluciones completas desde el frontend hasta el backend, con bases de datos escalables y APIs robustas.',
    },
    {
      icon: 'Smartphone',
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas y multiplataforma con experiencias de usuario fluidas y alto rendimiento.',
    },
    {
      icon: 'Zap',
      title: 'Automatización',
      description: 'Optimización de procesos empresariales mediante automatización inteligente y flujos de trabajo eficientes.',
    },
    {
      icon: 'Brain',
      title: 'Implementación de IA',
      description: 'Integración de inteligencia artificial y modelos de lenguaje para potenciar tus aplicaciones.',
    },
    {
      icon: 'Users',
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento experto en arquitectura de software, selección de tecnologías y estrategia digital.',
    },
    {
      icon: 'Database',
      title: 'Bases de Datos',
      description: 'Diseño, implementación y optimización de bases de datos relacionales y no relacionales.',
    },
    
    {
      icon: 'Shield',
      title: 'Ciberseguridad',
      description: 'Implementación de medidas de seguridad, auditorías y buenas prácticas para proteger tus sistemas.',
    },
  ],
  certifications: [
    {
      title: 'Desarrollo Web Full Stack',
      issuer: 'Platzi / Udemy',
      year: '2023',
      description: 'Certificación completa en desarrollo web con tecnologías modernas.',
    },
    
    {
      title: 'Ciberseguridad',
      issuer: 'Certificación Profesional',
      year: '2024',
      description: 'Fundamentos de ciberseguridad, ethical hacking y protección de datos.',
    },
    
    
  ],
  social: {
    email: 'ledezmacastrodaniel@email.com',
    whatsapp: 'https://wa.me/59172729907',
    linkedin: 'www.linkedin.com/in/daniel-ledezma-castro-261337261',
    github: 'https://github.com/dalitoled',
  },
}
