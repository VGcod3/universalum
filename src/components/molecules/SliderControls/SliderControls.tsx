import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/atoms";
import { cn } from "@/lib/utils";

export interface SliderControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
  variant?: "default" | "centered";
}

export const SliderControls = React.forwardRef<
  HTMLDivElement,
  SliderControlsProps
>(({ onPrevious, onNext, className, variant = "default", ...props }, ref) => {
  const containerClasses =
    variant === "centered"
      ? "absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center gap-4"
      : "flex gap-2";

  return (
    <div ref={ref} className={cn(containerClasses)} {...props}>
      <Button
        variant="icon"
        size="icon"
        className={cn(className)}
        aria-label="Previous slide"
        onClick={onPrevious}
      >
        <ArrowLeftIcon className="w-6 h-6 font-light" />
      </Button>
      <Button
        variant="icon"
        size="icon"
        className={cn(className)}
        aria-label="Next slide"
        onClick={onNext}
      >
        <ArrowRightIcon className="w-6 h-6 font-light" />
      </Button>
    </div>
  );
});

SliderControls.displayName = "SliderControls";
