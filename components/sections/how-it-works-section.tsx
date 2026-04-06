"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ClipboardList, Search, Lightbulb } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Tell Us What Happened",
    description:
      "Fill out the short form and share the basic details of your accident. It only takes a few minutes.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Review Your Case",
    description:
      "We evaluate the insurance situation, liability issues, and identify the best next steps for your situation.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "We Tell You Your Options",
    description:
      "If we can help, we move quickly. If not, you still leave with clarity and guidance on what to do next.",
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Simple Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Getting started is simple. Three easy steps to understand your
            options and protect your claim.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-center h-full transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                  {/* Step Number */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {step.number}
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 -translate-y-1/2 z-10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6 text-primary mx-auto"
                    >
                      <path
                        d="M5 12h14m0 0l-6-6m6 6l-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
