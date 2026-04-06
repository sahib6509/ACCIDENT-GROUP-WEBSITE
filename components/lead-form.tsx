"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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
import { Shield, CheckCircle2 } from "lucide-react"

interface LeadFormProps {
  variant?: "hero" | "footer"
}

export function LeadForm({ variant = "hero" }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
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
          We&apos;ve received your information. A member of our team will contact you shortly for your confidential case review.
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-foreground/80 text-sm">
            Full Name
          </Label>
          <Input
            id="fullName"
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
              placeholder="e.g., Geico"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="liability" className="text-foreground/80 text-sm">
            Do You Believe You Were Liable?
          </Label>
          <Select>
            <SelectTrigger className="bg-input border-border text-foreground h-11">
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
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </span>
          ) : (
            "Get My Free Case Review"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center pt-2">
          Confidential. Fast review. No obligation.
        </p>
      </form>
    </motion.div>
  )
}
