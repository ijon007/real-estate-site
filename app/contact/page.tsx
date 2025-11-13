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
      description: `Stop by our office at ${FIRM_INFO.address}`,
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
    <main className="min-h-screen bg-background flex flex-col">
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
                  className={`rounded-[2rem] p-8 md:p-10 border-2 transition-all duration-300 hover:shadow-lg ${card.bgColor} ${card.borderColor}`}
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

      {/* Contact Form & CTA Buttons */}
      <section className="px-6 py-20 md:px-12 flex-1 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-card text-foreground border border-border rounded-2xl px-6 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-card text-foreground border border-border rounded-2xl px-6 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-card text-foreground border border-border rounded-2xl px-6 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-card text-foreground border border-border rounded-2xl px-6 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your interests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {submitted && (
                <div className="bg-green-100 border border-green-300 text-green-800 rounded-2xl p-4 text-center font-semibold">
                  Message sent successfully! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            {/* Properties CTA */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 text-center border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Browse Properties</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to start your search? Explore our full collection of luxury properties.
              </p>
              <Link
                href="/properties"
                className="inline-block w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                View All Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
