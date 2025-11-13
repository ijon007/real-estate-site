"use client"

import { useI18n } from "./i18n-provider"

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
          {/* Left side - Image Mosaic with floating labels */}
          <div className="relative h-96 md:h-[500px] lg:h-[550px]">
            {/* Main image grid */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
              {/* Top left - Large */}
              <div className="col-span-1 row-span-2 bg-primary/10 rounded-3xl overflow-hidden border-4 border-primary/20">
                <img
                  src="/modern-luxury-penthouse-waterfront.jpg"
                  alt="Luxury penthouse"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top right */}
              <div className="bg-primary/10 rounded-3xl overflow-hidden border-4 border-primary/20">
                <img src="/luxury-penthouse-living-room.png" alt="Living room" className="w-full h-full object-cover" />
              </div>

              {/* Bottom right */}
              <div className="bg-primary/10 rounded-3xl overflow-hidden border-4 border-primary/20">
                <img
                  src="/modern-master-bedroom-suite.jpg"
                  alt="Master bedroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating feature labels */}
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

          {/* Right side - Benefits list */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
                  {t("whyChooseUs.benefits")}
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
                {t("whyChooseUs.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("whyChooseUs.description")}
              </p>
            </div>

            <div className="space-y-8 my-12">
              {benefits.map((benefit) => (
                <div key={benefit.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-bold text-primary">{benefit.number}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-foreground text-background rounded-full font-semibold text-lg hover:bg-foreground/90 transition-colors">
              {t("common.buttons.moreAboutUs")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
