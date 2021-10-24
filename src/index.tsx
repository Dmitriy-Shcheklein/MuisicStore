import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SnackbarProvider } from "notistack";
import { Normalize } from 'styled-normalize'

import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import { MyContext } from './Context/context';
import { Service } from './service/Service';

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
          <ApolloProvider client={client}>
            <SnackbarProvider maxSnack={3}>
              <Normalize />
              <App />
            </SnackbarProvider>
          </ApolloProvider>
        </BrowserRouter>
      </MyContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);