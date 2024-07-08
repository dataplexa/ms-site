import * as React from "react";
import Link from "next/link";
import {
  usePathname,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import useHash from "@/hooks/use-hash";

export function MobileNav({ headerHasScrolled }) {
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const pathname = usePathname();
  const hash = useHash();

  React.useEffect(() => {
    setSheetOpen(false);
  }, [pathname, hash]);

  return (
    <Sheet className="md:hidden" open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="secondary" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Link className="size-8" href="/">
            <Logo className="w-full h-full" />
          </Link>
        </SheetHeader>
        <nav className="flex flex-col items-end gap-8 py-20 text-xl">
          <Link
            href="/"
            className={cn(
              "font-heading tracking-wider border-b-2 border-b-transparent transition-colors hover:text-primary/80",
              !hash && pathname === "/"
                ? "text-accent border-b-accent"
                : "text-primary hover:text-primary/80"
            )}
          >
            INICIO
          </Link>

          <Link
            href="/#about"
            scroll={true}
            className={cn(
              "font-heading tracking-wider border-b-2 border-b-transparent transition-colors hover:text-primary/80",
              hash === "about"
                ? "text-accent border-b-accent"
                : "text-primary hover:text-primary/80"
            )}
          >
            SOBRE
          </Link>

          <Link
            href="/projetos"
            className={cn(
              "font-heading tracking-wider border-b-2 border-b-transparent transition-colors hover:text-primary/80",
              !hash && pathname === "/projects"
                ? "text-accent border-b-accent"
                : "text-primary hover:text-primary/80"
            )}
          >
            PROJETOS
          </Link>

          <Link
            href="/#imprensa"
            scroll={true}
            className={cn(
              "font-heading tracking-wider border-b-2 border-b-transparent transition-colors hover:text-primary/80",
              hash === "imprensa"
                ? "text-accent border-b-accent"
                : "text-primary hover:text-primary/80"
            )}
          >
            IMPRENSA
          </Link>

          <Link
            href="/#contact"
            scroll={true}
            className={cn(
              "font-heading tracking-wider border-b-2 border-b-transparent transition-colors hover:text-primary/80",
              hash === "contact"
                ? "text-accent border-b-accent"
                : "text-primary hover:text-primary/80"
            )}
          >
            CONTATO
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
