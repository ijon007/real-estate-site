"use client"

import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useI18n } from "@/components/i18n-provider"
import { Button } from "@/components/ui/button"
import CalAIWidget from "@/components/calai"

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

      <section className="px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
                {t("about.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("about.hero.description")}
              </p>
              <CalAIWidget  
                className="bg-primary text-white hover:bg-primary/90 py-5 px-8 rounded-full w-40" 
                buttonText={t("about.hero.contactButton")} 
                iconType="phone"
              />
            </div>
            <div className="hidden lg:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/grand-foyer-estate.jpg"
                alt="Modern interior staircase"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/luxury-estate-mansion.jpg"
                alt="Contemporary houses"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="border-r border-border pr-8">
              <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-2">
                {t("about.stats.propertiesSold.value")}
              </h3>
              <p className="text-lg font-semibold text-foreground mb-4">
                {t("about.stats.propertiesSold.label")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.stats.propertiesSold.description")}
              </p>
            </div>
            <div className="border-r border-border pr-8">
              <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-2">
                {t("about.stats.happyClients.value")}
              </h3>
              <p className="text-lg font-semibold text-foreground mb-4">
                {t("about.stats.happyClients.label")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.stats.happyClients.description")}
              </p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-2">
                {t("about.stats.yearsExperience.value")}
              </h3>
              <p className="text-lg font-semibold text-foreground mb-4">
                {t("about.stats.yearsExperience.label")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.stats.yearsExperience.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-[400px] md:pb-[600px] flex-1">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
            {t("about.team.title")}
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t("about.team.subtitle")}
          </p>
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
        </div>
      </section>

      <Footer />
    </main>
  )
}

