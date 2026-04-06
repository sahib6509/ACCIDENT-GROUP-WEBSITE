import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { UrgencySection } from "@/components/sections/urgency-section"
import { ImageDividerSection } from "@/components/sections/image-divider-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CasesSection } from "@/components/sections/cases-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { FinalCtaSection } from "@/components/sections/final-cta-section"
import { Footer } from "@/components/footer"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"

export default function AccidentGroupLanding() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <UrgencySection />
      <ImageDividerSection />
      <CasesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FinalCtaSection />
      <Footer />
      <MobileStickyCta />
    </main>
  )
}
