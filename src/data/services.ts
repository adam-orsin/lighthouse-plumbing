export interface Service {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  slug?: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'water-heaters',
    name: 'Water Heater Services',
    shortName: 'Water Heaters',
    description: 'Installation, repair, and maintenance for all types of water heaters including tank, tankless, and heat pump systems.',
    icon: 'flame',
    slug: '/water-heaters',
    featured: true,
  },
  {
    id: 'horizontal-boring',
    name: 'Horizontal Boring',
    shortName: 'Horizontal Boring',
    description: 'Trenchless technology for installing underground pipes with minimal disruption to your landscape.',
    icon: 'layers',
    slug: '/horizontal-boring',
    featured: true,
  },
  {
    id: 'drain-cleaning',
    name: 'Drain Cleaning',
    shortName: 'Drain Cleaning',
    description: 'Professional drain cleaning and clog removal for sinks, showers, toilets, and main sewer lines.',
    icon: 'droplets',
    featured: true,
  },
  {
    id: 'pipe-repair',
    name: 'Pipe Repair & Replacement',
    shortName: 'Pipe Repair',
    description: 'Expert repair and replacement of damaged, leaking, or corroded pipes throughout your home.',
    icon: 'wrench',
    featured: true,
  },
  {
    id: 'sewer-services',
    name: 'Sewer Line Services',
    shortName: 'Sewer Services',
    description: 'Complete sewer line inspection, repair, and replacement using advanced camera technology.',
    icon: 'search',
    featured: false,
  },
  {
    id: 'fixture-installation',
    name: 'Fixture Installation',
    shortName: 'Fixtures',
    description: 'Installation of faucets, toilets, sinks, showers, and all plumbing fixtures.',
    icon: 'home',
    featured: false,
  },
  {
    id: 'emergency',
    name: '24/7 Emergency Services',
    shortName: 'Emergency',
    description: 'Round-the-clock emergency plumbing services for burst pipes, major leaks, and flooding.',
    icon: 'alert-circle',
    featured: false,
  },
];

export const featuredServices = services.filter(s => s.featured);
