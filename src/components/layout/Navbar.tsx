import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useBooking } from '../../App'

const navLinks = [
  {
    label: 'Residences',
    path: '/residences',
    dropdown: [
      { label: 'All Residences', path: '/residences' },
      { label: 'Available Units', path: '/available-units' },
    ],
  },
  { label: 'Penthouse', path: '/penthouse' },
  { label: 'Amenities', path: '/amenities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileResidencesOpen, setMobileResidencesOpen] = useState(false)
  const { pathname } = useLocation()
  const { openBooking } = useBooking()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isResidencesActive =
    pathname === '/residences' || pathname === '/available-units'

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
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.path} className="relative" ref={dropdownRef}>
                      <button
                        className={`nav-link flex items-center gap-1 text-white/80 hover:text-white ${
                          isResidencesActive ? 'text-gold after:w-full' : ''
                        }`}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-48 bg-navy-primary border border-white/10 shadow-luxury py-2 z-50"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={`block px-5 py-3 font-inter text-sm text-white/70 hover:text-gold hover:bg-white/5 transition-all duration-200 ${
                                  pathname === sub.path ? 'text-gold bg-white/5' : ''
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`nav-link text-white/80 hover:text-white ${
                      pathname === link.path ? 'text-gold after:w-full' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
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
            className="fixed inset-0 z-40 bg-navy-primary diamond-bg flex flex-col pt-28 pb-10 px-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Gold top accent */}
            <div className="absolute top-24 left-8 right-8 h-px bg-gold/30" />

            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link, i) => {
                if (link.dropdown) {
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                    >
                      <button
                        className={`font-playfair text-3xl text-white/90 hover:text-gold transition-colors duration-300 py-3 flex items-center gap-3 w-full ${
                          isResidencesActive ? 'text-gold' : ''
                        }`}
                        onClick={() => setMobileResidencesOpen(!mobileResidencesOpen)}
                      >
                        {link.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${mobileResidencesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileResidencesOpen && (
                          <motion.div
                            className="pl-4 border-l border-gold/30 ml-2 mb-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={`block font-inter text-lg text-white/70 hover:text-gold transition-colors duration-300 py-2 ${
                                  pathname === sub.path ? 'text-gold' : ''
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                }

                return (
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
                )
              })}
            </nav>

            <div className="mt-auto">
              <div className="w-12 h-px bg-gold mb-6" />
              <button
                onClick={() => { setMobileOpen(false); openBooking() }}
                className="btn-primary w-full justify-center"
                id="mobile-enquire-btn"
              >
                Enquire Now
              </button>
              <div className="mt-6 space-y-1">
                <p className="font-poppins text-xs text-white/50 tracking-wide">Info@harringtongolfresidence.rw</p>
                <p className="font-poppins text-xs text-white/50 tracking-wide">+250 792 053 090</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
