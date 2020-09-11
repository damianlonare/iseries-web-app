import React from 'react'
import './Table.css'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  table: {
    minWidth: 650,
  },
}))

function MyTable({
  series,
  handleOnClickSerie,
  handleOnClickIsFavorited,
  favoritedSeriesList,
  handleOnClickIsNotFavorited,
}) {
  const classes = useStyles()

  const tableItems = series.map((s) => (
    <tr role="row" key={s.id}>
      <td
        role="cell"
        data-testid={`serieTitle${s.id}`}
        onClick={() => handleOnClickSerie(s)}
      >
        {s.name}
      </td>
      <td role="cell">
        <img
          alt="Poster Img"
          src={`https://image.tmdb.org/t/p/w500` + s.poster_path}
        />
      </td>
      <td role="cell">{s.vote_average}</td>
      <td role="cell">
        {isFavorited(s) ? (
          <button
            className="button button-clear"
            data-testid={s.id}
            onClick={() => handleOnClickIsNotFavorited(s)}
          >
            Es favorito
          </button>
        ) : (
          <button
            className="button button-clear"
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
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Poster</TableCell>
            <TableCell align="right">Puntuación</TableCell>
            <TableCell align="right">Favoritos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {series.map((s) => (
            <TableRow key={s.id}>
              <TableCell component="th" scope="row">
                {s.name}
              </TableCell>
              <TableCell align="right">
                <img
                  alt="Poster Img"
                  class="Table__img"
                  src={`https://image.tmdb.org/t/p/w500` + s.poster_path}
                />
              </TableCell>
              <TableCell align="right">{s.vote_average}</TableCell>
              <TableCell align="right">
                {isFavorited(s) ? (
                  // <button
                  //   className="button button-clear"
                  //   data-testid={s.id}
                  //   onClick={() => handleOnClickIsNotFavorited(s)}
                  // >
                  //   Es favorito
                  // </button>
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>
                ) : (
                  // <button
                  //   className="button button-clear"
                  //   data-testid={s.id}
                  //   onClick={() => handleOnClickIsFavorited(s)}
                  // >
                  //     No es favorito
                  //   </button>
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MyTable
