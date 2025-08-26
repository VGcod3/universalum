import React from "react";
import { Text } from "@/components/atoms";
import { cn } from "@/lib/utils";

export interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outlined";
  color?: "default" | "primary" | "orange";
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    { children, className, variant = "default", color = "default", ...props },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center px-2 py-1 rounded transition-all duration-300";

    const variantClasses = {
      default: {
        default: "bg-white/20 backdrop-blur-sm hover:bg-white/30",
        primary:
          "bg-primary-light/20 text-primary-medium backdrop-blur-sm hover:bg-primary-light/30",
        orange:
          "bg-accent-orange/20 text-accent-orange backdrop-blur-sm hover:bg-accent-orange/30",
      },
      outlined: {
        default:
          "border border-grayscale-gray3 bg-transparent hover:border-grayscale-gray4",
        primary:
          "border border-primary-light text-primary-medium hover:border-primary-medium",
        orange:
          "border border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white",
      },
    };

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant][color], className)}
        {...props}
      >
        <Text variant="body3" as="span" color="white">
          {children}
        </Text>
      </div>
    );
  }
);

Tag.displayName = "Tag";
