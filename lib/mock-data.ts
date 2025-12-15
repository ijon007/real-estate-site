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
    title: "Loft for sale - Jordan Misja Str.",
    price: 147500,
    location: "Rruga Jordan Misja, Tiranë",
    beds: 2,
    baths: 2,
    sqft: 146,
    image: "/selman/sl-1.png",
    images: [],
    description:
      "Për më tepër informacion ose një vizitë në apartament më kontaktoni ne Cel & What's App: 📱+355685451010",
    features: ["TV", "Internet", "Wifi"],
  },
  {
    id: "2",
    title: "Apartment for sale - Building with Arrows",
    price: 73000,
    location: "Building with Arrows, Tiranë",
    beds: 1,
    baths: 1,
    sqft: 72,
    image: "/selman/sl-2.png",
    images: [],
    description:
      "Për më tepër informacion ose një vizitë në apartament më kontaktoni ne Cel & What's App: 📱+355685451010",
    features: ["TV", "Internet", "Wifi", "Living Room", "Kitchen", "Bathroom", "2nd Floor"],
  },
  {
    id: "3",
    title: "Villa for sale - TEG",
    price: 750000,
    location: "TEG, Tiranë",
    beds: 5,
    baths: 4,
    sqft: 465,
    image: "/selman/sl-3.png",
    images: [],
    description:
      "Për më tepër informacion ose një vizitë në apartament më kontaktoni ne Cel & What's App: 📱+355685451010",
    features: ["TV", "Internet", "Wifi", "Living Room", "Kitchen", "Bathroom"],
  },
  {
    id: "4",
    title: "Apartment for sale - School of Ballet",
    price: 55000,
    location: "School of Ballet, Tiranë",
    beds: 1,
    baths: 1,
    sqft: 49,
    image: "/selman/sl-4.png",
    images: [],
    description:
      "Për më tepër informacion ose një vizitë në apartament më kontaktoni ne Cel & What's App: 📱+355685451010",
    features: ["TV", "Internet", "Wifi", "Living Room", "Kitchen", "Bathroom"],
  }
]
