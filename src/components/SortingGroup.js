import React from 'react'
import './SortingGroup.css'

function SortingGroup({ handleOnClickOrderBy, orderBy }) {
  return (
    <div>
      <p>Ordenar:</p>
      <button onClick={() => handleOnClickOrderBy('A-Z')}>A-Z</button>
      <button onClick={() => handleOnClickOrderBy('Z-A')}>Z-A</button>
      <button onClick={() => handleOnClickOrderBy('100-0')}>100 a 0</button>
      <button onClick={() => handleOnClickOrderBy('0-100')}>0 a 100</button>
      <br />
      <br />
    </div>
  )
}

export default SortingGroup
