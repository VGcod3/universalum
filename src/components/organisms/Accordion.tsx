/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  title: string;
  content: string[];
}

export const AnimatedAccordion = ({
  accordionData,
}: {
  accordionData: AccordionItem[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-grayscale-gray1">
          <button
            className="flex justify-between items-center w-full text-left text-subtitle-1 py-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span
              className={cn(
                "transition-transform duration-300",
                activeIndex === index ? "rotate-180" : "rotate-0"
              )}
            >
              {activeIndex === index ? (
                <img src="/icons/Minus.svg" alt="-" />
              ) : (
                <img src="/icons/Plus.svg" alt="+" />
              )}
            </span>
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-500",
              activeIndex === index ? "max-h-screen" : "max-h-0"
            )}
          >
            <ul className="my-4 pl-4 list-disc">
              {item.content.map((contentItem, contentIndex) => (
                <li key={contentIndex} className="text-body-2">
                  {contentItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
