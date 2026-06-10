/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#0D1B3D',
          secondary: '#14274E',
          dark: '#080F21',
          light: '#1A2F5E',
        },
        gold: {
          DEFAULT: '#C9A24A',
          hover: '#D4AF37',
          light: '#E8C870',
          dark: '#A07C2C',
          muted: 'rgba(201,162,74,0.15)',
        },
        offwhite: '#F8F7F4',
        'light-gray': '#C9CED6',
        'dark-text': '#1A1A1A',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '0.95' }],
      },
      letterSpacing: {
        luxury: '0.25em',
        wide: '0.15em',
      },
      backgroundImage: {
        'diamond-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A24A' fill-opacity='0.06'%3E%3Cpath d='M0 20L20 0l20 20-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'hero-gradient': 'linear-gradient(135deg, #080F21 0%, #0D1B3D 40%, #14274E 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A24A 0%, #D4AF37 50%, #A07C2C 100%)',
        'section-gradient': 'linear-gradient(180deg, #0D1B3D 0%, #080F21 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 60px rgba(0,0,0,0.35)',
        'luxury-sm': '0 8px 32px rgba(0,0,0,0.25)',
        'gold': '0 0 30px rgba(201,162,74,0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'shimmer': 'shimmer 2s infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
