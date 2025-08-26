import { useState, useEffect } from "react";
import { debounce } from "@/lib/utils";

export interface UseScrollProps {
  threshold?: number;
  debounceMs?: number;
}

export function useScroll({
  threshold = 10,
  debounceMs = 100,
}: UseScrollProps = {}) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollData = debounce(() => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");

      lastScrollY = currentScrollY;
    }, debounceMs);

    const handleScroll = () => updateScrollData();

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    updateScrollData();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, debounceMs]);

  return {
    scrollY,
    isScrolled,
    scrollDirection,
  };
}
