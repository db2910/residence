import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useBooking } from '../../App'

const navLinks = [
  { label: 'Residences', path: '/residences' },
  { label: 'Amenities', path: '/amenities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const { openBooking } = useBooking()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isHome = pathname === '/'

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-navy-primary border-b border-white/5 shadow-luxury-sm"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Logo */}
            <Link to="/" className="flex flex-col group">
              <span className="font-playfair text-white text-lg md:text-xl font-semibold tracking-wide leading-tight transition-colors duration-300 group-hover:text-gold">
                Harrington Golf Residence
              </span>
              <span className="luxury-label text-gold/80 text-[9px] leading-none mt-0.5">
                Luxury Living
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-white/80 hover:text-white ${
                    pathname === link.path ? 'text-gold after:w-full' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={openBooking}
                className="hidden sm:inline-flex btn-primary text-[10px] px-6 py-3"
                id="nav-enquire-btn"
              >
                Enquire Now
              </button>

              <button
                className="lg:hidden text-white p-2 rounded transition-colors hover:text-gold"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 diamond-bg flex flex-col pt-28 pb-10 px-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Gold top accent */}
            <div className="absolute top-24 left-8 right-8 h-px bg-gold/30" />

            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className={`font-playfair text-3xl text-white/90 hover:text-gold transition-colors duration-300 py-3 block ${
                      pathname === link.path ? 'text-gold' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto">
              <div className="w-12 h-px bg-gold mb-6" />
              <button onClick={() => { setMobileOpen(false); openBooking() }} className="btn-primary w-full justify-center" id="mobile-enquire-btn">
                Enquire Now
              </button>
              <div className="mt-6 space-y-1">
                <p className="font-poppins text-xs text-white/50 tracking-wide">info@harringtongolf.rw</p>
                <p className="font-poppins text-xs text-white/50 tracking-wide">+250 788 000 000</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
