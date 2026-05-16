import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const moreLinks = [
  { to: '/rentals/', label: 'Rentals' },
  { to: '/history/', label: 'History' },
  { to: '/about/', label: 'About' },
  { to: '/contact/', label: 'Contact' },
  { to: '/blog/', label: 'Blog' },
]

const mainLinks = [
  { to: '/the-course/', label: 'The Course' },
  { to: '/rates/', label: 'Rates' },
  { to: '/tee-times/', label: 'Tee Times' },
  { to: '/leagues/', label: 'Leagues' },
  { to: '/clubhouse/', label: 'Clubhouse' },
  { to: '/outings/', label: 'Outings' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef(null)

  useEffect(() => {
    function handler(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm font-sans font-medium transition-colors duration-150 ${isActive ? 'text-sand border-b-2 border-sand pb-0.5' : 'text-cream/80 hover:text-sand'}`

  return (
    <nav className="sticky top-0 z-50 bg-forest border-b border-forest-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="font-serif text-sand leading-tight">
              <div className="text-xl font-semibold tracking-tight">Nahma Golf Club</div>
              <div className="text-xs tracking-[0.2em] uppercase text-sand/70 font-sans">Est. 1922</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {mainLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={linkClass}>{label}</NavLink>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setDropOpen(o => !o)}
                className="text-sm font-sans font-medium text-cream/80 hover:text-sand transition-colors flex items-center gap-1"
              >
                More
                <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-forest border border-forest-light rounded shadow-xl py-1 z-50">
                  {moreLinks.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={() => setDropOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm font-sans ${isActive ? 'text-sand bg-forest-light' : 'text-cream/80 hover:text-sand hover:bg-forest-light'}`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/tee-times/"
              className="bg-sand text-forest text-sm font-sans font-semibold px-4 py-2 rounded hover:bg-sand-light transition-colors"
            >
              Book a Tee Time
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-cream p-2"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-forest-dark border-t border-forest-light px-4 py-4 space-y-1">
          {mainLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 text-sm font-sans rounded ${isActive ? 'text-sand bg-forest' : 'text-cream/80 hover:text-sand hover:bg-forest'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="border-t border-forest-light pt-2 mt-2">
            {moreLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-3 text-sm font-sans rounded ${isActive ? 'text-sand bg-forest' : 'text-cream/80 hover:text-sand hover:bg-forest'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <div className="pt-3">
            <Link
              to="/tee-times/"
              onClick={() => setMobileOpen(false)}
              className="block bg-sand text-forest text-sm font-sans font-semibold px-4 py-2 rounded text-center hover:bg-sand-light transition-colors"
            >
              Book a Tee Time
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
