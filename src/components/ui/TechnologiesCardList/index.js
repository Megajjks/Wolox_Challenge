import { useContext } from 'react'
import TechnologiesContext from '../../context/Technologies/TechnologiesContext'
import TechnologiesCard from '../TechnologiesCard'
import PropTypes from 'prop-types'
import './style.scss'
const TechnologiesCardList = ({ technologies }) => {
  const technologiesContext = useContext(TechnologiesContext)
  const { addOrRemoveFavoriteTech } = technologiesContext

  const addToFavorites = (technologie) => () => {
    addOrRemoveFavoriteTech(technologie)
  }

  return (
    <div className="technologies-list">
      {technologies.map((tech, idx) => (
        <TechnologiesCard
          key={idx}
          item={tech}
          onClick={addToFavorites(tech)}
        />
      ))}
    </div>
  )
}

TechnologiesCardList.propType = {
  technologies: PropTypes.array.isRequired,
}

export default TechnologiesCardList
