import BenefitCardList from '../../../ui/BenefitCardList'
import { benefits } from '../../../../helpers'
import './style.scss'
const Benefits = () => {
  return (
    <div className="benefits" id="Beneficios">
      <h3>
        Entre los beneficios que ofrecemos se encuentran{' '}
        <span className="accent-blue-text">;)</span>
      </h3>
      <BenefitCardList benefits={benefits} />
    </div>
  )
}

export default Benefits
