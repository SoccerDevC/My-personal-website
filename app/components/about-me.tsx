"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function AboutMe() {
  const skills = [
    "Full-Stack Web Development (React, Next.js, Node.js, WordPress)",
    "Mobile App Development (React Native – iOS & Android)",
    "Backend Engineering (Node.js, Express, PostgreSQL, MongoDB)",
    "Data Science & Machine Learning (Python, TensorFlow, CNN)",
    "Healthcare & Environmental Tech Solutions",
    "Security & DevOps (Docker, AWS, CI/CD, Linux, Nginx)",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Get to know my background, skills, and what drives me as a developer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
                <img src="/images/profile.jpg" alt="Serumaga Conrad David" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-lg border border-border">
                <div className="text-center">
                  <p className="font-bold text-primary">Final Year</p>
                  <p className="text-sm">Software Engineering</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary rounded-br-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a <strong>Final-Year Software Engineering Student</strong> with a passion for building innovative
                digital solutions across multiple domains including web, mobile, healthcare, and environmental
                technology.
              </p>
              <p className="text-muted-foreground">
                My projects demonstrate my versatility - from developing healthcare applications and environmental
                platforms to creating AI-powered disease detection systems and educational games. I'm committed to using
                technology to solve real-world problems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">My Expertise</h3>
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <p className="text-lg font-medium text-center mt-8 text-primary">
              📌 Let's build something great together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

