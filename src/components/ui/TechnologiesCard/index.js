import FavoriteButton from '../FavoriteButton'
import PropTypes from 'prop-types'
import './style.scss'
const TechnologiesCard = ({ item, onClick }) => {
  const { tech, year, author, license, language, type, logo } = item
  return (
    <div className="technologies-wrapper">
      <img src={logo} alt={`logo ${tech}`} />
      <div className="title-box">
        <h1>{tech}</h1>
        <FavoriteButton onClick={onClick} checked={item.isFavorite} />
      </div>
      <p>
        <span className="accent-txt">Año de creación:</span> {year}
      </p>
      <p>
        <span className="accent-txt">Autor:</span> {author}
      </p>
      <p>
        <span className="accent-txt">Lincencia:</span> {license}
      </p>
      <p>
        <span className="accent-txt">Lenguaje:</span> {language}
      </p>
      <p>
        <span className="accent-txt">tipo:</span> {type}
      </p>
    </div>
  )
}

TechnologiesCard.propType = {
  item: PropTypes.shape({
    tech: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    license: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TechnologiesCard
