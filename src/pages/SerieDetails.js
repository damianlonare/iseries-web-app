import React, { useState, useEffect } from 'react'
import './SerieDetails.css'

function SerieDetails({
  resetGotToDetails,
  favoritedSeriesList,
  handleOnClickIsFavorited,
  handleOnClickIsNotFavorited,
}) {
  const [serieId, setSerieId] = useState(null)
  const [serieDetails, setSerieDetails] = useState(null)

  function goBackToMainScreen() {
    resetGotToDetails()
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

  useEffect(() => {
    window.onpopstate = (e) => {
      const params = new URLSearchParams(window.location.search)
      const id = params.get('id')

      if (id && id !== serieId) {
        setSerieId(id)
      } else {
        resetGotToDetails()
      }
    }
  })

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
          setSerieDetails(response)
        },
        (response) => {
          // TODO: Handle response error...
        }
      )
  }

  function isFavorited(serie) {
    const alreadyAdded = favoritedSeriesList.find((fs) => {
      return serie.id === fs.id
    })
    return !!alreadyAdded
  }

  return (
    <div>
      {serieDetails ? (
        <div>
          <img
            alt="poster"
            className="SerieDetails__poster-img"
            src={`https://image.tmdb.org/t/p/w500` + serieDetails.poster_path}
          />
          <h2>{serieDetails.name}</h2>
          {isFavorited(serieDetails) ? (
            <button
              data-testid={serieDetails.id}
              onClick={() => handleOnClickIsNotFavorited(serieDetails)}
            >
              Es favorito
            </button>
          ) : (
            <button
              data-testid={serieDetails.id}
              onClick={() => handleOnClickIsFavorited(serieDetails)}
            >
              No es favorito
            </button>
          )}
          <p>{serieDetails.overview}</p>
          {serieDetails.genres.map((g) => (
            <p key={g.id}>{g.name}</p>
          ))}
          {/* <p>Genero</p> */}
          <p>Popularidad: {serieDetails.popularity}</p>
          <p>Promedio de votaciones: {serieDetails.vote_average}</p>
          <button onClick={goBackToMainScreen}>Regresar</button>
        </div>
      ) : (
        <p>No se encontró :(</p>
      )}
    </div>
  )
}

export default SerieDetails
