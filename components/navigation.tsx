"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { House, Menu, X } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import LanguageSwitcher from "@/components/language-switcher"
import CalAIWidget from "@/components/calai"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const { t } = useI18n()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-3 sm:px-6">
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-lg" />
        <div className="absolute inset-0 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)]" />
        
        <div className="relative z-10 flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4">
          <Link href="/" className="flex flex-row items-center justify-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <House className="size-8 font-bold text-primary" />
            <span className="hidden md:flex text-lg text-foreground font-semibold">Selman Lila Real Estate</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5">
            <Link href="/properties" className="text-foreground hover:text-primary transition-colors font-medium">
              {t("common.nav.properties")}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              {t("common.nav.about")}
            </Link>
            <LanguageSwitcher />
            <CalAIWidget
              className="bg-primary text-background hover:bg-primary/90 px-6 lg:px-8 rounded-full transition-all whitespace-nowrap" 
              buttonText={t("about.hero.contactButton")} 
              iconType="phone"
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative size-4">
              <Menu className={`absolute inset-0 size-4 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
              <X className={`absolute inset-0 size-4 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden relative z-20 border-white/30 border-t-0 overflow-hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 border-t' 
            : 'max-h-0 opacity-0 border-t-0'
        }`}>
          <div className={`flex flex-col gap-4 px-6 py-4 transform transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-4 opacity-0'
          }`}>
            <Link 
              href="/properties" 
              className={`text-foreground hover:text-primary transition-all font-medium py-2 transform ${
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100 delay-75' 
                  : '-translate-x-4 opacity-0'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("common.nav.properties")}
            </Link>
            <Link 
              href="/about" 
              className={`text-foreground hover:text-primary transition-all font-medium py-2 transform ${
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100 delay-150' 
                  : '-translate-x-4 opacity-0'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("common.nav.about")}
            </Link>
            <div className={`flex items-center gap-4 py-2 transform transition-all ${
              isMobileMenuOpen 
                ? 'translate-x-0 opacity-100 delay-200' 
                : '-translate-x-4 opacity-0'
            }`}>
              <span className="text-foreground font-medium">Language</span>
              <LanguageSwitcher />
            </div>
            <div className={`transform transition-all ${
              isMobileMenuOpen 
                ? 'translate-x-0 opacity-100 delay-300' 
                : '-translate-x-4 opacity-0'
            }`}>
              <CalAIWidget 
                className="bg-primary text-background hover:bg-primary/90 px-6 rounded-full transition-all w-full justify-center" 
                buttonText={t("about.hero.contactButton")} 
                iconType="phone"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}