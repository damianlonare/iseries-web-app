import React, { useState } from 'react'
import './FilteringGroup.css'

function FilteringGroup({ filterBy, handleOnClickFilterBy }) {
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
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default FilteringGroup
