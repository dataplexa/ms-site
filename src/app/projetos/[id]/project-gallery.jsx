'use client';

import React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

const ProjectGallery = ({ currentProject, handleOpenImage }) => {
  const [hideShowAll, setHideShowAll] = React.useState(false);
  const [isScreenSmall, setIsScreenSmall] = React.useState(window.innerWidth < 768);

  const handleToggleShowAll = () => {
    setHideShowAll((prevState) => {
      if (prevState) {
        window.scrollTo({
          top: 150,
          behavior: 'smooth',
        });
      }
      return !prevState;
    });
  };

  const imagesToDisplay = hideShowAll
    ? currentProject.gallery
    : currentProject.gallery.slice(0, 3);


    React.useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative h-fit">
      <motion.ul
        transition={{ duration: 1 }}
        className={`relative w-full flex scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent flex-col gap-12 sm:gap-10 md:gap-16 ${hideShowAll && isScreenSmall ? 'h-full' : 'md:max-h-[820px] md:overflow-y-scroll pr-1'
          }`}>
        <AnimatePresence>
          {imagesToDisplay.map((image, index) => (
            <motion.li
              layout
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className="w-full list-none cursor-zoom-in md:w-full"
              key={index}
              onClick={() => handleOpenImage(index)}>
              <Image
                src={image}
                alt={currentProject.title}
                width={633}
                height={554}
                quality={100}
                className="w-full h-full"
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <div className="absolute flex justify-center mt-8 transform -translate-x-1/2 -bottom-24 left-1/2 sm:mt-0">
        <Button
          size="lg"
          onClick={handleToggleShowAll}
          className="flex-col gap-3 text-sm border-4 rounded-full sm:text-base size-28 sm:size-40 border-muted">
          {hideShowAll ? (
            <ArrowUpIcon className="animate-bounce size-6 sm:size-8" />
          ) : (
            <ArrowDownIcon className="animate-bounce size-6 sm:size-8" />
          )}
          {hideShowAll ? 'Ver menos' : 'Ver mais'}
        </Button>
      </div>
    </div>
  );
};

export default ProjectGallery;
