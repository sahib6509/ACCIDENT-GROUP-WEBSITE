"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { LeadForm } from "@/components/lead-form"
import { ArrowRight, Clock, Shield, Phone } from "lucide-react"

export function FinalCtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Take Action Now
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
              The Sooner You Act, The Better Protected Your Claim May Be
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every day matters when it comes to protecting your rights after an
              accident. Speaking with Accident Group can provide the clarity you
              need to move forward confidently.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Time-Sensitive Protection
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Evidence and witness memories fade quickly
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Confidential Review
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Your information is protected and private
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Fast Response
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We reach out quickly to discuss your case
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Start your free case review
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LeadForm variant="footer" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
