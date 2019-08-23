import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from '../__mocks__/axios';
import * as actions from './actions';
import * as types from './actionTypes';
import bookResponse from '../__mocks__/bookResponse';
import BookstoreService from '../services/BookstoreService';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const bookstoreService = new BookstoreService(mockAxios);

describe('fetchBooks actions', () => {
  it('creates FETCH_BOOKS_SUCCESS after successfully fetching books', () => {
    // Arrange
    const mockApiServiceGet = jest.fn(
      () =>
        new Promise(resolve => {
          resolve({ data: { books: bookResponse } });
        }),
    );

    mockAxios.get.mockImplementationOnce(mockApiServiceGet);

    const expectedActions = [
      { type: types.FETCH_BOOKS_REQUEST },
      { type: types.FETCH_BOOKS_SUCCESS, payload: bookResponse },
    ];

    const store = mockStore({});

    // Act

    // Assert

    return store.dispatch(actions.fetchBooks(bookstoreService)).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
