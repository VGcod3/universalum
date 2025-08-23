import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-between gap-2 whitespace-nowrap transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "bg-grayscale-white hover:bg-accent-orange text-grayscale-black hover:text-grayscale-white text-button rounded-md border border-grayscale-gray3 hover:border-accent-orange justify-between",
        icon: "bg-transparent text-grayscale-white hover:text-accent-orange border border-grayscale-white hover:border-accent-orange rounded-md justify-center",
      },

      size: {
        default: "h-12 w-[293px] p-1 pl-4 gap-2.5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,

  asChild = false,
  children,
  size,
  variant,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  const isDefault = variant === "default" || !variant;

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ className, size, variant }))}
      {...props}
    >
      {children}
      {isDefault && (
        <ArrowRight className="w-10 h-10 bg-accent-orange rounded p-2 text-grayscale-white" />
      )}
    </Comp>
  );
}

export { Button };
