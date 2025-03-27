"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

interface SkillCardProps {
  category: string
  skills: string[]
  icon: React.ReactNode
  index: number
}

export default function SkillCard({ category, skills, icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full border-t-4 border-t-primary/80 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-md text-primary">{icon}</div>
          <h3 className="text-lg font-semibold">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

