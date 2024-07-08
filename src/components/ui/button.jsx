import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-secondary hover:bg-muted hover:text-primary hover:shadow-md hover:shadow-accent/10",
        destructive: "bg-destructive text-destructive hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-white ",
        secondary: "bg-secondary text-primary hover:bg-secondary/80",
        ghost: "bg-secondary/90 text-accent hover:bg-secondary hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        transparent:
          "border border-input text-white bg-transparentt hover:bg-white hover:text-black",
        filter:
          "font-heading text-xs sm:text-base font-normal tracking-wider border-b-2 border-b-transparent transition-colors text-primary/80 hover:text-primary",
        filterActive:
          "font-heading text-xs sm:text-base font-normal tracking-wider border-b-2 border-b-transparent transition-colors text-primary border-b-primary",
        neutral:
          "font-heading font-bold tracking-wider border-none bg-transparent text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        auto: "h-max w-max px-1",
        sm: "h-9 px-3",
        md: "h-10 px-4 py-6",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
