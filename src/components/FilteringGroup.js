import React from 'react'
import './FilteringGroup.css'

import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

function FilteringGroup({ filterBy, handleOnClickFilterBy }) {
  const classes = useStyles()

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Filtrar por</InputLabel>
      <Select native value={filterBy} onChange={handleOnClickFilterBy}>
        <option value="popular">Populares</option>
        <option value="top_rated">Mejores calificados</option>
        <option value="on_the_air">Al aire</option>
      </Select>
    </FormControl>
  )
}

export default FilteringGroup
