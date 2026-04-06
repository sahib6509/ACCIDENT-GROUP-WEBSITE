"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Car, Truck, Bike, AlertCircle, Dog, FileText } from "lucide-react"

const caseTypes = [
  {
    icon: Car,
    title: "Car Accidents",
    description:
      "From fender benders to serious collisions, we help navigate insurance claims and protect your rights.",
  },
  {
    icon: Truck,
    title: "Truck Accidents",
    description:
      "Complex cases involving commercial vehicles require specialized expertise and thorough investigation.",
  },
  {
    icon: Bike,
    title: "Motorcycle Accidents",
    description:
      "Riders face unique challenges. We understand the specific needs of motorcycle accident victims.",
  },
  {
    icon: AlertCircle,
    title: "Rear-End Collisions",
    description:
      "Even seemingly minor rear-end accidents can result in significant injuries and complications.",
  },
  {
    icon: Dog,
    title: "Dog Bites",
    description:
      "Animal attack injuries can be traumatic. We help victims seek appropriate compensation.",
  },
  {
    icon: FileText,
    title: "Personal Injury Claims",
    description:
      "Slips, falls, and other injuries. If someone else&apos;s negligence caused your harm, we can help.",
  },
]

export function CasesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="cases"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Our Expertise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Cases We Handle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We specialize in a wide range of personal injury cases. Find your
            situation below and take the first step toward clarity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseTypes.map((caseType, index) => (
            <motion.div
              key={caseType.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="h-full bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/60 hover:scale-[1.02]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <caseType.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {caseType.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {caseType.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
