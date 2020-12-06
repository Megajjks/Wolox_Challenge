import { useContext, useEffect } from 'react'
import TechnologiesContext from '../../context/Technologies/TechnologiesContext'
import { typesTech, sortTech } from '../../../helpers'
import './style.scss'

const FilterBar = () => {
  const teachnologiesContext = useContext(TechnologiesContext)
  const {
    filterParams,
    updateQuery,
    filterByName,
    filterByType,
    orderTechnologies,
    resetFilterData,
  } = teachnologiesContext

  useEffect(() => {
    if (
      filterParams.filterName === '' ||
      filterParams.filterType === '' ||
      filterParams.filterSort === ''
    ) {
      resetFilterData()
    }
    if (filterParams.filterName !== '') {
      filterByName()
    }
    if (filterParams.filterType !== '') {
      filterByType()
    }
    if (filterParams.filterSort !== '') {
      orderTechnologies()
    }
  }, [
    filterParams.filterName,
    filterParams.filterType,
    filterParams.filterSort,
  ])

  return (
    <div className="filter-wrapper">
      <input
        className="input-filter"
        type="text"
        placeholder="Buscar por titulo"
        name="filterName"
        value={filterParams.filterName}
        onChange={updateQuery}
      />
      <div className="select-wrapper">
        <select
          className="select-filter"
          name="filterType"
          value={filterParams.filterType}
          onChange={updateQuery}
        >
          {typesTech.map((type, idx) => (
            <option key={idx} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        <select
          className="select-filter"
          name="filterSort"
          value={filterParams.filterSort}
          onChange={updateQuery}
        >
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
