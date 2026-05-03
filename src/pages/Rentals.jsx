import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'

const faqs = [
  {
    q: 'Can I bring my own cart?',
    a: 'Yes. An annual trail fee of $50 applies if you bring your own gas or electric cart. Cart shed storage is available for $150 for 12 months. No carry-ons are allowed on the course.',
  },
  {
    q: 'Are club rentals available?',
    a: 'No. Nahma Golf Club does not offer club rentals. Please bring your own clubs. If you\'re planning a visit from out of town, plan accordingly.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept credit cards, debit cards, and NFC mobile payments (Apple Pay, Google Pay, etc.). Cash is also accepted.',
  },
  {
    q: 'Can I reserve a cart in advance?',
    a: 'Carts are available on a first-come basis. For large groups or outings, call ahead to make sure enough carts are available.',
  },
]

export default function Rentals() {
  return (
    <>
      <SeoBanner page="Cart and Club Rentals" keywords="golf cart rental upper peninsula michigan, nahma golf club rentals" />

      {/* Hero */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-cream text-4xl sm:text-5xl mb-4">Golf Cart Rentals at Nahma Golf Club</h1>
          <p className="text-cream/70 font-sans text-lg">Rental carts available. Club rentals are not offered.</p>
        </div>
      </section>

      {/* Club rental notice */}
      <section className="py-10 bg-amber-50 border-b border-amber-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-start gap-3 bg-amber-100 border border-amber-300 rounded-sm px-6 py-4 text-left max-w-xl">
            <svg className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="font-sans font-semibold text-amber-800">Club rentals are not available.</p>
              <p className="text-amber-700 font-sans text-sm mt-1">Please bring your own clubs. There is no driving range at Nahma Golf Club.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cart rental rates */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-3xl text-center mb-8">Cart Rental Rates</h2>
          <div className="overflow-x-auto">
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
        </div>
      </section>

      {/* Additional fees */}
      <section className="py-14 bg-sand/20 border-t border-sand/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-2xl text-center mb-8">Additional Fees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Annual Trail Fee', price: '$50', note: 'Bring your own cart' },
              { label: 'Cart Shed Storage', price: '$150', note: '12-month storage' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-sand/30 rounded-sm p-6 shadow-sm text-center">
                <p className="font-sans font-medium text-charcoal mb-2">{item.label}</p>
                <p className="font-serif text-forest text-3xl font-semibold">{item.price}</p>
                <p className="text-charcoal/50 font-sans text-xs mt-2">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-white border border-sand/30 rounded-sm p-4 text-center shadow-sm">
            <p className="text-charcoal/60 font-sans text-sm">No carry-ons allowed on the course.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-2xl text-center mb-8">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-sand/30 rounded-sm p-6 shadow-sm">
                <h3 className="font-sans font-semibold text-forest mb-2">{faq.q}</h3>
                <p className="text-charcoal/75 font-sans text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates CTA */}
      <section className="bg-forest py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-cream text-2xl mb-4">View All Rates and Fees</h2>
          <Link to="/rates/" className="inline-block bg-sand text-forest font-sans font-semibold px-8 py-3 rounded hover:bg-sand-light transition-colors">
            See Full Pricing
          </Link>
        </div>
      </section>
    </>
  )
}
