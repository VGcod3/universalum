"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Image } from "@/components/atoms";
import {
  NavigationTabs,
  LanguageDropdown,
  type NavigationItem,
  type Language,
} from "@/components/molecules";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks";
import {
  NAVIGATION_ITEMS,
  LANGUAGES,
  DEFAULT_LANGUAGE,
} from "@/config/constants";
import { cn } from "@/lib/utils";

export interface SiteHeaderProps {
  navigationItems?: NavigationItem[];
  availableLanguages?: Language[];
  onContactClick?: () => void;
  className?: string;
}

export const SiteHeader = React.forwardRef<HTMLElement, SiteHeaderProps>(
  (
    {
      navigationItems = NAVIGATION_ITEMS,
      availableLanguages = LANGUAGES,
      onContactClick,
      className,
      ...props
    },
    ref
  ) => {
    const [selectedLanguage, setSelectedLanguage] =
      useState<string>(DEFAULT_LANGUAGE);
    const router = useRouter();
    const pathname = usePathname();
    const { isScrolled } = useScroll({ threshold: 10 });

    // Determine the active tab based on pathname
    const activeTab = React.useMemo(() => {
      const item = navigationItems.find((item) => item.href === pathname);
      return item?.value || navigationItems[0].value;
    }, [navigationItems, pathname]);

    // Handle tab change
    const handleTabChange = (value: string) => {
      const item = navigationItems.find((item) => item.value === value);
      if (item) {
        router.push(item.href);
      }
    };

    // Handle language change
    const handleLanguageChange = (languageCode: string) => {
      setSelectedLanguage(languageCode);
      // Here you would typically implement language switching logic
    };

    // Handle contact button click
    const handleContactClick = () => {
      if (onContactClick) {
        onContactClick();
      } else {
        // Default behavior - could scroll to contact section or open modal
        console.log("Contact button clicked");
      }
    };

    return (
      <header
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "backdrop-blur" : "bg-transparent",
          className
        )}
        {...props}
      >
        {/* Logo Section */}
        <div className="absolute left-0 top-0 flex">
          <Image
            src="/logo/Universalum.png"
            alt="Universalum Logo"
            width={95}
            height={80}
          />
          <Image src="/logo/TGD.png" alt="TGD Logo" width={95} height={80} />
        </div>

        {/* Main Navigation */}
        <div className="mx-auto container flex relative justify-center py-4">
          <div className="flex gap-5">
            <NavigationTabs
              items={navigationItems}
              activeValue={activeTab}
              onValueChange={handleTabChange}
            />
            <LanguageDropdown
              languages={availableLanguages}
              selectedLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
            />
          </div>

          {/* Contact Button */}
          <Button className="absolute right-0" onClick={handleContactClick}>
            Зв&apos;яжіться з нами
          </Button>
        </div>
      </header>
    );
  }
);

SiteHeader.displayName = "SiteHeader";
