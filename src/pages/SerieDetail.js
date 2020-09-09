import React, { useState } from 'react'

function SerieDetail() {
  const [isFavorited, setIsFavorited] = useState(false)

  function goBackToMainScreen() {
    window.location.assign('/')
  }

  return (
    <div>
      <img alt="poster" />
      <h1>Detalle</h1>
      <p>Descripción</p>
      <p>Genero</p>
      <p>Duración</p>
      {!isFavorited ? (
        <button onClick={() => setIsFavorited(true)}>No es favorito</button>
      ) : (
        <button onClick={() => setIsFavorited(false)}>Es favorito</button>
      )}
      <button onClick={goBackToMainScreen}>Regresar</button>
    </div>
  )
}

export default SerieDetail
