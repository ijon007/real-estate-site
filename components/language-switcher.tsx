"use client"

import { useI18n } from "./i18n-provider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const languageNames: Record<string, string> = {
  en: "English",
  sq: "Shqip",
}

export default function LanguageSwitcher() {
  const { language, setLanguage, supportedLanguages } = useI18n()

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as typeof language)}>
      <SelectTrigger className="w-[140px] rounded-xl border-border bg-muted text-foreground font-medium focus:ring-1 focus:ring-primary focus:ring-offset-0">
        <SelectValue>
          <span className="flex items-center gap-2">
            <span className="text-lg">{getLanguageFlag(language)}</span>
            {languageNames[language]}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="rounded-xl border-border">
        {supportedLanguages.map((lang) => (
          <SelectItem key={lang} value={lang}>
            <span className="flex items-center gap-2">
              <span className="text-lg">{getLanguageFlag(lang)}</span>
              {languageNames[lang]}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

function getLanguageFlag(lang: string): string {
  const flags: Record<string, string> = {
    en: "🇺🇸",
    sq: "🇦🇱",
  }
  return flags[lang] || "🌐"
}

