import './style.scss'
const BenefitsCard = ({ benefit }) => {
  return (
    <div className="benefit-box">
      <img src={benefit.img} alt={benefit.title} />
      <h3>{benefit.title}</h3>
    </div>
  )
}

export default BenefitsCard
