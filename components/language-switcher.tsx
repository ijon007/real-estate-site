"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useI18n } from "@/components/i18n-provider";

const languages = [
  {
    code: "en" as const,
    name: "EN",
    flag: "https://flagcdn.com/w20/gb.webp",
  },
  {
    code: "sq" as const,
    name: "SQ",
    flag: "https://flagcdn.com/w20/al.webp",
  },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center gap-2 border-border/50 bg-transparent text-black hover:bg-transparent hover:text-black"
          size="sm"
          variant="outline"
        >
          <Image
            alt={`${currentLang?.name} flag`}
            className="rounded-xs"
            height="15"
            src={currentLang?.flag || ""}
            width="20"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px] bg-background text-black border-border">
        <DropdownMenuRadioGroup
          onValueChange={(value) => {
            setLanguage(value as "en" | "sq");
          }}
          value={language}
        >
          {languages.map((lang) => (
            <DropdownMenuRadioItem
              className="flex items-center gap-2 cursor-pointer text-black data-highlighted:bg-white/90 data-highlighted:text-black"
              key={lang.code}
              value={lang.code}
            >
              <Image
                alt={`${lang.name} flag`}
                className="rounded-xs"
                height="15"
                src={lang.flag}
                width="20"
              />
              <span>{lang.name}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}