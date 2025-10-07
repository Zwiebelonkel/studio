import type { Project } from '@/lib/placeholder-data';
import ContentCard from './content-card';
import { Gamepad2, Globe, Cuboid } from 'lucide-react';

type ContentGridProps = {
  projects: Project[];
};

const categoryIcons = {
  Games: <Gamepad2 className="h-8 w-8 text-primary" />,
  Websites: <Globe className="h-8 w-8 text-primary" />,
  '3D Generations': <Cuboid className="h-8 w-8 text-primary" />,
};

export default function ContentGrid({ projects }: ContentGridProps) {
  const groupedProjects = projects.reduce((acc, project) => {
    (acc[project.category] = acc[project.category] || []).push(project);
    return acc;
  }, {} as Record<Project['category'], Project[]>);

  const categories: Project['category'][] = ['Games', 'Websites', '3D Generations'];

  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const categoryProjects = groupedProjects[category];
        if (!categoryProjects || categoryProjects.length === 0) return null;

        return (
          <section key={category}>
            <div className="mb-8 flex items-center gap-4">
              {categoryIcons[category]}
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                {category}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProjects.map((project) => (
                <ContentCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
