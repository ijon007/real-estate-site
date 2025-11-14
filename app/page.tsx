"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { mockProperties } from "@/lib/mock-data"
import PropertyCard from "@/components/property-card"
import Navigation from "@/components/navigation"
import HeroSearch from "@/components/hero-search"
import Footer from "@/components/footer"
import WhyChooseUs from "@/components/why-choose-us"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import ProcessSection from "@/components/process-section"
import { useI18n } from "@/components/i18n-provider"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative px-6 py-20 md:px-12 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/resort-style-pool-estate.jpg"
            alt="Luxury estate with resort-style pool"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background/80 via-background/70 to-background/40"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pt-24">
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-semibold text-foreground mb-6 leading-tight text-balance tracking-tight">
              {t("home.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl leading-relaxed">
              {t("home.hero.subtitle")}
            </p>
          </div>

          <HeroSearch />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-10 py-20 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold text-foreground mb-3">{t("home.featured.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("home.featured.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProperties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <Button
          asChild
          className="group flex items-center justify-center w-60 rounded-full py-6 px-10 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
        >
          <Link href="/properties">
            {t("common.buttons.viewAll")}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </section>

      <WhyChooseUs />

      <ProcessSection />

      <FAQSection />

      <Footer />
    </main>
  )
}
