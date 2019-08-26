import updateShoppingCart from './ShoppingCart';
import bookResponse from '../../__mocks__/bookResponse';
import * as types from '../actionTypes';

describe('ShoppingCart reducer', () => {
  describe('Update ShoppingCart', () => {
    const initialState = {
      cartItems: [],
      orderTotal: 0,
      itemsTotal: 0,
    };

    it('should return the initial state', () => {
      expect(updateShoppingCart(undefined, {})).toEqual(initialState);
    });

    it('should handle BOOK_ADDED_TO_CART', () => {
      // Arrange
      const actualState = {
        cartItems: [
          {
            count: 1,
            id: bookResponse[2].isbn13,
            title: bookResponse[2].title,
            total: 6.68,
          },
        ],
        orderTotal: 6.68,
        itemsTotal: 1,
      };

      const expectedState = {
        bookList: { books: bookResponse },
        shoppingCart: { cartItems: [] },
      };

      const expectedAction = {
        type: types.BOOK_ADDED_TO_CART,
        payload: bookResponse[2].isbn13,
      };

      // Act

      // Assert
      expect(updateShoppingCart(expectedState, expectedAction)).toEqual(actualState);
    });

    it('should handle BOOK_REMOVED_FROM_CART', () => {
      // Arrange
      const expectedState = {
        bookList: { books: bookResponse },
        shoppingCart: {
          cartItems: [
            {
              count: 1,
              id: bookResponse[2].isbn13,
              title: bookResponse[2].title,
              total: 6.68,
            },
          ],
          orderTotal: 6.68,
          itemsTotal: 1,
        },
      };

      const expectedAction = {
        type: types.BOOK_REMOVED_FROM_CART,
        payload: bookResponse[2].isbn13,
      };

      const actualState = {
        cartItems: [],
        orderTotal: 0,
        itemsTotal: 0,
      };

      // Act

      // Assert
      expect(updateShoppingCart(expectedState, expectedAction)).toEqual(actualState);
    });

    it('should handle ALL_BOOKS_REMOVED_FROM_CART', () => {
      // Arrange
      const expectedState = {
        bookList: { books: bookResponse },
        shoppingCart: {
          cartItems: [
            {
              count: 2,
              id: bookResponse[2].isbn13,
              title: bookResponse[2].title,
              total: 6.68,
            },
          ],
          orderTotal: 13.36,
          itemsTotal: 2,
        },
      };

      const expectedAction = {
        type: types.ALL_BOOKS_REMOVED_FROM_CART,
        payload: bookResponse[2].isbn13,
      };

      const actualState = {
        cartItems: [],
        orderTotal: 0,
        itemsTotal: 0,
      };

      // Act

      // Assert
      expect(updateShoppingCart(expectedState, expectedAction)).toEqual(actualState);
    });
  });
});
