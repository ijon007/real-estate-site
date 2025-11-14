"use client"

import Image from "next/image"
import { useI18n } from "./i18n-provider"
import CalAIWidget from "./calai"

export default function CTASection() {
  const { t } = useI18n()

  return (
    <section className="relative max-w-7xl mx-auto h-[600px] md:h-[700px] overflow-hidden rounded-xl">
      <div className="absolute inset-0">
        <Image
          src="/luxury-estate-mansion.jpg"
          alt="Luxury estate"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 md:h-[500px] bg-linear-to-t from-black to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
        <h1 className="text-5xl font-semibold text-white mb-6 max-w-4xl">
          {t("home.cta.title")}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed">
          {t("home.cta.description")}
        </p>
        <div className="w-full max-w-xs">
          <CalAIWidget 
            className="w-full bg-white text-black hover:bg-white/90 py-6 px-8 rounded-full font-semibold text-base" 
            buttonText={t("home.cta.button")}
          />
        </div>
      </div>
    </section>
  )
}
