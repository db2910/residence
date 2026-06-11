import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { pageTransitionVariants, staggerContainerVariants, staggerChildVariants } from '../animations/motionVariants'
import { useInView } from '../hooks/useInView'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  interest: string
  message: string
}

const contactInfo = [
  {
    Icon: Phone,
    label: 'Call Us',
    value: '+250 792 053 090',
    subtext: 'Mon – Sat, 8am – 6pm EAT',
    href: 'tel:+250792053090',
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'Info@hanningtongolfresidence.rw',
    subtext: 'We respond within 24 hours',
    href: 'mailto:Info@hanningtongolfresidence.rw',
  },
  {
    Icon: MapPin,
    label: 'Visit Us',
    value: 'Kigali, Rwanda',
    subtext: 'Sales Centre open daily, 9am – 5pm',
    href: '#map',
  },
  {
    Icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Sat: 8am – 6pm',
    subtext: 'Sunday by appointment only',
    href: undefined,
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const { ref: formRef, isInView: formInView } = useInView({ threshold: 0.1 })
  const { ref: mapRef, isInView: mapInView } = useInView({ threshold: 0.1 })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('Inquiry submitted:', data)
    setSubmitted(true)
  }

  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-offwhite min-h-screen"
    >
      <title>Contact Us | Harrington Golf Residence</title>

      {/* Hero Header */}
      <section className="pt-40 pb-24 bg-navy-primary diamond-bg border-b border-white/10">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="luxury-label block mb-4">Get In Touch</span>
            <h1 className="font-playfair text-white text-5xl md:text-7xl font-bold mb-6">
              Contact Us
            </h1>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-inter text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Whether you're ready to book a private viewing or simply wish to learn more, our dedicated sales team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white border-b border-gold/10">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ Icon, label, value, subtext, href }, index) => (
              <motion.div
                key={label}
                className="group border border-gold/15 p-8 text-center hover:border-gold/40 hover:shadow-card transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto mb-5 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy-primary transition-all duration-500">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <span className="luxury-label text-gold/70 text-[9px] block mb-2">{label}</span>
                {href ? (
                  <a href={href} className="font-poppins text-navy-primary font-semibold text-sm block mb-1 hover:text-gold transition-colors">
                    {value}
                  </a>
                ) : (
                  <span className="font-poppins text-navy-primary font-semibold text-sm block mb-1">{value}</span>
                )}
                <span className="font-inter text-dark-text/50 text-xs">{subtext}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info Section */}
      <motion.section
        ref={formRef as React.RefObject<HTMLElement>}
        className="py-24 md:py-32 bg-offwhite"
        initial="hidden"
        animate={formInView ? 'visible' : 'hidden'}
        variants={staggerContainerVariants}
      >
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left: Form */}
            <motion.div className="w-full lg:w-7/12" variants={staggerChildVariants}>
              <span className="luxury-label block mb-4">Enquiry Form</span>
              <h2 className="font-playfair text-navy-primary text-3xl md:text-4xl font-bold mb-3">
                Book a Private Viewing
              </h2>
              <div className="gold-divider mb-10" />

              {submitted ? (
                <motion.div
                  className="bg-white border border-gold/20 p-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={48} className="text-gold mx-auto mb-6" />
                  <h3 className="font-playfair text-navy-primary text-2xl font-bold mb-3">
                    Thank You for Your Interest
                  </h3>
                  <p className="font-inter text-dark-text/70 text-base leading-relaxed max-w-md mx-auto">
                    Your enquiry has been received. A member of our dedicated sales team will contact you within 24 hours to arrange your private viewing.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="luxury-label text-dark-text/60 text-[10px] block mb-2">First Name *</label>
                      <input
                        {...register('firstName', { required: true })}
                        className={`w-full bg-white border ${errors.firstName ? 'border-red-400' : 'border-gold/20'} px-5 py-4 font-inter text-sm text-navy-primary placeholder:text-dark-text/30 focus:outline-none focus:border-gold transition-colors`}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="luxury-label text-dark-text/60 text-[10px] block mb-2">Last Name *</label>
                      <input
                        {...register('lastName', { required: true })}
                        className={`w-full bg-white border ${errors.lastName ? 'border-red-400' : 'border-gold/20'} px-5 py-4 font-inter text-sm text-navy-primary placeholder:text-dark-text/30 focus:outline-none focus:border-gold transition-colors`}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="luxury-label text-dark-text/60 text-[10px] block mb-2">Email Address *</label>
                      <input
                        type="email"
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        className={`w-full bg-white border ${errors.email ? 'border-red-400' : 'border-gold/20'} px-5 py-4 font-inter text-sm text-navy-primary placeholder:text-dark-text/30 focus:outline-none focus:border-gold transition-colors`}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="luxury-label text-dark-text/60 text-[10px] block mb-2">Phone Number</label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full bg-white border border-gold/20 px-5 py-4 font-inter text-sm text-navy-primary placeholder:text-dark-text/30 focus:outline-none focus:border-gold transition-colors"
                        placeholder="+250 7XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="luxury-label text-dark-text/60 text-[10px] block mb-2">I'm Interested In</label>
                    <select
                      {...register('interest')}
                      className="w-full bg-white border border-gold/20 px-5 py-4 font-inter text-sm text-navy-primary focus:outline-none focus:border-gold transition-colors appearance-none"
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
                      rows={5}
                      className="w-full bg-white border border-gold/20 px-5 py-4 font-inter text-sm text-navy-primary placeholder:text-dark-text/30 focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                    Submit Enquiry
                    <Send size={14} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right: Additional Info */}
            <motion.div className="w-full lg:w-5/12" variants={staggerChildVariants}>
              <span className="luxury-label block mb-4">Why Harrington?</span>
              <h2 className="font-playfair text-navy-primary text-3xl md:text-4xl font-bold mb-3">
                Your Journey Starts Here
              </h2>
              <div className="gold-divider mb-10" />

              <p className="font-inter text-dark-text/70 text-base leading-relaxed mb-10">
                Every inquiry is treated with the utmost care and discretion. Our dedicated sales consultants will guide you through every step — from initial viewing to handover — ensuring a seamless and enjoyable experience.
              </p>

              <div className="space-y-8 mb-12">
                {[
                  { step: '01', title: 'Submit Your Enquiry', desc: 'Complete the form or contact us directly.' },
                  { step: '02', title: 'Private Consultation', desc: 'A dedicated advisor will reach out within 24 hours.' },
                  { step: '03', title: 'Personal Viewing', desc: 'Experience the residence and amenities first-hand.' },
                  { step: '04', title: 'Secure Your Home', desc: 'We guide you through reservation and completion.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span className="font-playfair text-gold text-2xl font-bold shrink-0 leading-none mt-1">{item.step}</span>
                    <div>
                      <h4 className="font-poppins text-navy-primary text-sm font-bold mb-1">{item.title}</h4>
                      <p className="font-inter text-dark-text/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="border-t border-gold/15 pt-8">
                <span className="luxury-label text-dark-text/40 text-[9px] block mb-4">Trusted By</span>
                <div className="flex flex-wrap gap-6 items-center">
                  {['ISO 9001 Certified', 'RURA Licensed', 'Award-Winning Developer'].map((badge) => (
                    <div key={badge} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      <span className="font-poppins text-navy-primary/70 text-xs font-medium">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        ref={mapRef as React.RefObject<HTMLElement>}
        id="map"
        className="bg-navy-primary diamond-bg py-20 border-t border-white/10"
        initial={{ opacity: 0 }}
        animate={mapInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="luxury-label block mb-4">Find Us</span>
            <h2 className="font-playfair text-white text-3xl md:text-4xl font-bold">
              Our Location
            </h2>
          </div>
          <div className="aspect-[16/7] w-full border border-white/10 overflow-hidden shadow-luxury-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127671.4774!2d29.8!3d-1.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xa4fa1e1a396c0b20!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4f13.1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harrington Golf Residence Location"
            />
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}
