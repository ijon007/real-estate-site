import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Poppins } from 'next/font/google'
import { I18nProvider } from "@/components/i18n-provider"

const _poppins = Poppins({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: "Infinity Real Estate - Premium Real Estate",
  description: "Discover properties and find your dream home with Infinity Real Estate.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_poppins.className} antialiased`}>
        <I18nProvider>
          {children}
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  )
}
