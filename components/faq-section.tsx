"use client"

import Image from "next/image"
import { HelpCircle } from "lucide-react"
import { useI18n } from "./i18n-provider"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

export default function FAQSection() {
  const { t } = useI18n()

  const faqs = [
    {
      question: t("faq.questions.q1.question"),
      answer: t("faq.questions.q1.answer"),
    },
    {
      question: t("faq.questions.q2.question"),
      answer: t("faq.questions.q2.answer"),
    },
    {
      question: t("faq.questions.q3.question"),
      answer: t("faq.questions.q3.answer"),
    },
    {
      question: t("faq.questions.q4.question"),
      answer: t("faq.questions.q4.answer"),
    },
    {
      question: t("faq.questions.q5.question"),
      answer: t("faq.questions.q5.answer"),
    },
    {
      question: t("faq.questions.q6.question"),
      answer: t("faq.questions.q6.answer"),
    },
  ]

  return (
    <section className="px-6 py-32 pb-[400px] md:px-12 md:pb-[600px] bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative h-[600px] rounded-3xl overflow-hidden hidden lg:block">
            <Image
              src="/guest-house-luxury-estate.jpg"
              alt="Guest house luxury estate"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0vw, 50vw"
            />
          </div>

          <div className="w-full">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
                {t("faq.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("faq.subtitle")}
              </p>
            </div>

            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

