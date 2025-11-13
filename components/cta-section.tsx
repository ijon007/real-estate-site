"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="w-full relative min-h-[500px] flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/placeholder.svg?height=500&width=1200&query=modern luxury homes houses exterior)",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 py-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance max-w-3xl mx-auto">
          Ready to find your dream home?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you're buying, selling, or investing, our team is here to guide you every step of the way. Let's make
          your next move simple and successful.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:shadow-lg"
        >
          Schedule a consultation
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
