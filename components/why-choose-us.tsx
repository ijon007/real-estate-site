"use client"

export default function WhyChooseUs() {
  const benefits = [
    {
      number: "01",
      title: "Buy a new home",
      description:
        "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    },
    {
      number: "02",
      title: "Rent a home",
      description:
        "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
    },
    {
      number: "03",
      title: "Sell a home",
      description:
        "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
    },
  ]

  const features = [
    "Trusted Expertise",
    "Tailored to You",
    "Seamless Process",
    "Strong Market Insights",
    "After-Sales Support",
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
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">Trusted Expertise</span>
              </div>
            </div>

            <div className="absolute left-0 top-1/2 z-10">
              <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 shadow-lg border-2 border-primary/20">
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">Tailored to You</span>
              </div>
            </div>

            <div className="absolute left-1/4 -bottom-4 z-10">
              <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 shadow-lg border-2 border-primary/20">
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">Seamless Process</span>
              </div>
            </div>

            <div className="absolute -left-6 bottom-12 z-10">
              <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 shadow-lg border-2 border-primary/20">
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">Strong Market Insights</span>
              </div>
            </div>

            <div className="absolute -bottom-8 right-0 z-10">
              <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 shadow-lg border-2 border-primary/20">
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">After-Sales Support</span>
              </div>
            </div>
          </div>

          {/* Right side - Benefits list */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
                  Our Benefits
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
                Building dreams, one home at a time
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission goes beyond real estate — it's about guiding you through one of life's biggest milestones
                with heart, expertise, and unwavering commitment.
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
              More about us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
