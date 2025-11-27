"use client"

import { useI18n } from "./i18n-provider"
import { Button } from "./ui/button"
import { BlurFade } from "./ui/blur-fade"

export default function WhyChooseUs() {
  const { t } = useI18n()

  const benefits = [
    {
      number: "01",
      title: t("whyChooseUs.benefit1.title"),
      description: t("whyChooseUs.benefit1.description"),
    },
    {
      number: "02",
      title: t("whyChooseUs.benefit2.title"),
      description: t("whyChooseUs.benefit2.description"),
    },
    {
      number: "03",
      title: t("whyChooseUs.benefit3.title"),
      description: t("whyChooseUs.benefit3.description"),
    },
  ]

  const features = [
    t("whyChooseUs.features.trusted"),
    t("whyChooseUs.features.tailored"),
    t("whyChooseUs.features.seamless"),
    t("whyChooseUs.features.insights"),
    t("whyChooseUs.features.support"),
  ]

  return (
    <section className="px-6 py-24 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <BlurFade delay={0.1} inView direction="left">
            <div className="relative h-96 md:h-[500px] lg:h-[550px]">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                <div className="col-span-1 row-span-2 bg-primary/10 rounded-3xl overflow-hidden border-4 border-primary/20">
                  <img
                    src="/modern-luxury-penthouse-waterfront.jpg"
                    alt="Luxury penthouse"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-primary/10 rounded-3xl overflow-hidden border-4 border-primary/20">
                  <img src="/luxury-penthouse-living-room.png" alt="Living room" className="w-full h-full object-cover" />
                </div>

                <div className="bg-primary/10 rounded-3xl overflow-hidden border-4 border-primary/20">
                  <img
                    src="/modern-master-bedroom-suite.jpg"
                    alt="Master bedroom"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -left-8 top-12 z-10">
                <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 shadow-lg border-2 border-primary/20">
                  <div className="w-4 h-4 bg-foreground rounded-full"></div>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">{features[0]}</span>
                </div>
              </div>

              <div className="absolute left-0 top-1/2 z-10">
                <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 shadow-lg border-2 border-primary/20">
                  <div className="w-4 h-4 bg-foreground rounded-full"></div>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">{features[1]}</span>
                </div>
              </div>

              <div className="absolute left-1/4 -bottom-4 z-10">
                <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 shadow-lg border-2 border-primary/20">
                  <div className="w-4 h-4 bg-foreground rounded-full"></div>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">{features[2]}</span>
                </div>
              </div>

              <div className="absolute -left-6 bottom-12 z-10">
                <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 shadow-lg border-2 border-primary/20">
                  <div className="w-4 h-4 bg-foreground rounded-full"></div>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">{features[3]}</span>
                </div>
              </div>

              <div className="absolute -bottom-8 right-0 z-10">
                <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 shadow-lg border-2 border-primary/20">
                  <div className="w-4 h-4 bg-foreground rounded-full"></div>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">{features[4]}</span>
                </div>
              </div>
            </div>
          </BlurFade>

          <div>
            <BlurFade delay={0.2} inView direction="right">
              <div className="mb-8">
                <h2 className="text-5xl font-semibold text-foreground leading-tight mb-6 text-balance">
                  {t("whyChooseUs.title")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("whyChooseUs.description")}
                </p>
              </div>
            </BlurFade>

            <div className="space-y-8 my-12">
              {benefits.map((benefit, index) => (
                <BlurFade key={benefit.number} delay={0.3 + index * 0.1} inView direction="right">
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <span className="text-4xl font-semibold text-primary">{benefit.number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>

            <BlurFade delay={0.6} inView direction="up">
              <Button className="px-10 py-6 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors">
                {t("common.buttons.moreAboutUs")}
              </Button>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
