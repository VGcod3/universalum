"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "../atoms";
import { Button } from "../ui/button";

export const ProjectGallery = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 px-4 md:px-0">
      <div className="h-[1312px] bg-grayscale-gray3 hidden md:flex items-center justify-between px-4">
        <Button
          className="bg-primary-light text-grayscale-white hover:bg-primary-medium hover:text-grayscale-white hover:border-primary-medium"
          variant="icon"
          size="icon"
          aria-label="Previous slide"
        >
          <ArrowLeftIcon className="w-6 h-6 font-light" />
        </Button>
        <div className="w-[560px] h-full bg-grayscale-gray5"></div>
        <Button
          className="bg-primary-light text-grayscale-white hover:bg-primary-medium hover:text-grayscale-white hover:border-primary-medium"
          variant="icon"
          size="icon"
          aria-label="Next slide"
        >
          <ArrowRightIcon className="w-6 h-6 font-light" />
        </Button>
      </div>

      <div className="h-[25rem] md:h-[1312px] bg-grayscale-gray5 md:hidden flex w-full"></div>

      <div className="grid gap-4 grid-cols-10 w-full">
        <div className="bg-grayscale-gray5 h-30 col-span-2"></div>
        <div className="bg-grayscale-gray5 h-30 col-span-2"></div>
        <div className="bg-grayscale-gray5 h-30 col-span-2"></div>
        <div className="bg-grayscale-gray5 h-30 col-span-2"></div>
        <div className="bg-grayscale-gray5 h-30 col-span-2"></div>
      </div>
    </div>
  );
};
