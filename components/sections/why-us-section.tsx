"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Star, Newspaper } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Experience That Matters",
    description:
      "Over a decade of dedicated experience navigating complex personal injury claims and insurance negotiations.",
    stat: "10+",
    statLabel: "Years of Experience",
  },
  {
    icon: Users,
    title: "Proven Case Handling",
    description:
      "Hundreds of clients have trusted us to handle their claims with professionalism, care, and attention to detail.",
    stat: "300+",
    statLabel: "Cases Handled",
  },
  {
    icon: Star,
    title: "Client Testimonials",
    description:
      "Real stories from real people who found clarity, support, and successful outcomes through Accident Group.",
    stat: null,
    statLabel: "See Reviews Below",
  },
  {
    icon: Newspaper,
    title: "Industry Recognition",
    description:
      "Recognized by industry peers and media for our commitment to client advocacy and ethical practice.",
    stat: null,
    statLabel: "Media Mentions",
  },
]

export function WhyUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="why-us"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Why Clients Choose Accident Group
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            When it matters most, you need a team that combines experience,
            dedication, and a proven track record of results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {reason.description}
                    </p>
                    {reason.stat ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary">
                          {reason.stat}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {reason.statLabel}
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-primary font-medium">
                        {reason.statLabel}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
