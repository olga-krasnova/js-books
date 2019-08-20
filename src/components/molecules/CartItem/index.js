import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-left: 5px;
  margin-top: 5px;
`;

const CartItem = props => {
  const { item, index, onIncrease, onDecrease, onDelete } = props;
  const { id, title, count, total } = item;

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
      <td>
        <Button type="button" onClick={() => onDelete(id)}>
          <i className="material-icons">delete_outline</i>
        </Button>
        <Button type="button" onClick={() => onIncrease(id)}>
          <i className="material-icons">add_circle_outline</i>
        </Button>
        <Button type="button" onClick={() => onDecrease(id)}>
          <i className="material-icons">remove_circle_outline</i>
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
