"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  demoLink?: string
  tags: string[]
  index: number
}

export default function ProjectCard({ title, description, image, link, demoLink, tags, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 border-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div
            className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex gap-4">
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                >
                  <Github className="h-5 w-5 text-white" />
                </Link>
              )}
              {demoLink && (
                <Link
                  href={demoLink}
                  target="_blank"
                  className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 text-white" />
                </Link>
              )}
            </div>
          </div>
        </div>
        <CardContent className="p-5 flex-grow">
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

