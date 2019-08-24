import { mapStateToProps } from './index';

describe('Header', () => {
  it('should show 0 total items in the cart', () => {
    const initialState = {
      shoppingCart: {
        itemsTotal: 0
      }
    };

    expect(mapStateToProps(initialState).totalItems).toEqual(0);
  });
});
