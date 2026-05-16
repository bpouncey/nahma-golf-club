import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'

const holes = [
  { num: 1, par: 4, white: 340, red: 310, hcp: 5 },
  { num: 2, par: 3, white: 165, red: 140, hcp: 9 },
  { num: 3, par: 5, white: 480, red: 445, hcp: 1 },
  { num: 4, par: 4, white: 355, red: 325, hcp: 3 },
  { num: 5, par: 3, white: 140, red: 120, hcp: 7 },
  { num: 6, par: 4, white: 385, red: 355, hcp: 2 },
  { num: 7, par: 4, white: 360, red: 335, hcp: 4 },
  { num: 8, par: 5, white: 490, red: 460, hcp: 6 },
  { num: 9, par: 4, white: 360, red: 330, hcp: 8 },
]

const totals = {
  par: holes.reduce((s, h) => s + h.par, 0),
  white: holes.reduce((s, h) => s + h.white, 0),
  red: holes.reduce((s, h) => s + h.red, 0),
}

export default function Scorecard() {
  return (
    <>
      <SeoBanner page="Scorecard" keywords="nahma golf club scorecard, course yardage" />

      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">Official</p>
            <h1 className="font-serif text-charcoal text-4xl sm:text-5xl mb-2">Nahma Golf Club Scorecard</h1>
            <p className="text-charcoal/60 font-sans text-sm">Rapid River, MI &middot; Big Bay de Noc &middot; 9 Holes &middot; Par 36</p>
          <p className="text-charcoal/65 font-sans text-sm leading-relaxed max-w-2xl mx-auto mt-4">
            White tees play to 2,875 yards. Red tees play to 2,820 yards. Both sets play to par 36. If you're playing 18 holes, you'll replay the same 9-hole layout. There is no separate back nine. Slope and course rating details are available at the pro shop.
          </p>
          </div>

          {/* Printable scorecard */}
          <div className="bg-white border-2 border-charcoal/20 rounded-sm shadow-md overflow-hidden print-scorecard">
            {/* Header */}
            <div className="bg-forest text-cream p-4 text-center">
              <div className="font-serif text-xl">Nahma Golf Club</div>
              <div className="font-sans text-xs text-cream/70 mt-1">8588 Ll Rd, Rapid River, MI 49878 &nbsp;&middot;&nbsp; (906) 644-2648</div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="bg-sand/30 border-b border-charcoal/20">
                    <th className="py-3 px-3 text-left font-semibold text-charcoal text-xs uppercase tracking-wider">Hole</th>
                    <th className="py-3 px-3 text-center font-semibold text-charcoal text-xs uppercase tracking-wider">Par</th>
                    <th className="py-3 px-3 text-center font-semibold text-blue-700 text-xs uppercase tracking-wider">White (Yds)</th>
                    <th className="py-3 px-3 text-center font-semibold text-red-600 text-xs uppercase tracking-wider">Red (Yds)</th>
                    <th className="py-3 px-3 text-center font-semibold text-charcoal text-xs uppercase tracking-wider">HCP</th>
                    <th className="py-3 px-3 text-center font-semibold text-charcoal text-xs uppercase tracking-wider border-l border-charcoal/20">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {holes.map((hole, i) => (
                    <tr key={hole.num} className={`border-b border-charcoal/10 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="py-3 px-3">
                        <span className="font-serif text-lg text-forest font-semibold">{hole.num}</span>
                      </td>
                      <td className="py-3 px-3 text-center font-semibold text-charcoal">{hole.par}</td>
                      <td className="py-3 px-3 text-center text-charcoal/80">{hole.white}</td>
                      <td className="py-3 px-3 text-center text-charcoal/80">{hole.red}</td>
                      <td className="py-3 px-3 text-center text-charcoal/60">{hole.hcp}</td>
                      <td className="py-3 px-3 border-l border-charcoal/20">
                        <div className="w-10 h-8 border border-charcoal/20 rounded mx-auto" />
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-forest text-cream font-semibold">
                    <td className="py-3 px-3 font-sans text-sm uppercase tracking-wider">Total</td>
                    <td className="py-3 px-3 text-center font-serif text-lg">{totals.par}</td>
                    <td className="py-3 px-3 text-center font-serif text-lg">{totals.white}</td>
                    <td className="py-3 px-3 text-center font-serif text-lg">{totals.red}</td>
                    <td className="py-3 px-3 text-center text-cream/50">-</td>
                    <td className="py-3 px-3 border-l border-cream/20">
                      <div className="w-10 h-8 border border-cream/30 rounded mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Score summary rows */}
            <div className="p-4 border-t border-charcoal/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {['Name', 'Date', 'Handicap', 'Net Score'].map((label) => (
                <div key={label}>
                  <div className="text-xs text-charcoal/40 uppercase tracking-wider font-sans mb-1">{label}</div>
                  <div className="border-b-2 border-charcoal/20 pb-1 min-h-[24px]" />
                </div>
              ))}
            </div>
          </div>

          {/* Print button */}
          <div className="text-center mt-8 no-print">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-forest text-cream font-sans font-semibold px-8 py-3 rounded hover:bg-forest-light transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Scorecard
            </button>
          </div>
        </div>
      </section>

      {/* Rates + Tee Times CTA */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="font-serif text-cream text-2xl mb-4">Ready to play?</h2>
          <p className="text-cream/70 font-sans text-sm mb-6">Green fees from $18. No tee time needed. Just show up.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rates/" className="inline-block bg-sand text-forest font-sans font-semibold px-8 py-3 rounded hover:bg-sand-light transition-colors">
              Current Green Fees
            </Link>
            <Link to="/tee-times/" className="inline-block border-2 border-sand text-sand font-sans font-semibold px-8 py-3 rounded hover:bg-sand hover:text-forest transition-colors">
              Book a Tee Time
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
