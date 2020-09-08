import React, { useState } from 'react'
import './FilteringGroup.css'

function FilteringGroup() {
  const [btnSelected, setBtnSelected] = useState('')

  return (
    <div className="btn-menu-group">
      <button onClick={() => setBtnSelected('Populares')}>Populares</button>
      <button onClick={() => setBtnSelected('Mejor valoradas')}>
        Mejor valoradas
      </button>
      <button onClick={() => setBtnSelected('Mas vistas')}>Mas vistas</button>
      <p>Seleccionado: {btnSelected}</p>
    </div>
  )
}

export default FilteringGroup
