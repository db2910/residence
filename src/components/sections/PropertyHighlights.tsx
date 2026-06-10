import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, BedDouble } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { staggerContainerVariants, staggerChildVariants, fadeUpVariants } from '../../animations/motionVariants'
import { residences } from '../../data'

const iconMap: Record<string, React.ReactNode> = {
  'two-bedroom': <Home size={20} className="text-gold" />,
  'three-bedroom': <BedDouble size={20} className="text-gold" />,
  'four-bedroom': <Home size={20} className="text-gold" />,
}

export default function PropertyHighlights() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="property-highlights"
      className="section-py bg-offwhite"
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="Property highlights"
    >
      <div className="section-container">

        {/* Section Header */}
        <motion.div
          className="max-w-2xl mb-16"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span className="luxury-label block mb-4" variants={staggerChildVariants}>
            Our Residences
          </motion.span>
          <motion.h2
            className="font-playfair text-dark-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={staggerChildVariants}
          >
            Spaces Designed<br />for How You Live
          </motion.h2>
          <motion.div className="gold-divider mb-8" variants={staggerChildVariants} />
          <motion.p
            className="font-inter text-dark-text/60 text-base leading-relaxed"
            variants={staggerChildVariants}
          >
            Every apartment at Harrington Golf Residence is finished to the highest
            standard, offering generous living spaces, premium fixtures, and views that
            inspire.
          </motion.p>
        </motion.div>

        {/* Horizontal gold separator */}
        <div className="w-full h-px bg-gold/25 mb-0" />

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {residences.map((residence, index) => (
            <motion.article
              key={residence.id}
              className={`group relative flex flex-col p-8 md:p-10 border-b border-gold/20 md:border-b-0 ${
                index < residences.length - 1 ? 'md:border-r md:border-gold/20' : ''
              } hover:bg-white transition-all duration-500`}
              variants={staggerChildVariants}
            >
              {/* Image */}
              <div className="relative h-56 mb-8 overflow-hidden">
                <img
                  src={residence.image}
                  alt={residence.type}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-primary/20 group-hover:bg-navy-primary/10 transition-all duration-500" />
                {/* Availability badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 ${
                  residence.tagStyle === 'available'
                    ? 'bg-gold/90 text-navy-primary'
                    : 'bg-navy-primary/90 text-gold border border-gold/40'
                }`}>
                  <span className="font-poppins text-[9px] font-semibold uppercase tracking-wide">
                    {residence.tag}
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div className="w-11 h-11 bg-navy-primary flex items-center justify-center mb-5 shrink-0">
                {iconMap[residence.id]}
              </div>

              {/* Content */}
              <h3 className="font-playfair text-dark-text text-2xl font-semibold mb-3 leading-snug">
                {residence.type}
              </h3>

              <p className="font-inter text-dark-text/55 text-sm leading-relaxed mb-4 flex-1">
                {residence.shortDesc}
              </p>

              {/* Stats row */}
              <div className="flex gap-6 mb-8 pt-4 border-t border-gold/15">
                <div>
                  <span className="font-poppins text-gold text-xs font-semibold">{residence.bedrooms} Bed</span>
                </div>
                <div>
                  <span className="font-poppins text-gold text-xs font-semibold">{residence.bathrooms} Bath</span>
                </div>
                <div>
                  <span className="font-poppins text-gold text-xs font-semibold">{residence.area}</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/residences"
                className="btn-outline-dark self-start"
                id={`residence-cta-${residence.id}`}
              >
                {residence.tagStyle === 'available' ? 'Available Now' : 'Limited Availability'}
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
