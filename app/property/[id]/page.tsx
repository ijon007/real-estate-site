"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { mockProperties } from "@/lib/mock-data"
import { FIRM_INFO } from "@/lib/constants"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import {
  Bed,
  Bath,
  Maximize2,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  Check,
  Waves,
  Home,
  Droplets,
  Wifi,
  Car,
  Dumbbell,
  TreePine,
  Shield,
  Wine,
  Sun,
  Zap,
  Camera,
  HardDrive,
  Building2,
  UtensilsCrossed,
  Sparkles,
  Lock,
  Layers,
} from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/components/i18n-provider"
import CalAIWidget from "@/components/calai"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

// Map features to icons
const getFeatureIcon = (feature: string) => {
  const lowerFeature = feature.toLowerCase()
  if (lowerFeature.includes("ocean") || lowerFeature.includes("view") || lowerFeature.includes("water")) {
    return Waves
  }
  if (lowerFeature.includes("terrace") || lowerFeature.includes("roof") || lowerFeature.includes("patio")) {
    return Sun
  }
  if (lowerFeature.includes("pool")) {
    return Droplets
  }
  if (lowerFeature.includes("smart") || lowerFeature.includes("home")) {
    return Home
  }
  if (lowerFeature.includes("parking") || lowerFeature.includes("garage")) {
    return Car
  }
  if (lowerFeature.includes("gym") || lowerFeature.includes("fitness")) {
    return Dumbbell
  }
  if (lowerFeature.includes("garden") || lowerFeature.includes("gardens")) {
    return TreePine
  }
  if (lowerFeature.includes("security") || lowerFeature.includes("cam")) {
    return Shield
  }
  if (lowerFeature.includes("wine")) {
    return Wine
  }
  if (lowerFeature.includes("tennis") || lowerFeature.includes("court")) {
    return Sparkles
  }
  if (lowerFeature.includes("internet") || lowerFeature.includes("fiber") || lowerFeature.includes("wifi")) {
    return Wifi
  }
  if (lowerFeature.includes("solar") || lowerFeature.includes("panels")) {
    return Sun
  }
  if (lowerFeature.includes("ev") || lowerFeature.includes("charging")) {
    return Zap
  }
  if (lowerFeature.includes("office") || lowerFeature.includes("space")) {
    return Building2
  }
  if (lowerFeature.includes("kitchen")) {
    return UtensilsCrossed
  }
  if (lowerFeature.includes("hardwood") || lowerFeature.includes("floors")) {
    return Layers
  }
  if (lowerFeature.includes("basement") || lowerFeature.includes("storage")) {
    return HardDrive
  }
  if (lowerFeature.includes("brick") || lowerFeature.includes("exposed")) {
    return Building2
  }
  if (lowerFeature.includes("pet") || lowerFeature.includes("friendly")) {
    return Sparkles
  }
  if (lowerFeature.includes("open") || lowerFeature.includes("concept")) {
    return Maximize2
  }
  if (lowerFeature.includes("urban") || lowerFeature.includes("location")) {
    return MapPin
  }
  if (lowerFeature.includes("guest") || lowerFeature.includes("house")) {
    return Home
  }
  if (lowerFeature.includes("shower") || lowerFeature.includes("outdoor")) {
    return Droplets
  }
  if (lowerFeature.includes("beach") || lowerFeature.includes("access")) {
    return Waves
  }
  if (lowerFeature.includes("updated") || lowerFeature.includes("systems")) {
    return Zap
  }
  if (lowerFeature.includes("period") || lowerFeature.includes("details")) {
    return Sparkles
  }
  return Check
}

export default function PropertyPage() {
  const { t } = useI18n()
  const params = useParams()
  const propertyId = params.id as string
  const property = mockProperties.find((p) => p.id === propertyId)
  
  // Combine main image with additional images for carousel
  const allImages = property ? [property.image, ...property.images] : []

  if (!property) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="max-w-6xl mx-auto px-6 py-16 md:px-12 text-center pt-32">
          <h1 className="text-3xl font-bold text-foreground mb-4">{t("property.notFound")}</h1>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            {t("property.backToProperties")}
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="px-6 py-8 md:px-12 flex-1 pt-32 pb-[400px] md:pb-[600px]">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            {t("property.backToProperties")}
          </Link>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Property Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {allImages.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden bg-muted">
                          <Image
                            src={image || "/placeholder.svg"}
                            width={1000}
                            height={1000}
                            alt={`${property.title} - Image ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                    <CarouselPrevious className="relative left-0 top-0 translate-x-0 translate-y-0 bg-background/90 backdrop-blur-sm hover:bg-background border-2 shadow-lg" />
                    <CarouselNext className="relative right-0 top-0 translate-x-0 translate-y-0 bg-background/90 backdrop-blur-sm hover:bg-background border-2 shadow-lg" />
                  </div>
                </Carousel>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-3">{property.title}</h1>
                <div className="flex items-center gap-2 text-lg text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  {property.location}
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pb-8 border-b border-border">
                <div className="bg-white rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Bed className="w-6 h-6 text-primary" />
                    <span className="text-3xl font-semibold text-foreground">{property.beds}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("property.bedrooms")}</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Bath className="w-6 h-6 text-primary" />
                    <span className="text-3xl font-semibold text-foreground">{property.baths}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("property.bathrooms")}</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Maximize2 className="w-6 h-6 text-primary" />
                    <span className="text-3xl font-semibold text-foreground">{(property.sqft / 1000).toFixed(1)}k</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("property.sqft")}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("property.about")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">{t("property.features")}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature, idx) => {
                    const IconComponent = getFeatureIcon(feature)
                    return (
                      <div
                        key={idx}
                        className="group relative flex flex-col items-center justify-center gap-3 bg-white rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-foreground font-semibold text-sm text-center leading-tight">
                          {feature}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">{t("property.location")}</h2>
                <div className="rounded-3xl overflow-hidden border border-border bg-muted">
                  <iframe
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                    className="w-full"
                  />
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 rounded-full py-5"
                >
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  > 
                    {t("property.getDirections")} <MapPin className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Contact Card */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-3xl p-8 border border-border sticky top-24">
                {/* Price - Main Element */}
                <div className="mb-8 pb-8 border-b border-border">
                  <div className="text-5xl font-semibold text-primary mb-2">€{property.price.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">Asking Price</p>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-6">{t("property.getInTouch")}</h3>

                <div className="space-y-6 mb-8">
                  <a
                    href={`tel:${FIRM_INFO.phone}`}
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("property.callUs")}</p>
                      <p className="font-semibold">{FIRM_INFO.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${FIRM_INFO.email}`}
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("property.emailUs")}</p>
                      <p className="font-semibold text-sm">{FIRM_INFO.email}</p>
                    </div>
                  </a>
                </div>

                <CalAIWidget property={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
