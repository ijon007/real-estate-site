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
    title: "Modern Waterfront Penthouse",
    price: 45000,
    location: "123 Ocean Drive, Miami Beach, FL",
    beds: 4,
    baths: 3,
    sqft: 4200,
    image: "/modern-luxury-penthouse-waterfront.jpg",
    images: [
      "/luxury-penthouse-living-room.png",
      "/modern-master-bedroom-suite.jpg",
      "/gourmet-kitchen-oceanview.jpg",
      "/spa-bathroom-luxury.jpg",
    ],
    description:
      "Stunning penthouse featuring floor-to-ceiling windows with breathtaking ocean views. This luxury residence includes a private rooftop terrace, infinity pool, and state-of-the-art home automation.",
    features: ["Ocean View", "Private Terrace", "Infinity Pool", "Smart Home", "Parking", "Gym Access"],
  },
  {
    id: "2",
    title: "Contemporary Downtown Loft",
    price: 28000,
    location: "456 Urban Avenue, New York, NY",
    beds: 3,
    baths: 2,
    sqft: 2800,
    image: "/contemporary-loft-downtown.jpg",
    images: [
      "/loft-living-space-open-concept.jpg",
      "/industrial-bedroom-design.jpg",
      "/modern-kitchen-loft.jpg",
      "/bathroom-contemporary-style.jpg",
    ],
    description:
      "Chic urban loft in the heart of downtown with exposed brick and steel beams. Features an open-concept living area perfect for modern urban living.",
    features: ["Open Concept", "Exposed Brick", "Urban Location", "Parking", "Pet Friendly", "Roof Access"],
  },
  {
    id: "3",
    title: "Luxury Suburban Estate",
    price: 50000,
    location: "789 Meadowbrook Lane, Westchester, NY",
    beds: 5,
    baths: 4,
    sqft: 6500,
    image: "/luxury-estate-mansion.jpg",
    images: [
      "/grand-foyer-estate.jpg",
      "/elegant-dining-room.png",
      "/resort-style-pool-estate.jpg",
      "/guest-house-luxury-estate.jpg",
    ],
    description:
      "Elegant estate on sprawling grounds with manicured gardens and resort-style amenities. Perfect for families seeking luxury and space.",
    features: ["Guest House", "Resort Pool", "Tennis Court", "Gardens", "Security System", "Wine Cellar"],
  },
  {
    id: "4",
    title: "Cozy Beach Cottage",
    price: 18000,
    location: "321 Seaside Road, Santa Monica, CA",
    beds: 2,
    baths: 2,
    sqft: 1600,
    image: "/beach-cottage-seaside.jpg",
    images: [
      "/beach-cottage-living-room.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    description:
      "Charming beach cottage with direct sand access. Newly renovated with a modern aesthetic while maintaining coastal charm.",
    features: ["Beach Access", "Patio", "Updated Kitchen", "Outdoor Shower", "Parking", "Storage"],
  },
  {
    id: "5",
    title: "Modern Tech Hub Office",
    price: 22000,
    location: "555 Innovation Drive, San Francisco, CA",
    beds: 3,
    baths: 2,
    sqft: 2200,
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    description:
      "Tech-forward residence with integrated smart home systems, high-speed fiber internet, and dedicated office space perfect for remote workers.",
    features: ["Smart Home", "Fiber Internet", "Office Space", "Solar Panels", "EV Charging", "Security Cam"],
  },
  {
    id: "6",
    title: "Historic Victorian Charm",
    price: 32000,
    location: "234 Heritage Street, Boston, MA",
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    description:
      "Beautiful restored Victorian home with original hardwood floors and period details. Recently updated with modern amenities while preserving its historic character.",
    features: ["Hardwood Floors", "Period Details", "Updated Systems", "Basement", "Patio", "Parking"],
  },
]
