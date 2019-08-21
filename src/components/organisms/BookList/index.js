import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import WithBookstoreService from '../../hoc/withBookstoreService';
import { fetchBooks, bookAddedToCart } from '../../../redux/actions';

import Spinner from '../../atoms/Spinner';
import ErrorIndicator from '../../atoms/ErrorIndicator';
import BookItem from '../../molecules/BookItem';

const List = styled.ul``;

const BookList = ({ books, onAddedToCart }) => {
  return (
    <List>
      {books.map(book => {
        return (
          <li key={book.isbn13}>
            <BookItem book={book} onAddedToCart={() => onAddedToCart(book.isbn13)} />
          </li>
        );
      })}
    </List>
  );
};

class BookListContainer extends Component {
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

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
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
