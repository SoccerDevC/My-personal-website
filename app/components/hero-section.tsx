"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, ChevronDown, FileDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function HeroSection() {
  const { theme } = useTheme()

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  Full Stack Developer
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Serumaga Conrad David
              </motion.h1>
              <motion.h2
                className="text-xl font-medium text-primary md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Application Developer | Full Stack Developer
              </motion.h2>
              <motion.p
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Building innovative digital experiences with modern technologies. Specialized in healthcare solutions,
                environmental platforms, and AI-powered applications.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/files/Serumaga_Conrad_David_Resume.pdf" download="Serumaga_Conrad_David_Resume.pdf">
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link href="https://github.com/SoccerDevC" target="_blank">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/conrad-david-83b13a292" target="_blank">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:cddavid2001@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/images/profile.jpg" alt="Serumaga Conrad David" fill className="object-cover" priority />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background p-3 rounded-full shadow-lg border border-border">
              <div className="bg-primary/10 p-3 rounded-full">
                <code className="text-primary font-mono text-sm">{"<coder/>"}</code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="h-8 w-8 animate-bounce text-primary" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  )
}

