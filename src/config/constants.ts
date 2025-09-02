import { NavigationItem, Language } from "@/types";
import { Tags } from "@/types/tags.enum";

// Navigation Configuration
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "navigation.home",
    value: "home",
    href: "/",
  },
  {
    label: "navigation.about",
    value: "about",
    href: "/about",
  },
  {
    label: "navigation.projects",
    value: "projects",
    href: "/projects",
  },
  {
    label: "navigation.services",
    value: "services",
    href: "/services",
  },
] as const;

// Language Configuration
export const LANGUAGES: Language[] = [
  {
    code: "ua",
    name: "Ukrainian",
    nativeName: "Українська",
    flagSrc: "/flags/FlagUA.svg",
  },
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flagSrc: "/flags/FlagUK.svg",
  },
  {
    code: "pl",
    name: "Polish",
    nativeName: "Polski",
    flagSrc: "/flags/FlagPL.svg",
  },
] as const;

export const tags = [
  {
    tag: Tags.ALL,
    label: "projects.all",
    stroke: "border-additional-purple",
  },
  {
    tag: Tags.CONCEPT,
    label: "projects.concept",
    stroke: "border-additional-red",
  },
  {
    tag: Tags.DESIGN,
    label: "projects.design",
    stroke: "border-primary-medium",
  },
  {
    tag: Tags.CONSTRUCTION,
    label: "projects.construction",
    stroke: "border-accent-orange",
  },
];

// Default language
export const DEFAULT_LANGUAGE = "ua" as const;
