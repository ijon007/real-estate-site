"use client"

import { useState, useMemo } from "react"
import { mockProperties } from "@/lib/mock-data"
import PropertyCard from "@/components/property-card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useI18n } from "@/components/i18n-provider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PropertiesPage() {
  const { t } = useI18n()
  const [priceRange, setPriceRange] = useState([0, 3000000])
  const [beds, setBeds] = useState<number | null>(null)
  const [baths, setBaths] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState("featured")

  const filteredProperties = useMemo(() => {
    let filtered = [...mockProperties]

    // Price filter
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Bedrooms filter
    if (beds !== null) {
      filtered = filtered.filter((p) => p.beds >= beds)
    }

    // Bathrooms filter
    if (baths !== null) {
      filtered = filtered.filter((p) => p.baths >= baths)
    }

    // Sorting
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [priceRange, beds, baths, sortBy])

  const resetFilters = () => {
    setPriceRange([0, 3000000])
    setBeds(null)
    setBaths(null)
    setSortBy("featured")
  }

  return (
    <main className="min-h-screen bg-background flex flex-col pt-52">
      <Navigation />

      <div className="px-6 py-8 md:px-12 flex-1 pb-[400px] md:pb-[600px]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-semibold text-foreground mb-2">{t("properties.title")}</h1>
          <p className="text-lg text-muted-foreground mb-12">
            {t("properties.description", { count: filteredProperties.length })}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-card rounded-3xl p-6 border border-border sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground">{t("properties.filters.title")}</h3>
                  <button
                    onClick={resetFilters}
                    className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors cursor-pointer"
                  >
                    {t("properties.filters.reset")}
                  </button>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-foreground mb-3">{t("properties.filters.priceRange")}</label>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="3000000"
                      step="100000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-sm text-muted-foreground">
                      ${(priceRange[1] / 1000000).toFixed(1)}M - ${(3000000 / 1000000).toFixed(1)}M
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-foreground mb-3">{t("properties.filters.bedrooms")}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[2, 3, 4, 5].map((bed) => (
                      <button
                        key={bed}
                        onClick={() => setBeds(beds === bed ? null : bed)}
                        className={`py-2 px-3 rounded-xl font-semibold transition-colors text-sm cursor-pointer ${
                          beds === bed
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-border"
                        }`}
                      >
                        {bed}+
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-foreground mb-3">{t("properties.filters.bathrooms")}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4].map((bath) => (
                      <button
                        key={bath}
                        onClick={() => setBaths(baths === bath ? null : bath)}
                        className={`py-2 px-3 rounded-xl font-semibold transition-colors text-sm cursor-pointer ${
                          baths === bath
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-border"
                        }`}
                      >
                        {bath}+
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-5">
                <p className="text-muted-foreground font-medium">{t("properties.results.found", { count: filteredProperties.length })}</p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="rounded-full border-border bg-muted px-6 py-3 text-foreground font-medium focus:ring-1 focus:ring-primary focus:ring-offset-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent align="end" className="rounded-2xl border-border">
                    <SelectItem value="featured">{t("properties.sorting.featured")}</SelectItem>
                    <SelectItem value="price-low">{t("properties.sorting.priceLow")}</SelectItem>
                    <SelectItem value="price-high">{t("properties.sorting.priceHigh")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground font-medium">
                    {t("properties.results.noResults")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
