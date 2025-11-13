"use client"

import Link from "next/link"
import { FIRM_INFO } from "@/lib/constants"

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 md:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            {FIRM_INFO.name}
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/properties" className="text-foreground hover:text-primary transition-colors font-medium">
              Properties
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
