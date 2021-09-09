import React from 'react';
import { Route, Switch } from "react-router";
import ButtonAppBar from '../Menu';
import AlbumsList from "../AlbumsList";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Roboto'
  }
})

const App = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonAppBar />
      <Switch>
        <Route path='/albums' component={AlbumsList} />

      </Switch>
    </div>
  );
}

export default App;
