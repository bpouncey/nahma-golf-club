/* SEO: Primary keywords: "michigan golf outings," "private golf outing upper peninsula" | Audience: Trip planner, group coordinator */
import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'
import ImagePlaceholder from '../components/ImagePlaceholder'

const benefits = [
  {
    heading: 'The Setting',
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    text: 'Big Bay de Noc runs along the west edge of the course. Your group will have lake views on most holes. It photographs beautifully and gives everyone something to talk about besides their score.',
  },
  {
    heading: 'The Course',
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    text: 'The 9-hole layout is accessible for all skill levels. No one gets left behind. Scramble formats work especially well here.',
  },
  {
    heading: 'The Clubhouse',
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    text: 'Full bar with spirits, food from snacks to pizza, and enough room for your whole crew to gather after the round. The 19th hole at Nahma is the reason most groups book it again the following year.',
  },
]

const pastOutings = [
  { name: 'Manistique Paper Outing', desc: 'An annual tradition drawing players from across the Upper Peninsula to compete on the Big Bay de Noc shoreline.' },
  { name: 'Geno Open', desc: 'A beloved scramble that brings the same group back to Nahma year after year. The camaraderie in the clubhouse afterward is half the reason.' },
  { name: 'Mallach Outing', desc: 'A long-running group event that found its home at Nahma and hasn\'t left. The layout and the setting suit this format perfectly.' },
  { name: 'LaLonde Family Scramble', desc: 'A family reunion on the fairways. The 9-hole course is approachable for all ages and the clubhouse makes for a natural gathering spot after.' },
  { name: 'Stonington Booster Outing', desc: 'A community fundraiser that found the right home at Nahma. Easy logistics, great setting, and a full bar waiting at the end.' },
]

const included = [
  'Private course access windows available throughout the season',
  'Clubhouse food and bar service for your group (full menu, full bar)',
  'Scramble format support — we handle scoring, you handle the fun',
  'Flexible scheduling May through September, including weekends',
  'Group-scaled pricing — call or email for a quote based on your headcount',
  'On-site staff for day-of coordination and any questions',
]

const events2026 = [
  'Kentucky Derby Scramble — Sat, May 2',
  'NGC 1 Person Scramble (18 Holes) — Sat, May 9',
  'NGC 3 Man Scramble (27 Holes) — Sat, June 13',
  'NGC 2 Ladies Scramble (18 Holes) — Sat, June 20',
  'NGC Senior 2 Man Scramble — Thur, June 25',
  'NGC Couples Scramble (18 Holes) — Sat, July 11',
  'UP Honor Flight Scramble — Sat, July 25',
  "MI Timberman's Scramble (18 Holes) — Fri, Aug 21",
  'NGC Big Cup Scramble (18 Holes) — Sat, Sept 5',
  'NGC Couples Scramble (18 Holes) — Sat, Sept 19',
]

export default function Outings() {
  return (
    <>
      <SeoBanner page="Group Outings" keywords="michigan golf outings, private golf outing upper peninsula" />

      {/* Hero */}
      <section className="relative" style={{ height: '55vh', minHeight: '380px' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-light">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(217,201,158,0.12) 0, rgba(217,201,158,0.12) 1px, transparent 0, transparent 60%)',
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-cream text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-5">
            Private Golf Outings on Big Bay de Noc.
          </h1>
          <p className="text-cream/75 font-sans max-w-2xl">
            Your group plays on the shore of Big Bay de Noc, then gathers in the clubhouse for food and drinks. Nahma makes the whole day easy.
          </p>
        </div>
      </section>

      {/* Why Nahma */}
      <section className="py-20 bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sand/70 font-sans text-sm tracking-widest uppercase text-center mb-3">Why Choose Nahma</p>
          <h2 className="font-serif text-cream text-3xl text-center mb-12">Everything Your Group Needs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {benefits.map((b) => (
              <div key={b.heading} className="text-cream/90">
                <div className="flex justify-center mb-4">{b.icon}</div>
                <h3 className="font-serif text-sand text-xl mb-3">{b.heading}</h3>
                <p className="text-cream/70 font-sans text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past outings social proof */}
      <section className="py-20 bg-sand/20 border-t border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-3xl text-center mb-3">Outings That Come Back Every Year</h2>
          <p className="text-center text-charcoal/60 font-sans text-sm mb-10">When a group books Nahma once, most of them come back. Here's a handful of outings that have called Nahma home for multiple seasons.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastOutings.map((outing) => (
              <div key={outing.name} className="bg-white border border-sand/30 rounded-sm p-6 shadow-sm">
                <div className="w-8 h-1 bg-sand mb-4 rounded-full" />
                <h3 className="font-serif text-forest text-lg mb-2">{outing.name}</h3>
                <p className="text-charcoal/65 font-sans text-sm leading-relaxed">{outing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-charcoal text-3xl mb-8">What's Included</h2>
          <div className="bg-white border border-sand/30 rounded-sm p-8 shadow-sm text-left">
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-charcoal/80 text-sm">
                  <svg className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Events calendar */}
      <section className="py-14 bg-sand/20 border-t border-sand/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-charcoal text-2xl mb-3">2026 Public Scrambles and Events</h2>
          <p className="text-charcoal/60 font-sans text-sm mb-6">These public events run all season. Want to bring your own group? We can set up a private outing on almost any open date.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {events2026.map((event) => (
              <div key={event} className="bg-white border border-sand/30 rounded-sm p-4 flex items-center gap-3 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-forest flex-shrink-0" />
                <span className="font-sans text-charcoal/80 text-sm">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / inquiry form */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-3">Ready to Book Your Outing?</h2>
            <p className="text-charcoal/65 font-sans">We respond within one business day. Tell us your date, headcount, and any questions and we'll take it from there.</p>
          </div>

          {/* Form placeholder */}
          <div className="bg-white border border-sand/30 rounded-sm shadow-sm p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-sans font-semibold text-charcoal/60 uppercase tracking-wider mb-2">Name</label>
                <div className="border border-sand/50 rounded px-4 py-3 bg-cream/40 h-11" />
              </div>
              <div>
                <label className="block text-xs font-sans font-semibold text-charcoal/60 uppercase tracking-wider mb-2">Group Size</label>
                <div className="border border-sand/50 rounded px-4 py-3 bg-cream/40 h-11" />
              </div>
              <div>
                <label className="block text-xs font-sans font-semibold text-charcoal/60 uppercase tracking-wider mb-2">Preferred Date</label>
                <div className="border border-sand/50 rounded px-4 py-3 bg-cream/40 h-11" />
              </div>
              <div>
                <label className="block text-xs font-sans font-semibold text-charcoal/60 uppercase tracking-wider mb-2">Phone</label>
                <div className="border border-sand/50 rounded px-4 py-3 bg-cream/40 h-11" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-sans font-semibold text-charcoal/60 uppercase tracking-wider mb-2">Message</label>
              <div className="border border-sand/50 rounded px-4 py-3 bg-cream/40 h-32" />
            </div>
            <button
              type="button"
              className="w-full bg-forest text-cream font-sans font-semibold py-3 rounded hover:bg-forest-light transition-colors"
            >
              Send Inquiry
            </button>
            <p className="text-charcoal/40 font-sans text-xs text-center mt-3">Form for layout reference only.</p>
          </div>

          <div className="mt-8 text-center text-charcoal/70 font-sans">
            <p className="font-semibold text-charcoal mb-3">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19066442648" className="text-forest font-semibold hover:text-forest-light">(906) 644-2648</a>
              <span className="hidden sm:inline text-charcoal/30">|</span>
              <a href="mailto:nahmagolfclub@gmail.com" className="text-forest font-semibold hover:text-forest-light">nahmagolfclub@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Individual play CTA */}
      <section className="bg-forest-dark py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-cream/60 font-sans text-sm mb-4">Planning individual play instead?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rates/" className="inline-block bg-sand text-forest font-sans font-semibold px-8 py-3 rounded hover:bg-sand-light transition-colors">
              See Green Fees and Cart Rates
            </Link>
            <Link to="/tee-times/" className="inline-block border-2 border-sand text-sand font-sans font-semibold px-8 py-3 rounded hover:bg-sand hover:text-forest transition-colors">
              Book a Tee Time
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
