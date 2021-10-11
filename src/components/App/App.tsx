import { Redirect, Route, Switch } from "react-router-dom";
import Menu from '../Menu';
import AlbumsListContainer from "../AlbumsList";
import { makeStyles } from '@material-ui/styles';
import CartContainer from "../Cart";
import MainPage from "../MainPage";
import RegistrationForm from "../RegistrationForm";
import Profile from "../Profile";
import AuthForm from "../AuthForm";
import { useEffect } from "react";
import { useAuthActions } from "../../hooks/useActions";

const useStyles = makeStyles({
  root: {
    fontFamily: 'Roboto',
    minWidth: '280px',
    background: '#fafafa',
  }
})

const App = () => {

  const classes = useStyles();

  const { userLogin } = useAuthActions()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      let name = localStorage.getItem('userName')
      if (name) {
        name.slice(1, -1);
        userLogin(name);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.root}>
      <Menu />
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/albums' component={AlbumsListContainer} />
        <Route path='/cart' component={CartContainer} />
        <Route path='/registration' component={RegistrationForm} />
        <Route path='/profile' component={Profile} />
        <Route path='/auth' component={AuthForm} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;