import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Serumaga Conrad David - Full Stack Developer",
  description:
    "Full stack developer portfolio showcasing projects and skills in web development, mobile app development, and data science",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Mobile Development",
    "Software Engineer",
    "Serumaga Conrad David",
  ],
  authors: [{ name: "Serumaga Conrad David", url: "https://conrad.dev" }],
  creator: "Serumaga Conrad David",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'