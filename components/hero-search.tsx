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
import { useI18n } from "./i18n-provider"

const locations = [
  { value: "tirana", label: "Tirana" },
  { value: "durres", label: "Durres" },
  { value: "vlore", label: "Vlore" },
  { value: "sarande", label: "Sarande" },
]

export default function HeroSearch() {
  const { t } = useI18n()
  const [filters, setFilters] = useState({
    type: "all",
    location: "all",
    price: "all",
    bedrooms: "all",
  })

  return (
    <div className="relative rounded-3xl p-6 md:p-8 overflow-hidden">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-lg" />
      <div className="absolute inset-0 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)]" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <Label className="mb-3 block text-sm font-semibold text-white drop-shadow-sm">
            {t("search.propertyType")}
          </Label>
          <Select
            value={filters.type}
            onValueChange={(value: string) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger className="rounded-2xl border-white/50 bg-white/50 backdrop-blur-sm px-4 py-3 text-foreground font-medium focus:ring-2 focus:ring-white/70 focus:ring-offset-0 w-full hover:bg-white/60 transition-all">
              <SelectValue placeholder={t("search.selectPropertyType")} />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-white/50 bg-white/60 backdrop-blur-lg shadow-xl">
              <SelectItem value="all" >{t("search.allTypes")}</SelectItem>
              <SelectItem value="apartment">{t("search.apartment")}</SelectItem>
              <SelectItem value="house">{t("search.house")}</SelectItem>
              <SelectItem value="penthouse">{t("search.penthouse")}</SelectItem>
              <SelectItem value="townhouse">{t("search.townhouse")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-3 block text-sm font-semibold text-white drop-shadow-sm">
            {t("search.location")}
          </Label>
          <Select
            value={filters.location}
            onValueChange={(value: string) => setFilters({ ...filters, location: value })}
          >
            <SelectTrigger className="rounded-2xl border-white/50 bg-white/50 backdrop-blur-sm px-4 py-3 text-foreground font-medium focus:ring-2 focus:ring-white/70 focus:ring-offset-0 w-full hover:bg-white/60 transition-all">
              <SelectValue placeholder={t("search.enterLocation")} />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-white/50 bg-white/60 backdrop-blur-lg shadow-xl">
              <SelectItem value="all">{t("search.enterLocation")}</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-3 block text-sm font-semibold text-white drop-shadow-sm">
            {t("search.priceRange")}
          </Label>
          <Select
            value={filters.price}
            onValueChange={(value: string) => setFilters({ ...filters, price: value })}
          >
            <SelectTrigger className="rounded-2xl border-white/50 bg-white/50 backdrop-blur-sm px-4 py-3 text-foreground font-medium focus:ring-2 focus:ring-white/70 focus:ring-offset-0 w-full hover:bg-white/60 transition-all">
              <SelectValue placeholder={t("search.selectPriceRange")} />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-white/50 bg-white/60 backdrop-blur-lg shadow-xl">
              <SelectItem value="all">{t("search.anyPrice")}</SelectItem>
              <SelectItem value="10k">{t("search.under15k")}</SelectItem>
              <SelectItem value="15k-25k">{t("search.price15k25k")}</SelectItem>
              <SelectItem value="25k-35k">{t("search.price25k35k")}</SelectItem>
              <SelectItem value="35k">{t("search.price35kPlus")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-3 block text-sm font-semibold text-white drop-shadow-sm">
            {t("search.bedrooms")}
          </Label>
          <Select
            value={filters.bedrooms}
            onValueChange={(value) =>
              setFilters({ ...filters, bedrooms: value })
            }
          >
            <SelectTrigger className="rounded-2xl border-white/50 bg-white/50 backdrop-blur-sm px-4 py-3 text-foreground font-medium focus:ring-2 focus:ring-white/70 focus:ring-offset-0 w-full hover:bg-white/60 transition-all">
              <SelectValue placeholder={t("search.selectBedrooms")} />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-white/50 bg-white/60 backdrop-blur-lg shadow-xl">
              <SelectItem value="all">{t("search.anySize")}</SelectItem>
              <SelectItem value="1">{t("search.bedroom1")}</SelectItem>
              <SelectItem value="2">{t("search.bedroom2")}</SelectItem>
              <SelectItem value="3">{t("search.bedroom3")}</SelectItem>
              <SelectItem value="4">{t("search.bedroom4Plus")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button
            asChild
            className="flex items-center justify-start w-full rounded-3xl py-3 bg-primary text-primary-foreground hover:bg-primary/95 transition-all shadow-lg hover:shadow-xl"
          >
            <Link href="/properties" className="flex items-center justify-center gap-2">
              <Search className="h-5 w-5" />
              {t("common.buttons.search")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
