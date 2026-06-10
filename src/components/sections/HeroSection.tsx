import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { staggerContainerVariants, staggerChildVariants, fadeInVariants } from '../../animations/motionVariants'
import { useBooking } from '../../App'

const heroStats = [
  { value: '3', label: 'Apartment Sizes' },
  { value: '5★', label: 'Premium Amenities' },
  { value: '24/7', label: 'Concierge Service' },
  { value: '365', label: 'Days Security' },
]

export default function HeroSection() {
  const { openBooking } = useBooking()

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-16"
      aria-label="Hero section"
      id="hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpeg"
          alt="Harrington Golf Residence aerial view"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy-primary/75" />
      </div>

      {/* Diamond pattern on top of image */}
      <div className="absolute inset-0 z-[1] diamond-bg opacity-40" style={{ backgroundColor: 'transparent' }} />

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent z-10" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full mt-auto">

        {/* Premium Label */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <div className="w-12 h-px bg-gold/60" />
          <span className="luxury-label text-gold text-[10px]">Premium Residential Living</span>
          <div className="w-12 h-px bg-gold/60" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-playfair text-white leading-[1.05] mb-4"
            variants={staggerChildVariants}
          >
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold">
              Where Comfort Meets
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold italic text-gold mt-2">
              Distinction
            </span>
          </motion.h1>

          {/* Sub-brand */}
          <motion.p
            className="luxury-label text-white/60 text-[10px] mt-8 mb-6"
            variants={staggerChildVariants}
          >
            Harrington Golf Residence
          </motion.p>

          {/* Gold Divider */}
          <motion.div
            className="flex justify-center mb-8"
            variants={staggerChildVariants}
          >
            <div className="w-12 h-0.5 bg-gold" />
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="font-inter text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
            variants={staggerChildVariants}
          >
            Thoughtfully designed apartments set against the backdrop of a premier golf
            landscape. Choose from our 2, 3 and 4-bedroom residences — each crafted for
            those who expect the finest in every detail.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            variants={staggerChildVariants}
          >
            <Link
              to="/residences"
              className="btn-primary w-full sm:w-auto justify-center min-w-[200px]"
              id="hero-view-residences-btn"
            >
              View Residences
              <ArrowRight size={14} />
            </Link>
            <button
              onClick={openBooking}
              className="btn-outline w-full sm:w-auto justify-center min-w-[200px]"
              id="hero-book-viewing-btn"
            >
              Book A Viewing
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 w-full mt-auto px-6 max-w-6xl mx-auto pb-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 pt-10 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="stat-block">
              <span className="font-playfair text-gold text-3xl md:text-4xl font-semibold block">
                {stat.value}
              </span>
              <span className="stat-label text-white/70 text-[10px] mt-2">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
