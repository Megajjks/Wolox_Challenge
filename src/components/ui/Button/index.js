import { useHistory } from 'react-router-dom'
import './style.scss'
const Button = ({ type, title, url }) => {
  const history = useHistory()

  const redirect = (title) => () => {
    history.push(title)
  }

  return (
    <button
      className={type === 'secundary' ? 'Button-Secundary' : 'Button-Primary'}
      onClick={redirect(url)}
    >
      {title}
    </button>
  )
}

export default Button
