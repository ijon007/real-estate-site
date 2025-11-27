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
import ProcessSection from "@/components/process-section"
import { useI18n } from "@/components/i18n-provider"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"

export default function Home() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative min-h-screen px-6 md:px-12 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/resort-style-pool-estate.jpg"
            alt="Luxury estate with resort-style pool"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full pt-20">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 max-w-3xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                {t("home.hero.title")}
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                {t("home.hero.subtitle")}
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <HeroSearch />
          </BlurFade>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-10 py-20 px-6 max-w-7xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-12 flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-semibold text-foreground mb-3">{t("home.featured.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("home.featured.description")}</p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {mockProperties.slice(0, 3).map((property, index) => (
            <BlurFade key={property.id} delay={0.1 + index * 0.1} inView>
              <PropertyCard property={property} />
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.4} inView>
          <Button
            asChild
            className="group flex items-center justify-center w-60 rounded-full py-6 px-10 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
          >
            <Link href="/properties">
              {t("common.buttons.viewAll")}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </BlurFade>
      </section>

      <WhyChooseUs />

      <ProcessSection />

      <FAQSection />

      <Footer />
    </main>
  )
}
