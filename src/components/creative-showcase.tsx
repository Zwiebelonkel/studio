'use client';

import type { Project } from '@/lib/placeholder-data';
import { useState, useTransition } from 'react';
import ContentFilter from '@/components/content/content-filter';
import ContentGrid from '@/components/content/content-grid';
import { filterProjectsAction } from '@/app/actions';
import { Button } from './ui/button';

export default function CreativeShowcase({
  initialProjects,
}: {
  initialProjects: Project[];
}) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isPending, startTransition] = useTransition();
  const [hasSearched, setHasSearched] = useState(false);

  const handleFilter = async (query: string) => {
    if (!query) {
      setProjects(initialProjects);
      setHasSearched(false);
      return;
    }
    startTransition(async () => {
      const filteredProjects = await filterProjectsAction(query);
      setProjects(filteredProjects);
      setHasSearched(true);
    });
  };

  const clearFilter = () => {
    setProjects(initialProjects);
    setHasSearched(false);
  };

  return (
    <div className="container mx-auto space-y-8 px-4 py-8 md:space-y-12 md:py-16">
      <ContentFilter onFilter={handleFilter} isFiltering={isPending} onClear={clearFilter} hasSearched={hasSearched} />
      <ContentGrid projects={projects} />
      {hasSearched && projects.length === 0 && (
        <div className="text-center text-muted-foreground">
          <p>No projects found matching your description.</p>
        </div>
      )}
    </div>
  );
}
