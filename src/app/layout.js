import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "3xGrowth - B2B Marketing & Lead Generation",
  description:
    "Performance-driven B2B marketing company focused on lead generation and brand building through Account-Based Marketing.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
