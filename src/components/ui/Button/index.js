import { useHistory } from 'react-router-dom'
import './style.scss'
const Button = ({ type, title, url, colortxt, typeRedirect, isDisabled }) => {
  const history = useHistory()

  const redirect = (title) => () => {
    if (typeRedirect === 'outside') return (location.href = url)
    history.push(title)
  }

  return (
    <button
      className={type === 'secundary' ? 'button-Secundary' : 'button-Primary'}
      onClick={redirect(url)}
      style={colortxt && { color: colortxt }}
      disabled={isDisabled}
    >
      {title}
    </button>
  )
}

export default Button
