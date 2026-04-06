"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Disclaimer", href: "#" },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-block mb-2">
              <span className="font-serif text-xl font-semibold text-foreground">
                Accident<span className="text-primary">Group</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              Premium Personal Injury Claim Advisors
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center md:text-right">
            <a
              href="#contact"
              className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Get Your Free Case Review
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Call us:{" "}
              <a
                href="tel:+18583223709"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                +1 858-322-3709
              </a>
            </p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border"
        >
          <p className="text-xs text-muted-foreground/70 text-center max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> The information on this website is for
            general informational purposes only and does not constitute legal
            advice. Contacting Accident Group does not create an
            attorney-client relationship. Results may vary depending on the
            facts and circumstances of each case. Past performance does not
            guarantee future results.
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Accident Group. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
