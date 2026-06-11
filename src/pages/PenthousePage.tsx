import { motion } from 'framer-motion'
import { Download, ArrowRight, Check, Phone } from 'lucide-react'
import { pageTransitionVariants, staggerContainerVariants, staggerChildVariants } from '../animations/motionVariants'
import { useInView } from '../hooks/useInView'
import { useBooking } from '../App'

const penthouaseFeatures = [
  'Panoramic 360° golf course & landscape views',
  'Private rooftop terrace with plunge pool',
  'Full-floor layout — entire top floor',
  'Chef\'s kitchen with Gaggenau appliance suite',
  'Master suite with walk-in dressing room & spa bath',
  'Three further en-suite guest bedrooms',
  'Private lift access directly to residence',
  'Smart home automation throughout',
  'Climate-controlled wine cellar',
  'Triple underground garage with storage vault',
  'Dedicated concierge & butler service',
  'Home theatre / entertainment room',
]

function BrochureSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-white"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainerVariants}
    >
      <div className="section-container">
        <motion.div className="text-center max-w-2xl mx-auto mb-16" variants={staggerChildVariants}>
          <span className="luxury-label block mb-4">Official Brochure</span>
          <h2 className="font-playfair text-navy-primary text-4xl md:text-5xl font-bold mb-6">
            Penthouse Collection
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="font-inter text-dark-text/70 text-base leading-relaxed">
            Explore the full penthouse brochure below — complete with architectural renders,
            floor plans, and specification details.
          </p>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div variants={staggerChildVariants} className="relative">
          <div className="w-full border border-gold/20 shadow-luxury overflow-hidden" style={{ height: '80vh', minHeight: '600px' }}>
            <iframe
              src="/Penthouse Renders Brochure.pdf"
              width="100%"
              height="100%"
              title="Penthouse Renders Brochure"
              style={{ border: 0 }}
            />
          </div>
          {/* Download CTA */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Penthouse Renders Brochure.pdf"
              download="Harrington-Penthouse-Brochure.pdf"
              className="btn-primary justify-center"
            >
              Download Brochure
              <Download size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

function FeaturesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-offwhite"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainerVariants}
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left: Image */}
          <motion.div className="w-full lg:w-1/2" variants={staggerChildVariants}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/gallery/daytime-rooftop.jpeg"
                alt="Penthouse rooftop terrace"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { value: '4', label: 'Bedrooms' },
                { value: '4+', label: 'Bathrooms' },
                { value: '380+ m²', label: 'Interior Area' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-navy-primary p-5 text-center">
                  <span className="font-playfair text-gold text-2xl font-bold block mb-1">{value}</span>
                  <span className="font-poppins text-white/60 text-[10px] tracking-luxury uppercase">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div className="w-full lg:w-1/2" variants={staggerChildVariants}>
            <span className="luxury-label block mb-4">Exclusive Features</span>
            <h2 className="font-playfair text-dark-text text-4xl md:text-5xl font-bold mb-6">
              The Pinnacle of<br />Luxury Living
            </h2>
            <div className="gold-divider mb-8" />
            <p className="font-inter text-dark-text/70 text-base leading-relaxed mb-10">
              The Harrington Penthouse occupies the entire top floor and represents the
              absolute pinnacle of what we do. An extraordinary residence for those who
              accept nothing less than the very best.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {penthouaseFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check size={16} className="text-gold mt-1 shrink-0" />
                  <span className="font-inter text-dark-text/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default function PenthousePage() {
  const { openBooking } = useBooking()

  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-offwhite min-h-screen"
    >
      <title>Penthouse | Harrington Golf Residence</title>

      {/* Hero Header */}
      <section className="pt-40 pb-24 bg-navy-primary diamond-bg border-b border-white/10 relative overflow-hidden">
        <div className="section-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="luxury-label block mb-4">Exclusive Offering</span>
            <h1 className="font-playfair text-white text-5xl md:text-7xl font-bold mb-2">
              The Penthouse
            </h1>
            <p className="font-cormorant italic text-gold text-3xl md:text-4xl font-medium mb-6">
              Harrington Golf Residence
            </p>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-inter text-white/80 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
              An extraordinary full-floor penthouse crowning the Harrington Golf Residence.
              Unobstructed panoramic views, a private rooftop terrace, and finishes beyond compare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openBooking} className="btn-primary">
                Book a Private Viewing
                <ArrowRight size={14} />
              </button>
              <a
                href="tel:+250792053090"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <Phone size={14} />
                Call +250 792 053 090
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brochure PDF Section */}
      <BrochureSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <section className="py-24 bg-navy-dark diamond-bg text-center">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <span className="luxury-label block mb-4">Limited Availability</span>
            <h2 className="font-playfair text-white text-4xl font-bold mb-6">
              Secure the Penthouse
            </h2>
            <p className="font-inter text-white/60 mb-10">
              This is a one-of-a-kind opportunity. Contact our sales team today for a
              private consultation and exclusive viewing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openBooking} className="btn-primary">
                Book a Private Viewing
                <ArrowRight size={14} />
              </button>
              <a
                href="/Penthouse Renders Brochure.pdf"
                download="Harrington-Penthouse-Brochure.pdf"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <Download size={14} />
                Download Brochure
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
