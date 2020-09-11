import React, { useState } from 'react'
import './FilteringGroup.css'

function FilteringGroup({ filterBy, handleOnClickFilterBy }) {
  return (
    <div className="btn-menu-group">
      <button onClick={() => handleOnClickFilterBy('Populares')}>
        Populares
      </button>
      <button onClick={() => handleOnClickFilterBy('Mejor valoradas')}>
        Mejor valoradas
      </button>
      <button onClick={() => handleOnClickFilterBy('Mas vistas')}>
        Mas vistas
      </button>
      <p>Seleccionado: {filterBy}</p>
    </div>
  )
}

export default FilteringGroup
