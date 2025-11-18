export interface Property {
  id: string
  title: string
  price: number | string
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
    title: "Apartament Luksoz 2+1+2",
    price: 525000,
    location: "Lake View Residences, Liqeni i Tiranës",
    beds: 4,
    baths: 3,
    sqft: 4200,
    image: "/navhills/pic10re.png?height=300&width=400",
    images: [
      "/navhills/pic11re.png?height=600&width=800",
      "/navhills/pic12re.png?height=600&width=800",
    ],
    description:
      "Çdo detaj është menduar për komfort, qetësi dhe luks. Pamja nga Liqeni i Tiranës e bën këtë pronë një investim unik dhe një vend perfekt për të jetuar.",
    features: ["2 dhoma gjumi", "2 tualete", "Dhomë ndenjeje me kuzhinë moderne", "Orientim Jug-Lindje", "Parkim", "Kati Dyte Lake View Residences"],
  },
  {
    id: "2",
    title: "SKANDERBEG BUILDING – ZEMRA E TIRANËS",
    price: 1200000,
    location: "Sheshi Skënderbej – Zemra e Tiranës",
    beds: 3,
    baths: 2,
    sqft: 2800,
    image: "/navhills/pic13re.png?height=300&width=400",
    images: [],
    description:
      "Për ata që kërkojnë më shumë se një shtëpi. Një ikonë e re e Tiranës, ku çdo detaj frymëzon, çdo ballkon rrëfen një histori, dhe çdo mëngjes fillon me pamjen më të bukur të qytetit.",
    features: ["2 dhoma gjumi", "2 tualete", "Dhomë ndenjeje me kuzhinë moderne", "Orientim Jug-Lindje", "Parkim", "Kati Dyte Lake View Residences"],
  },
  {
    id: "3",
    title: "APARTAMENT ELEGANT NË ZEMËR TË NATYRËS!",
    price: 265000,
    location: "Liqeni i Thatë – në pallatin e parë të radhës",
    beds: 2,
    baths: 1,
    sqft: 111,
    image: "/navhills/pic8re.png?height=300&width=400",
    images: [
      "/navhills/pic7re.png?height=600&width=800",
      "/navhills/pic8re.png?height=600&width=800",
    ],
    description:
      "Një mundësi e shkëlqyer si investim ose banesë familjare, në një prej zonave më të kërkuara e me rritje të vazhdueshme të vlerës në Tiranë. Me pamje nga liqeni, ajër të pastër dhe afër çdo shërbimi që ju nevojitet.",
    features: ["Kati i Pare", "Resort Pool", "Tennis Court", "Gardens", "Security System", "Wine Cellar"],
  },
  {
    id: "5",
    title: "Vilë moderne për shitje pranë TEG!",
    price: 700000,
    location: "Rezidenca Elysium, Mjull Bathore",
    beds: 3,
    baths: 4,
    sqft: 2200,
    image: "/navhills/pic5re.png?height=300&width=400",
    images: [
      "/navhills/pic4re.png?height=600&width=800",
      "/navhills/pic5re.png?height=600&width=800",
    ],
    description:
      "Një shtëpi që ofron luks, komoditet dhe privatësi, vetëm 5 minuta larg qendrës tregtare TEG.",
    features: ["Home cinema", "Kantinë vere", "Oborr i gjelbëruar", "4 vende parkimi", "Mobilim bashkëkohor"],
  },
  {
    id: "6",
    title: "Apartament 3+1",
    price: 300000,
    location: "Myslym Shyri, Tiranë",
    beds: 4,
    baths: 3,
    sqft: 160,
    image: "/navhills/pic1-re.png?height=300&width=400",
    images: [
      "/navhills/pic20re.png?height=600&width=800",
      "/navhills/pic3re.png?height=600&width=800",
    ],
    description:
      "Ky apartament 3+1 ofron jo vetëm hapësirë dhe pozicion strategjik në një nga zonat më të kërkuara të Tiranës, por edhe një potencial fitimi të garantuar. Investim i sigurt me projekt të miratuar dhe leje gati.\n2+1 me sipërfaqe neto 89.2 m²\n1+1 me sipërfaqe neto 70.8 m²",
    features: ["2+1 me sipërfaqe neto 89.2 m²", "1+1 me sipërfaqe neto 70.8 m²", "Kati i Dyte", "Parkim", "Mobilim bashkëkohor"],
  },
]
