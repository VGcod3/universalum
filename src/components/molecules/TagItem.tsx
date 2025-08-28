import { tags } from "@/config/constants";
import { cn } from "@/lib/utils";
import { Tags } from "@/types/tags.enum";
import { useTranslations } from "next-intl";

export const TagItem = ({
  tag,
  onClick,
  isActive,
  className,
}: {
  tag: Tags;
  onClick: (tag: Tags) => void | undefined;
  isActive: boolean;
  className?: string;
}) => {
  const validTag = tags.find((item) => item.tag === tag);

  const t = useTranslations();

  return (
    <button
      className={cn(
        "px-2 py-1 border rounded-md cursor-pointer",
        validTag?.stroke,
        isActive && "bg-accent-orange text-white border-accent-orange",
        className
      )}
      onClick={() => onClick(tag)}
    >
      {t(validTag?.label ?? "")}
    </button>
  );
};
