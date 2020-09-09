import React, { useState } from 'react'
import './Table.css'

function Table({ serieSelected }) {
  const [series, setSeries] = useState([
    {
      id: 1,
      name: 'Parasite',
      posterImg: 'Poster img',
      rating: 4,
      isFavorited: false,
    },
    {
      id: 2,
      name: 'Parasite',
      posterImg: 'Poster img',
      rating: 4,
      isFavorited: false,
    },
    {
      id: 3,
      name: 'Parasite',
      posterImg: 'Poster img',
      rating: 4,
      isFavorited: false,
    },
    {
      id: 4,
      name: 'Parasite',
      posterImg: 'Poster img',
      rating: 4,
      isFavorited: false,
    },
  ])

  const tableItems = series.map((s) => (
    <tr role="row" key={s.id}>
      <td
        role="cell"
        data-testid={`serieTitle${s.id}`}
        onClick={() => serieSelected(s.id)}
      >
        {s.name}
      </td>
      <td role="cell">
        <img alt="Poster Img" />
      </td>
      <td role="cell">{s.rating}</td>
      <td role="cell">
        <button
          data-testid={s.id}
          onClick={() => handleOnClickIsFavorited(s.id)}
        >
          {s.isFavorited ? 'Es favorito' : 'No es favorito'}
        </button>
      </td>
    </tr>
  ))

  function handleOnClickIsFavorited(id) {
    console.log('handleOnClick')
    const newSeries = series.map((serie) => {
      if (serie.id === id) {
        const updatedSerie = {
          ...serie,
          isFavorited: !serie.isFavorited,
        }

        return updatedSerie
      }

      return serie
    })

    setSeries(newSeries)
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
