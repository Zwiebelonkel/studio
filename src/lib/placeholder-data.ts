import { PlaceHolderImages } from './placeholder-images';

export type Project = {
  id: string;
  title: string;
  description: string;
  category: 'Games' | 'Websites' | '3D Generations';
  imageUrl: string;
  imageHint: string;
  tags: string[];
  url: string;
};

const [
  game1,
  game2,
  game3,
  website1,
  website2,
  website3,
  gen1,
  gen2,
  gen3,
] = PlaceHolderImages;

export const projects: Project[] = [
  {
    id: '1',
    title: 'Pixel Adventure',
    description: 'A retro-style 2D platformer with challenging levels and a charming pixel art aesthetic.',
    category: 'Games',
    imageUrl: game1.imageUrl,
    imageHint: game1.imageHint,
    tags: ['2D', 'Pixel Art', 'Platformer', 'Retro'],
    url: '#',
  },
  {
    id: '2',
    title: 'Galaxy Trader',
    description: 'A space trading simulation game where you buy, sell, and battle your way across the galaxy.',
    category: 'Games',
    imageUrl: game2.imageUrl,
    imageHint: game2.imageHint,
    tags: ['Simulation', 'Sci-Fi', 'Trading', 'Space'],
    url: '#',
  },
  {
    id: '3',
    title: 'Mystic Grove',
    description: 'A puzzle-adventure game set in an enchanted forest. Solve environmental puzzles to uncover ancient secrets.',
    category: 'Games',
    imageUrl: game3.imageUrl,
    imageHint: game3.imageHint,
    tags: ['Puzzle', 'Adventure', 'Fantasy', '3D'],
    url: '#',
  },
  {
    id: '4',
    title: 'Portfolio Showcase',
    description: 'A sleek, modern, and responsive portfolio website designed to highlight creative work.',
    category: 'Websites',
    imageUrl: website1.imageUrl,
    imageHint: website1.imageHint,
    tags: ['React', 'Next.js', 'TailwindCSS', 'Design'],
    url: '#',
  },
  {
    id: '5',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with a custom backend, payment integration, and user accounts.',
    category: 'Websites',
    imageUrl: website2.imageUrl,
    imageHint: website2.imageHint,
    tags: ['E-commerce', 'Full-stack', 'Stripe', 'UX/UI'],
    url: '#',
  },
  {
    id: '6',
    title: 'SaaS Dashboard',
    description: 'An analytics dashboard for a Software-as-a-Service product, featuring complex data visualizations.',
    category: 'Websites',
    imageUrl: website3.imageUrl,
    imageHint: website3.imageHint,
    tags: ['SaaS', 'Dashboard', 'Data Viz', 'Charts'],
    url: '#',
  },
  {
    id: '7',
    title: 'Cyberpunk Alley',
    description: 'A detailed 3D scene of a futuristic, neon-lit alleyway, created and rendered in Blender.',
    category: '3D Generations',
    imageUrl: gen1.imageUrl,
    imageHint: gen1.imageHint,
    tags: ['Blender', 'Cyberpunk', 'Environment', 'Sci-Fi'],
    url: '#',
  },
  {
    id: '8',
    title: 'Ancient Golem',
    description: 'A high-poly character model of a stone golem, textured and ready for animation.',
    category: '3D Generations',
    imageUrl: gen2.imageUrl,
    imageHint: gen2.imageHint,
    tags: ['ZBrush', 'Character Art', 'Fantasy', 'Sculpting'],
    url: '#',
  },
  {
    id: '9',
    title: 'Procedural Landscapes',
    description: 'Generative art creating vast and varied alien landscapes using procedural generation techniques.',
    category: '3D Generations',
    imageUrl: gen3.imageUrl,
    imageHint: gen3.imageHint,
    tags: ['Houdini', 'Procedural', 'Generative Art', 'VFX'],
    url: '#',
  },
];
