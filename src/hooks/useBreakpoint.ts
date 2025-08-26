import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/config/constants";

type BreakpointKey = keyof typeof BREAKPOINTS;

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<BreakpointKey>("sm");
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWindowSize({ width, height });

      // Determine current breakpoint
      if (width >= BREAKPOINTS["2xl"]) {
        setBreakpoint("2xl");
      } else if (width >= BREAKPOINTS.xl) {
        setBreakpoint("xl");
      } else if (width >= BREAKPOINTS.lg) {
        setBreakpoint("lg");
      } else if (width >= BREAKPOINTS.md) {
        setBreakpoint("md");
      } else {
        setBreakpoint("sm");
      }
    }

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = breakpoint === "sm";
  const isTablet = breakpoint === "md";
  const isDesktop = ["lg", "xl", "2xl"].includes(breakpoint);

  return {
    breakpoint,
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    isAbove: (bp: BreakpointKey) => windowSize.width >= BREAKPOINTS[bp],
    isBelow: (bp: BreakpointKey) => windowSize.width < BREAKPOINTS[bp],
  };
}
