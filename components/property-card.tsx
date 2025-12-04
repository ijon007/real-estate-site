"use client"

import Link from "next/link"
import type { Property } from "@/lib/mock-data"
import { Bed, Bath, Maximize2 } from "lucide-react"
import { useI18n } from "./i18n-provider"

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { t } = useI18n()

  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group">
        <div className="relative h-64 overflow-hidden bg-muted">
          <img
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
            {property.price.toLocaleString(undefined, { style: "currency", currency: "EUR", minimumFractionDigits: 0 })} 
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{property.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{property.location}</p>

          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4 text-primary" />
              {property.beds} {t("propertyCard.beds")}
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4 text-primary" />
              {property.baths} {t("propertyCard.baths")}
            </div>
            <div className="flex items-center gap-1">
              <Maximize2 className="w-4 h-4 text-primary" />
              {property.sqft.toLocaleString()} {t("propertyCard.sqft")}
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">{property.description}</p>
        </div>
      </div>
    </Link>
  )
}
