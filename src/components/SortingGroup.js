import React, { useState } from 'react'
import './SortingGroup.css'

function SortingGroup({ handleOnClickOrderBy, orderBy }) {
  return (
    <div>
      <p>Ordenar:</p>
      <span>Alfabéticamente:</span>
      {/* TODO: QUITAR, SE AGREGÓ SOLO PARA AYUDAR A ENTENDER MEJOR 
        ANTES DE LA IMPLEMENTACIÓN DE DISEÑO FINAL */}
      &nbsp;
      <button onClick={() => handleOnClickOrderBy('A-Z')}>A-Z</button>
      <button onClick={() => handleOnClickOrderBy('Z-A')}>Z-A</button>
      {/* TODO: QUITAR, SE AGREGÓ SOLO PARA AYUDAR A ENTENDER MEJOR 
        ANTES DE LA IMPLEMENTACIÓN DE DISEÑO FINAL */}
      &nbsp;
      <span>o por puntuación:</span>
      {/* TODO: QUITAR, SE AGREGÓ SOLO PARA AYUDAR A ENTENDER MEJOR 
        ANTES DE LA IMPLEMENTACIÓN DE DISEÑO FINAL */}
      &nbsp;
      <button onClick={() => handleOnClickOrderBy('5 a 0')}>5 a 0</button>
      <button onClick={() => handleOnClickOrderBy('0 a 5')}>0 a 5</button>
      {/* TODO: QUITAR, SE AGREGÓ SOLO PARA AYUDAR A ENTENDER MEJOR 
        ANTES DE LA IMPLEMENTACIÓN DE DISEÑO FINAL */}
      <br />
      <br />
      <p>Seleccionado: {orderBy}</p>
    </div>
  )
}

export default SortingGroup
