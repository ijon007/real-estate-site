"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, CheckIcon, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
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
    location: "",
    price: "all",
    bedrooms: "all",
  })
  const [locationOpen, setLocationOpen] = useState(false)

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 border border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <Label className="mb-3 block text-sm font-semibold text-foreground">
            {t("search.propertyType")}
          </Label>
          <Select
            value={filters.type}
            onValueChange={(value: string) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger className="rounded-2xl border-border bg-muted px-4 py-3 text-foreground font-medium focus:ring-1 focus:ring-primary focus:ring-offset-0 w-full">
              <SelectValue placeholder={t("search.selectPropertyType")} />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-border">
              <SelectItem value="all">{t("search.allTypes")}</SelectItem>
              <SelectItem value="apartment">{t("search.apartment")}</SelectItem>
              <SelectItem value="house">{t("search.house")}</SelectItem>
              <SelectItem value="penthouse">{t("search.penthouse")}</SelectItem>
              <SelectItem value="townhouse">{t("search.townhouse")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-3 block text-sm font-semibold text-foreground">
            {t("search.location")}
          </Label>
          <Popover open={locationOpen} onOpenChange={setLocationOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={locationOpen}
                className="w-full justify-between rounded-2xl border-border bg-muted px-4 py-3 text-foreground font-medium hover:bg-muted focus:ring-1 focus:ring-primary focus:ring-offset-0"
              >
                {filters.location
                  ? locations.find((loc) => loc.value === filters.location)?.label
                  : t("search.enterLocation")}
                <MapPin className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-(--radix-popover-trigger-width) p-0 rounded-2xl border-border">
              <Command>
                <CommandInput placeholder={t("search.enterLocation")} />
                <CommandList>
                  <CommandEmpty>No location found.</CommandEmpty>
                  <CommandGroup>
                    {locations.map((location) => (
                      <CommandItem
                        key={location.value}
                        value={location.value}
                        onSelect={(currentValue) => {
                          setFilters({
                            ...filters,
                            location: currentValue === filters.location ? "" : currentValue,
                          })
                          setLocationOpen(false)
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "mr-2 h-4 w-4",
                            filters.location === location.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {location.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label className="mb-3 block text-sm font-semibold text-foreground">
            {t("search.priceRange")}
          </Label>
          <Select
            value={filters.price}
            onValueChange={(value: string) => setFilters({ ...filters, price: value })}
          >
            <SelectTrigger className="rounded-2xl border-border bg-muted px-4 py-3 text-foreground font-medium focus:ring-1 focus:ring-primary focus:ring-offset-0 w-full">
              <SelectValue placeholder={t("search.selectPriceRange")} />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-border">
              <SelectItem value="all">{t("search.anyPrice")}</SelectItem>
              <SelectItem value="500k">{t("search.under500k")}</SelectItem>
              <SelectItem value="500k-1m">{t("search.price500k1m")}</SelectItem>
              <SelectItem value="1m-2m">{t("search.price1m2m")}</SelectItem>
              <SelectItem value="2m">{t("search.price2mPlus")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-3 block text-sm font-semibold text-foreground">
            {t("search.bedrooms")}
          </Label>
          <Select
            value={filters.bedrooms}
            onValueChange={(value) =>
              setFilters({ ...filters, bedrooms: value })
            }
          >
            <SelectTrigger className="rounded-2xl border-border bg-muted px-4 py-3 text-foreground font-medium focus:ring-1 focus:ring-primary focus:ring-offset-0 w-full">
              <SelectValue placeholder={t("search.selectBedrooms")} />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-border">
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
            className="flex items-center justify-start w-full rounded-2xl py-3 hover:bg-primary/90"
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
