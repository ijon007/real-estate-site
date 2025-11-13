"use client"

import { useState, useMemo } from "react"
import { mockProperties } from "@/lib/mock-data"
import PropertyCard from "@/components/property-card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ChevronDown } from "lucide-react"

export default function PropertiesPage() {
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
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="px-6 py-8 md:px-12 flex-1">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-2">Browse Properties</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Discover {filteredProperties.length} luxury properties available
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-3xl p-6 border border-border sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">Filters</h3>
                  <button
                    onClick={resetFilters}
                    className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    Reset
                  </button>
                </div>

                {/* Price Filter */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-foreground mb-3">Price Range</label>
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

                {/* Bedrooms Filter */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-foreground mb-3">Bedrooms</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[2, 3, 4, 5].map((bed) => (
                      <button
                        key={bed}
                        onClick={() => setBeds(beds === bed ? null : bed)}
                        className={`py-2 px-3 rounded-xl font-semibold transition-colors text-sm ${
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

                {/* Bathrooms Filter */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-foreground mb-3">Bathrooms</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4].map((bath) => (
                      <button
                        key={bath}
                        onClick={() => setBaths(baths === bath ? null : bath)}
                        className={`py-2 px-3 rounded-xl font-semibold transition-colors text-sm ${
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

            {/* Properties Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <p className="text-muted-foreground font-medium">{filteredProperties.length} properties found</p>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-card text-foreground px-4 py-2 pr-10 rounded-xl border border-border font-medium cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
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
                    No properties match your filters. Try adjusting your criteria.
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
