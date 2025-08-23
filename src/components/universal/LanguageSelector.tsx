"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Language = {
  code: string;
  name: string;
  flagSrc: string;
};

const languages: Language[] = [
  {
    code: "en",
    name: "English",
    flagSrc: "/flags/FlagUK.svg",
  },
  {
    code: "uk",
    name: "Українська",
    flagSrc: "/flags/FlagUA.svg",
  },
  {
    code: "pl",
    name: "Polski",
    flagSrc: "/flags/FlagPL.svg",
  },
];

export function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState("en");

  // Get the currently selected language object
  const currentLanguage =
    languages.find((lang) => lang.code === selectedLang) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center px-3 py-2 rounded-lg bg-white",
            "transition-all duration-200 text-grayscale-black font-medium",
            "hover:bg-grayscale-gray1 focus:outline-none focus:ring-2 focus:ring-accent-orange/50"
          )}
          aria-label="Select language"
        >
          {/* Current language flag */}
          <Image
            src={currentLanguage.flagSrc}
            width={20}
            height={15}
            alt={`${currentLanguage.name} Flag`}
            className="mr-2"
          />

          {/* Current language code */}
          <span className="uppercase">{currentLanguage.code}</span>

          {/* Dropdown icon */}
          <ChevronDown className="ml-1 w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className=" mt-1">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="cursor-pointer flex items-center justify-between"
            onClick={() => setSelectedLang(lang.code)}
          >
            <div className="flex items-center">
              {/* Flag */}
              <Image
                src={lang.flagSrc}
                width={20}
                height={15}
                alt={`${lang.name} Flag`}
                className="mr-2"
              />

              {/* Language code */}
              <span className="uppercase font-medium">{lang.code}</span>
            </div>

            {/* Check mark for selected language */}
            {selectedLang === lang.code && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
