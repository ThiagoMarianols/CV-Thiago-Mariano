'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  repositories?: {
    name: string;
    url: string;
    type: 'frontend' | 'mobile' | 'api' | 'backend';
  }[];
  highlights?: string[];
  images?: string[];
  featured?: boolean;
}

export function Projects() {
  const { text, language } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState<string>('');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openModal = (imageUrl: string, projectTitle: string, projectId: number, imageIndex: number) => {
    setSelectedImage(imageUrl);
    setSelectedImageTitle(projectTitle);
    setSelectedProjectId(projectId);
    setSelectedImageIndex(imageIndex);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageTitle('');
    setSelectedProjectId(null);
    setSelectedImageIndex(0);
  };

  const navigateModalImage = (direction: 'prev' | 'next') => {
    if (selectedProjectId === null) return;
    
    const project = projects.find(p => p.id === selectedProjectId);
    if (!project?.images) return;
    
    const imageCount = project.images.length;
    let newIndex: number;
    
    if (direction === 'next') {
      newIndex = (selectedImageIndex + 1) % imageCount;
    } else {
      newIndex = selectedImageIndex - 1;
      if (newIndex < 0) newIndex = imageCount - 1;
    }
    
    setSelectedImageIndex(newIndex);
    setSelectedImage(project.images[newIndex]);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowLeft') {
        navigateModalImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateModalImage('next');
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedImageIndex, selectedProjectId]);

  const handleNextImage = (projectId: number) => {
    setCurrentImageIndex(prev => {
      const currentIndex = prev[projectId] || 0;
      const imageCount = projects.find(p => p.id === projectId)?.images?.length || 1;
      return {
        ...prev,
        [projectId]: (currentIndex + 1) % imageCount
      };
    });
  };

  const handlePreviousImage = (projectId: number) => {
    setCurrentImageIndex(prev => {
      const currentIndex = prev[projectId] || 0;
      const imageCount = projects.find(p => p.id === projectId)?.images?.length || 1;
      const newIndex = currentIndex - 1;
      return {
        ...prev,
        [projectId]: newIndex < 0 ? imageCount - 1 : newIndex
      };
    });
  };

  const getProjects = (language: string): Project[] => {
    const projectsPt: Project[] = [
      {
        id: 1,
        title: 'Sistema de Gerenciamento de Ocorrências - Corpo de Bombeiros',
        description: 'Sistema completo para registro, acompanhamento e atendimento de ocorrências em tempo real. Possui painel web administrativo e aplicativo mobile, permitindo integração entre a central de controle e equipes em campo.',
        technologies: ['React', 'React Native', 'APIs REST', 'Autenticação por Token', 'Real-time'],
        highlights: [
          'Monitoramento de ocorrências em tempo real',
          'Atendimento via smartphone',
          'Painel administrativo completo (dashboard)',
          'Integração entre campo e central'
        ],
        images: [
          '/img/projects/Corpo-bombeiros/Captura de tela 2025-10-29 102940.png',
          '/img/projects/Corpo-bombeiros/Captura de tela 2025-10-29 102953.png',
          '/img/projects/Corpo-bombeiros/file_2025-10-21_16.06.26.png',
          '/img/projects/Corpo-bombeiros/image.png'
        ],
        repositories: [
          { name: 'Frontend Web', url: 'https://github.com/ThiagoMarianols/front-centro-controle-fogo', type: 'frontend' },
          { name: 'Frontend Mobile', url: 'https://github.com/ThiagoMarianols/front-centro-controle-fogo-mobile', type: 'mobile' },
        ],
        featured: true
      },
      {
        id: 2,
        title: 'RUMO - Como Chegar',
        description: 'Sistema de busca de rotas para transporte público desenvolvido para o Grande Recife, facilitando o planejamento de trajetos e trazendo mais praticidade para o dia a dia das pessoas.',
        technologies: ['PWA', 'JavaScript', 'HTML', 'CSS', 'APIs de Geolocalização', 'Transporte Público'],
        link: 'https://virtual.granderecife.pe.gov.br/rumo/como-chegar/',
        images: [
          '/img/projects/Como-chegar/1775821007699.jpg',
          '/img/projects/Como-chegar/1775821006898.jpg',
          '/img/projects/Como-chegar/1775821006970.jpg',
          '/img/projects/Como-chegar/1775821007398.jpg',
          '/img/projects/Como-chegar/1775821007571.jpg'
        ],
        highlights: [
          'Busca de rotas com origem e destino',
          'Linhas de ônibus recomendadas',
          'Múltiplas possibilidades de trajeto',
          'Estimativa de tempo e custo por percurso',
          'Opção de horário de saída personalizado',
          'Progressive Web App (PWA) - experiência nativa'
        ],
        featured: true
      },
      {
        id: 3,
        title: 'Frontend Mobile - Controle de Ocorrências',
        description: 'Aplicativo mobile para atendimento de ocorrências do Corpo de Bombeiros, permitindo comunicação em tempo real com a central.',
        technologies: ['React Native', 'TypeScript', 'APIs REST', 'Real-time'],
        github: 'https://github.com/ThiagoMarianols/front-centro-controle-fogo-mobile'
      },
      {
        id: 4,
        title: 'API Biblioteca - Backend de Dados',
        description: 'API RESTful para gerenciamento de dados do sistema de ocorrências, com endpoints para CRUD e autenticação.',
        technologies: ['Node.js', 'APIs REST', 'PostgreSQL', 'Autenticação'],
        github: 'https://github.com/ThiagoMarianols/api-biblioteca'
      },
      {
        id: 5,
        title: 'MySessions - API de Autenticação',
        description: 'Sistema de gerenciamento de sessões e autenticação para aplicações, com suporte a tokens e segurança.',
        technologies: ['Node.js', 'JWT', 'APIs REST', 'Security'],
        github: 'https://github.com/ThiagoMarianols/mysessions'
      },
      {
        id: 6,
        title: 'Frontend Web - Controle de Ocorrências',
        description: 'Painel administrativo web para gerenciamento de ocorrências do Corpo de Bombeiros, com dashboard em tempo real.',
        technologies: ['React', 'TypeScript', 'Real-time', 'Dashboard'],
        github: 'https://github.com/ThiagoMarianols/front-centro-controle-fogo'
      }
    ];

    const projectsEn: Project[] = [
      {
        id: 1,
        title: 'Fire Department Incident Management System',
        description: 'Complete system for real-time incident registration, tracking and response. Features web admin panel and mobile app, enabling integration between control center and field teams.',
        technologies: ['React', 'React Native', 'REST APIs', 'Token Authentication', 'Real-time'],
        highlights: [
          'Real-time incident monitoring',
          'Smartphone response capability',
          'Complete admin dashboard',
          'Field and center integration'
        ],
        images: [
          '/img/projects/Corpo-bombeiros/Captura de tela 2025-10-29 102940.png',
          '/img/projects/Corpo-bombeiros/Captura de tela 2025-10-29 102953.png',
          '/img/projects/Corpo-bombeiros/file_2025-10-21_16.06.26.png',
          '/img/projects/Corpo-bombeiros/image.png'
        ],
        repositories: [
          { name: 'Web Frontend', url: 'https://github.com/ThiagoMarianols/front-centro-controle-fogo', type: 'frontend' },
          { name: 'Mobile Frontend', url: 'https://github.com/ThiagoMarianols/front-centro-controle-fogo-mobile', type: 'mobile' },
        ],
        featured: true
      },
      {
        id: 2,
        title: 'RUMO - How to Get There',
        description: 'Public transport route search system developed for Greater Recife, facilitating trip planning and bringing more convenience to people\'s daily lives.',
        technologies: ['PWA', 'JavaScript', 'HTML', 'CSS', 'Geolocation APIs', 'Public Transport'],
        link: 'https://virtual.granderecife.pe.gov.br/rumo/como-chegar/',
        images: [
          '/img/projects/Como-chegar/1775821007699.jpg',
          '/img/projects/Como-chegar/1775821006898.jpg',
          '/img/projects/Como-chegar/1775821006970.jpg',
          '/img/projects/Como-chegar/1775821007398.jpg',
          '/img/projects/Como-chegar/1775821007571.jpg'
        ],
        highlights: [
          'Route search with origin and destination',
          'Recommended bus lines',
          'Multiple route possibilities',
          'Time and cost estimates per route',
          'Custom departure time option',
          'Progressive Web App (PWA) - native experience'
        ],
        featured: true
      },
      {
        id: 3,
        title: 'Mobile Frontend - Incident Control',
        description: 'Mobile app for Fire Department incident response, enabling real-time communication with the control center.',
        technologies: ['React Native', 'TypeScript', 'REST APIs', 'Real-time'],
        github: 'https://github.com/ThiagoMarianols/front-centro-controle-fogo-mobile'
      },
      {
        id: 4,
        title: 'Library API - Data Backend',
        description: 'RESTful API for incident system data management, with CRUD endpoints and authentication.',
        technologies: ['Node.js', 'REST APIs', 'PostgreSQL', 'Authentication'],
        github: 'https://github.com/ThiagoMarianols/api-biblioteca'
      },
      {
        id: 5,
        title: 'MySessions - Authentication API',
        description: 'Session and authentication management system for applications, with token support and security.',
        technologies: ['Node.js', 'JWT', 'REST APIs', 'Security'],
        github: 'https://github.com/ThiagoMarianols/mysessions'
      },
      {
        id: 6,
        title: 'Web Frontend - Incident Control',
        description: 'Web admin panel for Fire Department incident management, with real-time dashboard.',
        technologies: ['React', 'TypeScript', 'Real-time', 'Dashboard'],
        github: 'https://github.com/ThiagoMarianols/front-centro-controle-fogo'
      }
    ];

    return language === 'en' ? projectsEn : projectsPt;
  };

  const projects = getProjects(language);

  const allTechnologies = Array.from(new Set(projects.flatMap(project => project.technologies)));

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          {text.projects}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {text.projectsDescription}
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {text.all}
          </button>
          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === tech
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            {text.featuredProjects}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.filter(p => p.featured).map(project => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Carousel */}
                {project.images && project.images.length > 0 && (
                  <div className="relative h-64 overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out h-full" 
                         style={{ transform: `translateX(-${(currentImageIndex[project.id] || 0) * 100}%)` }}>
                      {project.images.map((image, index) => (
                        <div key={index} className="min-w-full h-full flex-shrink-0">
                          <img 
                            src={image} 
                            alt={`${project.title} - Imagem ${index + 1}`}
                            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => openModal(image, project.title, project.id, index)}
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Carousel Controls */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => handlePreviousImage(project.id)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleNextImage(project.id)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        
                        {/* Dots Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }))}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                (currentImageIndex[project.id] || 0) === index ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      {project.id === 1 ? '🚒' : '🗺️'}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                      {project.id === 2 ? (
                        <p className="text-sm text-primary font-medium">{text.fullStack}</p>
                      ) : (
                        <p className="text-sm text-primary font-medium">{text.frontend}</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                
                {project.highlights && (
                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 text-foreground">{text.highlights}:</h5>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-sm rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {text.viewProject}
                    </a>
                  )}
                  {project.repositories && (
                    <div className="flex flex-wrap gap-2">
                      {project.repositories.map(repo => (
                        <a
                          key={repo.name}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                        >
                          <span className="mr-1">
                            {repo.type === 'frontend' && '🌐'}
                            {repo.type === 'mobile' && '📱'}
                            {repo.type === 'api' && '⚙️'}
                            {repo.type === 'backend' && '🔧'}
                          </span>
                          <span className="text-sm">{repo.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            {text.otherProjects}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.filter(p => !p.featured).map(project => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-3 text-foreground">{project.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground text-sm rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {text.noProjectsFound}
            </p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image */}
            <img 
              src={selectedImage} 
              alt={selectedImageTitle}
              className="w-full h-full object-contain max-h-[85vh] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image Counter */}
            {selectedProjectId && (
              <p className="text-white/70 text-center mt-2 text-sm">
                {selectedImageIndex + 1} / {projects.find(p => p.id === selectedProjectId)?.images?.length}
              </p>
            )}
            
            {/* Title */}
            <p className="text-white text-center mt-4 text-lg">
              {selectedImageTitle}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
