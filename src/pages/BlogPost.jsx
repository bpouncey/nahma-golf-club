/* Blog post template - CMS item view */
import { Link, useParams } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'

const UP_COURSES = [
  {
    name: 'Nahma Golf Club',
    location: 'Rapid River, MI',
    highlight: true,
    description: 'Established in 1922 on the shore of Big Bay de Noc, Nahma is one of the oldest public courses in the UP. The round, dish-shaped greens are a throwback to Old Tom Morris-era design. Green fees start at $18. Walk-ins welcome. It\'s the kind of course that makes you wonder why it isn\'t better known.',
  },
  {
    name: 'Sweetgrass Golf Club',
    location: 'Harris, MI',
    description: 'Part of the Island Resort and Casino complex, Sweetgrass is a full 18-hole resort course with a more polished feel. Worth playing if you\'re in the western UP.',
  },
  {
    name: 'Greywalls',
    location: 'Marquette, MI',
    description: 'One of the most visually dramatic courses in the Midwest. Carved through rocky outcroppings above Lake Superior. Challenging and spectacular in equal measure.',
  },
  {
    name: 'Marquette Golf Club',
    location: 'Marquette, MI',
    description: 'A historic 36-hole operation in the heart of Marquette. The Heritage course dates to 1929. Excellent conditions and a classic Midwest layout.',
  },
  {
    name: 'Terrace Bluff Golf Course',
    location: 'Gladstone, MI',
    description: 'A local favorite in the Escanaba area with solid course conditions and a friendly, low-key atmosphere. Good value for the area.',
  },
  {
    name: 'Thunder Bay Golf Resort',
    location: 'Hillman, MI',
    description: 'More of a destination resort, but worth mentioning for UP trip planners heading through the central peninsula.',
  },
]

const relatedPosts = [
  { title: 'Golf Courses Near Escanaba, MI', slug: 'golf-courses-near-escanaba-mi' },
  { title: 'What to Know Before Golfing in the UP', slug: 'what-to-know-before-golfing-in-the-up' },
  { title: 'Golf Trip Itinerary: Upper Peninsula, Michigan', slug: 'golf-trip-itinerary-upper-peninsula' },
]

export default function BlogPost() {
  const { slug } = useParams()
  const isFeatured = slug === 'best-golf-courses-michigan-upper-peninsula'

  const title = isFeatured
    ? "Best Golf Courses in Michigan's Upper Peninsula"
    : slug
        ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        : 'Blog Post'

  return (
    <>
      <SeoBanner page={`Blog: ${title}`} keywords="best golf courses upper peninsula michigan, UP golf courses" />

      {/* Article hero */}
      <div className="bg-gradient-to-br from-forest-dark via-forest to-forest-light" style={{ height: '40vh', minHeight: '260px' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-sand/20 text-sand font-sans text-xs font-semibold px-3 py-1 rounded">Course Guides</span>
            <span className="text-cream/50 font-sans text-xs">March 2026</span>
            <span className="text-cream/50 font-sans text-xs">&middot; 7 min read</span>
          </div>
          <h1 className="font-serif text-cream text-3xl sm:text-4xl lg:text-5xl leading-tight">{title}</h1>
        </div>
      </div>

      {/* Content + Sidebar */}
      <section className="py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <article className="lg:col-span-2">
              {isFeatured ? (
                <div className="prose-custom space-y-8 font-sans text-charcoal/80 leading-relaxed">
                  <p className="text-lg leading-relaxed text-charcoal">
                    Michigan's Upper Peninsula doesn't get enough credit as a golf destination. The combination of affordable fees, light crowds, and genuinely dramatic natural settings makes it one of the best regions for public golf in the Midwest. Here are the courses worth planning around.
                  </p>

                  <div className="bg-sand/30 border-l-4 border-forest p-5 rounded-r-sm">
                    <p className="font-sans text-charcoal/80 text-sm italic leading-relaxed">
                      "Golf in the UP is what golf used to be. Honest layouts, no pretension, views that make you stop and look. These are courses that deserve to be played."
                    </p>
                  </div>

                  <h2 className="font-serif text-charcoal text-2xl mt-8">The Courses</h2>

                  {UP_COURSES.map((course) => (
                    <div key={course.name} className={`${course.highlight ? 'bg-forest/5 border border-forest/20 rounded-sm p-5' : ''}`}>
                      <h3 className="font-serif text-xl text-forest mb-1">
                        {course.name}
                        {course.highlight && <span className="ml-2 text-xs font-sans bg-sand text-forest px-2 py-0.5 rounded align-middle">Featured</span>}
                      </h3>
                      <p className="text-charcoal/50 font-sans text-xs mb-2">{course.location}</p>
                      <p className="text-charcoal/75 font-sans text-sm leading-relaxed">{course.description}</p>
                    </div>
                  ))}

                  <div className="bg-gradient-to-br from-forest-dark to-forest text-cream rounded-sm p-6">
                    <div className="bg-gray-300 h-48 rounded-sm flex items-center justify-center mb-4">
                      <span className="text-gray-500 font-sans text-xs">Image: Nahma Golf Club course photo</span>
                    </div>
                    <p className="text-sand/80 font-sans text-xs text-center italic">Nahma Golf Club, Rapid River, MI. Photo caption placeholder.</p>
                  </div>

                  <h2 className="font-serif text-charcoal text-2xl">Planning Your UP Golf Trip</h2>
                  <p>The UP golf season runs May through September. If you're planning a trip, late June through August offers the most reliable weather. Courses fill up on weekends, but most UP tracks are light enough on weekdays that you can show up without a reservation.</p>
                  <p>Green fees across the UP are generally affordable by Michigan standards. Budget $15-$50 per round depending on the course. The more remote the course, the cheaper and the more interesting.</p>

                  <h2 className="font-serif text-charcoal text-2xl">Bottom Line</h2>
                  <p>The Upper Peninsula is underrated as a golf destination. It's not Traverse City or Pinehurst, and that's the point. You'll play courses with genuine character, on land with real natural beauty, without the resort price tag or the crowds. If you haven't made the drive north, this is the year.</p>
                </div>
              ) : (
                <div className="space-y-6 font-sans text-charcoal/80 leading-relaxed">
                  <p className="text-lg text-charcoal">This article is under development. Check back for the full post.</p>
                  <p>In the meantime, explore our other content about Upper Peninsula golf and the Nahma Golf Club experience.</p>
                </div>
              )}

              {/* Author strip */}
              <div className="mt-12 border-t border-sand/40 pt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-charcoal text-sm">Nahma Golf Club</p>
                  <p className="text-charcoal/50 font-sans text-xs">Updated March 2026</p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Plan Your Visit */}
              <div className="bg-forest text-cream rounded-sm p-6 sticky top-20">
                <h3 className="font-serif text-sand text-lg mb-2">Plan Your Visit</h3>
                <p className="text-cream/70 font-sans text-sm mb-5">Nahma Golf Club is open May through September. Walk-ins welcome.</p>
                <div className="space-y-3">
                  <Link to="/rates/" className="block bg-sand text-forest text-sm font-sans font-semibold px-4 py-2.5 rounded text-center hover:bg-sand-light transition-colors">
                    See Rates
                  </Link>
                  <Link to="/tee-times/" className="block border border-cream/30 text-cream text-sm font-sans font-semibold px-4 py-2.5 rounded text-center hover:bg-forest-light transition-colors">
                    Tee Times
                  </Link>
                </div>
                <div className="mt-5 pt-5 border-t border-cream/20 text-cream/60 font-sans text-xs space-y-1">
                  <p>Green fees from $18</p>
                  <p>9 holes, par 36, 2,875 yards</p>
                  <p>Rapid River, Michigan</p>
                </div>
              </div>

              {/* Related posts */}
              <div className="bg-white border border-sand/30 rounded-sm p-6 shadow-sm">
                <h3 className="font-serif text-charcoal text-base mb-4">Related Posts</h3>
                <ul className="space-y-3">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        to={`/blog/${post.slug}/`}
                        className="font-sans text-sm text-charcoal/80 hover:text-forest leading-snug block"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-cream/70 font-sans text-sm mb-2">Ready to play?</p>
          <h2 className="font-serif text-cream text-3xl mb-6">Green fees start at $18.</h2>
          <Link to="/rates/" className="inline-block bg-sand text-forest font-sans font-semibold px-8 py-3 rounded hover:bg-sand-light transition-colors">
            See Rates
          </Link>
        </div>
      </section>

      {/* Related posts grid */}
      <section className="py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-2xl text-center mb-8">More from the Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}/`}
                className="bg-white border border-sand/30 rounded-sm p-5 shadow-sm hover:shadow-md transition-shadow block"
              >
                <div className="bg-gradient-to-br from-forest-dark to-forest h-28 rounded-sm mb-4 flex items-center justify-center">
                  <span className="text-sand/40 text-xs font-sans">Article Image</span>
                </div>
                <h3 className="font-serif text-charcoal text-base leading-snug hover:text-forest">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
