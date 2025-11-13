export type Language = "en" | "sq"

export interface Translations {
  common: {
    nav: {
      properties: string
      contact: string
      contactUs: string
    }
    footer: {
      quickLinks: string
      contact: string
      home: string
      properties: string
    }
    buttons: {
      search: string
      reset: string
      viewAll: string
      back: string
      learnMore: string
      scheduleViewing: string
      scheduleConsultation: string
      moreAboutUs: string
      sendEmail: string
      getDirections: string
      scheduleNow: string
    }
  }
  home: {
    hero: {
      title: string
      subtitle: string
    }
    featured: {
      title: string
      description: string
    }
    cta: {
      title: string
      description: string
      button: string
    }
  }
  properties: {
    title: string
    description: string
    filters: {
      title: string
      reset: string
      priceRange: string
      bedrooms: string
      bathrooms: string
    }
    sorting: {
      featured: string
      priceLow: string
      priceHigh: string
    }
    results: {
      found: string
      noResults: string
    }
  }
  property: {
    notFound: string
    backToProperties: string
    about: string
    features: string
    getInTouch: string
    callUs: string
    emailUs: string
    bedrooms: string
    bathrooms: string
    sqft: string
  }
  contact: {
    title: string
    subtitle: string
    cards: {
      sendEmail: {
        title: string
        description: string
        button: string
      }
      visitUs: {
        title: string
        button: string
      }
      bookCall: {
        title: string
        description: string
        button: string
      }
    }
  }
  search: {
    propertyType: string
    selectPropertyType: string
    allTypes: string
    apartment: string
    house: string
    penthouse: string
    townhouse: string
    location: string
    enterLocation: string
    priceRange: string
    selectPriceRange: string
    anyPrice: string
    under500k: string
    price500k1m: string
    price1m2m: string
    price2mPlus: string
    bedrooms: string
    selectBedrooms: string
    anySize: string
    bedroom1: string
    bedroom2: string
    bedroom3: string
    bedroom4Plus: string
  }
  propertyCard: {
    beds: string
    baths: string
    sqft: string
  }
  whyChooseUs: {
    benefits: string
    title: string
    description: string
    benefit1: {
      title: string
      description: string
    }
    benefit2: {
      title: string
      description: string
    }
    benefit3: {
      title: string
      description: string
    }
    features: {
      trusted: string
      tailored: string
      seamless: string
      insights: string
      support: string
    }
  }
}

