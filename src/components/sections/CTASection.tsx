import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { staggerContainerVariants, staggerChildVariants } from '../../animations/motionVariants'
import { useBooking } from '../../App'

export default function CTASection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const { openBooking } = useBooking()

  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="Book a viewing call to action"
      id="cta"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/before.jpeg"
          alt="Harrington Golf Residence at sunset"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-offwhite/80" />
      </div>

      {/* Gold border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-10" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span className="luxury-label block mb-6" variants={staggerChildVariants}>
            Begin Your Journey
          </motion.span>
          <motion.h2
            className="font-playfair text-dark-text text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            variants={staggerChildVariants}
          >
            Begin Your
          </motion.h2>
          <motion.h2
            className="font-playfair text-gold italic text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            variants={staggerChildVariants}
          >
            Journey Home
          </motion.h2>
          <motion.div className="gold-divider mx-auto mb-8" variants={staggerChildVariants} />
          <motion.p
            className="font-inter text-dark-text/75 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
            variants={staggerChildVariants}
          >
            Schedule a private viewing and experience the unparalleled quality of
            Harrington Golf Residence for yourself. Our team is ready to guide you
            through every step of the journey.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={staggerChildVariants}
          >
            <button
              onClick={openBooking}
              className="btn-primary w-full sm:w-auto justify-center min-w-[220px] group"
              id="cta-book-viewing-btn"
            >
              Book A Viewing
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="tel:+250788000000"
              className="btn-outline-dark w-full sm:w-auto justify-center min-w-[220px]"
              id="cta-call-btn"
            >
              +250 788 000 000
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
