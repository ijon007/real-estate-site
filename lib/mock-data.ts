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
    title: "Apartament Në Shitje Në Residencën Sun Sea – GOLËM",
    price: 1000,
    location: "Rruga Ahmet Caci Golem",
    beds: 4,
    baths: 3,
    sqft: 100,
    image: "/infinity/irg-pic1.png",
    images: [
      "/infinity/irg-pic2.png",
      "/infinity/irg-pic3.png",
    ],
    description:
      "Apartamente në shitje në rezidencën Sun Sea – Golem • Vetëm pak hapa nga deti • Tipologji të ndryshme apartments • Kate të ndryshme • Faza e ndërtimit përfundon për 24 muaj • Kontaktoni në: +355 686669997, +355 686171113 • Whatsapp | Viber | Telegram • Email: infinity01realestate@gmail.com • Adresa: Rruga Ahmet Caci, Golem",
    features: ["Ocean View", "Apartments", "Multiple Floors"],
  },
  {
    id: "2",
    title: "Vile Në Golem Me Pamje Nga Deti",
    price: 1500,
    location: "Rruga Ahmet Caci, Golem",
    beds: 3,
    baths: 2,
    sqft: 256,
    image: "/infinity/irg-pic4.png",
    images: [
      "/infinity/irg-pic5.png",
      "/infinity/irg-pic6.png",
    ],
    description:
      "Shitet vilë në Golem (me pamje deti) • Sipërfaqe totale: 256m² • Podrum 66.5m² • Kati përdhe 75.31m² + 45.26m² verandë • Kati i parë 68.46m² + 20.85m² ballkon • Kati i dytë 54.31m² + 28.15m² ballkon • Pishina 30.9m² • Çmimi: 1,500€/m² • Kontaktoni në: 0686669997, +355686171113 • Whatsapp | Viber | Telegram • Email: infinity01realestate@gmail.com • Adresa: Rruga Ahmet Caci, Golem",
    features: ["Garden View", "Multiple Floors", "Parking", "Basement", "Pool"],
  },
  {
    id: "3",
    title: "VM Residence Golem",
    price: 1100,
    location: "Rruga Ahmet Caci, Golem",
    beds: 5,
    baths: 4,
    sqft: 6500,
    image: "/infinity/irg-pic7.png",
    images: [
      "/infinity/irg-pic8.png",
      "/infinity/irg-pic9.png",
    ],
    description:
      "Okazion kleringu 1100€/m² • VM Residence Golem • Shiten apartamente kleringu • Sipërfaqe: 68.5m² – 71,925€ • Sipërfaqe: 73.3m² – 76,965€ • Sipërfaqe: 73.3m² – 76,965€ • Sipërfaqe: 91.4m² – 95,970€ • Kate të ndryshme • Faza e ndërtimit përfundon për 24 muaj • Kontaktoni në: 0686669997, +355686171113 • Whatsapp | Viber | Telegram • Email: infinity01realestate@gmail.com • Adresa: Rruga Ahmet Caci, Golem",
    features: ["Apartments", "Multiple Floors", "Parking", "Basement", "Pool"],
  },
]
