import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ArrowRight } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { staggerContainerVariants, staggerChildVariants } from '../../animations/motionVariants'

const previewImages = [
  {
    id: 1,
    src: '/gallery/exterior-main.jpeg',
    alt: 'Grand entrance exterior',
    category: 'Exterior',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    src: '/gallery/bedroom.jpeg',
    alt: 'Luxury bedroom interior',
    category: 'Interior',
    span: '',
  },
  {
    id: 3,
    src: '/gallery/daytime-rooftop.jpeg',
    alt: 'Rooftop amenities',
    category: 'Amenities',
    span: '',
  },
  {
    id: 4,
    src: '/gallery/dusk-aerial-villas.jpeg',
    alt: 'Sunset view of the villas',
    category: 'Golf Course',
    span: '',
  },
  {
    id: 5,
    src: '/gallery/entrance.jpeg',
    alt: 'Premium entrance',
    category: 'Exterior',
    span: '',
  },
]

export default function GalleryPreview() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <section
      className="section-py bg-navy-dark relative"
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="Gallery preview"
      id="gallery-preview"
    >
      <div className="section-container">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div>
            <motion.span className="luxury-label block mb-4" variants={staggerChildVariants}>
              Gallery
            </motion.span>
            <motion.h2
              className="font-playfair text-white text-4xl md:text-5xl font-bold leading-tight"
              variants={staggerChildVariants}
            >
              A Glimpse Inside<br />Your Future Home
            </motion.h2>
            <motion.div className="gold-divider mt-6" variants={staggerChildVariants} />
          </div>
          <motion.div variants={staggerChildVariants}>
            <Link
              to="/gallery"
              className="btn-outline group inline-flex items-center gap-2"
              id="gallery-view-all-btn"
            >
              View Full Gallery
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {previewImages.map((img) => (
            <motion.div
              key={img.id}
              className={`relative overflow-hidden cursor-pointer group ${img.span}`}
              variants={staggerChildVariants}
              onClick={() => setLightboxSrc(img.src)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightboxSrc(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-navy-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <div className="w-10 h-10 border border-white/60 flex items-center justify-center">
                  <ZoomIn size={16} className="text-white" />
                </div>
              </div>
              {/* Category badge */}
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="luxury-label text-white text-[9px] bg-navy-primary/80 px-2 py-1">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxSrc(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxSrc}
                alt="Gallery full view"
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-navy-primary/80 border border-white/20 flex items-center justify-center text-white hover:text-gold transition-colors"
                onClick={() => setLightboxSrc(null)}
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
