"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp, Phone } from "lucide-react"

export function MobileStickyCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-background/95 backdrop-blur-lg border-t border-border px-4 py-3 safe-area-pb">
            <div className="flex items-center gap-3">
              <a href="tel:+18583223709" className="flex-shrink-0">
                <Button variant="outline" className="h-12 w-12 p-0">
                  <Phone className="w-5 h-5" />
                </Button>
              </a>
              <a href="#contact" className="flex-1">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12">
                  Get Free Case Review
                </Button>
              </a>
              <a
                href="#"
                className="flex-shrink-0 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-card/80 transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
