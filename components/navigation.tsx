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
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-lg" />
        <div className="absolute inset-0 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)]" />
        
        <div className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12">
          <Link href="/" className="text-2xl font-bold text-foreground">
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
              className="bg-foreground text-background hover:bg-foreground/95 px-8 rounded-full w-40 transition-all" 
              buttonText={t("about.hero.contactButton")} 
              iconType="phone"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
