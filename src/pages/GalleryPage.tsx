import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { galleryImages } from '../data'
import { pageTransitionVariants, staggerContainerVariants, staggerChildVariants } from '../animations/motionVariants'

const categories = ['All', 'Exterior', 'Interior', 'Amenities', 'Golf Course', 'Lifestyle']

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter)

  const openLightbox = (imageIndex: number) => {
    // Find the actual index in the current filtered set
    setLightboxIndex(imageIndex)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0))
  }

  return (
    <motion.div 
      variants={pageTransitionVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="bg-offwhite min-h-screen"
    >
      <title>Gallery | Harrington Golf Residence</title>

      {/* Hero Header */}
      <section className="pt-40 pb-20 bg-navy-primary diamond-bg border-b border-white/10">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="luxury-label block mb-4">Exquisite Architecture</span>
            <h1 className="font-playfair text-white text-5xl md:text-7xl font-bold mb-6">
              Visual Gallery
            </h1>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-inter text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore the masterfully crafted residential spaces, manicured landscapes, and elite amenities. 
              A visual journey through comfort and distinction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 border-b border-gold/10 bg-white sticky top-20 z-40 shadow-sm">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category)
                  setLightboxIndex(null)
                }}
                className={`px-5 py-2.5 font-poppins text-xs font-semibold tracking-luxury uppercase border transition-all duration-300 ${
                  activeFilter === category
                    ? 'border-gold bg-gold text-navy-primary'
                    : 'border-gold/20 text-navy-primary hover:border-gold hover:bg-gold/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Photo Grid */}
      <section className="py-20">
        <div className="section-container">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  variants={staggerChildVariants}
                  className="group relative aspect-[4/3] overflow-hidden bg-navy-dark cursor-pointer shadow-md"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
                  
                  {/* Text Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                    <span className="luxury-label text-gold text-[9px] mb-1 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {img.category}
                    </span>
                    <h3 className="font-playfair text-xl font-bold transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                      {img.title}
                    </h3>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 border border-white/20 bg-navy-primary/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <Maximize2 size={14} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Interactive Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-gold w-12 h-12 border border-white/10 flex items-center justify-center transition-colors"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Left Control */}
            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-gold w-12 h-12 border border-white/10 flex items-center justify-center transition-colors"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Image Container */}
            <div className="max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center relative">
              <motion.img
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={filteredImages[lightboxIndex].image}
                alt={filteredImages[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain shadow-2xl border border-white/5"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Text Info */}
              <div className="mt-6 text-center text-white" onClick={(e) => e.stopPropagation()}>
                <span className="luxury-label text-gold text-[10px] block mb-1">
                  {filteredImages[lightboxIndex].category}
                </span>
                <h2 className="font-playfair text-2xl font-semibold">
                  {filteredImages[lightboxIndex].title}
                </h2>
              </div>
            </div>

            {/* Right Control */}
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-gold w-12 h-12 border border-white/10 flex items-center justify-center transition-colors"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
