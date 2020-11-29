import Button from '../../../ui/Button'
import TwitterIco from '../../../../assets/images/twitter.svg'
import './style.scss'
const Information = () => {
  return (
    <div className="information">
      <div className="information-Numbers">
        <h1>
          <span className="accent-Green-Text">350 +</span>{' '}
          <span className="accent-Blue-Text">Woloxers</span>
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
      <div className="information-Paragraph">
        <h1>Trabajamos para</h1>
        <h1>
          <span className="accent-Blue-Text">convertir</span>{' '}
          <span className="accent-Green-Text">ideas</span> en
        </h1>
        <h1>productos.</h1>
      </div>
    </div>
  )
}

export default Information
