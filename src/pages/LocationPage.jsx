import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'

export default function LocationPage({ city, distance, description, directions }) {
  return (
    <>
      <SeoBanner
        page={`Golf Near ${city}, Michigan`}
        keywords={`golf near ${city} michigan, ${city.toLowerCase()} golf courses, upper peninsula golf`}
      />

      {/* Hero */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sand/70 font-sans text-sm tracking-widest uppercase mb-3">Upper Peninsula Golf</p>
          <h1 className="font-serif text-cream text-4xl sm:text-5xl mb-4">Golf Near {city}, Michigan</h1>
          <p className="text-cream/70 font-sans text-lg">{distance} from downtown {city}.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-2xl mb-5">A Short Drive to Big Bay de Noc</h2>
          <div className="space-y-4 text-charcoal/80 font-sans leading-relaxed">
            <p>{description}</p>
            <p>The course is a public 9-hole layout on the shore of Lake Michigan's Big Bay de Noc. Par 36, 2,875 yards. Established in 1922. Green fees start at $18. Walk-ins are welcome, no reservation required.</p>
            <p>It's the kind of course that doesn't get talked about as much as it should. Once you find it, you'll keep coming back.</p>
          </div>
        </div>
      </section>

      {/* Directions callout */}
      <section className="py-12 bg-sand/20 border-t border-sand/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-sand/30 rounded-sm p-6 shadow-sm flex gap-5">
            <svg className="w-6 h-6 text-forest flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <div>
              <p className="font-sans font-semibold text-charcoal mb-1">Getting Here from {city}</p>
              <p className="text-charcoal/70 font-sans text-sm leading-relaxed">{directions}</p>
              <p className="text-charcoal/60 font-sans text-sm mt-2">8588 Ll Rd, Rapid River, MI 49878</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course highlights */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-2xl text-center mb-8">Why Nahma</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                heading: 'The Lake Setting',
                text: 'Several holes play along the bluff above Big Bay de Noc. The views from the fairways are unlike anything else in the UP.',
              },
              {
                heading: 'Est. 1922',
                text: 'Over a century of public golf on the same land. The historic round greens give Nahma a character that modern courses lack.',
              },
              {
                heading: '$18 Green Fees',
                text: '9 holes for $18. 18 holes for $28. No hidden fees, no required membership. Just honest golf at an honest price.',
              },
            ].map((card) => (
              <div key={card.heading} className="bg-white border border-sand/30 rounded-sm p-6 shadow-sm text-center">
                <div className="w-8 h-1 bg-forest rounded-full mx-auto mb-4" />
                <h3 className="font-serif text-forest text-lg mb-3">{card.heading}</h3>
                <p className="text-charcoal/70 font-sans text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours and season */}
      <section className="py-14 bg-sand/20 border-t border-sand/40">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-charcoal text-2xl mb-6">Hours and Season</h2>
          <div className="bg-white border border-sand/30 rounded-sm shadow-sm divide-y divide-sand/20 overflow-hidden max-w-sm mx-auto text-left">
            {[
              ['Mon - Fri', '10:00 AM - 9:00 PM'],
              ['Saturday', '9:00 AM - 9:00 PM'],
              ['Sunday', '11:00 AM - 9:00 PM'],
            ].map(([day, hours]) => (
              <div key={day} className="flex justify-between px-5 py-3">
                <span className="font-sans text-charcoal/80 text-sm">{day}</span>
                <span className="font-sans text-charcoal/60 text-sm">{hours}</span>
              </div>
            ))}
          </div>
          <p className="text-charcoal/50 font-sans text-xs mt-4 italic">Open May through September only.</p>
        </div>
      </section>

      {/* NAP block */}
      <section className="py-12 bg-cream">
        <div className="max-w-xl mx-auto px-4 text-center">
          <address className="not-italic font-sans text-charcoal/70 leading-8 text-sm">
            <strong className="text-charcoal font-semibold text-base">Nahma Golf Club</strong><br />
            8588 Ll Rd, Rapid River, MI 49878<br />
            <a href="tel:+19066442648" className="hover:text-forest">(906) 644-2648</a>
            &nbsp;&middot;&nbsp;
            <a href="mailto:nahmagolfclub@gmail.com" className="hover:text-forest">nahmagolfclub@gmail.com</a>
          </address>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-0">
        <div className="bg-gray-200 border-t border-b border-gray-300 h-48 flex flex-col items-center justify-center gap-2">
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span className="text-gray-400 font-sans text-xs">Google Map Placeholder</span>
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-forest py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-cream text-2xl mb-6">Ready to Play?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-sand text-sand font-sans font-semibold px-8 py-3 rounded hover:bg-sand hover:text-forest transition-colors"
            >
              Get Directions
            </a>
            <Link to="/rates/" className="bg-sand text-forest font-sans font-semibold px-8 py-3 rounded hover:bg-sand-light transition-colors">
              See Rates
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
