import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva("shrink-0", {
  variants: {
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8",
      "2xl": "w-10 h-10",
    },
    color: {
      current: "text-current",
      white: "text-grayscale-white",
      black: "text-grayscale-black",
      orange: "text-accent-orange",
      primary: "text-primary-medium",
      gray: "text-grayscale-gray5",
    },
  },
  defaultVariants: {
    size: "md",
    color: "current",
  },
});

type IconVariants = VariantProps<typeof iconVariants>;

export interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "color" | "size"> {
  size?: IconVariants["size"];
  color?: IconVariants["color"];
  children: React.ReactNode;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size, color, children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn(iconVariants({ size, color }), className)}
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = "Icon";
