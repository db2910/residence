import { motion } from 'framer-motion'
import { Download, Phone, ArrowRight, FileText } from 'lucide-react'
import { pageTransitionVariants, staggerContainerVariants, staggerChildVariants } from '../animations/motionVariants'
import { useInView } from '../hooks/useInView'
import { useBooking } from '../App'

function PDFSection() {
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
          <span className="luxury-label block mb-4">Current Availability</span>
          <h2 className="font-playfair text-navy-primary text-4xl md:text-5xl font-bold mb-6">
            Available Units
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="font-inter text-dark-text/70 text-base leading-relaxed">
            View the complete list of available units for Phase 3 and Phase 4 as of May 2026.
            Contact our sales team to secure your preferred unit today.
          </p>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div variants={staggerChildVariants}>
          <div
            className="w-full border border-gold/20 shadow-luxury overflow-hidden"
            style={{ height: '85vh', minHeight: '650px' }}
          >
            <iframe
              src="/Available Units Phase 3 and 4 -May 26 2026.pdf"
              width="100%"
              height="100%"
              title="Available Units Phase 3 and 4"
              style={{ border: 0 }}
            />
          </div>

          {/* Download & Contact row */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Available Units Phase 3 and 4 -May 26 2026.pdf"
              download="Harrington-Available-Units.pdf"
              className="btn-primary justify-center"
            >
              Download Unit List
              <Download size={14} />
            </a>
            <a
              href="tel:+250792053090"
              className="btn-outline-dark flex items-center justify-center gap-2"
            >
              <Phone size={14} />
              Call to Reserve a Unit
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

function InfoCards() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const cards = [
    {
      title: 'Phase 3',
      desc: 'Offering a selection of 2 and 3-bedroom residences with direct golf course frontage.',
      detail: 'Handover Q3 2025',
    },
    {
      title: 'Phase 4',
      desc: 'Our newest phase with premium corner units and upgraded specification packages.',
      detail: 'Handover Q1 2026',
    },
    {
      title: 'The Penthouse',
      desc: 'Full-floor luxury penthouse with private rooftop terrace. One unit remaining.',
      detail: 'Limited — Enquire Now',
    },
  ]

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-offwhite"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainerVariants}
    >
      <div className="section-container">
        <motion.div className="text-center max-w-xl mx-auto mb-16" variants={staggerChildVariants}>
          <h2 className="font-playfair text-dark-text text-3xl md:text-4xl font-bold mb-4">
            Phase Overview
          </h2>
          <div className="gold-divider mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-white border border-gold/15 p-10 hover:border-gold/40 hover:shadow-card transition-all duration-500"
              variants={staggerChildVariants}
              custom={i}
            >
              <div className="w-10 h-10 bg-navy-primary flex items-center justify-center mb-6">
                <FileText size={16} className="text-gold" />
              </div>
              <h3 className="font-playfair text-navy-primary text-2xl font-bold mb-3">{card.title}</h3>
              <div className="gold-divider mb-5" />
              <p className="font-inter text-dark-text/70 text-sm leading-relaxed mb-6">{card.desc}</p>
              <span className="font-poppins text-gold text-xs font-semibold uppercase tracking-wider">{card.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default function AvailableUnitsPage() {
  const { openBooking } = useBooking()

  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-offwhite min-h-screen"
    >
      <title>Available Units | Harrington Golf Residence</title>

      {/* Hero Header */}
      <section className="pt-40 pb-24 bg-navy-primary diamond-bg border-b border-white/10">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="luxury-label block mb-4">Phase 3 & 4 — May 2026</span>
            <h1 className="font-playfair text-white text-5xl md:text-7xl font-bold mb-6">
              Available Units
            </h1>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-inter text-white/80 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
              Browse the current unit availability schedule for Harrington Golf Residence.
              Units are selling fast — contact our sales team to secure yours today.
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

      {/* PDF Embed Section */}
      <PDFSection />

      {/* Phase Info Cards */}
      <InfoCards />

      {/* CTA */}
      <section className="py-24 bg-navy-dark diamond-bg text-center">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-playfair text-white text-4xl font-bold mb-6">
              Reserve Your Unit Today
            </h2>
            <p className="font-inter text-white/60 mb-10">
              Units are selling fast. Speak directly with our sales team to discuss availability,
              pricing, and payment plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openBooking} className="btn-primary">
                Book a Viewing
                <ArrowRight size={14} />
              </button>
              <a
                href="/Available Units Phase 3 and 4 -May 26 2026.pdf"
                download="Harrington-Available-Units.pdf"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <Download size={14} />
                Download Unit List
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
