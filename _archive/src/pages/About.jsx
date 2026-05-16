import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'

export default function About() {
  return (
    <>
      <SeoBanner page="About" keywords="nahma golf club about, public golf upper peninsula michigan" />

      <section className="bg-forest py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-cream text-4xl sm:text-5xl mb-4">About Nahma Golf Club</h1>
          <p className="text-cream/70 font-sans text-lg">Public golf on the shore of Big Bay de Noc since 1922.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">Our Purpose</p>
            <h2 className="font-serif text-charcoal text-3xl mb-5">Community Golf, Public Access</h2>
            <div className="space-y-4 text-charcoal/80 font-sans leading-relaxed">
              <p>Nahma Golf Club exists to provide affordable, accessible golf to the people of the Upper Peninsula. There are no barriers to entry here. No dress code. No tee time requirement. No membership required to play.</p>
              <p>We believe golf should be available to anyone who wants to play it. That belief is baked into how we price our green fees, how we run our leagues, and how we welcome every person who walks through the door.</p>
              <p>For over a century, this course has been part of the fabric of Delta County. Our goal is simple: keep it going for the next hundred years.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-sand/30 rounded-sm p-6 shadow-sm">
              <h3 className="font-serif text-forest text-lg mb-2">What We Are</h3>
              <p className="text-charcoal/70 font-sans text-sm leading-relaxed">A family-run public golf course on the shoreline of Big Bay de Noc. Open to the public, May through September.</p>
            </div>
            <div className="bg-white border border-sand/30 rounded-sm p-6 shadow-sm">
              <h3 className="font-serif text-forest text-lg mb-2">What We're Not</h3>
              <p className="text-charcoal/70 font-sans text-sm leading-relaxed">Not a private club. Not a resort course. Not a place where you'll feel out of place for showing up in jeans.</p>
            </div>
            <div className="bg-white border border-sand/30 rounded-sm p-6 shadow-sm">
              <h3 className="font-serif text-forest text-lg mb-2">What This Means for You</h3>
              <p className="text-charcoal/70 font-sans text-sm leading-relaxed">Show up and play. $18 gets you on the course. No other barriers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats snapshot */}
      <section className="py-14 bg-sand/20 border-t border-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-2xl text-center mb-8">Course at a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {[
              { stat: '1922', label: 'Established' },
              { stat: '9', label: 'Holes' },
              { stat: '36', label: 'Par' },
              { stat: '2,875', label: 'Yards' },
              { stat: '$18', label: 'Green Fee' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-sand/30 rounded-sm p-4 shadow-sm">
                <div className="font-serif text-2xl text-forest font-semibold">{item.stat}</div>
                <div className="text-xs text-charcoal/50 font-sans uppercase tracking-wider mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / links */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-charcoal text-2xl mb-6">Get in Touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Link to="/contact/" className="bg-forest text-cream font-sans font-semibold px-6 py-3 rounded hover:bg-forest-light transition-colors text-sm">
              Contact Us
            </Link>
            <Link to="/rates/" className="bg-white border border-forest text-forest font-sans font-semibold px-6 py-3 rounded hover:bg-forest/5 transition-colors text-sm">
              View Rates
            </Link>
            <Link to="/history/" className="bg-white border border-forest text-forest font-sans font-semibold px-6 py-3 rounded hover:bg-forest/5 transition-colors text-sm">
              Club History
            </Link>
          </div>
          <address className="not-italic text-charcoal/60 font-sans text-sm leading-8">
            8588 Ll Rd, Rapid River, MI 49878<br />
            <a href="tel:+19066442648" className="hover:text-forest">(906) 644-2648</a>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            <a href="mailto:nahmagolfclub@gmail.com" className="hover:text-forest">nahmagolfclub@gmail.com</a>
          </address>
        </div>
      </section>
    </>
  )
}
