import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-ubuntu", {
  variants: {
    level: {
      h1: "text-headline-1 font-medium tracking-headline-1 leading-[110%]",
      h2: "text-headline-2 font-medium tracking-headline-2 leading-[110%]",
      h3: "text-headline-3 font-medium tracking-headline-3 leading-[120%]",
      h4: "text-headline-4 font-normal tracking-headline-4 leading-[130%]",
      h5: "text-headline-5 font-medium tracking-headline-5 leading-[130%]",
      h6: "text-headline-6 font-normal tracking-headline-6 leading-[130%]",
    },
    color: {
      default: "text-grayscale-black",
      white: "text-grayscale-white",
      orange: "text-accent-orange",
      primary: "text-primary-medium",
    },
  },
  defaultVariants: {
    level: "h2",
    color: "default",
  },
});

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h2", color, as, children, ...props }, ref) => {
    const Component = as || level || "h2";

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, color }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";
