"use client"

import type React from "react"
import Footer from "@/components/footer"
import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { FIRM_INFO } from "@/lib/constants"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactCards = [
    {
      icon: Mail,
      title: "Send an Email",
      description: "Get in touch via email and we'll respond within 24 hours",
      buttonText: "Send Email",
      href: `mailto:${FIRM_INFO.email}`,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: `${FIRM_INFO.address}`,
      buttonText: "Get Directions",
      href: "#",
      bgColor: "bg-background",
      borderColor: "border-border",
    },
    {
      icon: Phone,
      title: "Book a Call",
      description: "Schedule a consultation with our luxury real estate experts",
      buttonText: "Schedule Now",
      href: "#",
      bgColor: "bg-primary",
      borderColor: "border-primary",
      isDark: true,
    },
  ]

  return (
    <main className="min-h-screen bg-background flex flex-col pt-24">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 md:py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're here to help you find your perfect property
        </p>
      </section>

      {/* Contact Cards */}
      <section className="px-6 md:px-12 pb-20 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={idx}
                  className={`rounded-4xl p-8 md:p-10 border-2 transition-all duration-300 hover:shadow-lg ${card.bgColor} ${card.borderColor}`}
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

                  <a
                    href={card.href}
                    className={`inline-block w-full py-3 px-6 rounded-full font-semibold text-center transition-colors duration-200 ${
                      card.isDark
                        ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {card.buttonText}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
