import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/70 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* NAP Block */}
          <div>
            <div className="font-serif text-sand text-xl mb-1">Nahma Golf Club</div>
            <div className="text-xs tracking-[0.2em] uppercase text-sand/50 mb-4 font-sans">Est. 1922</div>
            <address className="not-italic text-sm leading-7 text-cream/70">
              8588 Ll Rd<br />
              Rapid River, MI 49878<br />
              <a href="tel:+19066442648" className="hover:text-sand transition-colors">(906) 644-2648</a><br />
              <a href="mailto:nahmagolfclub@gmail.com" className="hover:text-sand transition-colors">nahmagolfclub@gmail.com</a>
            </address>
            <p className="text-xs text-sand/50 mt-3 italic">Open May through September &middot; Walk-ins Welcome</p>
          </div>

          {/* Nav Links */}
          <div>
            <div className="text-xs tracking-widest uppercase text-sand/50 mb-4">The Club</div>
            <ul className="space-y-2 text-sm">
              {[
                ['/the-course/', 'The Course'],
                ['/rates/', 'Rates & Fees'],
                ['/tee-times/', 'Tee Times'],
                ['/leagues/', 'Golf Leagues'],
                ['/clubhouse/', 'Clubhouse'],
                ['/outings/', 'Group Outings'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-sand transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <div className="text-xs tracking-widest uppercase text-sand/50 mb-4">More</div>
            <ul className="space-y-2 text-sm">
              {[
                ['/rentals/', 'Cart Rentals'],
                ['/history/', 'Club History'],
                ['/about/', 'About'],
                ['/contact/', 'Contact'],
                ['/blog/', 'Blog'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-sand transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div className="text-xs tracking-widest uppercase text-sand/50 mb-3">Follow Us</div>
              <a href="#" className="inline-flex items-center gap-2 text-sm hover:text-sand transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-light mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/40">
          <span>Copyright {new Date().getFullYear()} Nahma Golf Club. All rights reserved.</span>
          <span>Rapid River, Michigan</span>
        </div>
      </div>
    </footer>
  )
}
