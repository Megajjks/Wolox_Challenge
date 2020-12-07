import { useContext, useEffect } from 'react'
import TechnologiesContext from '../../context/Technologies/TechnologiesContext'
import Hero from './Hero'
import Information from './Information'
import Benefits from './Benefits'
import AboutUs from './AboutUs'
const Home = () => {
  const teachnologiesContext = useContext(TechnologiesContext)
  const { getTechnologiesWithoutApi } = teachnologiesContext

  // check if exist data of favorite teachnologie in the localStorage
  useEffect(() => {
    getTechnologiesWithoutApi()
  }, [])

  return (
    <div id="Inicio">
      <Hero />
      <Information />
      <Benefits />
      <AboutUs />
    </div>
  )
}

export default Home
