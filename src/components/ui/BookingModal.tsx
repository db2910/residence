import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { X, Send, CheckCircle } from 'lucide-react'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  interest: string
  message: string
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false)
        reset()
      }, 300)
    }
  }, [isOpen, reset])

  const onSubmit = (data: FormData) => {
    console.log('Booking enquiry submitted:', data)
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-navy-dark/90 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Panel */}
          <motion.div
            className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl z-10"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold top accent */}
            <div className="h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 border border-gold/20 flex items-center justify-center text-dark-text/40 hover:text-gold hover:border-gold transition-all duration-300 z-20"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <div className="p-8 sm:p-10">
              {submitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={48} className="text-gold mx-auto mb-6" />
                  <h3 className="font-playfair text-navy-primary text-2xl font-bold mb-3">
                    Thank You
                  </h3>
                  <p className="font-inter text-dark-text/70 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                    Your viewing request has been received. A member of our team will contact you within 24 hours.
                  </p>
                  <button onClick={onClose} className="btn-primary">
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <span className="luxury-label text-gold block mb-3">Private Viewing</span>
                    <h2 className="font-playfair text-navy-primary text-2xl sm:text-3xl font-bold mb-2">
                      Book a Viewing
                    </h2>
                    <p className="font-inter text-dark-text/60 text-sm">
                      Complete the form below and we'll arrange a personal tour.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="luxury-label text-dark-text/60 text-[10px] block mb-2">First Name *</label>
                        <input
                          {...register('firstName', { required: true })}
                          className={`w-full bg-offwhite border ${errors.firstName ? 'border-red-400' : 'border-gold/15'} px-4 py-3 font-inter text-sm text-navy-primary placeholder:text-dark-text/30 focus:outline-none focus:border-gold transition-colors`}
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="luxury-label text-dark-text/60 text-[10px] block mb-2">Last Name *</label>
                        <input
                          {...register('lastName', { required: true })}
                          className={`w-full bg-offwhite border ${errors.lastName ? 'border-red-400' : 'border-gold/15'} px-4 py-3 font-inter text-sm text-navy-primary placeholder:text-dark-text/30 focus:outline-none focus:border-gold transition-colors`}
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="luxury-label text-dark-text/60 text-[10px] block mb-2">Email Address *</label>
                      <input
                        type="email"
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        className={`w-full bg-offwhite border ${errors.email ? 'border-red-400' : 'border-gold/15'} px-4 py-3 font-inter text-sm text-navy-primary placeholder:text-dark-text/30 focus:outline-none focus:border-gold transition-colors`}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="luxury-label text-dark-text/60 text-[10px] block mb-2">Phone Number</label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full bg-offwhite border border-gold/15 px-4 py-3 font-inter text-sm text-navy-primary placeholder:text-dark-text/30 focus:outline-none focus:border-gold transition-colors"
                        placeholder="+250 7XX XXX XXX"
                      />
                    </div>

                    <div>
                      <label className="luxury-label text-dark-text/60 text-[10px] block mb-2">I'm Interested In</label>
                      <select
                        {...register('interest')}
                        className="w-full bg-offwhite border border-gold/15 px-4 py-3 font-inter text-sm text-navy-primary focus:outline-none focus:border-gold transition-colors appearance-none"
                      >
                        <option value="">Select an option</option>
                        <option value="2-bed">2-Bedroom Residence</option>
                        <option value="3-bed">3-Bedroom Residence</option>
                        <option value="4-bed">4-Bedroom Penthouse</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="luxury-label text-dark-text/60 text-[10px] block mb-2">Message</label>
                      <textarea
                        {...register('message')}
                        rows={3}
                        className="w-full bg-offwhite border border-gold/15 px-4 py-3 font-inter text-sm text-navy-primary placeholder:text-dark-text/30 focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center">
                      Submit Enquiry
                      <Send size={14} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
