"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { translations, defaultLanguage, supportedLanguages } from "@/lib/i18n/translations"
import type { Language } from "@/lib/i18n/types"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
  supportedLanguages: Language[]
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const STORAGE_KEY = "i18n-language"

function getNestedValue(obj: any, path: string): string {
  return path.split(".").reduce((current, key) => current?.[key], obj) || path
}

function interpolate(template: string, params?: Record<string, string | number>): string {
  if (!params) return template
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return params[key]?.toString() || match
  })
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [mounted, setMounted] = useState(false)

  // Only read from localStorage after mount to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY) as Language
    if (stored && supportedLanguages.includes(stored)) {
      setLanguageState(stored)
    }
  }, [])

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, language)
    }
  }, [language, mounted])

  const setLanguage = useCallback((lang: Language) => {
    if (supportedLanguages.includes(lang)) {
      setLanguageState(lang)
    }
  }, [])

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const translation = getNestedValue(translations[language], key)
      if (typeof translation === "string") {
        return interpolate(translation, params)
      }
      return key
    },
    [language]
  )

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, supportedLanguages }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

