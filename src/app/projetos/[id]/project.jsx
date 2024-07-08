'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { motion } from 'framer-motion';
import { ProjectCarouselDialog } from './project-carousel-dialog';

import projectsList from '@/lib/projectsData';
import ProjectGallery from './project-gallery';

const Project = () => {
  const params = useParams();
  const currentProject = projectsList.find(
    (project) => params.id === project.endpoint
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleOpenChange = () => {
    setIsOpen((state) => !state);
  };

  const handleOpenImage = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    handleOpenChange();
  };

  return (
    <>
      <ProjectCarouselDialog
        isOpen={isOpen}
        handleOpenChange={handleOpenChange}
        currentImageIndex={currentImageIndex}
        currentProject={currentProject}
      />

      <main className="container my-28 md:my-40 relative grid grid-cols-1 lg:grid-cols-[0.6fr_1fr] gap-10 md:gap-20">
        <div className="lg:col-span-2">
          <Button
            asChild
            variant="neutral"
            size="auto"
            className="block mr-auto transition ease-in-out delay-150 duration-300 scale-[1.7] md:scale-[2.5] md:hover:scale-[3]">
            <Link href={`/projetos`}>
              <Icons.arrow className="text-primary hover:text-accent" />
            </Link>
          </Button>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4">
          <h1 className="text-base text-center title md:text-lg">O PROJETO</h1>
          <h2 className="text-3xl font-bold text-left sm:text-4xl md:text-5xl">
            {currentProject.title}
          </h2>

          <p className="mt-3 text-primary max-w-prose">
            {currentProject.description}
          </p>
        </motion.aside>

        <ProjectGallery
          currentProject={currentProject}
          handleOpenImage={handleOpenImage}
        />
      </main>
    </>
  );
};

export default Project;
