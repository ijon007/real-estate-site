"use client"

import { useState } from "react"
import Image from "next/image"
import { useI18n } from "./i18n-provider"
import { Button } from "./ui/button"
import { BlurFade } from "./ui/blur-fade"
import { ChevronRight } from "lucide-react"

export default function ProcessSection() {
  const { t } = useI18n()
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      title: t("home.process.step1.title"),
      description: t("home.process.step1.description"),
      image: "/resort-style-pool-estate.jpg",
    },
    {
      number: "02",
      title: t("home.process.step2.title"),
      description: t("home.process.step2.description"),
      image: "/luxury-estate-mansion.jpg",
    },
    {
      number: "03",
      title: t("home.process.step3.title"),
      description: t("home.process.step3.description"),
      image: "/modern-luxury-penthouse-waterfront.jpg",
    },
    {
      number: "04",
      title: t("home.process.step4.title"),
      description: t("home.process.step4.description"),
      image: "/beach-cottage-seaside.jpg",
    },
  ]

  return (
    <section className="px-6 py-40 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <BlurFade delay={0.1} inView>
              <h2 className="text-5xl font-semibold text-foreground mb-6 text-balance">
                {t("home.process.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("home.process.description")}
              </p>
            </BlurFade>

            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <BlurFade key={step.number} delay={0.2 + index * 0.1} inView>
                  <div
                    className="group cursor-pointer"
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(0)}
                  >
                    <div className="flex gap-4">
                      <div className="shrink-0">
                        <span
                          className={`text-4xl font-semibold transition-colors duration-200 ${
                            activeStep === index ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {step.number}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-2xl font-semibold mb-1 transition-colors duration-200 ${
                            activeStep === index ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`leading-relaxed transition-colors duration-200 ${
                            activeStep === index ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`ml-14 h-4 w-px transition-colors duration-200 ${
                          activeStep === index ? "bg-foreground" : "bg-muted-foreground/30"
                        }`}
                      />
                    )}
                  </div>
                </BlurFade>
              ))}
            </div>

            <BlurFade delay={0.6} inView>
              <Button className="group px-10 py-6 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                {t("home.process.button")}
                <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </BlurFade>
          </div>

          <BlurFade delay={0.2} inView direction="right">
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
              {steps.map((step, index) => (
                <Image
                  key={step.number}
                  src={step.image}
                  alt={step.title}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    activeStep === index ? "opacity-100" : "opacity-0 absolute"
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}

