import React from 'react';
import { IconButton } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';


const BurgerMenu = () => {
  return (
    <IconButton edge="start" color="inherit" aria-label="menu" style={{ display: 'none' }}>
      <MenuIcon />
    </IconButton>
  )
}

export default BurgerMenu
