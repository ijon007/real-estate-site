import Link from "next/link"
import { FIRM_INFO } from "@/lib/constants"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="px-6 py-16 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-primary mb-4">{FIRM_INFO.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{FIRM_INFO.description}</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Quick Links</h4>
              <div className="space-y-3">
                <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/properties" className="block text-muted-foreground hover:text-primary transition-colors">
                  Properties
                </Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Contact</h4>
              <div className="space-y-4">
                <a
                  href={`tel:${FIRM_INFO.phone}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="group-hover:underline">{FIRM_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${FIRM_INFO.email}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="group-hover:underline break-all">{FIRM_INFO.email}</span>
                </a>
                <a
                  href="#"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="group-hover:underline text-sm">{FIRM_INFO.address}</span>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Mon - Fri:</span> 9:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-semibold text-foreground">Saturday:</span> 10:00 AM - 4:00 PM
                </p>
                <p>
                  <span className="font-semibold text-foreground">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
            <p>&copy; 2025 {FIRM_INFO.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
