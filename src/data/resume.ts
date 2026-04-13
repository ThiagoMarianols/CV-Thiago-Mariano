export type Language = 'pt' | 'en';

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  objective: string;
  summary: string;
  experience: {
    title: string;
    company: string;
    period: string;
    project?: string;
    technologies: string[];
    responsibilities: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    focus?: string;
    location?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  softSkills: string[];
  languages: {
    name: string;
    level: string;
  }[];
  certifications: {
    name: string;
    url?: string;
  }[];
}

export const resumeData: Record<Language, ResumeData> = {
  pt: {
    name: 'Thiago Mariano Lima da Silva',
    title: 'Desenvolvedor Full Stack',
    contact: {
      email: 'thiagomarianols02@gmail.com',
      phone: '+55 (81) 98147-5856',
      location: 'Recife, PE - Brasil',
      linkedin: 'https://www.linkedin.com/in/tmls/',
      github: 'https://github.com/ThiagoMarianols',
    },
    objective:
      'Desenvolvedor Full Stack em transição de carreira, com sólida experiência em infraestrutura de TI e suporte técnico, atualmente focado em desenvolvimento web utilizando tecnologias modernas como Python/Django, React.js e JavaScript. Buscando oportunidades para aplicar habilidades técnicas e resolver problemas complexos em ambientes de desenvolvimento ágeis.',
    summary:
      'Profissional com forte base em infraestrutura de TI em transição para desenvolvimento de software. Combino experiência prática em suporte técnico e administração de sistemas com conhecimentos modernos de desenvolvimento web. Capacidade de entender tanto a perspectiva técnica da infraestrutura quanto as necessidades de desenvolvimento de aplicações, resultando em soluções completas e bem integradas.',
    experience: [
      {
        title: 'Desenvolvedor Full Stack',
        company: 'Pitang',
        period: '2025 - Presente',
        project: 'Grande Recife - Consórcio de Transportes Metropolitano',
        technologies: ['Python', 'Django', 'Django REST Framework', 'React.js', 'JavaScript', 'PHP', 'HTML/CSS', 'Bootstrap', 'PostgreSQL', 'MySQL'],
        responsibilities: [
          'Desenvolvimento de funcionalidades frontend e backend',
          'Criação e manutenção de APIs REST',
          'Integração entre sistemas e bancos de dados',
          'Implementação de interfaces responsivas e modernas',
          'Colaboração em equipe com metodologias ágeis',
        ],
      },
      {
        title: 'Analista de TI',
        company: 'Disnove Volkswagen',
        period: '2024 - 2025',
        technologies: ['Etka', 'ATC 2.0', 'Syonet', 'Dealer', 'Active Directory', 'Office 365', 'Grafana', 'Zabbix', 'GLPI'],
        responsibilities: [
          'Suporte técnico para concessionárias Volkswagen',
          'Gestão de sistemas específicos (Etka, ATC 2.0, Syonet, Dealer)',
          'Administração de Active Directory e Office 365',
          'Monitoramento com Grafana, Zabbix e GLPI',
        ],
      },
      {
        title: 'Analista de Suporte Técnico',
        company: 'N4 Tecnologia',
        period: '2019 - 2024',
        technologies: ['ServiceNow', 'Active Directory', 'Grafana', 'Zabbix', 'GLPI'],
        responsibilities: [
          'Suporte técnico especializado para clientes corporativos',
          'Administração de sistemas e redes',
          'Documentação de processos técnicos',
          'Treinamento de usuários e equipes',
        ],
      },
    ],
    education: [
        {
            degree: 'Análise e Desenvolvimento de Sistemas',
            institution: 'SENAC',
            period: '2023 - Presente',
            focus: 'Desenvolvimento de software e aplicações',
            location: 'Recife, PE'
        },
        {
            degree: 'Técnico em Redes de Computadores',
            institution: 'ETEMAC',
            period: '2018 - 2020',
            focus: 'Infraestrutura de redes, configuração e suporte técnico',
            location: 'Jaboatão dos Guararapes, PE'
        }
    ],
    skills: [
      {
        category: 'Desenvolvimento Web',
        items: ['Python/Django', 'React.js', 'JavaScript/ES6+', 'Django REST Framework', 'APIs REST', 'PHP', 'HTML/CSS', 'Bootstrap', 'Sockets'],
      },
      {
        category: 'Bancos de Dados',
        items: ['PostgreSQL', 'MySQL', 'SQL'],
      },
      {
        category: 'Infraestrutura e DevOps',
        items: ['Docker', 'Linux', 'Active Directory', 'Grafana', 'Zabbix', 'GLPI'],
      },
    ],
    softSkills: [
      'Resolução de Problemas',
      'Solução de Problemas Técnicos',
      'Atenção a Detalhes',
      'Trabalho em Equipe',
      'Comunicação',
      'Aprendizado Contínuo',
      'Pensamento Crítico',
      'Organização',
    ],
    languages: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'Intermediário (técnico)' },
    ],
    certifications: [
      { name: 'Programação Web com Python e Django Framework: Essencial', url: 'https://www.udemy.com/certificate/UC-5e00fa70-ea9a-4f93-8eec-0bfa40625364/' },
      { name: 'Fundamentos do React', url: 'https://app.rocketseat.com.br/certificates/a4e14c44-3392-4f25-ba26-043192f52af0' },
      { name: 'Aprofundando em Hooks', url: 'https://app.rocketseat.com.br/certificates/11a3df6d-9a79-4ab7-802b-7b269c46c2b6' },
      { name: 'HTTP e Performance', url: 'https://app.rocketseat.com.br/certificates/4e4159af-3190-44f0-94c8-ed15b78ad7ab' },
    ],
  },
  en: {
    name: 'Thiago Mariano Lima da Silva',
    title: 'Full Stack Developer',
    contact: {
      email: 'thiagomarianols02@gmail.com',
      phone: '+55 (81) 98147-5856',
      location: 'Recife, PE - Brazil',
      linkedin: 'https://www.linkedin.com/in/tmls/',
      github: 'https://github.com/ThiagoMarianols',
    },
    objective:
      'Full Stack Developer in career transition, with solid experience in IT infrastructure and technical support, currently focused on web development using modern technologies such as Python/Django, React.js, and JavaScript. Seeking opportunities to apply technical skills and solve complex problems in agile development environments.',
    summary:
      'Professional with a strong background in IT infrastructure transitioning to software development. I combine practical experience in technical support and system administration with modern web development knowledge. Ability to understand both the technical infrastructure perspective and application development needs, resulting in complete and well-integrated solutions.',
    experience: [
      {
        title: 'Full Stack Developer',
        company: 'Pitang',
        period: '2025 - Present',
        project: 'Grande Recife - Municipal management system',
        technologies: ['Python', 'Django', 'Django REST Framework', 'React.js', 'JavaScript', 'PHP', 'HTML/CSS', 'Bootstrap', 'PostgreSQL', 'MySQL'],
        responsibilities: [
          'Frontend and backend feature development',
          'REST API creation and maintenance',
          'Integration between systems and databases',
          'Implementation of responsive and modern interfaces',
          'Collaboration in agile team methodologies',
        ],
      },
      {
        title: 'IT Analyst',
        company: 'Disnove Volkswagen',
        period: '2024 - 2025',
        technologies: ['Etka', 'ATC 2.0', 'Syonet', 'Dealer', 'Active Directory', 'Office 365', 'Grafana', 'Zabbix', 'GLPI'],
        responsibilities: [
          'Technical support for Volkswagen dealerships',
          'Management of specific systems (Etka, ATC 2.0, Syonet, Dealer)',
          'Active Directory and Office 365 administration',
          'Monitoring with Grafana, Zabbix, and GLPI',
        ],
      },
            {
        title: 'Technical Support Analyst',
        company: 'N4 Tecnologia',
        period: '2019 - 2024',
        technologies: ['ServiceNow', 'Active Directory', 'Grafana', 'Zabbix', 'GLPI'],
        responsibilities: [
          'Specialized technical support for corporate clients',
          'System and network administration',
          'Technical process documentation',
          'User and team training',
        ],
      },
    ],
    education: [
      {
        degree: 'Systems Analysis and Development',
        institution: 'SENAC',
        period: '2023 - Present',
        focus: 'Software development and applications',
        location: 'Recife, PE',
      },
      {
        degree: 'Computer Networks Technician',
        institution: 'ETEMAC',
        period: '2018 - 2020',
        focus: 'Network infrastructure, configuration and technical support',
        location: 'Jaboatão dos Guararapes, PE',
      },
    ],
    skills: [
      {
        category: 'Web Development',
        items: ['Python/Django', 'React.js', 'JavaScript/ES6+', 'Django REST Framework', 'REST APIs', 'PHP', 'HTML/CSS', 'Bootstrap', 'Sockets'],
      },
      {
        category: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'SQL'],
      },
      {
        category: 'Infrastructure & DevOps',
        items: ['Docker', 'Linux', 'Active Directory', 'Grafana', 'Zabbix', 'GLPI'],
      },
    ],
    softSkills: [
      'Problem Solving',
      'Technical Troubleshooting',
      'Attention to Detail',
      'Teamwork',
      'Communication',
      'Continuous Learning',
      'Critical Thinking',
      'Organization',
    ],
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Intermediate (technical)' },
    ],
    certifications: [
      { name: 'Web Programming with Python and Django Framework: Essential', url: 'https://www.udemy.com/certificate/UC-5e00fa70-ea9a-4f93-8eec-0bfa40625364/' },
      { name: 'React Fundamentals', url: 'https://app.rocketseat.com.br/certificates/a4e14c44-3392-4f25-ba26-043192f52af0' },
      { name: 'Deep Dive into Hooks', url: 'https://app.rocketseat.com.br/certificates/11a3df6d-9a79-4ab7-802b-7b269c46c2b6' },
      { name: 'HTTP and Performance', url: 'https://app.rocketseat.com.br/certificates/4e4159af-3190-44f0-94c8-ed15b78ad7ab' },
    ],
  },
};

export const uiText: Record<Language, Record<string, string>> = {
  pt: {
    contact: 'Contato',
    experience: 'Experiência Profissional',
    education: 'Formação Acadêmica',
    skills: 'Habilidades Técnicas',
    softSkills: 'Habilidades Interpessoais',
    languages: 'Idiomas',
    certifications: 'Certificações',
    objective: 'Objetivo Profissional',
    summary: 'Resumo Profissional',
    present: 'Presente',
    viewLinkedin: 'Ver LinkedIn',
    viewGithub: 'Ver GitHub',
    sendEmail: 'Enviar Email',
    downloadResume: 'Baixar Currículo',
  },
  en: {
    contact: 'Contact',
    experience: 'Professional Experience',
    education: 'Education',
    skills: 'Technical Skills',
    softSkills: 'Soft Skills',
    languages: 'Languages',
    certifications: 'Certifications',
    objective: 'Professional Objective',
    summary: 'Professional Summary',
    present: 'Present',
    viewLinkedin: 'View LinkedIn',
    viewGithub: 'View GitHub',
    sendEmail: 'Send Email',
    downloadResume: 'Download Resume',
  },
};
