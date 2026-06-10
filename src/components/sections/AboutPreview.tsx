import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { staggerContainerVariants, staggerChildVariants, fadeLeftVariants } from '../../animations/motionVariants'

export default function AboutPreview() {
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <section
      className="section-py bg-offwhite"
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="About Harrington Golf Residence"
      id="about-preview"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Image */}
          <motion.div
            className="relative"
            variants={fadeLeftVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85"
                alt="Luxury interior of Harrington Golf Residence"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-navy-primary p-6 md:p-8 shadow-luxury">
              <div className="font-playfair text-gold text-4xl font-bold mb-1">12+</div>
              <span className="luxury-label text-white/60 text-[10px]">Years of Excellence</span>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            className="lg:pl-8 mt-12 lg:mt-0"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.span className="luxury-label block mb-4" variants={staggerChildVariants}>
              Our Story
            </motion.span>
            <motion.h2
              className="font-playfair text-dark-text text-4xl md:text-5xl font-bold leading-tight mb-6"
              variants={staggerChildVariants}
            >
              A Legacy of<br />Luxury Living
            </motion.h2>
            <motion.div className="gold-divider mb-8" variants={staggerChildVariants} />
            <motion.p
              className="font-inter text-dark-text/60 text-base leading-relaxed mb-6"
              variants={staggerChildVariants}
            >
              Harrington Golf Residence is the result of over a decade of carefully considered
              design, meticulous craftsmanship, and a genuine passion for creating homes that
              transcend the ordinary.
            </motion.p>
            <motion.p
              className="font-inter text-dark-text/60 text-base leading-relaxed mb-10"
              variants={staggerChildVariants}
            >
              Set within the prestigious surroundings of a championship golf estate, each
              residence has been thoughtfully positioned to maximise views, natural light,
              and the sense of space that defines true luxury living.
            </motion.p>

            {/* Key points */}
            <motion.div className="space-y-4 mb-10" variants={staggerChildVariants}>
              {[
                'Championship golf estate setting',
                'Premium finishes & materials throughout',
                'Designed by award-winning architects',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                  <span className="font-inter text-dark-text/70 text-sm">{point}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={staggerChildVariants}>
              <Link
                to="/about"
                className="btn-outline-dark group inline-flex items-center gap-2"
                id="about-learn-more-btn"
              >
                Learn More
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
