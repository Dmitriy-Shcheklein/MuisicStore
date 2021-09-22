import { Redirect, Route, Switch } from "react-router";
import Menu from '../Menu';
import AlbumsListContainer from "../AlbumsList";
import { makeStyles } from '@material-ui/styles';
import CartContainer from "../Cart";
import MainPage from "../MainPage";


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
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;