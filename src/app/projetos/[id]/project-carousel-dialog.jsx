'use client';

import React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const ProjectCarouselDialog = ({
  isOpen,
  handleOpenChange,
  currentProject,
  currentImageIndex,
}) => (
  <Dialog open={isOpen} onOpenChange={handleOpenChange}>
    <DialogContent className="bg-transparent sm:max-w-[1200px] w-[85vw] h-[85vh]: border-none">
      <Carousel
        opts={{ startIndex: currentImageIndex }}
        className="mx-2 mt-8 sm:mx-6">
        <CarouselContent className="bg-transparent border-none">
          {currentProject.gallery.map((image, index) => (
            <CarouselItem key={index} className="flex items-center w-full">
              <Image
                src={image}
                alt={currentProject.title}
                width={1200}
                height={900}
                objectFit="contain"
                quality={100}
                className="max-h-[85vh] object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-12" />
        <CarouselNext className="-right-12" />
      </Carousel>
    </DialogContent>
  </Dialog>
);
