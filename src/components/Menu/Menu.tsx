import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import useTypeSelector from '../../hooks/usetypeSelector';
import { useAuthActions } from '../../hooks/useActions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'sticky',
      top: '0'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
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
    }
  }),
);

export default function Menu() {
  const classes = useStyles();
  const { cartList } = useTypeSelector(state => state.albums);

  const count = cartList.reduce((accum, item) => accum + item.count, 0)

  const { userLogin, userLogout } = useAuthActions();

  const { login } = useTypeSelector(state => state.auth)

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLink to='/' className={classes.link}>MusicStore</NavLink>
            <NavLink to='/albums' className={classes.link}>Albums</NavLink>
          </Typography>
          {!login && (<Button
            onClick={userLogin}
            color="inherit">Login</Button>)}
          {
            login && (<Button
              onClick={userLogout}
              color="inherit">LogOut</Button>)
          }
          <NavLink to='/cart'>
            <Button>
              <Badge badgeContent={count} color="secondary">
                <ShoppingCartIcon className={classes.cart} />
              </Badge>
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </header>
  );
}
