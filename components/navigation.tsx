"use client"

import Link from "next/link"
import { FIRM_INFO } from "@/lib/constants"
import { useI18n } from "./i18n-provider"
import LanguageSwitcher from "./language-switcher"
import CalAIWidget from "./calai"

export default function Navigation() {
  const { t } = useI18n()

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2">
      <div className="rounded-xl border border-border bg-background/80 backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          <Link href="/" className="text-2xl font-bold text-primary">
            {FIRM_INFO.name}
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/properties" className="text-foreground hover:text-primary transition-colors font-medium">
              {t("common.nav.properties")}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              {t("common.nav.about")}
            </Link>
            <LanguageSwitcher />
            <CalAIWidget 
              className="bg-primary text-white hover:bg-primary/90 px-8 rounded-full w-40" 
              buttonText={t("about.hero.contactButton")} 
              iconType="phone"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
