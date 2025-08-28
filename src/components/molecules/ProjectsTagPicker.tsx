"use client";

import { Tags } from "@/types/tags.enum";
import { TagItem } from "./TagItem";
import { tags } from "@/config/constants";

export const ProjectsTagPicker = ({
  activeTag,
  setActiveTag,
}: {
  activeTag: Tags;
  setActiveTag: (tag: Tags) => void;
}) => {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <TagItem
          key={tag.label}
          tag={tag.tag}
          onClick={setActiveTag}
          isActive={activeTag === tag.tag}
        />
      ))}
    </div>
  );
};
