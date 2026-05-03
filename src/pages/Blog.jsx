/* SEO: Blog collection view | Blog: Upper Peninsula Golf */
import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'

const posts = [
  {
    slug: 'best-golf-courses-michigan-upper-peninsula',
    category: 'Course Guides',
    title: "Best Golf Courses in Michigan's Upper Peninsula",
    excerpt: 'A golfer\'s guide to the most distinctive public courses in the UP, from the Straits to Big Bay de Noc.',
    date: 'March 2026',
    readTime: '7 min read',
  },
  {
    slug: 'golf-courses-near-escanaba-mi',
    category: 'Local Golf',
    title: 'Golf Courses Near Escanaba, MI',
    excerpt: 'Escanaba area golfers have several excellent options within a short drive. Here\'s what\'s within 30 miles.',
    date: 'February 2026',
    readTime: '5 min read',
  },
  {
    slug: 'what-to-know-before-golfing-in-the-up',
    category: 'Tips',
    title: 'What to Know Before Golfing in the UP',
    excerpt: 'The Upper Peninsula is one of the most scenic places to golf in the country. It also has its quirks. Here\'s what to expect.',
    date: 'January 2026',
    readTime: '6 min read',
  },
  {
    slug: 'golf-trip-itinerary-upper-peninsula',
    category: 'Trip Planning',
    title: 'Golf Trip Itinerary: Upper Peninsula, Michigan',
    excerpt: 'A sample 3-day golf itinerary for visiting the Upper Peninsula, with course suggestions and local stops.',
    date: 'December 2025',
    readTime: '8 min read',
  },
  {
    slug: 'history-of-public-golf-michigan-up',
    category: 'History',
    title: 'The History of Public Golf in Michigan\'s Upper Peninsula',
    excerpt: 'Some of the UP\'s oldest courses have been public since they opened. A look at the heritage of accessible golf in the north.',
    date: 'November 2025',
    readTime: '6 min read',
  },
  {
    slug: 'lake-michigan-golf-courses-guide',
    category: 'Course Guides',
    title: 'Golf on the Shore: Lake Michigan Courses Worth Playing',
    excerpt: 'Waterside golf in Michigan is among the best in the Midwest. These are the courses with the best lake access.',
    date: 'October 2025',
    readTime: '5 min read',
  },
]

export default function Blog() {
  return (
    <>
      <SeoBanner page="Blog" keywords="upper peninsula golf blog, michigan golf guides" />

      <section className="bg-forest py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-cream text-4xl sm:text-5xl mb-4">Nahma Golf Club: Golf in Michigan's Upper Peninsula</h1>
          <p className="text-cream/70 font-sans text-lg">Guides, tips, and stories from the shoreline.</p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white border border-sand/30 rounded-sm shadow-sm overflow-hidden flex flex-col">
                {/* Image placeholder */}
                <div className="bg-gradient-to-br from-forest-dark via-forest to-forest-light h-44 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(217,201,158,0.15) 0, rgba(217,201,158,0.15) 1px, transparent 0, transparent 50%)',
                    backgroundSize: '12px 12px'
                  }} />
                  <span className="relative text-sand/50 text-xs font-sans tracking-widest uppercase">Article Image</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-sand/30 text-forest font-sans text-xs font-semibold px-2 py-1 rounded">{post.category}</span>
                    <span className="text-charcoal/40 font-sans text-xs">{post.date}</span>
                    <span className="text-charcoal/40 font-sans text-xs">&middot; {post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-charcoal text-lg leading-snug mb-3">{post.title}</h2>
                  <p className="text-charcoal/65 font-sans text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-1 text-forest font-sans text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Read More
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-14">
            <button className="px-4 py-2 border border-sand/40 rounded font-sans text-sm text-charcoal/40 cursor-default">Prev</button>
            <button className="px-4 py-2 border border-forest bg-forest text-cream rounded font-sans text-sm">1</button>
            <button className="px-4 py-2 border border-sand/40 rounded font-sans text-sm text-charcoal/70 hover:border-forest hover:text-forest">2</button>
            <button className="px-4 py-2 border border-sand/40 rounded font-sans text-sm text-charcoal/70 hover:border-forest hover:text-forest">Next</button>
          </div>
        </div>
      </section>
    </>
  )
}
