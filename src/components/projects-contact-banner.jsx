"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";

export function ContactBanner({ headerHasScrolled }) {
  const pathname = usePathname();

  return (
    <section className="w-full h-60 sm:h-[420px] md:h-[520px] bg-[url(/contact-banner.png)] bg-center bg-cover">
      <div className="w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-5 sm:gap-9">
        <h3 className="text-xl sm:text-4xl md:text-5xl text-white font-bold">
          Tem algum projeto em mente ?
        </h3>

        <p className="text-white text-xs sm:text-base">
          Entre em contato com a nossa equipe.
        </p>

        <Button className="" variant="transparent" size="md">
          <Link href="/#contact">Vamos conversar</Link>
        </Button>
      </div>
    </section>
  );
}