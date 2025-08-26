import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRightIcon } from "@/components/atoms";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] font-medium",
  {
    variants: {
      variant: {
        default:
          "bg-grayscale-white hover:bg-accent-orange text-grayscale-black hover:text-grayscale-white text-button rounded-md border border-grayscale-gray3 hover:border-accent-orange",
        primary:
          "bg-primary-medium hover:bg-primary-dark text-grayscale-white border border-primary-medium hover:border-primary-dark rounded-md",
        secondary:
          "bg-grayscale-gray1 hover:bg-grayscale-gray2 text-grayscale-black border border-grayscale-gray2 hover:border-grayscale-gray3 rounded-md",
        outline:
          "bg-transparent border-2 border-current hover:bg-current text-current hover:text-white rounded-md",
        ghost:
          "bg-transparent hover:bg-grayscale-gray1 text-grayscale-black rounded-md",
        icon: "bg-transparent text-grayscale-white hover:text-accent-orange border border-grayscale-white hover:border-accent-orange rounded-md",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        default: "h-12 pl-4 pr-1",
        lg: "h-14 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      showArrow,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Show arrow by default for default variant, but allow override
    const shouldShowArrow =
      showArrow !== undefined
        ? showArrow
        : (variant === "default" || !variant) && size !== "icon";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
        {shouldShowArrow && (
          <div className="w-10 h-10 bg-accent-orange rounded p-2 text-grayscale-white flex items-center justify-center">
            <ArrowRightIcon size="md" />
          </div>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
