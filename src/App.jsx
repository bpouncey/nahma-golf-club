import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './pages/Home'
import TheCourse from './pages/TheCourse'
import HoleByHole from './pages/HoleByHole'
import Scorecard from './pages/Scorecard'
import Rates from './pages/Rates'
import TeeTimes from './pages/TeeTimes'
import Leagues from './pages/Leagues'
import Clubhouse from './pages/Clubhouse'
import Rentals from './pages/Rentals'
import Outings from './pages/Outings'
import History from './pages/History'
import About from './pages/About'
import Contact from './pages/Contact'
import LocationPage from './pages/LocationPage'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

const locationData = {
  escanaba: {
    city: 'Escanaba',
    distance: 'Approximately 20 miles',
    description: 'Escanaba golfers are 20 miles from one of the Upper Peninsula\'s most distinctive public courses. Nahma Golf Club sits on the shoreline of Big Bay de Noc, just outside the small town of Rapid River on LL Road. Head west on US-2 and follow the signs.',
    directions: 'Take US-2 west from Escanaba approximately 18 miles to Rapid River. Turn left onto LL Road (south). The course entrance is on the right within 2 miles. Total drive is approximately 20-25 minutes.',
  },
  'rapid-river': {
    city: 'Rapid River',
    distance: 'Under 5 miles',
    description: 'Rapid River residents are practically next door to one of the Upper Peninsula\'s most historic public courses. Nahma Golf Club is less than 5 miles from downtown Rapid River, on the shore of Big Bay de Noc.',
    directions: 'From central Rapid River, head south on LL Road. The course entrance is on your right within 5 minutes of driving.',
  },
  gladstone: {
    city: 'Gladstone',
    distance: 'Approximately 25 miles',
    description: 'Gladstone golfers are about 25 miles from one of the Upper Peninsula\'s most distinctive public courses. Nahma Golf Club sits on the shoreline of Big Bay de Noc in Rapid River. The drive along US-2 is a pleasant one.',
    directions: 'From Gladstone, take US-2 west through Escanaba and continue approximately 20 miles to Rapid River. Turn left onto LL Road. The course is on the right within 2 miles. Total drive approximately 30 minutes.',
  },
  garden: {
    city: 'Garden',
    distance: 'Approximately 20 miles',
    description: 'Garden Peninsula residents are within easy reach of one of the Upper Peninsula\'s most historic golf courses. Nahma Golf Club sits on the shore of Big Bay de Noc, accessible via a scenic drive along the bay.',
    directions: 'From Garden, head north on Garden Road to US-2 near Rapid River. Turn west briefly, then south on LL Road. Total distance approximately 20 miles, about 30 minutes by car.',
  },
  manistique: {
    city: 'Manistique',
    distance: 'Approximately 45 miles',
    description: 'Manistique golfers are about 45 miles east of one of the Upper Peninsula\'s most unusual and historic public courses. Nahma Golf Club has been part of the Delta County community since 1922, and the drive along US-2 is half the experience.',
    directions: 'From Manistique, take US-2 west for approximately 40 miles. In Rapid River, continue past the main intersection and turn right onto LL Road. The course is on the right. Total drive approximately 45-50 minutes.',
  },
}

function LocationRoute({ id }) {
  const data = locationData[id]
  if (!data) return <div>Location not found</div>
  return <LocationPage {...data} />
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-course/" element={<TheCourse />} />
          <Route path="/the-course/hole-by-hole/" element={<HoleByHole />} />
          <Route path="/the-course/scorecard/" element={<Scorecard />} />
          <Route path="/rates/" element={<Rates />} />
          <Route path="/tee-times/" element={<TeeTimes />} />
          <Route path="/leagues/" element={<Leagues />} />
          <Route path="/clubhouse/" element={<Clubhouse />} />
          <Route path="/rentals/" element={<Rentals />} />
          <Route path="/outings/" element={<Outings />} />
          <Route path="/history/" element={<History />} />
          <Route path="/about/" element={<About />} />
          <Route path="/contact/" element={<Contact />} />

          {/* Location pages */}
          <Route path="/golf-near-escanaba/" element={<LocationRoute id="escanaba" />} />
          <Route path="/golf-near-rapid-river/" element={<LocationRoute id="rapid-river" />} />
          <Route path="/golf-near-gladstone/" element={<LocationRoute id="gladstone" />} />
          <Route path="/golf-near-garden/" element={<LocationRoute id="garden" />} />
          <Route path="/golf-near-manistique/" element={<LocationRoute id="manistique" />} />

          {/* Blog */}
          <Route path="/blog/" element={<Blog />} />
          <Route path="/blog/:slug/" element={<BlogPost />} />

          {/* Placeholder for memberships link from rates page */}
          <Route path="/memberships/" element={<Rates />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
