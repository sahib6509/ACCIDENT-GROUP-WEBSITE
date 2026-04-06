"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function ImageDividerSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative h-[40vh] md:h-[50vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/accident-hero.jpg"
          alt="Car accident scene"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/70" />
        {/* Top fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent" />
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 text-balance drop-shadow-lg">
            Every Accident Has a Story
          </h3>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            We listen. We understand. We fight for your rights.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
