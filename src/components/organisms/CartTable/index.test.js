import { mapStateToProps } from './index';

describe('CartTable', () => {
  it('should show total items in the cart', () => {
    // Arrange
    const expectedCartItems = [
      {
        title: 'Effective JavaScript',
        subtitle: '68 Specific Ways to Harness the Power of JavaScript',
        isbn13: '9780321812186',
        price: '$21.99',
        image: 'https://itbook.store/img/books/9780321812186.png',
        url: 'https://itbook.store/books/9780321812186',
      },
    ];

    const initialState = {
      shoppingCart: {
        cartItems: expectedCartItems,
        orderTotal: 1,
      },
    };

    // Assert
    expect(mapStateToProps(initialState).items).toEqual(expectedCartItems);
    expect(mapStateToProps(initialState).total).toEqual(1);
  });
});
