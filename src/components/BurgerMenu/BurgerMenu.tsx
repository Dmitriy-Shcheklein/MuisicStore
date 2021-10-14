import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

const BurgerMenu = () => {
  return (
    <IconButton edge="start" color="inherit" aria-label="menu" style={{ display: 'none' }}>
      <MenuIcon />
    </IconButton>
  )
}

export default BurgerMenu
