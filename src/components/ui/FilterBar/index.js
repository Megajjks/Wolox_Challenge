import './style.scss'
import { typesTech, sortTech } from '../../../helpers'

const FilterBar = () => {
  return (
    <div className="filter-wrapper">
      <input type="text" placeholder="Buscar por titulo" name="filterName" />
      <div className="select-wrapper">
        <select name="filterType">
          {typesTech.map((type, idx) => (
            <option key={idx} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        <select name="filterName">
          {sortTech.map((tech, idx) => (
            <option key={idx} value={tech.value}>
              {tech.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterBar
