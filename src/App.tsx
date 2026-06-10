import { createContext, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BookingModal from './components/ui/BookingModal'
import HomePage from './pages/HomePage'
import ResidencesPage from './pages/ResidencesPage'
import AmenitiesPage from './pages/AmenitiesPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ui/ScrollToTop'
import './index.css'

// Booking modal context
const BookingContext = createContext<{ openBooking: () => void }>({ openBooking: () => {} })
export const useBooking = () => useContext(BookingContext)

function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <BookingContext.Provider value={{ openBooking: () => setBookingOpen(true) }}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/residences" element={<ResidencesPage />} />
                <Route path="/amenities" element={<AmenitiesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
        <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      </BrowserRouter>
    </BookingContext.Provider>
  )
}

export default App
