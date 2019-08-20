import * as types from '../actionTypes';

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.isbn13, count = 0, title = book.title, total = 0 } = item;

  const totalPrice = book.price.slice(1);

  return {
    id,
    title,
    count: count + quantity,
    total: +(total + quantity * totalPrice).toFixed(10),
  };
};

const updateCartLength = cartItems => {
  let res = 0;
  cartItems.forEach(item => {
    res += item.count;
  });
  return res;
};

const updateCartTotalSum = cartItems => {
  let res = 0;
  cartItems.forEach(item => {
    res += item.total;
  });
  return +res.toFixed(10);
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;
  const book = books.find(({ isbn13 }) => isbn13 === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);
  const items = updateCartItems(cartItems, newItem, itemIndex);

  return {
    orderTotal: updateCartTotalSum(items),
    cartItems: items,
    itemsTotal: updateCartLength(items),
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      itemsTotal: 0,
    };
  }

  switch (action.type) {
    case types.BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case types.BOOK_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);

    case types.ALL_BOOKS_REMOVED_FROM_CART: {
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    }

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
