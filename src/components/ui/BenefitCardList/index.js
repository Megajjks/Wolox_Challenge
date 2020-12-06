import BenefitCard from '../BenefitCard'
import PropTypes from 'prop-types'
import './style.scss'

const BenefitCardList = ({ benefits }) => {
  return (
    <div className="benefits-Wrapper">
      {benefits.map((item, idx) => (
        <BenefitCard key={idx} benefit={item} />
      ))}
    </div>
  )
}

BenefitCardList.propType = {
  benefits: PropTypes.array.isRequired,
}

export default BenefitCardList
