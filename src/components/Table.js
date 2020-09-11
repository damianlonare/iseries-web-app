import React from 'react'
import './Table.css'

function Table({
  series,
  handleOnClickSerie,
  handleOnClickIsFavorited,
  favoritedSeriesList,
  handleOnClickIsNotFavorited,
}) {
  const tableItems = series.map((s) => (
    <tr role="row" key={s.id}>
      <td
        className="text--center"
        role="cell"
        data-testid={`serieTitle${s.id}`}
        onClick={() => handleOnClickSerie(s)}
      >
        {s.name}
      </td>
      <td role="cell">
        <img
          className="Table__poster-img"
          alt="Poster Img"
          src={`https://image.tmdb.org/t/p/w500` + s.poster_path}
        />
      </td>
      <td className="text--center" role="cell">
        {s.vote_average}
      </td>
      <td role="cell">
        {isFavorited(s) ? (
          <button
            class="button button-clear"
            data-testid={s.id}
            onClick={() => handleOnClickIsNotFavorited(s)}
          >
            Es favorito
          </button>
        ) : (
          <button
            class="button button-clear"
            data-testid={s.id}
            onClick={() => handleOnClickIsFavorited(s)}
          >
            No es favorito
          </button>
        )}
      </td>
    </tr>
  ))

  function isFavorited(serie) {
    const alreadyAdded = favoritedSeriesList.find((fs) => {
      return serie.id === fs.id
    })
    return !!alreadyAdded
  }

  return (
    <table role="table">
      <thead>
        <tr role="row">
          <th>Nombre</th>
          <th>Poster</th>
          <th>Puntuación</th>
          <th>Favoritos</th>
        </tr>
      </thead>
      <tbody>{tableItems}</tbody>
    </table>
  )
}

export default Table
