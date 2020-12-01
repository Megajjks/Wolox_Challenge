import Button from '../../../ui/Button'
import './style.scss'
const AboutUs = () => {
  return (
    <div className="aboutus">
      <h1>
        Gracias por{' '}
        <span className="accent-Blue-Text">completar el ejercicio</span>
      </h1>
      <h2>Te invitamos a ver mas información</h2>
      <Button
        title="Conocer más"
        url="https://www.wolox.com.ar/"
        typeRedirect="outside"
      />
    </div>
  )
}

export default AboutUs
