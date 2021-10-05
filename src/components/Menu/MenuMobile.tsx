import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { Badge, Box, Container } from '@material-ui/core';

import useTypeSelector from '../../hooks/usetypeSelector';
import LoginModal from '../LoginModal';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    position: 'sticky',
    top: '0',
    zIndex: 99,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cart: {
    color: '#ffffff',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    margin: '0 10px',
    '&:hover': {
      color: '#848482'
    }
  },
  box: {
    display: 'flex',
    alignItems: 'center'
  }
});

const Menu = () => {
  const classes = useStyles();
  const { cartList } = useTypeSelector(state => state.albums);

  const count = cartList.reduce((accum, item) => accum + item.count, 0)

  return (

    <AppBar >
      <Container className={classes.root}>
        <Box className={classes.box}>
          <Box>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Box>
          <Box>
            <Typography variant="h6" >
              <NavLink to='/' className={classes.link}>MusicStore</NavLink>
              <NavLink to='/albums' className={classes.link}>Albums</NavLink>
              <NavLink to='/profile' className={classes.link}>My account</NavLink>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.box}>
          <Box>
            <LoginModal />
          </Box>
          <Box>
            <NavLink to='/cart'>
              <Button>
                <Badge badgeContent={count} color="secondary">
                  <ShoppingCartIcon className={classes.cart} />
                </Badge>
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Container>
    </AppBar >

  );
}

export default Menu;
