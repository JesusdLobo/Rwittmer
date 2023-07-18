import { Index } from './pages'
import { About } from './pages/about'
import { ContactUs } from './pages/contactUs'
import { ExperienceGalapagos } from './pages/experienceGalapagos'
import { Gallery } from './pages/gallery'
import { LastMinutes } from './pages/lastMinutes'
import { OurFleet } from './pages/ourFleet'
import { Router } from './router'

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
      path: '/last-minute-deals-and-special-promos',
      component: LastMinutes
    },
    {
      path: '/gallery',
      component: Gallery
    },
    {
      path: '/contact-us',
      component: ContactUs
    }
  ]

  return (
    <Router routes={appRoutes} />
  )
}

export default App
