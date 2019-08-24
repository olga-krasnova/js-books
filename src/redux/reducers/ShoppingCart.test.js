import updateShoppingCart from './ShoppingCart';
import bookResponse from '../../__mocks__/bookResponse';

describe('ShoppingCart reducer', () => {
  let mockUpdateOrder;

  const state = {
    bookList: {
      books: bookResponse,
      loading: false,
      error: null,
    },
    shoppingCart: {
      cartItems: [],
      orderTotal: 0,
      itemsTotal: 0,
    }
  };

  beforeEach(() => {
    jest.resetModules();

    mockUpdateOrder = jest.fn(state, 9781430259442, 1);

    jest.mock('./ShoppingCart', () => ({
      updateOrder: mockUpdateOrder
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
      // const actualState = {
      //   cartItems: [
      //     {
      //       title: 'JavaScript Creativity',
      //       subtitle: 'Exploring the Modern Capabilities of JavaScript and HTML5',
      //       isbn13: '9781430259442',
      //       price: '$37.95',
      //       image: 'https://itbook.store/img/books/9781430259442.png',
      //       url: 'https://itbook.store/books/9781430259442',
      //     },
      //   ],
      //   orderTotal: '$75.9',
      //   itemsTotal: 2,
      // };
      //
      // const startAction = {
      //   type: types.BOOK_ADDED_TO_CART,
      // };

      // const mockUpdateOrder = jest.fn(state, 9781430259442, 1);
      // Act

      // Assert
      // expect(mockUpdateOrder).toHaveBeenCalled();
      // expect(updateShoppingCart({}, startAction)).toEqual(actualState);
    });
  });
});
