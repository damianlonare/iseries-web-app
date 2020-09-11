import React, { useState } from 'react'
import './Table.css'

function Table({ series, handleOnClickSerie, handleOnClickIsFavorited }) {
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
        <button data-testid={s.id} onClick={() => handleOnClickIsFavorited(s)}>
          No es favorito
        </button>
      </td>
    </tr>
  ))

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
