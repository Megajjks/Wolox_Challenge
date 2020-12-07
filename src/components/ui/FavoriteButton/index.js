import './style.scss'
import PropTypes from 'prop-types'
const FavoriteButton = ({ onClick, checked }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} readOnly hidden />
      <div className="heart-sprites" onClick={onClick}></div>
    </label>
  )
}

FavoriteButton.propType = {
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
}

export default FavoriteButton
