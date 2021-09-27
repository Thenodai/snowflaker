import React, { Fragment } from 'react'
import { Button, MenuItem, Menu as MuiMenu } from '@material-ui/core'
import { SNOWFLAKE_BROWNIAN, SNOWFLAKE_KOCH } from '../../config/routes'

const Menu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <Button onClick={handleClick}>
        Snowflakes
      </Button>
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem component="a" href={SNOWFLAKE_BROWNIAN.PATH} onClick={handleClose}>Brownian</MenuItem>
        <MenuItem component="a" href={SNOWFLAKE_KOCH.PATH} onClick={handleClose}>Koch</MenuItem>
      </MuiMenu>
    </Fragment>
  )
}

export default Menu
