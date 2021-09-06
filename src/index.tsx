import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom'
import { MyContext } from './Context/context';
import { Service } from './service/Service';

const service = new Service();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <MyContext.Provider value={service}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MyContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);