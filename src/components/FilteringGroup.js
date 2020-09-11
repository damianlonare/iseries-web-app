import React, { useState } from 'react'
import './FilteringGroup.css'

function FilteringGroup({ filterBy, handleOnClickFilterBy }) {
  function translateFilterBy() {
    if (filterBy === 'popular') {
      return 'Populares'
    }
    if (filterBy === 'top_rated') {
      return 'Mejor valoradas'
    }
    if (filterBy === 'on_the_air') {
      return 'Al aire'
    }
  }

  return (
    <div className="btn-menu-group">
      <button onClick={() => handleOnClickFilterBy('popular')}>
        Populares
      </button>
      <button onClick={() => handleOnClickFilterBy('top_rated')}>
        Mejor valoradas
      </button>
      <button onClick={() => handleOnClickFilterBy('on_the_air')}>
        Mas vistas
      </button>
      <p>Seleccionado: {translateFilterBy()}</p>
    </div>
  )
}

export default FilteringGroup
