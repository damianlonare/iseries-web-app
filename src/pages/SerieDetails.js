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
    <div className="max-width">
      {serieDetails ? (
        <div className="max-width">
          <div className="container">
            <div className="row">
              <div className="column SerieDetails__poster-container">
                <img
                  alt="poster"
                  className="SerieDetails__poster-img"
                  src={
                    `https://image.tmdb.org/t/p/w500` + serieDetails.poster_path
                  }
                />
              </div>
              <div className="column">
                <h2 className="SerieDetails__title">{serieDetails.name}</h2>
              </div>
              {isFavorited(serieDetails) ? (
                <div className="column flex">
                  <div className="flex justify-content-center">
                    <button
                      className="mb-2"
                      data-testid={serieDetails.id}
                      onClick={() => handleOnClickIsNotFavorited(serieDetails)}
                    >
                      Es favorito
                    </button>
                  </div>
                </div>
              ) : (
                <div className="column flex self-center">
                  <div className="flex justify-content-center">
                    <button
                      data-testid={serieDetails.id}
                      onClick={() => handleOnClickIsFavorited(serieDetails)}
                    >
                      No es favorito
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="row mt-2">
              <p className="column SerieDetails__description">
                {serieDetails.overview}
              </p>
            </div>
            <div className="row mt-2">
              Generos:{' '}
              {serieDetails.genres.map((g) => (
                <p key={g.id}>{g.name}, </p>
              ))}
              <p className="column">Popularidad: {serieDetails.popularity}</p>
              <p className="column">
                Promedio de votaciones: {serieDetails.vote_average}
              </p>
            </div>
            <div className="row">
              <button class="button button-clear" onClick={goBackToMainScreen}>
                Regresar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No se encontró :(</p>
      )}
    </div>
  )
}

export default SerieDetails
