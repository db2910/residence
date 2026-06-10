import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Flag, Waves, Dumbbell, Building, Sparkles, Trees, Bell, Smartphone } from 'lucide-react'
import { amenities } from '../data'
import { pageTransitionVariants, staggerContainerVariants, fadeUpVariants } from '../animations/motionVariants'
import { useInView } from '../hooks/useInView'

const iconMap: Record<string, React.ElementType> = {
  flag: Flag,
  waves: Waves,
  dumbbell: Dumbbell,
  building: Building,
  sparkles: Sparkles,
  trees: Trees,
  bell: Bell,
  smartphone: Smartphone,
}

function AmenityCard({ amenity, index }: { amenity: any, index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const Icon = iconMap[amenity.icon] || Sparkles
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-16 md:py-24 border-b border-gold/10 last:border-b-0"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="section-container">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden group">
              <img 
                src={amenity.image} 
                alt={amenity.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              {/* Elegant overlay frame on hover */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 transition-colors duration-700 pointer-events-none" />
            </div>
          </div>
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className={`max-w-md ${isEven ? 'mr-auto' : 'ml-auto'}`}>
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mb-8 text-gold bg-gold/5">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair text-navy-primary text-3xl md:text-4xl font-bold mb-6">
                {amenity.title}
              </h3>
              <div className="gold-divider mb-6" />
              <p className="font-inter text-dark-text/75 text-base md:text-lg leading-relaxed">
                {amenity.description}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  )
}

export default function AmenitiesPage() {
  return (
    <motion.div 
      variants={pageTransitionVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="bg-offwhite min-h-screen"
    >
      <title>Amenities | Harrington Golf Residence</title>

      {/* Hero Header */}
      <section className="pt-40 pb-24 bg-navy-primary diamond-bg border-b border-white/10">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="luxury-label block mb-4">Five-Star Facilities</span>
            <h1 className="font-playfair text-white text-5xl md:text-7xl font-bold mb-6">
              World-Class Amenities
            </h1>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-inter text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Experience a lifestyle of uncompromising luxury. Our residents enjoy exclusive access to 
              a suite of premium facilities designed to elevate every aspect of daily living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities List */}
      <section className="py-12 bg-white">
        <div className="flex flex-col">
          {amenities.map((amenity, index) => (
            <AmenityCard key={amenity.id} amenity={amenity} index={index} />
          ))}
        </div>
      </section>

      {/* Redesigned Dedicated Service Section */}
      <section className="py-28 bg-navy-primary diamond-bg text-white border-t border-white/5 relative overflow-hidden">
        
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Heading & Large Accent */}
            <div className="lg:col-span-5 border-l-2 border-gold pl-6 md:pl-8">
              <span className="luxury-label text-gold block mb-3">White-Glove Support</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">
                Dedicated Service,<br />Available 24/7
              </h2>
            </div>
            
            {/* Right Column: Narrative & Key Features */}
            <div className="lg:col-span-7">
              <p className="font-inter text-white/75 text-base md:text-lg leading-relaxed mb-8">
                Beyond the physical spaces, the true luxury of Harrington Golf Residence lies in our impeccable, 
                invisible service. Our round-the-clock specialists ensure your absolute convenience, security, 
                and peace of mind are never compromised.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Bespoke Concierge Desk',
                  '24/7 Multi-Tiered Security',
                  'Valet & Chauffeur Services',
                  'On-Site Estate Managers'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/contact" className="btn-primary">
                Enquire Now
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </motion.div>
  )
}
