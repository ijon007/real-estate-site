import type { Translations, Language } from "./types"

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      nav: {
        properties: "Properties",
        about: "About",
        contactUs: "Contact Us",
      },
      language: "Language",
      footer: {
        quickLinks: "Quick Links",
        about: "About",
        home: "Home",
        contact: "Contact",
        properties: "Properties",
        company: "Company",
        ourAgents: "Our Agents",
        contactUs: "Contact Us",
        useForFree: "Use for FREE",
        moreTemplates: "More Templates",
      },
      buttons: {
        search: "Search",
        reset: "Reset",
        viewAll: "View All Properties",
        back: "Back to Properties",
        learnMore: "Learn More",
        scheduleViewing: "Schedule a Viewing",
        scheduleConsultation: "Schedule a consultation",
        moreAboutUs: "More about us",
        sendEmail: "Send Email",
        getDirections: "Get Directions",
        scheduleNow: "Schedule Now",
      },
    },
    home: {
      hero: {
        title: "Discover Your Dream Home",
        subtitle:
          "Explore our curated collection of luxury properties and find the perfect residence that matches your lifestyle and aspirations.",
      },
      featured: {
        title: "Featured Properties",
        description: "Handpicked selections from our premium collection",
      },
      process: {
        title: "Simple steps to your dream home",
        description:
          "We make buying, selling, or investing in property effortless. Here's how we guide you every step of the way.",
        step1: {
          title: "Discover",
          description: "We start by understanding your goals and lifestyle, then curate properties that match.",
        },
        step2: {
          title: "Experience",
          description: "Guided viewings and expert insights help you explore the best options with confidence.",
        },
        step3: {
          title: "Secure",
          description: "From negotiation to closing, we ensure a seamless, stress-free transaction.",
        },
        step4: {
          title: "Settle",
          description: "Move into your new home with peace of mind, knowing we're here for ongoing support.",
        },
        button: "Start your journey",
      },
      cta: {
        title: "Ready to find your dream home?",
        description:
          "Whether you're buying, selling, or investing, our team is here to guide you every step of the way. Let's make your next move simple and successful.",
        button: "Schedule a consultation",
      },
    },
    properties: {
      title: "Browse Properties",
      description: "Discover {count} luxury properties available",
      filters: {
        title: "Filters",
        reset: "Reset",
        priceRange: "Price Range",
        bedrooms: "Bedrooms",
        bathrooms: "Bathrooms",
      },
      sorting: {
        featured: "Featured",
        priceLow: "Price: Low to High",
        priceHigh: "Price: High to Low",
      },
      results: {
        found: "{count} properties found",
        noResults: "No properties match your filters. Try adjusting your criteria.",
      },
    },
    property: {
      notFound: "Property Not Found",
      backToProperties: "Back to Properties",
      about: "About This Property",
      features: "Features & Amenities",
      getInTouch: "Get in Touch",
      callUs: "Call Us",
      emailUs: "Email Us",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      sqft: "Sq. Ft.",
      location: "Location",
      getDirections: "Get Directions",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "We're here to help you find your perfect property",
      cards: {
        sendEmail: {
          title: "Send an Email",
          description: "Get in touch via email and we'll respond within 24 hours",
          button: "Send Email",
        },
        visitUs: {
          title: "Visit Us",
          button: "Get Directions",
        },
        bookCall: {
          title: "Book a Call",
          description: "Schedule a consultation with our luxury real estate experts",
          button: "Schedule Now",
        },
      },
    },
    search: {
      propertyType: "Property Type",
      selectPropertyType: "Select property type",
      allTypes: "All Types",
      apartment: "Apartment",
      house: "House",
      penthouse: "Penthouse",
      townhouse: "Townhouse",
      location: "Location",
      enterLocation: "Enter location",
      priceRange: "Price Range",
      selectPriceRange: "Select price range",
      anyPrice: "Any Price",
      under15k: "Under €15K",
      price15k25k: "€15K - €25K",
      price25k35k: "€25K - €35K",
      price35kPlus: "€35K+",
      bedrooms: "Bedrooms",
      selectBedrooms: "Select bedrooms",
      anySize: "Any Size",
      bedroom1: "1 Bedroom",
      bedroom2: "2 Bedrooms",
      bedroom3: "3 Bedrooms",
      bedroom4Plus: "4+ Bedrooms",
    },
    propertyCard: {
      beds: "Beds",
      baths: "Baths",
      sqft: "sqft",
    },
    whyChooseUs: {
      benefits: "Our Benefits",
      title: "Building dreams, one home at a time",
      description:
        "Our mission goes beyond real estate — it's about guiding you through one of life's biggest milestones with heart, expertise, and unwavering commitment.",
      benefit1: {
        title: "Buy a new home",
        description:
          "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
      },
      benefit2: {
        title: "Rent a home",
        description:
          "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
      },
      benefit3: {
        title: "Sell a home",
        description:
          "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
      },
      features: {
        trusted: "Trusted Expertise",
        tailored: "Tailored to You",
        seamless: "Seamless Process",
        insights: "Strong Market Insights",
        support: "After-Sales Support",
      },
    },
    about: {
      title: "About Us",
      subtitle: "Your trusted partner in luxury real estate",
      hero: {
        title: "Building dreams, one home at a time",
        description: "We're more than real estate agents — we're your trusted partners, helping you find the right property with confidence and ease.",
        contactButton: "Contact us",
      },
      stats: {
        propertiesSold: {
          value: "$150M+",
          label: "Properties sold",
          description: "Over $150M in sales, helping clients find homes and investments with ease and confidence.",
        },
        happyClients: {
          value: "500+",
          label: "Happy clients",
          description: "More than 500 satisfied clients trust us to make their real estate journey smooth and successful.",
        },
        yearsExperience: {
          value: "20+",
          label: "Years of expertise",
          description: "Over 20 years of experience guiding clients with market insight and professional advice.",
        },
      },
      company: {
        title: "Our Story",
        description:
          "With over two decades of experience in the luxury real estate market, Luxury Realty has established itself as a premier destination for discerning clients seeking exceptional properties. We combine unparalleled market knowledge with personalized service to deliver results that exceed expectations.",
        mission: "Our Mission",
        missionDescription:
          "To transform the real estate experience by providing exceptional service, deep market insights, and unwavering commitment to our clients' success. We believe that finding or selling a home should be an exciting journey, not a stressful transaction.",
        values: "Our Values",
        valuesDescription:
          "Integrity, excellence, and client-first approach guide everything we do. We build lasting relationships based on trust, transparency, and a genuine passion for helping our clients achieve their real estate goals.",
      },
      team: {
        title: "Meet Our Team",
        subtitle: "Experienced professionals dedicated to your success",
      },
    },
    faq: {
      label: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Got questions? We've answered some of the most common ones to guide you through your real estate journey.",
      questions: {
        q1: {
          question: "How do I start the process of buying a home?",
          answer: "Simply reach out to us for a consultation. We'll discuss your goals, budget, and preferences, then guide you step by step.",
        },
        q2: {
          question: "Do I need to get pre-approved for a mortgage first?",
          answer: "While not required, getting pre-approved is highly recommended. It helps you understand your budget and makes you a more competitive buyer in the market.",
        },
        q3: {
          question: "What types of properties do you specialize in?",
          answer: "We specialize in luxury properties including penthouses, estates, waterfront homes, and high-end residential properties. We also handle commercial real estate investments.",
        },
        q4: {
          question: "How long does the buying process usually take?",
          answer: "The timeline varies, but typically ranges from 30 to 90 days from offer acceptance to closing. Factors include financing, inspections, and negotiations.",
        },
        q5: {
          question: "Do you assist with selling properties as well?",
          answer: "Yes, we provide comprehensive selling services including market analysis, staging recommendations, marketing strategies, and negotiation support to maximize your property's value.",
        },
        q6: {
          question: "What makes your agency different from others?",
          answer: "We combine decades of luxury market expertise with personalized service, cutting-edge technology, and a commitment to exceeding expectations. Our client-first approach ensures a seamless experience from start to finish.",
        },
      },
    },
  },
  sq: {
    common: {
      nav: {
        properties: "Pronat",
        about: "Rreth Nesh",
        contactUs: "Na Kontaktoni",
      },
      language: "Gjuha",
      footer: {
        quickLinks: "Lidhje të Shpejta",
        about: "Rreth Nesh",
        home: "Shtëpia",
        contact: "Na Kontaktoni",
        properties: "Pronat",
        company: "Kompania",
        ourAgents: "Agjentët Tanë",
        contactUs: "Na Kontaktoni",
        useForFree: "Use for FREE",
        moreTemplates: "More Templates",
      },
      buttons: {
        search: "Kërko",
        reset: "Rivendos",
        viewAll: "Shiko Të Gjitha Pronat",
        back: "Kthehu te Pronat",
        learnMore: "Mëso Më Shumë",
        scheduleViewing: "Cakto një Vizitë",
        scheduleConsultation: "Cakto një Konsultim",
        moreAboutUs: "Më Shumë Rreth Nesh",
        sendEmail: "Dërgo Email",
        getDirections: "Merr Udhëzime",
        scheduleNow: "Cakto Tani",
      },
    },
    home: {
      hero: {
        title: "Zbuloni Shtëpinë tuaj të Ëndrrave",
        subtitle:
          "Eksploroni koleksionin tonë të kuruar të pronave luksoze dhe gjeni rezidencën e përsosur që përputhet me stilin tuaj të jetesës dhe aspiratat.",
      },
      featured: {
        title: "Pronat e Veçanta",
        description: "Përzgjedhje të zgjedhura me kujdes nga koleksioni ynë premium",
      },
      process: {
        title: "Hapa të thjeshtë drejt shtëpisë suaj të ëndrrave",
        description:
          "Ne e bëjmë blerjen, shitjen ose investimin në pronë pa përpjekje. Ja si ju udhëheqim në çdo hap të rrugës.",
        step1: {
          title: "Zbuloni",
          description: "Fillojmë duke kuptuar objektivat dhe stilin tuaj të jetesës, pastaj kurojmë pronat që përputhen.",
        },
        step2: {
          title: "Eksperiencë",
          description: "Vizitat e udhëhequra dhe njohuritë eksperte ju ndihmojnë të eksploroni opsionet më të mira me besim.",
        },
        step3: {
          title: "Sigurohuni",
          description: "Nga negociatat deri në mbyllje, ne sigurojmë një transaksion pa probleme dhe pa stres.",
        },
        step4: {
          title: "Vendosni",
          description: "Shkoni në shtëpinë tuaj të re me qetësi, duke ditur që ne jemi këtu për mbështetje të vazhdueshme.",
        },
        button: "Filloni udhëtimin tuaj",
      },
      cta: {
        title: "Gati të gjeni shtëpinë tuaj të ëndrrave?",
        description:
          "Qoftë për blerje, shitje apo investim, ekipi ynë është këtu për t'ju udhëhequr në çdo hap të rrugëtimit tuaj.",
        button: "Rezervo një konsultë",
      },
    },
    properties: {
      title: "Shfletoni Pronat",
      description: "Zbuloni {count} pronat luksoze të disponueshme",
      filters: {
        title: "Filtrat",
        reset: "Rivendos",
        priceRange: "Gama e Çmimeve",
        bedrooms: "Dhoma Gjumi",
        bathrooms: "Banjo",
      },
      sorting: {
        featured: "Filtrimi",
        priceLow: "Çmimi: Nga Më i Ulët te Më i Lartë",
        priceHigh: "Çmimi: Nga Më i Lartë te Më i Ulët",
      },
      results: {
        found: "{count} pronat u gjetën",
        noResults: "Asnjë pronë nuk përputhet me filtrat tuaj. Provoni të rregulloni kriteret tuaja.",
      },
    },
    property: {
      notFound: "Prona Nuk u Gjet",
      backToProperties: "Kthehu te Pronat",
      about: "Rreth Kësaj Prone",
      features: "Karakteristika dhe Lehtësira",
      getInTouch: "Lidhuni me Ne",
      callUs: "Na Telefononi",
      emailUs: "Na Dërgoni Email",
      bedrooms: "Dhoma Gjumi",
      bathrooms: "Banjo",
      sqft: "Metra Katrorë",
      location: "Vendndodhja",
      getDirections: "Merr Udhëzime",
    },
    contact: {
      title: "Lidhuni me Ne",
      subtitle: "Jemi këtu për t'ju ndihmuar të gjeni pronën tuaj të përsosur",
      cards: {
        sendEmail: {
          title: "Dërgo një Email",
          description: "Lidhuni me ne me email dhe ne do t'ju përgjigjemi brenda 24 orëve",
          button: "Dërgo Email",
        },
        visitUs: {
          title: "Na Vizitoni",
          button: "Merr Udhëzime",
        },
        bookCall: {
          title: "Rezervo një Telefonatë",
          description: "Caktoni një konsultim me ekspertët tanë të pasurive të paluajtshme luksoze",
          button: "Cakto Tani",
        },
      },
    },
    search: {
      propertyType: "Lloji i Pronës",
      selectPropertyType: "Zgjidh llojin e pronës",
      allTypes: "Të Gjitha Llojet",
      apartment: "Apartament",
      house: "Shtëpi",
      penthouse: "Penthouse",
      townhouse: "Shtëpi Qyteti",
      location: "Vendndodhja",
      enterLocation: "Shkruaj vendndodhjen",
      priceRange: "Gama e Çmimeve",
      selectPriceRange: "Zgjidh gamën e çmimeve",
      anyPrice: "Çdo Çmim",
      under15k: "Nën €15K",
      price15k25k: "€15K - €25K",
      price25k35k: "€25K - €35K",
      price35kPlus: "€35K+",
      bedrooms: "Dhoma Gjumi",
      selectBedrooms: "Zgjidh dhomat e gjumit",
      anySize: "Çdo Madhësi",
      bedroom1: "1 Dhomë Gjumi",
      bedroom2: "2 Dhoma Gjumi",
      bedroom3: "3 Dhoma Gjumi",
      bedroom4Plus: "4+ Dhoma Gjumi",
    },
    propertyCard: {
      beds: "Dhoma",
      baths: "Banjo",
      sqft: "m²",
    },
    whyChooseUs: {
      benefits: "Përfitimet Tona",
      title: "Ndërtimi i ëndrrave, një shtëpi në një kohë",
      description:
        "Misioni ynë shkon përtej pasurive të paluajtshme — ka të bëjë me t'ju udhëhequr nëpër një nga momentet më të rëndësishme të jetës me zemër, ekspertizë dhe angazhim të patundur.",
      benefit1: {
        title: "Bli një shtëpi të re",
        description:
          "Zbuloni shtëpinë tuaj të ëndrrave pa përpjekje. Eksploroni pronat e ndryshme dhe udhëzim ekspert për një përvojë blerjeje pa probleme.",
      },
      benefit2: {
        title: "Merr me qira një shtëpi",
        description:
          "Zbuloni qiranë tuaj të përsosur pa përpjekje. Eksploroni një shumëllojshmëri të larmishme listash të përshtatura saktësisht për nevojat tuaja unike të stilit të jetesës.",
      },
      benefit3: {
        title: "Shit një shtëpi",
        description:
          "Shitni me besim me udhëzim ekspert dhe strategji efektive, duke treguar karakteristikat më të mira të pronës suaj për një shitje të suksesshme.",
      },
      features: {
        trusted: "Ekspertizë e Besueshme",
        tailored: "E Përshtatur për Ju",
        seamless: "Proces pa Probleme",
        insights: "Njohuri të Forta të Tregut",
        support: "Mbështetje Pas Shitjes",
      },
    },
    about: {
      title: "Rreth Nesh",
      subtitle: "Partneri juaj i besueshëm në pasuri të paluajtshme luksoze",
      hero: {
        title: "Ndërtimi i ëndrrave, një shtëpi në një kohë",
        description: "Ne jemi më shumë se agjentë pasurish të paluajtshme — ne jemi partnerët tuaj të besueshëm, duke ju ndihmuar të gjeni pronën e duhur me besim dhe lehtësi.",
        contactButton: "Na kontaktoni",
      },
      stats: {
        propertiesSold: {
          value: "$150M+",
          label: "Prona të shitura",
          description: "Mbi $150M në shitje, duke ndihmuar klientët të gjejnë shtëpi dhe investime me lehtësi dhe besim.",
        },
        happyClients: {
          value: "500+",
          label: "Klientë të kënaqur",
          description: "Më shumë se 500 klientë të kënaqur na besojnë për ta bërë udhëtimin e tyre të pasurive të paluajtshme të qetë dhe të suksesshëm.",
        },
        yearsExperience: {
          value: "20+",
          label: "Vite përvojë",
          description: "Mbi 20 vjet përvojë duke udhëhequr klientët me njohuri të tregut dhe këshilla profesionale.",
        },
      },
      company: {
        title: "Historia Jonë",
        description:
          "Me mbi dy dekada përvojë në tregun e pasurive të paluajtshme luksoze, Luxury Realty është vendosur si destinacion kryesor për klientët e zgjedhur që kërkojnë pronë të jashtëzakonshme. Ne kombinojmë njohuri të paparë të tregut me shërbim të personalizuar për të ofruar rezultate që tejkalojnë pritjet.",
        mission: "Misioni Jonë",
        missionDescription:
          "Të transformojmë përvojën e pasurive të paluajtshme duke ofruar shërbim të jashtëzakonshëm, njohuri të thella të tregut dhe angazhim të patundur për suksesin e klientëve tanë. Ne besojmë se gjetja ose shitja e një shtëpie duhet të jetë një udhëtim emocionues, jo një transaksion stresues.",
        values: "Vlerat Tona",
        valuesDescription:
          "Integriteti, ekselenca dhe qasja e fokusuar te klienti udhëheqin gjithçka që bëjmë. Ne ndërtojmë marrëdhënie të qëndrueshme të bazuara në besim, transparencë dhe pasion të vërtetë për të ndihmuar klientët tanë të arrijnë objektivat e tyre të pasurive të paluajtshme.",
      },
      team: {
        title: "Njihuni me Ekipin Tonë",
        subtitle: "Profesionistë me përvojë të dedikuar për suksesin tuaj",
      },
    },
    faq: {
      label: "Pyetje të Shpeshta",
      title: "Pyetje të Shpeshta",
      subtitle: "Keni pyetje? Ne kemi përgjigjur disa nga më të zakonshmet për t'ju udhëhequr nëpër udhëtimin tuaj të pasurive të paluajtshme.",
      questions: {
        q1: {
          question: "Si filloj procesin e blerjes së një shtëpie?",
          answer: "Thjesht na kontaktoni për një konsultim. Do të diskutojmë objektivat, buxhetin dhe preferencat tuaja, pastaj do t'ju udhëheqim hap pas hapi.",
        },
        q2: {
          question: "A duhet të merr parapëlqim për hipotekë së pari?",
          answer: "Megjithëse nuk kërkohet, marrja e parapëlqimit rekomandohet shumë. Kjo ju ndihmon të kuptoni buxhetin tuaj dhe ju bën një blerës më konkurrues në treg.",
        },
        q3: {
          question: "Në çfarë lloje pronash specializoheni?",
          answer: "Ne specializohemi në pronat luksoze duke përfshirë penthouse, estate, shtëpi me pamje deti dhe pronat rezidenciale të larta. Ne gjithashtu merremi me investimet e pasurive të paluajtshme komerciale.",
        },
        q4: {
          question: "Sa kohë zakonisht zgjat procesi i blerjes?",
          answer: "Afati kohor ndryshon, por zakonisht varion nga 30 deri në 90 ditë nga pranimi i ofertës deri në mbyllje. Faktorët përfshijnë financimin, inspektimet dhe negociatat.",
        },
        q5: {
          question: "A ndihmoni edhe me shitjen e pronave?",
          answer: "Po, ne ofrojmë shërbime gjithëpërfshirëse shitjeje duke përfshirë analizën e tregut, rekomandimet e dekorimit, strategjitë e marketingut dhe mbështetjen e negociatave për të maksimizuar vlerën e pronës suaj.",
        },
        q6: {
          question: "Çfarë e bën agjencinë tuaj të ndryshme nga të tjerat?",
          answer: "Ne kombinojmë dekada ekspertize të tregut luksoz me shërbim të personalizuar, teknologji të avancuar dhe një angazhim për të tejkaluar pritjet. Qasja jonë e fokusuar te klienti siguron një përvojë pa probleme nga fillimi deri në fund.",
        },
      },
    },
  },
}

export const defaultLanguage: Language = "en"
export const supportedLanguages: Language[] = ["en", "sq"]

