"use client";

import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import { Heading, Text } from "@/components/atoms";
import { ProjectCard, SliderControls } from "@/components/molecules";
import { Button } from "@/components/ui/button";
import ProjectsSlider from "@/components/universal/ProjectsSlider";
import { cn } from "@/lib/utils";

export interface Project {
  id: number;
  title: string;
  tags: string[];
  image: string;
}

export interface ProjectsSectionProps {
  projects?: Project[];
  title?: string;
  description?: string;
  sectionLabel?: string;
  viewAllButtonText?: string;
  onViewAllClick?: () => void;
  onProjectClick?: (project: Project) => void;
  className?: string;
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title:
      "Концепція багатоквартирного житлового будинку з експлуатованою покрівлею",
    tags: ["Концепт"],
    image: "/projects/Project1.jpg",
  },
  {
    id: 2,
    title: "Будівництво багатоквартирного житлового будинку",
    tags: ["Проектування", "Будівництво"],
    image: "/projects/Project2.jpg",
  },
  {
    id: 3,
    title:
      "Концепція багатоквартирного житлового будинку з експлуатованою покрівлею",
    tags: ["Концепт", "Проектування"],
    image: "/projects/Project3.jpg",
  },
  {
    id: 4,
    title: "Багатоповерховий житловий комплекс",
    tags: ["Проектування", "Будівництво"],
    image: "/projects/Project1.jpg",
  },
  {
    id: 5,
    title: "Житловий квартал з інфраструктурою",
    tags: ["Будівництво"],
    image: "/projects/Project2.jpg",
  },
];

export const ProjectsSection = React.forwardRef<
  HTMLElement,
  ProjectsSectionProps
>(
  (
    {
      projects = defaultProjects,
      title = "Беремо на себе повний цикл робіт - від проведення аналітики потенціалу земельної ділянки до завершення будівництва та введення в експлуатацію. Працюємо відповідально, дотримуючись термінів, будівельних норм і стандартів.",
      sectionLabel = "Наші проєкти",
      viewAllButtonText = "Переглянути всі проєкти",
      onViewAllClick,
      onProjectClick,
      className,
      ...props
    },
    ref
  ) => {
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperType>();

    const numberOfSlides = projects.length;

    const handleChangeSlide = (slideIndex: number) => {
      const newIndex = (slideIndex + numberOfSlides) % numberOfSlides;
      swiper?.slideToLoop(newIndex);
      setActiveSlide(newIndex);
    };

    const handlePrevious = () => handleChangeSlide(activeSlide - 1);
    const handleNext = () => handleChangeSlide(activeSlide + 1);

    const handleViewAllClick = () => {
      if (onViewAllClick) {
        onViewAllClick();
      } else {
        // Default behavior - navigate to projects page
        console.log("View all projects clicked");
      }
    };

    const handleProjectClick = (project: Project) => {
      if (onProjectClick) {
        onProjectClick(project);
      } else {
        // Default behavior
        console.log("Project clicked:", project);
      }
    };

    useEffect(() => {
      if (swiper && projects.length > 0) {
        const newIndex = 0;
        swiper.slideToLoop(newIndex);
        setActiveSlide(newIndex);
      }
    }, [swiper, projects.length]);

    return (
      <section
        ref={ref}
        className={cn("w-full py-20 bg-white", className)}
        {...props}
      >
        <div className="container mx-auto px-3 md:px-0">
          {/* Header */}
          <div className="mb-12">
            {/* Section Label */}
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 rounded-full bg-accent-orange mr-2" />
              <Text variant="body1" color="orange" className="font-medium">
                {sectionLabel}
              </Text>
            </div>

            {/* Title and Controls */}
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <Heading
                level="h2"
                className="text-headline-4 md:text-headline-3 lg:text-headline-3 max-w-3xl lg:max-w-4xl"
              >
                {title}
              </Heading>

              <div className="hidden md:flex flex-col items-end gap-4 justify-between h-auto">
                <Button
                  className="whitespace-nowrap "
                  onClick={handleViewAllClick}
                >
                  {viewAllButtonText}
                </Button>
                <SliderControls
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  className="bg-primary-light text-grayscale-white hover:bg-primary-medium hover:text-grayscale-white hover:border-primary-medium"
                />
              </div>
            </div>
          </div>

          {/* Projects Slider */}
          <ProjectsSlider
            activeSlide={activeSlide}
            swiper={swiper}
            setSwiper={setSwiper}
            setActiveSlide={setActiveSlide}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  tags={project.tags}
                  onClick={() => handleProjectClick(project)}
                />
              </SwiperSlide>
            ))}
          </ProjectsSlider>

          {/* Mobile View All Button */}
          <div className="mt-8 md:hidden">
            <Button className="w-full" onClick={handleViewAllClick}>
              {viewAllButtonText}
            </Button>
          </div>
        </div>
      </section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";
