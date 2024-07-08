'use client';

import React from 'react';
import projectsList from '@/lib/projectsData';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/projectsCard';

const filterButtons = [
  { label: 'TODOS', value: 'all' },
  { label: 'COMERCIAIS', value: 'business' },
  { label: 'RESIDENCIAIS', value: 'residential' },
  { label: 'EM ANDAMENTO', value: 'onGoing' },
];

function Projects() {
  const [projectsFilter, setProjectsFilter] = React.useState('all');

  const handleFilterChange = (filter) => {
    setProjectsFilter(filter);
  };

  return (
    <>
      <div className="w-full p-2 overflow-x-scroll sm:overflow-x-hidden">
        <div className="flex items-center gap-3 sm:justify-center">
          {filterButtons.map((button) => (
            <React.Fragment key={button.value}>
              <Button
                onClick={() => handleFilterChange(button.value)}
                variant={
                  projectsFilter === button.value ? 'filterActive' : 'filter'
                }
                size="auto">
                {button.label}
              </Button>
              {button.value !==
                filterButtons[filterButtons.length - 1].value && (
                  <span className="block font-normal font-heading text-primary/80">
                    /
                  </span>
                )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <ul className="mt-10 sm:mt-16 mb-[82px] sm:mb-[168px] md:mb-[248px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-9 sm:gap-y-12 sm:gap-x-8">
        {projectsList
          .filter(
            (project) =>
              projectsFilter === 'all' || project.category === projectsFilter
          )
          .map((project) => (
            <ProjectCard key={project.endpoint} {...project} />
          ))}
      </ul>
    </>
  );
}

export default Projects;
