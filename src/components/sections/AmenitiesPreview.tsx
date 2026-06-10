import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Waves, Dumbbell, Car, Bell, Flag, Users, Infinity } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { staggerContainerVariants, staggerChildVariants } from '../../animations/motionVariants'

const features = [
  { icon: Waves, title: 'Swimming Pool', desc: 'Resort-style pool with sun deck and lounging area.' },
  { icon: Dumbbell, title: 'Fully Equipped Gym', desc: 'State-of-the-art fitness suite, open 24 hours.' },
  { icon: Car, title: 'Secure Parking', desc: 'Dedicated parking for all residents, barrier controlled.' },
  { icon: Bell, title: 'Professional Reception', desc: 'Staffed reception and concierge services daily.' },
  { icon: Flag, title: 'Golf Surroundings', desc: 'Scenic golf course views and direct course access.' },
  { icon: Users, title: 'Managed Community', desc: 'Professional estate management and maintenance.' },
]


export default function AmenitiesPreview() {
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <section
      className="section-py bg-navy-primary relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="World-class amenities"
      id="amenities-preview"
    >
      {/* Subtle diamond bg */}
      <div className="absolute inset-0 opacity-40 diamond-bg" />

      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column — Text + Features */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.span className="luxury-label block mb-4" variants={staggerChildVariants}>
              World-Class Amenities
            </motion.span>
            <motion.h2
              className="font-playfair text-white text-4xl md:text-5xl font-bold leading-tight mb-6"
              variants={staggerChildVariants}
            >
              Everything You Need,<br />All in One Place
            </motion.h2>
            <motion.div className="gold-divider mb-8" variants={staggerChildVariants} />
            <motion.p
              className="font-inter text-white/60 text-base leading-relaxed mb-10 max-w-md"
              variants={staggerChildVariants}
            >
              Harrington Golf Residence is designed so you never have to compromise.
              From morning workouts to evening swims, every convenience is right at home.
            </motion.p>

            {/* Feature Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
              variants={staggerContainerVariants}
            >
              {features.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  className="flex items-start gap-4 group"
                  variants={staggerChildVariants}
                >
                  <div className="w-9 h-9 bg-gold/15 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/25 transition-colors duration-300">
                    <Icon size={15} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-poppins text-white text-sm font-semibold mb-1">{title}</h4>
                    <p className="font-inter text-white/45 text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="mt-10" variants={staggerChildVariants}>
              <Link to="/amenities" className="btn-primary" id="amenities-learn-more-btn">
                Explore Amenities
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column — Stat Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Large card — Bedroom Options */}
            <motion.div
              className="col-span-2 md:col-span-1 row-span-2 dark-card p-8 md:p-10 flex flex-col items-center justify-center min-h-48 md:min-h-64"
              variants={staggerChildVariants}
            >
              <div className="font-playfair text-gold font-bold text-6xl md:text-7xl leading-none mb-4">
                {isInView ? '2–4' : ''}
              </div>
              <span className="stat-label">Bedroom Options</span>
            </motion.div>

            {/* Pool Access */}
            <motion.div
              className="dark-card p-6 flex flex-col items-center justify-center min-h-28"
              variants={staggerChildVariants}
            >
              <Infinity size={28} className="text-gold mb-3" strokeWidth={1.5} />
              <span className="stat-label">Pool Access</span>
            </motion.div>

            {/* Gym & Security */}
            <motion.div
              className="dark-card p-6 flex flex-col items-center justify-center min-h-28"
              variants={staggerChildVariants}
            >
              <div className="font-playfair text-gold font-bold text-4xl md:text-5xl leading-none mb-3">
                24h
              </div>
              <span className="stat-label">Gym & Security</span>
            </motion.div>

            {/* Parking */}
            <motion.div
              className="col-span-2 dark-card p-6 flex flex-col items-center justify-center min-h-28"
              variants={staggerChildVariants}
            >
              <div className="font-playfair text-gold font-bold text-4xl md:text-5xl leading-none mb-3">
                1:1
              </div>
              <span className="stat-label">Parking Per Unit</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
