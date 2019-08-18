import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles-config/globalStyle';
import ApiService from './services/ApiService';
import BookstoreService from './services/BookstoreService';
import BookstoreServiceContext from './components/contexts/BookstoreServiceContext';
import App from './App';
import ErrorBoundry from './components/organisms/ErrorBoundry';

import store from './redux/store';

const apiService = new ApiService();
const bookstoreService = new BookstoreService(apiService);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceContext.Provider value={bookstoreService}>
        <Router>
          <GlobalStyle />
          <App />
        </Router>
      </BookstoreServiceContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root'),
);
