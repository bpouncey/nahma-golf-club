/* SEO: Primary keywords: "upper peninsula golf courses," "golf courses near escanaba mi" | Intent: Commercial investigation | Audience: Regional discovery golfer */
import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'
import ImagePlaceholder from '../components/ImagePlaceholder'

const reviews = [
  { text: "Played here with my dad when I was a kid. Still playing it 30 years later. The lake view on hole 2 never gets old.", attr: "— Google Review" },
  { text: "Best value for 18 holes in the UP. $28 and you're looking at the bay the whole time. Nothing in Escanaba or Gladstone comes close for the price.", attr: "— Google Review" },
  { text: "Joined the Wednesday scramble this summer and now I can't stop. Friendly group, cold beer after, great course. This is what summer in the UP is about.", attr: "— Google Review" },
]

export default function Home() {
  return (
    <>
      <SeoBanner page="Home" keywords="upper peninsula golf courses, golf courses near escanaba mi" />

      {/* Hero */}
      <section className="relative" style={{ height: '90vh', minHeight: '520px' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-light">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(217,201,158,0.12) 0, rgba(217,201,158,0.12) 1px, transparent 0, transparent 60%)',
            backgroundSize: '20px 20px'
          }} />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-forest-dark/60 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <p className="text-sand/70 text-sm tracking-[0.25em] uppercase font-sans mb-4">Rapid River, Michigan</p>
          <h1 className="font-serif text-cream text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight max-w-4xl mb-6 text-balance">
            Golf on the Shore of Big Bay de Noc.
          </h1>
          <p className="text-cream/75 text-lg sm:text-xl font-sans max-w-xl mb-10">
            A public course since 1922. Rapid River, Michigan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link to="/rates/" className="border-2 border-sand text-sand font-sans font-semibold px-8 py-3 rounded hover:bg-sand hover:text-forest transition-colors">
              Green Fees Starting at $18
            </Link>
            <Link to="/tee-times/" className="bg-sand text-forest font-sans font-semibold px-8 py-3 rounded hover:bg-sand-light transition-colors">
              Book a Tee Time
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-cream/60 text-sm font-sans">
            {['9 Holes', 'Par 36', '$18 Green Fees', 'Walk-ins Welcome'].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-sand/40" />}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Three-column intro strip */}
      <section className="bg-forest py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: '1922',
              heading: 'Established 1922',
              text: 'One of the oldest public courses in Michigan\'s Upper Peninsula. Escanaba-area golfers have been teeing off here since before your grandparents were born. Some things are worth keeping.'
            },
            {
              icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
              heading: 'On Big Bay de Noc',
              text: 'The bay runs along the west edge of the course. You can see Big Bay de Noc from almost every tee box, and on calm summer mornings the water is perfectly still.'
            },
            {
              icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
              heading: 'Public Course, No Tee Times Required',
              text: 'Done by noon on a Saturday and want to sneak in a quick nine? Just show up. No reservation, no tee sheet, no hassle. Pay your green fee and you\'re off.'
            }
          ].map((col, i) => (
            <div key={i} className="text-cream/90">
              <div className="text-sand font-serif text-3xl mb-4">
                {typeof col.icon === 'string' ? col.icon : col.icon}
              </div>
              <p className="font-serif text-xl text-sand mb-3">{col.heading}</p>
              <p className="text-sm leading-relaxed text-cream/70">{col.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Course feature section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ImagePlaceholder label="Fairway with Bay View" height="h-96" />
          <div>
            <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">The Course</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl leading-tight mb-6">
              Play One of Michigan's Oldest Public Courses
            </h2>
            <div className="space-y-4 text-charcoal/80 font-sans leading-relaxed">
              <p>Nahma Golf Club has been welcoming golfers to the shores of Big Bay de Noc since 1922. About 20 minutes from Escanaba, 25 from Gladstone, and worth every minute of the drive. The layout winds through mature trees and along open fairways with bay views that will stop you mid-swing.</p>
              <p>The 9-hole, par-36 course plays to a walkable 2,875 yards. The round, dish-shaped greens have a character all their own, a nod to the Old Tom Morris-era designs that influenced early American golf.</p>
              <p>Whether you're a seasoned player or picking up a club for the first time, Nahma is built for enjoyable golf, not stress.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 my-8 text-center">
              {[['9', 'Holes'], ['36', 'Par'], ['2,875', 'Yards']].map(([num, label]) => (
                <div key={label} className="bg-cream border border-sand/40 rounded p-3">
                  <div className="font-serif text-2xl text-forest font-semibold">{num}</div>
                  <div className="text-xs text-charcoal/60 font-sans uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
            <Link to="/the-course/" className="inline-flex items-center gap-2 text-forest font-sans font-semibold hover:gap-3 transition-all">
              Explore the Course
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Rates callout band */}
      <section className="bg-forest py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sand/70 text-sm tracking-widest uppercase font-sans mb-2">Simple, Honest Pricing</p>
          <h2 className="font-serif text-cream text-4xl mb-10">Green Fees Starting at $18.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            {[
              { label: '9 Holes', price: '$18', note: 'Regular' },
              { label: '18 Holes', price: '$28', note: 'Regular' },
              { label: 'UPGA Members', price: 'from $13', note: '9 holes' },
            ].map((card) => (
              <div key={card.label} className="bg-forest-light border border-forest-dark rounded-sm p-6 text-center">
                <div className="font-serif text-sand text-3xl font-semibold mb-2">{card.price}</div>
                <div className="text-cream font-sans text-base">{card.label}</div>
                <div className="text-cream/50 font-sans text-xs mt-1">{card.note}</div>
              </div>
            ))}
          </div>
          <Link to="/rates/" className="inline-block border-2 border-sand text-sand font-sans font-semibold px-6 py-2 rounded hover:bg-sand hover:text-forest transition-colors text-sm">
            See All Rates and Fees
          </Link>
        </div>
      </section>

      {/* Experience section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">More Than a Round of Golf</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl">The Full Nahma Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: 'Clubhouse Interior',
                heading: 'The Clubhouse',
                text: 'Snacks, sandwiches, pizza, and a full bar with spirits. The clubhouse is where post-round stories get told.',
                link: '/clubhouse/',
                linkText: 'Visit the Clubhouse',
              },
              {
                label: 'League Night Action',
                heading: 'Weekly Leagues',
                text: 'Three nights a week, all season. The Men\'s League runs Tuesdays, Women\'s on Thursdays, and Wednesday\'s All Scramble is open to everyone. This is where Escanaba-area golfers build their summer.',
                link: '/leagues/',
                linkText: 'Join a League',
              },
              {
                label: 'Group Outing on the Course',
                heading: 'Private Outings',
                text: 'Annual scrambles, corporate events, family tournaments. The course and clubhouse are ready for your group.',
                link: '/outings/',
                linkText: 'Plan an Outing',
              },
            ].map((card) => (
              <div key={card.heading} className="bg-white rounded-sm shadow-sm overflow-hidden border border-sand/20">
                <ImagePlaceholder label={card.label} height="h-48" />
                <div className="p-6">
                  <h3 className="font-serif text-xl text-forest mb-2">{card.heading}</h3>
                  <p className="text-charcoal/75 text-sm leading-relaxed mb-4 font-sans">{card.text}</p>
                  <Link to={card.link} className="text-forest font-sans text-sm font-semibold hover:text-forest-light inline-flex items-center gap-1">
                    {card.linkText}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-sand/30 border-t border-b border-sand/40 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-charcoal text-3xl mb-4">What Golfers Say About Nahma</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-sand-dark fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-sans text-sm font-medium text-charcoal/60">4.8 stars on Google</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-sm p-6 border border-sand/30 shadow-sm">
                <p className="font-sans text-charcoal/80 text-sm leading-relaxed italic mb-4">"{r.text}"</p>
                <p className="text-charcoal/50 text-xs font-sans">{r.attr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-16 bg-cream border-t border-sand/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">From the Blog</p>
          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Golf Stories from the Upper Peninsula</h2>
          <p className="text-charcoal/65 font-sans leading-relaxed mb-6 max-w-xl mx-auto">Course conditions, event recaps, and notes from the fairways of Big Bay de Noc.</p>
          <Link to="/blog/" className="inline-flex items-center gap-2 text-forest font-sans font-semibold hover:gap-3 transition-all">
            Read the Blog
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 h-72 rounded-sm flex items-center justify-center border border-gray-300">
            <span className="text-gray-400 font-sans text-sm tracking-wider uppercase">Google Map Placeholder</span>
          </div>
          <div>
            <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">Find Us</p>
            <h2 className="font-serif text-charcoal text-3xl mb-6">Find Nahma Golf Club</h2>
            <address className="not-italic font-sans text-charcoal/75 leading-8 mb-6">
              8588 Ll Rd, Rapid River, MI 49878<br />
              (906) 644-2648<br />
              Open May through September<br />
              Mon-Fri: 10 AM - 9 PM &nbsp;|&nbsp; Sat: 9 AM - 9 PM &nbsp;|&nbsp; Sun: 11 AM - 9 PM
            </address>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-forest text-cream font-sans font-semibold px-6 py-3 rounded hover:bg-forest-light transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
