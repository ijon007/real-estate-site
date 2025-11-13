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
import CTASection from "@/components/cta-section"
import { useI18n } from "@/components/i18n-provider"

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

        <div className="max-w-6xl mx-auto relative z-10 pt-24">
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight text-balance tracking-tight">
              {t("home.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl leading-relaxed">
              {t("home.hero.subtitle")}
            </p>
          </div>

          <HeroSearch />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="px-6 py-20 md:px-12 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">{t("home.featured.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("home.featured.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProperties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {t("common.buttons.viewAll")}
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why Choose Luxury Realty */}
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 max-w-6xl mx-auto">
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
