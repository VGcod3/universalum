"use client";
import { useState } from "react";
import { ProjectsTagPicker } from "../molecules/ProjectsTagPicker";
import { Tags } from "@/types/tags.enum";
import { ProjectCard } from "../molecules";
import { useTranslations } from "next-intl";

export const ProjectsBlock = () => {
  const t = useTranslations();

  const objects = [
    {
      img: "/projects/Project1.jpg",
      tags: [Tags.CONCEPT],
      title: t("projects.items.concept1"),
    },
    {
      img: "/projects/Project2.jpg",
      tags: [Tags.DESIGN, Tags.CONSTRUCTION],
      title: t("projects.items.construction1"),
    },
    {
      img: "/projects/Project3.jpg",
      tags: [Tags.CONCEPT, Tags.DESIGN],
      title: t("projects.items.concept2"),
    },
    {
      img: "/projects/Project2.jpg",
      tags: [Tags.DESIGN, Tags.CONSTRUCTION],
      title: t("projects.items.construction1"),
    },
    {
      img: "/projects/Project2.jpg",
      tags: [Tags.DESIGN, Tags.CONSTRUCTION],
      title: t("projects.items.construction1"),
    },
    {
      img: "/projects/Project3.jpg",
      tags: [Tags.CONCEPT, Tags.DESIGN],
      title: t("projects.items.concept2"),
    },
    {
      img: "/projects/Project2.jpg",
      tags: [Tags.DESIGN, Tags.CONSTRUCTION],
      title: t("projects.items.construction1"),
    },
  ];

  const [activeTag, setActiveTag] = useState<Tags>(Tags.ALL);

  const activeObjects =
    activeTag === Tags.ALL
      ? objects
      : objects.filter((obj) => obj.tags.includes(activeTag));

  return (
    <div>
      <ProjectsTagPicker activeTag={activeTag} setActiveTag={setActiveTag} />

      <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {activeObjects.map((obj, index) => (
          <ProjectCard
            key={index}
            image={obj.img}
            title={obj.title}
            tags={obj.tags}
            className="col-span-1"
          />
        ))}
      </div>
    </div>
  );
};
