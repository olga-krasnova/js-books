import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ApiService from './services/ApiService';
import ApiServiceContext from './components/contexts/ApiServiceContext';
import App from './App';
import ErrorBoundry from './components/contexts/ErrorBoundry';

import store from './redux/store';

const apiService = new ApiService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ApiServiceContext.Provider value={apiService}>
        <Router>
          <App />
        </Router>
      </ApiServiceContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root'),
);
