import React, { Fragment } from 'react'
import { Button, MenuItem, Menu as MuiMenu } from '@material-ui/core'
import routesConfig from '../../config/routes'

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
      <MenuItem component="a" href="/">Home</MenuItem>
      {Object.keys(routesConfig).map((routeDomain, index) => (
        <Button onClick={handleClick} id={routeDomain} key={index}>
          {routeDomain}
        </Button>
      ))}
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {Object.entries(routesConfig).map(([index, route]) => {
          if (!anchorEl || anchorEl.id !== index) {
            return;
          }
          return route.map((r, index) => (
            <MenuItem key={index} component="a" href={r.path} onClick={handleClose}>{r.name}</MenuItem>
          ))
        })}
      </MuiMenu>
    </Fragment>
  )
}

export default Menu
