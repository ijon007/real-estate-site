"use client"

import { Mail, Phone } from "lucide-react"
import { useI18n } from "./i18n-provider"
import { Button } from "./ui/button"
import CalAIWidget from "./calai"
import { FIRM_INFO } from "@/lib/constants"

export default function CTASection() {
  const { t } = useI18n()

  // Encode address for Google Maps embed
  const encodedAddress = encodeURIComponent(FIRM_INFO.address)
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`

  const ctaCards = [
    {
      icon: Mail,
      title: t("contact.cards.sendEmail.title"),
      description: t("contact.cards.sendEmail.description"),
      buttonText: t("contact.cards.sendEmail.button"),
      href: `mailto:${FIRM_INFO.email}`,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      isEmail: true,
    },
    {
      icon: Phone,
      title: t("contact.cards.bookCall.title"),
      description: t("contact.cards.bookCall.description"),
      buttonText: t("contact.cards.bookCall.button"),
      href: "#",
      bgColor: "bg-primary",
      borderColor: "border-primary",
      isDark: true,
      isBooking: true,
    },
  ]

  return (
    <>
      <section className="px-6 py-20 md:px-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{t("contact.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("contact.subtitle")}
        </p>
      </section>

      <section className="px-6 md:px-12 pb-20 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg w-full">
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapEmbedUrl}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {ctaCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={idx}
                  className={`rounded-4xl p-8 md:p-10 border-2 transition-all duration-300 ${card.bgColor} ${card.borderColor}`}
                >
                  <div
                    className={`inline-block p-4 rounded-full mb-6 ${card.isDark ? "bg-primary-foreground/20" : "bg-primary/10"}`}
                  >
                    <Icon className={`w-6 h-6 ${card.isDark ? "text-primary-foreground" : "text-primary"}`} />
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-3 ${card.isDark ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`mb-8 leading-relaxed ${card.isDark ? "text-primary-foreground/90" : "text-muted-foreground"}`}
                  >
                    {card.description}
                  </p>

                  {card.isBooking ? (
                    <CalAIWidget />
                  ) : card.isEmail ? (
                    <Button
                      asChild
                      className="w-full py-5 px-6 rounded-full text-center transition-colors duration-200"
                    >
                      <a href={card.href}>{card.buttonText}</a>
                    </Button>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
    )
}
