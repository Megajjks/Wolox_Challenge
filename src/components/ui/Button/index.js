import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
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

Button.propType = {
  type: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  colortxt: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button
