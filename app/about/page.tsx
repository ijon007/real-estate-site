"use client"

import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useI18n } from "@/components/i18n-provider"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { FIRM_INFO } from "@/lib/constants"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    email: "sarah@luxuryrealty.com",
    phone: "+1 (212) 555-1235",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Michael Chen",
    role: "Senior Real Estate Agent",
    email: "michael@luxuryrealty.com",
    phone: "+1 (212) 555-1236",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Luxury Property Specialist",
    email: "emily@luxuryrealty.com",
    phone: "+1 (212) 555-1237",
    image: "/placeholder-user.jpg",
  },
  {
    name: "David Thompson",
    role: "Investment Advisor",
    email: "david@luxuryrealty.com",
    phone: "+1 (212) 555-1238",
    image: "/placeholder-user.jpg",
  },
]

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen bg-background flex flex-col pt-24">
      <Navigation />

      <section className="px-6 py-20 md:px-12 md:py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{t("about.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("about.subtitle")}</p>
      </section>

      <section className="px-6 md:px-12 pb-20 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">{t("about.company.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("about.company.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-card rounded-3xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t("about.company.mission")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.company.missionDescription")}</p>
            </div>
            <div className="bg-card rounded-3xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t("about.company.values")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.company.valuesDescription")}</p>
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-3">{t("about.team.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("about.team.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-card rounded-3xl p-6 border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              className="group flex items-center justify-center w-60 mx-auto rounded-full py-6 px-10 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              <Link href="/contact">{t("common.nav.contactUs")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

