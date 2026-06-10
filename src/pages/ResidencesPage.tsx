import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Check } from 'lucide-react'
import { residences } from '../data'
import { pageTransitionVariants, staggerContainerVariants, staggerChildVariants, fadeUpVariants } from '../animations/motionVariants'
import { useInView } from '../hooks/useInView'
import { useBooking } from '../App'

function ResidenceSection({ residence, index, onBookViewing }: { residence: any, index: number, onBookViewing: () => void }) {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const isEven = index % 2 === 0

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 md:py-32 ${isEven ? 'bg-offwhite' : 'bg-white'}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainerVariants}
    >
      <div className="section-container">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-start`}>
          
          {/* Image & Gallery Column */}
          <div className="w-full lg:w-1/2">
            <motion.div className="relative aspect-[4/3] mb-6 overflow-hidden" variants={staggerChildVariants}>
              <img 
                src={residence.image} 
                alt={residence.type} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className={`absolute top-6 left-6 px-4 py-1.5 ${
                residence.tagStyle === 'available' 
                  ? 'bg-gold/90 text-navy-primary' 
                  : 'bg-navy-primary/90 text-gold border border-gold/40'
              }`}>
                <span className="font-poppins text-[10px] font-bold uppercase tracking-wide">
                  {residence.tag}
                </span>
              </div>
            </motion.div>
            
            {/* Mini Gallery */}
            <motion.div className="grid grid-cols-3 gap-3" variants={staggerChildVariants}>
              {residence.gallery.map((img: string, i: number) => (
                <div key={i} className="aspect-square overflow-hidden cursor-pointer group">
                  <img 
                    src={img} 
                    alt={`${residence.type} view ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <motion.div variants={staggerChildVariants}>
              <h2 className="font-playfair text-dark-text text-4xl md:text-5xl font-bold mb-4">
                {residence.type}
              </h2>
              <div className="gold-divider mb-6" />
              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 pb-8 border-b border-gold/20">
                <div>
                  <span className="luxury-label text-light-gray block mb-1">Bedrooms</span>
                  <span className="font-poppins text-navy-primary font-semibold text-lg">{residence.bedrooms}</span>
                </div>
                <div>
                  <span className="luxury-label text-light-gray block mb-1">Bathrooms</span>
                  <span className="font-poppins text-navy-primary font-semibold text-lg">{residence.bathrooms}</span>
                </div>
                <div>
                  <span className="luxury-label text-light-gray block mb-1">Interior Area</span>
                  <span className="font-poppins text-navy-primary font-semibold text-lg">{residence.area}</span>
                </div>
                <div>
                  <span className="luxury-label text-light-gray block mb-1">Starting From</span>
                  <span className="font-poppins text-gold font-semibold text-lg">{residence.price}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerChildVariants}>
              <h3 className="font-poppins text-navy-primary font-semibold text-sm tracking-wide uppercase mb-4">
                Overview
              </h3>
              <p className="font-inter text-dark-text/70 text-base leading-relaxed mb-10">
                {residence.description}
              </p>
            </motion.div>

            <motion.div variants={staggerChildVariants}>
              <h3 className="font-poppins text-navy-primary font-semibold text-sm tracking-wide uppercase mb-6">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
                {residence.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-gold mt-1 shrink-0" />
                    <span className="font-inter text-dark-text/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={staggerChildVariants}>
              <button onClick={onBookViewing} className="btn-primary justify-center flex-1">
                Book A Viewing
                <ArrowRight size={14} />
              </button>
              <button 
                className="btn-outline-dark justify-center flex-1"
                onClick={() => alert('Brochure download will begin shortly.')}
              >
                Download Brochure
                <Download size={14} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default function ResidencesPage() {
  const { openBooking } = useBooking()

  return (
    <motion.div 
      variants={pageTransitionVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="bg-offwhite min-h-screen"
    >
      <title>Residences | Harrington Golf Residence</title>

      {/* Hero Header */}
      <section className="pt-40 pb-20 bg-navy-primary diamond-bg border-b border-white/10">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="luxury-label block mb-4">Premium Living</span>
            <h1 className="font-playfair text-white text-5xl md:text-7xl font-bold mb-6">
              Our Residences
            </h1>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-inter text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover unparalleled luxury across our collection of expertly crafted apartments. 
              Each residence offers panoramic views, generous living spaces, and bespoke finishes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Residences List */}
      <div>
        {residences.map((residence, index) => (
          <ResidenceSection key={residence.id} residence={residence} index={index} onBookViewing={openBooking} />
        ))}
      </div>

      {/* Final CTA */}
      <section className="py-24 bg-navy-dark text-center">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-playfair text-white text-4xl font-bold mb-6">Looking for something specific?</h2>
            <p className="font-inter text-white/60 mb-10">
              Our dedicated sales team is available to discuss your unique requirements and help you find the perfect residence.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Sales Team
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
