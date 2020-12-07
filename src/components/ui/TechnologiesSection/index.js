import PropTypes from 'prop-types'
import './style.scss'
const TechnologiesSection = ({ technologieTotal }) => {
  return (
    <div className="section-wrapper">
      <h1>{technologieTotal}</h1>
      <p>Tecnologias existentes en este sitio</p>
    </div>
  )
}

TechnologiesSection.propType = {
  technologieTotal: PropTypes.number.isRequired,
}

export default TechnologiesSection
