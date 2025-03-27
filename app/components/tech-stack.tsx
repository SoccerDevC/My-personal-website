"use client"

import { Code, Server, Smartphone, Database, Brain, Leaf, CrossIcon as MedicalCross, Cog, Wrench } from "lucide-react"
import SkillCard from "./skill-card"
import { motion } from "framer-motion"

const technologies = [
  {
    category: "Frontend",
    icon: <Code className="h-5 w-5" />,
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL"],
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-5 w-5" />,
    skills: ["React Native", "Firebase", "Supabase", "iOS", "Android"],
  },
  {
    category: "Data Science",
    icon: <Database className="h-5 w-5" />,
    skills: ["Python", "Pandas", "TensorFlow", "Data Visualization", "SQL"],
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain className="h-5 w-5" />,
    skills: ["CNN", "Deep Learning", "Image Processing", "AI Integration"],
  },
  {
    category: "Sustainability Tech",
    icon: <Leaf className="h-5 w-5" />,
    skills: ["Carbon Footprint Tracking", "Environmental APIs", "Green Tech"],
  },
  {
    category: "Healthcare Solutions",
    icon: <MedicalCross className="h-5 w-5" />,
    skills: ["Medical Records Systems", "Healthcare APIs", "Patient Portals"],
  },
  {
    category: "DevOps & Security",
    icon: <Cog className="h-5 w-5" />,
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
  },
  {
    category: "Tools & Workflow",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
  },
]

export default function TechStack() {
  return (
    <div>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Tech Stack</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          My toolkit for building modern, scalable, and specialized applications across various domains
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech, index) => (
          <SkillCard key={tech.category} category={tech.category} skills={tech.skills} icon={tech.icon} index={index} />
        ))}
      </div>
    </div>
  )
}

