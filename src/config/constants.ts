import { NavigationItem, Language } from "@/types";
import { Tags } from "@/types/tags.enum";

// Site Configuration
export const SITE_CONFIG = {
  name: "Universalum",
  description:
    "Група компаній, що виконують інженерно-геологічні та геодезичні вишукування, проектування, будівельно-монтажні роботи",
  url: "https://universalum.com",
  ogImage: "/og-image.jpg",
  keywords: [
    "будівництво",
    "проектування",
    "інженерно-геологічні вишукування",
    "геодезичні вишукування",
    "архітектура",
    "Україна",
  ],
} as const;

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

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  slider: 1000,
} as const;

// Breakpoints (should match Tailwind config)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Hero slider configuration
export const HERO_SLIDER_CONFIG = {
  autoplayInterval: 6000,
  autoplayResumeDelay: 10000,
} as const;

// Contact information
export const CONTACT_INFO = {
  email: "info@universalum.com",
  phone: "+380 XX XXX XX XX",
  address: "Адреса офісу, Київ, Україна",
} as const;

// Social media links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/universalum",
  instagram: "https://instagram.com/universalum",
  linkedin: "https://linkedin.com/company/universalum",
} as const;
