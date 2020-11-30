import BenefitCard from '../BenefitCard'
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

export default BenefitCardList
