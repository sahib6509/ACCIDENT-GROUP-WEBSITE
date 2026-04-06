"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Clock, FileX, DollarSign } from "lucide-react"

const mistakes = [
  {
    icon: Clock,
    title: "Delaying Action",
    description:
      "Evidence fades, witnesses forget, and statutes of limitations run out faster than you think.",
  },
  {
    icon: FileX,
    title: "Giving Recorded Statements",
    description:
      "Insurance adjusters are trained to minimize your claim. One wrong word can cost you thousands.",
  },
  {
    icon: DollarSign,
    title: "Accepting Quick Settlements",
    description:
      "Early offers rarely account for future medical costs, lost wages, or long-term impact.",
  },
  {
    icon: AlertTriangle,
    title: "Handling It Alone",
    description:
      "Insurance companies have teams of experts. You deserve someone in your corner too.",
  },
]

export function UrgencySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Protect Your Claim
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            You Only Get One Shot at Your Claim
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Insurance companies start working against you the moment they hear
            about your accident. Early mistakes can significantly reduce your
            compensation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mistakes.map((mistake, index) => (
            <motion.div
              key={mistake.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <mistake.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {mistake.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {mistake.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/90 text-lg font-medium">
            Accident Group helps clients avoid these costly mistakes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
