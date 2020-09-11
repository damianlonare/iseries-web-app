import React from 'react'
import './SortingGroup.css'

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

function SortingGroup({ handleOnClickOrderBy, orderBy }) {
  const classes = useStyles()

  return (
    /* <label htmlFor="orderByField">Ordenar por:</label>
      <select id="orderByField" value={orderBy} onChange={handleOnClickOrderBy}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="100 a 0">100 a 0</option>
        <option value="0 a 100">0 a 100</option>
      </select> */
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Ordenar por</InputLabel>
      <Select native value={orderBy} onChange={handleOnClickOrderBy}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="100 a 0">100 a 0</option>
        <option value="0 a 100">0 a 100</option>
      </Select>
    </FormControl>
  )
}

export default SortingGroup
