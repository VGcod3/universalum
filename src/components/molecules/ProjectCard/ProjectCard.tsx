import React from "react";
import { Image, Heading, PlusIcon } from "@/components/atoms";
import { Tag } from "@/components/molecules/Tag";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  image: string;
  title: string;
  tags: string[];
  onClick?: () => void;
  className?: string;
}

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, title, tags, onClick, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-lg overflow-hidden cursor-pointer h-[350px] flex flex-col justify-end",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          fit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />

        {/* Content overlay */}
        <div className="p-6 text-grayscale-white z-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <Tag key={index} variant="default">
                {tag}
              </Tag>
            ))}
          </div>

          <div className="flex gap-4 w-full justify-between">
            {/* Title */}
            <Heading
              level="h5"
              color="white"
              className="transition-colors duration-300"
            >
              {title}
            </Heading>

            {/* Plus icon button  */}
            <div className="h-10 min-w-10 rounded bg-white flex items-center justify-center text-grayscale-black hover:bg-accent-orange hover:text-white transition-colors duration-300">
              <PlusIcon size="md" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
