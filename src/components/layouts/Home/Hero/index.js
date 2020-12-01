import HeroImg from '../../../../assets/images/Img Hero/Ic_ilustra_Hero.png'
import './style.scss'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Bienvenido a tu</h1>
        <h1>
          <strong>Entrevista Técnica </strong> en
        </h1>
        <h1 className="accent-Text">Wolox</h1>
      </div>
      <img src={HeroImg} alt="hero image" />
    </div>
  )
}

export default Hero
