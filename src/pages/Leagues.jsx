/* SEO: Primary keywords: "golf leagues escanaba michigan" | Audience: Local golfer, returning player */
import { Link } from 'react-router-dom'
import SeoBanner from '../components/SeoBanner'

const leagueData = [
  {
    name: "Men's League",
    day: 'Tuesdays',
    time: '6:00 PM',
    who: 'All male golfers welcome',
    desc: 'The oldest league at Nahma, running since the early days of the club. Show up Tuesdays at 6 and find a group. No pre-registration required for new players.',
    join: 'Just show up, or call ahead to let us know you\'re coming.',
  },
  {
    name: 'All Scramble',
    day: 'Wednesdays',
    time: '6:00 PM',
    who: 'Open to all skill levels',
    desc: 'The scramble format makes it friendly for players of all skill levels. Grab a partner or join a group at the first tee. Wednesday nights are a great way to try league golf.',
    join: 'Walk-ins welcome. Call ahead for larger groups.',
  },
  {
    name: "Women's League",
    day: 'Thursdays',
    time: '6:00 PM',
    who: 'All female golfers welcome',
    desc: 'A welcoming group that has built friendships over decades of summer golf. New players are enthusiastically welcomed. All skill levels encouraged to join.',
    join: 'Show up on Thursdays or call the clubhouse to connect with the league coordinator.',
  },
]

export default function Leagues() {
  return (
    <>
      <SeoBanner page="Golf Leagues" keywords="golf leagues escanaba michigan, golf leagues rapid river" />

      {/* Hero */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-cream text-4xl sm:text-5xl mb-4">Weekly Golf Leagues at Nahma Golf Club</h1>
          <p className="text-cream/70 font-sans text-lg">Three nights a week, May through September.</p>
        </div>
      </section>

      {/* League cards */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leagueData.map((league) => (
              <div key={league.name} className="bg-white border border-sand/30 rounded-sm shadow-sm overflow-hidden">
                <div className="bg-forest px-6 py-5">
                  <h2 className="font-serif text-cream text-xl">{league.name}</h2>
                  <div className="text-sand/80 font-sans text-sm mt-1">{league.day} &middot; {league.time}</div>
                </div>
                <div className="p-6">
                  <p className="text-forest font-sans text-xs font-semibold uppercase tracking-wider mb-3">{league.who}</p>
                  <p className="text-charcoal/75 font-sans text-sm leading-relaxed mb-4">{league.desc}</p>
                  <div className="border-t border-sand/30 pt-4">
                    <p className="text-charcoal/50 font-sans text-xs font-semibold uppercase tracking-wider mb-2">How to Join</p>
                    <p className="text-charcoal/70 font-sans text-sm">{league.join}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Season note */}
      <section className="bg-sand/20 border-t border-sand/40 py-10 text-center">
        <p className="font-sans text-charcoal/70 text-sm">
          <span className="font-semibold text-charcoal">Season:</span> Leagues run May through September, following the course schedule.
        </p>
      </section>

      {/* Community section */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sand font-sans text-sm tracking-widest uppercase mb-3">Community</p>
          <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-8">Part of Something Larger</h2>
          <div className="space-y-4 text-charcoal/75 font-sans leading-relaxed text-left max-w-2xl mx-auto">
            <p>Golf leagues at Nahma have been part of the fabric of this community for generations. Players who joined as college students come back as parents, and now grandparents. The faces change. The conversation around the first tee stays the same.</p>
            <p>There's a reason people keep coming back: it's a genuinely welcoming group on a course with no pretension. Low handicapper or high, you'll find a place in one of these leagues.</p>
            <p>Over the decades, we've seen friendships formed, business partnerships launched, and more than a few marriages sparked by a Tuesday evening round. If you haven't played in a league before, Nahma is a good place to start.</p>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-cream text-2xl mb-3">League regulars save all season with a membership.</h2>
          <p className="text-cream/70 font-sans text-sm mb-6">UPGA members play at a reduced rate. If you're leaguing all season, a membership pays for itself fast.</p>
          <Link to="/rates/" className="inline-block bg-sand text-forest font-sans font-semibold px-8 py-3 rounded hover:bg-sand-light transition-colors">
            See Membership Rates
          </Link>
        </div>
      </section>
    </>
  )
}
