import * as types from './actionTypes';

const booksLoaded = (newBooks) => {
  return {
    type: types.FETCH_BOOKS_SUCCESS,
    payload: newBooks
  }
};

const booksRequested = () => {
  return {
    type: types.FETCH_BOOKS_REQUEST
  }
};

const booksError = (error) => {
  return {
    type: types.FETCH_BOOKS_FAILURE,
    payload: error
  }
};

export const bookAddedToCart = (bookId) => {
  return {
    type: types.BOOK_ADDED_TO_CART,
    payload: bookId
  }
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: types.BOOK_REMOVED_FROM_CART,
    payload: bookId
  }
};

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: types.ALL_BOOKS_REMOVED_FROM_CART,
    payload: bookId
  }
};

export const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.fetchBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)));
};
