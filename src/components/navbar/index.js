import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1
  }
}
function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h4" color="inherit">
          Serverless WebApp powered by AppSync
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(NavBar)
