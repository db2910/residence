import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { staggerContainerVariants, staggerChildVariants } from '../../animations/motionVariants'
import { testimonials } from '../../data'

export default function TestimonialsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      className="section-py bg-offwhite"
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="Resident testimonials"
      id="testimonials"
    >
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span className="luxury-label block mb-4" variants={staggerChildVariants}>
            Resident Voices
          </motion.span>
          <motion.h2
            className="font-playfair text-dark-text text-4xl md:text-5xl font-bold leading-tight mb-6"
            variants={staggerChildVariants}
          >
            Loved by Those<br />Who Call it Home
          </motion.h2>
          <motion.div className="gold-divider mx-auto" variants={staggerChildVariants} />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              className="relative bg-white shadow-card hover:shadow-card-hover transition-all duration-500 p-8 group border-t-2 border-transparent hover:border-gold flex flex-col"
              variants={staggerChildVariants}
            >
              {/* Quote icon */}
              <Quote size={28} className="text-gold/25 mb-4 shrink-0" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-cormorant text-dark-text/70 text-lg leading-relaxed mb-8 flex-1 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gold/15">
                <div className="w-10 h-10 bg-navy-primary flex items-center justify-center shrink-0">
                  <span className="font-playfair text-gold text-xs font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <span className="font-poppins text-dark-text text-sm font-semibold block">
                    {testimonial.name}
                  </span>
                  <span className="font-inter text-dark-text/45 text-xs">
                    {testimonial.title}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
