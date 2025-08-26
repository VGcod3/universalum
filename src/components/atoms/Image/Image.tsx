import React from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const imageVariants = cva("", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    fit: {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
      none: "object-none",
      "scale-down": "object-scale-down",
    },
  },
  defaultVariants: {
    rounded: "none",
    fit: "cover",
  },
});

type ImageVariants = VariantProps<typeof imageVariants>;

export interface ImageProps extends NextImageProps {
  rounded?: ImageVariants["rounded"];
  fit?: ImageVariants["fit"];
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, rounded, fit, ...props }, ref) => {
    return (
      <NextImage
        ref={ref}
        className={cn(imageVariants({ rounded, fit }), className)}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";
