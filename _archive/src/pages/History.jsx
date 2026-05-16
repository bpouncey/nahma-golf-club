/* SEO: Primary keywords: "historic golf courses michigan" | Builds topical authority */
import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'

export default function History() {
  return (
    <>
      <SeoBanner page="History" keywords="historic golf courses michigan, oldest golf courses upper peninsula" />

      {/* Hero */}
      <section className="bg-forest py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sand/70 font-sans text-sm tracking-widest uppercase mb-3">Est. 1922</p>
          <h1 className="font-serif text-cream text-4xl sm:text-5xl mb-4">A Century of Golf in the Upper Peninsula</h1>
          <p className="text-cream/70 font-sans text-lg max-w-xl mx-auto">Nahma Golf Club has been part of this community for over 100 years.</p>
        </div>
      </section>

      {/* Timeline / narrative */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-charcoal/80 font-sans leading-relaxed">
              <div>
                <h2 className="font-serif text-charcoal text-3xl mb-4">Founded in 1922</h2>
                <p>In 1922, a small group of residents in the Delta County area established a golf course on the shores of Big Bay de Noc. It was the second course in Delta County, carved out of the surrounding land at a time when golf was still finding its way into American small-town life.</p>
                <p className="mt-3">The course was designed with the practical sensibilities of the era: honest holes, manageable distances, and greens that rewarded precision over power. The location on the lake was chosen for its natural beauty and the flat shoreline terrain, which made construction feasible.</p>
              </div>
              <div>
                <h2 className="font-serif text-charcoal text-2xl mb-4">A Public Club From the Start</h2>
                <p>From the beginning, Nahma was a public course. There were no restricted memberships, no exclusivity. Locals came to play. Summer visitors from downstate found it and returned. The course became a fixture in the rhythms of Upper Peninsula summer life.</p>
                <p className="mt-3">Over the decades that followed, the course went through the normal challenges of any small community club: years of growth, quieter years, ownership changes, and the constant work of maintaining a course against the Michigan weather. Through all of it, the course stayed open.</p>
              </div>
              <div>
                <h2 className="font-serif text-charcoal text-2xl mb-4">A Hundred Years and Counting</h2>
                <p>In 2022, Nahma Golf Club marked its centennial season. One hundred years of rounds played on the same land, looking out at the same bay. The greens have been reworked over the decades, but their character, those round, dish-shaped putting surfaces, has been preserved.</p>
                <p className="mt-3">Today the course operates under the same spirit it always has: public access, honest prices, a genuine welcome for anyone who wants to play. The setting on Big Bay de Noc is as beautiful as ever.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-forest text-cream rounded-sm p-6">
                <div className="font-serif text-4xl text-sand mb-2">1922</div>
                <p className="font-sans text-cream/70 text-sm">Course established on the shore of Big Bay de Noc, Rapid River, Michigan.</p>
              </div>
              <div className="bg-sand/30 border border-sand/50 rounded-sm p-6">
                <div className="font-serif text-2xl text-forest mb-2">2nd Oldest</div>
                <p className="font-sans text-charcoal/70 text-sm">Second oldest golf course in Delta County, Michigan.</p>
              </div>
              <div className="bg-forest-light text-cream rounded-sm p-6">
                <div className="font-serif text-2xl text-sand mb-2">100+ Years</div>
                <p className="font-sans text-cream/70 text-sm">Continuous public operation through over a century of Michigan summers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The greens section */}
      <section className="py-16 bg-sand/20 border-t border-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">Course Design</p>
              <h2 className="font-serif text-charcoal text-3xl mb-5">The Greens of Nahma</h2>
              <div className="space-y-4 text-charcoal/80 font-sans leading-relaxed">
                <p>The most distinctive feature of Nahma Golf Club is its greens. Round and dish-shaped, they reflect the Old Tom Morris-era design philosophy that shaped early American golf architecture. These are not the flat, tiered greens you'll find on modern courses.</p>
                <p>The dish shape creates a natural ball-collecting feature: approach shots that find the center of the green tend to settle and stay. Mishits roll off the edges, setting up challenging chip shots. It's a forgiving design for beginners and a genuine test for better players.</p>
                <p>These greens have been maintained and refined over a century. They're part of what makes Nahma feel like a different kind of golf experience.</p>
              </div>
            </div>
            <div className="bg-forest text-cream rounded-sm p-8">
              <blockquote className="font-serif text-lg italic text-cream/90 mb-4">
                "The round greens at Nahma are unlike anything else in the UP. Once you've putted them, you understand why the club has endured."
              </blockquote>
              <p className="text-cream/50 font-sans text-xs">Course observer, Escanaba</p>
            </div>
          </div>
        </div>
      </section>

      {/* Setting in context */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-charcoal text-3xl mb-8">Big Bay de Noc, Then and Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-3 text-charcoal/75 font-sans leading-relaxed">
              <h3 className="font-serif text-xl text-charcoal">1922</h3>
              <p>When the course was founded, Big Bay de Noc was the lifeblood of the regional economy. Fishing, shipping, and the timber industry defined the shoreline. Golf was a leisure activity for a community that worked hard and played when it could.</p>
            </div>
            <div className="space-y-3 text-charcoal/75 font-sans leading-relaxed">
              <h3 className="font-serif text-xl text-charcoal">Today</h3>
              <p>The bay remains central to the character of the region, now more for recreation and natural beauty than industry. Nahma Golf Club sits on that same shoreline, offering a round of golf with one of the most underrated views in Michigan golf.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-16 bg-sand/20 border-t border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-2xl text-center mb-8">Historic Photos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              'Historic Photo, circa 1930s',
              'Historic Photo, Clubhouse',
              'Historic Photo, First Tee',
              'Historic Photo, circa 1960s',
              'Historic Photo, Greens Work',
              'Historic Photo, League Play',
            ].map((label) => (
              <div key={label} className="bg-gray-200 border border-gray-300 rounded-sm h-40 flex flex-col items-center justify-center gap-2">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400 font-sans text-xs text-center px-2">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal/40 font-sans text-xs mt-4 italic">Photo placeholders. Historical images to be sourced from club archives.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-cream text-2xl mb-3">Over a century of golf. Come add your round to the history.</h2>
          <Link to="/tee-times/" className="inline-block bg-sand text-forest font-sans font-semibold px-8 py-3 rounded hover:bg-sand-light transition-colors">
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  )
}
