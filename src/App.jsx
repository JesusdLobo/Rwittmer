import { Index } from './pages'
import { About } from './pages/about'
import { ExperienceGalapagos } from './pages/experienceGalapagos'
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
    }
  ]

  return (
    <Router routes={appRoutes} />
  )
}

export default App
