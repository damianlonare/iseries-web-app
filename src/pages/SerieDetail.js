import React, { useState, useEffect } from 'react'

function SerieDetail() {
  const [isFavorited, setIsFavorited] = useState(false)
  const [serieId, setSerieId] = useState(null)
  const [serieDetails, setSerieDetails] = useState()

  function goBackToMainScreen() {
    window.location.assign('/')
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    if (id) {
      setSerieId(params.get('id'))
    }
  }, [serieId === null])

  useEffect(() => {
    fetchApiDataForSerieDetails()
  }, [serieId !== null])

  function fetchApiDataForSerieDetails() {
    if (!serieId) return
    fetch(`${process.env.REACT_APP_API}tv/${serieId}`, {
      headers: new Headers({
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 'Bearer ' + process.env.REACT_APP_BEARER_TOKEN,
      }),
    })
      .then((res) => res.json())
      .then(
        (response) => {
          setSerieDetails(response.results)
        },
        (response) => {
          // TODO: Handle response error...
        }
      )
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
