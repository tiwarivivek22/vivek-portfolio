"use server"

import { Resend } from "resend"
import { createContactEmailTemplate, createConfirmationEmailTemplate } from "../lib/email-templates"

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? ""
const FROM_EMAIL = process.env.FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>"

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Basic validation
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "Please fill in all fields.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    /* NEW — safely read the API key */
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable")
      return {
        success: false,
        message: "Email service is not configured. Please try again later or reach me directly via LinkedIn.",
      }
    }

    /* NEW — instantiate Resend only if key is present */
    const resend = new Resend(resendApiKey)

    // === SEND EMAILS (unchanged but replace hard-coded addresses) ===
    const emailToVivek = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL || "vivek.prabhat@email.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: createContactEmailTemplate(name, email, subject, message),
    })

    const confirmationEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "Thank you for contacting me!",
      html: createConfirmationEmailTemplate(name, email, subject),
    })

    if (emailToVivek.error || confirmationEmail.error) {
      console.error("Email sending error:", emailToVivek.error || confirmationEmail.error)
      return {
        success: false,
        message: "There was an error sending your message. Please try again or contact me directly.",
      }
    }

    return {
      success: true,
      message: `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon at ${email}.`,
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "There was an unexpected error. Please try again later or contact me directly.",
    }
  }
}
