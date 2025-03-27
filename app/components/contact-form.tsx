"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"
import { motion } from "framer-motion"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setSuccess(false)
    setError(false)

    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
      setSuccess(true)

      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form.reset()
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
      setError(true)
    } finally {
      setPending(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 border-t-4 border-t-primary shadow-lg">
        <form id="contact-form" action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="border-muted-foreground/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="border-muted-foreground/20 focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="What's this about?"
              required
              className="border-muted-foreground/20 focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Let's collaborate on something amazing!"
              required
              className="min-h-[150px] border-muted-foreground/20 focus:border-primary"
            />
          </div>
          <Button type="submit" className="w-full" disabled={pending} size="lg">
            {pending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>Send Message</>
            )}
          </Button>

          {message && (
            <motion.div
              className={`flex items-center gap-2 p-3 rounded-md ${success ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {success ? (
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <p className="text-sm">{message}</p>
            </motion.div>
          )}
        </form>
      </Card>
    </motion.div>
  )
}

