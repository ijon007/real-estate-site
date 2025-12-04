"use client"

import Link from "next/link"
import { FIRM_INFO } from "@/lib/constants"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { useI18n } from "./i18n-provider"
import CTASection from "./cta-section"

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative bg-black pt-[300px] md:pt-[350px]">
      <div className="absolute -top-[300px] md:-top-[350px] left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 md:px-12">
        <CTASection />
      </div>

      <div className="relative z-10 px-6 py-16 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">{FIRM_INFO.name}</h3>
              <p className="text-white leading-relaxed mb-6">{FIRM_INFO.description}</p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="group w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Facebook className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="group w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Instagram className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </Link>
                {/* <Link
                  href="#"
                  className="group w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </Link> */}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg">{t("common.footer.quickLinks")}</h4>
              <div className="space-y-3">
                <Link href="/" className="block text-white/60 hover:text-white transition-colors">
                  {t("common.footer.home")}
                </Link>
                <Link href="/properties" className="block text-white/60 hover:text-white transition-colors">
                  {t("common.footer.properties")}
                </Link>
                <Link href="/about" className="block text-white/60 hover:text-white transition-colors">
                  {t("common.footer.about")}
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg">{t("common.footer.contact")}</h4>
              <div className="space-y-4">
                <a
                  href={`tel:${FIRM_INFO.phone}`}
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span>{FIRM_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${FIRM_INFO.email}`}
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="break-all">{FIRM_INFO.email}</span>
                </a>
                <a
                  href="#"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-sm">{FIRM_INFO.address}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
