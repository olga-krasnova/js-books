import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../../redux/actions';
import CartItem from '../../molecules/CartItem';

const CartWrapper = styled.div`
  margin-top: 45px;
`;

const Table = styled.table``;

const Summary = styled.div`
  text-align: right;
  font-size: 1.3rem;
  margin-right: 10px;
`;

const CartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  return (
    <CartWrapper>
      <h2>Your Order</h2>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => {
            return (
              <CartItem
                key={index}
                item={item}
                index={index}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onDelete={onDelete}
              />
            );
          })}
        </tbody>
      </Table>

      <Summary>Total: ${total}</Summary>
    </CartWrapper>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartTable);
