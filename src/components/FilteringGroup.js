import React from 'react'
import './FilteringGroup.css'

function FilteringGroup({ filterBy, handleOnClickFilterBy }) {
  return (
    <div>
      <label for="filterByField">Filtrar por:</label>
      <select
        id="filterByField"
        value={filterBy}
        onChange={handleOnClickFilterBy}
      >
        <option value="popular">Populares</option>
        <option value="top_rated">Mejores calificadas</option>
        <option value="on_the_air">Al aire</option>
      </select>
    </div>
  )
}

export default FilteringGroup
