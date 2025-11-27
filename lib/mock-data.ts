export interface Property {
  id: string
  title: string
  price: number
  location: string
  beds: number
  baths: number
  sqft: number
  image: string
  images: string[]
  description: string
  features: string[]
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Apartamenti 1+1",
    price: 500,
    location: "Medrese, Tiranë",
    beds: 1,
    baths: 1,
    sqft: 70,
    image: "/jep-marr/jm-p1.png",
    images: [
      "/jep-marr/jm-p2.png",
    ],
    description:
      "E mobiluar ne kushte standarte me tv, internet, dhe wifi. Për më tepër informacion ose një vizitë në apartament më kontaktoni ne Cel & What's App: 📱0692421665",
    features: ["TV", "Internet", "Wifi"],
  },
  {
    id: "2",
    title: "Jepet me qera ambjent komercial",
    price: 650,
    location: "Pranë Drejtorisë Policisë",
    beds: 3,
    baths: 2,
    sqft: 30,
    image: "/jep-marr/jm-p3.png",
    images: [
      "/jep-marr/jm-p4.png",
    ],
    description:
      "Pershtatshëm për zyrë,dyqan klinikë etj. Për më tepër informacion ose një vizitë në jepet më kontaktoni ne Cel & What's App: 📱0692421665",
    features: ["Zyrë", "Dyqan", "Klinikë", "Parking", "Pet Friendly", "Roof Access"],
  },
  {
    id: "3",
    title: "Jepet me qera apartamenti 1+1",
    price: 700,
    location: "Medrese, Tiranë",
    beds: 2,
    baths: 1,
    sqft: 60,
    image: "/jep-marr/jm-p5.png",
    images: [
      "/jep-marr/jm-p6.png",
    ],
    description:
      "Kati 2, sapo rinovuar me kushte bashkekohore (lavastovilje, 2 kondicioner, depo e vogel) ne pallat egzistuese. Për më tepër informacion ose një vizitë në apartament më kontaktoni ne Cel & What's App: 📱0692421665",
    features: ["Dishwasher", "2 Air Conditioners", "Storage", "Balcony"],
  },
]
