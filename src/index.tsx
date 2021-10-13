import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SnackbarProvider } from "notistack";

import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import { MyContext } from './Context/context';
import { Service } from './service/Service';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

const service = new Service();

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
  cache: new InMemoryCache()
})


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <MyContext.Provider value={service}>
        <BrowserRouter>
          <ScopedCssBaseline>
            <ApolloProvider client={client}>
              <SnackbarProvider maxSnack={3}>
                <App />
              </SnackbarProvider>
            </ApolloProvider>
          </ScopedCssBaseline>
        </BrowserRouter>
      </MyContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);