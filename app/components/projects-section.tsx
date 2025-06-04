"use client"

import ProjectCard from "./project-card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "CPA Assumpta Nabachwa Website",
    description:
      "A professional website for a Certified Public Accountant showcasing services, expertise, and business insights. Features a modern design with client testimonials and contact functionality.",
    image: "/images/assumpta.png",
    link: "https://github.com/SoccerDevC/assumptanabachwamuweera",
    demoLink: "https://assumptanabachwa.com",
    tags: ["WordPress", "Elementor", "JavaScript", "Responsive Design"],
  },
  {
    title: "Monica Foundation",
    description:
      "A non-profit organization website designed to facilitate donations, showcase community projects, and increase awareness for charitable causes. Includes donation processing and event management.",
    image: "/images/monica-foundation.jpg",
    link: "https://github.com/SoccerDevC/monica-foundation",
    demoLink: "https://monica-foundation.vercel.app",
    tags: ["Next.js", "TailwindCSS", "Stripe", "Responsive Design"],
  },
  // {
  //   title: "Plant Disease Prediction",
  //   description:
  //     "An AI-powered application that uses deep learning (CNN) to identify plant diseases from leaf images. Helps farmers diagnose crop issues early and recommend appropriate treatments.",
  //   image: "/images/plant-disease.jpg",
  //   link: "https://github.com/SoccerDevC/plant-disease-prediction-cnn-deep-learning",
  //   tags: ["Python", "TensorFlow", "CNN", "Deep Learning", "Image Processing"],
  // },
  // {
  //   title: "Green Future Hub",
  //   description:
  //     "A sustainability platform promoting environmental conservation through educational content, carbon footprint tracking, and community-driven action plans for a greener future.",
  //   image: "/images/green-future.jpg",
  //   link: "https://github.com/SoccerDevC/greenfuturehub",
  //   demoLink: "https://greenfuturehub.vercel.app",
  //   tags: ["Next.js", "Node.js", "PostgreSQL", "AI Integration"],
  // },
  {
    title: "Baby Steps Educational Game",
    description:
      "A level-based educational game designed to solve real-world community challenges using emerging technologies. Engages children in learning through interactive gameplay and problem-solving.",
    image: "/images/baby-steps.jpg",
    link: "https://github.com/AriyoX/baby-steps",
    demoLink: "https://baby-steps-game.vercel.app",
    tags: ["React Native", "Supabase", "Firebase", "Game Development"],
  },
  // {
  //   title: "Med Health Hub",
  //   description:
  //     "A comprehensive healthcare application connecting patients with doctors. Features appointment scheduling, medical records management, and secure messaging between healthcare providers and patients.",
  //   image: "/images/med-health.jpg",
  //   link: "https://github.com/SoccerDevC/Med-Health-Doctor",
  //   tags: ["React Native", "Node.js", "MongoDB", "Healthcare API"],
  // },
  {
    title: "Turf Management System",
    description:
      "A booking and management platform for sports turfs, allowing users to reserve time slots, manage turf details, and upload images. Includes payment processing and admin dashboard.",
    image: "/images/turf-management.jpg",
    link: "https://github.com/SoccerDevC/turf-management",
    demoLink: "https://turf-booking-system.vercel.app",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "TailwindCSS"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A showcase of my work across web, mobile, AI, and healthcare domains
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              demoLink={project.demoLink}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/SoccerDevC" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

