import React from 'react'
import './SortingGroup.css'

function SortingGroup({ handleOnClickOrderBy, orderBy }) {
  return (
    <div>
      {/* <span>Ordenar:</span>
      <button
        className="button button-clear"
        onClick={() => handleOnClickOrderBy('A-Z')}
      >
        A-Z
      </button> */}
      <label for="orderByField">Ordenar por:</label>
      <select id="orderByField" value={orderBy} onChange={handleOnClickOrderBy}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="100 a 0">100 a 0</option>
        <option value="0 a 100">0 a 100</option>
      </select>
      {/* <button
        className="button button-clear"
        onClick={() => handleOnClickOrderBy('Z-A')}
      >
        Z-A
      </button>
      <button
        className="button button-clear"
        onClick={() => handleOnClickOrderBy('100-0')}
      >
        100 a 0
      </button>
      <button
        className="button button-clear"
        onClick={() => handleOnClickOrderBy('0-100')}
      >
        0 a 100
      </button> */}
      <br />
      <br />
    </div>
  )
}

export default SortingGroup
