import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-ubuntu", {
  variants: {
    variant: {
      body1: "text-body-1 font-normal tracking-body-1 leading-[150%]",
      body2: "text-body-2 font-normal tracking-body-2 leading-[150%]",
      body3: "text-body-3 font-normal tracking-body-3 leading-[150%]",
      subtitle1:
        "text-subtitle-1 font-medium tracking-subtitle-1 leading-[130%]",
      subtitle2:
        "text-subtitle-2 font-normal tracking-subtitle-2 leading-[150%]",
      button:
        "text-button font-medium tracking-button leading-[150%] uppercase",
    },
    color: {
      default: "text-grayscale-black",
      white: "text-grayscale-white",
      orange: "text-accent-orange",
      primary: "text-primary-medium",
      gray: "text-grayscale-gray5",
    },
  },
  defaultVariants: {
    variant: "body1",
    color: "default",
  },
});

type TextElement = HTMLParagraphElement | HTMLSpanElement | HTMLDivElement;

export interface TextProps
  extends Omit<React.HTMLAttributes<TextElement>, "color">,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

export const Text = React.forwardRef<TextElement, TextProps>(
  ({ className, variant, color, as = "p", children, ...props }, ref) => {
    if (as === "span") {
      return (
        <span
          ref={ref as React.RefObject<HTMLSpanElement>}
          className={cn(textVariants({ variant, color }), className)}
          {...props}
        >
          {children}
        </span>
      );
    }

    if (as === "div") {
      return (
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(textVariants({ variant, color }), className)}
          {...props}
        >
          {children}
        </div>
      );
    }

    return (
      <p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className={cn(textVariants({ variant, color }), className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";
