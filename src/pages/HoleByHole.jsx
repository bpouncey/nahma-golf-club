/* SEO: Long-tail keyword capture, time-on-page asset | Intent: Informational (pre-visit prep) */
import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'
import ImagePlaceholder from '../components/ImagePlaceholder'

const holes = [
  { num: 1, par: 4, yards: 340, yardsFwd: 310, hcp: 5, desc: 'A welcoming opener that plays straight along the tree line. The fairway widens near the green, giving you room to breathe on approach. Club down and find the short grass.', tip: 'Driver or 3-wood. Take the angle on the left side.' },
  { num: 2, par: 3, yards: 165, yardsFwd: 140, hcp: 9, desc: 'Your first glimpse of Big Bay de Noc opens up from the elevated tee box. The green sits tucked against a row of mature oaks. Short is safe; long is trouble.', tip: 'Play one club less in the wind. Aim center of the green.' },
  { num: 3, par: 5, yards: 480, yardsFwd: 445, hcp: 1, desc: 'The signature handicap 1 hole. A dogleg left with out-of-bounds on the right and a narrow approach corridor. Lay up to your comfortable wedge yardage.', tip: 'Two solid shots to the corner, then a full wedge in. Patience pays here.' },
  { num: 4, par: 4, yards: 355, yardsFwd: 325, hcp: 3, desc: 'Plays slightly uphill with a raised green that will reject weak approaches. The dish-shaped putting surface rewards a centered landing. Any miss is a chip.', tip: 'Aim for the center of the dish. Short right and long left are the danger zones.' },
  { num: 5, par: 3, yards: 140, yardsFwd: 120, hcp: 7, desc: 'Shortest hole on the course, but don\'t underestimate the depth of the green. Bay breezes make club selection tricky on this exposed downhill shot.', tip: 'Wind affects this hole more than any other. Check the tree tops before choosing a club.' },
  { num: 6, par: 4, yards: 385, yardsFwd: 355, hcp: 2, desc: 'One of the best driving holes on the course. An open fairway leads to a well-guarded green flanked by mounds on both sides. This is where scorecards separate.', tip: 'Driver to the flat section, mid-iron in. Don\'t try to reach the flag on a tight pin position.' },
  { num: 7, par: 4, yards: 360, yardsFwd: 335, hcp: 4, desc: 'A slight dogleg right with a glimpse of the bay on your backswing. The green complex is classic Nahma, elevated and round, demanding a precise short iron.', tip: 'Favor the left side of the fairway for the best angle into a typically back-right pin.' },
  { num: 8, par: 5, yards: 490, yardsFwd: 460, hcp: 6, desc: 'The second par 5 on the back nine plays along the shoreline corridor. You can hear the water on calm days. Three solid shots will get you there. Going for it in two is risky.', tip: 'Three-shot strategy is the smart play. Let the course set up a short pitch to the green.' },
  { num: 9, par: 4, yards: 360, yardsFwd: 330, hcp: 8, desc: 'The closer brings you back toward the clubhouse with a slight right-to-left tilt. Water is visible on the right. Finish strong with a clean drive and a committed approach.', tip: 'Keep it left of center off the tee. The approach opens up nicely from that side.' },
]

const totals = {
  par: holes.reduce((s, h) => s + h.par, 0),
  yards: holes.reduce((s, h) => s + h.yards, 0),
  yardsFwd: holes.reduce((s, h) => s + h.yardsFwd, 0),
}

export default function HoleByHole() {
  return (
    <>
      <SeoBanner page="Hole-by-Hole Guide" keywords="nahma golf club holes, 9 hole course upper peninsula" />

      {/* Intro */}
      <section className="bg-cream pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">Course Guide</p>
          <h1 className="font-serif text-charcoal text-4xl sm:text-5xl mb-6">
            Nahma Golf Club: Hole-by-Hole Guide
          </h1>
          <p className="text-charcoal/75 font-sans leading-relaxed max-w-2xl mx-auto">
            Nine holes on the shore of Big Bay de Noc. Each hole has its own personality, shaped by the lake, the trees, and a hundred years of play. Here's what to expect.
          </p>
        </div>
      </section>

      {/* Overview bar */}
      <section className="bg-forest-dark py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center divide-x divide-forest-light">
            {['9 Holes', 'Par 36', '2,875 Total Yards'].map((s) => (
              <span key={s} className="px-6 py-1 text-sand/80 font-sans text-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Hole grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {holes.map((hole) => (
              <div key={hole.num} className="bg-white border border-sand/30 rounded-sm shadow-sm overflow-hidden">
                <ImagePlaceholder
                  label={`Hole ${hole.num} View`}
                  height="h-40"
                  gradient={hole.num % 2 === 0 ? 'from-forest-dark via-forest to-forest-light' : 'from-forest via-forest-light to-forest-dark'}
                />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="font-serif text-5xl text-forest font-semibold leading-none">{hole.num}</div>
                    <div className="text-right">
                      <div className="flex gap-4 text-right">
                        <div>
                          <div className="text-xs text-charcoal/50 font-sans uppercase tracking-wider">Par</div>
                          <div className="font-serif text-xl text-charcoal">{hole.par}</div>
                        </div>
                        <div>
                          <div className="text-xs text-charcoal/50 font-sans uppercase tracking-wider">Yards</div>
                          <div className="font-serif text-xl text-charcoal">{hole.yards}</div>
                        </div>
                        <div>
                          <div className="text-xs text-charcoal/50 font-sans uppercase tracking-wider">HCP</div>
                          <div className="font-serif text-xl text-charcoal">{hole.hcp}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-charcoal/75 font-sans text-sm leading-relaxed mb-3">{hole.desc}</p>
                  <div className="border-t border-sand/30 pt-3">
                    <p className="text-forest text-xs font-sans font-semibold uppercase tracking-wider mb-1">Playing Tip</p>
                    <p className="text-charcoal/60 font-sans text-xs italic leading-relaxed">{hole.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scorecard CTA */}
      <section className="bg-sand/30 border-t border-sand/40 py-14 text-center">
        <div className="max-w-lg mx-auto px-4">
          <svg className="w-10 h-10 text-forest/50 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          <h2 className="font-serif text-charcoal text-2xl mb-3">Print the scorecard before you play.</h2>
          <p className="text-charcoal/60 font-sans text-sm mb-6">Our printable scorecard includes yardages and par for all 9 holes.</p>
          <Link to="/the-course/scorecard/" className="inline-block bg-forest text-cream font-sans font-semibold px-8 py-3 rounded hover:bg-forest-light transition-colors">
            View Scorecard
          </Link>
        </div>
      </section>
    </>
  )
}
