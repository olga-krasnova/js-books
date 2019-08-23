import updateShoppingCart, {
  updateCartItems,
  updateCartItem,
  updateCartLength,
  updateCartTotalSum,
  updateOrder,
} from './ShoppingCart';
import * as types from '../actionTypes';

describe('ShoppingCart reducer', () => {
  let mockUpdateOrder = jest.fn();

  beforeEach(() => {
    jest.resetModules();

    jest.mock('./ShoppingCart', () => ({
      updateOrder: jest.fn(),
      updateCartTotalSum: jest.fn(),
      updateCartLength: jest.fn(),
      updateCartItem: jest.fn(),
      updateCartItems: jest.fn(),
    }));
  });

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
            title: 'JavaScript Creativity',
            subtitle: 'Exploring the Modern Capabilities of JavaScript and HTML5',
            isbn13: '9781430259442',
            price: '$37.95',
            image: 'https://itbook.store/img/books/9781430259442.png',
            url: 'https://itbook.store/books/9781430259442',
          },
        ],
        orderTotal: '$75.9',
        itemsTotal: 2,
      };

      const startAction = {
        type: types.BOOK_ADDED_TO_CART,
      };

      // Act

      // Assert
      // expect(mockUpdateOrder).toHaveBeenCalled();
      expect(updateShoppingCart({}, startAction)).toEqual(actualState);
    });
  });
});
