import { Route, Switch } from "react-router";
import Menu from '../Menu';
import AlbumsList from "../AlbumsList";
import { makeStyles } from '@material-ui/styles';
import Cart from "../Cart";


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
        <Route path='/albums' component={AlbumsList} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
