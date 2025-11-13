"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "./ui/input"

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
        <div>
          <Label className="mb-3 block text-sm font-semibold text-foreground">
            Property Type
          </Label>
          <Select
            value={filters.type}
            onValueChange={(value: string) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger className="rounded-2xl border-border bg-muted px-4 py-3 text-foreground font-medium focus:ring-1 focus:ring-primary focus:ring-offset-0 w-full">
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-border">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-3 block text-sm font-semibold text-foreground">
            Location
          </Label>
          <Input
            type="text"
            placeholder="Enter location"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="rounded-2xl border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 w-full"
          />
        </div>

        <div>
          <Label className="mb-3 block text-sm font-semibold text-foreground">
            Price Range
          </Label>
          <Select
            value={filters.price}
            onValueChange={(value: string) => setFilters({ ...filters, price: value })}
          >
            <SelectTrigger className="rounded-2xl border-border bg-muted px-4 py-3 text-foreground font-medium focus:ring-1 focus:ring-primary focus:ring-offset-0 w-full">
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-border">
              <SelectItem value="all">Any Price</SelectItem>
              <SelectItem value="500k">Under $500K</SelectItem>
              <SelectItem value="500k-1m">$500K - $1M</SelectItem>
              <SelectItem value="1m-2m">$1M - $2M</SelectItem>
              <SelectItem value="2m">$2M+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-3 block text-sm font-semibold text-foreground">
            Bedrooms
          </Label>
          <Select
            value={filters.bedrooms}
            onValueChange={(value) =>
              setFilters({ ...filters, bedrooms: value })
            }
          >
            <SelectTrigger className="rounded-2xl border-border bg-muted px-4 py-3 text-foreground font-medium focus:ring-1 focus:ring-primary focus:ring-offset-0 w-full">
              <SelectValue placeholder="Select bedrooms" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-border">
              <SelectItem value="all">Any Size</SelectItem>
              <SelectItem value="1">1 Bedroom</SelectItem>
              <SelectItem value="2">2 Bedrooms</SelectItem>
              <SelectItem value="3">3 Bedrooms</SelectItem>
              <SelectItem value="4">4+ Bedrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button
            asChild
            className="w-full rounded-2xl py-3 text-base font-bold hover:bg-primary/90"
          >
            <Link href="/properties" className="flex items-center justify-center gap-2">
              <Search className="h-5 w-5" />
              Search
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
