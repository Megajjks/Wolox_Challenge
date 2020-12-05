import { useContext, useEffect } from 'react'
import TechnologiesContext from '../../context/Technologies/TechnologiesContext'
import TechnologiesCardList from '../../ui/TechnologiesCardList'
import TechnologiesSection from '../../ui/TechnologiesSection'
import FilterBar from '../../ui/FilterBar'
import Spinner from '../../ui/Spinner'
import './style.scss'

const Technologies = () => {
  const technologiesContext = useContext(TechnologiesContext)
  const {
    technologiesList,
    loader,
    error,
    getTechnologies,
  } = technologiesContext

  useEffect(() => {
    getTechnologies()
  }, [])

  const renderTechnologiesList = () => {
    if (error) {
      return <h2>{error}</h2>
    }
    if (technologiesList.length <= 0) {
      return <h2>Sin Tecnologias</h2>
    }
    return (
      <>
        <FilterBar />
        <TechnologiesCardList technologies={technologiesList} />
      </>
    )
  }

  return (
    <div className="technologies-box">
      <h1>
        Lista de <span className="accent-blue-text">Tecnologias</span>
      </h1>
      {loader ? <Spinner /> : renderTechnologiesList()}
      <TechnologiesSection technologieTotal={technologiesList.length} />
    </div>
  )
}

export default Technologies
