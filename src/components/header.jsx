"use client";

import React from "react";
import Link from "next/link";
import { MainNav } from "./main-nav";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

const Header = ({ animateScroll }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;

      setScrollPosition(scrollTop);
    });
  }, []);

  const headerHasScrolled = !animateScroll ? true : scrollPosition > 100;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all",
        headerHasScrolled ? "bg-background py-2" : "py-5"
      )}
    >
      <div className={cn("container flex items-center justify-between")}>
        <Link href="/">
          <Logo
            className={cn(
              "w-10 h-10 transition-colors",
              headerHasScrolled ? "text-primary" : "text-secondary"
            )}
            aria-hidden
          />

          <span className="sr-only">M2 Arquitetura</span>
        </Link>

        <MainNav headerHasScrolled={headerHasScrolled} />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
