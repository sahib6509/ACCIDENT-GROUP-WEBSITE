"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

// PLACEHOLDER TESTIMONIALS - Replace with real testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "After my accident, I was overwhelmed and didn't know where to turn. Accident Group stepped in immediately and handled everything. They made me feel heard and protected every step of the way.",
    author: "Sarah M.",
    location: "Los Angeles, CA",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The insurance company was trying to rush me into a settlement. Accident Group gave me the clarity I needed to understand my options. I'm so grateful for their guidance during such a difficult time.",
    author: "Michael T.",
    location: "Houston, TX",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Professional, responsive, and genuinely caring. They took the stress off my shoulders and let me focus on my recovery. I couldn't have navigated this process without them.",
    author: "Jennifer L.",
    location: "Phoenix, AZ",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Trusted by Those Who Needed Us Most
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real experiences from clients who found support, clarity, and relief
            during their most challenging moments.
          </p>
        </motion.div>

        {/* Desktop: Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground/90 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <Quote className="w-10 h-10 text-primary/30 mb-4" />
            <p className="text-foreground/90 leading-relaxed mb-6 italic min-h-[120px]">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>
            <div className="border-t border-border pt-6">
              <p className="font-semibold text-foreground">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Note about placeholder content */}
        <p className="text-center text-xs text-muted-foreground/50 mt-8">
          {/* Placeholder testimonials - Replace with verified client reviews */}
        </p>
      </div>
    </section>
  )
}
