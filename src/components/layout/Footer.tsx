import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, MessageCircle, Hash, AtSign } from 'lucide-react'

const footerLinks = {
  'Quick Links': [
    { label: 'Residences', path: '/residences' },
    { label: 'Amenities', path: '/amenities' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  'Residences': [
    { label: '2-Bedroom Apartments', path: '/residences' },
    { label: '3-Bedroom Apartments', path: '/residences' },
    { label: '4-Bedroom Penthouses', path: '/residences' },
    { label: 'Floor Plans', path: '/residences' },
    { label: 'Book a Viewing', path: '/contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark border-t border-white/5">
      {/* Main Footer */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-4">
              <span className="font-playfair text-white text-xl font-semibold leading-tight">
                Harrington Golf<br />Residence
              </span>
            </Link>
            <p className="luxury-label text-gold/70 text-[10px] mb-6">Luxury Living</p>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-8">
              Where comfort meets distinction. Premium residential living set against the backdrop of a premier golf landscape.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Globe, label: 'Website' },
                { Icon: MessageCircle, label: 'Chat' },
                { Icon: Hash, label: 'Social' },
                { Icon: AtSign, label: 'Connect' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="luxury-label text-gold text-[10px] mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-inter text-white/50 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="luxury-label text-gold text-[10px] mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="font-inter text-white/50 text-sm leading-relaxed">
                  Kigali, Rwanda<br />
                  Sales Centre open daily, 9am – 5pm
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold shrink-0" />
                <a href="tel:+250788000000" className="font-inter text-white/50 text-sm hover:text-white transition-colors">
                  +250 788 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold shrink-0" />
                <a href="mailto:info@harringtongolf.rw" className="font-inter text-white/50 text-sm hover:text-white transition-colors">
                  info@harringtongolf.rw
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-white/30 text-xs">
              © {currentYear} Harrington Golf Residence. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="font-inter text-white/30 text-xs hover:text-white/60 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
