"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"

export default function HeroSearch() {
  const [filters, setFilters] = useState({
    type: "all",
    location: "",
    price: "all",
    bedrooms: "all",
  })

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 border border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Property Type */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Property Type</label>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-full bg-muted border border-border rounded-2xl px-4 py-3 text-foreground font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
          >
            <option value="all">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="penthouse">Penthouse</option>
            <option value="townhouse">Townhouse</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="w-full bg-muted border border-border rounded-2xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Price Range</label>
          <select
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            className="w-full bg-muted border border-border rounded-2xl px-4 py-3 text-foreground font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
          >
            <option value="all">Any Price</option>
            <option value="500k">Under $500K</option>
            <option value="500k-1m">$500K - $1M</option>
            <option value="1m-2m">$1M - $2M</option>
            <option value="2m">$2M+</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Bedrooms</label>
          <select
            value={filters.bedrooms}
            onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
            className="w-full bg-muted border border-border rounded-2xl px-4 py-3 text-foreground font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
          >
            <option value="all">Any Size</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Link
            href="/properties"
            className="w-full bg-primary text-primary-foreground rounded-2xl py-3 font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <Search className="w-5 h-5" />
            Search
          </Link>
        </div>
      </div>
    </div>
  )
}
