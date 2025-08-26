"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface NavigationItem {
  label: string;
  value: string;
  href: string;
}

export interface NavigationTabsProps {
  items: NavigationItem[];
  activeValue: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export const NavigationTabs = React.forwardRef<
  HTMLDivElement,
  NavigationTabsProps
>(({ items, activeValue, onValueChange, className, ...props }, ref) => {
  return (
    <Tabs
      ref={ref}
      value={activeValue}
      onValueChange={onValueChange}
      className={cn(
        "w-full bg-grayscale-white rounded-md p-2 max-w-md",
        className
      )}
      {...props}
    >
      <TabsList className="w-full bg-transparent flex justify-between">
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className={cn(
              "h-12 py-2 px-4 font-normal text-body-1 relative transition-all hover:text-accent-orange text-grayscale-black data-[state=active]:shadow-none data-[state=active]:bg-transparent",
              "after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-1 after:h-1 after:bg-accent-orange"
            )}
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
});

NavigationTabs.displayName = "NavigationTabs";
