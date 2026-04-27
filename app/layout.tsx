import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavbarClient from "./components/layout/NavbarClient"
import SmoothScroll from "./components/layout/SmoothScroll"
import ScrollReset from "./components/layout/ScrollReset"
import Footer from "./components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vivek Venkatesh - Portfolio",
  description: "Product Designer with a background in Usability, AI, and engineering - shipping real products since 2022.",
  icons: {
    icon: '/images/common/favicon.svg',
  },
  openGraph: {
    title: "Vivek Venkatesh - Portfolio",
    description: "Product Designer with a background in Usability, AI, and engineering - shipping real products since 2022.",
    url: "https://vibgreon.onrender.com",
    siteName: "Vivek Venkatesh",
    images: [
      {
        url: "/images/common/metaImage.webp",
        width: 1200,
        height: 630,
        alt: "Vivek Venkatesh - Product Designer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Venkatesh - Portfolio",
    description: "Product Designer with a background in Usability, AI, and engineering - shipping real products since 2022.",
    images: ["/images/common/metaImage.webp"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <SmoothScroll />
        <ScrollReset />
        <NavbarClient />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
}