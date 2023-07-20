import { Index } from './pages'
import { About } from './pages/about'
import { ContactUs } from './pages/contactUs'
import { ExperienceGalapagos } from './pages/experienceGalapagos'
import { Gallery } from './pages/gallery'
import { TipTopII } from './pages/tipTopII'
import { LastMinutes } from './pages/lastMinutes'
import { OurFleet } from './pages/ourFleet'
import { Router } from './router'
import { GalleryDetails } from './pages/galleryDetails'
import { NextDepartures } from './pages/nextDepartures'
import { TipTopIV } from './pages/tipTopIV'
import { TipTopV } from './pages/tipTopV'
import { Koln } from './pages/koln'

function App () {
  const appRoutes = [
    {
      path: '/',
      component: Index
    },
    {
      path: '/about-us',
      component: About
    },
    {
      path: '/experience-galapagos',
      component: ExperienceGalapagos
    },
    {
      path: '/our-fleet',
      component: OurFleet
    },
    {
      path: '/fleet/tip-top-ii',
      component: TipTopII
    },
    {
      path: '/fleet/tip-top-iv',
      component: TipTopIV
    },
    {
      path: '/fleet/tip-top-v',
      component: TipTopV
    },
    {
      path: '/fleet/koln',
      component: Koln
    },
    {
      path: '/last-minute-deals-and-special-promos',
      component: LastMinutes
    },
    {
      path: '/gallery',
      component: Gallery
    },
    {
      path: '/gallery/:query',
      component: GalleryDetails
    },
    {
      path: '/contact-us',
      component: ContactUs
    },
    {
      path: '/next-departures',
      component: NextDepartures
    }
  ]

  return (
    <Router routes={appRoutes} />
  )
}

export default App
