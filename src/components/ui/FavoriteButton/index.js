import './style.scss'
const FavoriteButton = ({ onClick, checked }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} readOnly hidden />
      <div className="heart-sprites" onClick={onClick}></div>
    </label>
  )
}

export default FavoriteButton
