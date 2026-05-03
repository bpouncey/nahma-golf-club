/* SEO: Primary keywords: "affordable golf upper peninsula michigan" | Intent: Transactional | Pricing must be above the fold on mobile */
import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'

const memberships = {
  under60: [
    { type: 'Single', price: '$375' },
    { type: 'Couple', price: '$540' },
    { type: 'Family', price: '$625' },
    { type: 'College Student', price: '$150' },
    { type: 'High School Student', price: '$100' },
  ],
  senior: [
    { type: 'Single (60+)', price: '$325' },
    { type: 'Couple (60+)', price: '$490' },
    { type: 'Family (60+)', price: '$575' },
  ],
}

const leagues = [
  { name: "Men's League", day: 'Tuesdays', time: '6 PM', link: '/leagues/' },
  { name: 'All Scramble', day: 'Wednesdays', time: '6 PM', link: '/leagues/' },
  { name: "Women's League", day: 'Thursdays', time: '6 PM', link: '/leagues/' },
]

export default function Rates() {
  return (
    <>
      <SeoBanner page="Rates and Fees" keywords="affordable golf upper peninsula michigan, green fees upper peninsula" />

      {/* Page Hero */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-cream text-4xl sm:text-5xl mb-4">Nahma Golf Club Rates and Fees</h1>
          <p className="text-cream/70 font-sans text-lg">Public access. Walk-ins welcome. Green fees starting at $18.</p>
        </div>
      </section>

      {/* Green Fees */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-3xl text-center mb-8">Green Fees</h2>
          <div className="overflow-x-auto">
            <table className="w-full font-sans text-sm border border-sand/40 rounded-sm overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-forest text-cream">
                  <th className="py-3 px-6 text-left font-semibold">Round</th>
                  <th className="py-3 px-6 text-center font-semibold">Regular</th>
                  <th className="py-3 px-6 text-center font-semibold">UPGA Members</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { round: '9 Holes', regular: '$18', member: '$13' },
                  { round: '18 Holes', regular: '$28', member: '$23' },
                ].map((row, i) => (
                  <tr key={row.round} className={i % 2 === 0 ? 'bg-white' : 'bg-sand/10'}>
                    <td className="py-4 px-6 font-medium text-charcoal">{row.round}</td>
                    <td className="py-4 px-6 text-center font-serif text-xl text-forest font-semibold">{row.regular}</td>
                    <td className="py-4 px-6 text-center font-serif text-xl text-forest font-semibold">{row.member}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cart Rentals */}
      <section className="py-16 bg-sand/20 border-t border-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-3xl text-center mb-8">Cart Rentals</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full font-sans text-sm border border-sand/40 rounded-sm overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-forest text-cream">
                  <th className="py-3 px-6 text-left font-semibold">Round</th>
                  <th className="py-3 px-6 text-center font-semibold">Regular</th>
                  <th className="py-3 px-6 text-center font-semibold">Members</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { round: '9 Holes', regular: '$14', member: '$12' },
                  { round: '18 Holes', regular: '$24', member: '$20' },
                ].map((row, i) => (
                  <tr key={row.round} className={i % 2 === 0 ? 'bg-white' : 'bg-sand/10'}>
                    <td className="py-4 px-6 font-medium text-charcoal">{row.round}</td>
                    <td className="py-4 px-6 text-center font-serif text-xl text-forest font-semibold">{row.regular}</td>
                    <td className="py-4 px-6 text-center font-serif text-xl text-forest font-semibold">{row.member}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans">
            <div className="bg-white border border-sand/30 rounded-sm p-4">
              <p className="font-semibold text-charcoal mb-1">Annual Trail Fee</p>
              <p className="text-forest font-serif text-lg font-semibold">$50</p>
              <p className="text-charcoal/50 text-xs mt-1">Bring your own cart</p>
            </div>
            <div className="bg-white border border-sand/30 rounded-sm p-4">
              <p className="font-semibold text-charcoal mb-1">Cart Shed Storage</p>
              <p className="text-forest font-serif text-lg font-semibold">$150</p>
              <p className="text-charcoal/50 text-xs mt-1">12-month storage</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-sm p-4">
              <p className="font-semibold text-amber-800 mb-1">Note</p>
              <p className="text-amber-700 text-xs">No carry-ons allowed on the course.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-3xl text-center mb-3">Seasonal Memberships</h2>
          <p className="text-center text-charcoal/60 font-sans text-sm mb-10">Season runs May through September. Memberships include UPGA green fee rates all season.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Under 60 */}
            <div className="bg-white border border-sand/30 rounded-sm shadow-sm overflow-hidden">
              <div className="bg-forest px-6 py-4">
                <h3 className="font-serif text-cream text-xl">Under 60</h3>
              </div>
              <div className="divide-y divide-sand/20">
                {memberships.under60.map((m) => (
                  <div key={m.type} className="flex justify-between items-center px-6 py-3">
                    <span className="font-sans text-charcoal/80">{m.type}</span>
                    <span className="font-serif text-forest text-xl font-semibold">{m.price}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Senior 60+ */}
            <div className="bg-white border border-sand/30 rounded-sm shadow-sm overflow-hidden">
              <div className="bg-forest-light px-6 py-4">
                <h3 className="font-serif text-cream text-xl">Senior (60+)</h3>
              </div>
              <div className="divide-y divide-sand/20">
                {memberships.senior.map((m) => (
                  <div key={m.type} className="flex justify-between items-center px-6 py-3">
                    <span className="font-sans text-charcoal/80">{m.type}</span>
                    <span className="font-serif text-forest text-xl font-semibold">{m.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leagues */}
      <section className="py-16 bg-sand/20 border-t border-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-3xl text-center mb-8">Weekly Leagues</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {leagues.map((l) => (
              <div key={l.name} className="bg-white border border-sand/30 rounded-sm p-6 text-center shadow-sm">
                <h3 className="font-serif text-forest text-lg mb-2">{l.name}</h3>
                <p className="text-charcoal font-sans font-medium">{l.day}</p>
                <p className="text-charcoal/60 font-sans text-sm">{l.time}</p>
                <Link to={l.link} className="mt-4 inline-block text-xs font-sans text-forest underline hover:text-forest-light">
                  League Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership value CTA */}
      <section className="bg-forest py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-cream text-2xl mb-3">Play enough to make a membership worth it?</h2>
          <p className="text-cream/70 font-sans text-sm mb-6">A single membership pays for itself in 21 rounds. If you're playing all season, the math is easy.</p>
          <Link to="/memberships/" className="inline-block bg-sand text-forest font-sans font-semibold px-8 py-3 rounded hover:bg-sand-light transition-colors">
            Learn About Memberships
          </Link>
        </div>
      </section>

      {/* Payment info */}
      <section className="bg-cream border-t border-sand/40 py-8 text-center">
        <p className="text-charcoal/60 font-sans text-sm">
          <svg className="w-4 h-4 inline-block mr-2 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          We accept credit cards, debit cards, and NFC mobile payments.
        </p>
      </section>
    </>
  )
}
