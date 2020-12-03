import './style.scss'
import FavoriteButton from '../FavoriteButton'
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

export default TechnologiesCard
