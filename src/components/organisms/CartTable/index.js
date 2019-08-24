import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../../redux/actions';
import CartItem from '../../molecules/CartItem';

const CartWrapper = styled.div`
  margin-top: 45px;
`;

const Table = styled.table`
  margin-top: 20px;
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  thead td,
  th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    padding: 0.75rem;
  }

  tbody td {
    padding: 0.75rem;
    border-bottom: 1px solid #dee2e6;
  }
`;

const Summary = styled.div`
  text-align: right;
  font-size: 20px;
  margin-right: 15px;
  margin-top: 25px;
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

export const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
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
