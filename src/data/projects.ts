export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  tech: string[]
  category: 'backend' | 'web' | 'games'
  role: string
  repo: string
  demo?: string
  gradient: string
  icon: string
  screenshot?: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 'globetrekker',
    title: 'GlobeTrekker',
    tagline: 'Full-stack .NET travel platform with SQL Server and layered architecture',
    description:
      'A travel planning web app built with ASP.NET Core MVC. Features user authentication with Identity, CRUD travel plans with admin approval workflows, Entity Framework Core with SQL Server, and a clean service-repository architecture with full test coverage.',
    tech: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework', 'Cypress', 'xUnit', 'SCSS'],
    category: 'backend',
    role: 'Backend Developer',
    repo: 'https://github.com/MDVasilev20/GlobeTrekker',
    gradient: 'from-blue-600/30 via-indigo-700/20 to-purple-800/30',
    icon: 'globe',
    screenshot: 'https://raw.githubusercontent.com/MDVasilev20/GlobeTrekker/main/src/Template/images/hero_1.jpg',
    highlights: [
      'SQL Server with EF Core Code-First migrations',
      'ASP.NET Identity with role-based auth (Admin/User)',
      'Layered architecture: Presentation → Services → Data',
      'Cypress E2E + xUnit service tests',
    ],
  },
  {
    id: 'heat-optimisation',
    title: 'Heat Production Optimisation',
    tagline: 'Microservice system optimizing district heating costs with real-time energy data',
    description:
      'A semester project for Danfoss delivering a microservice-based solution to optimize district heat distribution. Reduces costs by scheduling production during low-energy-price periods and maximizes revenue by selling surplus electricity at peak spot prices.',
    tech: ['C#', '.NET', 'Docker', 'PostgreSQL', 'Supabase', 'GitHub Actions', 'Avalonia UI'],
    category: 'backend',
    role: 'Developer',
    repo: 'https://github.com/kaloyanpepelyashki/heat-production-optimisiation',
    gradient: 'from-orange-600/30 via-red-700/20 to-amber-800/30',
    icon: 'flame',
    highlights: [
      '5 Docker microservices orchestrated with docker-compose',
      'PostgreSQL via Supabase for data persistence',
      'CI/CD with GitHub Actions',
      'Avalonia UI cross-platform desktop client',
    ],
  },
  {
    id: 'user-management-api',
    title: 'User Management API',
    tagline: 'REST API with ASP.NET Core, Entity Framework, and SQL Server',
    description:
      'A clean multi-layered REST API for user management built with ASP.NET Core. Features CRUD endpoints, Entity Framework Core with SQL Server, AutoMapper for object mapping, and a service-repository pattern across 4 projects.',
    tech: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework', 'AutoMapper', 'REST API'],
    category: 'backend',
    role: 'Solo Developer',
    repo: 'https://github.com/MDVasilev20/fluffy-giggle',
    gradient: 'from-sky-600/30 via-blue-700/20 to-indigo-800/30',
    icon: 'globe',
    highlights: [
      'Clean 4-project layered architecture (WebHost → Services → Data → Shared)',
      'Entity Framework Core with SQL Server',
      'AutoMapper for DTO mapping',
      'RESTful CRUD endpoints',
    ],
  },
  {
    id: 'no-name',
    title: 'No-Name — World Explorer',
    tagline: 'Interactive world map displaying country data from JSON datasets',
    description:
      'A website featuring an interactive SVG world map where clicking any country reveals detailed information. Built with vanilla HTML, CSS, and JavaScript, with data sourced from structured JSON files.',
    tech: ['HTML', 'CSS', 'JavaScript', 'JSON', 'SVG'],
    category: 'web',
    role: 'Front-end Developer',
    repo: 'https://github.com/KKDinev20/no-name',
    demo: 'https://kkdinev20.github.io/no-name/website/',
    gradient: 'from-emerald-600/30 via-teal-700/20 to-cyan-800/30',
    icon: 'map',
    highlights: [
      'Interactive SVG map with click handlers per country',
      'JSON-driven data layer',
      'Responsive design with custom CSS',
    ],
  },
  {
    id: 'indigo',
    title: 'Indigo — bOOleO',
    tagline: 'Digital card game implementing boolean algebra (AND, OR, XOR)',
    description:
      'A digital recreation of the card game bOOleO where players use boolean logic operations to build a pyramid faster than their opponent. Features smooth card animations, game state management, and a polished menu system.',
    tech: ['C++', 'Raylib'],
    category: 'games',
    role: 'Backend Developer',
    repo: 'https://github.com/PPDimitrakova20/Indigo',
    gradient: 'from-violet-600/30 via-purple-700/20 to-fuchsia-800/30',
    icon: 'cards',
    screenshot: 'https://raw.githubusercontent.com/PPDimitrakova20/Indigo/main/resources/Menu.png',
    highlights: [
      'Boolean algebra game mechanics (AND, OR, XOR)',
      'Custom game engine with Raylib',
      'Full QA test documentation',
    ],
  },
  {
    id: 'sol-invictus',
    title: 'Sol Invictus',
    tagline: 'Chemistry exploration game — collect elements, craft amino acids',
    description:
      'An educational game where a Roomba robot discovers amino acids by collecting chemical elements and assembling them at a crafting bench. Players learn about chemistry through exploration and an in-game reference panel.',
    tech: ['C++', 'Raylib', 'Figma'],
    category: 'games',
    role: 'Backend Developer',
    repo: 'https://github.com/PPDimitrakova20/Sol-Invictus',
    gradient: 'from-yellow-600/30 via-amber-700/20 to-orange-800/30',
    icon: 'atom',
    screenshot: 'https://raw.githubusercontent.com/PPDimitrakova20/Sol-Invictus/main/assets/UI/background.png',
    highlights: [
      'Element collection and crafting system',
      'Educational chemistry content',
      'Figma-designed UI with custom sprites',
    ],
  },
  {
    id: 'intergalactic-warriors',
    title: 'Intergalactic Warriors — Gong',
    tagline: 'Golf-pong hybrid arcade game built with SDL2',
    description:
      'A "Gong" game combining golf and pong mechanics, built with the SDL2 graphics library. Features physics-based ball movement, multiple game modes, and a downloadable release.',
    tech: ['C++', 'SDL2'],
    category: 'games',
    role: 'Backend Developer',
    repo: 'https://github.com/BozhidarBoyadzhiev/Intergalactic-warriors',
    gradient: 'from-cyan-600/30 via-sky-700/20 to-blue-800/30',
    icon: 'gamepad',
    screenshot: 'https://user-images.githubusercontent.com/85335663/144723982-d20515c6-cb65-4ede-a673-7e8a28918a82.png',
    highlights: [
      'SDL2 graphics and input handling',
      'Physics-based ball movement',
      'Downloadable game release',
    ],
  },
]

export const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'backend', label: 'Data & Backend' },
  { key: 'web', label: 'Web' },
  { key: 'games', label: 'Games' },
] as const
