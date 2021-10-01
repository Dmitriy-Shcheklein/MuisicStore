import { Redirect, Route, Switch } from "react-router-dom";
import Menu from '../Menu';
import AlbumsListContainer from "../AlbumsList";
import { makeStyles } from '@material-ui/styles';
import CartContainer from "../Cart";
import MainPage from "../MainPage";
import RegistrationForm from "../RegistrationForm";
import Profile from "../Profile";
import AuthForm from "../AuthForm";

const useStyles = makeStyles({
  root: {
    fontFamily: 'Roboto'
  }
})

const App = () => {

  const classes = useStyles();

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