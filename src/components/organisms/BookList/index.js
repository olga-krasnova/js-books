import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithBookstoreService from '../../hoc/withBookstoreService';
import { fetchBooks, bookAddedToCart } from '../../../redux/actions';

import Spinner from '../../atoms/Spinner';
import ErrorIndicator from '../../atoms/ErrorIndicator';
import BookItem from '../../molecules/BookItem';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul>
      {books.map(book => {
        return (
          <li key={book.isbn13}>
            <BookItem book={book} onAddedToCart={() => onAddedToCart(book.isbn13)} />
          </li>
        );
      })}
    </ul>
  );
};

export class BookListContainer extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

export const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

export const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    getBooks: () => dispatch(fetchBooks(bookstoreService)),
    onAddedToCart: id => dispatch(bookAddedToCart(id)),
  };
};

export default WithBookstoreService()(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(BookListContainer),
);
