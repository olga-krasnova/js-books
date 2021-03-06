import * as types from '../actionTypes';

const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: false,
      error: false,
    };
  }

  switch (action.type) {
    case types.FETCH_BOOKS_REQUEST:
      return {
        books: [],
        loading: true,
        error: false,
      };

    case types.FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: false,
      };

    case types.FETCH_BOOKS_FAILURE:
      return {
        books: [],
        loading: false,
        error: true,
      };

    default:
      return state.bookList;
  }
};

export default updateBookList;
