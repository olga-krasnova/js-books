import React from 'react';
import { shallow } from 'enzyme';
import { BookListContainer, mapStateToProps, mapDispatchToProps } from './index';
import bookResponse from '../../../__mocks__/bookResponse';
import BookstoreService from '../../../services/BookstoreService';
import mockAxios from '../../../__mocks__/axios';

describe('BookList', () => {
  let BookListContainerComponent;
  const bookstoreService = new BookstoreService(mockAxios);

  beforeEach(() => {
    const props = {
      getBooks: jest.fn()
    };
    BookListContainerComponent = shallow(<BookListContainer {...props} />);
  });

  it('should call getBooks on componentDidMount', () => {
    // Assert
    expect(BookListContainerComponent.instance().props.getBooks).toHaveBeenCalled();
  });

  it('should show Books on HomePage after render', () => {
    // Arrange
    const expectedState = {
      books: bookResponse,
      loading: false,
      error: null
    };

    const initialState = {
      bookList: {
        books: bookResponse,
        loading: false,
        error: null
      },
    };

    // Assert
    expect(mapStateToProps(initialState)).toEqual(expectedState);
  });

  it('should call dispatch when call getBooks', () => {
    // Arrange
    const mockDispatch = jest.fn();

    // Act
    mapDispatchToProps(mockDispatch, {bookstoreService}).getBooks();

    // Assert
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call dispatch when book is added to cart', () => {
    // Arrange
    const mockDispatch = jest.fn();

    // Act
    mapDispatchToProps(mockDispatch, {bookstoreService}).onAddedToCart();

    // Assert
    expect(mockDispatch).toHaveBeenCalled();
  });
});
