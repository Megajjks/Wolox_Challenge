import Button from '../../../ui/Button'
import TwitterIco from '../../../../assets/images/twitter.svg'
import './style.scss'
const Information = () => {
  return (
    <div className="information">
      <div className="information-numbers">
        <h1>
          <span className="accent-green-text">350 +</span>{' '}
          <span className="accent-blue-text">Woloxers</span>
        </h1>
        <div className="twitter-box">
          <img src={TwitterIco} alt="twitter Wolox" />
          <p>@Wolox</p>
        </div>
        <Button
          title="Siguenos"
          type="secundary"
          colortxt="#ffffff"
          typeRedirect="outside"
          url="https://twitter.com/Wolox"
        />
      </div>
      <div className="information-paragraph">
        <h1>Trabajamos para</h1>
        <h1>
          <span className="accent-blue-text">convertir</span>{' '}
          <span className="accent-green-text">ideas</span> en
        </h1>
        <h1>productos.</h1>
      </div>
    </div>
  )
}

export default Information
