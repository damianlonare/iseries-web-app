import React from 'react'
import './SortingGroup.css'

function SortingGroup({ handleOnClickOrderBy, orderBy }) {
  return (
    <div className="SortingGroup">
      <label for="orderByField">Ordenar por:</label>
      <select id="orderByField" value={orderBy} onChange={handleOnClickOrderBy}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="100 a 0">100 a 0</option>
        <option value="0 a 100">0 a 100</option>
      </select>
    </div>
  )
}

export default SortingGroup
