import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { useEffect } from "react";
import { useAuthActions } from "../../hooks/useActions";

import Menu from '../Menu';
import AlbumsListContainer from "../AlbumsList";
import CartContainer from "../Cart";
import MainPage from "../MainPage";
import RegistrationForm from "../RegistrationForm";
import Profile from "../Profile";
import AuthForm from "../AuthForm";

import { AppContainer } from "../../styled/styled";

const App = () => {

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
    <AppContainer >
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
    </AppContainer>
  );
}

export default withRouter(App);