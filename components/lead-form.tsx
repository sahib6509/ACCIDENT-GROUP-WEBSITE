"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface LeadFormProps {
  variant?: "hero" | "footer"
}

export function LeadForm({ variant = "hero" }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [liability, setLiability] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`)
      }

      setIsSubmitted(true)
      form.reset()
      setLiability("")
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was a problem submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${
          variant === "hero"
            ? "bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-8"
            : "bg-card/30 backdrop-blur-xl border border-border rounded-2xl p-8"
        } text-center`}
      >
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
        </div>

        <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
          Thank You
        </h3>

        <p className="text-muted-foreground">
          We&apos;ve received your information. A member of our team will contact
          you shortly for your confidential case review.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`${
        variant === "hero"
          ? "bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-8"
          : "bg-card/30 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-8"
      }`}
    >
      <div className="flex items-center gap-2 mb-6">
        <Shield className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium text-foreground">
          Free Case Review
        </span>
      </div>

      <form
        name="case-review"
        method="POST"
        action="/__forms.html"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="case-review" />
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="liability" value={liability} />

        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-foreground/80 text-sm">
            Full Name
          </Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            required
            className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 h-11"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground/80 text-sm">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground/80 text-sm">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(555) 123-4567"
              required
              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="accidentDate" className="text-foreground/80 text-sm">
            Date of Accident
          </Label>
          <Input
            id="accidentDate"
            name="accidentDate"
            type="date"
            required
            className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 h-11"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label
              htmlFor="yourInsurance"
              className="text-foreground/80 text-sm"
            >
              Your Insurance Company
            </Label>
            <Input
              id="yourInsurance"
              name="yourInsurance"
              type="text"
              placeholder="e.g., State Farm"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 h-11"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="otherInsurance"
              className="text-foreground/80 text-sm"
            >
              Other Party&apos;s Insurance
            </Label>
            <Input
              id="otherInsurance"
              name="otherInsurance"
              type="text"
              placeholder="e.g., Geico"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="liability-select"
            className="text-foreground/80 text-sm"
          >
            Do You Believe You Were Liable?
          </Label>

          <Select value={liability} onValueChange={setLiability}>
            <SelectTrigger
              id="liability-select"
              className="bg-input border-border text-foreground h-11"
            >
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>

            <SelectContent className="bg-card border-border">
              <SelectItem value="no">No</SelectItem>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="not-sure">Not Sure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 text-base mt-2"
        >
          {isSubmitting ? "Processing..." : "Get My Free Case Review"}
        </Button>

        <p className="text-xs text-muted-foreground text-center pt-2">
          Confidential. Fast review. No obligation.
        </p>
      </form>
    </motion.div>
  )
}