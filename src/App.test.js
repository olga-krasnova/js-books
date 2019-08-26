import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, wait } from '@testing-library/react';
import reducer from './redux/reducers/reducer';
import App from './App';
import BookstoreService from './services/BookstoreService';
import BookstoreServiceContext from './components/contexts/BookstoreServiceContext';
import bookResponse from './__mocks__/bookResponse';
import mockAxios from './__mocks__/axios';

const bookstoreService = new BookstoreService(mockAxios);
let mockFetchBooks;

const initialState = {
  bookList: {
    books: [],
    isLoading: false,
    error: false,
  },
  shoppingCart: {
    cartItems: [],
    orderTotal: 0,
    itemsTotal: 0,
  },
};

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    store = createStore(
      reducer,
      initialState,
      applyMiddleware(thunk.withExtraArgument({ fetchBooks: mockFetchBooks })),
    ),
    ...options
  } = {},
) {
  return {
    ...render(
      <Provider store={store}>
        <BookstoreServiceContext.Provider value={bookstoreService}>
          <Router history={history}>{ui}</Router>
        </BookstoreServiceContext.Provider>
      </Provider>,
      options,
    ),
    history,
    store,
  };
}

describe('App Router test', () => {
  test('should show BookList on home page', async () => {
    // Arrange
    const route = '/';

    mockFetchBooks = jest.fn();
    const mockApiServiceGet = jest.fn(
      () =>
        new Promise(resolve => {
          resolve({ data: { books: bookResponse } });
        }),
    );

    mockAxios.get.mockImplementation(mockApiServiceGet);

    // Act
    const { getByTestId } = await renderWithRouter(<App />, { route });
    const bookList = getByTestId('test-book-list');

    // Assert
    await wait(() => {
      expect(bookList).toMatchSnapshot();
    });
  });

  test('should show ShoppingCartTable on /cart', () => {
    // Arrange
    const route = '/cart';

    // Act
    const { getByTestId } = renderWithRouter(<App />, { route });
    const cartTable = getByTestId('test-cart-table');

    // Assert
    expect(cartTable).toMatchSnapshot();
  });
});
