import './style.scss'
import PropTypes from 'prop-types'
const BenefitsCard = ({ benefit }) => {
  return (
    <div className="benefit-box">
      <img src={benefit.img} alt={benefit.title} />
      <h3>{benefit.title}</h3>
    </div>
  )
}

BenefitsCard.propType = {
  benefit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
}

export default BenefitsCard
