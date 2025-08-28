import React from "react";
import { Image, CheckIcon } from "@/components/atoms";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@/components/atoms";
import { cn } from "@/lib/utils";

export interface Language {
  code: string;
  name: string;
  flagSrc: string;
}

export interface LanguageDropdownProps {
  languages: Language[];
  selectedLanguage: string;
  onLanguageChange: (languageCode: string) => void;
  className?: string;
}

export const LanguageDropdown = React.forwardRef<
  HTMLButtonElement,
  LanguageDropdownProps
>(
  (
    { languages, selectedLanguage, onLanguageChange, className, ...props },
    ref
  ) => {
    const currentLanguage =
      languages.find((lang) => lang.code === selectedLanguage) || languages[0];

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            ref={ref}
            className={cn(
              "flex items-center px-3 py-2 rounded-lg bg-white",
              "transition-all duration-200 text-grayscale-black font-medium",
              "hover:bg-grayscale-gray1 focus:outline-none focus:ring-2 focus:ring-accent-orange/50",
              className
            )}
            aria-label="Select language"
            {...props}
          >
            <span className="mr-2 inline-flex w-6 h-4 items-center justify-center">
              <Image
                src={currentLanguage.flagSrc}
                width={20}
                height={15}
                alt={`${currentLanguage.name} Flag`}
              />
            </span>
            <span className="uppercase">{currentLanguage.code}</span>
            <ChevronDownIcon size="sm" className="ml-1" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="mt-1">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              className="cursor-pointer flex items-center justify-between"
              onClick={() => onLanguageChange(lang.code)}
            >
              <div className="flex items-center">
                <span className="mr-2 inline-flex w-6 h-4 items-center justify-center">
                  <Image
                    src={lang.flagSrc}
                    width={20}
                    height={15}
                    alt={`${lang.name} Flag`}
                  />
                </span>
                <span className="uppercase font-medium">{lang.code}</span>
              </div>
              {selectedLanguage === lang.code && (
                <CheckIcon size="sm" className="ml-2" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

LanguageDropdown.displayName = "LanguageDropdown";
