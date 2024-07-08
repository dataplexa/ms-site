'use client';

import * as React from 'react';
import Link from 'next/link';

import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Icons } from './icons';
import { motion } from 'framer-motion';

export function ProjectCard({ title, endpoint, coverImage, category }) {
  const categoryLabels = {
    onGoing: 'EM ANDAMENTO',
    residential: 'RESIDENCIAL',
    business: 'COMERCIAL',
  };

  const getCategoryLabel = (category) => {
    return categoryLabels[category];
  };

  return (
    <motion.div
      transition={{ duration: 0.4 }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}>
      <Card className="grid w-full h-full overflow-hidden border-none rounded-none group">
        <Image
          src={coverImage}
          alt={title}
          width={403}
          height={670}
          quality={100}
          className="object-fill w-full h-[460px] sm:h-[670px] col-start-1 col-end-3 row-start-1 row-end-3"
        />

        <div className="flex flex-col justify-end w-full col-start-1 col-end-3 row-start-1 row-end-3 transition-all duration-500 sm:opacity-0 bg-gradient-to-b from-black/10 to-black/90 group-hover:opacity-100 group-focus-within:opacity-100">
          <div
            id="hover-info"
            className="p-4 transition-all duration-300 ease-in-out delay-150 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 sm:group-focus-within:translate-y-0">
            <CardContent className="flex flex-col items-center w-full gap-5 p-0 pb-6 border-b border-gray-200 border-opacity-40">
              <h2 className="font-heading text-xs text-accent tracking-[0.3em]">
                {getCategoryLabel(category)}
              </h2>
              <p className="text-3xl text-center text-white font-bold tracking-[0.12em]">
                {title}
              </p>
            </CardContent>
            <div className="w-full px-0 pt-8 pb-4">
              <Button
                asChild
                variant="neutral"
                size="auto"
                className="flex justify-center w-full transition duration-300 ease-in-out delay-150 scale-105 hover:scale-125">
                <Link href={`/projetos/${endpoint}`}>
                  <Icons.arrowRight className="text-white" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
