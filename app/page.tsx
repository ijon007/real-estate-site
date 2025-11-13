"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { mockProperties } from "@/lib/mock-data"
import PropertyCard from "@/components/property-card"
import Navigation from "@/components/navigation"
import HeroSearch from "@/components/hero-search"
import Footer from "@/components/footer"
import WhyChooseUs from "@/components/why-choose-us"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:px-12 md:py-32 bg-gradient-to-br from-primary/5 via-background to-blue-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl -ml-36 -mb-36"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight text-balance tracking-tight">
              Discover Your{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Dream Home
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Explore our curated collection of luxury properties and find the perfect residence that matches your
              lifestyle and aspirations.
            </p>
          </div>

          <HeroSearch />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="px-6 py-20 md:px-12 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">Featured Properties</h2>
          <p className="text-lg text-muted-foreground">Handpicked selections from our premium collection</p>
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
            View All Properties
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
