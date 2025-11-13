"use client"

import Link from "next/link"
import { FIRM_INFO } from "@/lib/constants"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { useI18n } from "./i18n-provider"

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-card border-t border-border">
      <div className="px-6 py-16 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-primary mb-4">{FIRM_INFO.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{FIRM_INFO.description}</p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/30 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/30 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/30 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">{t("common.footer.quickLinks")}</h4>
              <div className="space-y-3">
                <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t("common.footer.home")}
                </Link>
                <Link href="/properties" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t("common.footer.properties")}
                </Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t("common.footer.contact")}
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">{t("common.footer.contact")}</h4>
              <div className="space-y-4">
                <a
                  href={`tel:${FIRM_INFO.phone}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="group-hover:underline">{FIRM_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${FIRM_INFO.email}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="group-hover:underline break-all">{FIRM_INFO.email}</span>
                </a>
                <a
                  href="#"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="group-hover:underline text-sm">{FIRM_INFO.address}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
