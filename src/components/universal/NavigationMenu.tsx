"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export type NavigationItem = {
  label: string;
  value: string;
  href: string;
};

const defaultNavItems: NavigationItem[] = [
  {
    label: "Головна",
    value: "home",
    href: "/",
  },
  {
    label: "Про компанію",
    value: "about",
    href: "/about",
  },
  {
    label: "Об'єкти",
    value: "projects",
    href: "/projects",
  },
  {
    label: "Послуги",
    value: "services",
    href: "/services",
  },
];

interface NavigationMenuProps {
  items?: NavigationItem[];
  className?: string;
}

export function NavigationMenu({
  items = defaultNavItems,
  className,
}: NavigationMenuProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Determine the active tab based on the current pathname
  const activeTab = React.useMemo(() => {
    const currentPath = pathname;
    const item = items.find((item) => item.href === currentPath);
    return item?.value || items[0].value;
  }, [items, pathname]);

  // Handle tab change
  const handleTabChange = (value: string) => {
    const item = items.find((item) => item.value === value);
    if (item) {
      router.push(item.href);
    }
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className={cn(
        "w-full bg-grayscale-white rounded-md p-2 max-w-md",
        className
      )}
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
}
