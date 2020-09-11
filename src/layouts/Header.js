import React from 'react'
import './Header.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">iSeries</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
