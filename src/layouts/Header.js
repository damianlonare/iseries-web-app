import React from 'react'
import './Header.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Toolbar'

function Header() {
  return (
    <AppBar position="static">
      <Typography variant="h6" className={classes.title}>
        iSeries
      </Typography>
    </AppBar>
  )
}

export default Header
