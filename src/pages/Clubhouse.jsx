/* SEO: Primary keywords: "golf course with restaurant upper peninsula" | Supports GBP Restaurant category */
import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'
import ImagePlaceholder from '../components/ImagePlaceholder'

const menuItems = [
  { category: 'Snacks', desc: 'Chips, pretzels, nuts, and the essentials to keep you going through nine holes.' },
  { category: 'Sandwiches', desc: 'Cold and hot sandwiches made fresh. Good enough for a full meal, portable enough for turn food.' },
  { category: 'Pizza', desc: 'Hot pizza by the slice and whole pies. Popular on league nights and weekend afternoons.' },
  { category: 'Full Bar', desc: 'Beer on tap, bottles, wine, and a full spirits selection. The clubhouse is a proper bar, not just a snack shack.' },
]

export default function Clubhouse() {
  return (
    <>
      <SeoBanner page="Clubhouse" keywords="golf course with restaurant upper peninsula, golf course bar upper peninsula" />

      {/* Hero */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-cream text-4xl sm:text-5xl mb-4">The Nahma Golf Club Clubhouse</h1>
          <p className="text-cream/70 font-sans text-lg">Food, drinks, and good company on the shore of Big Bay de Noc.</p>
        </div>
      </section>

      {/* Food and bar */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ImagePlaceholder label="Clubhouse Interior" height="h-96" gradient="from-charcoal/80 via-forest-dark to-forest" />
          <div>
            <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">After the Round</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl leading-tight mb-6">
              Food, Drinks, and Good Company
            </h2>
            <div className="space-y-4 text-charcoal/80 font-sans leading-relaxed">
              <p>The Nahma clubhouse has been the gathering place for golfers and locals since before most of us were born. It's a real bar, a real kitchen, and the best place to replay your round shot by shot after the 9th hole.</p>
              <p>Snacks and sandwiches keep you fueled on the course. Pizza is a league night staple. The full bar has everything from a cold tap beer to a proper mixed drink, whatever your post-round ritual calls for.</p>
              <p>The atmosphere is exactly what it should be: unpretentious, welcoming, and loud enough on a good evening that you don't want to leave after one drink.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu highlights */}
      <section className="py-16 bg-sand/20 border-t border-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-charcoal text-3xl text-center mb-10">What We're Serving</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <div key={item.category} className="bg-white border border-sand/30 rounded-sm p-6 shadow-sm flex gap-4">
                <div className="w-2 flex-shrink-0 bg-forest rounded-full" />
                <div>
                  <h3 className="font-serif text-forest text-xl mb-2">{item.category}</h3>
                  <p className="text-charcoal/70 font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal/40 font-sans text-xs mt-6 italic">Menu items subject to availability. Full menu posted in the clubhouse.</p>
        </div>
      </section>

      {/* Group outing angle */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-charcoal text-2xl mb-4">Hosting a group outing?</h2>
          <p className="text-charcoal/70 font-sans leading-relaxed mb-6">
            The clubhouse handles the 19th hole. We can accommodate your group after a scramble, an annual outing, or a private event. Talk to us about food and drink for your group.
          </p>
          <Link to="/outings/" className="inline-block bg-forest text-cream font-sans font-semibold px-8 py-3 rounded hover:bg-forest-light transition-colors">
            Plan a Group Outing
          </Link>
        </div>
      </section>

      {/* Hours */}
      <section className="py-14 bg-sand/20 border-t border-sand/40">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-charcoal text-2xl mb-6">Clubhouse Hours</h2>
          <div className="bg-white border border-sand/30 rounded-sm shadow-sm divide-y divide-sand/20 text-left max-w-md mx-auto overflow-hidden">
            {[
              ['Monday - Friday', '10:00 AM - 9:00 PM'],
              ['Saturday', '9:00 AM - 9:00 PM'],
              ['Sunday', '11:00 AM - 9:00 PM'],
            ].map(([day, hours]) => (
              <div key={day} className="flex justify-between px-6 py-3">
                <span className="font-sans text-charcoal/80 text-sm">{day}</span>
                <span className="font-sans text-charcoal/60 text-sm">{hours}</span>
              </div>
            ))}
          </div>
          <p className="text-charcoal/50 font-sans text-xs mt-4 italic">Hours follow course open season: May through September.</p>
        </div>
      </section>

      {/* Directions */}
      <section className="bg-forest py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-cream/70 font-sans text-sm mb-2">Find Us</p>
          <p className="font-serif text-cream text-xl mb-1">8588 Ll Rd, Rapid River, MI 49878</p>
          <p className="text-cream/60 font-sans text-sm mb-6">(906) 644-2648</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-sand text-sand font-sans font-semibold px-6 py-2 rounded hover:bg-sand hover:text-forest transition-colors text-sm"
          >
            Get Directions
          </a>
        </div>
      </section>
    </>
  )
}
