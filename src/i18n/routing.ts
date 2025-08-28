import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { DEFAULT_LANGUAGE } from "@/config/constants";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ua", "pl"],

  // Used when no locale matches
  defaultLocale: DEFAULT_LANGUAGE,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
