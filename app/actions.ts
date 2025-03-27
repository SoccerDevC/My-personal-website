"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  // Get form data
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate form data
  if (!name || !email || !message) {
    throw new Error("Please fill in all required fields")
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "cddavid2001@gmail.com",
        pass: process.env.EMAIL_PASSWORD || "your-app-password", // Use an app password for Gmail
      },
    })

    // Email content
    const mailOptions = {
      from: email,
      to: "cddavid2001@gmail.com",
      subject: `Portfolio Contact: ${subject || "New message from your portfolio"}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4a5568;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Message:</strong></p>
  <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; margin-top: 10px;">
    ${message.replace(/\n/g, "<br>")}
  </div>
  <p style="margin-top: 20px; font-size: 12px; color: #718096;">This message was sent from your portfolio website contact form.</p>
</div>
      `,
    }

    // For development, just log the email content instead of sending
    if (process.env.NODE_ENV === "development") {
      console.log("Email would be sent:", mailOptions)
      return {
        message: "Thanks for your message! I'll get back to you soon.",
      }
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      message: "Thanks for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send message. Please try again later.")
  }
}

