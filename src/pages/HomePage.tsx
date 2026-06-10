import { motion } from 'framer-motion'
import { pageTransitionVariants } from '../animations/motionVariants'
import HeroSection from '../components/sections/HeroSection'
import PropertyHighlights from '../components/sections/PropertyHighlights'
import AmenitiesPreview from '../components/sections/AmenitiesPreview'
import AboutPreview from '../components/sections/AboutPreview'
import GalleryPreview from '../components/sections/GalleryPreview'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CTASection from '../components/sections/CTASection'

export default function HomePage() {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* SEO */}
      <title>Harrington Golf Residence | Where Comfort Meets Distinction</title>

      <HeroSection />
      <PropertyHighlights />
      <AmenitiesPreview />
      <AboutPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  )
}
