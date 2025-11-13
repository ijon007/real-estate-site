"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { mockProperties } from "@/lib/mock-data"
import { FIRM_INFO } from "@/lib/constants"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Bed, Bath, Maximize2, MapPin, Phone, Mail, ChevronLeft, Check } from "lucide-react"
import Image from "next/image"

export default function PropertyPage() {
  const params = useParams()
  const propertyId = params.id as string
  const property = mockProperties.find((p) => p.id === propertyId)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!property) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="max-w-6xl mx-auto px-6 py-16 md:px-12 text-center pt-32">
          <h1 className="text-3xl font-bold text-foreground mb-4">Property Not Found</h1>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Properties
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="px-6 py-8 md:px-12 flex-1 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Properties
          </Link>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
            <div className="lg:col-span-2">
              <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src={property.images[selectedImage] || property.image || "/placeholder.svg"}
                  width={1000}
                  height={1000}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {property.images.slice(1, 5).map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx + 1)}
                  className={`relative h-24 md:h-40 rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx + 1 ? "border-primary" : "border-border"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    width={1000}
                    height={1000}
                    alt={`${property.title} ${idx + 2}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Property Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              {/* Price & Title */}
              <div className="mb-8">
                <div className="text-5xl font-bold text-primary mb-3">${(property.price / 1000000).toFixed(2)}M</div>
                <h1 className="text-4xl font-bold text-foreground mb-3">{property.title}</h1>
                <div className="flex items-center gap-2 text-lg text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  {property.location}
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-12 pb-12 border-b border-border">
                <div className="bg-secondary/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Bed className="w-6 h-6 text-primary" />
                    <span className="text-3xl font-bold text-foreground">{property.beds}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Bedrooms</p>
                </div>
                <div className="bg-secondary/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Bath className="w-6 h-6 text-primary" />
                    <span className="text-3xl font-bold text-foreground">{property.baths}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Bathrooms</p>
                </div>
                <div className="bg-secondary/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Maximize2 className="w-6 h-6 text-primary" />
                    <span className="text-3xl font-bold text-foreground">{(property.sqft / 1000).toFixed(1)}k</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Sq. Ft.</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Property</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{property.description}</p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-secondary/10 rounded-2xl p-4">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-3xl p-8 border border-border sticky top-24">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>

                <div className="space-y-6 mb-8">
                  <a
                    href={`tel:${FIRM_INFO.phone}`}
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
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
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="font-semibold text-sm">{FIRM_INFO.email}</p>
                    </div>
                  </a>
                </div>

                <button className="w-full bg-primary text-primary-foreground py-3 rounded-2xl font-bold hover:bg-primary/90 transition-colors mb-3">
                  Schedule a Viewing
                </button>
                <Link
                  href="/contact"
                  className="block text-center w-full bg-secondary/20 text-foreground py-3 rounded-2xl font-bold hover:bg-secondary/30 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
