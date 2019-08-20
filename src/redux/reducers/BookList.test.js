import updateBookList from './BookList';
import * as types from '../actionTypes';
import bookResponse from '../../__mocks__/bookResponse';

describe('BookList reducer', () => {
  const initialState = {
    books: [],
    loading: false,
    error: null,
  };

  it('should return the initial state', () => {
    expect(updateBookList(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_BOOKS_REQUEST', () => {
    // Arrange
    const actualState = {
      books: [],
      loading: true,
      error: null,
    };

    const startAction = {
      type: types.FETCH_BOOKS_REQUEST
    };
    // Act
    // Assert
    expect(updateBookList({}, startAction)).toEqual(actualState);
  });

  it('should handle FETCH_BOOKS_SUCCESS', () => {
    // Arrange
    const actualState = {
      books: bookResponse,
      loading: false,
      error: null,
    };

    const successAction = {
      type: types.FETCH_BOOKS_SUCCESS,
      payload: bookResponse
    };

    // Act
    // Assert
    expect(updateBookList({}, successAction)).toEqual(actualState);
  });

  it('should handle FETCH_BOOKS_FAILURE', () => {
    // Arrange
    const actualState = {
      books: [],
      loading: false,
      error: true,
    };

    const failAction = {
      type: types.FETCH_BOOKS_FAILURE
    };

    // Act
    // Assert
    expect(updateBookList({}, failAction)).toEqual(actualState);
  });
});
