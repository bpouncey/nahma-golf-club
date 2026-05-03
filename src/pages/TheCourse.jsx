/* SEO: Primary keywords: "upper peninsula golf courses," "9 hole golf course upper peninsula" | Intent: Informational, commercial investigation */
import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'
import ImagePlaceholder from '../components/ImagePlaceholder'

const quickFacts = [
  'Walk or ride',
  'No tee times required',
  'No dress code',
  'Open May - September',
  'No club rentals (bring your own)',
  'No driving range',
]

export default function TheCourse() {
  return (
    <>
      <SeoBanner page="The Course" keywords="upper peninsula golf courses, 9 hole golf course upper peninsula" />

      {/* Page Hero */}
      <section className="relative" style={{ height: '50vh', minHeight: '340px' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-light">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(217,201,158,0.12) 0, rgba(217,201,158,0.12) 1px, transparent 0, transparent 60%)',
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-sand/70 text-sm tracking-[0.25em] uppercase font-sans mb-3">Rapid River, Michigan</p>
          <h1 className="font-serif text-cream text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mb-4">
            A 9-Hole Public Course on Lake Michigan.
          </h1>
          <p className="text-cream/70 font-sans">Big Bay de Noc Shoreline &middot; Established 1922</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-forest-dark py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center divide-x divide-forest-light">
            {['9 Holes', 'Par 36', '2,875 Yards', 'Est. 1922', 'Public Access'].map((stat) => (
              <span key={stat} className="px-6 py-1 text-sand/80 font-sans text-sm tracking-wide">{stat}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Setting Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">The Setting</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl leading-tight mb-6">
              Shoreline Golf in Michigan's Upper Peninsula
            </h2>
            <div className="space-y-4 text-charcoal/80 font-sans leading-relaxed">
              <p>Big Bay de Noc is the northern arm of Green Bay, a body of water known for its clarity, its fishing, and its dramatic light on summer evenings. Nahma Golf Club sits right on that shoreline.</p>
              <p>Several holes play along the bluff above the water, giving you open sky and bay views that frame every shot. On calm mornings, the surface of the bay reflects the clouds. On windy days, it tests your club selection.</p>
              <p>The surrounding landscape is quintessential Upper Michigan: mature hardwoods, open sky, and a quiet that's increasingly rare. You won't hear highway noise. You'll hear birds and the occasional loon out on the water.</p>
            </div>
          </div>
          <ImagePlaceholder label="Course and Bay View" height="h-96" />
        </div>
      </section>

      {/* Course Character */}
      <section className="py-20 bg-sand/20 border-t border-b border-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">Course Character</p>
          <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-8">
            Greens That Tell a Story
          </h2>
          <div className="space-y-5 text-charcoal/80 font-sans leading-relaxed text-left max-w-2xl mx-auto">
            <p>Nahma's greens are round and dish-shaped, a distinctive design style from the Old Tom Morris era of golf course architecture. They're not what you'll find at a modern municipal course, and that's exactly the point.</p>
            <p>The elevated putting surfaces reward accurate approach play and punish short-sided misses. Beginners find them fair. Better players find them a genuine test.</p>
            <p>Pace of play is comfortable here. Nine holes typically runs about two hours walking. No one is rushing you. This is golf the way it was meant to be played, at a pace that lets you take in the setting.</p>
            <p>The course is walkable for most players. A cart rental is available for those who want one.</p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-2xl text-center mb-8">Quick Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {quickFacts.map((fact) => (
              <div key={fact} className="flex items-start gap-3 bg-white border border-sand/30 rounded-sm p-4 shadow-sm">
                <svg className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-sm text-charcoal/80">{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-page nav cards */}
      <section className="py-16 bg-sand/20 border-t border-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-2xl text-center mb-8">Learn More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link to="/the-course/hole-by-hole/" className="group bg-white border border-sand/30 rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="font-serif text-4xl text-forest mb-3">1-9</div>
              <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-forest transition-colors">Hole-by-Hole Guide</h3>
              <p className="text-charcoal/60 font-sans text-sm">Descriptions, yardages, and playing tips for all 9 holes.</p>
            </Link>
            <Link to="/the-course/scorecard/" className="group bg-white border border-sand/30 rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="font-serif text-4xl text-forest mb-3">
                <svg className="w-10 h-10 mx-auto text-forest/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-forest transition-colors">Official Scorecard</h3>
              <p className="text-charcoal/60 font-sans text-sm">Printable scorecard with yardages, par, and handicap index.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Rates CTA */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-cream/70 font-sans text-sm mb-2">Ready to play?</p>
          <h2 className="font-serif text-cream text-3xl mb-6">Green fees start at $18.</h2>
          <Link to="/rates/" className="inline-block bg-sand text-forest font-sans font-semibold px-8 py-3 rounded hover:bg-sand-light transition-colors">
            See Rates
          </Link>
        </div>
      </section>
    </>
  )
}
