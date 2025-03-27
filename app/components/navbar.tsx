"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (id: string) => {
    closeMobileMenu()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center space-x-2" href="/">
          <span className="font-bold text-xl">Conrad.dev</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" className="hidden md:flex">
            Resume
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4 flex flex-col space-y-4 border-t">
              <button
                onClick={() => scrollToSection("about")}
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </button>
              <Button variant="outline" className="w-full">
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

