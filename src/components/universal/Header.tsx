"use client";

import React, { useState, useEffect } from "react";
import { NavigationMenu } from "@/components/universal/NavigationMenu";
import { LanguageSelector } from "@/components/universal/LanguageSelector";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Add a threshold of 10px before considering the page scrolled
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case page loads already scrolled
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // When scrolled, add backdrop blur and subtle background
        isScrolled ? " backdrop-blur" : "bg-transparent"
      )}
    >
      <div className="absolute left-0 top-0 flex">
        <Image src="/logo/Universalum.png" alt="Logo" width={95} height={80} />
        <Image src="/logo/TGD.png" alt="Logo" width={95} height={80} />
      </div>
      <div className="mx-auto max-w-[82rem] flex relative justify-center py-4">
        <div className="flex gap-5">
          <NavigationMenu />
          <LanguageSelector />
        </div>
        <Button className="absolute right-0">Зв&apos;яжіться з нами</Button>
      </div>
    </header>
  );
}
