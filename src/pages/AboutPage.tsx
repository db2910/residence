import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Shield, Users, Clock, MapPin, Star } from 'lucide-react'
import { pageTransitionVariants, staggerContainerVariants, staggerChildVariants, fadeUpVariants } from '../animations/motionVariants'
import { useInView } from '../hooks/useInView'

const values = [
  {
    Icon: Award,
    title: 'Excellence in Design',
    description: 'Every detail — from the architectural silhouette to interior finishes — reflects an unwavering commitment to design excellence and timeless elegance.',
  },
  {
    Icon: Shield,
    title: 'Uncompromising Quality',
    description: 'We source only the finest materials and partner with world-class craftsmen to deliver residences of extraordinary quality and longevity.',
  },
  {
    Icon: Users,
    title: 'Resident-First Philosophy',
    description: 'Our residents are at the heart of everything we do. We design communities, not just buildings — fostering connections and enriching lifestyles.',
  },
  {
    Icon: Clock,
    title: 'Legacy & Trust',
    description: 'With over 12 years of experience in luxury development, we have earned the trust of discerning buyers across the region and beyond.',
  },
]

const milestones = [
  { year: '2012', event: 'Company Founded', detail: 'Established with a vision to redefine luxury living in East Africa.' },
  { year: '2015', event: 'First Development Completed', detail: 'Delivered our inaugural premium residential project to critical acclaim.' },
  { year: '2018', event: 'Award-Winning Design', detail: 'Recognized internationally for architectural innovation and sustainable luxury.' },
  { year: '2021', event: 'Harrington Golf Residence Announced', detail: 'Unveiled our flagship development — the pinnacle of our portfolio.' },
  { year: '2024', event: 'Phase 1 Handover', detail: 'First residents welcomed into the completed Phase 1 apartments.' },
]

function ValuesSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-white"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainerVariants}
    >
      <div className="section-container">
        <motion.div className="text-center max-w-3xl mx-auto mb-20" variants={staggerChildVariants}>
          <span className="luxury-label block mb-4">What Drives Us</span>
          <h2 className="font-playfair text-navy-primary text-4xl md:text-5xl font-bold mb-6">
            Our Core Values
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="font-inter text-dark-text/70 text-lg leading-relaxed">
            The principles that guide every decision, every design, and every relationship we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {values.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              className="flex gap-6 group"
              variants={staggerChildVariants}
            >
              <div className="shrink-0 w-14 h-14 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy-primary transition-all duration-500">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-playfair text-navy-primary text-xl font-bold mb-3">{title}</h3>
                <p className="font-inter text-dark-text/70 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function TimelineSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-offwhite"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainerVariants}
    >
      <div className="section-container">
        <motion.div className="text-center max-w-3xl mx-auto mb-20" variants={staggerChildVariants}>
          <span className="luxury-label block mb-4">Our Journey</span>
          <h2 className="font-playfair text-navy-primary text-4xl md:text-5xl font-bold mb-6">
            Milestones
          </h2>
          <div className="gold-divider mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
              }`}
              variants={staggerChildVariants}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 mt-2 md:mt-0 z-10 ring-4 ring-offwhite" />

              {/* Content Card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <span className="font-playfair text-gold text-2xl font-bold block mb-1">{milestone.year}</span>
                <h3 className="font-poppins text-navy-primary text-sm font-bold uppercase tracking-wider mb-2">{milestone.event}</h3>
                <p className="font-inter text-dark-text/65 text-sm leading-relaxed">{milestone.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  const stats = [
    { value: '12+', label: 'Years of Excellence' },
    { value: '350+', label: 'Homes Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '5', label: 'Award Wins' },
  ]

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-navy-primary diamond-bg border-y border-white/10"
    >
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <span className="font-playfair text-gold text-4xl md:text-5xl font-bold block mb-2">{stat.value}</span>
              <span className="font-poppins text-white/60 text-[10px] tracking-luxury uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-offwhite min-h-screen"
    >
      <title>About Us | Harrington Golf Residence</title>

      {/* Hero Header */}
      <section className="pt-40 pb-24 bg-navy-primary diamond-bg border-b border-white/10">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="luxury-label block mb-4">Est. 2012</span>
            <h1 className="font-playfair text-white text-5xl md:text-7xl font-bold mb-2">
              About
            </h1>
            <h1 className="font-cormorant italic text-gold text-5xl md:text-7xl font-medium mb-6">
              Harrington
            </h1>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-inter text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              A legacy of luxury, built on trust, craftsmanship, and an unwavering pursuit of distinction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            {/* Image */}
            <motion.div
              className="w-full lg:w-1/2 relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Harrington Golf Residence interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 md:right-auto md:-left-6 bg-navy-primary text-white p-6 shadow-luxury-sm">
                <span className="font-playfair text-gold text-3xl font-bold block">12+</span>
                <span className="font-poppins text-white/60 text-[10px] tracking-luxury uppercase">Years of Excellence</span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="luxury-label block mb-4">Our Story</span>
              <h2 className="font-playfair text-navy-primary text-4xl md:text-5xl font-bold mb-6">
                Crafting Distinction<br />Since 2012
              </h2>
              <div className="gold-divider mb-8" />
              <p className="font-inter text-dark-text/75 text-base leading-relaxed mb-6">
                Harrington Golf Residence was born from a singular vision: to create a residential
                community that redefines luxury living. Nestled alongside a prestigious championship
                golf course, our development represents the culmination of over a decade of experience
                in premium property development.
              </p>
              <p className="font-inter text-dark-text/75 text-base leading-relaxed mb-6">
                Every element of our residences — from the sweeping architectural lines to the hand-selected
                Italian marble finishes — has been thoughtfully curated by an internationally acclaimed
                team of architects, interior designers, and landscape artists.
              </p>
              <p className="font-inter text-dark-text/75 text-base leading-relaxed mb-10">
                We don't simply build homes. We craft enduring legacies — spaces where families
                thrive, memories are made, and the highest standards of living are effortlessly maintained.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-gold" />
                  <span className="font-poppins text-navy-primary text-sm font-semibold">Kigali, Rwanda</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star size={18} className="text-gold" />
                  <span className="font-poppins text-navy-primary text-sm font-semibold">Award-Winning Developer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <StatsSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Milestones Timeline */}
      <TimelineSection />

      {/* Bottom CTA */}
      <section className="py-24 bg-navy-dark diamond-bg text-center">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-playfair text-white text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="font-inter text-white/60 mb-10">
              Speak with our team to learn more about the Harrington vision and discover your ideal residence.
            </p>
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
