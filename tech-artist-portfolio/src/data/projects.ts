export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  featured: boolean;
  status: 'completed' | 'in-progress' | 'concept';
  year: string;
  duration: string;
  role: string;
  team: string;
  platforms: string[];
  technologies: string[];
  images: string[];
  videos: string[];
  links: {
    demo?: string;
    github?: string;
    documentation?: string;
    devlog?: string;
  };
  highlights: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  techDetails: {
    title: string;
    content: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'procedural-terrain-system',
    title: 'Procedural Terrain System',
    subtitle: 'Advanced Houdini-based terrain generation for open-world games',
    description: 'A comprehensive procedural terrain generation system built in Houdini, featuring multi-biome support, real-time parameter adjustment, and seamless Unity integration.',
    longDescription: 'This project involved creating a sophisticated procedural terrain system that could generate diverse, realistic landscapes for an open-world RPG. The system needed to support multiple biomes, handle massive world sizes, and integrate seamlessly with Unity\'s rendering pipeline while maintaining optimal performance across different hardware configurations.',
    category: 'Procedural',
    tags: ['Houdini', 'VEX', 'Unity', 'Terrain', 'Procedural', 'HDAs'],
    featured: true,
    status: 'completed',
    year: '2024',
    duration: '4 months',
    role: 'Lead Technical Artist',
    team: '1 Technical Artist, 2 Environment Artists, 1 Programmer',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    technologies: ['Houdini', 'VEX', 'Unity', 'HLSL', 'C#'],
    images: ['🏔️', '🌲', '🗻', '🌿'],
    videos: [],
    links: {
      demo: 'https://example.com/terrain-demo',
      github: 'https://github.com/example/terrain-system',
      documentation: 'https://docs.example.com/terrain'
    },
    highlights: [
      'Generated 100+ unique terrain variations',
      'Reduced environment art production time by 70%',
      'Achieved 60+ FPS on target hardware',
      'Seamless Unity integration with HDA workflow'
    ],
    challenges: [
      'Managing memory usage for large terrain chunks',
      'Ensuring consistent art direction across procedural content',
      'Optimizing Houdini cook times for real-time iteration',
      'Creating artist-friendly parameter interfaces'
    ],
    solutions: [
      'Implemented hierarchical LOD system with streaming',
      'Developed rule-based biome blending algorithms',
      'Created cached intermediate states for faster iteration',
      'Built custom Unity inspector tools for parameter tuning'
    ],
    results: [
      '300% increase in environment content variety',
      '70% reduction in manual environment art time',
      'Consistent 60+ FPS across all target platforms',
      'Artist workflow efficiency improved by 80%'
    ],
    techDetails: [
      {
        title: 'Procedural Generation Pipeline',
        content: 'Built a multi-stage generation pipeline starting with heightmaps, then layering erosion simulation, biome placement, vegetation scattering, and detail placement. Each stage uses custom VEX code optimized for performance.'
      },
      {
        title: 'Unity Integration',
        content: 'Created custom HDAs that expose artist-friendly parameters while handling complex internal logic. Implemented automatic texture array management and LOD generation for seamless Unity integration.'
      },
      {
        title: 'Performance Optimization',
        content: 'Implemented spatial hashing for vegetation placement, hierarchical instancing for detail objects, and progressive mesh generation to maintain target framerate across different hardware configurations.'
      }
    ]
  },
  {
    id: 'shader-library',
    title: 'Custom Shader Library',
    subtitle: 'Comprehensive collection of optimized shaders for stylized rendering',
    description: 'A production-ready shader library featuring stylized materials, advanced lighting models, and cross-platform optimization for mobile and console platforms.',
    longDescription: 'Developed a comprehensive shader library to support a stylized art direction while maintaining excellent performance across mobile and console platforms. The library includes everything from basic materials to complex multi-layered effects, all built with modularity and reusability in mind.',
    category: 'Shaders',
    tags: ['HLSL', 'Unity', 'Shaders', 'Mobile', 'Optimization', 'Stylized'],
    featured: true,
    status: 'completed',
    year: '2023',
    duration: '6 months',
    role: 'Senior Technical Artist',
    team: '1 Technical Artist, 3 Artists, 1 Graphics Programmer',
    platforms: ['Mobile', 'PC', 'Console'],
    technologies: ['HLSL', 'Unity ShaderGraph', 'Unity URP', 'Amplify Shader Editor'],
    images: ['🎨', '✨', '🌈', '⚡'],
    videos: [],
    links: {
      github: 'https://github.com/example/shader-library',
      documentation: 'https://docs.example.com/shaders'
    },
    highlights: [
      '50+ production-ready shaders',
      '30% better performance than standard materials',
      'Cross-platform compatibility guaranteed',
      'Artist-friendly parameter exposure'
    ],
    challenges: [
      'Maintaining visual quality across different hardware',
      'Creating modular, reusable shader components',
      'Optimizing for mobile GPU constraints',
      'Ensuring consistent art direction'
    ],
    solutions: [
      'Developed multi-tier LOD system for shader complexity',
      'Created modular node-based shader architecture',
      'Implemented platform-specific optimization variants',
      'Built comprehensive style guide and documentation'
    ],
    results: [
      '30% performance improvement over baseline',
      '90% artist satisfaction in usability testing',
      'Zero platform-specific rendering issues',
      '50% reduction in shader development time'
    ],
    techDetails: [
      {
        title: 'Modular Architecture',
        content: 'Built using a component-based approach where complex shaders are composed of smaller, reusable modules. This allows for easy customization while maintaining performance and consistency.'
      },
      {
        title: 'Cross-Platform Optimization',
        content: 'Implemented multiple rendering paths with automatic platform detection. Mobile versions use simplified lighting models and reduced texture sampling while maintaining visual similarity.'
      },
      {
        title: 'Artist Workflow Integration',
        content: 'Created custom Unity tools for shader variant management, parameter presets, and real-time performance monitoring to streamline the artist workflow.'
      }
    ]
  },
  {
    id: 'character-pipeline',
    title: 'Character Art Pipeline',
    subtitle: 'Automated character asset processing and optimization system',
    description: 'End-to-end character pipeline featuring automated rigging, LOD generation, texture optimization, and seamless integration with animation systems.',
    longDescription: 'Designed and implemented a complete character art pipeline that takes characters from initial modeling through final in-game implementation. The system handles everything from automated rigging and LOD generation to texture optimization and animation system integration, dramatically reducing the time needed to bring characters into the game.',
    category: 'Pipeline',
    tags: ['Maya', 'Python', 'Automation', 'Characters', 'Pipeline', 'Tools'],
    featured: false,
    status: 'completed',
    year: '2023',
    duration: '5 months',
    role: 'Pipeline Technical Artist',
    team: '1 Technical Artist, 2 Character Artists, 1 Technical Animator',
    platforms: ['PC', 'Console'],
    technologies: ['Maya', 'Python', 'MEL', 'Unity', 'Substance Painter'],
    images: ['👤', '🔧', '⚙️', '🎭'],
    videos: [],
    links: {
      documentation: 'https://docs.example.com/character-pipeline'
    },
    highlights: [
      'Automated 90% of character processing tasks',
      'Reduced character implementation time by 60%',
      'Eliminated common pipeline errors',
      'Improved asset quality consistency'
    ],
    challenges: [
      'Handling diverse character types and proportions',
      'Maintaining animation quality through LOD transitions',
      'Creating robust error handling and validation',
      'Integrating with existing animation workflows'
    ],
    solutions: [
      'Built flexible template system for different character archetypes',
      'Implemented bone reduction algorithms preserving key animations',
      'Created comprehensive validation and error reporting system',
      'Developed seamless handoff protocols with animation team'
    ],
    results: [
      '60% faster character implementation pipeline',
      '95% reduction in character processing errors',
      '40% improvement in asset quality consistency',
      '100% artist adoption rate within 3 months'
    ],
    techDetails: [
      {
        title: 'Automated Rigging System',
        content: 'Developed a template-based auto-rigging system that can handle various character types while maintaining animation compatibility. Includes automatic weight painting and constraint setup.'
      },
      {
        title: 'LOD Generation Pipeline',
        content: 'Created intelligent mesh reduction algorithms that preserve silhouette and important details while generating optimized LOD chains. Includes automatic UV optimization and texture atlas generation.'
      },
      {
        title: 'Quality Assurance Integration',
        content: 'Built comprehensive validation tools that check for common issues, validate naming conventions, and ensure consistency with project standards before assets enter the game build.'
      }
    ]
  },
  {
    id: 'vfx-optimization',
    title: 'VFX Performance System',
    subtitle: 'Real-time visual effects optimization for cross-platform deployment',
    description: 'Advanced VFX system featuring dynamic LOD, particle pooling, and intelligent culling to maintain 60fps across all target platforms.',
    longDescription: 'Created a sophisticated VFX management system that intelligently adjusts visual effects quality and complexity based on hardware capabilities and current performance metrics. The system ensures consistent 60fps gameplay while maximizing visual impact.',
    category: 'VFX',
    tags: ['VFX', 'Performance', 'Unity', 'Particles', 'Optimization', 'Real-time'],
    featured: true,
    status: 'completed',
    year: '2023',
    duration: '3 months',
    role: 'VFX Technical Artist',
    team: '1 Technical Artist, 2 VFX Artists, 1 Performance Engineer',
    platforms: ['Mobile', 'PC', 'Console'],
    technologies: ['Unity VFX Graph', 'C#', 'HLSL', 'Unity Profiler'],
    images: ['💥', '⚡', '🌟', '🔥'],
    videos: [],
    links: {
      demo: 'https://example.com/vfx-demo'
    },
    highlights: [
      'Achieved consistent 60fps across all platforms',
      '50% reduction in VFX memory usage',
      'Dynamic quality scaling system',
      'Zero frame drops during intense VFX sequences'
    ],
    challenges: [
      'Managing particle count for mobile devices',
      'Maintaining visual impact while reducing complexity',
      'Creating seamless quality transitions',
      'Balancing CPU and GPU load distribution'
    ],
    solutions: [
      'Implemented dynamic particle budgeting system',
      'Created tiered effect complexity with smooth transitions',
      'Built predictive quality adjustment algorithms',
      'Developed hybrid CPU/GPU particle systems'
    ],
    results: [
      '60fps maintained across all target devices',
      '50% reduction in VFX-related memory usage',
      '30% improvement in battery life on mobile',
      'Zero player complaints about performance'
    ],
    techDetails: [
      {
        title: 'Dynamic LOD System',
        content: 'Built a real-time VFX LOD system that adjusts particle counts, shader complexity, and effect duration based on distance from camera, current framerate, and device capabilities.'
      },
      {
        title: 'Intelligent Pooling',
        content: 'Implemented sophisticated object pooling for particle systems with predictive pre-warming and smart cleanup to eliminate garbage collection spikes during gameplay.'
      },
      {
        title: 'Performance Monitoring',
        content: 'Created real-time performance monitoring tools that track VFX impact on frame time and automatically adjust quality settings to maintain target performance.'
      }
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectCategories = (): string[] => {
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  return categories;
}; 