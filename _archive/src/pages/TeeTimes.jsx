/* SEO: Intent: Transactional | No booking system yet -- page converts walk-in intent */
import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'

const hours = [
  { day: 'Monday - Friday', hours: '10:00 AM - 9:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Sunday', hours: '11:00 AM - 9:00 PM' },
]

export default function TeeTimes() {
  return (
    <>
      <SeoBanner page="Tee Times" keywords="tee times nahma golf club, golf rapid river michigan" />

      {/* Hero */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-cream text-4xl sm:text-5xl mb-4">Tee Times at Nahma Golf Club</h1>
          <p className="text-cream/70 font-sans text-lg">No reservation required for most rounds. Just show up and play.</p>
        </div>
      </section>

      {/* Walk-in callout */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-forest rounded-sm p-8 text-center bg-forest/5">
            <svg className="w-12 h-12 text-forest/60 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="font-serif text-forest text-3xl mb-3">No reservation required. Show up and play.</h2>
            <p className="text-charcoal/70 font-sans leading-relaxed max-w-lg mx-auto">
              Nahma Golf Club is open to the public, and walk-ins are always welcome. Bring your clubs, pay your green fee at the clubhouse, and head to the first tee.
            </p>
            <p className="text-charcoal/60 font-sans text-sm mt-4">
              Planning to bring a larger group? Call ahead so we can make sure the course is ready for you.
            </p>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-sand/20 border-t border-sand/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-3xl text-center mb-8">Course Hours</h2>
          <div className="bg-white border border-sand/30 rounded-sm shadow-sm overflow-hidden">
            {hours.map((row, i) => (
              <div key={row.day} className={`flex justify-between items-center px-6 py-4 ${i < hours.length - 1 ? 'border-b border-sand/20' : ''}`}>
                <span className="font-sans font-medium text-charcoal">{row.day}</span>
                <span className="font-sans text-charcoal/70">{row.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Season notice */}
      <section className="py-10 bg-amber-50 border-t border-amber-200 border-b">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <svg className="w-6 h-6 text-amber-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="font-sans font-semibold text-amber-800 mb-1">Season Notice</h3>
          <p className="text-amber-700 font-sans text-sm">
            Nahma Golf Club is open May through September. The course is closed October through April.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-charcoal text-2xl mb-3">Large group? Private outing?</h2>
          <p className="text-charcoal/70 font-sans mb-2">Call us or send an email and we'll get your group set up.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center my-6 text-charcoal font-sans">
            <a href="tel:+19066442648" className="flex items-center gap-2 justify-center text-forest font-semibold hover:text-forest-light">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (906) 644-2648
            </a>
            <a href="mailto:nahmagolfclub@gmail.com" className="flex items-center gap-2 justify-center text-forest font-semibold hover:text-forest-light">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              nahmagolfclub@gmail.com
            </a>
          </div>
          <Link to="/outings/" className="inline-block bg-forest text-cream font-sans font-semibold px-8 py-3 rounded hover:bg-forest-light transition-colors">
            Plan a Group Outing
          </Link>
        </div>
      </section>

      {/* Rates reminder */}
      <section className="bg-forest py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-cream/70 font-sans text-sm mb-2">Green Fees</p>
          <div className="flex flex-wrap justify-center gap-8 text-cream font-serif">
            <div><span className="text-3xl font-semibold text-sand">$18</span> <span className="text-sm">/ 9 holes</span></div>
            <div><span className="text-3xl font-semibold text-sand">$28</span> <span className="text-sm">/ 18 holes</span></div>
          </div>
          <Link to="/rates/" className="inline-block mt-6 border border-sand/50 text-sand font-sans text-sm px-6 py-2 rounded hover:bg-sand hover:text-forest transition-colors">
            View Full Pricing
          </Link>
        </div>
      </section>
    </>
  )
}
